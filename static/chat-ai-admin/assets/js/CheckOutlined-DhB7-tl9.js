import{e as i,u as v,j as h,w as g,aa as m,k as p}from"./vue-chunks-CN-qMzA4.js";import{A as O}from"../../index-DMzxB8WT.js";function w(n,e){const{defaultValue:t,value:a=i()}=e||{};let r=typeof n=="function"?n():n;a.value!==void 0&&(r=v(a)),t!==void 0&&(r=typeof t=="function"?t():t);const l=i(r),c=i(r);h(()=>{let u=a.value!==void 0?a.value:l.value;e.postState&&(u=e.postState(u)),c.value=u});function s(u){const d=c.value;l.value=u,m(c.value)!==u&&e.onChange&&e.onChange(u,d)}return g(a,()=>{l.value=a.value}),[c,s]}var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};const C=b;function o(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.forEach(function(r){y(n,r,t[r])})}return n}function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var f=function(e,t){var a=o({},e,t.attrs);return p(O,o({},a,{icon:C}),null)};f.displayName="CheckOutlined";f.inheritAttrs=!1;const P=f;export{P as C,w as u};