import{d as b,g as y,h as l,e as s,u as o,t as _,b as a,o as n,T as u,_ as P,a as $,w as f,J as B,l as h,n as F,j as H,r as M,c as g,y as w,A as U,K as q,p as S,m as A,F as C,x}from"./index-DiZCgR11.js";import{B as E}from"./BlogPostCard-QmHHXw5M.js";import{B as L}from"./BlogPostCardSmall-Odbbz-gw.js";import{A as N}from"./Arrow-M65Z0BtF.js";import{I as G}from"./share-arrow-ujgq1VnH.js";import{d as T}from"./date-510oiu0I.js";import{u as V}from"./useFetch-UpWCVHFK.js";import{S as O}from"./SignInPrompt--93v-4gc.js";import{M as z}from"./MailingSubscribtion-yVnJHQGi.js";import{I as D}from"./Chat-d8X6rNSq.js";import{S as R}from"./Socials-xuG4cw1t.js";import{u as J}from"./blogPosts-7yCMLNXN.js";import"./Clock-RdjaVWGg.js";import"./Profile-8bSBt_9Y.js";import"./inst-BOpJbPvb.js";import"./different-YukEj1iR.js";const K={class:"post-body"},Y={class:"img-a"},Q=["src"],W={class:"text-xl-b"},X=b({__name:"BlogPostBody",props:{img:{},description:{},content:{}},setup(c){const e=c,d={ul:i=>u("ul",{class:"ul"},i.map(p=>u("li",{class:"li"},p))),text:i=>u("div",{class:"text"},i),bold:i=>u("div",{class:"text-bold"},i),quote:i=>u("div",{class:"quote"},i),img:i=>u("div",{class:"img"},u("img",{src:i}))},t=y(()=>{if(e.content==null)return u("div",{class:"content"},[]);const p=e.content.map(v=>{const[r,I]=Object.entries(v)[0];return d[r](I)});return u("div",{class:"content"},p)}),m="/createx-ecom-site/";return(i,p)=>(n(),l("div",K,[s("div",Y,[s("img",{src:o(m)+i.img,alt:""},null,8,Q)]),s("div",W,_(i.description),1),a(o(t))]))}}),Z=P(X,[["__scopeId","data-v-1c78acaf"]]),ss={class:"posts"},ts={key:0,class:"post-prev"},os={key:1},es={key:2,class:"post-next"},ns={key:3},cs=b({__name:"PrevNextPosts",props:{prevPost:{},nextPost:{}},setup(c){return(e,d)=>{const t=$("AppLink");return n(),l("div",ss,[e.prevPost?(n(),l("div",ts,[a(t,{class:"link _with-icon",to:{name:"blogPost",params:{id:e.prevPost.id}}},{default:f(()=>[a(N,{class:"arrow-left arrow",direction:"left"}),h(" Prev Post ")]),_:1},8,["to"]),a(L,B({class:"blog-post"},e.prevPost),null,16)])):(n(),l("div",os)),e.nextPost?(n(),l("div",es,[a(t,{class:"link _with-icon",to:{name:"blogPost",params:{id:e.nextPost.id}}},{default:f(()=>[a(N,{class:"arrow-right arrow",direction:"right"}),h(" Next Post ")]),_:1},8,["to"]),a(L,B({class:"blog-post"},e.nextPost),null,16)])):(n(),l("div",ns))])}}}),as=P(cs,[["__scopeId","data-v-3fb64894"]]),is={class:"comment"},ds={class:"left"},ls={class:"commenter-name text-xl-b"},rs={class:"comment-date"},_s={class:"right"},ms={class:"comment-text"},ps={class:"row"},us={class:"reply"},hs=b({__name:"BlogPostComment",props:{id:{},postId:{},userId:{},date:{},comment:{},likes:{},dislikes:{}},setup(c){const e=c,{data:d}=V(async()=>{var t;return((t=await F.findUserById(e.userId))==null?void 0:t.fullName)||"ups"},"");return(t,m)=>(n(),l("div",is,[s("div",ds,[s("div",ls,_(o(d)),1),s("div",rs,_(o(T)(t.date)),1)]),s("div",_s,[s("div",ms,_(t.comment),1),s("div",ps,[s("div",us,[a(o(G),{class:"reply-icon"}),h(" Reply ")])])])]))}}),vs=P(hs,[["__scopeId","data-v-c0d9c2b7"]]),gs=c=>(S("data-v-932d9a26"),c=c(),A(),c),fs={class:"comment"},bs=gs(()=>s("div",{class:"h1 title"},"Leave your comment",-1)),Ps={class:"submit"},ys=b({__name:"LeaveBlogPostCommentForm",setup(c){const e=H(),d=y(()=>e.isAuth),t=M({comment:""});function m(){console.log(t.value)}return(i,p)=>{const v=$("TextareaGroup"),r=$("Btn");return n(),l("section",fs,[bs,o(d)?w("",!0):(n(),g(O,{key:0,class:"sign-in-prompt"})),s("form",{class:U(["comment-form",{_disabled:!o(d)}]),onSubmit:q(m,["prevent"])},[a(v,{class:"input-group",modelValue:o(t).comment,"onUpdate:modelValue":p[0]||(p[0]=I=>o(t).comment=I),disabled:!o(d)},{default:f(()=>[h("Your Comment*")]),_:1},8,["modelValue","disabled"]),s("div",Ps,[a(r,{class:"submit-btn",type:"submit"},{default:f(()=>[h("Post Comment")]),_:1})])],34)])}}}),$s=P(ys,[["__scopeId","data-v-932d9a26"]]),ks={class:"header"},Bs={class:"title h1"},Is={class:"header-row"},ws={class:"labels"},Cs={class:"test_s"},xs={class:"test_s"},Ss=b({__name:"BlogPostHeader",props:{category:{},date:{},commentsIds:{},title:{}},setup(c){return(e,d)=>{const t=$("AppLink");return n(),l("div",ks,[s("div",Bs,_(e.title),1),s("div",Is,[s("div",ws,[s("div",Cs,_(e.category.join(", ")),1),s("div",xs,_(o(T)(e.date,"long")),1),a(t,{class:"test_s with-icon link-idle",to:"#comments"},{default:f(()=>[a(o(D)),h(" "+_(e.commentsIds.length)+" comment(-s) ",1)]),_:1})]),a(R,{class:"social-share"})])])}}}),As=P(Ss,[["__scopeId","data-v-2bf36f4d"]]),Ls=c=>(S("data-v-b420d01e"),c=c(),A(),c),Ns={class:"post-footer"},Fs={class:"footer-tags"},Ts=Ls(()=>s("b",null,"Tags: ",-1)),Vs=b({__name:"BlogPostFooter",props:{tags:{}},setup(c){return(e,d)=>{const t=$("AppLink");return n(),l("div",Ns,[s("div",Fs,[Ts,(n(!0),l(C,null,x(e.tags,m=>(n(),g(t,{class:"footer-tag-link tag",key:m,to:{name:"blog"}},{default:f(()=>[h(_(m),1)]),_:2},1024))),128))]),a(R,{class:"footer-socials social-share"})])}}}),Rs=P(Vs,[["__scopeId","data-v-b420d01e"]]),js=c=>(S("data-v-88241aaf"),c=c(),A(),c),Hs={key:0,class:"page"},Ms={class:"blog-post-header"},Us={class:"container-s"},qs={class:"blog-post-body _with-border"},Es={class:"container-s"},Gs={class:"blog-post-footer"},Os={class:"section-120 neighboring-posts _with-border"},zs={class:"container-s"},Ds={class:"section-120 related-posts-section bgc-gray-200"},Js={class:"container"},Ks={class:"related-posts-header"},Ys=js(()=>s("div",{class:"title h1"},"Related Posts",-1)),Qs={class:"related-posts grid"},Ws={key:0,class:"section-120 post-comments-section",id:"comments"},Xs={class:"container-s"},Zs={class:"post-comments"},st={class:"post-comments-title h1"},tt={class:"comments"},ot={class:"leave-comments-section section"},et={class:"container-s"},nt={class:"pv-100 bgc-gray-200",id:"subscribe-mailing"},ct={class:"container"},at=b({__name:"blogPost",props:{id:{}},setup(c){const e=c,d=J(),t=y(()=>d.findPost(e.id)),{data:m}=V(()=>F.getRelatedBlogPosts(e.id,3),[]),i=y(()=>{var r;return((r=t.value)==null?void 0:r.id)&&d.findPost(t.value.id-1)||null}),p=y(()=>{var r;return((r=t.value)==null?void 0:r.id)&&d.findPost(t.value.id+1)||null}),v=y(()=>t.value?d.findBlogPostComments(t.value.id):[]);return(r,I)=>{const j=$("AppLinkBtn");return o(t)?(n(),l("div",Hs,[s("header",Ms,[s("div",Us,[(n(),g(As,{class:"blog-post-header-content",key:o(t).id,title:o(t).title,commentsIds:o(t).commentsIds,category:o(t).category,date:o(t).date},null,8,["title","commentsIds","category","date"]))])]),s("div",qs,[s("div",Es,[(n(),g(Z,B({class:"blog-post-body-content",key:o(t).id},o(t)),null,16)),s("footer",Gs,[(n(),g(Rs,{class:"blog-post-footer-content",key:o(t).id,tags:o(t).tags},null,8,["tags"]))])])]),s("div",Os,[s("div",zs,[a(as,{prevPost:o(i),nextPost:o(p)},null,8,["prevPost","nextPost"])])]),s("div",Ds,[s("div",Js,[s("div",Ks,[Ys,a(j,{class:"blog-redirect btn_outlined-transparent",to:{name:"blog"}},{default:f(()=>[h("View all")]),_:1})]),s("div",Qs,[(n(!0),l(C,null,x(o(m),k=>(n(),g(E,B({class:"related-post",key:k.id},k),null,16))),128))])])]),o(v).length?(n(),l("div",Ws,[s("div",Xs,[s("div",Zs,[s("div",st,_(o(v).length)+" Comments ",1),s("div",tt,[(n(!0),l(C,null,x(o(v),k=>(n(),g(vs,B({class:"blog-post-comment",key:k.id},k),null,16))),128))])])])])):w("",!0),s("div",ot,[s("div",et,[a($s,{class:"leave-comment-form"})])]),s("section",nt,[s("div",ct,[a(z)])])])):w("",!0)}}}),kt=P(at,[["__scopeId","data-v-88241aaf"]]);export{kt as default};
