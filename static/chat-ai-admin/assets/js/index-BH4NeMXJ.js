import{$ as S,r as k,L as p,M as m,V as t,j as a,u as y,F as b,a1 as B,a7 as d,Y as _,Q as r,a3 as I,a4 as T}from"./vue-chunks-BakLQ6XW.js";import{A as $,_ as O}from"./add-data-sheet-B4amKRDu.js";import{g as P,d as E}from"./index-z4sQzj5e.js";import{_ as F,M as L,E as j,d as A}from"../../index-QYI4dmfl.js";import{_ as R,M as V}from"./index-CUqhTkNL.js";import"./index-B_MMLMOx.js";import{D as N}from"./dropdown-CILlEKJC.js";import{P as q}from"./PlusCircleOutlined-DMtOibAQ.js";import{M as G}from"./MoreOutlined-EPgTPNsh.js";import"./index-3DXu9bgV.js";import"./colors-DFPXDQoC.js";import"./Input-B-m7eF7I.js";import"./FormItemContext-DfXg-vvi.js";import"./index-B-KPxHLb.js";import"./inputProps-CY0nAgGz.js";import"./responsiveObserve-DyMgoyhx.js";import"./collapseMotion-0mJ0KE5h.js";import"./index-CTPYdmLs.js";import"./QuestionCircleOutlined-C2pUlNX4.js";import"./index-NUjtZLqN.js";import"./Search-DVHH1l3S.js";import"./SearchOutlined-Xteprsdp.js";import"./TextArea-BInVhD59.js";import"./index-DvsTPK3W.js";import"./Password-DZ8X6uZ4.js";import"./dayjs--xR4C_bb.js";import"./axios-Cm0UX6qg.js";import"./qs-nPXSgJGS.js";import"./crypto-js-KGFlroD9.js";import"./shallowequal-q0YU5nsK.js";import"./slide-C7fB9ZqY.js";import"./Dropdown-w3dDSh2I.js";import"./RightOutlined-Cd68P3tJ.js";import"./move-CXLiHXAi.js";const x=n=>(I("data-v-872d47c2"),n=n(),T(),n),Q={class:"library-page"},Y={class:"library-page-body"},z={class:"list-box"},H={class:"list-item-wrapper"},J=x(()=>t("span",{class:"add-library-text"},"新增数据表",-1)),K=["onClick"],U={class:"item-header"},W=x(()=>t("img",{class:"library-icon",src:O,alt:""},null,-1)),X={class:"library-info"},Z={class:"library-title"},tt={class:"library-num"},ot=["onClick"],et=["onClick"],st={class:"library-desc"},at={__name:"index",setup(n){const C=S(),u=k([]),c=()=>{P({}).then(o=>{u.value=o.data||[]})};c();const f=k(null),v=(o={})=>{f.value.show(o)},g=o=>{C.push({path:"/database/details",query:{form_id:o.id,name:o.name}})},w=o=>{let e=3,i=L.confirm({title:"删除确认",icon:a(j),content:`删除数据表后，表中所有数据将一并被删除，不可恢复。确认删除数据表${o.name}吗?`,okText:e+" 确 定",okType:"danger",okButtonProps:{disabled:!0},cancelText:"取 消",onOk(){D(o)},onCancel(){}}),l=setInterval(()=>{e==1?(i.update({okText:"确 定",okButtonProps:{disabled:!1}}),clearInterval(l),l=void 0):(e-=1,i.update({okText:e+" 确 定",okButtonProps:{disabled:!0}}))},1e3)},D=({id:o})=>{E({id:o}).then(()=>{A.success("删除成功"),c()})};return(o,e)=>{const i=R,l=V,M=N;return p(),m(b,null,[t("div",Q,[t("div",Y,[t("div",z,[t("div",H,[t("div",{class:"list-item add-library",onClick:e[0]||(e[0]=s=>v())},[a(y(q),{class:"add-library-icon"}),J])]),(p(!0),m(b,null,B(u.value,s=>(p(),m("div",{class:"list-item-wrapper",key:s.id},[t("div",{class:"list-item",onClick:d(h=>g(s),["stop"])},[t("div",U,[W,t("div",X,[t("div",Z,_(s.name),1),t("div",tt,[t("span",null,"数据："+_(s.entry_count)+"条",1)])]),t("span",{class:"item-action",onClick:e[2]||(e[2]=d(()=>{},["stop"]))},[a(M,null,{overlay:r(()=>[a(l,null,{default:r(()=>[a(i,null,{default:r(()=>[t("a",{href:"javascript:;",onClick:d(h=>v(s),["stop"])},"编 辑",8,ot)]),_:2},1024),a(i,null,{default:r(()=>[t("a",{class:"delete-text-color",href:"javascript:;",onClick:h=>w(s)},"删 除",8,et)]),_:2},1024)]),_:2},1024)]),default:r(()=>[t("span",{class:"menu-btn",onClick:e[1]||(e[1]=d(()=>{},["prevent"]))},[a(y(G))])]),_:2},1024)])]),t("div",st,_(s.description),1)],8,K)]))),128))])])]),a($,{onOk:c,ref_key:"addDataSheetRef",ref:f},null,512)],64)}}},Rt=F(at,[["__scopeId","data-v-872d47c2"]]);export{Rt as default};