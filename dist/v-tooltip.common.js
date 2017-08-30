module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tooltip_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tooltip_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tooltip_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var state = {
  enabled: true
};

var positions = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];

var defaultOptions = {
  // Default tooltip placement relative to target element
  defaultPlacement: 'top',
  // Default CSS classes applied to the tooltip element
  defaultClass: 'vue-tooltip-theme',
  // Default HTML template of the tooltip element
  // It must include `tooltip` & `tooltip-inner` CSS classes
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  // Delay (ms)
  defaultDelay: 0,
  // Default events that trigger the tooltip
  defaultTrigger: 'hover focus',
  // Default position offset (px)
  defaultOffset: 0,
  // Default container where the tooltip will be appended
  defaultContainer: 'body',
  defaultBoundariesElement: undefined,
  defaultPopperOptions: {},
  autoHide: true,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000
};

function getOptions(options) {
  return {
    placement: options.placement || directive.options.defaultPlacement,
    delay: options.delay || directive.options.defaultDelay,
    template: options.template || directive.options.defaultTemplate,
    trigger: options.trigger || directive.options.defaultTrigger,
    offset: options.offset || directive.options.defaultOffset,
    container: options.container || directive.options.defaultContainer,
    boundariesElement: options.boundariesElement || directive.options.defaultBoundariesElement,
    popperOptions: options.popperOptions || directive.options.defaultPopperOptions
  };
}

function getPlacement(value, modifiers) {
  var placement = value.placement;
  positions.forEach(function (pos) {
    if (modifiers[pos]) {
      placement = pos;
    }
  });
  return placement;
}

var SuperTooltip = function (_Tooltip) {
  _inherits(SuperTooltip, _Tooltip);

  function SuperTooltip() {
    _classCallCheck(this, SuperTooltip);

    return _possibleConstructorReturn(this, (SuperTooltip.__proto__ || Object.getPrototypeOf(SuperTooltip)).apply(this, arguments));
  }

  _createClass(SuperTooltip, [{
    key: 'setClasses',
    value: function setClasses(classes) {
      var el = this._tooltipNode;

      if (el) {
        var oldClasses = this._oldClasses;
        if (classes) {
          if (oldClasses) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* replaceClasses */])(el, classes, oldClasses);
          } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* addClasses */])(el, classes);
          }
        } else if (oldClasses) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* removeClasses */])(el, oldClasses);
        }
        this._oldClasses = classes;
      } else {
        this._pendingClasses = classes;
      }

      this._classes = classes;
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.options.title = content;
      if (this._tooltipNode) {
        var el = this._tooltipNode.querySelector(this.innerSelector);

        if (el) {
          if (!content) {
            el.innerHTML = '';
          } else {
            el.innerHTML = content;
          }

          this.popperInstance.update();
        }
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      options = getOptions(options);

      var needPopperUpdate = false;
      var needRestart = false;

      if (this.options.offset !== options.offset || this.options.placement !== options.placement) {
        needPopperUpdate = true;
      }

      if (this.options.template !== options.template || this.options.trigger !== options.trigger || this.options.container !== options.container) {
        needRestart = true;
      }

      for (var key in options) {
        this.options[key] = options[key];
      }

      if (this._tooltipNode) {
        if (needRestart) {
          var isOpen = this._isOpen;

          this.dispose();

          var events = typeof this.options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) {
            return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
          }) : [];
          this._setEventListeners(this.reference, events, this.options);

          this.setClasses(this._classes);

          if (isOpen) {
            this.show();
          }
        } else if (needPopperUpdate) {
          this.popperInstance.update();
        }
      }
    }
  }, {
    key: '_create',
    value: function _create() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var result = (_get2 = _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_create', this)).call.apply(_get2, [this].concat(args));

      if (defaultOptions.autoHide && this.options.trigger.indexOf('hover') !== -1) {
        result.addEventListener('mouseenter', this.hide);
        result.addEventListener('click', this.hide);
      }

      return result;
    }
  }, {
    key: '_dispose',
    value: function _dispose() {
      var _this2 = this;

      if (this._tooltipNode) {
        this._tooltipNode.removeEventListener('mouseenter', this.hide);
        this._tooltipNode.removeEventListener('click', this.hide);
      }

      this._events.forEach(function (_ref) {
        var func = _ref.func,
            event = _ref.event;

        _this2.reference.removeEventListener(event, func);
      });
      this._events = [];
      return _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_dispose', this).call(this);
    }
  }, {
    key: '_show',
    value: function _show() {
      var _get3,
          _this3 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var result = (_get3 = _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_show', this)).call.apply(_get3, [this].concat(args));

      if (this._pendingClasses) {
        this.setClasses(this._pendingClasses);
        this._pendingClasses = null;
      }

      // Fix position
      setTimeout(function () {
        _this3.popperInstance.update();
      }, 0);

      clearTimeout(this._disposeTimer);

      return result;
    }
  }, {
    key: '_hide',
    value: function _hide() {
      var _get4,
          _this4 = this;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var result = (_get4 = _get(SuperTooltip.prototype.__proto__ || Object.getPrototypeOf(SuperTooltip.prototype), '_hide', this)).call.apply(_get4, [this].concat(args));

      clearTimeout(this._disposeTimer);
      this._disposeTimer = setTimeout(function () {
        if (_this4._tooltipNode) {
          _this4._tooltipNode.removeEventListener('mouseenter', _this4.hide);
          _this4._tooltipNode.removeEventListener('click', _this4.hide);
          _this4._tooltipNode.parentNode.removeChild(_this4._tooltipNode);
          _this4._tooltipNode = null;
        }
      }, defaultOptions.disposeTimeout);

      return result;
    }
  }]);

  return SuperTooltip;
}(__WEBPACK_IMPORTED_MODULE_0_tooltip_js___default.a);

