/*! Copyright 2024 Adobe
All Rights Reserved. */
import{F as c}from"./form.types.js";const p={PENDING:"pending",AUTHORIZED:"authorized",PARTIALLY_AUTHORIZED:"partiallyAuthorized",RECEIVED:"received",PARTIALLY_RECEIVED:"partiallyReceived",APPROVED:"approved",PARTIALLY_APPROVED:"partiallyApproved",REJECTED:"rejected",PARTIALLY_REJECTED:"partiallyRejected",DENIED:"denied",PROCESSED_AND_CLOSED:"processedAndClosed",CLOSED:"closed"},y=n=>{const s={};return Object.keys(n).forEach(e=>{if(e.match(/_(\d+)$/)){const t=e.replace(/_\d+$/,"");s[t]=n[e]}else s[e]=n[e]}),s},R=(n,s)=>n.map(e=>({...e,id:`${e.id}_${e.fieldType}_${s+1}`,name:`${e.name}_${e.fieldType}_${s+1}`,code:`${e.code}_${e.fieldType}_${s+1}`,customUpperCode:`${e.customUpperCode}_${e.fieldType}_${s+1}`})),_=(n,s)=>n==null?void 0:n.flatMap(e=>Array.from({length:s},(i,t)=>({...e,id:`${e.id}_${e.fieldType}_${t+1}`,name:`${e.name}_${e.fieldType}_${t+1}`,code:`${e.code}_${e.fieldType}_${t+1}`,customUpperCode:`${e.customUpperCode}_${e.fieldType}_${t+1}`}))),$=n=>{const s=[],e=[];return Object.entries(n).forEach(([i,t])=>{const a=i.lastIndexOf("_"),r=i.slice(0,a),u=i.slice(a+1);u===c.MULTISELECT||u===c.SELECT?s.push({attributeCode:r,value:btoa(t)}):e.push({attributeCode:r,value:t})}),{selectedCustomAttributes:s,enteredCustomAttributes:e}},m=n=>typeof n!="string"?"":p[n]??"",l=["REJECTED","PARTIALLY_REJECTED","DENIED","UNCONFIRMED","CLOSED"],A=n=>{const s=n==null?void 0:n.returns.filter(t=>!l.includes(t.returnStatus));return((n==null?void 0:n.itemsEligibleForReturn)??[]).flatMap(t=>{let a=t.quantityShipped,r={...t,returnableQuantity:a};return t.quantityShipped===0&&(r={...r,eligibleForReturn:!1,returnableQuantity:0}),s.forEach(u=>{u.items.forEach(o=>{if((o==null?void 0:o.id)===(t==null?void 0:t.id)){const d=a-o.requestQuantity;a=Math.max(d,0),r={...r,eligibleForReturn:a!==0,returnableQuantity:a}}})}),r}).sort((t,a)=>Number(a.eligibleForReturn)-Number(t.eligibleForReturn))},C=n=>{var i;let s=[];return((i=n==null?void 0:n.returns)==null?void 0:i.filter(t=>!l.includes(t.returnStatus)).flatMap(t=>t.items||[])).forEach(t=>{if(!s.length)s.push({...t,totalQuantity:t.requestQuantity});else{const a=s.findIndex(r=>r.id===t.id);a!==-1?s[a].totalQuantity+=t.requestQuantity:s.push({...t,totalQuantity:t.requestQuantity})}}),{returnedList:s??[],modifyOrder:E(n.items,s)??[]}};function E(n,s){const e=new Map(s.map(i=>[i.id,i]));return n.map(i=>{const t=e.get(i.id);if(t){const a=i.totalQuantity-t.totalQuantity;return a===0?null:{...i,totalQuantity:a}}return i}).filter(i=>i!==null)}export{y as c,C as e,m as f,R as m,$ as n,A as o,_ as r};
