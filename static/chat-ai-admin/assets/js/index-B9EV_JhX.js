import{A as S,_ as O,b as W,C as F,d as h,F as k,G as x,H as y}from"../../index-BZ-otUXQ.js";import{_ as C}from"./index-B4WFSULC.js";import{j as _,r as c,L,M as z,V as s,a2 as D,u as I,Y as V,a3 as j,a4 as B}from"./vue-chunks-DrvJJrR0.js";import"./dayjs-Bv4VEw_C.js";import"./axios-Cm0UX6qg.js";import"./qs-QntUJHOZ.js";import"./crypto-js-BpV8n4kc.js";import"./FormItemContext-C7okzFJw.js";var P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z"}}]},name:"windows",theme:"filled"};const A=P;function v(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?Object(arguments[n]):{},i=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),i.forEach(function(o){q(t,o,e[o])})}return t}function q(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var p=function(n,e){var i=v({},n,e.attrs);return _(S,v({},i,{icon:A}),null)};p.displayName="WindowsFilled";p.inheritAttrs=!1;const E=p,H="/assets/img/client-download-pic-D_c9zEa_.png",d=t=>(j("data-v-4e48c35d"),t=t(),B(),t),M={class:"client-download-page"},N={class:"login-required-switch"},T=d(()=>s("span",null,"需要登录：",-1)),R=d(()=>s("h3",{class:"page-title"},"客户端下载",-1)),$={class:"page-body"},G={class:"app-info"},U=d(()=>s("div",{class:"app-name"},"ChatWiki电脑客户端",-1)),Y={class:"banner"},J=d(()=>s("img",{src:H,alt:""},null,-1)),Q={__name:"index",setup(t){const{t:n}=W(),e=c(!1),i=()=>{F({client_side_login_switch:e.value?1:0}).then(()=>{h.success(n("common.saveSuccess"))})},o=c(""),r=c("Windows下载"),l=c(!1);let u=null;const f=()=>y({domain:""}).then(a=>(a.data.file_url?(l.value=!1,r.value="Windows下载",o.value=a.data.file_url,clearTimeout(u),u=null):(r.value="打包中...",l.value=!0,u=setTimeout(()=>{f()},5e3)),a)),w=()=>{l.value||f().then(a=>{a.data.file_url?k("",a.data.file_url):h.error("下载文件还没有准备好")})};return(()=>{x().then(a=>{e.value=a.data.client_side_login_switch==1})})(),(a,m)=>{const g=C;return L(),z("div",M,[s("div",N,[T,_(g,{checked:e.value,"onUpdate:checked":m[0]||(m[0]=b=>e.value=b),onChange:i},null,8,["checked"])]),R,s("div",$,[s("div",G,[U,s("div",Y,[J,s("div",{class:D(["download-btn",{disabled:l.value}]),onClick:w},[_(I(E),{class:"windows-icon"}),s("span",null,V(r.value),1)],2)])])])])}}},oe=O(Q,[["__scopeId","data-v-4e48c35d"]]);export{oe as default};