function getContent(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type === 'string') {
    return value;
  } else if (value && type === 'object') {
    return value.content;
  } else {
    return false;
  }
}

function createTooltip(el, value, modifiers) {
  var content = getContent(value);
  var classes = value.classes || directive.options.defaultClass;
  var opts = _extends({
    title: content,
    html: true
  }, getOptions(_extends({}, value, {
    placement: getPlacement(value, modifiers)
  })));
  var tooltip = el._tooltip = new SuperTooltip(el, opts);
  tooltip.setClasses(classes);
  tooltip._vueEl = el;
}

function destroyTooltip(el) {
  if (el._tooltip) {
    el._tooltip.dispose();
    delete el._tooltip;
  }
}

var directive = {
  options: defaultOptions,
  bind: function bind(el, _ref2) {
    var value = _ref2.value,
        modifiers = _ref2.modifiers;

    var content = getContent(value);
    destroyTooltip(el);
    if (content && state.enabled) {
      createTooltip(el, value, modifiers);
    }
  },
  update: function update(el, _ref3) {
    var value = _ref3.value,
        oldValue = _ref3.oldValue,
        modifiers = _ref3.modifiers;

    var content = getContent(value);
    if (!content || !state.enabled) {
      destroyTooltip(el);
    } else if (el._tooltip) {
      var tooltip = el._tooltip;
      // Content
      tooltip.setContent(content);
      // CSS Classes
      tooltip.setClasses(value && value.classes || directive.options.defaultClass);
      // Options
      tooltip.setOptions(_extends({}, value, {
        placement: getPlacement(value, modifiers)
      }));
    } else {
      createTooltip(el, value, modifiers);
    }
  },
  unbind: function unbind(el) {
    destroyTooltip(el);
  }
};

/* harmony default export */ __webpack_exports__["b"] = (directive);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["install"] = install;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTooltip", function() { return VTooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v_tooltip__ = __webpack_require__(0);


function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;

  options = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["a" /* defaultOptions */], options || {});
  __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */].options = options;
  Vue.directive('tooltip', __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */]);
}

var VTooltip = __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["b" /* default */];

var plugin = {
  install: install,

  get enabled() {
    return __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["c" /* state */].enabled;
  },

  set enabled(value) {
    __WEBPACK_IMPORTED_MODULE_0__v_tooltip__["c" /* state */].enabled = value;
  }
};

// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = addClasses;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeClasses;
/* harmony export (immutable) */ __webpack_exports__["a"] = replaceClasses;

function convertToArray(value) {
  if (typeof value === 'string') {
    value = value.split(' ');
  }
  return value;
}

function addClasses(el, classes) {
  classes = convertToArray(classes);
  classes.forEach(function (c) {
    el.classList.add(c);
  });
}

function removeClasses(el, classes) {
  classes = convertToArray(classes);
  classes.forEach(function (c) {
    el.classList.remove(c);
  });
}

