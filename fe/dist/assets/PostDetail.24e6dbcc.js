var t=Object.defineProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s;"undefined"!=typeof require&&require;import{D as l,g as o}from"./getPostDetail.8e28c7f0.js";import{_ as n}from"./CMdEditor.vue_vue&type=style&index=0&lang.41babbf2.js";import{r,c as p,_ as d,b as c}from"./index.f73cf528.js";import{h as u,d as m}from"./hot.5d6d7e75.js";import{d as f,a as v,c as y}from"./vendor.352936e6.js";var _=f({name:"PostDetail",props:{id:{type:String,required:!0}},setup(t){const f=v(((t,l)=>{for(var o in l||(l={}))a.call(l,o)&&i(t,o,l[o]);if(e)for(var o of e(l))s.call(l,o)&&i(t,o,l[o]);return t})({},l)),_=v("");async function b(){if(confirm("确认删除文章吗?")){await async function(t){return!!(await r({method:"DELETE",url:`/post/${t}`})).data}(t.id)&&(alert("删除成功!"),c.go(-1))}}return o(t.id).then((t=>{f.value=t,_.value=t.content})),()=>y("div",{class:"p-post-detail"},[y("header",{class:"p-post-detail_header"},[y("title",{class:"p-post-detail_title","data-text":f.value.title},[f.value.title]),y("div",{class:"p-post-detail_hot"},[y("img",{src:u,alt:"hot",class:"p-post-detail_hot-icon"},null),y("span",{class:"p-post-detail_hot-count"},[f.value.visited])]),y("div",{class:"p-post-detail_tags"},[f.value.tags.map((t=>y(p,{class:"p-post-detail_tags-tag",name:t.name,key:t._id},null)))]),y("div",{class:"p-post-detail_time u-only-big"},[m(new Date(f.value.updatedAt))])]),y("main",{class:"p-post-detail_main"},[y(n,{readOnly:!0,content:_},null)]),y("div",{class:"p-post-detail_actions"},[y(d,{content:"编辑",onClick:()=>c.push({name:"admin-edit",params:{id:f.value._id}})},null),y(d,{content:"删除",onClick:b},null)])])}});export{_ as default};
