// Copyright © 2016- 2024 Sesame Network Technology all right reserved

package business

import (
	"chatwiki/internal/app/chatwiki/common"
	"chatwiki/internal/app/chatwiki/define"
	"chatwiki/internal/pkg/lib_redis"
	"github.com/spf13/cast"
	"github.com/syyongx/php2go"
	"github.com/zhimaAi/go_tools/logs"
	"github.com/zhimaAi/go_tools/msql"
	"github.com/zhimaAi/go_tools/tool"
	"sync"
	"time"
)

var CheckFileLearnedMutex sync.Map

func ConvertPdf(msg string, _ ...string) error {
	logs.Debug(`nsq:%s`, msg)
	data := make(map[string]any)
	if err := tool.JsonDecode(msg, &data); err != nil {
		logs.Error(`parsing failure:%s/%s`, msg, err.Error())
		return nil
	}
	fileId, link := cast.ToInt(data[`file_id`]), cast.ToString(data[`file_url`])
	if fileId <= 0 || len(link) == 0 {
		logs.Error(`data exception:%s`, msg)
		return nil
	}
	if !tool.IsFile(common.GetFileByLink(link)) {
		logs.Error(`file does not exist:%s`, msg)
		return nil
	}
	info, err := common.GetLibFileInfo(fileId, 0)
	if err != nil {
		logs.Error(err.Error())
		return nil
	}
	if len(info) == 0 {
		logs.Error(`no data:%s`, msg)
		return nil
	}
	if !php2go.InArray(cast.ToInt(info[`status`]), []int{define.FileStatusInitial, define.FileStatusWaitSplit}) {
		logs.Error(`abnormal state:%s/%v`, msg, info[`status`])
		return nil
	}
	//convert pdf
	pdfUrl, err := common.ConvertToPdf(link, cast.ToInt(info[`admin_user_id`]))
	if err != nil && err.Error() == `Service Unavailable` {
		logs.Error(`service unavailable. try again in one minute:%s`, msg)
		_ = common.AddJobs(define.ConvertPdfTopic, msg, time.Minute)
		return nil
	}
	m := msql.Model(`chat_ai_library_file`, define.Postgres)
	if err != nil {
		_, err = m.Where(`id`, cast.ToString(fileId)).Update(msql.Datas{
			`status`:      define.FileStatusException,
			`errmsg`:      err.Error(),
			`update_time`: tool.Time2Int(),
		})
		if err != nil {
			logs.Error(err.Error())
		}
		//clear cached data
		lib_redis.DelCacheData(define.Redis, &common.LibFileCacheBuildHandler{FileId: fileId})
		return nil
	}
	_, err = m.Where(`id`, cast.ToString(fileId)).Update(msql.Datas{
		`pdf_url`:     pdfUrl,
		`status`:      define.FileStatusWaitSplit,
		`update_time`: tool.Time2Int(),
	})
	if err != nil {
		logs.Error(err.Error())
		return nil
	}
	//clear cached data
	lib_redis.DelCacheData(define.Redis, &common.LibFileCacheBuildHandler{FileId: fileId})
	return nil
}

func ConvertVector(msg string, _ ...string) error {
	logs.Debug(`nsq:%s`, msg)
	data := make(map[string]any)
	if err := tool.JsonDecode(msg, &data); err != nil {
		logs.Error(`parsing failure:%s/%s`, msg, err.Error())
		return nil
	}
	id, fileId := cast.ToInt(data[`id`]), cast.ToInt(data[`file_id`])
	if id <= 0 || fileId <= 0 {
		logs.Error(`data exception:%s`, msg)
		return nil
	}

	info, err := msql.Model(`chat_ai_library_file_data_index`, define.Postgres).Where(`id`, cast.ToString(id)).Find()
	if err != nil {
		logs.Error(err.Error())
		return nil
	}
	if len(info) == 0 {
		logs.Error(`no data:%s`, msg)
		return nil
	}
	if cast.ToInt(info[`status`]) != define.VectorStatusInitial {
		logs.Error(`abnormal state:%s/%v`, msg, info[`status`])
		return nil
	}
	//start convert
	library, _ := common.GetLibraryInfo(cast.ToInt(info[`library_id`]), cast.ToInt(info[`admin_user_id`]))
	embedding, err := common.GetVector2000(cast.ToInt(library[`model_config_id`]), library[`use_model`], info[`content`])
	if err != nil {
		_, err := msql.Model(`chat_ai_library_file_data_index`, define.Postgres).Where(`id`, cast.ToString(id)).Update(msql.Datas{
			`status`:      define.VectorStatusException,
			`errmsg`:      err.Error(),
			`update_time`: tool.Time2Int(),
		})
		if err != nil {
			logs.Error(err.Error())
			return nil
		}

		//check finish
		CheckFileLearned(fileId)
		return nil
	}

	_, err = msql.Model(`chat_ai_library_file_data_index`, define.Postgres).Where(`id`, cast.ToString(id)).Update(msql.Datas{
		`status`:      define.VectorStatusConverted,
		`embedding`:   embedding,
		`errmsg`:      `success`,
		`update_time`: tool.Time2Int(),
	})
	if err != nil {
		logs.Error(err.Error())
		return nil
	}

	//check finish
	CheckFileLearned(fileId)
	return nil
}

