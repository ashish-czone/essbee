(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1:function(e,t,n){"use strict";n.d(t,"v",function(){return r}),n.d(t,"x",function(){return a}),n.d(t,"w",function(){return u}),n.d(t,"C",function(){return c}),n.d(t,"E",function(){return o}),n.d(t,"D",function(){return i}),n.d(t,"y",function(){return l}),n.d(t,"A",function(){return s}),n.d(t,"z",function(){return d}),n.d(t,"s",function(){return f}),n.d(t,"u",function(){return E}),n.d(t,"t",function(){return O}),n.d(t,"F",function(){return _}),n.d(t,"H",function(){return S}),n.d(t,"G",function(){return p}),n.d(t,"p",function(){return R}),n.d(t,"r",function(){return b}),n.d(t,"q",function(){return h}),n.d(t,"L",function(){return v}),n.d(t,"N",function(){return g}),n.d(t,"M",function(){return m}),n.d(t,"d",function(){return D}),n.d(t,"f",function(){return C}),n.d(t,"e",function(){return y}),n.d(t,"j",function(){return j}),n.d(t,"l",function(){return P}),n.d(t,"k",function(){return w}),n.d(t,"O",function(){return U}),n.d(t,"m",function(){return T}),n.d(t,"o",function(){return A}),n.d(t,"n",function(){return k}),n.d(t,"I",function(){return M}),n.d(t,"K",function(){return L}),n.d(t,"J",function(){return I}),n.d(t,"a",function(){return x}),n.d(t,"c",function(){return N}),n.d(t,"b",function(){return B}),n.d(t,"g",function(){return H}),n.d(t,"i",function(){return z}),n.d(t,"h",function(){return F}),n.d(t,"B",function(){return q});var r="login",a="login_success",u="login_error",c="register",o="register_success",i="register_error",l="logout",s="logout_success",d="logout_error",f="forgot_password",E="forgot_password_success",O="forgot_password_error",_="reset_password",S="reset_password_success",p="reset_password_error",R="FETCH_USERS",b="FETCH_USERS_SUCCESS",h="FETCH_USERS_ERROR",v="UPDATE_USERS",g="UPDATE_USERS_SUCCESS",m="UPDATE_USERS_ERROR",D="ADD_USERS",C="ADD_USERS_SUCCESS",y="ADD_USERS_ERROR",j="DELETE_USERS",P="DELETE_USERS_SUCCESS",w="DELETE_USERS_ERROR",U="USERS_ERROR_REMOVE",T="FETCH_PROMO_CODES",A="FETCH_PROMO_CODES_SUCCESS",k="FETCH_PROMO_CODES_ERROR",M="UPDATE_PROMO_CODES",L="UPDATE_PROMO_CODES_SUCCESS",I="UPDATE_PROMO_CODES_ERROR",x="ADD_PROMO_CODES",N="ADD_PROMO_CODES_SUCCESS",B="ADD_PROMO_CODES_ERROR",H="DELETE_PROMO_CODES",z="DELETE_PROMO_CODES_SUCCESS",F="DELETE_PROMO_CODES_ERROR",q="PROMO_CODES_ERROR_REMOVE"},189:function(e,t,n){e.exports=n(355)},346:function(e,t,n){},347:function(e,t,n){},355:function(e,t,n){"use strict";n.r(t);n(190),n(122),n(296),n(325),n(329),n(331);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var r=n(0),a=n.n(r),u=n(66),c=n.n(u),o=(n(346),n(44)),i=n(45),l=n(117),s=n(118),d=n(82),f=n(359),E=n(360),O=n(356),_=(n(347),n(121),n(358),n(46));function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var p=a.a.lazy(function(){return Promise.all([n.e(16),n.e(69)]).then(n.bind(null,854))}),R=a.a.lazy(function(){return Promise.all([n.e(1),n.e(19)]).then(n.bind(null,802))}),b=a.a.lazy(function(){return Promise.all([n.e(18),n.e(75)]).then(n.bind(null,803))}),h=a.a.lazy(function(){return Promise.all([n.e(20),n.e(73)]).then(n.bind(null,804))}),v=a.a.lazy(function(){return Promise.all([n.e(21),n.e(74)]).then(n.bind(null,805))}),g=function(e){Object(l.a)(n,e);var t=S(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"https://ashish-czone.github.io/essbee",REACT_APP_API_URL:"http://localhost:3000/"}).ROUTER_BASE;return a.a.createElement(f.a,{basename:e},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},a.a.createElement(E.a,null,a.a.createElement(O.a,{exact:!0,path:"/login",name:"Login Page",render:function(e){return a.a.createElement(R,e)}}),a.a.createElement(O.a,{exact:!0,path:"/register",name:"Register Page",render:function(e){return a.a.createElement(b,e)}}),a.a.createElement(O.a,{exact:!0,path:"/404",name:"Page 404",render:function(e){return a.a.createElement(h,e)}}),a.a.createElement(O.a,{exact:!0,path:"/500",name:"Page 500",render:function(e){return a.a.createElement(v,e)}}),a.a.createElement(O.a,{path:"/",name:"Home",render:function(e){return a.a.createElement(p,e)}}))))}}]),n}(r.Component),m=n(119),D=n(38),C=n(4),y=(n(55),n(1)),j={token:_.a.get("token"),error:null};var P={type:null,error:null,list:{}},w=n(33),U=n.n(w),T={type:null,error:null,list:{},sortBy:"created_at",sortDir:-1,filters:{}},A=Object(D.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.F:case y.H:case y.G:case y.s:case y.u:case y.t:case y.v:case y.x:case y.w:case y.y:case y.A:case y.C:case y.E:case y.D:return Object(C.a)({},e,t);default:return e}},usersTbl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.p:case y.r:return Object(C.a)({},e,t,{error:null});case y.q:return Object(C.a)({},e,t);case y.L:case y.N:return Object(C.a)({},e,t,{error:null});case y.M:return Object(C.a)({},e,t);case y.d:case y.f:return Object(C.a)({},e,t,{error:null});case y.e:return Object(C.a)({},e,t);case y.j:case y.l:return Object(C.a)({},e,t,{error:null});case y.k:case y.O:return Object(C.a)({},e,t);default:return e}},promo_codes:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case y.m:case y.o:return Object(C.a)({},t,n,{error:null});case y.n:return Object(C.a)({},t,n);case y.I:return Object(C.a)({},t,n,{error:null});case y.K:e=U.a.cloneDeep(t.list);var r=U.a.findIndex(e.data,function(e){return e._id==n.payload._id});return e.data[r]=n.payload,Object(C.a)({},t,{list:e,error:null});case y.J:return Object(C.a)({},t,n);case y.a:return Object(C.a)({},t,n,{error:null});case y.c:return(e=U.a.cloneDeep(t.list)).data.unshift(n.payload),Object(C.a)({},t,{list:e,error:null});case y.b:return Object(C.a)({},t,n);case y.g:return Object(C.a)({},t,n,{error:null});case y.i:return e=U.a.cloneDeep(t.list),U.a.remove(e.data,function(e){return e._id==n.payload._id}),Object(C.a)({},t,{list:e,error:null});case y.h:case y.B:return Object(C.a)({},t,n);default:return t}}}),k=n(184),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,L=Object(D.e)(A,M(Object(D.a)(k.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(m.a,{store:L},a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(44),a=n(45),u=n(33),c=n.n(u),o=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"save",value:function(e,t){t&&(delete t.password,delete t.password_confirmation),c.a.isPlainObject(t)?(t.timestamp=(new Date).getTime()/1e3,localStorage.setItem(e,JSON.stringify(t))):localStorage.setItem(e,t)}},{key:"get",value:function(e){var t=localStorage.getItem(e);return"undefined"!=t?t:null}},{key:"clearAll",value:function(){localStorage.clear()}}]),e}()},55:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(116),a=n.n(r),u=n(4),c=n(183),o=n(44),i=n(45),l=n(46),s=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"bindAuth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&(t.Authorization="Bearer "+e),t}},{key:"get",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.request(t,"GET",n,r)}},{key:"post",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.request(t,"POST",n,r)}},{key:"put",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.request(t,"PUT",n,r)}},{key:"delete",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.request(t,"DELETE",n,r)}},{key:"setDebug",value:function(t){e.debug=t}}]),e}();s.debug=!1,s.request=function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r,c,o,i=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"POST",r=i.length>2?i[2]:void 0,c=i.length>3&&void 0!==i[3]?i[3]:{},"http://localhost:3000/",o=l.a.get("token"),s.debug&&(t+="?XDEBUG_SESSION_START=1"),c=s.bindAuth(o,c),e.abrupt("return",fetch("http://localhost:3000/"+t,{method:n,credentials:"include",body:"GET"!==n&&r&&Object.keys(r).length?JSON.stringify(r):null,headers:Object(u.a)({},c,{"Content-Type":"application/json",Accept:"application/json"})}).then(function(e){return console.log("server-response: ",e),e.status,e.json()}).catch(function(e){return console.error("Error:",e)}));case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},[[189,8,9]]]);
//# sourceMappingURL=main.a363bcb3.chunk.js.map