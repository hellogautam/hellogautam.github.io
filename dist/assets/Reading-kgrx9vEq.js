import{d as b,e as d,f as y,g as w,_ as C,o as s,c as l,h as p,a,w as D,v as L,n as x,F as _,r as k,t as n,b as m}from"./index-DmanWimW.js";import{_ as S,s as R}from"./search-Biv4lALs.js";import{L as V}from"./LoadingSpinner-V1c4QJ-E.js";const A={class:"space-y-8"},E={class:"space-y-4"},T={class:"flex flex-wrap gap-2"},B=["onClick"],F={key:0,class:"text-center py-12"},I={key:1,class:"text-center py-12 text-red-600 dark:text-red-400"},M={class:"grid grid-cols-1 gap-6"},N={class:"flex justify-between items-start"},$={class:"text-xl font-bold text-gray-900 dark:text-white"},P={class:"text-sm text-gray-500 dark:text-gray-400"},U={class:"text-sm text-gray-500 dark:text-gray-400"},j={key:0,class:"mt-2 text-gray-600 dark:text-gray-300"},z=["href"],J=b({__name:"Reading",setup(O){const i=d([]),c=d(""),o=d(null),g=d(!0),u=d(null),v=y(()=>{const t=new Set;return i.value.forEach(r=>{t.add(r.type)}),Array.from(t).sort()}),f=y(()=>{let t=R(i.value,c.value);return o.value&&(t=t.filter(r=>r.type===o.value)),t}),h=t=>new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return w(async()=>{try{const t=await C(()=>import("./index-CZfOOk_a.js"),[]);i.value=t.default.items}catch(t){u.value="Failed to load reading list",console.error(t)}finally{g.value=!1}}),(t,r)=>(s(),l("div",A,[p(S,{title:"Reading",description:"A curated list of articles, books, and videos I've found helpful"}),r[2]||(r[2]=a("h1",{class:"text-3xl font-bold text-gray-900 dark:text-white"},"Reading List",-1)),a("div",E,[D(a("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>c.value=e),placeholder:"Search items...",class:"w-full p-2 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"},null,512),[[L,c.value]]),a("div",T,[a("button",{onClick:r[1]||(r[1]=e=>o.value=null),class:x(["px-3 py-1 rounded-full text-sm",o.value?"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300":"bg-primary-light dark:bg-primary-dark text-white"])}," All ",2),(s(!0),l(_,null,k(v.value,e=>(s(),l("button",{key:e,onClick:Q=>o.value=e,class:x(["px-3 py-1 rounded-full text-sm",o.value===e?"bg-primary-light dark:bg-primary-dark text-white":"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"])},n(e),11,B))),128))])]),g.value?(s(),l("div",F,[p(V)])):u.value?(s(),l("div",I,n(u.value),1)):m("",!0),a("section",M,[(s(!0),l(_,null,k(f.value,e=>(s(),l("article",{key:e.id,class:"p-6 border dark:border-gray-700 rounded-lg"},[a("div",N,[a("h2",$,n(e.title),1),a("span",P,n(e.type),1)]),a("time",U,n(h(e.date)),1),e.notes?(s(),l("p",j,n(e.notes),1)):m("",!0),a("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",class:"mt-4 inline-block text-primary-light dark:text-primary-dark hover:underline"}," Read More → ",8,z)]))),128))])]))}});export{J as default};
