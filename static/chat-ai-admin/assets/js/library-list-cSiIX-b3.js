import{$ as g,r as w,L as p,M as _,V as t,j as a,u as m,F as L,a1 as M,a7 as d,Y as c,Q as r,a3 as B,a4 as D}from"./vue-chunks-DrvJJrR0.js";import{g as I,d as T}from"./index-jkbC24gP.js";import{_ as P,aw as S,M as $,E as z,d as E}from"../../index-1XZddRjh.js";import{_ as O,M as j}from"./index-MrUKp-XO.js";import"./index-DDwmDBg_.js";import{D as F}from"./dropdown-M3hqrshK.js";import{P as V}from"./PlusCircleOutlined-b3kb2P3q.js";import{M as N}from"./MoreOutlined-Bg1bhnk0.js";import"./dayjs-Bv4VEw_C.js";import"./axios-Cm0UX6qg.js";import"./qs-QntUJHOZ.js";import"./crypto-js-BpV8n4kc.js";import"./shallowequal-CfnxU2uU.js";import"./colors-HGJN4rtO.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./collapseMotion-DfZt1qrJ.js";import"./slide-DiBPL1Vu.js";import"./index-BY3kojOB.js";import"./index-COlk-g_h.js";import"./Dropdown-DHG-AkFH.js";import"./RightOutlined-C9HAum8N.js";import"./move-BfDFh-Ii.js";const q=l=>(B("data-v-05fab5d6"),l=l(),D(),l),A={"bg-color":"#f5f9ff",class:"library-page"},G={class:"library-page-body"},Q={class:"list-box"},R={class:"list-item-wrapper"},Y=q(()=>t("span",{class:"add-library-text"},"新增知识库",-1)),H=["onClick"],J={class:"item-header"},K={class:"library-title"},U=["onClick"],W=["onClick"],X={class:"library-desc"},Z={class:"library-size"},tt={class:"file-size"},st={__name:"library-list",setup(l){const u=g(),f=w([]),b=()=>{I({}).then(s=>{f.value=s.data||[]})};b();const h=()=>{u.push({name:"addLibrary"})},v=s=>{u.push({name:"libraryDetails",query:{id:s.id}})},k=s=>{let e=3,i=$.confirm({title:`删除${s.library_name}`,icon:a(z),content:"您确定要删除此知识库吗？",okText:e+" 确 定",okType:"danger",okButtonProps:{disabled:!0},cancelText:"取 消",onOk(){C(s)},onCancel(){}}),n=setInterval(()=>{e==1?(i.update({okText:"确 定",okButtonProps:{disabled:!1}}),clearInterval(n),n=void 0):(e-=1,i.update({okText:e+" 确 定",okButtonProps:{disabled:!0}}))},1e3)},C=({id:s})=>{T({id:s}).then(()=>{E.success("删除成功"),b()})};return(s,e)=>{const i=O,n=j,x=F;return p(),_("div",A,[t("div",G,[t("div",Q,[t("div",R,[t("div",{class:"list-item add-library",onClick:h},[a(m(V),{class:"add-library-icon"}),Y])]),(p(!0),_(L,null,M(f.value,o=>(p(),_("div",{class:"list-item-wrapper",key:o.id},[t("div",{class:"list-item",onClick:d(y=>v(o),["stop"])},[t("div",J,[t("div",K,c(o.library_name),1),t("span",{class:"item-action",onClick:e[1]||(e[1]=d(()=>{},["stop"]))},[a(x,null,{overlay:r(()=>[a(n,null,{default:r(()=>[a(i,null,{default:r(()=>[t("a",{href:"javascript:;",onClick:d(y=>v(o),["stop"])},"管 理",8,U)]),_:2},1024),a(i,null,{default:r(()=>[t("a",{class:"delete-text-color",href:"javascript:;",onClick:y=>k(o)},"删 除",8,W)]),_:2},1024)]),_:2},1024)]),default:r(()=>[t("span",{class:"menu-btn",onClick:e[0]||(e[0]=d(()=>{},["prevent"]))},[a(m(N))])]),_:2},1024)])]),t("div",X,c(o.library_intro),1),t("div",Z,[t("span",null,"文档数："+c(o.file_total),1),t("span",tt,"文档大小："+c(m(S)(o.file_size)),1)])],8,H)]))),128))])])])}}},wt=P(st,[["__scopeId","data-v-05fab5d6"]]);export{wt as default};