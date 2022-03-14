var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,n=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&l(e,a,t[a]);return e},c=(e,r)=>t(e,a(r));import{r as i,R as m,J as p,k as g,P as d,D as u,j as _,g as v}from"./vendor.3b6f54f7.js";import{a as x,F as f}from"./index.esm.023d01c8.js";import{r as E,s as h,f as b}from"./logs.1fac2d96.js";import{c as y,w as j,x as N,j as P,y as S,C,S as w,z as O,A as R,g as T,D as k}from"./index.812b4086.js";import{d as z}from"./debounce.cc85a806.js";import{u as L}from"./useRemainingViewPortHeight.c7e29e4e.js";import{F as D,p as F}from"./Fab.5de705c1.js";var W="_RuleSearch_1gcst_1",A="_RuleSearchContainer_1gcst_5",B="_inputWrapper_1gcst_10",I="_input_1gcst_10",M="_iconWrapper_1gcst_35";var H=y((e=>({searchText:j(e),updateSearchText:N})))((function({dispatch:e,searchText:t,updateSearchText:a}){const[r,s]=i.exports.useState(t),o=i.exports.useCallback((t=>{e(a(t))}),[e,a]),l=i.exports.useMemo((()=>z(o,300)),[o]);return m.createElement("div",{className:W},m.createElement("div",{className:A},m.createElement("div",{className:B},m.createElement("input",{type:"text",value:r,onChange:e=>{s(e.target.value),l(e.target.value)},className:I})),m.createElement("div",{className:M},m.createElement(p,{size:20}))))}));var J="_logMeta_1dg5t_1",K="_logType_1dg5t_8",V="_logTime_1dg5t_18",q="_logText_1dg5t_24",G="_logsWrapper_1dg5t_37",Q="_logPlaceholder_1dg5t_51",U="_logPlaceholderIcon_1dg5t_64";const{useCallback:X,memo:Y,useEffect:Z}=_,$={debug:"#28792c",info:"var(--bg-log-info-tag)",warning:"#b99105",error:"#c11c1c"};function ee({time:e,even:t,payload:a,type:r}){const s=v({even:t},"log");return i.exports.createElement("div",{className:s},i.exports.createElement("div",{className:J},i.exports.createElement("div",{className:V},e),i.exports.createElement("div",{className:K,style:{backgroundColor:$[r]}},r),i.exports.createElement("div",{className:q},a)))}function te(e,t){return t[e].id}const ae=Y((({index:e,style:t,data:a})=>{const r=a[e];return i.exports.createElement("div",{style:t},i.exports.createElement(ee,n({},r)))}),x);var re=y((e=>({logs:O(e),logLevel:R(e),apiConfig:T(e),logStreamingPaused:k(e)})))((function({dispatch:e,logLevel:t,apiConfig:a,logs:r,logStreamingPaused:s}){const o=P(),l=X((()=>{s?E(c(n({},a),{logLevel:t})):h(),o.app.updateAppConfig("logStreamingPaused",!s)}),[a,t,s,o.app]),m=X((t=>e(S(t))),[e]);Z((()=>{b(c(n({},a),{logLevel:t}),m)}),[a,t,m]);const[p,_]=L(),{t:v}=g();return i.exports.createElement("div",null,i.exports.createElement(C,{title:v("Logs")}),i.exports.createElement(H,null),i.exports.createElement("div",{ref:p,style:{paddingBottom:30}},0===r.length?i.exports.createElement("div",{className:Q,style:{height:_-30}},i.exports.createElement("div",{className:U},i.exports.createElement(w,{width:200,height:200})),i.exports.createElement("div",null,v("no_logs"))):i.exports.createElement("div",{className:G},i.exports.createElement(f,{height:_-30,width:"100%",itemCount:r.length,itemSize:80,itemData:r,itemKey:te},ae),i.exports.createElement(D,{icon:s?i.exports.createElement(d,{size:16}):i.exports.createElement(u,{size:16}),mainButtonStyles:s?{background:"#e74c3c"}:{},style:F,text:v(s?"Resume Refresh":"Pause Refresh"),onClick:l}))))}));export default re;