function replaceClasses(el, newClasses, oldClasses) {
  removeClasses(el, oldClasses);
  addClasses(el, newClasses);
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tooltip.js");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYThjM2Q4NzM4NjUxNDYyZDUwYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3YtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRvb2x0aXAuanNcIiJdLCJuYW1lcyI6WyJzdGF0ZSIsImVuYWJsZWQiLCJwb3NpdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImRlZmF1bHRQbGFjZW1lbnQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0VGVtcGxhdGUiLCJkZWZhdWx0RGVsYXkiLCJkZWZhdWx0VHJpZ2dlciIsImRlZmF1bHRPZmZzZXQiLCJkZWZhdWx0Q29udGFpbmVyIiwiZGVmYXVsdEJvdW5kYXJpZXNFbGVtZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFBvcHBlck9wdGlvbnMiLCJhdXRvSGlkZSIsImRpc3Bvc2VUaW1lb3V0IiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJwbGFjZW1lbnQiLCJkaXJlY3RpdmUiLCJkZWxheSIsInRlbXBsYXRlIiwidHJpZ2dlciIsIm9mZnNldCIsImNvbnRhaW5lciIsImJvdW5kYXJpZXNFbGVtZW50IiwicG9wcGVyT3B0aW9ucyIsImdldFBsYWNlbWVudCIsInZhbHVlIiwibW9kaWZpZXJzIiwiZm9yRWFjaCIsInBvcyIsIlN1cGVyVG9vbHRpcCIsImNsYXNzZXMiLCJlbCIsIl90b29sdGlwTm9kZSIsIm9sZENsYXNzZXMiLCJfb2xkQ2xhc3NlcyIsInJlcGxhY2VDbGFzc2VzIiwiYWRkQ2xhc3NlcyIsInJlbW92ZUNsYXNzZXMiLCJfcGVuZGluZ0NsYXNzZXMiLCJfY2xhc3NlcyIsImNvbnRlbnQiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclNlbGVjdG9yIiwiaW5uZXJIVE1MIiwicG9wcGVySW5zdGFuY2UiLCJ1cGRhdGUiLCJuZWVkUG9wcGVyVXBkYXRlIiwibmVlZFJlc3RhcnQiLCJrZXkiLCJpc09wZW4iLCJfaXNPcGVuIiwiZGlzcG9zZSIsImV2ZW50cyIsInNwbGl0IiwiZmlsdGVyIiwiaW5kZXhPZiIsIl9zZXRFdmVudExpc3RlbmVycyIsInJlZmVyZW5jZSIsInNldENsYXNzZXMiLCJzaG93IiwiYXJncyIsInJlc3VsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9ldmVudHMiLCJmdW5jIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX2Rpc3Bvc2VUaW1lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldENvbnRlbnQiLCJ0eXBlIiwiY3JlYXRlVG9vbHRpcCIsIm9wdHMiLCJodG1sIiwidG9vbHRpcCIsIl90b29sdGlwIiwiX3Z1ZUVsIiwiZGVzdHJveVRvb2x0aXAiLCJiaW5kIiwib2xkVmFsdWUiLCJzZXRDb250ZW50Iiwic2V0T3B0aW9ucyIsInVuYmluZCIsImluc3RhbGwiLCJWdWUiLCJpbnN0YWxsZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ2dG9vbHRpcCIsIlZUb29sdGlwIiwicGx1Z2luIiwiR2xvYmFsVnVlIiwid2luZG93IiwiZ2xvYmFsIiwidXNlIiwiY29udmVydFRvQXJyYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjIiwicmVtb3ZlIiwibmV3Q2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZE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QUFOLENBQVksR0FBWixDQUFSO0FBQ0Q7QUFDRCxTQUFPN0IsS0FBUDtBQUNEOztBQUVNLFNBQVNXLFVBQVQsQ0FBcUJMLEVBQXJCLEVBQXlCRCxPQUF6QixFQUFrQztBQUN2Q0EsWUFBVXNFLGVBQWV0RSxPQUFmLENBQVY7QUFDQUEsVUFBUUgsT0FBUixDQUFnQixhQUFLO0FBQ25CSSxPQUFHc0UsU0FBSCxDQUFhQyxHQUFiLENBQWlCQyxDQUFqQjtBQUNELEdBRkQ7QUFHRDs7QUFFTSxTQUFTbEUsYUFBVCxDQUF3Qk4sRUFBeEIsRUFBNEJELE9BQTVCLEVBQXFDO0FBQzFDQSxZQUFVc0UsZUFBZXRFLE9BQWYsQ0FBVjtBQUNBQSxVQUFRSCxPQUFSLENBQWdCLGFBQUs7QUFDbkJJLE9BQUdzRSxTQUFILENBQWFHLE1BQWIsQ0FBb0JELENBQXBCO0FBQ0QsR0FGRDtBQUdEOztBQUVNLFNBQVNwRSxjQUFULENBQXlCSixFQUF6QixFQUE2QjBFLFVBQTdCLEVBQXlDeEUsVUFBekMsRUFBcUQ7QUFDMURJLGdCQUFjTixFQUFkLEVBQWtCRSxVQUFsQjtBQUNBRyxhQUFXTCxFQUFYLEVBQWUwRSxVQUFmO0FBQ0QsQzs7Ozs7O0FDekJELHVDIiwiZmlsZSI6InYtdG9vbHRpcC5jb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE4YzNkODczODY1MTQ2MmQ1MGJkIiwiaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcC5qcydcblxuaW1wb3J0IHsgYWRkQ2xhc3NlcywgcmVtb3ZlQ2xhc3NlcywgcmVwbGFjZUNsYXNzZXMgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgbGV0IHN0YXRlID0ge1xuICBlbmFibGVkOiB0cnVlLFxufVxuXG5jb25zdCBwb3NpdGlvbnMgPSBbXG4gICd0b3AnLFxuICAndG9wLXN0YXJ0JyxcbiAgJ3RvcC1lbmQnLFxuICAncmlnaHQnLFxuICAncmlnaHQtc3RhcnQnLFxuICAncmlnaHQtZW5kJyxcbiAgJ2JvdHRvbScsXG4gICdib3R0b20tc3RhcnQnLFxuICAnYm90dG9tLWVuZCcsXG4gICdsZWZ0JyxcbiAgJ2xlZnQtc3RhcnQnLFxuICAnbGVmdC1lbmQnLFxuXVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIC8vIERlZmF1bHQgdG9vbHRpcCBwbGFjZW1lbnQgcmVsYXRpdmUgdG8gdGFyZ2V0IGVsZW1lbnRcbiAgZGVmYXVsdFBsYWNlbWVudDogJ3RvcCcsXG4gIC8vIERlZmF1bHQgQ1NTIGNsYXNzZXMgYXBwbGllZCB0byB0aGUgdG9vbHRpcCBlbGVtZW50XG4gIGRlZmF1bHRDbGFzczogJ3Z1ZS10b29sdGlwLXRoZW1lJyxcbiAgLy8gRGVmYXVsdCBIVE1MIHRlbXBsYXRlIG9mIHRoZSB0b29sdGlwIGVsZW1lbnRcbiAgLy8gSXQgbXVzdCBpbmNsdWRlIGB0b29sdGlwYCAmIGB0b29sdGlwLWlubmVyYCBDU1MgY2xhc3Nlc1xuICBkZWZhdWx0VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gIC8vIERlbGF5IChtcylcbiAgZGVmYXVsdERlbGF5OiAwLFxuICAvLyBEZWZhdWx0IGV2ZW50cyB0aGF0IHRyaWdnZXIgdGhlIHRvb2x0aXBcbiAgZGVmYXVsdFRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gIC8vIERlZmF1bHQgcG9zaXRpb24gb2Zmc2V0IChweClcbiAgZGVmYXVsdE9mZnNldDogMCxcbiAgLy8gRGVmYXVsdCBjb250YWluZXIgd2hlcmUgdGhlIHRvb2x0aXAgd2lsbCBiZSBhcHBlbmRlZFxuICBkZWZhdWx0Q29udGFpbmVyOiAnYm9keScsXG4gIGRlZmF1bHRCb3VuZGFyaWVzRWxlbWVudDogdW5kZWZpbmVkLFxuICBkZWZhdWx0UG9wcGVyT3B0aW9uczoge30sXG4gIGF1dG9IaWRlOiB0cnVlLFxuICAvLyBBdXRvIGRlc3Ryb3kgdG9vbHRpcCBET00gbm9kZXMgKG1zKVxuICBkaXNwb3NlVGltZW91dDogNTAwMCxcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9ucyAob3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIHBsYWNlbWVudDogb3B0aW9ucy5wbGFjZW1lbnQgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFBsYWNlbWVudCxcbiAgICBkZWxheTogb3B0aW9ucy5kZWxheSB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0RGVsYXksXG4gICAgdGVtcGxhdGU6IG9wdGlvbnMudGVtcGxhdGUgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFRlbXBsYXRlLFxuICAgIHRyaWdnZXI6IG9wdGlvbnMudHJpZ2dlciB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0VHJpZ2dlcixcbiAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRPZmZzZXQsXG4gICAgY29udGFpbmVyOiBvcHRpb25zLmNvbnRhaW5lciB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q29udGFpbmVyLFxuICAgIGJvdW5kYXJpZXNFbGVtZW50OiBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50IHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRCb3VuZGFyaWVzRWxlbWVudCxcbiAgICBwb3BwZXJPcHRpb25zOiBvcHRpb25zLnBvcHBlck9wdGlvbnMgfHwgZGlyZWN0aXZlLm9wdGlvbnMuZGVmYXVsdFBvcHBlck9wdGlvbnMsXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50ICh2YWx1ZSwgbW9kaWZpZXJzKSB7XG4gIGxldCBwbGFjZW1lbnQgPSB2YWx1ZS5wbGFjZW1lbnRcbiAgcG9zaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKHBvcykge1xuICAgIGlmIChtb2RpZmllcnNbcG9zXSkge1xuICAgICAgcGxhY2VtZW50ID0gcG9zXG4gICAgfVxuICB9KVxuICByZXR1cm4gcGxhY2VtZW50XG59XG5cbmNsYXNzIFN1cGVyVG9vbHRpcCBleHRlbmRzIFRvb2x0aXAge1xuICBzZXRDbGFzc2VzIChjbGFzc2VzKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZVxuXG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBvbGRDbGFzc2VzID0gdGhpcy5fb2xkQ2xhc3Nlc1xuICAgICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgICAgaWYgKG9sZENsYXNzZXMpIHtcbiAgICAgICAgICByZXBsYWNlQ2xhc3NlcyhlbCwgY2xhc3Nlcywgb2xkQ2xhc3NlcylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDbGFzc2VzKGVsLCBjbGFzc2VzKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9sZENsYXNzZXMpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3NlcyhlbCwgb2xkQ2xhc3NlcylcbiAgICAgIH1cbiAgICAgIHRoaXMuX29sZENsYXNzZXMgPSBjbGFzc2VzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gY2xhc3Nlc1xuICAgIH1cblxuICAgIHRoaXMuX2NsYXNzZXMgPSBjbGFzc2VzXG4gIH1cblxuICBzZXRDb250ZW50IChjb250ZW50KSB7XG4gICAgdGhpcy5vcHRpb25zLnRpdGxlID0gY29udGVudFxuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl90b29sdGlwTm9kZS5xdWVyeVNlbGVjdG9yKHRoaXMuaW5uZXJTZWxlY3RvcilcblxuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gY29udGVudFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zKVxuXG4gICAgbGV0IG5lZWRQb3BwZXJVcGRhdGUgPSBmYWxzZVxuICAgIGxldCBuZWVkUmVzdGFydCA9IGZhbHNlXG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ICE9PSBvcHRpb25zLm9mZnNldCB8fFxuICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudCAhPT0gb3B0aW9ucy5wbGFjZW1lbnRcbiAgICApIHtcbiAgICAgIG5lZWRQb3BwZXJVcGRhdGUgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLnRlbXBsYXRlICE9PSBvcHRpb25zLnRlbXBsYXRlIHx8XG4gICAgICB0aGlzLm9wdGlvbnMudHJpZ2dlciAhPT0gb3B0aW9ucy50cmlnZ2VyIHx8XG4gICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyICE9PSBvcHRpb25zLmNvbnRhaW5lclxuICAgICkge1xuICAgICAgbmVlZFJlc3RhcnQgPSB0cnVlXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdG9vbHRpcE5vZGUpIHtcbiAgICAgIGlmIChuZWVkUmVzdGFydCkge1xuICAgICAgICBjb25zdCBpc09wZW4gPSB0aGlzLl9pc09wZW5cblxuICAgICAgICB0aGlzLmRpc3Bvc2UoKVxuXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHR5cGVvZiB0aGlzLm9wdGlvbnMudHJpZ2dlciA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IG9wdGlvbnMudHJpZ2dlclxuICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIHRyaWdnZXIgPT4gWydjbGljaycsICdob3ZlcicsICdmb2N1cyddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBbXVxuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgZXZlbnRzLCB0aGlzLm9wdGlvbnMpXG5cbiAgICAgICAgdGhpcy5zZXRDbGFzc2VzKHRoaXMuX2NsYXNzZXMpXG5cbiAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgIHRoaXMuc2hvdygpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobmVlZFBvcHBlclVwZGF0ZSkge1xuICAgICAgICB0aGlzLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZSAoLi4uYXJncykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9jcmVhdGUoLi4uYXJncylcblxuICAgIGlmIChkZWZhdWx0T3B0aW9ucy5hdXRvSGlkZSAmJiB0aGlzLm9wdGlvbnMudHJpZ2dlci5pbmRleE9mKCdob3ZlcicpICE9PSAtMSkge1xuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhpZGUpXG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgX2Rpc3Bvc2UgKCkge1xuICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGlkZSlcbiAgICAgIHRoaXMuX3Rvb2x0aXBOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlKVxuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKCh7IGZ1bmMsIGV2ZW50IH0pID0+IHtcbiAgICAgIHRoaXMucmVmZXJlbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMpXG4gICAgfSlcbiAgICB0aGlzLl9ldmVudHMgPSBbXVxuICAgIHJldHVybiBzdXBlci5fZGlzcG9zZSgpXG4gIH1cblxuICBfc2hvdyAoLi4uYXJncykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9zaG93KC4uLmFyZ3MpXG5cbiAgICBpZiAodGhpcy5fcGVuZGluZ0NsYXNzZXMpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3Nlcyh0aGlzLl9wZW5kaW5nQ2xhc3NlcylcbiAgICAgIHRoaXMuX3BlbmRpbmdDbGFzc2VzID0gbnVsbFxuICAgIH1cblxuICAgIC8vIEZpeCBwb3NpdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKVxuICAgIH0sIDApXG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzcG9zZVRpbWVyKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgX2hpZGUgKC4uLmFyZ3MpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5faGlkZSguLi5hcmdzKVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc3Bvc2VUaW1lcilcbiAgICB0aGlzLl9kaXNwb3NlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl90b29sdGlwTm9kZSkge1xuICAgICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oaWRlKVxuICAgICAgICB0aGlzLl90b29sdGlwTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSlcbiAgICAgICAgdGhpcy5fdG9vbHRpcE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl90b29sdGlwTm9kZSlcbiAgICAgICAgdGhpcy5fdG9vbHRpcE5vZGUgPSBudWxsXG4gICAgICB9XG4gICAgfSwgZGVmYXVsdE9wdGlvbnMuZGlzcG9zZVRpbWVvdXQpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGVudCAodmFsdWUpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZVxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB2YWx1ZS5jb250ZW50XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9vbHRpcCAoZWwsIHZhbHVlLCBtb2RpZmllcnMpIHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQodmFsdWUpXG4gIGxldCBjbGFzc2VzID0gdmFsdWUuY2xhc3NlcyB8fCBkaXJlY3RpdmUub3B0aW9ucy5kZWZhdWx0Q2xhc3NcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICB0aXRsZTogY29udGVudCxcbiAgICBodG1sOiB0cnVlLFxuICAgIC4uLmdldE9wdGlvbnMoe1xuICAgICAgLi4udmFsdWUsXG4gICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcbiAgICB9KSxcbiAgfVxuICBjb25zdCB0b29sdGlwID0gZWwuX3Rvb2x0aXAgPSBuZXcgU3VwZXJUb29sdGlwKGVsLCBvcHRzKVxuICB0b29sdGlwLnNldENsYXNzZXMoY2xhc3NlcylcbiAgdG9vbHRpcC5fdnVlRWwgPSBlbFxufVxuXG5mdW5jdGlvbiBkZXN0cm95VG9vbHRpcCAoZWwpIHtcbiAgaWYgKGVsLl90b29sdGlwKSB7XG4gICAgZWwuX3Rvb2x0aXAuZGlzcG9zZSgpXG4gICAgZGVsZXRlIGVsLl90b29sdGlwXG4gIH1cbn1cblxuY29uc3QgZGlyZWN0aXZlID0ge1xuICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcbiAgYmluZCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQodmFsdWUpXG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gICAgaWYgKGNvbnRlbnQgJiYgc3RhdGUuZW5hYmxlZCkge1xuICAgICAgY3JlYXRlVG9vbHRpcChlbCwgdmFsdWUsIG1vZGlmaWVycylcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZSAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlLCBtb2RpZmllcnMgfSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KHZhbHVlKVxuICAgIGlmICghY29udGVudCB8fCAhc3RhdGUuZW5hYmxlZCkge1xuICAgICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gICAgfSBlbHNlIGlmIChlbC5fdG9vbHRpcCkge1xuICAgICAgY29uc3QgdG9vbHRpcCA9IGVsLl90b29sdGlwXG4gICAgICAvLyBDb250ZW50XG4gICAgICB0b29sdGlwLnNldENvbnRlbnQoY29udGVudClcbiAgICAgIC8vIENTUyBDbGFzc2VzXG4gICAgICB0b29sdGlwLnNldENsYXNzZXMoKHZhbHVlICYmIHZhbHVlLmNsYXNzZXMpIHx8IGRpcmVjdGl2ZS5vcHRpb25zLmRlZmF1bHRDbGFzcylcbiAgICAgIC8vIE9wdGlvbnNcbiAgICAgIHRvb2x0aXAuc2V0T3B0aW9ucyh7XG4gICAgICAgIC4uLnZhbHVlLFxuICAgICAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCh2YWx1ZSwgbW9kaWZpZXJzKSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVRvb2x0aXAoZWwsIHZhbHVlLCBtb2RpZmllcnMpXG4gICAgfVxuICB9LFxuICB1bmJpbmQgKGVsKSB7XG4gICAgZGVzdHJveVRvb2x0aXAoZWwpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3YtdG9vbHRpcC5qcyIsImltcG9ydCB2dG9vbHRpcCwgeyBkZWZhdWx0T3B0aW9ucywgc3RhdGUgfSBmcm9tICcuL3YtdG9vbHRpcCdcblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHJldHVyblxuICBpbnN0YWxsLmluc3RhbGxlZCA9IHRydWVcblxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pXG4gIHZ0b29sdGlwLm9wdGlvbnMgPSBvcHRpb25zXG4gIFZ1ZS5kaXJlY3RpdmUoJ3Rvb2x0aXAnLCB2dG9vbHRpcClcbn1cblxuZXhwb3J0IGNvbnN0IFZUb29sdGlwID0gdnRvb2x0aXBcblxuY29uc3QgcGx1Z2luID0ge1xuICBpbnN0YWxsLFxuXG4gIGdldCBlbmFibGVkICgpIHtcbiAgICByZXR1cm4gc3RhdGUuZW5hYmxlZFxuICB9LFxuXG4gIHNldCBlbmFibGVkICh2YWx1ZSkge1xuICAgIHN0YXRlLmVuYWJsZWQgPSB2YWx1ZVxuICB9LFxufVxuXG4vLyBBdXRvLWluc3RhbGxcbmxldCBHbG9iYWxWdWUgPSBudWxsXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgR2xvYmFsVnVlID0gd2luZG93LlZ1ZVxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSBnbG9iYWwuVnVlXG59XG5pZiAoR2xvYmFsVnVlKSB7XG4gIEdsb2JhbFZ1ZS51c2UocGx1Z2luKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIlxuZnVuY3Rpb24gY29udmVydFRvQXJyYXkgKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc2VzIChlbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzID0gY29udmVydFRvQXJyYXkoY2xhc3NlcylcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoYylcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMgKGVsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMgPSBjb252ZXJ0VG9BcnJheShjbGFzc2VzKVxuICBjbGFzc2VzLmZvckVhY2goYyA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNsYXNzZXMgKGVsLCBuZXdDbGFzc2VzLCBvbGRDbGFzc2VzKSB7XG4gIHJlbW92ZUNsYXNzZXMoZWwsIG9sZENsYXNzZXMpXG4gIGFkZENsYXNzZXMoZWwsIG5ld0NsYXNzZXMpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0b29sdGlwLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidG9vbHRpcC5qc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=