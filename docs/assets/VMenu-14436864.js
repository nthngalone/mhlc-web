import{a as M,b as h,c as A,f as y,V as g}from"./VOverlay-66aa598d.js";import{f as I}from"./forwardRefs-e658ad70.js";import{p as O,U as S,J as K,V as U,f as L,c as E,r as R,i as j,s as F,d as H,aj as N,Y as $,A as V,z as p,n as z,a4 as w,ak as J,al as k}from"./index-36c4139c.js";import{i as Y}from"./index-40a6a7b4.js";import{u as q}from"./_plugin-vue_export-helper-1c413193.js";const B=O({id:String,...S(M({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:h}}),["absolute"])},"VMenu"),ee=K()({name:"VMenu",props:B(),emits:{"update:modelValue":o=>!0},setup(o,C){let{slots:i}=C;const l=U(o,"modelValue"),{scopeId:P}=A(),b=L(),d=E(()=>o.id||`v-menu-${b}`),s=R(),t=j(y,null),c=F(0);H(y,{register(){++c.value},unregister(){--c.value},closeParents(e){setTimeout(()=>{!c.value&&!o.persistent&&(e==null||e&&!N(e,s.value.contentEl))&&(l.value=!1,t==null||t.closeParents())},40)}});async function v(e){var r,u,f;const n=e.relatedTarget,a=e.target;await z(),l.value&&n!==a&&((r=s.value)!=null&&r.contentEl)&&((u=s.value)!=null&&u.globalTop)&&![document,s.value.contentEl].includes(a)&&!s.value.contentEl.contains(a)&&((f=w(s.value.contentEl)[0])==null||f.focus())}$(l,e=>{e?(t==null||t.register(),document.addEventListener("focusin",v,{once:!0})):(t==null||t.unregister(),document.removeEventListener("focusin",v))});function x(e){t==null||t.closeParents(e)}function T(e){var n,a,r;if(!o.disabled)if(e.key==="Tab"||e.key==="Enter"&&!o.closeOnContentClick){if(e.key==="Enter"&&(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement&&e.target.closest("form")))return;e.key==="Enter"&&e.preventDefault(),J(w((n=s.value)==null?void 0:n.contentEl,!1),e.shiftKey?"prev":"next",f=>f.tabIndex>=0)||(l.value=!1,(r=(a=s.value)==null?void 0:a.activatorEl)==null||r.focus())}else["Enter"," "].includes(e.key)&&o.closeOnContentClick&&(l.value=!1,t==null||t.closeParents())}function m(e){var a;if(o.disabled)return;const n=(a=s.value)==null?void 0:a.contentEl;n&&l.value?e.key==="ArrowDown"?(e.preventDefault(),k(n,"next")):e.key==="ArrowUp"&&(e.preventDefault(),k(n,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(l.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const D=E(()=>V({"aria-haspopup":"menu","aria-expanded":String(l.value),"aria-owns":d.value,onKeydown:m},o.activatorProps));return q(()=>{const e=g.filterProps(o);return p(g,V({ref:s,id:d.value,class:["v-menu",o.class],style:o.style},e,{modelValue:l.value,"onUpdate:modelValue":n=>l.value=n,absolute:!0,activatorProps:D.value,"onClick:outside":x,onKeydown:T},P),{activator:i.activator,default:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return p(Y,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...a)]}})}})}),I({id:d,ΨopenChildren:c},s)}});export{ee as V};