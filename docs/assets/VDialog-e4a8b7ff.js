import{m as p,u as b,a as x}from"./VContainer-686e4c57.js";import{J as V,a4 as K,z as n,p as C,O as I,F as D,I as U,K as W,c as L,$ as G,a0 as Q,P as X,r as Y,a5 as Z,R as B,n as ee,A as S,a6 as ae}from"./index-fefa9124.js";import{c as te,f as ne}from"./VRow-cb07e941.js";import{q as w,a as R,j as A,m as le,h as ie,b as se,r as de,l as re,n as ce,c as oe,s as ue,t as ve,R as me,e as fe,v as ge,w as ye,i as be,f as Ve,x as ke,o as pe,p as Ce,g as Pe,y as Ie,L as Ae,z as he}from"./index-9017ebb8.js";import{a as N,b as Se,c as xe,d as Ee,V as F}from"./VOverlay-f6791b2e.js";import{V as Te}from"./lazy-6c17809c.js";const De=V()({name:"VCardActions",props:p(),setup(e,s){let{slots:t}=s;return K({VBtn:{slim:!0,variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Le=C({opacity:[Number,String],...p(),...x()},"VCardSubtitle"),Be=V()({name:"VCardSubtitle",props:Le(),setup(e,s){let{slots:t}=s;return b(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Re=te("v-card-title"),Ne=C({appendAvatar:String,appendIcon:I,prependAvatar:String,prependIcon:I,subtitle:[String,Number],title:[String,Number],...p(),...w()},"VCardItem"),Fe=V()({name:"VCardItem",props:Ne(),setup(e,s){let{slots:t}=s;return b(()=>{var y;const a=!!(e.prependAvatar||e.prependIcon),c=!!(a||t.prepend),f=!!(e.appendAvatar||e.appendIcon),i=!!(f||t.append),g=!!(e.title!=null||t.title),k=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(A,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(D,null,[e.prependAvatar&&n(N,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(R,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[g&&n(Re,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),k&&n(Be,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(y=t.default)==null?void 0:y.call(t)]),i&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(A,{key:"append-defaults",disabled:!f,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(D,null,[e.appendIcon&&n(R,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(N,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),we=C({opacity:[Number,String],...p(),...x()},"VCardText"),Oe=V()({name:"VCardText",props:we(),setup(e,s){let{slots:t}=s;return b(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),_e=C({appendAvatar:String,appendIcon:I,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:I,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...le(),...p(),...w(),...ie(),...se(),...de(),...re(),...ce(),...oe(),...ue(),...x(),...U(),...ve({variant:"elevated"})},"VCard"),Ke=V()({name:"VCard",directives:{Ripple:me},props:_e(),setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:c}=W(e),{borderClasses:f}=fe(e),{colorClasses:i,colorStyles:g,variantClasses:k}=ge(e),{densityClasses:y}=ye(e),{dimensionStyles:l}=be(e),{elevationClasses:o}=Ve(e),{loaderClasses:v}=ke(e),{locationStyles:u}=pe(e),{positionClasses:m}=Ce(e),{roundedClasses:d}=Pe(e),r=Ie(e,t),h=L(()=>e.link!==!1&&r.isLink.value),P=L(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return b(()=>{const O=h.value?"a":e.tag,_=!!(a.title||e.title!=null),z=!!(a.subtitle||e.subtitle!=null),M=_||z,$=!!(a.append||e.appendAvatar||e.appendIcon),j=!!(a.prepend||e.prependAvatar||e.prependIcon),q=!!(a.image||e.image),H=M||j||$,J=!!(a.text||e.text!=null);return G(n(O,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":P.value},c.value,f.value,i.value,y.value,o.value,v.value,m.value,d.value,k.value,e.class],style:[g.value,l.value,u.value,e.style],href:r.href.value,onClick:P.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var E;return[q&&n("div",{key:"image",class:"v-card__image"},[a.image?n(A,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(Te,{key:"image-img",cover:!0,src:e.image},null)]),n(Ae,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&n(Fe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),J&&n(Oe,{key:"text"},{default:()=>{var T;return[((T=a.text)==null?void 0:T.call(a))??e.text]}}),(E=a.default)==null?void 0:E.call(a),a.actions&&n(De,null,{default:a.actions}),he(P.value,"v-card")]}}),[[Q("ripple"),P.value&&e.ripple]])}),{}}});const ze=C({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Se({origin:"center center",scrollStrategy:"block",transition:{component:xe},zIndex:2400})},"VDialog"),Ue=V()({name:"VDialog",props:ze(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,s){let{emit:t,slots:a}=s;const c=X(e,"modelValue"),{scopeId:f}=Ee(),i=Y();function g(l){var u,m;const o=l.relatedTarget,v=l.target;if(o!==v&&((u=i.value)!=null&&u.contentEl)&&((m=i.value)!=null&&m.globalTop)&&![document,i.value.contentEl].includes(v)&&!i.value.contentEl.contains(v)){const d=ae(i.value.contentEl);if(!d.length)return;const r=d[0],h=d[d.length-1];o===r?h.focus():r.focus()}}Z&&B(()=>c.value&&e.retainFocus,l=>{l?document.addEventListener("focusin",g):document.removeEventListener("focusin",g)},{immediate:!0});function k(){var l;(l=i.value)!=null&&l.contentEl&&!i.value.contentEl.contains(document.activeElement)&&i.value.contentEl.focus({preventScroll:!0})}function y(){t("afterLeave")}return B(c,async l=>{var o;l||(await ee(),(o=i.value.activatorEl)==null||o.focus({preventScroll:!0}))}),b(()=>{const l=F.filterProps(e),o=S({"aria-haspopup":"dialog","aria-expanded":String(c.value)},e.activatorProps),v=S({tabindex:-1},e.contentProps);return n(F,S({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},l,{modelValue:c.value,"onUpdate:modelValue":u=>c.value=u,"aria-modal":"true",activatorProps:o,contentProps:v,role:"dialog",onAfterEnter:k,onAfterLeave:y},f),{activator:a.activator,default:function(){for(var u=arguments.length,m=new Array(u),d=0;d<u;d++)m[d]=arguments[d];return n(A,{root:"VDialog"},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a,...m)]}})}})}),ne({},i)}});export{Ke as V,Re as a,Ue as b,Be as c,Oe as d};
