var T=Object.defineProperty,x=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(e,t,s)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,p=(e,t)=>{for(var s in t||(t={}))b.call(t,s)&&f(e,s,t[s]);if(h)for(var s of h(t))v.call(t,s)&&f(e,s,t[s]);return e},k=(e,t)=>x(e,N(t));import{j as m,F as C,r as g,a as j,R as A,b as F}from"./vendor.7fd28417.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};O();const a=m.exports.jsx,i=m.exports.jsxs,w=m.exports.Fragment;function L(){return a("header",{className:"main-header",children:a("h1",{children:"toDoo"})})}function M(e){return i("li",{children:[i("div",{className:e.task.isComplete?"completed":"","data-testid":"task",children:[i("label",{className:"checkbox-container",children:[a("input",{type:"checkbox",readOnly:!0,checked:e.task.isComplete,onClick:()=>e.handleToggleTaskCompletion(e.task.id),title:"check"}),a("span",{className:"checkmark"})]}),a("p",{children:e.task.name})]}),a("button",{type:"button","data-testid":"remove-task-button",onClick:()=>e.handleDeleteTask(e.task.id),title:"remove task",children:a(C,{size:16})})]})}function D(){const[e,t]=g.exports.useState([]),[s,c]=g.exports.useState(""),n={id:Math.random(),name:s,isComplete:!1},r=()=>{!s||(t([...e,n]),c(""))},d=o=>{const u=e.filter(l=>l.id!==o);t(u)},y=o=>{const u=e.map(l=>l.id===o?k(p({},l),{isComplete:!l.isComplete}):l);t(u)};return i("main",{className:"content-wrap",children:[i("header",{className:"content-header",children:[a("h1",{children:"Minhas Tarefas"}),i("div",{className:"task-entry-wrap",children:[a("input",{type:"text",placeholder:"Adicionar nova Tarefa",value:s,onChange:o=>c(o.target.value)}),a("button",{title:"Adicionar nova Tarefa",onClick:r,children:a(j,{})})]})]}),a("ul",{className:"tasks-list",children:e.length===0?"Voc\xEA ainda n\xE3o tem tarefas agendadas":e.map(o=>a(M,{task:o,handleDeleteTask:d,handleToggleTaskCompletion:y},o.id))})]})}function E(){return i(w,{children:[a(L,{}),a(D,{})]})}A.render(a(F.StrictMode,{children:a(E,{})}),document.getElementById("root"));