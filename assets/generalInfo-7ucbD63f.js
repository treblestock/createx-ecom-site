import{A as $}from"./Arrow--B3nnJAH.js";import{u as A}from"./useSlider-YXSx-jXB.js";import{d as S,E as D,g as w,a as v,h as l,e as t,u as s,b as e,F as k,x as F,o as n,A as R,_ as h,i as U,p as z,m as P,l as f,f as E,r as G,P as H,t as V,y as x,w as m,J,c as L,I as M,n as O}from"./index--gZetmlV.js";import{R as T}from"./Rating-Ad0Ip-4N.js";import{C as Y}from"./ColorInput-QJ2SH2T8.js";import{I as j}from"./Cart-2ymlEos5.js";import{u as q}from"./useFetch-5OLudVwx.js";import"./useDebounce-l0KXJJv2.js";import"./strings-Htb0e1Do.js";const K={class:"slider"},Q={class:"active-img"},W=["src"],X={class:"slider-arrows"},Z={class:"slider-pagination"},tt=["ind","onClick"],et=S({__name:"SliderProductImgs",props:{imgs:{}},setup(o){const c=o,{activeInd:i,setSlide:a,prevSlide:p,nextSlide:g,setItemsCount:d}=A();d(c.imgs.length),D(c.imgs,()=>{d(c.imgs.length)});const u=w(()=>c.imgs[i.value]);return(I,b)=>{const C=v("Img");return n(),l("div",K,[t("div",Q,[t("img",{src:s(u)},null,8,W),t("div",X,[e($,{class:"arrow",direction:"left",onClick:s(p)},null,8,["onClick"]),e($,{class:"arrow",direction:"right",onClick:s(g)},null,8,["onClick"])])]),t("div",Z,[(n(!0),l(k,null,F(I.imgs,(_,r)=>(n(),l("div",{class:R(["pagination-img img-a",{_active:r===s(i)}]),key:_,ind:r,onClick:()=>s(a)(r)},[e(C,{src:_},null,8,["src"])],10,tt))),128))])])}}}),st=h(et,[["__scopeId","data-v-640141e6"]]),ot={},at={class:"delivery-conditions"},rt=U('<div class="desctiprion" data-v-0f4633a8>Free standard shipping on orders <b data-v-0f4633a8>over $35</b> before tax, plus free returns.</div><table class="delivery-conditions-items" data-v-0f4633a8><tr class="delivery-conditions-item header-item" data-v-0f4633a8><th class="th" data-v-0f4633a8>type</th><th class="th" data-v-0f4633a8>how long</th><th class="th" data-v-0f4633a8>how much</th></tr><tr class="delivery-conditions-item" data-v-0f4633a8><td data-v-0f4633a8>Standard delivery</td><td data-v-0f4633a8>1-4 business days</td><td data-v-0f4633a8>$4.50</td></tr><tr class="delivery-conditions-item" data-v-0f4633a8><td data-v-0f4633a8>Express delivery</td><td data-v-0f4633a8>1 business day</td><td data-v-0f4633a8>$10.00</td></tr><tr class="delivery-conditions-item" data-v-0f4633a8><td data-v-0f4633a8>Pick up in store</td><td data-v-0f4633a8>1-3 business days</td><td data-v-0f4633a8>Free</td></tr></table>',2),dt=[rt];function ct(o,c){return n(),l("div",at,dt)}const it=h(ot,[["render",ct],["__scopeId","data-v-0f4633a8"]]),nt={},B=o=>(z("data-v-0152fa57"),o=o(),P(),o),lt={class:"delivery-conditions"},ut=B(()=>t("div",{class:"desctiprion"},[f("You have "),t("b",null,"60 days"),f(" to return the item(s) using any of the following methods:")],-1)),pt=B(()=>t("ul",{class:"ul"},[t("li",null,"Free store return"),t("li",null,"Free returns via USPS Dropoff Service")],-1)),_t=[ut,pt];function mt(o,c){return n(),l("div",lt,_t)}const vt=h(nt,[["render",mt],["__scopeId","data-v-0152fa57"]]),N=o=>(z("data-v-8ae1eb89"),o=o(),P(),o),ft={class:"product-cart-form"},ht={class:"product-cart-form-row"},gt={class:"price-row"},Ct={key:0,class:"label-sale"},yt={class:"product-reviews"},It={class:"reviews-count text-xs"},St={class:"color-row"},wt=N(()=>t("div",{class:"color-title text-xs"},"Color",-1)),bt={class:"colors"},$t={class:"product-cart-form-row size-and-btns"},Vt={class:"product-cart-form-row size-row"},kt={class:"product-cart-form-row btns"},Ft=N(()=>t("div",{class:"product-cart-form-payment-method"},null,-1)),zt=S({__name:"ProductCartForm",props:{product:{}},setup(o){const c=E(),i=o,a=G({selectedColor:i.product.colors[0],selectedSize:i.product.sizes[0],selectedCount:1}),p=w(()=>!(a.value.selectedCount<0));function g(){p.value&&c.setCount({productId:i.product.id,color:a.value.selectedColor,size:a.value.selectedSize},a.value.selectedCount)}return(d,u)=>{const I=v("SelectGroup"),b=v("InputNumber"),C=v("Btn"),_=v("Spoiler");return n(),l("div",ft,[t("div",ht,[t("div",gt,[e(H,{class:"price",price:d.product.price,discount:d.product.discount},null,8,["price","discount"]),d.product.discount?(n(),l("div",Ct,V(d.product.discount),1)):x("",!0)]),t("div",yt,[e(T,{class:"rating",rating:d.product.rating},null,8,["rating"]),t("div",It,V(d.product.reviewsIds.length)+" reviews",1)])]),t("form",{class:"form",onSubmit:J(g,["prevent"])},[t("div",St,[wt,t("div",bt,[(n(!0),l(k,null,F(d.product.colors,r=>(n(),L(Y,{class:"color",key:r,value:r,name:"color",modelValue:s(a).selectedColor,"onUpdate:modelValue":u[0]||(u[0]=y=>s(a).selectedColor=y)},null,8,["value","modelValue"]))),128))])]),t("div",$t,[t("div",Vt,[e(I,{class:"size",modelValue:s(a).selectedSize,"onUpdate:modelValue":u[1]||(u[1]=r=>s(a).selectedSize=r),options:d.product.sizes.reduce((r,y)=>(r[y]=y,r),{}),disabledValue:"Please select"},{default:m(()=>[f("Size")]),_:1},8,["modelValue","options"])]),t("div",kt,[e(b,{class:"selected-count",modelValue:s(a).selectedCount,"onUpdate:modelValue":u[2]||(u[2]=r=>s(a).selectedCount=r)},null,8,["modelValue"]),e(C,{class:"submit _with-icon",type:"submit"},{default:m(()=>[e(s(j)),f(" Add to cart ")]),_:1}),e(C,{class:"add-to-favourite btn_outlined _with-icon"},{default:m(()=>[e(s(M)),f(" Favourite ")]),_:1})])])],32),e(_,{class:"product-cart-form-spoiler",title:"Delivery",classBody:"spoiler-body"},{default:m(()=>[e(it)]),_:1}),e(_,{class:"product-cart-form-spoiler",title:"Return"},{default:m(()=>[e(vt)]),_:1}),Ft])}}}),Pt=h(zt,[["__scopeId","data-v-8ae1eb89"]]),xt={key:0,class:"product-general-info"},Bt=S({__name:"generalInfo",props:{id:{}},setup(o){const c=o,{data:i}=q(()=>O.findProductById(c.id),null),a=w(()=>{var p;return((p=i.value)==null?void 0:p.imgs)||[]});return(p,g)=>s(i)?(n(),l("div",xt,[e(st,{class:"product-imgs",imgs:s(a)},null,8,["imgs"]),e(Pt,{class:"product-cart-form",product:s(i)},null,8,["product"])])):x("",!0)}}),Lt=h(Bt,[["__scopeId","data-v-adb7001f"]]);export{Lt as default};
