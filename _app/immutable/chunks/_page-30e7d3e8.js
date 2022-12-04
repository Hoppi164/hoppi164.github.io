import{g as t}from"./getBlogPosts-65aba3d4.js";import{e}from"./index-d4f3f93e.js";async function r(){try{const o=await t();if(!o||o.length===0)throw new Error("No Posts Found");return o}catch(o){throw e(500,`Cannot Load Post Index 

Message:
${o.message}

Stack:
${o.stack}`)}}const s=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{s as _,r as l};
