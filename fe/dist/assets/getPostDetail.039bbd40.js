import{r as t}from"./index.1369d3f9.js";const e={_id:"",content:"",createdAt:new Date,digest:"",tags:[],title:"",updatedAt:new Date,visited:0};async function a(a){return(await t({method:"GET",url:`/post/${a}`})).data||e}export{e as D,a as g};