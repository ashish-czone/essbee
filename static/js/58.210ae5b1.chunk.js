(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{400:function(e,t,a){"use strict";var n=a(16),o=a(39),s=a(0),i=a.n(s),r=a(2),c=a.n(r),l=a(361),u=a.n(l),h=a(362),p={tag:h.q,className:c.a.string,cssModule:c.a.object},d=function(e){var t=e.className,a=e.cssModule,s=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),c=Object(h.m)(u()(t,"card-header"),a);return i.a.createElement(s,Object(n.a)({},r,{className:c}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},403:function(e,t,a){"use strict";var n=a(16),o=a(39),s=a(0),i=a.n(s),r=a(2),c=a.n(r),l=a(361),u=a.n(l),h=a(362),p={tag:h.q,inverse:c.a.bool,color:c.a.string,block:Object(h.h)(c.a.bool,'Please use the props "body"'),body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var t=e.className,a=e.cssModule,s=e.color,r=e.block,c=e.body,l=e.inverse,p=e.outline,d=e.tag,m=e.innerRef,f=Object(o.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(h.m)(u()(t,"card",!!l&&"text-white",!(!r&&!c)&&"card-body",!!s&&(p?"border":"bg")+"-"+s),a);return i.a.createElement(d,Object(n.a)({},f,{className:g,ref:m}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},404:function(e,t,a){"use strict";var n=a(16),o=a(39),s=a(0),i=a.n(s),r=a(2),c=a.n(r),l=a(361),u=a.n(l),h=a(362),p={tag:h.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,r=e.tag,c=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(h.m)(u()(t,"card-body"),a);return i.a.createElement(r,Object(n.a)({},c,{className:l,ref:s}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},643:function(e,t,a){"use strict";var n=a(16),o=a(379),s=a(381),i=a(0),r=a.n(i),c=a(2),l=a.n(c),u=a(411),h=a(39),p=a(66),d=a.n(p),m=a(361),f=a.n(m),g=a(620),b=a(362),v={children:l.a.node.isRequired,className:l.a.string,placement:l.a.string,placementPrefix:l.a.string,arrowClassName:l.a.string,hideArrow:l.a.bool,tag:b.q,isOpen:l.a.bool.isRequired,cssModule:l.a.object,offset:l.a.oneOfType([l.a.string,l.a.number]),fallbackPlacement:l.a.oneOfType([l.a.string,l.a.array]),flip:l.a.bool,container:b.r,target:b.r.isRequired,modifiers:l.a.object,boundariesElement:l.a.oneOfType([l.a.string,b.a])},O={popperManager:l.a.object.isRequired},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).handlePlacementChange=a.handlePlacementChange.bind(Object(s.a)(Object(s.a)(a))),a.setTargetNode=a.setTargetNode.bind(Object(s.a)(Object(s.a)(a))),a.getTargetNode=a.getTargetNode.bind(Object(s.a)(Object(s.a)(a))),a.getRef=a.getRef.bind(Object(s.a)(Object(s.a)(a))),a.state={},a}Object(o.a)(t,e);var a=t.prototype;return a.getChildContext=function(){return{popperManager:{setTargetNode:this.setTargetNode,getTargetNode:this.getTargetNode}}},a.componentDidUpdate=function(){this._element&&this._element.childNodes&&this._element.childNodes[0]&&this._element.childNodes[0].focus&&this._element.childNodes[0].focus()},a.setTargetNode=function(e){this.targetNode=e},a.getTargetNode=function(){return this.targetNode},a.getContainerNode=function(){return Object(b.k)(this.props.container)},a.getRef=function(e){this._element=e},a.handlePlacementChange=function(e){return this.state.placement!==e.placement&&this.setState({placement:e.placement}),e},a.renderChildren=function(){var e=this.props,t=e.cssModule,a=e.children,o=(e.isOpen,e.flip),s=(e.target,e.offset),i=e.fallbackPlacement,c=e.placementPrefix,l=e.arrowClassName,p=e.hideArrow,d=e.className,m=e.tag,v=(e.container,e.modifiers),O=e.boundariesElement,j=Object(h.a)(e,["cssModule","children","isOpen","flip","target","offset","fallbackPlacement","placementPrefix","arrowClassName","hideArrow","className","tag","container","modifiers","boundariesElement"]),y=Object(b.m)(f()("arrow",l),t),T=(this.state.placement||j.placement).split("-")[0],E=Object(b.m)(f()(d,c?c+"-"+T:T),this.props.cssModule),N=Object(u.a)({offset:{offset:s},flip:{enabled:o,behavior:i},preventOverflow:{boundariesElement:O},update:{enabled:!0,order:950,fn:this.handlePlacementChange}},v);return r.a.createElement(g.c,Object(n.a)({modifiers:N},j,{component:m,className:E,"x-placement":this.state.placement||j.placement}),a,!p&&r.a.createElement(g.a,{className:y}))},a.render=function(){return this.setTargetNode(Object(b.k)(this.props.target)),this.props.isOpen?"inline"===this.props.container?this.renderChildren():d.a.createPortal(r.a.createElement("div",{ref:this.getRef},this.renderChildren()),this.getContainerNode()):null},t}(r.a.Component);j.propTypes=v,j.defaultProps={boundariesElement:"scrollParent",placement:"auto",hideArrow:!1,isOpen:!1,offset:0,fallbackPlacement:"flip",flip:!0,container:"body",modifiers:{}},j.childContextTypes=O;var y=j;a.d(t,"b",function(){return T});var T={placement:l.a.oneOf(b.b),target:b.r.isRequired,container:b.r,isOpen:l.a.bool,disabled:l.a.bool,hideArrow:l.a.bool,boundariesElement:l.a.oneOfType([l.a.string,b.a]),className:l.a.string,innerClassName:l.a.string,arrowClassName:l.a.string,cssModule:l.a.object,toggle:l.a.func,autohide:l.a.bool,placementPrefix:l.a.string,delay:l.a.oneOfType([l.a.shape({show:l.a.number,hide:l.a.number}),l.a.number]),modifiers:l.a.object,offset:l.a.oneOfType([l.a.string,l.a.number]),innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object]),trigger:l.a.string},E={show:0,hide:250},N={isOpen:!1,hideArrow:!1,autohide:!1,delay:E,toggle:function(){},trigger:"click"};function w(e,t){return t&&(e===t||t.contains(e))}var C=function(e){function t(t){var a;return(a=e.call(this,t)||this)._target=null,a.addTargetEvents=a.addTargetEvents.bind(Object(s.a)(Object(s.a)(a))),a.handleDocumentClick=a.handleDocumentClick.bind(Object(s.a)(Object(s.a)(a))),a.removeTargetEvents=a.removeTargetEvents.bind(Object(s.a)(Object(s.a)(a))),a.toggle=a.toggle.bind(Object(s.a)(Object(s.a)(a))),a.showWithDelay=a.showWithDelay.bind(Object(s.a)(Object(s.a)(a))),a.hideWithDelay=a.hideWithDelay.bind(Object(s.a)(Object(s.a)(a))),a.onMouseOverTooltipContent=a.onMouseOverTooltipContent.bind(Object(s.a)(Object(s.a)(a))),a.onMouseLeaveTooltipContent=a.onMouseLeaveTooltipContent.bind(Object(s.a)(Object(s.a)(a))),a.show=a.show.bind(Object(s.a)(Object(s.a)(a))),a.hide=a.hide.bind(Object(s.a)(Object(s.a)(a))),a.onEscKeyDown=a.onEscKeyDown.bind(Object(s.a)(Object(s.a)(a))),a.getRef=a.getRef.bind(Object(s.a)(Object(s.a)(a))),a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.updateTarget()},a.componentWillUnmount=function(){this.removeTargetEvents()},a.onMouseOverTooltipContent=function(){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&this._hideTimeout&&this.clearHideTimeout()},a.onMouseLeaveTooltipContent=function(e){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._showTimeout&&this.clearShowTimeout(),e.persist(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide")))},a.onEscKeyDown=function(e){"Escape"===e.key&&this.hide(e)},a.getRef=function(e){var t=this.props.innerRef;t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),this._popover=e},a.getDelay=function(e){var t=this.props.delay;return"object"===typeof t?isNaN(t[e])?E[e]:t[e]:t},a.show=function(e){this.props.isOpen||(this.clearShowTimeout(),this.toggle(e))},a.showWithDelay=function(e){this._hideTimeout&&this.clearHideTimeout(),this._showTimeout=setTimeout(this.show.bind(this,e),this.getDelay("show"))},a.hide=function(e){this.props.isOpen&&(this.clearHideTimeout(),this.toggle(e))},a.hideWithDelay=function(e){this._showTimeout&&this.clearShowTimeout(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide"))},a.clearShowTimeout=function(){clearTimeout(this._showTimeout),this._showTimeout=void 0},a.clearHideTimeout=function(){clearTimeout(this._hideTimeout),this._hideTimeout=void 0},a.handleDocumentClick=function(e){var t=this.props.trigger.split(" ");t.indexOf("legacy")>-1&&(this.props.isOpen||w(e.target,this._target))?(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen&&!w(e.target,this._popover)?this.hideWithDelay(e):this.showWithDelay(e)):t.indexOf("click")>-1&&w(e.target,this._target)&&(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen?this.hideWithDelay(e):this.showWithDelay(e))},a.addTargetEvents=function(){var e=this;if(this.props.trigger){var t=this.props.trigger.split(" ");-1===t.indexOf("manual")&&((t.indexOf("click")>-1||t.indexOf("legacy")>-1)&&["click","touchstart"].forEach(function(t){return document.addEventListener(t,e.handleDocumentClick,!0)}),this._target&&(t.indexOf("hover")>-1&&(this._target.addEventListener("mouseover",this.showWithDelay,!0),this._target.addEventListener("mouseout",this.hideWithDelay,!0)),t.indexOf("focus")>-1&&(this._target.addEventListener("focusin",this.show,!0),this._target.addEventListener("focusout",this.hide,!0)),this._target.addEventListener("keydown",this.onEscKeyDown,!0)))}},a.removeTargetEvents=function(){var e=this;this._target&&(this._target.removeEventListener("mouseover",this.showWithDelay,!0),this._target.removeEventListener("mouseout",this.hideWithDelay,!0),this._target.removeEventListener("keydown",this.onEscKeyDown,!0),this._target.removeEventListener("focusin",this.show,!0),this._target.removeEventListener("focusout",this.hide,!0)),["click","touchstart"].forEach(function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)})},a.updateTarget=function(){var e=Object(b.k)(this.props.target);e!==this._target&&(this.removeTargetEvents(),this._target=e,this.addTargetEvents())},a.toggle=function(e){return this.props.disabled?e&&e.preventDefault():this.props.toggle(e)},a.render=function(){if(!this.props.isOpen)return null;this.updateTarget();var e=this.props,t=e.className,a=e.cssModule,o=e.innerClassName,s=e.target,i=e.isOpen,c=e.hideArrow,l=e.boundariesElement,u=e.placement,h=e.placementPrefix,p=e.arrowClassName,d=e.container,m=e.modifiers,f=e.offset,g=Object(b.n)(this.props,Object.keys(T)),v=Object(b.m)(t,a),O=Object(b.m)(o,a);return r.a.createElement(y,{className:v,target:s,isOpen:i,hideArrow:c,boundariesElement:l,placement:u,placementPrefix:h,arrowClassName:p,container:d,modifiers:m,offset:f,cssModule:a},r.a.createElement("div",Object(n.a)({},g,{ref:this.getRef,className:O,role:"tooltip","aria-hidden":i,onMouseOver:this.onMouseOverTooltipContent,onMouseLeave:this.onMouseLeaveTooltipContent,onKeyDown:this.onEscKeyDown})))},t}(r.a.Component);C.propTypes=T,C.defaultProps=N;t.a=C},859:function(e,t,a){"use strict";a.r(t);var n=a(44),o=a(45),s=a(120),i=a(117),r=a(118),c=a(82),l=a(0),u=a.n(l),h=a(614),p=a(16),d=a(361),m=a.n(d),f=a(643),g=function(e){var t=m()("popover","show",e.className),a=m()("popover-inner",e.innerClassName);return u.a.createElement(f.a,Object(p.a)({},e,{className:t,innerClassName:a}))};g.propTypes=f.b,g.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"};var b=g,v=a(39),O=a(2),j=a.n(O),y=a(362),T={tag:y.q,className:j.a.string,cssModule:j.a.object},E=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(v.a)(e,["className","cssModule","tag"]),s=Object(y.m)(m()(t,"popover-header"),a);return u.a.createElement(n,Object(p.a)({},o,{className:s}))};E.propTypes=T,E.defaultProps={tag:"h3"};var N=E,w={tag:y.q,className:j.a.string,cssModule:j.a.object},C=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(v.a)(e,["className","cssModule","tag"]),s=Object(y.m)(m()(t,"popover-body"),a);return u.a.createElement(n,Object(p.a)({},o,{className:s}))};C.propTypes=w,C.defaultProps={tag:"div"};var _=C,P=a(403),k=a(400),D=a(404);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(r.a)(this,a)}}var x=function(e){Object(i.a)(a,e);var t=M(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).toggle=o.toggle.bind(Object(s.a)(o)),o.state={popoverOpen:!1},o}return Object(o.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return u.a.createElement("span",null,u.a.createElement(h.a,{className:"mr-1",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),u.a.createElement(b,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle},u.a.createElement(N,null,"Popover Title"),u.a.createElement(_,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),a}(l.Component),R=function(e){Object(i.a)(a,e);var t=M(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).toggle=o.toggle.bind(Object(s.a)(o)),o.state={popoverOpen:!1,popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},o}return Object(o.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(P.a,null,u.a.createElement(k.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Popovers"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/popovers/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(D.a,null,u.a.createElement(h.a,{id:"Popover1",onClick:this.toggle},"Launch Popover"),u.a.createElement(b,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},u.a.createElement(N,null,"Popover Title"),u.a.createElement(_,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))),u.a.createElement(P.a,null,u.a.createElement(k.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Popovers"),u.a.createElement("small",null," list")),u.a.createElement(D.a,null,this.state.popovers.map(function(e,t){return u.a.createElement(x,{key:t,item:e,id:t})}))))}}]),a}(l.Component);t.default=R}}]);
//# sourceMappingURL=58.210ae5b1.chunk.js.map