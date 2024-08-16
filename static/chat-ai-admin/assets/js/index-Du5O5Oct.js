import{j as E,c as ct,g as ut,a6 as st,r as G,L as H,M as V,Q as T,V as w,F as lt,a1 as ft,k as $,u as X,X as B,Y as dt,a3 as pt,a4 as yt}from"./vue-chunks-BakLQ6XW.js";import{u as vt}from"./robot-DKCI5SY7.js";import{l as mt,h as ht,i as _t,j as gt}from"./index-BpGRftn3.js";import{A as bt,_ as xt,M as Q,d as M,B as kt,T as Ct,E as Et}from"../../index-QYI4dmfl.js";import{_ as St}from"./index-NUjtZLqN.js";import{I as At}from"./Input-B-m7eF7I.js";import{_ as Tt}from"./index-CO3lywxj.js";import{_ as wt}from"./index-CTPYdmLs.js";import{_ as Ot}from"./index-C5JHLx9x.js";import{_ as Pt}from"./index-DRz0pvO_.js";import"./dayjs--xR4C_bb.js";import"./axios-Cm0UX6qg.js";import"./qs-nPXSgJGS.js";import"./crypto-js-KGFlroD9.js";import"./FormItemContext-DfXg-vvi.js";import"./index-B-KPxHLb.js";import"./Search-DVHH1l3S.js";import"./SearchOutlined-Xteprsdp.js";import"./inputProps-CY0nAgGz.js";import"./TextArea-BInVhD59.js";import"./index-DvsTPK3W.js";import"./colors-DFPXDQoC.js";import"./Password-DZ8X6uZ4.js";var It={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const Lt=It;function J(_){for(var x=1;x<arguments.length;x++){var k=arguments[x]!=null?Object(arguments[x]):{},b=Object.keys(k);typeof Object.getOwnPropertySymbols=="function"&&(b=b.concat(Object.getOwnPropertySymbols(k).filter(function(h){return Object.getOwnPropertyDescriptor(k,h).enumerable}))),b.forEach(function(h){Mt(_,h,k[h])})}return _}function Mt(_,x,k){return x in _?Object.defineProperty(_,x,{value:k,enumerable:!0,configurable:!0,writable:!0}):_[x]=k,_}var z=function(x,k){var b=J({},x,k.attrs);return E(bt,J({},b,{icon:Lt}),null)};z.displayName="CopyOutlined";z.inheritAttrs=!1;const Rt=z;var W={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(_,x){(function(b,h){_.exports=h()})(ct,function(){return function(){var k={686:function(d,r,t){t.d(r,{default:function(){return at}});var u=t(279),l=t.n(u),p=t(370),g=t.n(p),m=t(817),y=t.n(m);function i(c){try{return document.execCommand(c)}catch{return!1}}var v=function(n){var e=y()(n);return i("cut"),e},s=v;function C(c){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(o,"px"),e.setAttribute("readonly",""),e.value=c,e}var P=function(n,e){var o=C(n);e.container.appendChild(o);var a=y()(o);return i("copy"),o.remove(),a},K=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},o="";return typeof n=="string"?o=P(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?o=P(n.value,e):(o=y()(n),i("copy")),o},I=K;function O(c){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(e){return typeof e}:O=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(c)}var S=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,o=e===void 0?"copy":e,a=n.container,f=n.target,A=n.text;if(o!=="copy"&&o!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(f!==void 0)if(f&&O(f)==="object"&&f.nodeType===1){if(o==="copy"&&f.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(o==="cut"&&(f.hasAttribute("readonly")||f.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(A)return I(A,{container:a});if(f)return o==="cut"?s(f):I(f,{container:a})},R=S;function L(c){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(e){return typeof e}:L=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(c)}function Z(c,n){if(!(c instanceof n))throw new TypeError("Cannot call a class as a function")}function Y(c,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(c,o.key,o)}}function q(c,n,e){return n&&Y(c.prototype,n),e&&Y(c,e),c}function tt(c,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(n&&n.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),n&&D(c,n)}function D(c,n){return D=Object.setPrototypeOf||function(o,a){return o.__proto__=a,o},D(c,n)}function et(c){var n=rt();return function(){var o=j(c),a;if(n){var f=j(this).constructor;a=Reflect.construct(o,arguments,f)}else a=o.apply(this,arguments);return nt(this,a)}}function nt(c,n){return n&&(L(n)==="object"||typeof n=="function")?n:ot(c)}function ot(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function rt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function j(c){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(c)}function F(c,n){var e="data-clipboard-".concat(c);if(n.hasAttribute(e))return n.getAttribute(e)}var it=function(c){tt(e,c);var n=et(e);function e(o,a){var f;return Z(this,e),f=n.call(this),f.resolveOptions(a),f.listenClick(o),f}return q(e,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof a.action=="function"?a.action:this.defaultAction,this.target=typeof a.target=="function"?a.target:this.defaultTarget,this.text=typeof a.text=="function"?a.text:this.defaultText,this.container=L(a.container)==="object"?a.container:document.body}},{key:"listenClick",value:function(a){var f=this;this.listener=g()(a,"click",function(A){return f.onClick(A)})}},{key:"onClick",value:function(a){var f=a.delegateTarget||a.currentTarget,A=this.action(f)||"copy",N=R({action:A,container:this.container,target:this.target(f),text:this.text(f)});this.emit(N?"success":"error",{action:A,text:N,trigger:f,clearSelection:function(){f&&f.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(a){return F("action",a)}},{key:"defaultTarget",value:function(a){var f=F("target",a);if(f)return document.querySelector(f)}},{key:"defaultText",value:function(a){return F("text",a)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(a){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return I(a,f)}},{key:"cut",value:function(a){return s(a)}},{key:"isSupported",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],f=typeof a=="string"?[a]:a,A=!!document.queryCommandSupported;return f.forEach(function(N){A=A&&!!document.queryCommandSupported(N)}),A}}]),e}(l()),at=it},828:function(d){var r=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(l,p){for(;l&&l.nodeType!==r;){if(typeof l.matches=="function"&&l.matches(p))return l;l=l.parentNode}}d.exports=u},438:function(d,r,t){var u=t(828);function l(m,y,i,v,s){var C=g.apply(this,arguments);return m.addEventListener(i,C,s),{destroy:function(){m.removeEventListener(i,C,s)}}}function p(m,y,i,v,s){return typeof m.addEventListener=="function"?l.apply(null,arguments):typeof i=="function"?l.bind(null,document).apply(null,arguments):(typeof m=="string"&&(m=document.querySelectorAll(m)),Array.prototype.map.call(m,function(C){return l(C,y,i,v,s)}))}function g(m,y,i,v){return function(s){s.delegateTarget=u(s.target,y),s.delegateTarget&&v.call(m,s)}}d.exports=p},879:function(d,r){r.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},r.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||r.node(t[0]))},r.string=function(t){return typeof t=="string"||t instanceof String},r.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(d,r,t){var u=t(879),l=t(438);function p(i,v,s){if(!i&&!v&&!s)throw new Error("Missing required arguments");if(!u.string(v))throw new TypeError("Second argument must be a String");if(!u.fn(s))throw new TypeError("Third argument must be a Function");if(u.node(i))return g(i,v,s);if(u.nodeList(i))return m(i,v,s);if(u.string(i))return y(i,v,s);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function g(i,v,s){return i.addEventListener(v,s),{destroy:function(){i.removeEventListener(v,s)}}}function m(i,v,s){return Array.prototype.forEach.call(i,function(C){C.addEventListener(v,s)}),{destroy:function(){Array.prototype.forEach.call(i,function(C){C.removeEventListener(v,s)})}}}function y(i,v,s){return l(document.body,i,v,s)}d.exports=p},817:function(d){function r(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var l=t.hasAttribute("readonly");l||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),l||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var p=window.getSelection(),g=document.createRange();g.selectNodeContents(t),p.removeAllRanges(),p.addRange(g),u=p.toString()}return u}d.exports=r},279:function(d){function r(){}r.prototype={on:function(t,u,l){var p=this.e||(this.e={});return(p[t]||(p[t]=[])).push({fn:u,ctx:l}),this},once:function(t,u,l){var p=this;function g(){p.off(t,g),u.apply(l,arguments)}return g._=u,this.on(t,g,l)},emit:function(t){var u=[].slice.call(arguments,1),l=((this.e||(this.e={}))[t]||[]).slice(),p=0,g=l.length;for(p;p<g;p++)l[p].fn.apply(l[p].ctx,u);return this},off:function(t,u){var l=this.e||(this.e={}),p=l[t],g=[];if(p&&u)for(var m=0,y=p.length;m<y;m++)p[m].fn!==u&&p[m].fn._!==u&&g.push(p[m]);return g.length?l[t]=g:delete l[t],this}},d.exports=r,d.exports.TinyEmitter=r}},b={};function h(d){if(b[d])return b[d].exports;var r=b[d]={exports:{}};return k[d](r,r.exports,h),r.exports}return function(){h.n=function(d){var r=d&&d.__esModule?function(){return d.default}:function(){return d};return h.d(r,{a:r}),r}}(),function(){h.d=function(d,r){for(var t in r)h.o(r,t)&&!h.o(d,t)&&Object.defineProperty(d,t,{enumerable:!0,get:r[t]})}}(),function(){h.o=function(d,r){return Object.prototype.hasOwnProperty.call(d,r)}}(),h(686)}().default})})(W);var jt=W.exports;const Nt=ut(jt),Bt=_=>{const x=(_==null?void 0:_.appendToBody)===void 0?!0:_.appendToBody;return{toClipboard(k,b){return new Promise((h,d)=>{const r=document.createElement("button"),t=new Nt(r,{text:()=>k,action:()=>"copy",container:b!==void 0?b:document.body});t.on("success",u=>{t.destroy(),h(u)}),t.on("error",u=>{t.destroy(),d(u)}),x&&document.body.appendChild(r),r.click(),x&&document.body.removeChild(r)})}}},U=_=>(pt("data-v-a3fa6675"),_=_(),yt(),_),Kt={class:"page-container"},Dt=U(()=>w("div",{class:"page-title"},"API Key管理",-1)),Ft=U(()=>w("div",{class:"alert-content"},[w("div",null," 请妥善保管您的API Key,注意不要外泄。API Key外泄可能导致其他人使用此Key访问您的机器人，消耗您模型资源。 ")],-1)),Ht={class:"opration-box"},Vt={class:"list-box"},$t={class:"key-content"},zt=U(()=>w("span",null,"API Key：",-1)),Ut={class:"right-box"},Yt={__name:"index",setup(_){const{toClipboard:x}=Bt(),k=vt(),{robotInfo:b}=st(k),h=G(""),d=G([]),r=()=>{mt({robot_key:b.value.robot_key}).then(y=>{h.value=y.data.end_point,d.value=y.data.list})};r();const t=y=>{_t({robot_key:b.value.robot_key,id:y.id}).then(i=>{M.success("更新成功"),r()})},u=()=>{Q.confirm({title:$("div",{style:"color:#262626; font-weight: 600;"},"新增API Key"),icon:null,content:$("div",{style:" color: #f10; line-height: 22px;"},"请妥善保管您的API Key,注意不要外泄。API Key外泄可能导致其他人使用此Key访问您的机器人，消耗您模型资源。"),bodyStyle:{padding:"12px 8px 4px 12px"},okText:"创建",width:480,onOk:()=>{l()},onCancel:()=>{}})},l=()=>{ht({robot_key:b.value.robot_key}).then(y=>{M.success("创建成功"),r()})},p=y=>{let i=5,v=g(y.key),s=Q.confirm({title:`确定删除API Key：${v}`,icon:E(Et),content:$("div",{style:{color:"#FB363F"}},"删除后，将无法使用该Key调用接口"),okText:i+" 确 定",okType:"danger",cancelText:"取 消",okButtonProps:{disabled:!0},onOk(){gt({robot_key:b.value.robot_key,id:y.id}).then(P=>{M.success("删除成功"),r()})},onCancel(){}}),C=setInterval(()=>{i==1?(s.update({okText:"确 定",okButtonProps:{disabled:!1}}),clearInterval(C),C=void 0):(i-=1,s.update({okText:i+" 确 定",okButtonProps:{disabled:!0}}))},1e3)};function g(y){let i=y.slice(0,4),v=y.slice(-4);return y.length<=4?y:y.length<=8?i+"...":i+"..."+v}const m=async y=>{try{await x(y),M.success("复制成功")}catch{M.error("复制失败")}};return(y,i)=>{const v=Tt,s=kt,C=At,P=wt,K=St,I=Ot,O=Pt;return H(),V("div",Kt,[Dt,E(v,{class:"mt8",type:"info","show-icon":""},{icon:T(()=>[w("div",null,[E(X(Ct))])]),message:T(()=>[Ft]),_:1}),w("div",Ht,[E(s,{type:"primary",onClick:u},{default:T(()=>[B("新增API Key")]),_:1}),E(K,{compact:""},{default:T(()=>[E(C,{value:h.value,"onUpdate:value":i[0]||(i[0]=S=>h.value=S),style:{width:"280px"}},null,8,["value"]),E(P,{title:"复制API Endpoint"},{default:T(()=>[E(s,{onClick:i[1]||(i[1]=S=>m(h.value))},{icon:T(()=>[E(X(Rt))]),_:1})]),_:1})]),_:1}),E(s,{style:{"margin-left":"auto"}},{default:T(()=>[B("API 文档")]),_:1})]),w("div",Vt,[(H(!0),V(lt,null,ft(d.value,S=>(H(),V("div",{class:"list-item",key:S.id},[E(O,{justify:"space-between",align:"center"},{default:T(()=>[w("div",$t,[zt,w("span",null,dt(S.key),1)]),w("div",Ut,[E(I,{onChange:R=>t(S),checked:S.status==1,"checked-children":"开","un-checked-children":"关"},null,8,["onChange","checked"]),E(s,{onClick:R=>m(S.key)},{default:T(()=>[B("复制")]),_:2},1032,["onClick"]),E(s,{danger:"",onClick:R=>p(S)},{default:T(()=>[B("删除")]),_:2},1032,["onClick"])])]),_:2},1024)]))),128))])])}}},he=xt(Yt,[["__scopeId","data-v-a3fa6675"]]);export{he as default};