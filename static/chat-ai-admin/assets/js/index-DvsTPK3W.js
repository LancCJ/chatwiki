import{bL as O,W as l}from"../../index-QYI4dmfl.js";import{n as R}from"./colors-DFPXDQoC.js";import{e as x,A as C,f as M,v as W,x as H,B,w as D}from"./vue-chunks-BakLQ6XW.js";const y=x({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup(i,v){let{slots:c}=v;const n=C({width:0,height:0,offsetHeight:0,offsetWidth:0});let h=null,s=null;const r=()=>{s&&(s.disconnect(),s=null)},b=e=>{const{onResize:t}=i,o=e[0].target,{width:p,height:w}=o.getBoundingClientRect(),{offsetWidth:d,offsetHeight:f}=o,g=Math.floor(p),m=Math.floor(w);if(n.width!==g||n.height!==m||n.offsetWidth!==d||n.offsetHeight!==f){const u={width:g,height:m,offsetWidth:d,offsetHeight:f};l(n,u),t&&Promise.resolve().then(()=>{t(l(l({},u),{offsetWidth:d,offsetHeight:f}),o)})}},z=M(),a=()=>{const{disabled:e}=i;if(e){r();return}const t=O(z);t!==h&&(r(),h=t),!s&&t&&(s=new R(b),s.observe(t))};return W(()=>{a()}),H(()=>{a()}),B(()=>{r()}),D(()=>i.disabled,()=>{a()},{flush:"post"}),()=>{var e;return(e=c.default)===null||e===void 0?void 0:e.call(c)[0]}}});export{y as R};