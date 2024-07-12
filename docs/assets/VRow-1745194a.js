import{m as Q,a as we,u as We}from"./VContainer-1eb5bb50.js";import{a8 as He,au as ze,I as U,av as oe,as as gt,W as be,y as R,z as H,ar as me,p as D,S as yt,H as qe,J as Ue,r as $,af as z,a7 as Se,P as F,_ as j,aw as ht,c as P,V as ae,b as B,ad as Ae,ac as xe,ax as Ge,g as Ee,i as Ye,ay as ke,a2 as wt,s as J,m as bt,o as St,a as Ke,d as xt,ap as Et,ai as Ot,T as Pt,K as Ct,L as pt,j as At,az as kt,Q as Rt,U as Lt,R as Tt,F as Ft,aA as re}from"./index-b62e5b0f.js";import{y as Vt,c as Mt,N as Bt,F as Nt,H as _t,z as $t,g as Dt,O as jt,q as It,a as Wt,J as Ht,P as Re,Q as le,S as ce,T as Le,U as Te,r as zt,l as qt,B as Ut,o as Gt,d as Yt,v as Kt,W as Xt,M as Jt,X as Qt}from"./lazy-be39b521.js";class q{constructor(n){let{x:t,y:a,width:o,height:r}=n;this.x=t,this.y=a,this.width=o,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Fe(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function Xe(e){return Array.isArray(e)?new q({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Je(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let o,r,i,s,l;if(a.startsWith("matrix3d("))o=a.slice(9,-1).split(/, /),r=+o[0],i=+o[5],s=+o[12],l=+o[13];else if(a.startsWith("matrix("))o=a.slice(7,-1).split(/, /),r=+o[0],i=+o[3],s=+o[4],l=+o[5];else return new q(n);const u=t.transformOrigin,f=n.x-s-(1-r)*parseFloat(u),d=n.y-l-(1-i)*parseFloat(u.slice(u.indexOf(" ")+1)),h=r?n.width/r:e.offsetWidth+1,y=i?n.height/i:e.offsetHeight+1;return new q({x:f,y:d,width:h,height:y})}else return new q(n)}function X(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(o=>{a.onfinish=()=>{o(a)}})),a}const Z=new WeakMap;function Zt(e,n){Object.keys(n).forEach(t=>{if(He(t)){const a=ze(t),o=Z.get(e);if(n[t]==null)o==null||o.forEach(r=>{const[i,s]=r;i===a&&(e.removeEventListener(a,s),o.delete(r))});else if(!o||![...o].some(r=>r[0]===a&&r[1]===n[t])){e.addEventListener(a,n[t]);const r=o||new Set;r.add([a,n[t]]),Z.has(e)||Z.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function en(e,n){Object.keys(n).forEach(t=>{if(He(t)){const a=ze(t),o=Z.get(e);o==null||o.forEach(r=>{const[i,s]=r;i===a&&(e.removeEventListener(a,s),o.delete(r))})}else e.removeAttribute(t)})}function Yn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return U()({name:t??oe(gt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...Q()},setup(a,o){let{slots:r}=o;return()=>{var i;return be(a.tag,{class:[e,a.class],style:a.style},(i=r.default)==null?void 0:i.call(r))}}})}function Qe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const ge="cubic-bezier(0.4, 0, 0.2, 1)",tn="cubic-bezier(0.0, 0, 0.2, 1)",nn="cubic-bezier(0.4, 0, 1, 1)";function on(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?an(e):Oe(e))return e;e=e.parentElement}return document.scrollingElement}function te(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Oe(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Oe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function an(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function rn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const sn=D({target:[Object,Array]},"v-dialog-transition"),Kn=U()({name:"VDialogTransition",props:sn(),setup(e,n){let{slots:t}=n;const a={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,r){var h;await new Promise(y=>requestAnimationFrame(y)),await new Promise(y=>requestAnimationFrame(y)),o.style.visibility="";const{x:i,y:s,sx:l,sy:u,speed:f}=Me(e.target,o),d=X(o,[{transform:`translate(${i}px, ${s}px) scale(${l}, ${u})`,opacity:0},{}],{duration:225*f,easing:tn});(h=Ve(o))==null||h.forEach(y=>{X(y,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ge})}),d.finished.then(()=>r())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,r){var h;await new Promise(y=>requestAnimationFrame(y));const{x:i,y:s,sx:l,sy:u,speed:f}=Me(e.target,o);X(o,[{},{transform:`translate(${i}px, ${s}px) scale(${l}, ${u})`,opacity:0}],{duration:125*f,easing:nn}).finished.then(()=>r()),(h=Ve(o))==null||h.forEach(y=>{X(y,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ge})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?R(me,H({name:"dialog-transition"},a,{css:!1}),t):R(me,{name:"dialog-transition"},t)}});function Ve(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Me(e,n){const t=Xe(e),a=Je(n),[o,r]=getComputedStyle(n).transformOrigin.split(" ").map(A=>parseFloat(A)),[i,s]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let l=t.left+t.width/2;i==="left"||s==="left"?l-=t.width/2:(i==="right"||s==="right")&&(l+=t.width/2);let u=t.top+t.height/2;i==="top"||s==="top"?u-=t.height/2:(i==="bottom"||s==="bottom")&&(u+=t.height/2);const f=t.width/a.width,d=t.height/a.height,h=Math.max(1,f,d),y=f/h||0,m=d/h||0,v=a.width*a.height/(window.innerWidth*window.innerHeight),p=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:l-(o+a.left),y:u-(r+a.top),sx:y,sy:m,speed:p}}const ln=D({start:Boolean,end:Boolean,icon:yt,image:String,text:String,...Q(),...Vt(),...Mt(),...Bt(),...we(),...qe(),...Nt({variant:"flat"})},"VAvatar"),Xn=U()({name:"VAvatar",props:ln(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=Ue(e),{colorClasses:o,colorStyles:r,variantClasses:i}=_t(e),{densityClasses:s}=$t(e),{roundedClasses:l}=Dt(e),{sizeClasses:u,sizeStyles:f}=jt(e);return We(()=>R(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,o.value,s.value,l.value,u.value,i.value,e.class],style:[r.value,f.value,e.style]},{default:()=>{var d;return[e.image?R(It,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?R(Wt,{key:"icon",icon:e.icon},null):((d=t.default)==null?void 0:d.call(t))??e.text,Ht(!1,"v-avatar")]}})),{}}});function ue(e,n){return{x:e.x+n.x,y:e.y+n.y}}function cn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Be(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,r=t==="top"?0:t==="bottom"?n.height:t;return ue({x:o,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,r=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return ue({x:o,y:r},n)}return ue({x:n.width/2,y:n.height/2},n)}const Ze={static:dn,connected:mn},un=D({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ze},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function fn(e,n){const t=$({}),a=$();z&&Se(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var i,s;F(()=>e.locationStrategy,r),j(()=>{window.removeEventListener("resize",o),a.value=void 0}),window.addEventListener("resize",o,{passive:!0}),typeof e.locationStrategy=="function"?a.value=(i=e.locationStrategy(n,e,t))==null?void 0:i.updateLocation:a.value=(s=Ze[e.locationStrategy](n,e,t))==null?void 0:s.updateLocation});function o(r){var i;(i=a.value)==null||i.call(a,r)}return{contentStyles:t,updateLocation:a}}function dn(){}function vn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Je(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function mn(e,n,t){(Array.isArray(e.target.value)||rn(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:r}=ht(()=>{const m=Re(n.location,e.isRtl.value),v=n.origin==="overlap"?m:n.origin==="auto"?le(m):Re(n.origin,e.isRtl.value);return m.side===v.side&&m.align===ce(v).align?{preferredAnchor:Le(m),preferredOrigin:Le(v)}:{preferredAnchor:m,preferredOrigin:v}}),[i,s,l,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(m=>P(()=>{const v=parseFloat(n[m]);return isNaN(v)?1/0:v})),f=P(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const m=n.offset.split(" ").map(parseFloat);return m.length<2&&m.push(0),m}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let d=!1;const h=new ResizeObserver(()=>{d&&y()});F([e.target,e.contentEl],(m,v)=>{let[p,A]=m,[x,b]=v;x&&!Array.isArray(x)&&h.unobserve(x),p&&!Array.isArray(p)&&h.observe(p),b&&h.unobserve(b),A&&h.observe(A)},{immediate:!0}),j(()=>{h.disconnect()});function y(){if(d=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>d=!0)}),!e.target.value||!e.contentEl.value)return;const m=Xe(e.target.value),v=vn(e.contentEl.value,e.isRtl.value),p=te(e.contentEl.value),A=12;p.length||(p.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=p.reduce((O,S)=>{const g=S.getBoundingClientRect(),w=new q({x:S===document.documentElement?0:g.x,y:S===document.documentElement?0:g.y,width:S.clientWidth,height:S.clientHeight});return O?new q({x:Math.max(O.left,w.left),y:Math.max(O.top,w.top),width:Math.min(O.right,w.right)-Math.max(O.left,w.left),height:Math.min(O.bottom,w.bottom)-Math.max(O.top,w.top)}):w},void 0);x.x+=A,x.y+=A,x.width-=A*2,x.height-=A*2;let b={anchor:o.value,origin:r.value};function I(O){const S=new q(v),g=Be(O.anchor,m),w=Be(O.origin,S);let{x:T,y:M}=cn(g,w);switch(O.anchor.side){case"top":M-=f.value[0];break;case"bottom":M+=f.value[0];break;case"left":T-=f.value[0];break;case"right":T+=f.value[0];break}switch(O.anchor.align){case"top":M-=f.value[1];break;case"bottom":M+=f.value[1];break;case"left":T-=f.value[1];break;case"right":T+=f.value[1];break}return S.x+=T,S.y+=M,S.width=Math.min(S.width,l.value),S.height=Math.min(S.height,u.value),{overflows:Fe(S,x),x:T,y:M}}let V=0,k=0;const c={x:0,y:0},L={x:!1,y:!1};let ie=-1;for(;!(ie++>10);){const{x:O,y:S,overflows:g}=I(b);V+=O,k+=S,v.x+=O,v.y+=S;{const w=Te(b.anchor),T=g.x.before||g.x.after,M=g.y.before||g.y.after;let G=!1;if(["x","y"].forEach(C=>{if(C==="x"&&T&&!L.x||C==="y"&&M&&!L.y){const W={anchor:{...b.anchor},origin:{...b.origin}},Y=C==="x"?w==="y"?ce:le:w==="y"?le:ce;W.anchor=Y(W.anchor),W.origin=Y(W.origin);const{overflows:N}=I(W);(N[C].before<=g[C].before&&N[C].after<=g[C].after||N[C].before+N[C].after<(g[C].before+g[C].after)/2)&&(b=W,G=L[C]=!0)}}),G)continue}g.x.before&&(V+=g.x.before,v.x+=g.x.before),g.x.after&&(V-=g.x.after,v.x-=g.x.after),g.y.before&&(k+=g.y.before,v.y+=g.y.before),g.y.after&&(k-=g.y.after,v.y-=g.y.after);{const w=Fe(v,x);c.x=x.width-w.x.before-w.x.after,c.y=x.height-w.y.before-w.y.after,V+=w.x.before,v.x+=w.x.before,k+=w.y.before,v.y+=w.y.before}break}const se=Te(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:B(fe(k)),left:e.isRtl.value?void 0:B(fe(V)),right:e.isRtl.value?B(fe(-V)):void 0,minWidth:B(se==="y"?Math.min(i.value,m.width):i.value),maxWidth:B(Ne(Ae(c.x,i.value===1/0?0:i.value,l.value))),maxHeight:B(Ne(Ae(c.y,s.value===1/0?0:s.value,u.value)))}),{available:c,contentBox:v}}return F(()=>[o.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>y()),ae(()=>{const m=y();if(!m)return;const{available:v,contentBox:p}=m;p.height>v.y&&requestAnimationFrame(()=>{y(),requestAnimationFrame(()=>{y()})})}),{updateLocation:y}}function fe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ne(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ye=!0;const ne=[];function gn(e){!ye||ne.length?(ne.push(e),he()):(ye=!1,e(),he())}let _e=-1;function he(){cancelAnimationFrame(_e),_e=requestAnimationFrame(()=>{const e=ne.shift();e&&e(),ne.length?he():ye=!0})}const ee={none:null,close:wn,block:bn,reposition:Sn},yn=D({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ee}},"VOverlay-scroll-strategies");function hn(e,n){if(!z)return;let t;xe(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ge(),await ae(),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=ee[e.scrollStrategy])==null||a.call(ee,n,e,t)}))}),j(()=>{t==null||t.stop()})}function wn(e){function n(t){e.isActive.value=!1}et(e.targetEl.value??e.contentEl.value,n)}function bn(e,n){var i;const t=(i=e.root.value)==null?void 0:i.offsetParent,a=[...new Set([...te(e.targetEl.value,n.contained?t:void 0),...te(e.contentEl.value,n.contained?t:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,r=(s=>Oe(s)&&s)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((s,l)=>{s.style.setProperty("--v-body-scroll-x",B(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",B(-s.scrollTop)),s!==document.documentElement&&s.style.setProperty("--v-scrollbar-offset",B(o)),s.classList.add("v-overlay-scroll-blocked")}),j(()=>{a.forEach((s,l)=>{const u=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-u,s.scrollTop=-f}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Sn(e,n,t){let a=!1,o=-1,r=-1;function i(s){gn(()=>{var f,d;const l=performance.now();(d=(f=e.updateLocation).value)==null||d.call(f,s),a=(performance.now()-l)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{t.run(()=>{et(e.targetEl.value??e.contentEl.value,s=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{i(s)})})):i(s)})})}),j(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(o)})}function et(e,n){const t=[document,...te(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),j(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const xn=Symbol.for("vuetify:v-menu"),En=D({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function On(e,n){const t={},a=o=>()=>{if(!z)return Promise.resolve(!0);const r=o==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(i=>{const s=parseInt(e[o]??0,10);t[o]=window.setTimeout(()=>{n==null||n(r),i(r)},s)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}const Pn=D({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...En()},"VOverlay-activator");function Cn(e,n){let{isActive:t,isTop:a}=n;const o=Ee("useActivator"),r=$();let i=!1,s=!1,l=!0;const u=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:d,runCloseDelay:h}=On(e,c=>{c===(e.openOnHover&&i||u.value&&s)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==c&&(l=!0),t.value=c)}),y=$(),m={onClick:c=>{c.stopPropagation(),r.value=c.currentTarget||c.target,t.value||(y.value=[c.clientX,c.clientY]),t.value=!t.value},onMouseenter:c=>{var L;(L=c.sourceCapabilities)!=null&&L.firesTouchEvents||(i=!0,r.value=c.currentTarget||c.target,d())},onMouseleave:c=>{i=!1,h()},onFocus:c=>{wt(c.target,":focus-visible")!==!1&&(s=!0,c.stopPropagation(),r.value=c.currentTarget||c.target,d())},onBlur:c=>{s=!1,c.stopPropagation(),h()}},v=P(()=>{const c={};return f.value&&(c.onClick=m.onClick),e.openOnHover&&(c.onMouseenter=m.onMouseenter,c.onMouseleave=m.onMouseleave),u.value&&(c.onFocus=m.onFocus,c.onBlur=m.onBlur),c}),p=P(()=>{const c={};if(e.openOnHover&&(c.onMouseenter=()=>{i=!0,d()},c.onMouseleave=()=>{i=!1,h()}),u.value&&(c.onFocusin=()=>{s=!0,d()},c.onFocusout=()=>{s=!1,h()}),e.closeOnContentClick){const L=Ye(xn,null);c.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return c}),A=P(()=>{const c={};return e.openOnHover&&(c.onMouseenter=()=>{l&&(i=!0,l=!1,d())},c.onMouseleave=()=>{i=!1,h()}),c});F(a,c=>{c&&(e.openOnHover&&!i&&(!u.value||!s)||u.value&&!s&&(!e.openOnHover||!i))&&(t.value=!1)}),F(t,c=>{c||setTimeout(()=>{y.value=void 0})},{flush:"post"});const x=$();xe(()=>{x.value&&ae(()=>{r.value=ke(x.value)})});const b=$(),I=P(()=>e.target==="cursor"&&y.value?y.value:b.value?ke(b.value):tt(e.target,o)||r.value),V=P(()=>Array.isArray(I.value)?void 0:I.value);let k;return F(()=>!!e.activator,c=>{c&&z?(k=Ge(),k.run(()=>{pn(e,o,{activatorEl:r,activatorEvents:v})})):k&&k.stop()},{flush:"post",immediate:!0}),j(()=>{k==null||k.stop()}),{activatorEl:r,activatorRef:x,target:I,targetEl:V,targetRef:b,activatorEvents:v,contentEvents:p,scrimEvents:A}}function pn(e,n,t){let{activatorEl:a,activatorEvents:o}=t;F(()=>e.activator,(l,u)=>{if(u&&l!==u){const f=s(u);f&&i(f)}l&&ae(()=>r())},{immediate:!0}),F(()=>e.activatorProps,()=>{r()}),j(()=>{i()});function r(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;l&&Zt(l,H(o.value,u))}function i(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;l&&en(l,H(o.value,u))}function s(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const u=tt(l,n);return a.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:void 0,a.value}}function tt(e,n){var a,o;if(!e)return;let t;if(e==="parent"){let r=(o=(a=n==null?void 0:n.proxy)==null?void 0:a.$el)==null?void 0:o.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function An(){if(!z)return J(!1);const{ssr:e}=bt();if(e){const n=J(!1);return St(()=>{n.value=!0}),n}else return J(!0)}function kn(){const n=Ee("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const $e=Symbol.for("vuetify:stack"),K=Ke([]);function Rn(e,n,t){const a=Ee("useStack"),o=!t,r=Ye($e,void 0),i=Ke({activeChildren:new Set});xt($e,i);const s=J(+n.value);Se(e,()=>{var d;const f=(d=K.at(-1))==null?void 0:d[1];s.value=f?f+10:+n.value,o&&K.push([a.uid,s.value]),r==null||r.activeChildren.add(a.uid),j(()=>{if(o){const h=Ot(K).findIndex(y=>y[0]===a.uid);K.splice(h,1)}r==null||r.activeChildren.delete(a.uid)})});const l=J(!0);o&&xe(()=>{var d;const f=((d=K.at(-1))==null?void 0:d[0])===a.uid;setTimeout(()=>l.value=f)});const u=P(()=>!i.activeChildren.size);return{globalTop:Et(l),localTop:u,stackStyles:P(()=>({zIndex:s.value}))}}function Ln(e){return{teleportTarget:P(()=>{const t=e.value;if(t===!0||!z)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=a.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function Tn(){return!0}function nt(e,n,t){if(!e||ot(e,t)===!1)return!1;const a=Qe(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(r=>r==null?void 0:r.contains(e.target))}function ot(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Tn)(e)}function Fn(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&nt(e,n,t)&&setTimeout(()=>{ot(e,t)&&a&&a(e)},0)}function De(e,n){const t=Qe(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Vn={mounted(e,n){const t=o=>Fn(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=nt(o,e,n)};De(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){e._clickOutside&&(De(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Mn(e){const{modelValue:n,color:t,...a}=e;return R(me,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&R("div",H({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const Bn=D({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Pn(),...Q(),...zt(),...qt(),...un(),...yn(),...qe(),...Ut()},"VOverlay"),Jn=U()({name:"VOverlay",directives:{ClickOutside:Vn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Bn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const r=Pt(e,"modelValue"),i=P({get:()=>r.value,set:E=>{E&&e.disabled||(r.value=E)}}),{teleportTarget:s}=Ln(P(()=>e.attach||e.contained)),{themeClasses:l}=Ue(e),{rtlClasses:u,isRtl:f}=Ct(),{hasContent:d,onAfterLeave:h}=Gt(e,i),y=Yt(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:m,localTop:v,stackStyles:p}=Rn(i,pt(e,"zIndex"),e._disableGlobalStack),{activatorEl:A,activatorRef:x,target:b,targetEl:I,targetRef:V,activatorEvents:k,contentEvents:c,scrimEvents:L}=Cn(e,{isActive:i,isTop:v}),{dimensionStyles:ie}=Kt(e),se=An(),{scopeId:O}=kn();F(()=>e.disabled,E=>{E&&(i.value=!1)});const S=$(),g=$(),{contentStyles:w,updateLocation:T}=fn(e,{isRtl:f,contentEl:g,target:b,isActive:i});hn(e,{root:S,contentEl:g,targetEl:I,isActive:i,updateLocation:T});function M(E){o("click:outside",E),e.persistent?N():i.value=!1}function G(){return i.value&&m.value}z&&F(i,E=>{E?window.addEventListener("keydown",C):window.removeEventListener("keydown",C)},{immediate:!0}),At(()=>{z&&window.removeEventListener("keydown",C)});function C(E){var _,pe;E.key==="Escape"&&m.value&&(e.persistent?N():(i.value=!1,(_=g.value)!=null&&_.contains(document.activeElement)&&((pe=A.value)==null||pe.focus())))}const W=Xt();Se(()=>e.closeOnBack,()=>{Qt(W,E=>{m.value&&i.value?(E(!1),e.persistent?N():i.value=!1):E()})});const Y=$();F(()=>i.value&&(e.absolute||e.contained)&&s.value==null,E=>{if(E){const _=on(S.value);_&&_!==document.scrollingElement&&(Y.value=_.scrollTop)}});function N(){e.noClickAnimation||g.value&&X(g.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ge})}function mt(){h(),o("afterLeave")}return We(()=>{var E;return R(Ft,null,[(E=t.activator)==null?void 0:E.call(t,{isActive:i.value,props:H({ref:x,targetRef:V},k.value,e.activatorProps)}),se.value&&d.value&&R(kt,{disabled:!s.value,to:s.value},{default:()=>[R("div",H({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},l.value,u.value,e.class],style:[p.value,{top:B(Y.value)},e.style],ref:S},O,a),[R(Mn,H({color:y,modelValue:i.value&&!!e.scrim},L.value),null),R(Jt,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:mt},{default:()=>{var _;return[Rt(R("div",H({ref:g,class:["v-overlay__content",e.contentClass],style:[ie.value,w.value]},c.value,e.contentProps),[(_=t.default)==null?void 0:_.call(t,{isActive:i})]),[[Lt,i.value],[Tt("click-outside"),{handler:M,closeConditional:G,include:()=>[A.value]}]])]}})])]})])}),{activatorEl:A,target:b,animateClick:N,contentEl:g,globalTop:m,localTop:v,updateLocation:T}}}),de=Symbol("Forwarded refs");function ve(e,n){let t=e;for(;t;){const a=Reflect.getOwnPropertyDescriptor(t,n);if(a)return a;t=Object.getPrototypeOf(t)}}function Qn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return e[de]=t,new Proxy(e,{get(o,r){if(Reflect.has(o,r))return Reflect.get(o,r);if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const i of t)if(i.value&&Reflect.has(i.value,r)){const s=Reflect.get(i.value,r);return typeof s=="function"?s.bind(i.value):s}}},has(o,r){if(Reflect.has(o,r))return!0;if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const i of t)if(i.value&&Reflect.has(i.value,r))return!0;return!1},set(o,r,i){if(Reflect.has(o,r))return Reflect.set(o,r,i);if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const s of t)if(s.value&&Reflect.has(s.value,r))return Reflect.set(s.value,r,i);return!1},getOwnPropertyDescriptor(o,r){var s;const i=Reflect.getOwnPropertyDescriptor(o,r);if(i)return i;if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const l of t){if(!l.value)continue;const u=ve(l.value,r)??("_"in l.value?ve((s=l.value._)==null?void 0:s.setupState,r):void 0);if(u)return u}for(const l of t){const u=l.value&&l.value[de];if(!u)continue;const f=u.slice();for(;f.length;){const d=f.shift(),h=ve(d.value,r);if(h)return h;const y=d.value&&d.value[de];y&&f.push(...y)}}}}})}const at=(()=>re.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),rt=(()=>re.reduce((e,n)=>{const t="offset"+oe(n);return e[t]={type:[String,Number],default:null},e},{}))(),it=(()=>re.reduce((e,n)=>{const t="order"+oe(n);return e[t]={type:[String,Number],default:null},e},{}))(),je={col:Object.keys(at),offset:Object.keys(rt),order:Object.keys(it)};function Nn(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const o=n.replace(e,"");a+=`-${o}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const _n=["auto","start","end","center","baseline","stretch"],$n=D({cols:{type:[Boolean,String,Number],default:!1},...at,offset:{type:[String,Number],default:null},...rt,order:{type:[String,Number],default:null},...it,alignSelf:{type:String,default:null,validator:e=>_n.includes(e)},...Q(),...we()},"VCol"),Zn=U()({name:"VCol",props:$n(),setup(e,n){let{slots:t}=n;const a=P(()=>{const o=[];let r;for(r in je)je[r].forEach(s=>{const l=e[s],u=Nn(r,s,l);u&&o.push(u)});const i=o.some(s=>s.startsWith("v-col-"));return o.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return be(e.tag,{class:[a.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),Pe=["start","end","center"],st=["space-between","space-around","space-evenly"];function Ce(e,n){return re.reduce((t,a)=>{const o=e+oe(a);return t[o]=n(),t},{})}const Dn=[...Pe,"baseline","stretch"],lt=e=>Dn.includes(e),ct=Ce("align",()=>({type:String,default:null,validator:lt})),jn=[...Pe,...st],ut=e=>jn.includes(e),ft=Ce("justify",()=>({type:String,default:null,validator:ut})),In=[...Pe,...st,"stretch"],dt=e=>In.includes(e),vt=Ce("alignContent",()=>({type:String,default:null,validator:dt})),Ie={align:Object.keys(ct),justify:Object.keys(ft),alignContent:Object.keys(vt)},Wn={align:"align",justify:"justify",alignContent:"align-content"};function Hn(e,n,t){let a=Wn[e];if(t!=null){if(n){const o=n.replace(e,"");a+=`-${o}`}return a+=`-${t}`,a.toLowerCase()}}const zn=D({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:lt},...ct,justify:{type:String,default:null,validator:ut},...ft,alignContent:{type:String,default:null,validator:dt},...vt,...Q(),...we()},"VRow"),eo=U()({name:"VRow",props:zn(),setup(e,n){let{slots:t}=n;const a=P(()=>{const o=[];let r;for(r in Ie)Ie[r].forEach(i=>{const s=e[i],l=Hn(r,i,s);l&&o.push(l)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return be(e.tag,{class:["v-row",a.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}});export{eo as V,Zn as a,X as b,Yn as c,Kn as d,Xn as e,Qn as f,on as g,xn as h,Jn as i,En as j,On as k,Bn as m,Je as n,ge as s,kn as u};
