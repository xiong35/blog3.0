import{r as a,g as e,a as t,b as n,c as s,_ as r}from"./index.213a0884.js";import{_ as i}from"./CMdEditor.vue_vue&type=style&index=0&lang.1369e636.js";import{g as d}from"./generateDigest.d8cbf049.js";import{g as l}from"./getPostDetail.d51ead71.js";import{d as o,a as p,o as c,r as m,c as u}from"./vendor.352936e6.js";var g=o({name:"AdminEdit",props:{id:{type:String,required:!0}},setup(o){const g=p(""),v=p([]);e().then((a=>v.value=a)),l(o.id).then((a=>{g.value=a.content,a.tags.forEach((a=>f.add(a.name)))})),c((()=>{t()||n.push({name:"admin-login"}).then((()=>alert("请先登录!")))}));const f=m(new Set);async function _(){const[e,t,s]=/# (.*)\n([\s\S]*)/gm.exec(g.value)||[];if(!t)return alert("没有标题");if(!s)return alert("没有主要内容");const r=d(s);await async function(e,t){return!!(await a({method:"PUT",data:e,url:`/post/${t}`})).data}({digest:r,title:t,content:g.value,tagNames:[...f]},o.id)?(alert("修改成功!"),n.go(-1)):alert("出错了!")}return()=>u("div",{class:"pa-edit"},[u("div",{class:"pa-edit_wrapper"},[u(i,{content:g},null),u("div",{class:"pa-edit_wrapper-tags"},[v.value.map((a=>u(s,{class:"pa-edit_wrapper-tags-tag",name:a.name,key:a._id,active:f.has(a.name),onClick:()=>f.has(a.name)?f.delete(a.name):f.add(a.name)},null))),u(s,{class:"pa-edit_wrapper-tags-tag",name:"添加+",onClick:()=>{const a=prompt("输入新标签的名字：");a&&(v.value=[...v.value,{name:a,_id:"new"+v.value.length,count:0}],f.add(a))}},null)])]),u(r,{class:"pa-edit_upload",onClick:_,content:"确认修改"},null)])}});export{g as default};