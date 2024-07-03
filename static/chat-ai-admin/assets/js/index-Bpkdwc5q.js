import{_ as G,b as he,L as ge,d as T,M as X,m as ae,n as ke,r as we,a as ye,o as be,p as se,E as oe,q as Ce,B as le,t as xe,v as Ae,w as Ue,x as Se}from"../../index-BRxqhTX0.js";import{e as y,M as p,N as L,F as q,a2 as K,a3 as Oe,Z as k,u as x,w as Pe,k as e,S as a,Q as E,W as m,a4 as ne,a5 as re,B as z,V as R,Y as M,a9 as W,aa as ue,a7 as Be,b as Ie}from"./vue-chunks-Chs-lyDX.js";import{v as ie}from"./validate-CYzfr11z.js";import{F as N,_ as J}from"./index-BpmDo9gD.js";import{P as ee}from"./PlusOutlined-BsuTPPYk.js";import{_ as Me}from"./index-DB-QVbQ9.js";import{_ as de}from"./index-BxFCEOhs.js";import{I as ce,_ as _e}from"./Password-IO9yCNMV.js";import{S as Le,_ as Fe}from"./index-DvlsFstf.js";import{_ as te}from"./index-bokNoDeU.js";import{_ as pe,a as me}from"./index-BYzVsYA6.js";import{_ as De}from"./TextArea-DXf3OI0w.js";import{C as Ee,_ as Re}from"./index-YMtarjVU.js";import{_ as ze,a as Ge}from"./index-DxTcKfkl.js";import"./dayjs-CkLU8sYs.js";import"./axios-Cm0UX6qg.js";import"./qs-DjYKlG5V.js";import"./crypto-js-BUUKnz8c.js";import"./index-BKmN8VmO.js";import"./collapseMotion-DN2MDQ98.js";import"./QuestionCircleOutlined-D20_EtSI.js";import"./FormItemContext-VrUvw7Ec.js";import"./CheckOutlined-CvMo00tT.js";import"./useRefs-BsXgmhaJ.js";import"./inputProps-C625v0VH.js";import"./slide-Dp7-2q38.js";import"./index-DYUnQ0Fx.js";import"./DownOutlined-bMEBWO_G.js";import"./move-DuzEngAP.js";import"./index-Bm-CdVnz.js";import"./LeftOutlined-MipOkgmA.js";import"./RightOutlined-CPWwMcyy.js";import"./index-BTe61wlf.js";import"./dropdown-Cq7tRTl3.js";import"./Dropdown-jIYTCEe9.js";import"./index-C2U3xRWB.js";import"./index-DW1R_2r3.js";const Te={class:"page-tabs"},Ne=["onClick"],He={__name:"page-tabs",props:{value:{type:[Number,String]}},emits:["update:value","change"],setup(P,{emit:c}){const{t:S}=he(),v=c,B=P,u=y([{value:1,title:S("views.user.model.teamMembers"),langKey:"views.user.model.teamMembers"},{value:0,title:S("views.user.model.rolePermissions"),langKey:"views.user.model.rolePermissions"}]),w=t=>{v("update:value",t),v("change",t)};return(t,I)=>(p(),L("div",Te,[(p(!0),L(q,null,K(u.value,A=>(p(),L("div",{class:Oe(["tab-item",{active:B.value==A.value}]),onClick:g=>w(A.value),key:A.value},k(x(S)(A.langKey)),11,Ne))),128))]))}},qe=G(He,[["__scopeId","data-v-924c1ece"]]),Ke=P=>(ne("data-v-5be3f074"),P=P(),re(),P),Xe={class:"avatar-uploader"},Ze=["src"],je={key:1},Ve=Ke(()=>m("div",{class:"ant-upload-text"},"上传照片",-1)),Ye=["src"],Qe={__name:"avatar-input",props:{value:{type:String,default:""}},emits:["update:value","change"],setup(P,{emit:c}){function S(n){return new Promise((r,d)=>{const o=new FileReader;o.readAsDataURL(n),o.onload=()=>r(o.result),o.onerror=O=>d(O)})}const v=c,B=P,u=y([]),w=y(!1),t=y("");Pe(()=>B.value,n=>{t.value=n},{immediate:!0});const I=N.useInjectFormItemContext(),A=()=>{let n={imageUrl:t.value,file:u.value[0].originFileObj};v("change",n),v("update:value",n.imageUrl),I.onFieldChange()},g=n=>n.type==="image/jpeg"||n.type==="image/png"?n.size/1024<1024?(u.value=[n],S(n).then(o=>{t.value=o,w.value=!1,A()}),!1):(T.error("成员头像图片大小不能超过1M"),!1):(T.error("机器人头像只支持JPG、PNG格式的图片"),!1),b=y(!1),s=y(""),U=y(""),f=()=>{b.value=!1,U.value=""},i=async n=>{!n.url&&!n.preview&&(n.preview=await S(n.originFileObj)),s.value=n.url||n.preview,b.value=!0,U.value=n.name||n.url.substring(n.url.lastIndexOf("/")+1)};return(n,r)=>{const d=Me,o=X;return p(),L("div",Xe,[e(d,{"file-list":u.value,"onUpdate:fileList":r[0]||(r[0]=O=>u.value=O),"list-type":"picture-card","show-upload-list":!1,"before-upload":g,accept:".jpg,.png,.jpeg",onPreview:i},{default:a(()=>[t.value?(p(),L("img",{key:0,class:"avatar",src:t.value,alt:"avatar"},null,8,Ze)):(p(),L("div",je,[w.value?(p(),E(x(ge),{key:0})):(p(),E(x(ee),{key:1})),Ve]))]),_:1},8,["file-list"]),e(o,{open:b.value,title:U.value,footer:null,onCancel:f},{default:a(()=>[m("img",{alt:"example",style:{width:"100%"},src:s.value},null,8,Ye)]),_:1},8,["open","title"])])}}},We=G(Qe,[["__scopeId","data-v-5be3f074"]]),$="data:image/png;base64,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",$e={class:"form-box"},Je={__name:"add-team-members",emits:["ok"],setup(P,{expose:c,emit:S}){const v=S,B=N.useForm,u=y(!1),w=y("添加团队成员"),t=z({user_name:"",nick_name:"",avatar:"",avatar_url:"",user_roles:"3",password:"",check_password:"",id:""}),I=d=>{t.avatar=d.file},A=y([]);ae({page:1,size:200,search:""}).then(d=>{let o=d.data.list||[];A.value=o.filter(O=>O.id!="1")});const g=z({user_name:[{message:"请输入登录账号",required:!0},{validator:async(d,o)=>!/^[a-zA-Z0-9_.-]+$/.test(o)&&o?Promise.reject("账号只能为字母、数字、“-”、“_”,“.”的组合"):Promise.resolve()}],nick_name:[{message:"请输入昵称",required:!0}],avatar_url:[{message:"请上传头像",required:!0}],user_roles:[{message:"请选择成员角色",required:!0}],password:[{message:"请输入登录密码",required:!0},{validator:async(d,o)=>!ie(o)&&o?Promise.reject("密码必须包含字母、数字或者字符中的两种，6-32位"):Promise.resolve()}],check_password:[{message:"请输入确认密码",required:!0},{validator:async(d,o)=>o!=t.password&&o?Promise.reject("两次输入的密码不一致"):Promise.resolve()}]}),{resetFields:b,validate:s,validateInfos:U}=B(t,g),f=()=>{w.value="添加团队成员",u.value=!0,b(),t.user_name="",t.nick_name="",t.avatar="",t.avatar_url=$,t.user_roles="3",t.password="",t.check_password="",t.id=""},i=d=>{w.value="编辑团队成员",t.user_name=d.user_name,t.nick_name=d.nick_name,t.avatar_url=d.avatar||$,t.avatar="",t.user_roles=d.user_roles,t.password="",t.check_password="",t.id=d.id,delete g.password,delete g.check_password,u.value=!0},n=y(!1),r=()=>{s().then(()=>{let d={...ue(t)};delete d.avatar_url,n.value=!0,ke(d).then(o=>{T.success(`${w.value}成功`),u.value=!1,v("ok")}).finally(()=>{n.value=!1})})};return c({add:f,edit:i}),(d,o)=>{const O=ce,l=J,h=Le,D=Fe,F=_e,Q=N,H=X;return p(),L("div",null,[e(H,{open:u.value,"onUpdate:open":o[6]||(o[6]=C=>u.value=C),title:w.value,onOk:r,width:"476px"},{default:a(()=>[m("div",$e,[e(Q,{layout:"vertical"},{default:a(()=>[e(l,R({label:"登录账号"},x(U).user_name),{default:a(()=>[e(O,{disabled:t.id!="",type:"text",placeholder:"账号只能为字母、数字、“-”、“_”,“.”的组合",value:t.user_name,"onUpdate:value":o[0]||(o[0]=C=>t.user_name=C)},null,8,["disabled","value"])]),_:1},16),e(l,R({label:"成员昵称"},x(U).nick_name),{default:a(()=>[e(O,{maxlength:100,type:"text",placeholder:"请输入昵称",value:t.nick_name,"onUpdate:value":o[1]||(o[1]=C=>t.nick_name=C)},null,8,["value"])]),_:1},16),e(l,{label:"成员头像"},{default:a(()=>[e(We,{value:t.avatar_url,"onUpdate:value":o[2]||(o[2]=C=>t.avatar_url=C),onChange:I},null,8,["value"])]),_:1}),e(l,R({label:"成员角色"},x(U).user_roles),{default:a(()=>[e(D,{value:t.user_roles,"onUpdate:value":o[3]||(o[3]=C=>t.user_roles=C),style:{width:"100%"},placeholder:"请选择成员角色"},{default:a(()=>[(p(!0),L(q,null,K(A.value,C=>(p(),E(h,{key:C.id,value:C.id},{default:a(()=>[M(k(C.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1},16),t.id?W("",!0):(p(),E(l,R({key:0,label:"登录密码"},x(U).password),{default:a(()=>[e(F,{value:t.password,"onUpdate:value":o[4]||(o[4]=C=>t.password=C),placeholder:"密码必须包含字母、数字或者字符中的两种，6-32位"},null,8,["value"])]),_:1},16)),t.id?W("",!0):(p(),E(l,R({key:1,label:"确认密码"},x(U).check_password),{default:a(()=>[e(F,{value:t.check_password,"onUpdate:value":o[5]||(o[5]=C=>t.check_password=C),placeholder:"请重新输入密码"},null,8,["value"])]),_:1},16))]),_:1})])]),_:1},8,["open","title"])])}}},et=G(Je,[["__scopeId","data-v-9931da5a"]]),tt={class:"form-box"},at={__name:"reset-password",emits:["ok"],setup(P,{expose:c,emit:S}){const v=S,B=N.useForm,u=y(!1),w=y("重置登录密码"),t=z({password:"",check_password:"",id:""}),I=z({password:[{message:"请输入登录密码",required:!0},{validator:async(f,i)=>!ie(i)&&i?Promise.reject("密码必须包含字母、数字或者字符中的两种，6-32位"):Promise.resolve()}],check_password:[{message:"请输入确认密码",required:!0},{validator:async(f,i)=>i!=t.password&&i?Promise.reject("两次输入的密码不一致"):Promise.resolve()}]}),{resetFields:A,validate:g,validateInfos:b}=B(t,I),s=f=>{f.id,u.value=!0,A(),t.password="",t.check_password="",t.id=f.id},U=()=>{g().then(()=>{we({...ue(t)}).then(f=>{T.success("修改成功"),u.value=!1,v("ok")})})};return c({open:s}),(f,i)=>{const n=_e,r=J,d=N,o=X;return p(),L("div",null,[e(o,{open:u.value,"onUpdate:open":i[2]||(i[2]=O=>u.value=O),title:w.value,onOk:U,width:"476px"},{default:a(()=>[m("div",tt,[e(d,{layout:"vertical"},{default:a(()=>[e(r,R({label:"登录密码"},x(b).password),{default:a(()=>[e(n,{value:t.password,"onUpdate:value":i[0]||(i[0]=O=>t.password=O),placeholder:"密码必须包含字母、数字或者字符中的两种，6-32位"},null,8,["value"])]),_:1},16),e(r,R({label:"确认密码"},x(b).check_password),{default:a(()=>[e(n,{value:t.check_password,"onUpdate:value":i[1]||(i[1]=O=>t.check_password=O),placeholder:"请重新输入密码"},null,8,["value"])]),_:1},16)]),_:1})])]),_:1},8,["open","title"])])}}},st=G(at,[["__scopeId","data-v-d0706fa4"]]),ot={class:"team-members-pages"},lt={class:"list-box"},nt={class:"user-box"},rt=["src"],ut={class:"name-info"},it={class:"user-name"},dt={class:"nick-name"},ct=["onClick"],_t=["onClick"],pt=["onClick"],mt={__name:"team-members",setup(P){const c=ye(),{userInfo:S}=Be(c);Ie(()=>S.value.user_roles);const v=z({page:1,size:10,total:0,search:""}),B=f=>{v.page=f.current,v.size=f.pageSize,t()},u=()=>{v.page=1,t()},w=y([]),t=()=>{let f={page:v.page,size:v.size,search:v.search};be(f).then(i=>{let n=i.data.list;n.forEach(r=>{r.login_time=r.login_time>0?se(r.login_time*1e3).format("YYYY-MM-DD HH:mm"):"--"}),w.value=n,v.total=+i.data.total})};u();const I=y(null),A=()=>{I.value.add()},g=f=>{I.value.edit(f)},b=y(null),s=f=>{b.value.open(f)},U=f=>{X.confirm({title:"提示?",icon:e(oe),content:"确认删除该用户",okText:"确认",okType:"danger",cancelText:"取消",onOk:()=>{Ce({id:f.id}).then(i=>{T.success("删除成功"),t()})},onCancel(){}})};return(f,i)=>{const n=le,r=de,d=te,o=pe,O=me;return p(),L("div",ot,[e(d,{justify:"space-between"},{default:a(()=>[e(n,{type:"primary",onClick:A},{icon:a(()=>[e(x(ee))]),default:a(()=>[M(" 添加团队成员 ")]),_:1}),e(r,{value:v.search,"onUpdate:value":i[0]||(i[0]=l=>v.search=l),placeholder:"输入成员账号或昵称搜索",style:{width:"288px"},onSearch:u},null,8,["value"])]),_:1}),m("div",lt,[e(O,{"data-source":w.value,pagination:{current:v.page,total:v.total,pageSize:v.size,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]},onChange:B},{default:a(()=>[e(o,{title:"姓名","data-index":"user_name",width:"300px"},{default:a(({record:l})=>[m("div",nt,[m("img",{src:l.avatar||x($),alt:""},null,8,rt),m("div",ut,[m("div",it,k(l.user_name),1),m("div",dt,k(l.nick_name),1)])])]),_:1}),e(o,{title:"角色","data-index":"user_roles",width:"190px"},{default:a(({record:l})=>[M(k(l.role),1)]),_:1}),e(o,{title:"最近登录时间","data-index":"login_time",width:"190px"},{default:a(({record:l})=>[M(k(l.login_time),1)]),_:1}),e(o,{title:"最近登录IP","data-index":"IP",width:"190px"},{default:a(({record:l})=>[M(k(l.login_ip),1)]),_:1}),e(o,{title:"操作","data-index":"action",width:"208px"},{default:a(({record:l})=>[l.user_roles!=1?(p(),E(d,{key:0,gap:16},{default:a(()=>[m("a",{onClick:h=>g(l)},"编辑",8,ct),m("a",{onClick:h=>s(l)},"重置密码",8,_t),m("a",{onClick:h=>U(l)},"移除",8,pt)]),_:2},1024)):W("",!0)]),_:1})]),_:1},8,["data-source","pagination"])]),e(et,{ref_key:"addTeamMembersRef",ref:I,onOk:t},null,512),e(st,{ref_key:"resetPasswordRef",ref:b,onOk:t},null,512)])}}},vt=G(mt,[["__scopeId","data-v-87672c33"]]),Y=P=>(ne("data-v-d2b55935"),P=P(),re(),P),ft={class:"form-box"},ht={class:"role-check-box"},gt=Y(()=>m("div",{class:"title-row"},"机器人管理",-1)),kt={class:"check-num"},wt={class:"role-check-box"},yt=Y(()=>m("div",{class:"title-row"},"知识库管理",-1)),bt={class:"check-num"},Ct={class:"role-check-box"},xt=Y(()=>m("div",{class:"title-row"},"系统设置",-1)),At={class:"check-num"},Ut={class:"role-check-box"},St=Y(()=>m("div",{class:"title-row"},"客户端管理",-1)),Ot={class:"check-num"},Pt={__name:"add-role",emits:["ok"],setup(P,{expose:c,emit:S}){const v=S,B=N.useForm;let u=[],w=[],t=[],I=[];xe().then(l=>{u=[{label:l.data[1].name,value:l.data[1].uni_key}],w=[{label:l.data[2].name,value:l.data[2].uni_key}],t=[{label:l.data[3].name,value:l.data[3].uni_key}],I=[{label:l.data[4].name,value:l.data[4].uni_key}]});const A=y(!1),g=y("添加角色"),b=y(""),s=z({name:"",mark:"",robotChecked:[],libraryChecked:[],systemChecked:[],clientChecked:[],role_type:""}),U=z({name:[{message:"请输入角色名称",required:!0}]}),{resetFields:f,validate:i,validateInfos:n}=B(s,U),r=()=>{g.value="添加角色",b.value="",A.value=!0,s.name="",s.mark="",f()},d=l=>{g.value="编辑角色",b.value=l.id,Ae({id:l.id}).then(h=>{let D=h.data,F=D.role_permission||[];s.name=D.name,s.mark=D.mark,s.role_type=D.role_type,s.robotChecked=o(u,F),s.libraryChecked=o(w,F),s.systemChecked=o(t,F),s.clientChecked=o(I,F),A.value=!0})},o=(l,h)=>{let D=[];return l.forEach(F=>{h.includes(F.value)&&D.push(F.value)}),D},O=()=>{i().then(()=>{let l=[...s.robotChecked,...s.libraryChecked,...s.systemChecked,...s.clientChecked],h={id:b.value,name:s.name,mark:s.mark,role_type:s.role_type,uni_keys:l.join(",")};Ue(h).then(D=>{A.value=!1,T.success("保存成功"),v("ok")})})};return c({add:r,edit:d}),(l,h)=>{const D=ce,F=J,Q=De,H=te,C=Ee,Z=ze,j=Ge,V=Re,ve=N,fe=X;return p(),L("div",null,[e(fe,{open:A.value,"onUpdate:open":h[6]||(h[6]=_=>A.value=_),title:g.value,onOk:O,width:"746px"},{default:a(()=>[m("div",ft,[e(ve,{layout:"vertical"},{default:a(()=>[e(F,R({label:"角色名称"},x(n).name),{default:a(()=>[e(D,{type:"text",maxlength:100,placeholder:"请输入角色名称",value:s.name,"onUpdate:value":h[0]||(h[0]=_=>s.name=_)},null,8,["value"])]),_:1},16),e(F,{label:"角色备注"},{default:a(()=>[e(Q,{value:s.mark,"onUpdate:value":h[1]||(h[1]=_=>s.mark=_),placeholder:"请输入知识库介绍"},null,8,["value"])]),_:1}),e(F,{label:"角色权限"},{default:a(()=>[m("div",ht,[e(H,{class:"title-boock",justify:"space-between"},{default:a(()=>[gt,m("div",kt,k(s.robotChecked.length)+"/"+k(x(u).length),1)]),_:1}),e(V,{value:s.robotChecked,"onUpdate:value":h[2]||(h[2]=_=>s.robotChecked=_),style:{width:"100%"}},{default:a(()=>[e(j,{gutter:[0,12]},{default:a(()=>[(p(!0),L(q,null,K(x(u),_=>(p(),E(Z,{span:6,key:_.value},{default:a(()=>[e(C,{value:_.value},{default:a(()=>[M(k(_.label),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])]),m("div",wt,[e(H,{class:"title-boock",justify:"space-between"},{default:a(()=>[yt,m("div",bt,k(s.libraryChecked.length)+"/"+k(x(w).length),1)]),_:1}),e(V,{value:s.libraryChecked,"onUpdate:value":h[3]||(h[3]=_=>s.libraryChecked=_),style:{width:"100%"}},{default:a(()=>[e(j,{gutter:[0,12]},{default:a(()=>[(p(!0),L(q,null,K(x(w),_=>(p(),E(Z,{span:6,key:_.value},{default:a(()=>[e(C,{value:_.value},{default:a(()=>[M(k(_.label),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])]),m("div",Ct,[e(H,{class:"title-boock",justify:"space-between"},{default:a(()=>[xt,m("div",At,k(s.systemChecked.length)+"/"+k(x(t).length),1)]),_:1}),e(V,{value:s.systemChecked,"onUpdate:value":h[4]||(h[4]=_=>s.systemChecked=_),style:{width:"100%"}},{default:a(()=>[e(j,{gutter:[0,12]},{default:a(()=>[(p(!0),L(q,null,K(x(t),_=>(p(),E(Z,{span:6,key:_.value},{default:a(()=>[e(C,{value:_.value},{default:a(()=>[M(k(_.label),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])]),m("div",Ut,[e(H,{class:"title-boock",justify:"space-between"},{default:a(()=>[St,m("div",Ot,k(s.clientChecked.length)+"/"+k(x(I).length),1)]),_:1}),e(V,{value:s.clientChecked,"onUpdate:value":h[5]||(h[5]=_=>s.clientChecked=_),style:{width:"100%"}},{default:a(()=>[e(j,{gutter:[0,12]},{default:a(()=>[(p(!0),L(q,null,K(x(I),_=>(p(),E(Z,{span:6,key:_.value},{default:a(()=>[e(C,{value:_.value},{default:a(()=>[M(k(_.label),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])])]),_:1})]),_:1})])]),_:1},8,["open","title"])])}}},Bt=G(Pt,[["__scopeId","data-v-d2b55935"]]),It={class:"team-members-pages"},Mt={class:"list-box"},Lt={__name:"role-permissions",setup(P){y("");const c=z({page:1,size:10,total:0,search:""}),S=y([{}]),v=g=>{c.page=g.current,c.size=g.pageSize,u()},B=()=>{c.page=1,u()},u=()=>{let g={page:c.page,size:c.size,search:c.search};ae(g).then(b=>{let s=b.data.list;s.forEach(U=>{U.update_time=se(U.update_time*1e3).format("YYYY-MM-DD HH:mm")}),S.value=s,c.total=+b.data.total})};B();const w=y(null),t=()=>{w.value.add()},I=g=>{w.value.edit(g)},A=g=>{X.confirm({title:"提示?",icon:e(oe),content:"确认删除该角色",okText:"确认",okType:"danger",cancelText:"取消",onOk:()=>{Se({id:g.id}).then(b=>{T.success("删除成功"),u()})},onCancel(){}})};return(g,b)=>{const s=le,U=de,f=te,i=pe,n=me;return p(),L("div",It,[e(f,{justify:"space-between"},{default:a(()=>[e(s,{type:"primary",onClick:t},{icon:a(()=>[e(x(ee))]),default:a(()=>[M(" 添加角色 ")]),_:1}),e(U,{value:c.search,"onUpdate:value":b[0]||(b[0]=r=>c.search=r),placeholder:"输入角色名称",style:{width:"288px"},onSearch:B},null,8,["value"])]),_:1}),m("div",Mt,[e(n,{"data-source":S.value,pagination:{current:c.page,total:c.total,pageSize:c.size,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]},onChange:v},{default:a(()=>[e(i,{title:"角色","data-index":"name",width:"157px"},{default:a(({record:r})=>[M(k(r.name),1)]),_:1}),e(i,{title:"备注","data-index":"mark",width:"480px"},{default:a(({record:r})=>[M(k(r.mark),1)]),_:1}),e(i,{title:"最近修改时间","data-index":"update_time",width:"130px"},{default:a(({record:r})=>[M(k(r.update_time),1)]),_:1}),e(i,{title:"最近修改人","data-index":"operate_name",width:"130px"},{default:a(({record:r})=>[M(k(r.operate_name),1)]),_:1}),e(i,{title:"创建人","data-index":"create_name",width:"130px"},{default:a(({record:r})=>[M(k(r.create_name),1)]),_:1}),e(i,{title:"操作","data-index":"action",width:"178px"},{default:a(({record:r})=>[e(f,{gap:16,class:"action-box"},{default:a(()=>[e(s,{type:"link",onClick:d=>I(r),disabled:r.role_type=="1"},{default:a(()=>[M("编辑")]),_:2},1032,["onClick","disabled"]),e(s,{type:"link",onClick:d=>A(r),disabled:r.id<=3},{default:a(()=>[M("删除")]),_:2},1032,["onClick","disabled"])]),_:2},1024)]),_:1})]),_:1},8,["data-source","pagination"])]),e(Bt,{ref_key:"addRoleRef",ref:w,onOk:u},null,512)])}}},Ft=G(Lt,[["__scopeId","data-v-adb445d6"]]),Dt={class:"user-model-page"},Et={class:"list-wrapper"},Rt={__name:"index",setup(P){const c=y(1),S=()=>{c.value};return(v,B)=>(p(),L("div",Dt,[e(qe,{value:c.value,"onUpdate:value":B[0]||(B[0]=u=>c.value=u),onChange:S},null,8,["value"]),m("div",Et,[c.value==1?(p(),E(vt,{key:0})):(p(),E(Ft,{key:1}))])]))}},ya=G(Rt,[["__scopeId","data-v-752bf84e"]]);export{ya as default};