import{J as c,aH as g,av as p,U as h,p as S,aI as b}from"./index-fefa9124.js";const _=S({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function s(o,d,i){return c()({name:o,props:_({mode:i,origin:d}),setup(e,r){let{slots:a}=r;const t={onBeforeEnter(n){e.origin&&(n.style.transformOrigin=e.origin)},onLeave(n){if(e.leaveAbsolute){const{offsetTop:l,offsetLeft:f,offsetWidth:y,offsetHeight:u}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${l}px`,n.style.left=`${f}px`,n.style.width=`${y}px`,n.style.height=`${u}px`}e.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(e.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:l,top:f,left:y,width:u,height:x}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=l||"",n.style.top=f||"",n.style.left=y||"",n.style.width=u||"",n.style.height=x||""}}};return()=>{const n=e.group?g:p;return h(n,{name:e.disabled?"":o,css:!e.disabled,...e.group?void 0:{mode:e.mode},...e.disabled?{}:t},a.default)}}})}function m(o,d){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return c()({name:o,props:{mode:{type:String,default:i},disabled:Boolean,group:Boolean},setup(e,r){let{slots:a}=r;const t=e.group?g:p;return()=>h(t,{name:e.disabled?"":o,css:!e.disabled,...e.disabled?{}:d},a.default)}})}function v(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",e=b(`offset-${i}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const l=`${t[e]}px`;t.style[i]="0",t.offsetHeight,t.style.transition=n.transition,o&&t._parent&&t._parent.classList.add(o),requestAnimationFrame(()=>{t.style[i]=l})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[e]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(t){o&&t._parent&&t._parent.classList.remove(o),a(t)}function a(t){const n=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[i]=n),delete t._initialStyle}}s("fab-transition","center center","out-in");s("dialog-bottom-transition");s("dialog-top-transition");const T=s("fade-transition");s("scale-transition");s("scroll-x-transition");s("scroll-x-reverse-transition");s("scroll-y-transition");s("scroll-y-reverse-transition");s("slide-x-transition");s("slide-x-reverse-transition");const L=s("slide-y-transition");s("slide-y-reverse-transition");const A=m("expand-transition",v()),B=m("expand-x-transition",v("",!0));export{A as V,T as a,B as b,L as c};
