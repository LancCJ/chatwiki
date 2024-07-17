import{a0 as N,b as m,r as I,w as q,a5 as T,L as o,M as l,V as s,F as M,a1 as V,a2 as A,j as t,Q as c,X as S,Y as h,P as g,v as H,B as K,u as y,a6 as Q,a7 as W,a8 as R,A as F,U,a9 as X,W as D}from"./vue-chunks-BqR2sv6q.js";import{L as Y,a as G}from"./locale-dropdown-D3jYxeR8.js";import{_ as b,a as P,b as J,R as Z,c as ee,r as te,d as oe,M as se}from"../../index-3zhUo7yB.js";import{_ as ae,B as re}from"./index-BzrRB0me.js";import{_ as ne,M as le}from"./index-BRrao2Ax.js";import"./index-BnvbLpNa.js";import{D as ce}from"./dropdown-BzleFHKH.js";import{v as _e}from"./validate-CYzfr11z.js";import{F as E,a as ue,_ as ie}from"./Password-B44zxURS.js";import{_ as de}from"./index-M0sWD61D.js";import"./index-DD-RdiGP.js";import"./dayjs-CuJbp_-a.js";import"./axios-Cm0UX6qg.js";import"./qs-B6vlU9Aj.js";import"./crypto-js-Dyh51M5x.js";import"./DownOutlined-BGIGKQLl.js";import"./index-Ds1Q0oJ4.js";import"./collapseMotion-CZutXYv2.js";import"./slide-ZCl6ZFDX.js";import"./index-iH-Nu7mF.js";import"./Dropdown-dAJ9ZCrS.js";import"./RightOutlined-GbTdcqbp.js";import"./move-MIaOwSfN.js";import"./inputProps-C4OjRA3_.js";import"./FormItemContext-BTP630fU.js";import"./TextArea-DzoZEWPA.js";const pe={class:"navbar-wrapper"},me={class:"navbar"},ve={__name:"layout-navbar",setup(f){const e=N(),a=m(()=>e.meta.activeMenu||""),_=m(()=>e.path.split("/")[1]),u=I([{key:"robot",label:"robot",title:"机器人管理",path:"/robot/list"},{key:"library",label:"library",title:"知识库管理",path:"/library/list"},{key:"user",label:"user",title:"系统管理",path:"/user/model"}]);return q(()=>e.path,()=>{},{immediate:!0}),(p,r)=>{const n=T("router-link");return o(),l("div",pe,[s("div",me,[(o(!0),l(M,null,V(u.value,i=>(o(),l("div",{class:A(["nav-menu",{active:i.key===_.value||i.key===a.value}]),key:i.key},[t(n,{to:i.path,class:"nav-menu-name"},{default:c(()=>[S(h(i.title),1)]),_:2},1032,["to"])],2))),128))])])}}},fe=b(ve,[["__scopeId","data-v-f4acc127"]]),he={class:"layout-breadcrumb"},ye={key:1,class:"page-title"},be={__name:"layout-breadcrumb",props:{title:{type:[String,Boolean],default:""},items:{type:[Array,Boolean],default:()=>[]}},setup(f){const e=f;return(a,_)=>{const u=T("router-link"),p=ae,r=re;return o(),l("div",he,[e.items.length>0?(o(),g(r,{key:0},{default:c(()=>[(o(!0),l(M,null,V(e.items,(n,i)=>(o(),l(M,{key:n.title},[i!==e.items.length-1?(o(),g(p,{key:0},{default:c(()=>[t(u,{to:n.path},{default:c(()=>[S(h(n.title),1)]),_:2},1032,["to"])]),_:2},1024)):(o(),g(p,{key:1},{default:c(()=>[S(h(n.title),1)]),_:2},1024))],64))),128))]),_:1})):(o(),l("div",ye,h(e.title),1))])}}},we=b(be,[["__scopeId","data-v-c69a461d"]]),ke={class:"layout-footer"},ge={class:"copyright-text"},xe={__name:"layout-footer",setup(f){const e=P(),{t:a}=J(),_=I(null);return H(()=>{_.value=setInterval(()=>{setTimeout(()=>{e.refreshToken()},0)},Z)}),K(()=>{clearInterval(_.value),_.value=null}),(u,p)=>(o(),l("div",ke,[s("div",ge,h(y(a)("common.copyright")),1)]))}},$e=b(xe,[["__scopeId","data-v-ab337acb"]]),Ie={key:0,class:"user-dropdown"},Pe=["src"],Ce={class:"user-name"},Me={__name:"user-dropdown",setup(f){const e=P(),{userInfo:a,avatar:_,user_name:u}=Q(e),p=()=>{e.logoutConfirm(!0)};return(r,n)=>{const i=ee,w=ne,v=le,x=ce;return y(a)?(o(),l("div",Ie,[t(x,null,{overlay:c(()=>[t(v,null,{default:c(()=>[t(w,null,{default:c(()=>[s("a",{href:"javascript:;",onClick:p},"退出登录")]),_:1})]),_:1})]),default:c(()=>[s("div",{class:"user-dropdown-link",onClick:n[0]||(n[0]=W(()=>{},["prevent"]))},[s("img",{class:"user-avatar",src:y(_),alt:""},null,8,Pe),s("span",Ce,h(y(u)),1),t(i,{name:"arrow-down",style:{"font-size":"16px",color:"#8c8c8c"}})])]),_:1})])):R("",!0)}}},Se=b(Me,[["__scopeId","data-v-a80b4e62"]]),Re={class:"form-box"},Te={__name:"reset-password",setup(f,{expose:e}){const a=P(),_=E.useForm,u=I(!0),p=I("重置登录密码"),r=F({password:"",check_password:"",id:a.userInfo.user_id}),n=F({password:[{message:"请输入登录密码",required:!0},{validator:async(C,d)=>!_e(d)&&d?Promise.reject("密码必须包含字母、数字或者字符中的两种，6-32位"):Promise.resolve()}],check_password:[{message:"请输入确认密码",required:!0},{validator:async(C,d)=>d!=r.password&&d?Promise.reject("两次输入的密码不一致"):Promise.resolve()}]}),{resetFields:i,validate:w,validateInfos:v}=_(r,n),x=()=>{w().then(()=>{te({...X(r)}).then(C=>{oe.success("修改成功"),u.value=!1,a.reset(!0)})})},$=()=>{a.setResetPassModal()};return e({open}),(C,d)=>{const j=de,B=ue,L=ie,O=E,z=se;return o(),l("div",null,[t(z,{open:u.value,"onUpdate:open":d[2]||(d[2]=k=>u.value=k),title:p.value,onOk:x,width:"520px",onCancel:$},{default:c(()=>[t(j,{class:"alert-box",message:"您还未修改初始密码，为了保障您的数据安全，请您尽快重置密码。",type:"info","show-icon":""}),s("div",Re,[t(O,{layout:"vertical"},{default:c(()=>[t(L,U({label:"登录密码"},y(v).password),{default:c(()=>[t(B,{value:r.password,"onUpdate:value":d[0]||(d[0]=k=>r.password=k),placeholder:"密码必须包含字母、数字或者字符中的两种，6-32位"},null,8,["value"])]),_:1},16),t(L,U({label:"确认密码"},y(v).check_password),{default:c(()=>[t(B,{value:r.check_password,"onUpdate:value":d[1]||(d[1]=k=>r.check_password=k),placeholder:"请重新输入密码"},null,8,["value"])]),_:1},16)]),_:1})])]),_:1},8,["open","title"])])}}},Be=b(Te,[["__scopeId","data-v-9de4c189"]]),Le={class:"admin-layout"},Fe={class:"layout-header-wrapper"},Ue={class:"layout-header"},De={class:"header-left"},Ee={class:"header-body"},Ne={class:"header-right"},Ve={class:"item-box"},je={class:"item-box"},Oe={class:"layout-body"},ze={key:0,class:"layout-breadcrumb-wrapper"},qe={class:"layout-footer-wrapper"},Ae={__name:"index",setup(f){const e=N(),a=P(),_=m(()=>e.meta.isCustomPage||!1),u=m(()=>e.meta.pageStyle||{}),p=m(()=>e.meta.bgColor||"#ffffff"),r=m(()=>e.meta.breadcrumb||[]),n=m(()=>e.meta.hideTitle||!1),i=m(()=>e.meta.title||!1),w=m(()=>{var v;return((v=a.userInfo)==null?void 0:v.d_pass)==1&&a.isShowResetPassModal});return(v,x)=>{const $=T("router-view");return o(),l("div",Le,[s("div",Fe,[s("div",Ue,[s("div",De,[t(Y)]),s("div",Ee,[t(fe)]),s("div",Ne,[s("div",Ve,[t(G)]),s("div",je,[t(Se)])])])]),s("div",Oe,[_.value?(o(),g($,{key:0})):(o(),l("div",{key:1,class:"page-wrapper",style:D({"background-color":p.value})},[n.value?R("",!0):(o(),l("div",ze,[t(we,{items:r.value,title:i.value},null,8,["items","title"])])),s("div",{class:"page-container",style:D({...u.value})},[t($)],4)],4))]),s("div",qe,[t($e)]),w.value?(o(),g(Be,{key:0})):R("",!0)])}}},ht=b(Ae,[["__scopeId","data-v-1c78c62b"]]);export{ht as default};