func CheckFileLearned(fileId int) {
	mtx, _ := CheckFileLearnedMutex.LoadOrStore(fileId, &sync.Mutex{})
	mutex := mtx.(*sync.Mutex)
	mutex.Lock()
	defer mutex.Unlock()

	m := msql.Model(`chat_ai_library_file_data_index`, define.Postgres)

	total, err := m.Where(`file_id`, cast.ToString(fileId)).Where(`status`, cast.ToString(define.VectorStatusInitial)).Count(`1`)
	if err != nil {
		logs.Error(err.Error())
		return
	}
	if total > 0 {
		return //not finish
	}

	// finished
	_, err = msql.Model(`chat_ai_library_file`, define.Postgres).Where(`id`, cast.ToString(fileId)).Update(msql.Datas{
		`status`:      define.FileStatusLearned,
		`update_time`: tool.Time2Int(),
	})
	if err != nil {
		logs.Error(err.Error())
		return
	}
	//clear cached data
	lib_redis.DelCacheData(define.Redis, &common.LibFileCacheBuildHandler{FileId: fileId})
}

func CrawlArticle(msg string, _ ...string) error {
	logs.Debug(`nsq:%s`, msg)
	data := make(map[string]any)
	if err := tool.JsonDecode(msg, &data); err != nil {
		logs.Error(`parsing failure:%s/%s`, msg, err.Error())
		return nil
	}
	fileId := cast.ToInt(cast.ToInt(data[`file_id`]))
	adminUserId := cast.ToInt(cast.ToInt(data[`admin_user_id`]))
	if fileId <= 0 || adminUserId <= 0 {
		logs.Error(`data exception:%s`, msg)
		return nil
	}

	// check file id
	m := msql.Model(`chat_ai_library_file`, define.Postgres)
	file, err := common.GetLibFileInfo(fileId, cast.ToInt(data[`admin_user_id`]))
	if err != nil {
		logs.Error(err.Error())
		return nil
	}
	if len(file) == 0 {
		logs.Error(`library not found:%s`, msg)
		return nil
	}

	// check file status
	//if file[`status`] != cast.ToString(define.FileStatusWaitCrawl) {
	//	logs.Error(`abnormal state:%s`, file[`status`])
	//	return nil
	//}

	// update file status
	_, err = m.Where(`id`, cast.ToString(fileId)).Update(msql.Datas{
		`status`: define.FileStatusCrawling,
	})
	if err != nil {
		logs.Error(err.Error())
		return nil
	}

	//start crawl
	uploadInfo, err := common.SaveUrlPage(cast.ToInt(file[`admin_user_id`]), file[`doc_url`], "library_file")
	if err != nil {
		_, err := m.Where(`id`, cast.ToString(fileId)).Update(msql.Datas{
			`status`: define.FileStatusCrawlException,
			`errmsg`: err.Error(),
		})
		if err != nil {
			logs.Error(err.Error())
		}
		return nil
	}

	// update file status
	_, err = m.Where(`id`, cast.ToString(fileId)).Update(msql.Datas{
		`status`:              define.FileStatusWaitSplit,
		`file_name`:           uploadInfo.Name,
		`file_size`:           uploadInfo.Size,
		`file_url`:            uploadInfo.Link,
		`update_time`:         tool.Time2Int(),
		`doc_last_renew_time`: tool.Time2Int(),
	})
	lib_redis.DelCacheData(define.Redis, &common.LibFileCacheBuildHandler{FileId: int(fileId)})
	if err != nil {
		logs.Error(err.Error())
		return nil
	}

	// convert pdf
	if message, err := tool.JsonEncode(map[string]any{`file_id`: fileId, `file_url`: uploadInfo.Link}); err != nil {
		logs.Error(err.Error())
	} else if err := common.AddJobs(define.ConvertPdfTopic, message); err != nil {
		logs.Error(err.Error())
	}
	return nil
}