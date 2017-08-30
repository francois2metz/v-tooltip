!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory(require("Tooltip")):"function"==typeof define&&define.amd?define(["Tooltip"],factory):"object"==typeof exports?exports.VTooltip=factory(require("Tooltip")):root.VTooltip=factory(root.Tooltip)}(this,function(__WEBPACK_EXTERNAL_MODULE_4__){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function getOptions(options){return{placement:options.placement||directive.options.defaultPlacement,delay:options.delay||directive.options.defaultDelay,template:options.template||directive.options.defaultTemplate,trigger:options.trigger||directive.options.defaultTrigger,offset:options.offset||directive.options.defaultOffset,container:options.container||directive.options.defaultContainer,boundariesElement:options.boundariesElement||directive.options.defaultBoundariesElement,popperOptions:options.popperOptions||directive.options.defaultPopperOptions}}function getPlacement(value,modifiers){var placement=value.placement;return positions.forEach(function(pos){modifiers[pos]&&(placement=pos)}),placement}function getContent(value){var type=void 0===value?"undefined":_typeof(value);return"string"===type?value:!(!value||"object"!==type)&&value.content}function createTooltip(el,value,modifiers){var content=getContent(value),classes=value.classes||directive.options.defaultClass,opts=_extends({title:content,html:!0},getOptions(_extends({},value,{placement:getPlacement(value,modifiers)}))),tooltip=el._tooltip=new SuperTooltip(el,opts);tooltip.setClasses(classes),tooltip._vueEl=el}function destroyTooltip(el){el._tooltip&&(el._tooltip.dispose(),delete el._tooltip)}__webpack_require__.d(__webpack_exports__,"c",function(){return state}),__webpack_require__.d(__webpack_exports__,"a",function(){return defaultOptions});var __WEBPACK_IMPORTED_MODULE_0_tooltip_js__=__webpack_require__(4),__WEBPACK_IMPORTED_MODULE_0_tooltip_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tooltip_js__),__WEBPACK_IMPORTED_MODULE_1__utils__=__webpack_require__(3),_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},state={enabled:!0},positions=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],defaultOptions={defaultPlacement:"top",defaultClass:"vue-tooltip-theme",defaultTemplate:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',defaultDelay:0,defaultTrigger:"hover focus",defaultOffset:0,defaultContainer:"body",defaultBoundariesElement:void 0,defaultPopperOptions:{},autoHide:!0,disposeTimeout:5e3},SuperTooltip=function(_Tooltip){function SuperTooltip(){return _classCallCheck(this,SuperTooltip),_possibleConstructorReturn(this,(SuperTooltip.__proto__||Object.getPrototypeOf(SuperTooltip)).apply(this,arguments))}return _inherits(SuperTooltip,_Tooltip),_createClass(SuperTooltip,[{key:"setClasses",value:function(classes){var el=this._tooltipNode;if(el){var oldClasses=this._oldClasses;classes?oldClasses?__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__.a)(el,classes,oldClasses):__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__.b)(el,classes):oldClasses&&__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__.c)(el,oldClasses),this._oldClasses=classes}else this._pendingClasses=classes;this._classes=classes}},{key:"setContent",value:function(content){if(this.options.title=content,this._tooltipNode){var el=this._tooltipNode.querySelector(this.innerSelector);el&&(el.innerHTML=content||"",this.popperInstance.update())}}},{key:"setOptions",value:function(options){options=getOptions(options);var needPopperUpdate=!1,needRestart=!1;this.options.offset===options.offset&&this.options.placement===options.placement||(needPopperUpdate=!0),this.options.template===options.template&&this.options.trigger===options.trigger&&this.options.container===options.container||(needRestart=!0);for(var key in options)this.options[key]=options[key];if(this._tooltipNode)if(needRestart){var isOpen=this._isOpen;this.dispose();var events="string"==typeof this.options.trigger?options.trigger.split(" ").filter(function(trigger){return-1!==["click","hover","focus"].indexOf(trigger)}):[];this._setEventListeners(this.reference,events,this.options),this.setClasses(this._classes),isOpen&&this.show()}else needPopperUpdate&&this.popperInstance.update()}},{key:"_create",value:function(){for(var _get2,_len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var result=(_get2=_get(SuperTooltip.prototype.__proto__||Object.getPrototypeOf(SuperTooltip.prototype),"_create",this)).call.apply(_get2,[this].concat(args));return defaultOptions.autoHide&&-1!==this.options.trigger.indexOf("hover")&&(result.addEventListener("mouseenter",this.hide),result.addEventListener("click",this.hide)),result}},{key:"_dispose",value:function(){var _this2=this;return this._tooltipNode&&(this._tooltipNode.removeEventListener("mouseenter",this.hide),this._tooltipNode.removeEventListener("click",this.hide)),this._events.forEach(function(_ref){var func=_ref.func,event=_ref.event;_this2.reference.removeEventListener(event,func)}),this._events=[],_get(SuperTooltip.prototype.__proto__||Object.getPrototypeOf(SuperTooltip.prototype),"_dispose",this).call(this)}},{key:"_show",value:function(){for(var _get3,_this3=this,_len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];var result=(_get3=_get(SuperTooltip.prototype.__proto__||Object.getPrototypeOf(SuperTooltip.prototype),"_show",this)).call.apply(_get3,[this].concat(args));return this._pendingClasses&&(this.setClasses(this._pendingClasses),this._pendingClasses=null),setTimeout(function(){_this3.popperInstance.update()},0),clearTimeout(this._disposeTimer),result}},{key:"_hide",value:function(){for(var _get4,_this4=this,_len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];var result=(_get4=_get(SuperTooltip.prototype.__proto__||Object.getPrototypeOf(SuperTooltip.prototype),"_hide",this)).call.apply(_get4,[this].concat(args));return clearTimeout(this._disposeTimer),this._disposeTimer=setTimeout(function(){_this4._tooltipNode&&(_this4._tooltipNode.removeEventListener("mouseenter",_this4.hide),_this4._tooltipNode.removeEventListener("click",_this4.hide),_this4._tooltipNode.parentNode.removeChild(_this4._tooltipNode),_this4._tooltipNode=null)},defaultOptions.disposeTimeout),result}}]),SuperTooltip}(__WEBPACK_IMPORTED_MODULE_0_tooltip_js___default.a),directive={options:defaultOptions,bind:function(el,_ref2){var value=_ref2.value,modifiers=_ref2.modifiers,content=getContent(value);destroyTooltip(el),content&&state.enabled&&createTooltip(el,value,modifiers)},update:function(el,_ref3){var value=_ref3.value,modifiers=(_ref3.oldValue,_ref3.modifiers),content=getContent(value);if(content&&state.enabled)if(el._tooltip){var tooltip=el._tooltip;tooltip.setContent(content),tooltip.setClasses(value&&value.classes||directive.options.defaultClass),tooltip.setOptions(_extends({},value,{placement:getPlacement(value,modifiers)}))}else createTooltip(el,value,modifiers);else destroyTooltip(el)},unbind:function(el){destroyTooltip(el)}};__webpack_exports__.b=directive},function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue,options){install.installed||(install.installed=!0,options=Object.assign({},__WEBPACK_IMPORTED_MODULE_0__v_tooltip__.a,options||{}),__WEBPACK_IMPORTED_MODULE_0__v_tooltip__.b.options=options,Vue.directive("tooltip",__WEBPACK_IMPORTED_MODULE_0__v_tooltip__.b))}__webpack_exports__.install=install,__webpack_require__.d(__webpack_exports__,"VTooltip",function(){return VTooltip});var __WEBPACK_IMPORTED_MODULE_0__v_tooltip__=__webpack_require__(0),VTooltip=__WEBPACK_IMPORTED_MODULE_0__v_tooltip__.b,plugin={install:install,get enabled(){return __WEBPACK_IMPORTED_MODULE_0__v_tooltip__.c.enabled},set enabled(value){__WEBPACK_IMPORTED_MODULE_0__v_tooltip__.c.enabled=value}},GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin),__webpack_exports__.default=plugin}.call(__webpack_exports__,__webpack_require__(1))},function(module,__webpack_exports__,__webpack_require__){"use strict";function convertToArray(value){return"string"==typeof value&&(value=value.split(" ")),value}function addClasses(el,classes){classes=convertToArray(classes),classes.forEach(function(c){el.classList.add(c)})}function removeClasses(el,classes){classes=convertToArray(classes),classes.forEach(function(c){el.classList.remove(c)})}function replaceClasses(el,newClasses,oldClasses){removeClasses(el,oldClasses),addClasses(el,newClasses)}__webpack_exports__.b=addClasses,__webpack_exports__.c=removeClasses,__webpack_exports__.a=replaceClasses},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_4__}])});