import{L as t,M as n,V as e,a2 as te,a8 as M,F as I,a1 as D,Y as b,b as de,r as A,af as me,j as l,Q as _,E as ee,G as De,u as q,P as K,y as se,a9 as Y,a3 as W,a4 as X,w as pe,A as fe,v as ve,X as L,$ as Pe,a0 as _e,a6 as Ne,B as Fe,a5 as Ue}from"./vue-chunks-DrvJJrR0.js";import{_ as He,u as ge,g as je,a as Je}from"./chat--JR0374z.js";import{_ as Q,c as he,O as ze,B as be,P as Qe,a2 as ye,a as Ve,ag as ue,M as Ge,E as Ke,ah as Ye}from"../../index-C3D4HQO4.js";import{S as $e}from"./index-WDhJTqVN.js";import{Q as U}from"./QuestionCircleOutlined-CdbzAklR.js";import{_ as ne}from"./index-CQom3Nvi.js";import{C as We}from"./cu-scroll-BRSSzn4N.js";import{c as Xe}from"./index-D2OC7FNz.js";import{_ as ke}from"./TextArea-Hvz_NOKt.js";import{_ as Ze}from"./index-C5lzbLNl.js";import{S as et,a as tt,_ as ot}from"./index-CK6XLfa6.js";import{_ as st}from"./index-D6xWDfR9.js";import{_ as nt}from"./index-1NcpBXFq.js";import{_ as xe}from"./index-BIT7xdCC.js";import{s as lt}from"./index-Dvk58OIJ.js";import{u as it}from"./robot-BCpeMZv_.js";import{B as at,_ as ct}from"./index-BPgHK2vd.js";import{P as rt}from"./PlusOutlined-CuZGeFo-.js";import"./index-B_H-O6E2.js";import"./dayjs-Bv4VEw_C.js";import"./axios-Cm0UX6qg.js";import"./qs-QntUJHOZ.js";import"./crypto-js-BpV8n4kc.js";import"./colors-DfBzDIod.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./FormItemContext-BDLcJmuw.js";import"./index-BiAIeTEt.js";import"./index-BCwkXfxz.js";import"./inputProps-AgB5Odoi.js";import"./slide-BDhWp3gd.js";import"./CheckOutlined-CTzTXmhw.js";import"./DownOutlined-efyh-RzL.js";import"./SearchOutlined-D67jTUps.js";import"./move-CM83rOfC.js";import"./dropdown-eXXIPs5t.js";import"./Dropdown-C3qXFNcz.js";import"./RightOutlined-2S0-RiUi.js";import"./index-NXEUm3Jt.js";import"./shallowequal-CfnxU2uU.js";import"./collapseMotion-DfZt1qrJ.js";const _t={class:"guess-you-want"},ut={class:"message-tabs"},dt={key:1,class:"v-line"},mt={key:0,class:"message-menus"},pt=["onClick"],ft={key:1,class:"message-menus"},vt=["onClick"],gt={__name:"guess-you-want",props:{item:{type:Object,default:()=>{}},common_question_list:{type:Object,default:()=>[]},enable_common_question:{type:Boolean,default:!1}},emits:["clickMeun"],setup(d,{emit:B}){const y=B,o=d,g=(c,r)=>{c.question_tabkey=r},S=c=>{y("clickMeun",c)};return(c,r)=>(t(),n("div",_t,[e("div",ut,[o.item.guess_you_want?(t(),n("div",{key:0,onClick:r[0]||(r[0]=s=>g(o.item,1)),class:te(["tab-item",{active:o.item.question_tabkey==1}])}," 猜你想问 ",2)):M("",!0),o.item.guess_you_want&&o.common_question_list&&o.enable_common_question?(t(),n("div",dt)):M("",!0),o.common_question_list&&o.enable_common_question?(t(),n("div",{key:2,onClick:r[1]||(r[1]=s=>g(o.item,2)),class:te(["tab-item",{active:o.item.question_tabkey==2}])}," 常见问题 ",2)):M("",!0)]),o.item.question_tabkey==1?(t(),n("div",mt,[(t(!0),n(I,null,D(o.item.guess_you_want,(s,p)=>(t(),n("div",{onClick:m=>S(s),class:"menu-item",key:p},b(s),9,pt))),128))])):(t(),n("div",ft,[(t(!0),n(I,null,D(d.common_question_list,(s,p)=>(t(),n("div",{onClick:m=>S(s),class:"menu-item",key:p},b(s),9,vt))),128))]))]))}},ht=Q(gt,[["__scopeId","data-v-9c22a890"]]),Se=d=>(W("data-v-2247ff7b"),d=d(),X(),d),bt={class:"message-list-wrapper"},yt={class:"message-list"},$t=["id"],kt={class:"itme-left"},xt=["src"],St={class:"itme-right"},qt={class:"item-body"},wt={class:"message-content"},Ct=["id"],Tt={class:"itme-left"},Mt=["src"],It={class:"itme-right"},Lt={class:"item-body"},Ot={class:"message-content"},Rt={class:"message-menus"},Et=["onClick"],At=["innerHTML"],Bt={class:"message-menus"},Dt=["onClick"],Pt={key:2,class:"message-content"},Nt=["src"],Ft={key:3,class:"message-action-wrap"},Ut={class:"message-action"},Ht={key:0,class:"action-btn"},jt=Se(()=>e("span",null,"答案来源 ",-1)),Jt=Se(()=>e("span",null,"您可以修改相应文档并重新上传，以调整机器人的回答效果。答案来源仅后台测试时可见。",-1)),zt={key:1,class:"action-btn"},Qt=["onClick"],Vt={key:0,class:"file-items"},Gt=["onClick"],Kt={class:"file-name"},Yt={__name:"message-list",props:{messages:{type:Array,default:()=>[]},robotInfo:{type:Object,default:()=>{}}},emits:["clickMsgMeun","scroll","scrollStart","scrollEnd","openPromptLog","openLibrary"],setup(d,{expose:B,emit:y}){const o=y,g=d,S=de(()=>g.robotInfo.common_question_list.length?JSON.parse(g.robotInfo.common_question_list):[]),c=i=>{o("clickMsgMeun",i)},r=A(null),s={scrollTop:0,scrollHeight:0,clientHeight:0,scrollStartDiff:60,scrollEndDiff:60,scrollDirection:""};let p=null,m=!1;function $(i){m||(p&&(clearTimeout(p),p=null),p=setTimeout(()=>{s.scrollTop-i.target.scrollTop>0&&(s.scrollDirection="up"),s.scrollTop-i.target.scrollTop<0&&(s.scrollDirection="down"),s.scrollTop=i.target.scrollTop,s.scrollHeight=i.target.scrollHeight,s.clientHeight=i.target.clientHeight,o("scroll",{...s}),Math.abs(s.scrollTop)<=s.scrollStartDiff&&s.scrollDirection==="up"&&P(),Math.abs(s.scrollHeight-s.scrollTop-s.clientHeight)<=s.scrollEndDiff&&s.scrollDirection==="down"&&H()},50))}function P(){g.messages.length!=0&&o("scrollStart",{msg:g.messages[0]})}function H(){g.messages.length!=0&&o("scrollEnd",{msg:g.messages[g.messages.length-1]})}const j=()=>{r.value&&se(()=>{m=!0,r.value.scrollTop=r.value.scrollHeight+1,setTimeout(()=>{s.scrollTop=r.value.scrollTop,m=!1},50)})};function h(i,C){se(()=>{m=!0,C||(C="top");let O=r.value,E=document.querySelector("#msg-"+i);C=="top"?O.scrollTop=E.offsetTop:O.scrollTop=E.offsetTop-O.clientHeight+E.clientHeight,setTimeout(()=>{s.scrollTop=r.value.scrollTop,m=!1},50)})}function a(){s.scrollTop=0,s.scrollDirection=""}function x(i){return!!(i.quote_file&&i.quote_file.length>0||i.debug&&i.debug.length>0)}function k(i){o("openPromptLog",Y(i))}function w(i,C,O){let E=Y(i);E.forEach(F=>{F.message_id=O}),o("openLibrary",E,Y(C))}return B({scrollToBottom:j,scrollToMessage:h,resetScroll:a}),(i,C)=>{const O=$e,E=ne,F=me("viewer");return t(),n("div",bt,[e("div",{class:"scroll-box",ref_key:"scrollBoxRef",ref:r,onScroll:$},[e("div",yt,[(t(!0),n(I,null,D(g.messages,u=>(t(),n(I,{key:u.uid},[u.is_customer==1?(t(),n("div",{key:0,class:"message-item user-message",id:"msg-"+u.uid},[e("div",kt,[e("img",{class:"user-avatar",src:u.avatar},null,8,xt)]),e("div",St,[e("div",qt,[e("div",wt,b(u.content),1)])])],8,$t)):(t(),n("div",{key:1,class:"message-item robot-message",id:"msg-"+u.uid},[e("div",Tt,[l(O,{size:"small",spinning:u.loading},{default:_(()=>[e("img",{class:"robot-avatar",src:u.robot_avatar},null,8,Mt)]),_:2},1032,["spinning"])]),e("div",It,[e("div",Lt,[u.msg_type==1?(t(),n(I,{key:0},[ee((t(),n("div",Ot,[l(He,{content:u.content},null,8,["content"])])),[[F]]),e("div",Rt,[(t(!0),n(I,null,D(u.question,(f,T)=>(t(),n("div",{class:"menu-item",onClick:oe=>c(f),key:T},b(f),9,Et))),128))])],64)):M("",!0),u.msg_type==2?(t(),n(I,{key:1},[e("div",{class:"message-content",innerHTML:u.menu_json.content},null,8,At),e("div",Bt,[(t(!0),n(I,null,D(u.menu_json.question,(f,T)=>(t(),n("div",{class:"menu-item",onClick:oe=>c(f),key:T},b(f),9,Dt))),128))])],64)):M("",!0),u.msg_type==3?(t(),n("div",Pt,[ee(e("img",{class:"msg-img",src:u.content,alt:""},null,8,Nt),[[F]])])):M("",!0),x(u)?ee((t(),n("div",Ft,[e("div",Ut,[u.quote_file&&u.quote_file.length>0?(t(),n("div",Ht,[jt,l(E,{placement:"top",overlayInnerStyle:{width:"400px"}},{title:_(()=>[Jt]),default:_(()=>[l(q(U))]),_:1})])):M("",!0),u.debug&&u.debug.length>0?(t(),n("div",zt,[e("span",null,[e("a",{onClick:f=>k(u)},"Prompt 日志",8,Qt)])])):M("",!0)]),u.quote_file&&u.quote_file.length>0?(t(),n("div",Vt,[(t(!0),n(I,null,D(u.quote_file,f=>(t(),n("div",{class:"file-item",key:f.id,onClick:T=>w(u.quote_file,f,u.id)},[e("a",Kt,b(f.file_name),1)],8,Gt))),128))])):M("",!0)],512)),[[De,!u.question]]):M("",!0)]),(u.guess_you_want&&u.guess_you_want.length||S.value.length&&g.robotInfo.enable_common_question=="true")&&u.question_tabkey>0?(t(),K(ht,{key:0,item:u,enable_common_question:g.robotInfo.enable_common_question=="true",common_question_list:S.value,onClickMeun:c},null,8,["item","enable_common_question","common_question_list"])):M("",!0)])],8,Ct))],64))),128))])],544)])}}},Wt=Q(Yt,[["__scopeId","data-v-2247ff7b"]]),Xt={class:"chat-list-box"},Zt=["onClick"],eo={class:"chat-item-title"},to={__name:"chat-list",props:{list:{type:Array,default:()=>[]},active:{type:[String,Number],default:""}},emits:["openChat","onScrollEnd"],setup(d,{emit:B}){const y=B,o=d,g=A(null),S=r=>{y("openChat",r)},c=()=>{y("onScrollEnd")};return pe(()=>o.list,()=>{se(()=>{g.value.refresh()})}),(r,s)=>{const p=he;return t(),n("div",Xt,[l(We,{ref_key:"scroller",ref:g,onOnScrollEnd:c},{default:_(()=>[e("div",null,[(t(!0),n(I,null,D(o.list,m=>(t(),n("div",{class:te(["chat-list-item",{active:m.id==o.active}]),onClick:$=>S(m),key:m.id},[l(p,{class:"chat-item-icon",name:"message"}),e("span",eo,b(m.subject||m.last_chat_message),1)],10,Zt))),128))])]),_:1},512)])}}},oo=Q(to,[["__scopeId","data-v-8a5dd127"]]),V=d=>(W("data-v-cf492541"),d=d(),X(),d),so={class:"page-right"},no={class:"page-right-body"},lo=V(()=>e("div",{class:"prompt-tips"},[L(" 通过修改提示词可知识库可以优化机器人回答的效果。"),e("span",{style:{color:"#ed744a"}},"测试时可以直接修改提示词，不用保存即可测试优化效果。提示词优化好之后再点击保存，才会对外生效")],-1)),io={class:"prompt-form"},ao=V(()=>e("div",{class:"prompt-form-label"},"提示词",-1)),co={clas:"prompt-form-item"},ro={class:"prompt-form"},_o=V(()=>e("div",{class:"prompt-form-label"},"模型设置",-1)),uo={clas:"prompt-form-item"},mo=V(()=>e("div",{class:"prompt-form-item-label"},[e("span",null,"LLM模型")],-1)),po={class:"prompt-form-item-body"},fo=["src"],vo={key:0},go={key:1},ho={class:"prompt-form-item"},bo={class:"prompt-form-item-label"},yo=V(()=>e("span",null,"最大token",-1)),$o=V(()=>e("div",null,"问题+答案的最大token数，如果出现回答被截断，可调高此值",-1)),ko={class:"form-item-body"},xo={class:"number-box"},So={class:"number-slider-box"},qo={class:"number-input-box"},wo={class:"prompt-form-item"},Co={class:"prompt-form-item-label"},To=V(()=>e("span",null,"温度",-1)),Mo={class:"form-item-body"},Io={class:"number-box"},Lo={class:"number-slider-box"},Oo={class:"number-input-box"},Ro={class:"prompt-form-item"},Eo={class:"prompt-form-item-label"},Ao=V(()=>e("span",null,"上下文数量",-1)),Bo={class:"form-item-body"},Do={class:"number-box"},Po={class:"number-slider-box"},No={class:"number-input-box"},Fo={class:"page-right-footer"},Uo={__name:"robot-test-right",props:{robotInfo:{type:Object,default:()=>{}}},emits:["promptChange","saveRobotPrompt"],setup(d,{emit:B}){const y=["azure","ollama","xinference","openaiAgent"],o=["azure"],g=d,S=B,c=fe({use_model:void 0,model_config_id:"",temperature:0,max_token:0,prompt:g.robotInfo.prompt,context_pair:0}),r=A(""),s=A([]),p=h=>{let a=JSON.parse(JSON.stringify(h));a.max_token=parseFloat(a.max_token),a.temperature=parseFloat(a.temperature),a.context_pair=parseFloat(a.context_pair),Object.keys(a).forEach(x=>{c[x]=a[x]})},m=(h,a)=>{const x=a.current_obj;c.use_model=y.indexOf(x.model_define)>-1&&x.deployment_name?x.deployment_name:x.name,r.value=x.model_define,c.model_config_id=x.id||a.model_config_id};function $(h,a,x){const k=new Set(h.map(w=>w.model_define));return a.filter(w=>{let i=w[x];k.has(i)&&h.filter(C=>{if(C.model_define==i)return C.children=Qe(C.children,w.children),!1})}),h}const P=()=>{Xe({model_type:"LLM"}).then(h=>{let a=h.data||[],x=[];s.value=a.map(k=>{x=[];for(let w=0;w<k.model_info.llm_model_list.length;w++){const i=k.model_info.llm_model_list[w];y.indexOf(k.model_info.model_define)>-1&&g.robotInfo.model_config_id==k.model_config.id&&(c.use_model=k.model_config.deployment_name,r.value=k.model_info.model_define),x.push({name:i,deployment_name:k.model_config.deployment_name,id:k.model_config.id,model_define:k.model_info.model_define})}return{id:k.model_config.id,name:k.model_info.model_name,model_define:k.model_info.model_define,icon:k.model_info.model_icon_url,children:x,deployment_name:k.model_config.deployment_name}}),s.value=$(ze(s.value,"model_define"),s.value,"model_define")})},H=h=>{c.prompt=h.currentTarget.value,S("promptChange",h)},j=()=>{let h=!1;o.indexOf(r.value)>-1&&(h=!0),S("saveRobotPrompt",c,h)};return ve(()=>{P(),p({...Y(g.robotInfo)})}),(h,a)=>{const x=ke,k=Ze,w=et,i=tt,C=ot,O=ne,E=st,F=nt,u=be;return t(),n("div",so,[e("div",no,[lo,e("div",io,[ao,e("div",co,[l(x,{value:c.prompt,"auto-size":{minRows:10,maxRows:10},placeholder:"请输入内容",onInput:H},null,8,["value"])])]),e("div",ro,[_o,e("div",uo,[mo,e("div",po,[l(C,{value:c.use_model,"onUpdate:value":a[0]||(a[0]=f=>c.use_model=f),onChange:m,style:{width:"100%"}},{default:_(()=>[(t(!0),n(I,null,D(s.value,f=>(t(),K(i,{key:f.id},{label:_(()=>[l(k,{align:"center",gap:6},{default:_(()=>[e("img",{class:"model-icon",src:f.icon,alt:""},null,8,fo),L(b(f.name),1)]),_:2},1024)]),default:_(()=>[(t(!0),n(I,null,D(f.children,T=>(t(),K(w,{value:y.indexOf(f.model_define)>-1&&T.deployment_name?T.deployment_name:T.name+T.id,model_config_id:f.id,current_obj:T,key:T.name+T.id},{default:_(()=>[y.indexOf(f.model_define)>-1&&T.deployment_name?(t(),n("span",vo,b(T.deployment_name),1)):(t(),n("span",go,b(T.name),1))]),_:2},1032,["value","model_config_id","current_obj"]))),128))]),_:2},1024))),128))]),_:1},8,["value"])])]),e("div",ho,[e("div",bo,[yo,l(O,null,{title:_(()=>[$o]),default:_(()=>[l(q(U),{class:"question-icon"})]),_:1})]),e("div",ko,[e("div",xo,[e("div",So,[l(E,{class:"custom-slider",value:c.max_token,"onUpdate:value":a[1]||(a[1]=f=>c.max_token=f),min:0,max:100*1024},null,8,["value"])]),e("div",qo,[l(F,{value:c.max_token,"onUpdate:value":a[2]||(a[2]=f=>c.max_token=f),min:0,max:100*1024},null,8,["value"])])])])]),e("div",wo,[e("div",Co,[To,l(O,null,{title:_(()=>[L("温度越低，回答越严谨。温度越高，回答越发散。")]),default:_(()=>[l(q(U),{class:"question-icon"})]),_:1})]),e("div",Mo,[e("div",Io,[e("div",Lo,[l(E,{class:"custom-slider",value:c.temperature,"onUpdate:value":a[3]||(a[3]=f=>c.temperature=f),min:0,max:2,step:.1},null,8,["value"])]),e("div",Oo,[l(F,{value:c.temperature,"onUpdate:value":a[4]||(a[4]=f=>c.temperature=f),min:0,max:2,step:.1},null,8,["value"])])])])]),e("div",Ro,[e("div",Eo,[Ao,l(O,null,{title:_(()=>[L("提示词中携带的历史聊天记录轮次。设置为0则不携带聊天记录。最多设置10轮。注意，携带的历史聊天记录越多，消耗的token相应也就越多。")]),default:_(()=>[l(q(U),{class:"question-icon"})]),_:1})]),e("div",Bo,[e("div",Do,[e("div",Po,[l(E,{class:"custom-slider",value:c.context_pair,"onUpdate:value":a[5]||(a[5]=f=>c.context_pair=f),min:0,max:10},null,8,["value"])]),e("div",No,[l(F,{value:c.context_pair,"onUpdate:value":a[6]||(a[6]=f=>c.context_pair=f),min:0,max:10},null,8,["value"])])])])])])]),e("div",Fo,[l(u,{type:"primary",block:"",onClick:j},{default:_(()=>[L("保存并应用")]),_:1})])])}}},Ho=Q(Uo,[["__scopeId","data-v-cf492541"]]),jo=d=>(W("data-v-47f207c0"),d=d(),X(),d),Jo={class:"message-input-wrapper"},zo={class:"message-action"},Qo={class:"loading-action"},Vo=["disabled"],Go=jo(()=>e("span",null,"发送",-1)),Ko=[Go],Yo={__name:"message-input",props:{value:{type:String,default:""},loading:{type:Boolean,default:!1}},emits:["send","update:value"],setup(d,{emit:B}){const y=B,o=d,g=de(()=>o.loading||o.value.trim().length===0),S=s=>{y("update:value",s.target.value.trim())},c=s=>{if(s.key==="Enter"&&!s.shiftKey){if(!s.target.value.trim())return;s.preventDefault(),r()}else s.key==="Enter"&&s.shiftKey&&(s.preventDefault(),y("update:value",o.value+`
`))},r=()=>{y("send",o.value.trim())};return(s,p)=>{const m=ke,$=$e;return t(),n("div",Jo,[l(m,{value:d.value,"auto-size":{minRows:5,maxRows:5},placeholder:"在此输入您想了解的内容，Shift+Enter换行",onChange:S,onKeydown:c},null,8,["value"]),e("div",zo,[e("span",Qo,[l($,{spinning:d.loading},null,8,["spinning"])]),d.loading?M("",!0):(t(),n("button",{key:0,class:"send-msg-btn",disabled:g.value,onClick:r},Ko,8,Vo))])])}}},Wo=Q(Yo,[["__scopeId","data-v-47f207c0"]]),G=d=>(W("data-v-c821359c"),d=d(),X(),d),Xo={class:"prompt-log-content"},Zo={class:"prompt-log-items"},es={class:"prompt-log-label"},ts=G(()=>e("span",null,"SYSTEM ",-1)),os={class:"prompt-log-item"},ss={class:"prompt-log-items"},ns={class:"prompt-log-label"},ls=G(()=>e("span",null,"上下文 ",-1)),is={class:"prompt-log-items"},as={class:"prompt-log-label"},cs=G(()=>e("span",null,"USER ",-1)),rs={class:"prompt-log-item"},_s={class:"prompt-log-items"},us={class:"prompt-log-label"},ds=G(()=>e("span",null,"ASSISTANT ",-1)),ms={class:"prompt-log-item"},ps={key:0,class:"prompt-log-items"},fs={class:"prompt-log-label"},vs=G(()=>e("span",null,"Recall time ",-1)),gs={class:"prompt-log-item"},hs={key:1,class:"prompt-log-items"},bs={class:"prompt-log-label"},ys=G(()=>e("span",null,"Request time ",-1)),$s={class:"prompt-log-item"},ks={class:"prompt-log-items"},xs={class:"prompt-log-label"},Ss=G(()=>e("span",null,"Error ",-1)),qs={class:"prompt-log-item"},ws={__name:"prompt-log-alert",setup(d,{expose:B}){const y=A(!1),o=fe({prompt:"",library:[],context_qa:[],cur_question:"",cur_answer:"",error:""}),g=()=>{y.value=!1},S=()=>{o.prompt="",o.library=[],o.context_qa=[],o.cur_question="",o.cur_answer="",o.error="",o.recall_time="",o.request_time=""};return B({open:r=>{S(),o.error=r.error,o.recall_time=r.recall_time?(r.recall_time/1e3).toFixed(2):"",o.request_time=r.request_time?(r.request_time/1e3).toFixed(2):"";let s=r.debug||[];for(let p=0;p<s.length;p++){let m=s[p];m.type=="library"?o.library.push(m.content):m.type=="context_qa"?o.context_qa.push(m):o[m.type]=m.content}y.value=!0}}),(r,s)=>{const p=ne,m=xe;return t(),K(m,{class:"prompt-log-alert",open:y.value,"onUpdate:open":s[0]||(s[0]=$=>y.value=$),title:"Prompt 日志",placement:"right",width:"746px",closable:!1},{extra:_(()=>[e("span",{class:"close-btn",onClick:g},[l(q(ye))])]),default:_(()=>[e("div",Xo,[e("div",Zo,[e("div",es,[ts,l(p,null,{title:_(()=>[L("系统提示词和文档分段。")]),default:_(()=>[l(q(U),{class:"question-icon"})]),_:1})]),e("div",os,[e("p",null,b(o.prompt),1)]),(t(!0),n(I,null,D(o.library,($,P)=>(t(),n("div",{class:"prompt-log-item",key:P},[e("p",null,b($),1)]))),128))]),e("div",ss,[e("div",ns,[ls,l(p,null,{title:_(()=>[L("传递的历史提问消息")]),default:_(()=>[l(q(U),{class:"question-icon"})]),_:1})]),(t(!0),n(I,null,D(o.context_qa,($,P)=>(t(),n("div",{class:"prompt-log-item",key:P},[e("p",null,"Q："+b($.question),1),e("p",null,"A："+b($.answer),1)]))),128))]),e("div",is,[e("div",as,[cs,l(p,null,{title:_(()=>[L("本次用户的提问")]),default:_(()=>[l(q(U),{class:"question-icon"})]),_:1})]),e("div",rs,[e("p",null,b(o.cur_question),1)])]),e("div",_s,[e("div",us,[ds,l(p,null,{title:_(()=>[L("语言模型输出的答案")]),default:_(()=>[l(q(U),{class:"question-icon"})]),_:1})]),e("div",ms,[e("p",null,b(o.cur_answer),1)])]),o.recall_time>0?(t(),n("div",ps,[e("div",fs,[vs,l(p,null,{title:_(()=>[L("从知识库中检索到有效分段所需要的时间，包括对分段进行排序时间。")]),default:_(()=>[l(q(U),{class:"question-icon"})]),_:1})]),e("div",gs,[e("p",null,b(o.recall_time)+"s",1)])])):M("",!0),o.request_time>0?(t(),n("div",hs,[e("div",bs,[ys,l(p,null,{title:_(()=>[L("从发送问题和上下文信息给大模型到大模型开始返回答案的时间。")]),default:_(()=>[l(q(U),{class:"question-icon"})]),_:1})]),e("div",$s,[e("p",null,b(o.request_time)+"s",1)])])):M("",!0),e("div",ks,[e("div",xs,[Ss,l(p,null,{title:_(()=>[L("报错信息，调用聊天接口报错时会显示。")]),default:_(()=>[l(q(U),{class:"question-icon"})]),_:1})]),e("div",qs,[e("p",null,b(o.error),1)])])])]),_:1},8,["open"])}}},Cs=Q(ws,[["__scopeId","data-v-c821359c"]]),Ts={class:"library-info-content"},Ms={class:"file-list"},Is=["onClick"],Ls={class:"document-items"},Os={class:"document-item-header"},Rs={class:"left-box"},Es={class:"document-title"},As={key:0,class:"document-title"},Bs={class:"document-size"},Ds={class:"document-item-body"},Ps={class:"document-similarity"},Ns={key:0,class:"document-content"},Fs={key:1,class:"document-content"},Us={class:"document-content"},Hs={class:"fragment-img"},js=["src"],Js={__name:"library-info-alert",setup(d,{expose:B}){const y=ge(),{robot:o}=y,g=Pe(),S=A(!1),c=A([]),r=A(null),s=()=>{c.value=[],r.value=null},p=(h,a)=>{s(),c.value=h,r.value=a.id,S.value=!0,P(a)},m=h=>{h.id!=r.value&&(r.value=h.id,P(h))},$=A([]),P=h=>{je({message_id:h.message_id,file_id:h.id,robot_key:o.robot_key,openid:o.openid}).then(a=>{$.value=a.data||[]})},H=()=>{g.push("/library/preview?id="+r.value)},j=()=>{S.value=!1};return B({open:p}),(h,a)=>{const x=he,k=xe,w=me("viewer");return t(),K(k,{class:"library-info-alert",open:S.value,"onUpdate:open":a[0]||(a[0]=i=>S.value=i),title:"答案来源",placement:"right",width:"746px",closable:!1,bodyStyle:{background:"#F2F4F7"}},{extra:_(()=>[e("span",{class:"close-btn",onClick:j},[l(q(ye))])]),default:_(()=>[e("div",Ts,[e("div",Ms,[(t(!0),n(I,null,D(c.value,i=>(t(),n("div",{class:te(["file-item",{active:r.value==i.id}]),key:i.id,onClick:C=>m(i)},b(i.file_name),11,Is))),128))]),e("div",Ls,[(t(!0),n(I,null,D($.value,i=>(t(),n("div",{class:"document-item",key:i.id},[e("div",Os,[e("div",Rs,[e("span",Es,"id："+b(i.id),1),i.title?(t(),n("span",As,b(i.title),1)):M("",!0),e("span",Bs," 共"+b(i.word_total)+"个字符 ",1)]),e("div",{class:"right-box"},[e("a",{onClick:H},"查看源文档>")])]),e("div",Ds,[e("div",Ps,[L(" 相似度： "),l(x,{name:"similarity",style:{"font-size":"16px"}}),L(b(i.similarity),1)]),i.question?(t(),n("div",Ns,"Q："+b(i.question),1)):M("",!0),i.answer?(t(),n("div",Fs,"A："+b(i.answer),1)):M("",!0),e("div",Us,b(i.content),1),ee((t(),n("div",Hs,[(t(!0),n(I,null,D(i.images,(C,O)=>(t(),n("img",{key:O,src:C,alt:""},null,8,js))),128))])),[[w]])])]))),128))])])]),_:1},8,["open"])}}},zs=Q(Js,[["__scopeId","data-v-73685362"]]),Qs=d=>(W("data-v-40715547"),d=d(),X(),d),Vs={class:"chat-page-wrapper"},Gs={class:"chat-page-header"},Ks={class:"breadcrumb-box"},Ys={class:"chat-page"},Ws={class:"page-left"},Xs={class:"page-left-top"},Zs={class:"page-left-body"},en=Qs(()=>e("div",{class:"page-left-footer"},null,-1)),tn={class:"page-body"},on={class:"chat-box-body"},sn={style:{"margin-top":"30px"},class:"chat-box-footer"},nn={__name:"index",setup(d){const y=_e().query,o=it(),{getRobot:g,robotInfo:S}=o,c=Je(),r=ge(),s=Ve();let p=!0;const m=A(""),$=A(null),{createChat:P,sendMessage:H,getMyChatList:j,openChat:h,onGetChatMessage:a,changeRobotPrompt:x,$reset:k}=r,{messageList:w,sendLock:i,myChatList:C,robot:O,dialogue_id:E}=Ne(r),F=_e(),u=A(!1),f=async()=>{if(!m.value)return ue("请输入消息内容");p=!0,H({message:m.value}),m.value=""},T=async()=>{p=!0,m.value="";let v=F.query||{},R=s.user_id,N={robot_key:v.robot_key,avatar:v.avatar,name:v.name,nickname:v.nickname,is_background:1,openid:R,dialogue_id:0};ae(),await P(N)},oe=async v=>{if(E.value==v.dialogue_id)return;p=!0;let N={robot_key:(F.query||{}).robot_key,avatar:v.avatar,name:v.name,nickname:v.nickname,is_background:v.is_background,openid:v.openid,dialogue_id:v.id};ae(),await h(N),await a()&&ie()},qe=v=>{p=!0,H({message:v})},Z=A(!1),we=v=>{let R=JSON.parse(JSON.stringify(Y(v)));Z.value=!0;let N=R.welcomes;N.question=N.question.map(z=>z.content);let J=R.unknown_question_prompt;J.question=J.question.map(z=>z.content),R.unknown_question_prompt=JSON.stringify(J),R.welcomes=JSON.stringify(N),Z.value=!0,lt(R).then(z=>{if(z.res!=0)return ue(z.msg);Z.value=!1,Ye("保存成功"),g(v.id)}).catch(()=>{Z.value=!1})},Ce=v=>{x(v.currentTarget.value)},Te=async(v,R)=>{let N=JSON.parse(JSON.stringify(v));Ge.confirm({title:"确定保存提示词吗?",icon:l(Ke),content:l("div",{style:"color:red;"},"如果您已对外提供本机器人，保存后修改的提示问也会立刻生效。如果您只是想要测试优化提示词的效果，直接修改后测试即可，无需保存。"),onOk:async()=>{R&&(N.use_model="默认"),we(N)},onCancel(){}})},le=()=>{ie()},Me=async()=>{p=!1;let v=w.value[0].uid;await a()&&Le(v)},Ie=()=>{},ie=()=>{$.value&&p&&$.value.scrollToBottom()},Le=v=>{$.value&&$.value.scrollToMessage(v)},ae=()=>{$.value&&$.value.resetScroll()},Oe=()=>{j()},ce=A(null),Re=v=>{ce.value.open(v)},re=A(null),Ee=(v,R)=>{re.value.open(v,R)};return pe(()=>w.value,()=>{}),ve(async()=>{T(),j(),await g(y.id),u.value=!0,c.on("updateAiMessage",le)}),Fe(()=>{k(),c.off("updateAiMessage",le)}),(v,R)=>{const N=Ue("router-link"),J=ct,z=at,Ae=be;return t(),n("div",Vs,[e("div",Gs,[e("div",Ks,[l(z,null,{default:_(()=>[l(J,null,{default:_(()=>[l(N,{to:"/robot/list"},{default:_(()=>[L("机器人管理")]),_:1})]),_:1}),l(J,null,{default:_(()=>[L(b(q(O).robot_name),1)]),_:1})]),_:1})])]),e("div",Ys,[e("div",Ws,[e("div",Xs,[l(Ae,{type:"primary",block:"",ghost:"",onClick:T},{default:_(()=>[l(q(rt)),L(" 新建对话")]),_:1})]),e("div",Zs,[l(oo,{list:q(C),active:q(E),onOpenChat:oe,onOnScrollEnd:Oe},null,8,["list","active"])]),en]),e("div",tn,[e("div",on,[l(Wt,{ref_key:"messageListRef",ref:$,messages:q(w),robotInfo:q(S),onClickMsgMeun:qe,onScrollStart:Me,onScrollEnd:Ie,onOpenPromptLog:Re,onOpenLibrary:Ee},null,8,["messages","robotInfo"])]),e("div",sn,[l(Wo,{value:m.value,"onUpdate:value":R[0]||(R[0]=Be=>m.value=Be),onSend:f,loading:q(i)},null,8,["value","loading"])])]),u.value?(t(),K(Ho,{key:0,onPromptChange:Ce,onSaveRobotPrompt:Te,robotInfo:q(S)},null,8,["robotInfo"])):M("",!0)]),l(Cs,{ref_key:"promptLogAlertRef",ref:ce},null,512),l(zs,{ref_key:"libraryInfoAlertRef",ref:re},null,512)])}}},Qn=Q(nn,[["__scopeId","data-v-40715547"]]);export{Qn as default};