(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{372:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},400:function(e,a,t){"use strict";var s=t(16),l=t(39),n=t(0),r=t.n(n),c=t(2),i=t.n(c),o=t(361),u=t.n(o),m=t(362),f={tag:m.q,className:i.a.string,cssModule:i.a.object},d=function(e){var a=e.className,t=e.cssModule,n=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),i=Object(m.m)(u()(a,"card-header"),t);return r.a.createElement(n,Object(s.a)({},c,{className:i}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},401:function(e,a,t){"use strict";var s=t(16),l=t(39),n=t(0),r=t.n(n),c=t(2),i=t.n(c),o=t(361),u=t.n(o),m=t(362),f={tag:m.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},d=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,c=e.tag,i=e.form,o=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(m.m)(u()(a,n?"no-gutters":null,i?"form-row":"row"),t);return r.a.createElement(c,Object(s.a)({},o,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},402:function(e,a,t){"use strict";var s=t(16),l=t(39),n=t(372),r=t.n(n),c=t(0),i=t.n(c),o=t(2),u=t.n(o),m=t(361),f=t.n(m),d=t(362),b=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(d.h)(b,'Please use the prop "order"'),pull:Object(d.h)(b,'Please use the prop "order"'),order:b,offset:b})]),h={tag:d.q,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,n=e.widths,c=e.tag,o=Object(l.a)(e,["className","cssModule","widths","tag"]),u=[];n.forEach(function(a,s){var l=e[a];if(delete o[a],l||""===l){var n=!s;if(r()(l)){var c,i=n?"-":"-"+a+"-",m=E(n,a,l.size);u.push(Object(d.m)(f()(((c={})[m]=l.size||""===l.size,c["order"+i+l.order]=l.order||0===l.order,c["offset"+i+l.offset]=l.offset||0===l.offset,c)),t))}else{var b=E(n,a,l);u.push(b)}}}),u.length||u.push("col");var m=Object(d.m)(f()(a,u),t);return i.a.createElement(c,Object(s.a)({},o,{className:m}))};y.propTypes=h,y.defaultProps=g,a.a=y},403:function(e,a,t){"use strict";var s=t(16),l=t(39),n=t(0),r=t.n(n),c=t(2),i=t.n(c),o=t(361),u=t.n(o),m=t(362),f={tag:m.q,inverse:i.a.bool,color:i.a.string,block:Object(m.h)(i.a.bool,'Please use the props "body"'),body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},d=function(e){var a=e.className,t=e.cssModule,n=e.color,c=e.block,i=e.body,o=e.inverse,f=e.outline,d=e.tag,b=e.innerRef,p=Object(l.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),h=Object(m.m)(u()(a,"card",!!o&&"text-white",!(!c&&!i)&&"card-body",!!n&&(f?"border":"bg")+"-"+n),t);return r.a.createElement(d,Object(s.a)({},p,{className:h,ref:b}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},404:function(e,a,t){"use strict";var s=t(16),l=t(39),n=t(0),r=t.n(n),c=t(2),i=t.n(c),o=t(361),u=t.n(o),m=t(362),f={tag:m.q,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},d=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,c=e.tag,i=Object(l.a)(e,["className","cssModule","innerRef","tag"]),o=Object(m.m)(u()(a,"card-body"),t);return r.a.createElement(c,Object(s.a)({},i,{className:o,ref:n}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},457:function(e,a,t){"use strict";var s=t(16),l=t(39),n=t(411),r=t(0),c=t.n(r),i=t(2),o=t.n(i),u=t(361),m=t.n(u),f=t(456),d=t(362),b=Object(n.a)({},f.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:d.q,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),p=Object(n.a)({},f.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function h(e){var a=e.tag,t=e.baseClass,n=e.baseClassActive,r=e.className,i=e.cssModule,o=e.children,u=e.innerRef,b=Object(l.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(d.o)(b,d.c),h=Object(d.n)(b,d.c);return c.a.createElement(f.Transition,p,function(e){var l="entered"===e,f=Object(d.m)(m()(r,t,l&&n),i);return c.a.createElement(a,Object(s.a)({className:f},h,{ref:u}),o)})}h.propTypes=b,h.defaultProps=p,a.a=h},780:function(e,a,t){"use strict";var s=t(16),l=t(39),n=t(411),r=t(0),c=t.n(r),i=t(2),o=t.n(i),u=t(361),m=t.n(u),f=t(362),d=t(457),b={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:f.q,transition:o.a.shape(d.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(n.a)({},d.a.defaultProps,{unmountOnExit:!0})};function h(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,i=e.cssModule,o=e.tag,u=e.color,b=e.isOpen,p=e.toggle,h=e.children,g=e.transition,E=e.fade,y=e.innerRef,v=Object(l.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),k=Object(f.m)(m()(a,"alert","alert-"+u,{"alert-dismissible":p}),i),j=Object(f.m)(m()("close",t),i),O=Object(n.a)({},d.a.defaultProps,g,{baseClass:E?g.baseClass:"",timeout:E?g.timeout:0});return c.a.createElement(d.a,Object(s.a)({},v,O,{tag:o,className:k,in:b,role:"alert",innerRef:y}),p?c.a.createElement("button",{type:"button",className:j,"aria-label":r,onClick:p},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,h)}h.propTypes=b,h.defaultProps=p,a.a=h},828:function(e,a,t){"use strict";t.r(a);var s=t(44),l=t(45),n=t(120),r=t(117),c=t(118),i=t(82),o=t(0),u=t.n(o),m=t(401),f=t(402),d=t(403),b=t(400),p=t(404),h=t(780);function g(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,s=Object(i.a)(e);if(a){var l=Object(i.a)(this).constructor;t=Reflect.construct(s,arguments,l)}else t=s.apply(this,arguments);return Object(c.a)(this,t)}}var E=function(e){Object(r.a)(t,e);var a=g(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={visible:!0},l.onDismiss=l.onDismiss.bind(Object(n.a)(l)),l}return Object(l.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.a,null,u.a.createElement(f.a,{xs:"12",md:"6"},u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Alerts"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(p.a,null,u.a.createElement(h.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),u.a.createElement(h.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),u.a.createElement(h.a,{color:"success"},"This is a success alert \u2014 check it out!"),u.a.createElement(h.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),u.a.createElement(h.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),u.a.createElement(h.a,{color:"info"},"This is a info alert \u2014 check it out!"),u.a.createElement(h.a,{color:"light"},"This is a light alert \u2014 check it out!"),u.a.createElement(h.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),u.a.createElement(f.a,{xs:"12",md:"6"},u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Alerts"),u.a.createElement("small",null," use ",u.a.createElement("code",null,".alert-link")," to provide links")),u.a.createElement(p.a,null,u.a.createElement(h.a,{color:"primary"},"This is a primary alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"secondary"},"This is a secondary alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"success"},"This is a success alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"danger"},"This is a danger alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"warning"},"This is a warning alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"info"},"This is a info alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"light"},"This is a light alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),u.a.createElement(h.a,{color:"dark"},"This is a dark alert with ",u.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),u.a.createElement(m.a,null,u.a.createElement(f.a,{xs:"12",md:"6"},u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Alerts"),u.a.createElement("small",null,"additional content")),u.a.createElement(p.a,null,u.a.createElement(h.a,{color:"success"},u.a.createElement("h4",{className:"alert-heading"},"Well done!"),u.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),u.a.createElement("hr",null),u.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),u.a.createElement(f.a,{xs:"12",md:"6"},u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Alerts"),u.a.createElement("small",null,"dismissing")),u.a.createElement(p.a,null,u.a.createElement(h.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),t}(o.Component);a.default=E}}]);
//# sourceMappingURL=37.a42c02e3.chunk.js.map