import{R as _}from"./Rating-v-HkOq_1.js";import{I as h}from"./share-arrow--7a3DgSC.js";import{o as c,h as r,e,d as p,n as u,t,u as o,b as a,l,_ as m}from"./index-M6l4noiw.js";import{d as v}from"./date-510oiu0I.js";import{u as f}from"./useFetch-3JQEh6Nq.js";const w={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},g=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M14.182 3.25a.393.393 0 0 0-.34.195l-.006.01-4.586 7.436v9.859h8.586a.393.393 0 0 0 .383-.308l.004-.015 2.55-9.96a.393.393 0 0 0-.386-.467H16.5c-.651 0-1.31-.218-1.79-.686-.504-.492-.738-1.197-.588-1.956l.719-3.639a.393.393 0 0 0-.385-.469zM7.25 20.75v-9.143H3.707a.393.393 0 0 0-.393.39l-.064 8.357a.393.393 0 0 0 .393.396zm.442-11.143 4.43-7.182a2.393 2.393 0 0 1 2.06-1.175h.274a2.393 2.393 0 0 1 2.347 2.857l-.719 3.638a.208.208 0 0 0-.002.1c.002.008.007.02.025.038.042.04.166.117.393.117h3.887a2.393 2.393 0 0 1 2.336 2.912l-.004.016-2.551 9.966a2.393 2.393 0 0 1-2.332 1.856H3.643a2.393 2.393 0 0 1-2.393-2.411l.064-8.357a2.393 2.393 0 0 1 2.393-2.375z","clip-rule":"evenodd"},null,-1),k=[g];function I(n,i){return c(),r("svg",w,[...k])}const y={render:I},H={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},$=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M9.849 20.75c.14 0 .269-.074.34-.195l.005-.01 4.586-7.436V3.25H6.195a.393.393 0 0 0-.384.308l-.003.015-2.55 9.96a.393.393 0 0 0 .386.467H7.53c.65 0 1.31.218 1.79.686.504.492.737 1.197.587 1.956l-.718 3.639a.393.393 0 0 0 .385.469zm6.932-17.5v9.143h3.543a.393.393 0 0 0 .393-.39l.064-8.357a.393.393 0 0 0-.393-.396zm-.442 11.143-4.43 7.182a2.393 2.393 0 0 1-2.06 1.175h-.274a2.393 2.393 0 0 1-2.348-2.857l.72-3.638a.209.209 0 0 0 .002-.1.087.087 0 0 0-.026-.038c-.041-.04-.166-.117-.392-.117H3.644a2.393 2.393 0 0 1-2.336-2.912l.003-.016 2.552-9.966A2.393 2.393 0 0 1 6.195 1.25h14.193a2.393 2.393 0 0 1 2.392 2.411l-.063 8.357a2.393 2.393 0 0 1-2.393 2.375z","clip-rule":"evenodd"},null,-1),b=[$];function z(n,i){return c(),r("svg",H,[...b])}const C={render:z},R={class:"review"},x={class:"left"},N={class:"reviewer-name text-xl-b"},B={class:"review-date"},V={class:"right"},M={class:"comment"},P={class:"row"},A={class:"reply"},D={class:"like-toolbar"},T={class:"_transparent like"},U={class:"_transparent dislike"},E=p({__name:"ProductReview",props:{id:{},productId:{},userId:{},date:{},rating:{},comment:{},likes:{},dislikes:{}},setup(n){const i=n,{data:d}=f(async()=>{const s=await u.findUserById(i.userId);return s?s.fullName:"ups.."},"");return(s,F)=>(c(),r("div",R,[e("div",x,[e("div",N,t(o(d)),1),e("div",B,t(o(v)(s.date)),1),a(_,{class:"review-rating",rating:s.rating},null,8,["rating"])]),e("div",V,[e("div",M,t(s.comment),1),e("div",P,[e("div",A,[a(o(h),{class:"reply-icon"}),l(" Reply ")]),e("div",D,[e("button",T,[a(o(y),{class:"like-icon"}),l(" "+t(s.likes),1)]),e("button",U,[a(o(C),{class:"dislike-icon"}),l(" "+t(s.dislikes),1)])])])])]))}}),G=m(E,[["__scopeId","data-v-b3f869dd"]]);export{G as P};
