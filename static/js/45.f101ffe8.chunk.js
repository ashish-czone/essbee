(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{372:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},400:function(e,a,t){"use strict";var r=t(16),n=t(39),c=t(0),s=t.n(c),o=t(2),l=t.n(o),u=t(361),i=t.n(u),f=t(362),m={tag:f.q,className:l.a.string,cssModule:l.a.object},d=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(f.m)(i()(a,"card-header"),t);return s.a.createElement(c,Object(r.a)({},o,{className:l}))};d.propTypes=m,d.defaultProps={tag:"div"},a.a=d},401:function(e,a,t){"use strict";var r=t(16),n=t(39),c=t(0),s=t.n(c),o=t(2),l=t.n(o),u=t(361),i=t.n(u),f=t(362),m={tag:f.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},d=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,o=e.tag,l=e.form,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(f.m)(i()(a,c?"no-gutters":null,l?"form-row":"row"),t);return s.a.createElement(o,Object(r.a)({},u,{className:m}))};d.propTypes=m,d.defaultProps={tag:"div"},a.a=d},402:function(e,a,t){"use strict";var r=t(16),n=t(39),c=t(372),s=t.n(c),o=t(0),l=t.n(o),u=t(2),i=t.n(u),f=t(361),m=t.n(f),d=t(362),b=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),push:Object(d.h)(b,'Please use the prop "order"'),pull:Object(d.h)(b,'Please use the prop "order"'),order:b,offset:b})]),g={tag:d.q,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},j=function(e){var a=e.className,t=e.cssModule,c=e.widths,o=e.tag,u=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach(function(a,r){var n=e[a];if(delete u[a],n||""===n){var c=!r;if(s()(n)){var o,l=c?"-":"-"+a+"-",f=v(c,a,n.size);i.push(Object(d.m)(m()(((o={})[f]=n.size||""===n.size,o["order"+l+n.order]=n.order||0===n.order,o["offset"+l+n.offset]=n.offset||0===n.offset,o)),t))}else{var b=v(c,a,n);i.push(b)}}}),i.length||i.push("col");var f=Object(d.m)(m()(a,i),t);return l.a.createElement(o,Object(r.a)({},u,{className:f}))};j.propTypes=g,j.defaultProps=h,a.a=j},403:function(e,a,t){"use strict";var r=t(16),n=t(39),c=t(0),s=t.n(c),o=t(2),l=t.n(o),u=t(361),i=t.n(u),f=t(362),m={tag:f.q,inverse:l.a.bool,color:l.a.string,block:Object(f.h)(l.a.bool,'Please use the props "body"'),body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var a=e.className,t=e.cssModule,c=e.color,o=e.block,l=e.body,u=e.inverse,m=e.outline,d=e.tag,b=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(f.m)(i()(a,"card",!!u&&"text-white",!(!o&&!l)&&"card-body",!!c&&(m?"border":"bg")+"-"+c),t);return s.a.createElement(d,Object(r.a)({},p,{className:g,ref:b}))};d.propTypes=m,d.defaultProps={tag:"div"},a.a=d},404:function(e,a,t){"use strict";var r=t(16),n=t(39),c=t(0),s=t.n(c),o=t(2),l=t.n(o),u=t(361),i=t.n(u),f=t(362),m={tag:f.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,o=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),u=Object(f.m)(i()(a,"card-body"),t);return s.a.createElement(o,Object(r.a)({},l,{className:u,ref:c}))};d.propTypes=m,d.defaultProps={tag:"div"},a.a=d},806:function(e,a,t){"use strict";t.r(a);var r=t(44),n=t(45),c=t(117),s=t(118),o=t(82),l=t(0),u=t.n(l),i=t(401),f=t(402),m=t(403),d=t(400),b=t(404),p=t(788),g=t(787);function h(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,r=Object(o.a)(e);if(a){var n=Object(o.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(s.a)(this,t)}}var v=function(e){Object(c.a)(t,e);var a=h(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(i.a,null,u.a.createElement(f.a,{xs:"12"},u.a.createElement(m.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Breadcrumbs"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/breadcrumbs/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(b.a,null,u.a.createElement(p.a,null,u.a.createElement(g.a,{active:!0},"Home")),u.a.createElement(p.a,null,u.a.createElement(g.a,null,u.a.createElement("a",{href:"#"},"Home")),u.a.createElement(g.a,{active:!0},"Library")),u.a.createElement(p.a,null,u.a.createElement(g.a,null,u.a.createElement("a",{href:"#"},"Home")),u.a.createElement(g.a,null,u.a.createElement("a",{href:"#"},"Library")),u.a.createElement(g.a,{active:!0},"Data")),u.a.createElement(p.a,{tag:"nav"},u.a.createElement(g.a,{tag:"a",href:"#"},"Home"),u.a.createElement(g.a,{tag:"a",href:"#"},"Library"),u.a.createElement(g.a,{tag:"a",href:"#"},"Data"),u.a.createElement(g.a,{active:!0,tag:"span"},"Bootstrap")))))))}}]),t}(l.Component);a.default=v}}]);
//# sourceMappingURL=45.f101ffe8.chunk.js.map