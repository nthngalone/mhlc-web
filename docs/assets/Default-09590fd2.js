import{_ as Le}from"./logo193x185-7d7a5dcc.js";import{p as H,i as X,c as d,r as ke,a as T,g as ce,s as G,o as Ae,b as de,d as Re,e as $e,f as ze,h as Be,j as F,k as Me,u as Pe,l as Ee,m as fe,n as h,q as C,w as t,t as a,v as _,x as w,y as V,z as ne,F as se,A as ue,B as Ne,C as me,D as $,E as Te,G as Fe,H as ve,I as W,J as pe,K as He,L as re,M as De}from"./index-2e8da6ac.js";import{c as Oe,V as x}from"./forwardRefs-33571059.js";import{V as g,_ as je}from"./_plugin-vue_export-helper-e63fdbbe.js";import{V as j,m as Y,u as Q,a as _e}from"./VContainer-d5f49394.js";import{u as ye,V as L,a as O,m as Ue,b as Ke,c as Ze,d as qe,e as Je,f as Xe,g as Ge}from"./lazy-6b59b358.js";import{V as We,a as Ye,b as Qe,c as et}from"./VMenu-d7617e5b.js";import{_ as tt}from"./NewsList-d1f1c930.js";import{u as at}from"./ssrBoot-0ea41bd7.js";import"./VChip-4fca7c04.js";import"./index.esm-f494373a.js";const U=Symbol.for("vuetify:layout"),he=Symbol.for("vuetify:layout-item"),ie=1e3,ot=H({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),lt=H({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function nt(){const e=X(U);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function st(e){const n=X(U);if(!n)throw new Error("[Vuetify] Could not find injected layout");const o=e.id??`layout-item-${Re()}`,u=ce("useLayoutItem");de(he,{id:o});const l=G(!1);$e(()=>l.value=!0),ze(()=>l.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:c}=n.register(u,{...e,active:d(()=>l.value?!1:e.active.value),id:o});return Be(()=>n.unregister(o)),{layoutItemStyles:i,layoutRect:n.layoutRect,layoutItemScrimStyles:c}}const ut=(e,n,o,u)=>{let l={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...l}}];for(const c of e){const f=n.get(c),v=o.get(c),b=u.get(c);if(!f||!v||!b)continue;const k={...l,[f.value]:parseInt(l[f.value],10)+(b.value?parseInt(v.value,10):0)};i.push({id:c,layer:k}),l=k}return i};function rt(e){const n=X(U,null),o=d(()=>n?n.rootZIndex.value-100:ie),u=ke([]),l=T(new Map),i=T(new Map),c=T(new Map),f=T(new Map),v=T(new Map),{resizeRef:b,contentRect:k}=ye(),D=d(()=>{const r=new Map,y=e.overlaps??[];for(const s of y.filter(p=>p.includes(":"))){const[p,m]=s.split(":");if(!u.value.includes(p)||!u.value.includes(m))continue;const I=l.get(p),R=l.get(m),P=i.get(p),E=i.get(m);!I||!R||!P||!E||(r.set(m,{position:I.value,amount:parseInt(P.value,10)}),r.set(p,{position:R.value,amount:-parseInt(E.value,10)}))}return r}),A=d(()=>{const r=[...new Set([...c.values()].map(s=>s.value))].sort((s,p)=>s-p),y=[];for(const s of r){const p=u.value.filter(m=>{var I;return((I=c.get(m))==null?void 0:I.value)===s});y.push(...p)}return ut(y,l,i,f)}),z=d(()=>!Array.from(v.values()).some(r=>r.value)),B=d(()=>A.value[A.value.length-1].layer),be=d(()=>({"--v-layout-left":F(B.value.left),"--v-layout-right":F(B.value.right),"--v-layout-top":F(B.value.top),"--v-layout-bottom":F(B.value.bottom),...z.value?void 0:{transition:"none"}})),M=d(()=>A.value.slice(1).map((r,y)=>{let{id:s}=r;const{layer:p}=A.value[y],m=i.get(s),I=l.get(s);return{id:s,...p,size:Number(m.value),position:I.value}})),ee=r=>M.value.find(y=>y.id===r),K=ce("createLayout"),te=G(!1);Ae(()=>{te.value=!0}),de(U,{register:(r,y)=>{let{id:s,order:p,position:m,layoutSize:I,elementSize:R,active:P,disableTransitions:E,absolute:Ve}=y;c.set(s,p),l.set(s,m),i.set(s,I),f.set(s,P),E&&v.set(s,E);const ae=Me(he,K==null?void 0:K.vnode).indexOf(r);ae>-1?u.value.splice(ae,0,s):u.value.push(s);const oe=d(()=>M.value.findIndex(N=>N.id===s)),Z=d(()=>o.value+A.value.length*2-oe.value*2),Ce=d(()=>{const N=m.value==="left"||m.value==="right",q=m.value==="right",we=m.value==="bottom",le={[m.value]:0,zIndex:Z.value,transform:`translate${N?"X":"Y"}(${(P.value?0:-110)*(q||we?-1:1)}%)`,position:Ve.value||o.value!==ie?"absolute":"fixed",...z.value?void 0:{transition:"none"}};if(!te.value)return le;const S=M.value[oe.value];if(!S)throw new Error(`[Vuetify] Could not find layout item "${s}"`);const J=D.value.get(s);return J&&(S[J.position]+=J.amount),{...le,height:N?`calc(100% - ${S.top}px - ${S.bottom}px)`:R.value?`${R.value}px`:void 0,left:q?void 0:`${S.left}px`,right:q?`${S.right}px`:void 0,top:m.value!=="bottom"?`${S.top}px`:void 0,bottom:m.value!=="top"?`${S.bottom}px`:void 0,width:N?R.value?`${R.value}px`:void 0:`calc(100% - ${S.left}px - ${S.right}px)`}}),xe=d(()=>({zIndex:Z.value-1}));return{layoutItemStyles:Ce,layoutItemScrimStyles:xe,zIndex:Z}},unregister:r=>{c.delete(r),l.delete(r),i.delete(r),f.delete(r),v.delete(r),u.value=u.value.filter(y=>y!==r)},mainRect:B,mainStyles:be,getLayoutItem:ee,items:M,layoutRect:k,rootZIndex:o});const Se=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),Ie=d(()=>({zIndex:n?o.value:void 0,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:Se,layoutStyles:Ie,getLayoutItem:ee,items:M,layoutRect:k,layoutRef:b}}const it=Oe("v-spacer","div","VSpacer"),ct=$("img",{src:Le},null,-1),dt=$("br",null,null,-1),ft=$("br",null,null,-1),mt=$("br",null,null,-1),vt={__name:"AppBar",setup(e){const n=Pe(),{churchInfo:o,menuItems:u}=Ee(n),{lgAndUp:l}=fe();return(i,c)=>(h(),C(j,{class:"header"},{default:t(()=>[a(x,null,{default:t(()=>[a(g,{cols:"4"},{default:t(()=>[ct,dt,_(" "+w(V(o).slogan),1)]),_:1}),a(it),a(g,{cols:"8"},{default:t(()=>[a(j,null,{default:t(()=>[a(x,null,{default:t(()=>[a(g,{class:"social"},{default:t(()=>[a(L,{icon:""},{default:t(()=>[a(O,null,{default:t(()=>[_("mdi-facebook")]),_:1})]),_:1}),a(L,{icon:""},{default:t(()=>[a(O,null,{default:t(()=>[_("mdi-instagram")]),_:1})]),_:1}),a(L,{icon:""},{default:t(()=>[a(O,null,{default:t(()=>[_("mdi-youtube")]),_:1})]),_:1})]),_:1})]),_:1}),a(x,null,{default:t(()=>[a(g,{class:"contact"},{default:t(()=>[_(w(V(o).streetAddress),1),ft,_(w(V(o).city)+", "+w(V(o).state)+" "+w(V(o).zipCode),1),mt,_(w(V(o).phoneNumber),1)]),_:1})]),_:1}),a(x,null,{default:t(()=>[V(l)?(h(),C(g,{key:0,class:"menu"},{default:t(()=>[(h(!0),ne(se,null,ue(V(u),f=>(h(),C(We,{key:f.id,"open-on-hover":""},{activator:t(({props:v})=>[a(L,Ne({color:"primary"},v,{to:f.path,variant:"text"}),{default:t(()=>[_(w(f.label),1)]),_:2},1040,["to"])]),default:t(()=>[f.children.length>0?(h(),C(Ye,{key:0},{default:t(()=>[(h(!0),ne(se,null,ue(f.children,v=>(h(),C(Qe,{key:v.id},{default:t(()=>[a(et,null,{default:t(()=>[a(L,{to:v.path,plain:""},{default:t(()=>[_(w(v.label),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)):me("",!0)]),_:2},1024))),128))]),_:1})):(h(),C(g,{key:1,class:"menu"},{default:t(()=>[a(L,{icon:""},{default:t(()=>[a(O,null,{default:t(()=>[_("mdi-menu")]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};const ge=e=>(Te("data-v-6f7b514c"),e=e(),Fe(),e),pt=ge(()=>$("img",{width:"300",height:"88","data-src":"https://mthoreb.net/wp-content/uploads/2022/09/ELCA_4_Color_Secondary.png",class:"elca image wp-image-12330 attachment-full size-full ls-is-cached lazyloaded",alt:"ELCA Logo",style:{"--smush-placeholder-width":"300px","--smush-placeholder-aspect-ratio":"300/88","max-width":"100%",height:"auto"},decoding:"async",loading:"lazy",src:"https://mthoreb.net/wp-content/uploads/2022/09/ELCA_4_Color_Secondary.png"},null,-1)),_t=ge(()=>$("h3",null,"Recent News",-1)),yt={__name:"SideBar",setup(e){return(n,o)=>(h(),C(j,null,{default:t(()=>[a(x,{class:"justify-center"},{default:t(()=>[pt]),_:1}),a(x,null,{default:t(()=>[a(g,null,{default:t(()=>[a(L,{color:"red",block:""},{default:t(()=>[_("Donate Online")]),_:1})]),_:1})]),_:1}),a(x,null,{default:t(()=>[a(g,null,{default:t(()=>[a(L,{color:"red",block:""},{default:t(()=>[_("Join the Newsletter")]),_:1})]),_:1})]),_:1}),a(x,null,{default:t(()=>[a(g,null,{default:t(()=>[_t,a(tt,{compact:""})]),_:1})]),_:1})]),_:1}))}},ht=je(yt,[["__scopeId","data-v-6f7b514c"]]);const gt=H({...Y(),...ot({fullHeight:!0}),...ve()},"VApp"),bt=W()({name:"VApp",props:gt(),setup(e,n){let{slots:o}=n;const u=pe(e),{layoutClasses:l,getLayoutItem:i,items:c,layoutRef:f}=rt(e),{rtlClasses:v}=He();return Q(()=>{var b;return a("div",{ref:f,class:["v-application",u.themeClasses.value,l.value,v.value,e.class],style:[e.style]},[a("div",{class:"v-application__wrap"},[(b=o.default)==null?void 0:b.call(o)])])}),{getLayoutItem:i,items:c,theme:u}}});const St=H({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Ue(),...Y(),...Ke(),...lt(),...Ze(),..._e({tag:"footer"}),...ve()},"VFooter"),It=W()({name:"VFooter",props:St(),setup(e,n){let{slots:o}=n;const{themeClasses:u}=pe(e),{backgroundColorClasses:l,backgroundColorStyles:i}=qe(re(e,"color")),{borderClasses:c}=Je(e),{elevationClasses:f}=Xe(e),{roundedClasses:v}=Ge(e),b=G(32),{resizeRef:k}=ye(z=>{z.length&&(b.value=z[0].target.clientHeight)}),D=d(()=>e.height==="auto"?b.value:parseInt(e.height,10)),{layoutItemStyles:A}=st({id:e.name,order:d(()=>parseInt(e.order,10)),position:d(()=>"bottom"),layoutSize:D,elementSize:d(()=>e.height==="auto"?void 0:D.value),active:d(()=>e.app),absolute:re(e,"absolute")});return Q(()=>a(e.tag,{ref:k,class:["v-footer",u.value,l.value,c.value,f.value,v.value,e.class],style:[i.value,e.app?A.value:{height:F(e.height)},e.style]},o)),{}}});const Vt=H({scrollable:Boolean,...Y(),..._e({tag:"main"})},"VMain"),Ct=W()({name:"VMain",props:Vt(),setup(e,n){let{slots:o}=n;const{mainStyles:u}=nt(),{ssrBootStyles:l}=at();return Q(()=>a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,l.value,e.style]},{default:()=>{var i,c;return[e.scrollable?a("div",{class:"v-main__scroller"},[(i=o.default)==null?void 0:i.call(o)]):(c=o.default)==null?void 0:c.call(o)]}})),{}}}),Nt={__name:"Default",setup(e){const{lgAndUp:n}=fe();return(o,u)=>{const l=De("router-view");return h(),C(bt,null,{default:t(()=>[a(vt),a(Ct,null,{default:t(()=>[a(j,{class:"main-container fill-height"},{default:t(()=>[a(x,{class:"fill-height"},{default:t(()=>[a(g,{class:"main-view"},{default:t(()=>[a(l)]),_:1}),V(n)?(h(),C(g,{key:0,cols:"3",class:"side-view"},{default:t(()=>[a(ht)]),_:1})):me("",!0)]),_:1})]),_:1})]),_:1}),a(It,null,{default:t(()=>[_("Mt. Horeb Lutheran Church is a congregation of the Evangelical Lutheran Church of America (ELCA) in Chapin, SC.")]),_:1})]),_:1})}}};export{Nt as default};
