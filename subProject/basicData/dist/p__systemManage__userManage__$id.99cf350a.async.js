(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{AoKy:function(e,t,a){"use strict";a.r(t);a("YdMF");var n=a("dVZ9"),r=(a("zI7Q"),a("SCaQ")),s=(a("53cK"),a("VKn7")),i=(a("mZxn"),a("S7b9")),u=(a("rkcQ"),a("Mob5")),l=a("JCfe"),o=a.n(l),c=(a("DoiJ"),a("9xBf")),p=(a("oeo2"),a("BmDy")),d=a("Z32k"),m=a.n(d),b=a("JGaj"),f=a.n(b),E=(a("vgpD"),a("UL5a")),h=a("maMK"),O=a.n(h),g=a("YBJ6"),v=a.n(g),w=(a("ljfu"),a("x2dm")),M=a("mTBN"),P=a("ERkP"),D=a.n(P),S=a("st+D"),k=a("li0l"),y=a("MNWE"),I=a("FEDD"),C=a("zIiK"),j=a("CDnh"),x=a("sQQd"),T=a("4ca3"),A=a("OZ92"),U=a("1Pzi"),R=w["a"].Option,K={labelCol:{span:6},wrapperCol:{span:18}},B={wrapperCol:{offset:10,span:4}},L=["\u8bf7\u8f93\u5165\u8d26\u53f7","\u8f93\u5165\u7684\u8d26\u53f7\u6700\u77ed4\u4e2a\u5b57\u7b26","\u8f93\u5165\u7684\u8d26\u53f7\u6700\u957f12\u4e2a\u5b57\u7b26","\u8f93\u5165\u7684\u8d26\u53f7\u4e0d\u80fd\u6709\u7a7a\u683c","\u8f93\u5165\u7684\u8d26\u53f7\u5fc5\u987b\u7531\u5b57\u6bcd\u3001\u6570\u5b57\u4e0e\u4e0b\u5212\u7ebf\u7ec4\u6210","\u8f93\u5165\u7684\u8d26\u53f7\u5df2\u5b58\u5728"],W=["\u8bf7\u8f93\u5165\u5bc6\u7801","\u8f93\u5165\u7684\u5bc6\u7801\u6700\u5c116\u4e2a\u5b57\u7b26","\u8f93\u5165\u7684\u5bc6\u7801\u6700\u591a18\u4e2a\u5b57\u7b26","\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u80fd\u6709\u7a7a\u683c","\u8f93\u5165\u7684\u5bc6\u7801\u5fc5\u987b\u7531\u5b57\u6bcd\u3001\u6570\u5b57\u4e0e\u4e0b\u5212\u7ebf\u7ec4\u6210"],N=["\u8bf7\u9009\u62e9\u81f3\u5c11\u4e00\u4e2a\u6743\u9650\u7ec4"],q=["\u8bf7\u9009\u62e9\u4f7f\u7528\u4eba"],F=function(e,t){return Object.assign(e,v()({},t.type,t.value))},V=function(e){var t=Object(P["useState"])(!0),a=O()(t,2),l=a[0],d=a[1],b=Object(P["useState"])(-1),h=O()(b,2),g=h[0],v=h[1],M=Object(P["useState"])(-1),V=O()(M,2),z=V[0],J=V[1],Q=Object(P["useState"])(-1),Z=O()(Q,2),G=Z[0],Y=Z[1],$=Object(P["useState"])(-1),X=O()($,2),H=X[0],ee=X[1],te=Object(P["useState"])([]),ae=O()(te,2),ne=ae[0],re=ae[1],se=Object(P["useState"])(!1),_e=O()(se,2),ie=_e[0],ue=_e[1],le=Object(P["useState"])({}),oe=O()(le,2),ce=oe[0],pe=oe[1],de=Object(P["useState"])(!1),me=O()(de,2),be=me[0],fe=me[1],Ee=Object(P["useState"])(Object(k["a"])("type")?Object(k["a"])("type"):"read"),he=O()(Ee,2),Oe=he[0],ge=he[1],ve=Object(U["f"])("system-manage"),we=Object(P["useReducer"])(F,{name:"",password:"",userId:"",userName:"",permissionIds:[],permissionNames:[],status:""}),Me=O()(we,2),Pe=Me[0],De=Me[1],Se=E["a"].useForm(),ke=O()(Se,1),ye=ke[0];Object(P["useEffect"])(function(){Ce(),xe()},[]);var Ie=[{title:"\u4f7f\u7528\u4eba",dataIndex:"name"},{title:"\u624b\u673a",dataIndex:"mobile"},{title:"\u90e8\u95e8",dataIndex:"departments",render:function(e){return e&&e.length>0?e.map(function(e){return e.name}).join(","):""}},{title:"\u804c\u52a1",dataIndex:"title",render:function(e){return e&&e.name?e.name:""}}],Ce=function(){var t=f()(m.a.mark(function t(){var a,n,r,s,i,u,l,o;return m.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.match.params.id.replace(":",""),"new"===a){t.next=23;break}return d(!1),t.next=5,Object(j["b"])(a);case 5:if(n=t.sent,!(n&&Object(y["a"])(n,"userprofile")&&Object.keys(n.userprofile).length>0)){t.next=20;break}for(s in r=_.clone(n.userprofile),r)r.hasOwnProperty(s)&&(r[s]=Object(x["a"])(s,r[s]));if(r=Object.assign(r,{name:n.username,password:"",status:n.userprofile.is_enabled?1:0,userId:n.userprofile.person_id}),ye.setFieldsValue(r),i=Object.keys(r),u=Object.values(r),i.map(function(e,t){return De({type:e,value:Object(x["a"])(e,u[t])}),!0}),l=n.userprofile.person_id,!l){t.next=20;break}return t.next=18,Object(T["d"])(n.userprofile.person_id);case 18:o=t.sent,o&&pe(o);case 20:je(a),t.next=25;break;case 23:De({type:"status",value:1}),ye.setFieldsValue({status:1});case 25:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),je=function(){var e=f()(m.a.mark(function e(t){var a;return m.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(T["b"])(t);case 2:a=e.sent,a&&a instanceof Array&&a.length>0&&(De({type:"permissionIds",value:a.map(function(e){return e.id})}),De({type:"permissionNames",value:a.map(function(e){return e.name})}),ye.setFieldsValue({permissionIds:a.map(function(e){return e.id})}));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=f()(m.a.mark(function e(){var t;return m.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(I["g"])({no_page:!0});case 2:t=e.sent,t&&t instanceof Array&&re(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Te=function(){var e=f()(m.a.mark(function e(t){var a;return m.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(T["f"])({username_icontains:t,no_page:!0});case 2:return a=e.sent,e.abrupt("return",!!(a&&Object(y["a"])(a,"results")&&"[object Array]"===Object.prototype.toString.call(a.results)&&a.results.length>0));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=f()(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(d(!1),a=-1,0!==t.length){e.next=7;break}a=0,v(a),e.next=31;break;case 7:if(!(t.length<4)){e.next=12;break}a=1,v(a),e.next=31;break;case 12:if(!(t.length>12)){e.next=17;break}a=2,v(a),e.next=31;break;case 17:if(!(t.split(" ").length>1)){e.next=22;break}a=3,v(a),e.next=31;break;case 22:if(/^[0-9a-zA-z]{4,12}$/.test(t)){e.next=27;break}a=4,v(a),e.next=31;break;case 27:return e.next=29,Te(t);case 29:n=e.sent,n?v(5):(v(-1),De({type:"name",value:t}));case 31:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Ue=function(){var e=f()(m.a.mark(function e(t){var a;return m.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:d(!1),a=-1,0===t.length?(a=0,J(a)):t.length<6?(a=1,J(a)):t.length>18?(a=2,J(a)):t.split(" ").length>1?(a=3,J(a)):/^[0-9a-zA-z]{4,12}$/.test(t)?(J(-1),De({type:"password",value:t})):(a=4,J(a));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=f()(m.a.mark(function e(t){return m.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:De({type:"permissionIds",value:t});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Ke=function(){var e=f()(m.a.mark(function e(t){return m.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:De({type:"userId",value:t}),ye.setFieldsValue({userIds:t});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Be=function(e,t){return"add"===e?D.a.createElement(E["a"].Item,{name:"password",className:"form-item__under-multiple-form-item",rules:[{required:!0,message:W[0]}],validateStatus:-1===z?"":"error",help:W[z]},D.a.createElement(p["a"].Password,{onChange:function(e){return Ue(e.target.value)},value:Pe.password})):"edit"===e?D.a.createElement(D.a.Fragment,null,D.a.createElement(E["a"].Item,{name:"password",className:"form-item__with-a-href-behind",style:{display:t?"block":"none"},rules:[{required:t,message:W[0]}],validateStatus:-1===z?"":"error",help:W[z]},D.a.createElement(p["a"].Password,{onChange:function(e){return Ue(e.target.value)},value:Pe.password})),D.a.createElement(c["a"],{title:""},D.a.createElement("a",{style:t?{float:"left",marginLeft:"87.5%",marginTop:"-25px"}:{},onClick:function(e){e.preventDefault(),fe(!t)}},t?"\u53d6\u6d88\u91cd\u7f6e":"\u91cd\u7f6e\u5bc6\u7801"))):null},Le=function(e,t){return"password"===t?"edit"===e?15:"add"===e?12:0:"edit"===e?9:"add"===e?12:0},We=function(){var t=f()(m.a.mark(function t(a){var n,r,s,_,i,c,p,d;return m.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=ye.getFieldsError(Object.keys(a)),r=n.map(function(e){return e.errors}).flat(1),"add"===Oe&&""===Pe.userId&&(Y(0),r.push(q[0])),0===Pe.permissionIds.length&&(ee(0),r.push(N[0])),l||-1!==g||-1!==z||-1!==H||-1!==G||0!==r.length){t.next=29;break}if(s={username:a.name,userprofile:{person_id:ce.id,is_enabled:Boolean(Pe.status)}},a.password&&(s.password=a.password),_=e.match.params.id.replace(":",""),"new"===_){t.next=15;break}return delete s.userprofile.person_id,t.next=12,Object(T["g"])({params:s,id:_});case 12:s=t.sent,t.next=18;break;case 15:return t.next=17,Object(T["i"])(o()({},s));case 17:s=t.sent;case 18:if(!s||!s.id){t.next=27;break}if(i=Pe.permissionIds,p=Object(T["k"])({id:s.id,param:{groups:i}}),!be){t.next=25;break}return t.next=24,Object(T["h"])({id:s.id,param:{password:Pe.password}});case 24:c=t.sent;case 25:d=!be||c,p&&d&&(u["a"].success({message:"\u4fdd\u5b58\u8d26\u6237\u4fe1\u606f\u6210\u529f"}),S["router"].push("/systemManage/userManage/"));case 27:t.next=30;break;case 29:ye.validateFields();case 30:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),Ne=Object(C["a"])({visible:ie,setVisible:ue,selectedUserInformation:ce,setSelectedUserInformation:pe,actionSetRealUser:Ke}),qe=Object(A["a"])({title:"\u7528\u6237\u7ba1\u7406",buttonGroups:[],back:"/systemManage/userManage/"});return D.a.createElement(D.a.Fragment,null,qe,Ne,D.a.createElement("div",{className:"content content_margin-10 content-container_background-color content-container_padding-around-top-more"},D.a.createElement(E["a"],Object.assign({},K,{form:ye,name:"basic",initialValues:Pe}),D.a.createElement(i["a"],{gutter:10},D.a.createElement(s["a"],{span:12},D.a.createElement(E["a"].Item,{label:"\u8d26\u6237",name:"name",rules:[{required:!0,message:L[0]}],validateStatus:-1===g?"":"error",help:L[g]},D.a.createElement(p["a"],{disabled:"add"!==Oe,onChange:function(e){return Ae(e.target.value)},value:Pe.name}))),D.a.createElement(s["a"],{span:12}),D.a.createElement(s["a"],{span:Le(Oe,"password")},D.a.createElement(E["a"].Item,{label:"\u5bc6\u7801",labelCol:{span:"edit"===Oe?4:6},wrapperCol:{span:"edit"===Oe?14:18},style:{width:"edit"===Oe?"120%":"100%"}},"read"===Oe?D.a.createElement("span",null,Pe.password):Be(Oe,be))),D.a.createElement(s["a"],{span:Le(Oe,"")}),D.a.createElement(s["a"],{span:12},D.a.createElement(E["a"].Item,{label:"\u72b6\u6001",name:"status"},D.a.createElement(w["a"],{disabled:"add"!==Oe,onChange:function(e){return De({type:"status",value:e})},value:Pe.status},D.a.createElement(R,{key:1,value:1},"\u542f\u7528"),D.a.createElement(R,{key:0,value:0},"\u505c\u7528")))),D.a.createElement(s["a"],{span:12}),D.a.createElement(s["a"],{span:12},D.a.createElement(E["a"].Item,{label:"\u6743\u9650\u7ec4",name:"permissionIds",rules:[{required:!0,message:N[0]}],validateStatus:-1===H?"":"error",help:N[H]},D.a.createElement(w["a"],{mode:"multiple",disabled:"read"===Oe,style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u6743\u9650\u7ec4",defaultValue:Pe.permissionIds,onChange:function(e){return Re(e)}},ne.length>0&&ne.map(function(e){return D.a.createElement(R,{key:e.id,value:e.id},e.name)})))),D.a.createElement(s["a"],{span:12}),D.a.createElement(s["a"],{span:24},D.a.createElement(E["a"].Item,{label:"\u4f7f\u7528\u4eba",name:"userIds",labelCol:{span:3},wrapperCol:{span:21},rules:[{required:"add"===Oe,message:q[0]}],validateStatus:-1===G?"":"error",help:q[G]},D.a.createElement(r["a"],{type:"primary",style:{display:"add"===Oe?"":"none"},onClick:function(){return ue(!0)}},"\u8bf7\u9009\u62e9\u4f7f\u7528\u4eba"),D.a.createElement(n["a"],{bordered:!1,rowKey:function(e){return e.id},columns:Ie,dataSource:[ce],pagination:!1,size:"small",style:{display:Object.keys(ce).length>0?"block":"none",marginTop:15}})))),Object(U["e"])(ve,"system-manage:write")?D.a.createElement(E["a"].Item,Object.assign({},B),"read"===Oe?D.a.createElement(i["a"],null,D.a.createElement(s["a"],{span:24},D.a.createElement(r["a"],{type:"primary",onClick:function(){ge("edit"),S["router"].push("".concat(e.route.path.split(":")[0],":").concat(e.match.params.id.replace(":",""),"?type=edit"))}},"\u7f16\u8f91"))):D.a.createElement(i["a"],{gutter:15},D.a.createElement(s["a"],{span:12},D.a.createElement(r["a"],{onClick:function(){return S["router"].push("/systemManage/userManage/")}},"\u53d6\u6d88")),D.a.createElement(s["a"],{span:12},D.a.createElement(r["a"],{type:"primary",onClick:function(){return We(Pe)}},"\u4fdd\u5b58")))):null)))};t["default"]=Object(M["connect"])(function(e){var t=e.siderMenus;return{menuPermission:t.menuPermission}})(V)},zIiK:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return useUserChosenModal});var antd_es_modal_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("oj2R"),antd_es_modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("/zI6"),_opt_trade_pedestal_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("maMK"),_opt_trade_pedestal_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_opt_trade_pedestal_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("ERkP"),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_hooks_Table__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("vc7k"),_hooks_TableToolbox__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("dul+"),_localFiles_invariant__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("XzU4"),useUserChosenModal=function useUserChosenModal(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),_useState2=_opt_trade_pedestal_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState,2),page=_useState2[0],setPage=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])((new Date).valueOf()),_useState4=_opt_trade_pedestal_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3,2),searchTimeStamp=_useState4[0],setSearchTimeStamp=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),_useState6=_opt_trade_pedestal_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5,2),name__icontains=_useState6[0],setName__icontains=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),_useState8=_opt_trade_pedestal_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7,2),phone_number=_useState8[0],setPhone_number=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),_useState10=_opt_trade_pedestal_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9,2),department_id=_useState10[0],setDepartment_id=_useState10[1],visible=props.visible,setVisible=props.setVisible,setSelectedUserInformation=props.setSelectedUserInformation,actionSetRealUser=props.actionSetRealUser;Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function(){Object(_localFiles_invariant__WEBPACK_IMPORTED_MODULE_6__["d"])({category:"chooseUserModal"}).then(function(){})},[]);var updateSearchNameAndCode=function updateSearchNameAndCode(args){for(var item in args)eval("set".concat(item.substring(0,1).toUpperCase()).concat(item.substring(1,item.length),"('").concat(args[item],"')"))},reset=function(){setName__icontains(""),setPhone_number(""),setDepartment_id(""),setSearchTimeStamp((new Date).valueOf())},columns=[{title:"\u59d3\u540d",dataIndex:"name"},{title:"\u624b\u673a",dataIndex:"mobile"},{title:"\u90e8\u95e8",dataIndex:"departments",render:function(e){return e&&e.length>0?e.map(function(e){return e.name}).join(","):""}},{title:"\u804c\u4f4d",dataIndex:"title",render:function(e){return e&&e.name?e.name:""}},{title:"\u64cd\u4f5c",render:function(e,t){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a",{href:"javascript:;",onClick:function(){setSelectedUserInformation(t),actionSetRealUser(t.id),setVisible(!1)}},"\u9009\u62e9")}}],tableToolBox=Object(_hooks_TableToolbox__WEBPACK_IMPORTED_MODULE_5__["a"])({category:"chooseUserModal",searchTimeStamp:searchTimeStamp,setSearchTimeStamp:setSearchTimeStamp,updateSearchNameAndCode:updateSearchNameAndCode,setPage:setPage,variables:{name__icontains:name__icontains,phone_number:phone_number,department_id:department_id,setName__icontains:setName__icontains,setPhone_number:setPhone_number,setDepartment_id:setDepartment_id},reset:reset,packUp:!1}),table=Object(_hooks_Table__WEBPACK_IMPORTED_MODULE_4__["b"])({category:"userManageModal",columns:columns,searchTimeStamp:searchTimeStamp,page:page,setPage:setPage,variables:{expand:"position",menu:"system-manage",name__icontains:name__icontains,phone_number:phone_number,department_id:department_id,is_bound_by_user:!1,userprofile__is_enabled:!0,exclude_leave_person:!0}});return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_modal__WEBPACK_IMPORTED_MODULE_1__["a"],{title:"\u9009\u62e9\u4f7f\u7528\u4eba",width:"80%",visible:visible,style:{marginLeft:"10%",marginRight:"10%"},onCancel:function(){return setVisible(!1)},footer:null},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"content-wrapper"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"content content-container_background-color"},tableToolBox,table)))}}}]);