import{d as k,o as r,h,a as e,b as c,e as s,t as n,_ as $,r as g,w as p,l as u,P as d,p as C,m as b,f as T,g as I,c as S,M as O,C as M,z,L as w,F as A,u as N}from"./index-APsAjY3Z.js";import{I as V}from"./Clock-bYYHnzgx.js";import{d as E}from"./date-mHTQdQ3H.js";const F={class:"date"},H={class:"words"},Q=k({__name:"Date",props:{date:{}},setup(o){return(a,i)=>(r(),h("div",F,[e(c(V),{class:"icon"}),s("div",H,n(c(E)(a.date,"long")),1)]))}}),R=$(Q,[["__scopeId","data-v-6defa9ea"]]),m=o=>(C("data-v-f6ba8acc"),o=o(),b(),o),U={class:"cart-item"},Y={class:"left"},j={class:"col img-a"},q=["src"],G={class:"right"},J={class:"name-size-color"},K={class:"color-and-size"},W={class:"color"},X=m(()=>s("span",{class:"_color-gray"},"Color: ",-1)),Z={class:"size"},x=m(()=>s("span",{class:"_color-gray"},"Size: ",-1)),ss={class:"right-right"},ts={class:"col price-col"},os=m(()=>s("div",{class:"_color-gray"},"Price: ",-1)),es={class:"col count"},cs=m(()=>s("div",{class:"_color-gray"},"Quantity: ",-1)),as={class:"col subtotal"},rs=m(()=>s("div",{class:"_color-gray"},"Subtotal: ",-1)),is=k({__name:"CartItemStatic",props:{productId:{},img:{},name:{},color:{},size:{},price:{},discount:{},count:{}},emits:["deleteProduct","setCount"],setup(o,{emit:a}){const i="/createx-ecom-site/";return(t,f)=>{const l=g("AppLink");return r(),h("div",U,[s("div",Y,[s("div",j,[s("img",{src:c(i)+t.img},null,8,q)])]),s("div",G,[s("div",J,[e(l,{class:"name text-s-b",to:{name:"product",params:{id:t.productId}}},{default:p(()=>[u(n(t.name),1)]),_:1},8,["to"]),s("div",K,[s("div",W,[X,u(" "+n(t.color),1)]),s("div",Z,[x,u(" "+n(t.size),1)])])]),s("div",ss,[s("div",ts,[os,e(d,{class:"price-feature",price:t.discount?t.price*(1-t.discount/100):t.price},null,8,["price"])]),s("div",es,[cs,s("div",null,n(t.count),1)]),s("div",as,[rs,e(d,{class:"subtotal-price",price:t.discount?t.price*(1-t.discount/100):t.price},null,8,["price"])])])])])}}}),ds=$(is,[["__scopeId","data-v-f6ba8acc"]]),v=o=>(C("data-v-3162b8c0"),o=o(),b(),o),ns={class:"order-header"},ls={class:"order-body"},_s={class:"cart-total"},ps={class:"cart-total-record"},us=v(()=>s("div",{class:"cart-total-record-name"},"Subtotal: ",-1)),hs={class:"cart-total-record"},ms=v(()=>s("div",{class:"cart-total-record-name"},"Shipping: ",-1)),vs={class:"cart-total-record"},fs=v(()=>s("div",{class:"cart-total-record-name"},"Tax: ",-1)),gs={class:"cart-total-record"},ks=v(()=>s("div",{class:"cart-total-record-name"},"Total: ",-1)),$s={class:"order-track-redirect"},Is=v(()=>s("span",{class:"text-b"},"You can track your order here",-1)),Ss=k({__name:"OrderInfo",props:{id:{},cart:{},tracking:{},comment:{},promocode:{}},setup(o){const a=o,i=T(),t=I(()=>i.calcCartTotal(a.cart,a.tracking.shipping.shippingMethod)),f=I(()=>a.tracking.status==="Delivered"||a.tracking.status==="Canceled"?a.tracking.status:"In progress"),l={"In progress":"_in-progress",Delivered:"_delivered",Canceled:"_canceled"};return(_,y)=>{const B=g("AppLink"),D=g("AppLinkBtn"),P=g("Spoiler");return r(),S(P,{class:"order-record"},{title:p(()=>[s("div",ns,[e(B,{class:"order-id",onClick:y[0]||(y[0]=O(()=>{},["stop"])),to:{name:"trackOrder",params:{orderId:_.id}}},{default:p(()=>[u("# "+n(_.id),1)]),_:1},8,["to"]),e(R,{class:"order-date",date:_.tracking.orderDate},null,8,["date"]),s("div",{class:M(["order-status label text-s",l[c(f)]])},n(c(f)),3),e(d,{class:"order-total",price:c(t).total},null,8,["price"])])]),default:p(()=>[s("div",ls,[(r(!0),h(A,null,z(c(i).fetchCartItemData(_.cart),L=>(r(),S(ds,w({class:"cart-item",key:L.productId},L),null,16))),128)),s("div",_s,[s("div",ps,[us,e(d,{class:"total-price",price:c(t).subtotal},null,8,["price"])]),s("div",hs,[ms,e(d,{class:"total-price",price:c(t).shippingCost},null,8,["price"])]),s("div",vs,[fs,e(d,{class:"total-price",price:c(t).tax},null,8,["price"])]),s("div",gs,[ks,e(d,{class:"total-price",price:c(t).total},null,8,["price"])])]),s("div",$s,[Is,e(D,{class:"btn_outlined",to:{name:"trackOrder",params:{orderId:_.id}}},{default:p(()=>[u("Order Tracking")]),_:1},8,["to"])])])]),_:1})}}}),Cs=$(Ss,[["__scopeId","data-v-3162b8c0"]]),bs=o=>(C("data-v-ff8eea33"),o=o(),b(),o),ys={class:"orders-page"},Ls={class:"orders-section"},zs=bs(()=>s("div",{class:"orders-header"},[s("h1",{class:"h1"},"My orders")],-1)),ws={class:"orders"},As=k({__name:"orders",setup(o){const a=N(),i=I(()=>a.orders);return(t,f)=>(r(),h("main",ys,[s("section",Ls,[zs,s("div",ws,[(r(!0),h(A,null,z(c(i),l=>(r(),S(Cs,w({class:"order",key:l.id},l),null,16))),128))])])]))}}),Ts=$(As,[["__scopeId","data-v-ff8eea33"]]);export{Ts as default};
