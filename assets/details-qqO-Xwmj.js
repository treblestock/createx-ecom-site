import{d as m,h as o,e as s,t as i,F as r,z as n,p as x,m as f,o as a,b as l,l as y,_ as h,q as k,a as p,L as u,A as I,s as P}from"./index-I1IZfXoz.js";import{P as b}from"./ProductCard-PrPXiE1D.js";import"./Rating-xJFpUWcC.js";import"./ColorInput-Ou7rRVpw.js";import"./strings-Htb0e1Do.js";const _=c=>(x("data-v-e37bc2aa"),c=c(),f(),c),g={class:"product-details"},B={class:"row"},S=_(()=>s("div",{class:"title text-xl-b"},"Details",-1)),w={class:"desciption"},D={class:"ul"},F={class:"row"},N=_(()=>s("div",{class:"title text-xl-b"},"Fabric",-1)),V={class:"ul"},A={class:"row"},C=_(()=>s("div",{class:"title text-xl-b"},"Care",-1)),L=["src"],E=m({__name:"ProductDetails",props:{details:{}},setup(c){const d="/createx-ecom-site/";return(e,v)=>(a(),o("div",g,[s("div",B,[S,s("div",w,i(e.details.desctiption),1),s("ul",D,[(a(!0),o(r,null,n(e.details.characteristics,t=>(a(),o("li",{key:t},i(t),1))),128))])]),s("div",F,[N,s("ul",V,[(a(!0),o(r,null,n(e.details.fabricClauses,t=>(a(),o("li",{key:t},i(t),1))),128))])]),s("div",A,[C,s("ul",null,[(a(!0),o(r,null,n(e.details.careClauses,t=>(a(),o("li",{key:t.icon},[s("img",{class:"icon",src:l(d)+t.icon},null,8,L),y(" "+i(t.explanation),1)]))),128))])])]))}}),$=h(E,[["__scopeId","data-v-e37bc2aa"]]),q={key:0,class:"product-details-page"},z=m({__name:"details",props:{id:{}},setup(c){const d=c,{data:e}=k(()=>P.findProductById(d.id),null);return(v,t)=>l(e)?(a(),o("div",q,[p(b,u({class:"product-card"},l(e)),null,16),p($,u({class:"details"},l(e)),null,16)])):I("",!0)}}),G=h(z,[["__scopeId","data-v-10275c11"]]);export{G as default};
