(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{wPCo:function(e,t,n){"use strict";n.r(t);n("53cK");var a=n("VKn7"),r=(n("mZxn"),n("S7b9")),c=(n("vgpD"),n("UL5a")),o=n("Z32k"),i=n.n(o),u=n("JCfe"),s=n.n(u),p=n("JGaj"),m=n.n(p),l=n("maMK"),d=n.n(l),f=n("ERkP"),g=n.n(f),b=n("uU//"),w=n("OZ92"),h=n("XzU4"),y=n("9LGX"),v=n("st+D"),j=n("8HkL"),O=n("li0l");t["default"]=function(e){var t=Object(f["useState"])(Object(O["a"])("type")?Object(O["a"])("type"):"read"),n=d()(t,1),o=n[0],u=Object(f["useState"])([]),p=d()(u,2),l=p[0],x=p[1],k=Object(f["useState"])({name:"",productCatalogId:"",unitType:"",norms:"",component:"",width:"",faw:"",weave:"",comments:""}),E=d()(k,2),S=E[0],C=E[1],D=function(e){return"add"===e?"\u6dfb\u52a0\u80da\u5e03":"edit"===e?"\u7f16\u8f91\u80da\u5e03":"copy"===e?"\u590d\u5236":"\u80da\u5e03\u8be6\u60c5"},F=Object(w["a"])({title:D(o),buttonGroups:[{type:"add",name:"\u7f16\u8f91",display:Boolean("read"===o),callback:function(){location.href="/greigeData/:".concat(Object(O["a"])("code"),"?type=edit&code=").concat(Object(O["a"])("code"))}}],back:"/greigeData/"}),N=function(){var e=m()(i.a.mark(function e(t){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["e"])(s()({},t,{id:S.id}));case 2:e.sent,v["router"].push("/greigeData/");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=m()(i.a.mark(function e(t){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["f"])(s()({},t,{productType:1}));case 2:e.sent,v["router"].push("/greigeData/");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=m()(i.a.mark(function e(t){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:I?N(t):T(t);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),_=Object(f["useState"])(!0),A=d()(_,2),I=A[0],J=A[1],L=c["a"].useForm(),z=d()(L,1),G=z[0],K=Object(b["a"])({formInformation:S,category:"greigeData",onFinish:P,fileds:l,isEdit:I,form:G}),R=function(){var e=m()(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["d"])();case 2:t=e.sent,t&&Array.isArray(t)&&t.length&&(n=t.map(function(e){return{label:e.name,value:e.id}}),Object(h["b"])(h["a"],"greigeData",n,"productCatalogId"),x(h["a"]["greigeData"].items));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),U=function(){return g.a.createElement(r["a"],{className:"content_margin-10 content-container_background-color content-container_padding-around-top-more"},g.a.createElement(a["a"],{span:24},K),g.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},g.a.createElement(y["a"],{onSave:function(){G.submit()},onCancel:function(){return v["router"].push("/greigeData/")}})))},Z={fontSize:"12px",fontFamily:"PingFangSC-Regular, PingFang SC",fontWeight:400,color:"#666666",textAlign:"left"},V={fontSize:"12px",fontFamily:"PingFangSC-Regular, PingFang SC",fontWeight:400,color:"#111111",marginLeft:10,textAlign:"left"},W=function(){var e=Object(f["useState"])([{code:"\u576f\u5e03\u7f16\u7801:"},{name:"\u576f\u5e03\u540d\u79f0:"},{productCatalogName:"\u576f\u5e03\u7c7b\u76ee:"},{unitTypeName:"\u576f\u5e03\u5355\u4f4d:"},{norms:"\u576f\u5e03\u89c4\u683c:"},{component:"\u576f\u5e03\u6210\u5206:"},{width:"\u576f\u5e03\u95e8\u5e45:"},{faw:"\u576f\u5e03\u514b\u91cd:"},{weave:"\u576f\u5e03\u7ec4\u7ec7:"},{createName:"\u521b\u5efa\u8005:"},{createTime:"\u521b\u5efa\u65f6\u95f4:"},{updateName:"\u4fee\u6539\u8005:"},{updateTime:"\u4fee\u6539\u65f6\u95f4:"},{comments:"\u5907\u6ce8:"}]),t=d()(e,1),n=t[0],c=["code","name","productCatalogName","unitTypeName","norms","component","width","faw","weave","createName","createTime","updateName","updateTime","comments"];return g.a.createElement(r["a"],{className:"content_margin-10 content-container_background-color content-container_padding-around-top-more"},c.map(function(e,t){return g.a.createElement(a["a"],{span:8,key:t,style:{margin:"7px 0"}},g.a.createElement(r["a"],{justify:"start",align:"middle"},g.a.createElement("span",{style:Z},n[t][e]),g.a.createElement("span",{style:V},S[e]||"\u6682\u65e0")))}))};return Object(f["useEffect"])(function(){R()},[]),Object(f["useEffect"])(function(){var e=function(){var e=m()(i.a.mark(function e(){var t;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("edit"!==o&&"read"!==o){e.next=9;break}return J(!0),e.next=4,Object(j["b"])(Object(O["a"])("code"));case 4:t=e.sent,G.setFieldsValue(s()({},t)),C(s()({},t)),e.next=10;break;case 9:J(!1);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e()},[]),g.a.createElement(g.a.Fragment,null,F,"read"===o?W():U())}}}]);