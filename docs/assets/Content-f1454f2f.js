import{t as r,v as _,z as i,q as p,O as c,P as m,u as g,l as h,c as f,x as v,y as C,Q as y,E as d,C as R,G as S,H as w}from"./index-2fad826a.js";import{R as T,d as x}from"./index.esm-ce93b9db.js";import{g as B,a as E}from"./assetUtils-986d560d.js";import{_ as $,V as k}from"./_plugin-vue_export-helper-0886ecc3.js";const D={class:"content"},I={__name:"RichContentRenderer",props:{content:{type:Object,required:!0}},setup(n){const a=()=>({[x.BLOCKS.EMBEDDED_ASSET]:(s,o,t)=>{const e=s.data.target.fields.file;switch(e.contentType){case"image/png":case"image/jpg":case"image/jpeg":case"image/gif":case"image/bmp":const l=B(e.details.image.width,e.details.image.height),u=E(e.details.image.width,e.details.image.height);return c("img",{src:e.url,width:l,height:u},t(s.content,o,t));default:return console.error(`Unknown assetType [${e.contentType}] for file [${e.url}]`),c(m,{},`Cannot render unknown asset type [${e.contentType}] for file [${e.url}]`,t(s.content,o,t))}}});return(s,o)=>(r(),_("div",D,[i(p(T),{document:n.content,nodeRenderers:a()},null,8,["document","nodeRenderers"])]))}};const V=n=>(S("data-v-5300361d"),n=n(),w(),n),j=V(()=>d("hr",null,null,-1)),A={__name:"Content",setup(n){const a=g(),{contentPages:s}=h(a),o=f(()=>{const t=y.currentRoute.value.path;return s.value[t]});return(t,e)=>(r(),v(k,{class:"content-page"},{default:C(()=>[d("h2",null,R(o.value.title),1),j,i(I,{content:o.value.content},null,8,["content"])]),_:1}))}},q=$(A,[["__scopeId","data-v-5300361d"]]);export{q as default};