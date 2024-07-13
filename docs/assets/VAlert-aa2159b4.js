import{c as z}from"./VRow-b1a49e72.js";import{q as $,h as D,b as L,l as p,n as F,c as w,t as O,v as R,w as j,i as E,f as M,o as q,p as J,g as K,F as N,z as Q,a as G,j as d,V as H}from"./index-29890cb8.js";import{m as U,a as W}from"./VContainer-5d6f8fa6.js";import{p as X,O as Y,I as Z,J as ee,P as te,c as o,K as ae,M as le,Q as ne,z as a,A as se}from"./index-b397a80f.js";const oe=z("v-alert-title"),re=["success","info","warning","error"],ie=X({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Y,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...U(),...$(),...D(),...L(),...p(),...F(),...w(),...W(),...Z(),...O({variant:"flat"})},"VAlert"),me=ee()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:t}=v;const r=te(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=ae(e),{colorClasses:b,colorStyles:k,variantClasses:P}=R(y),{densityClasses:V}=j(e),{dimensionStyles:C}=E(e),{elevationClasses:g}=M(e),{locationStyles:x}=q(e),{positionClasses:S}=J(e),{roundedClasses:_}=K(e),{textColorClasses:A,textColorStyles:h}=N(le(e,"borderColor")),{t:B}=ne(),i=o(()=>({"aria-label":B(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(t.prepend||n.value),I=!!(t.title||e.title),T=!!(t.close||e.closable);return r.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,b.value,V.value,g.value,S.value,_.value,P.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[Q(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",A.value],style:h.value},null),s&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},t.prepend):a(G,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[I&&a(oe,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),((c=t.text)==null?void 0:c.call(t))??e.text,(u=t.default)==null?void 0:u.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),T&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=t.close)==null?void 0:l.call(t,{props:i.value})]}}):a(H,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{me as V};