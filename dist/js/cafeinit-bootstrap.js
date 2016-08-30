(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cafeinit-vue"] = factory();
	else
		root["cafeinit-vue"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(1);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _components; /**
	                  * @fileOverview main for bootstrap
	                  * @author: burning <www.cafeinit.com>
	                  * @date: 2016-08-30
	                  */

	var _CIBlock = __webpack_require__(20);

	var _CIBlock2 = _interopRequireDefault(_CIBlock);

	var _CIBlockBody = __webpack_require__(23);

	var _CIBlockBody2 = _interopRequireDefault(_CIBlockBody);

	var _CIBlockFooter = __webpack_require__(26);

	var _CIBlockFooter2 = _interopRequireDefault(_CIBlockFooter);

	var _CIBlockHeader = __webpack_require__(29);

	var _CIBlockHeader2 = _interopRequireDefault(_CIBlockHeader);

	var _CIButtonBootstrap = __webpack_require__(87);

	var _CIButtonBootstrap2 = _interopRequireDefault(_CIButtonBootstrap);

	var _CILinkButtonBootstrap = __webpack_require__(90);

	var _CILinkButtonBootstrap2 = _interopRequireDefault(_CILinkButtonBootstrap);

	var _CICheckbox = __webpack_require__(38);

	var _CICheckbox2 = _interopRequireDefault(_CICheckbox);

	var _CIInput = __webpack_require__(41);

	var _CIInput2 = _interopRequireDefault(_CIInput);

	var _CIRadio = __webpack_require__(44);

	var _CIRadio2 = _interopRequireDefault(_CIRadio);

	var _CISelect = __webpack_require__(47);

	var _CISelect2 = _interopRequireDefault(_CISelect);

	var _CIList = __webpack_require__(50);

	var _CIList2 = _interopRequireDefault(_CIList);

	var _CIListCell = __webpack_require__(53);

	var _CIListCell2 = _interopRequireDefault(_CIListCell);

	var _CIListCheckbox = __webpack_require__(56);

	var _CIListCheckbox2 = _interopRequireDefault(_CIListCheckbox);

	var _CIListRadio = __webpack_require__(59);

	var _CIListRadio2 = _interopRequireDefault(_CIListRadio);

	var _CILoading = __webpack_require__(62);

	var _CILoading2 = _interopRequireDefault(_CILoading);

	var _CIGrid = __webpack_require__(65);

	var _CIGrid2 = _interopRequireDefault(_CIGrid);

	var _CIGridCell = __webpack_require__(68);

	var _CIGridCell2 = _interopRequireDefault(_CIGridCell);

	var _CIModalBootstrap = __webpack_require__(93);

	var _CIModalBootstrap2 = _interopRequireDefault(_CIModalBootstrap);

	var _CIActions = __webpack_require__(74);

	var _CIActions2 = _interopRequireDefault(_CIActions);

	var _CIAlertBootstrap = __webpack_require__(100);

	var _CIAlertBootstrap2 = _interopRequireDefault(_CIAlertBootstrap);

	var _CIConfirm = __webpack_require__(80);

	var _CIConfirm2 = _interopRequireDefault(_CIConfirm);

	var _CITabBar = __webpack_require__(83);

	var _CITabBar2 = _interopRequireDefault(_CITabBar);

	var _CIScrollHelper = __webpack_require__(86);

	var _CIScrollHelper2 = _interopRequireDefault(_CIScrollHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components2 = (_components = {
	  'ci-block': _CIBlock2.default,
	  'ci-block-body': _CIBlockBody2.default,
	  'ci-block-footer': _CIBlockFooter2.default,
	  'ci-block-header': _CIBlockHeader2.default,

	  'ci-button': _CIButtonBootstrap2.default,
	  'ci-link-button': _CILinkButtonBootstrap2.default,

	  'ci-checkbox': _CICheckbox2.default,
	  'ci-input': _CIInput2.default,
	  'ci-radio': _CIRadio2.default,
	  'ci-select': _CISelect2.default,

	  'ci-list': _CIList2.default,
	  'ci-list-cell': _CIListCell2.default,
	  'ci-list-checkbox': _CIListCheckbox2.default,
	  'ci-list-radio': _CIListRadio2.default,

	  'ci-loading': _CILoading2.default,

	  'ci-modal': _CIModalBootstrap2.default,
	  'ci-actions': _CIActions2.default,
	  'ci-alert': _CIAlertBootstrap2.default,
	  'ci-confirm': _CIConfirm2.default

	}, (0, _defineProperty3.default)(_components, 'ci-loading', _CILoading2.default), (0, _defineProperty3.default)(_components, 'ci-grid', _CIGrid2.default), (0, _defineProperty3.default)(_components, 'ci-grid-cell', _CIGridCell2.default), (0, _defineProperty3.default)(_components, 'ci-tab-bar', _CITabBar2.default), _components);

	// export default function (Vue) {
	//   for (name in components) {
	//     Vue.component(name, components[name]);
	//   }
	// }


	exports.default = {
	  components: function components(Vue) {
	    for (name in _components2) {
	      Vue.component(name, _components2[name]);
	    }
	  },

	  utils: {
	    CIScrollHelper: _CIScrollHelper2.default
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(2);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	var $Object = __webpack_require__(7).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(15), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , ctx       = __webpack_require__(8)
	  , hide      = __webpack_require__(10)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(9);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(19);
	module.exports = __webpack_require__(15) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(18)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function(){
	  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIBlock/CIBlock.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIBlock.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-block">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	//
	// <script>

	exports.default = {}
	// ...


	// </script>
	;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-block\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIBlock/CIBlockBody.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIBlockBody.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-block-bd">
	//     <slot>Block Body</slot>
	//   </div>
	// </template>
	//
	//
	// <script>

	exports.default = {}
	// ...


	// </script>
	;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-block-bd\">\n  <slot>Block Body</slot>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIBlock/CIBlockFooter.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIBlockFooter.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-block-ft">
	//     <slot>Block Footer</slot>
	//   </div>
	// </template>
	//
	//
	// <script>

	exports.default = {}
	// ...


	// </script>
	;

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-block-ft\">\n  <slot>Block Footer</slot>\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIBlock/CIBlockHeader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIBlockHeader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-block-hd">
	//     <slot><h3>{{title}}</h3></slot>
	//   </div>
	// </template>
	//
	//
	// <script>

	exports.default = {
	  props: {
	    title: {
	      type: String,
	      default: 'Block Title'
	    }
	  }
	};

	// </script>

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-block-hd\">\n  <slot><h3>{{title}}</h3></slot>\n</div>\n";

/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(39)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIForm/CICheckbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(40)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CICheckbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-form-group">
	//     <label class="ci-label" v-if="title"
	//       v-bind:style="{width: titleWidth}">{{title}}</label>
	//     <div class="ci-form-control">
	//       <label v-for="item in items">
	//         <input type="checkbox"
	//           v-bind:name="name"
	//           v-bind:value="item.value"
	//           v-model="model" /> {{item.title}}
	//       </label>
	//     </div>
	//   </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    model: {
	      type: Array,
	      twoWay: true,
	      default: [],
	      required: false
	    },

	    title: {
	      type: String,
	      default: ''
	    },

	    titleWidth: {
	      type: String,
	      default: ''
	    },

	    name: {
	      type: String,
	      required: true
	    },

	    items: {
	      type: Array,
	      required: true
	    }
	  }
	};
	// </script>

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-form-group\">\n  <label class=\"ci-label\" v-if=\"title\"\n    v-bind:style=\"{width: titleWidth}\">{{title}}</label>\n  <div class=\"ci-form-control\">\n    <label v-for=\"item in items\">\n      <input type=\"checkbox\"\n        v-bind:name=\"name\"\n        v-bind:value=\"item.value\"\n        v-model=\"model\" /> {{item.title}}\n    </label>\n  </div>\n</div>\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(42)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIForm/CIInput.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(43)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIInput.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-form-group">
	//     <label class="ci-label" v-if="title"
	//       v-bind:style="{width: titleWidth}">{{title}}</label>
	//     <input class="ci-form-control"
	//       v-model="model"
	//       v-bind:type="type"
	//       v-bind:name="name"
	//       v-bind:placeholder="placeholder"
	//       v-bind:disabled="disabled" />
	//   </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    model: {
	      type: String,
	      twoWay: true,
	      default: '',
	      required: false
	    },

	    title: {
	      type: String,
	      default: ''
	    },

	    titleWidth: {
	      type: String,
	      default: ''
	    },

	    type: {
	      type: String,
	      default: 'text'
	    },

	    name: {
	      type: String,
	      required: true
	    },

	    placeholder: {
	      type: String
	    },

	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  }
	};
	// </script>

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-form-group\">\n  <label class=\"ci-label\" v-if=\"title\"\n    v-bind:style=\"{width: titleWidth}\">{{title}}</label>\n  <input class=\"ci-form-control\"\n    v-model=\"model\"\n    v-bind:type=\"type\"\n    v-bind:name=\"name\"\n    v-bind:placeholder=\"placeholder\"\n    v-bind:disabled=\"disabled\" />\n</div>\n";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(45)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIForm/CIRadio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIRadio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-form-group">
	//     <label class="ci-label" v-if="title"
	//       v-bind:style="{width: titleWidth}">{{title}}</label>
	//     <div class="ci-form-control">
	//       <label v-for="item in items">
	//         <input type="radio"
	//           v-bind:name="name"
	//           v-bind:value="item.value"
	//           v-model="model" /> {{item.title}}
	//       </label>
	//     </div>
	//   </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    model: {
	      type: String,
	      twoWay: true,
	      default: '',
	      required: false
	    },

	    title: {
	      type: String,
	      default: ''
	    },

	    titleWidth: {
	      type: String,
	      default: ''
	    },

	    name: {
	      type: String,
	      required: true
	    },

	    items: {
	      type: Array,
	      required: true
	    }
	  }
	};
	// </script>

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-form-group\">\n  <label class=\"ci-label\" v-if=\"title\"\n    v-bind:style=\"{width: titleWidth}\">{{title}}</label>\n  <div class=\"ci-form-control\">\n    <label v-for=\"item in items\">\n      <input type=\"radio\"\n        v-bind:name=\"name\"\n        v-bind:value=\"item.value\"\n        v-model=\"model\" /> {{item.title}}\n    </label>\n  </div>\n</div>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(48)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIForm/CISelect.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CISelect.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-form-group">
	//     <label class="ci-label" v-if="title"
	//       v-bind:style="{width: titleWidth}">{{title}}</label>
	//     <select class="ci-form-control" name="{{name}}" v-model="model">
	//       <option value="{{item.value}}" v-for="item in items">{{item.title}}</option>
	//     </select>
	//   </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    model: {
	      type: String,
	      twoWay: true,
	      default: '',
	      required: false
	    },

	    title: {
	      type: String,
	      default: ''
	    },

	    titleWidth: {
	      type: String,
	      default: ''
	    },

	    name: {
	      type: String,
	      required: true
	    },

	    items: {
	      type: Array,
	      required: true
	    }
	  }
	};
	// </script>

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-form-group\">\n  <label class=\"ci-label\" v-if=\"title\"\n    v-bind:style=\"{width: titleWidth}\">{{title}}</label>\n  <select class=\"ci-form-control\" name=\"{{name}}\" v-model=\"model\">\n    <option value=\"{{item.value}}\" v-for=\"item in items\">{{item.title}}</option>\n  </select>\n</div>\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(51)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIList/CIList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(52)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <ul class="ci-list">
	//     <slot></slot>
	//   </ul>
	// </template>
	//
	//
	// <script>
	exports.default = {}
	// ...

	// </script>
	;

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"ci-list\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(54)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIList/CIListCell.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIListCell.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <li class="ci-list-cell">
	//     <div class="ci-list-cell-body">
	//       <slot></slot>
	//     </div>
	//     <div class="ci-list-cell-accessory" v-if="accessory">
	//       <i class="fa fa-{{accessoryIcon}}"></i>
	//     </div>
	//   </li>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    accessory: {
	      type: String,
	      default: ''
	    }
	  },

	  computed: {
	    accessoryIcon: function accessoryIcon() {
	      var icon = '';

	      switch (this.accessory) {
	        case 'link':
	          icon = 'chevron-right';
	          break;

	        case 'detail':
	          icon = 'info-circle';
	          break;

	        case 'check':
	          icon = 'check';
	          break;

	        default:
	          icon = '';
	      }

	      return icon;
	    }
	  },

	  ready: function ready() {
	    //
	  }
	};
	// </script>

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"ci-list-cell\">\n  <div class=\"ci-list-cell-body\">\n    <slot></slot>\n  </div>\n  <div class=\"ci-list-cell-accessory\" v-if=\"accessory\">\n    <i class=\"fa fa-{{accessoryIcon}}\"></i>\n  </div>\n</li>\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(57)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIList/CIListCheckbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(58)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIListCheckbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-list-hd" v-if="title">{{title}}</div>
	//   <ul class="ci-list ci-list-checkbox">
	//     <ci-list-cell v-for="item in items">
	//       <div class="ci-form-group">
	//         <label class="ci-form-control">
	//           <input class="ci-checkbox" type="checkbox"
	//             v-bind:name="name"
	//             v-bind:value="item.value"
	//             v-model="model" /> {{item.title}}
	//         </label>
	//       </div>
	//     </ci-list-cell>
	//   </ul>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    model: {
	      type: Array,
	      twoWay: true,
	      default: [],
	      required: false
	    },

	    title: {
	      type: String,
	      default: ''
	    },

	    name: {
	      type: String,
	      required: true
	    },

	    items: {
	      type: Array,
	      required: true
	    }
	  }
	};
	// </script>

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-list-hd\" v-if=\"title\">{{title}}</div>\n<ul class=\"ci-list ci-list-checkbox\">\n  <ci-list-cell v-for=\"item in items\">\n    <div class=\"ci-form-group\">\n      <label class=\"ci-form-control\">\n        <input class=\"ci-checkbox\" type=\"checkbox\"\n          v-bind:name=\"name\"\n          v-bind:value=\"item.value\"\n          v-model=\"model\" /> {{item.title}}\n      </label>\n    </div>\n  </ci-list-cell>\n</ul>\n";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(60)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIList/CIListRadio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(61)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIListRadio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-list-hd" v-if="title">{{title}}</div>
	//   <ul class="ci-list ci-list-radio">
	//     <ci-list-cell v-for="item in items">
	//       <div class="ci-form-group">
	//         <label class="ci-form-control">
	//           {{item.title}}
	//           <input class="ci-radio" type="radio"
	//             v-bind:name="name"
	//             v-bind:value="item.value"
	//             v-model="model" />
	//         </label>
	//       </div>
	//     </ci-list-cell>
	//   </ul>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    model: {
	      type: String,
	      twoWay: true,
	      default: '',
	      required: false
	    },

	    title: {
	      type: String,
	      default: ''
	    },

	    name: {
	      type: String,
	      required: true
	    },

	    items: {
	      type: Array,
	      required: true
	    }
	  }
	};
	// </script>

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-list-hd\" v-if=\"title\">{{title}}</div>\n<ul class=\"ci-list ci-list-radio\">\n  <ci-list-cell v-for=\"item in items\">\n    <div class=\"ci-form-group\">\n      <label class=\"ci-form-control\">\n        {{item.title}}\n        <input class=\"ci-radio\" type=\"radio\"\n          v-bind:name=\"name\"\n          v-bind:value=\"item.value\"\n          v-model=\"model\" />\n      </label>\n    </div>\n  </ci-list-cell>\n</ul>\n";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(63)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CILoading/CILoading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(64)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CILoading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-loading">
	//     <i class="fa fa-spinner ci-icon-spin"></i>
	//   </div>
	// </template>
	//
	//
	// <script>
	exports.default = {}
	// ...

	// </script>
	;

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-loading\">\n  <i class=\"fa fa-spinner ci-icon-spin\"></i>\n</div>\n";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(66)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIGrid/CIGrid.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(67)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIGrid.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <ul class="ci-grid">
	//     <slot></slot>
	//   </ul>
	// </template>
	//
	//
	// <script>
	exports.default = {}
	// ...

	// </script>
	;

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"ci-grid\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(69)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIGrid/CIGridCell.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(70)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIGridCell.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <li class="ci-grid-cell">
	//     <slot></slot>
	//   </li>
	// </template>
	//
	//
	// <script>
	exports.default = {}
	// ...

	// </script>
	;

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"ci-grid-cell\">\n  <slot></slot>\n</li>\n";

/***/ },
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(75)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIModal/CIActions.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(76)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIActions.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div v-show="isShow">
	//     <div class="am-modal-actions am-modal-active">
	//       <div class="am-modal-actions-group">
	//         <ul class="am-list">
	//           <li v-for="(index, item) in items"
	//             v-bind:class="[item.className, {'ci-selected': selectedIndex == index}]"
	//             v-on:click="clickItem(index, item)">
	//             <a v-if="item.path" v-link="{path: item.path}">{{item.text}}</a>
	//             <a v-else href="javascritp:;">{{item.text}}</a>
	//           </li>
	//         </ul>
	//       </div>
	//
	//       <div class="am-modal-actions-group">
	//         <button class="am-btn am-btn-secondary am-btn-block"
	//           v-on:click="close">{{cancelText}}</button>
	//       </div>
	//     </div>
	//
	//     <div class="am-dimmer"
	//       v-bind:class="{'am-active': isShow}"
	//       v-on:click="closeViaDimmer"></div>
	//   </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    isShow: {
	      type: Boolean,
	      default: false,
	      twoWay: true
	    },

	    isCloseViaDimmer: { // 是否通过点击遮罩层关闭模态框，默认为true
	      type: Boolean,
	      default: true
	    },

	    cancelText: {
	      type: String,
	      default: '取消'
	    },

	    items: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },

	    selectedIndex: {
	      type: Number,
	      default: 0
	    }
	  },

	  transitions: {
	    'modal-fade': {
	      beforeEnter: function beforeEnter(el) {
	        // ...
	      },
	      enter: function enter(el) {
	        // ...
	      },
	      afterEnter: function afterEnter(el) {
	        // ...
	      },
	      enterCancelled: function enterCancelled(el) {
	        // ...
	      },


	      beforeLeave: function beforeLeave(el) {
	        // ...
	      },

	      leave: function leave(el) {
	        // ...
	      },

	      afterLeave: function afterLeave(el) {
	        // ...
	      },

	      leaveCancelled: function leaveCancelled(el) {
	        // ...
	      }
	    }
	  },

	  ready: function ready() {
	    // ...
	  },


	  methods: {
	    show: function show() {
	      this.isShow = true;
	    },
	    close: function close() {
	      this.isShow = false;
	    },
	    closeViaDimmer: function closeViaDimmer() {
	      if (this.isCloseViaDimmer) {
	        this.isShow = false;
	      }
	    },
	    clickItem: function clickItem(index, item) {
	      this.selectedIndex = index;
	      this.isShow = false;
	      this.$dispatch('item-click', index, item);
	    }
	  }
	};
	// </script>

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"isShow\">\n  <div class=\"am-modal-actions am-modal-active\">\n    <div class=\"am-modal-actions-group\">\n      <ul class=\"am-list\">\n        <li v-for=\"(index, item) in items\"\n          v-bind:class=\"[item.className, {'ci-selected': selectedIndex == index}]\"\n          v-on:click=\"clickItem(index, item)\">\n          <a v-if=\"item.path\" v-link=\"{path: item.path}\">{{item.text}}</a>\n          <a v-else href=\"javascritp:;\">{{item.text}}</a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"am-modal-actions-group\">\n      <button class=\"am-btn am-btn-secondary am-btn-block\"\n        v-on:click=\"close\">{{cancelText}}</button>\n    </div>\n  </div>\n\n  <div class=\"am-dimmer\"\n    v-bind:class=\"{'am-active': isShow}\"\n    v-on:click=\"closeViaDimmer\"></div>\n</div>\n";

/***/ },
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(81)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIModal/CIConfirm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(82)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIConfirm.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <ci-modal v-bind:is-show.sync="isShow" v-bind:is-close-via-dimmer="false">
	//     <div class="am-modal-hd" slot="header" v-if="title">{{title}}</div>
	//     <div class="am-modal-bd" slot="body"><slot>Are you sure ?</slot></div>
	//     <div class="am-modal-footer" slot="footer">
	//       <span class="am-modal-btn" v-on:click="cancel">{{concelText}}</span>
	//       <span class="am-modal-btn" v-on:click="ok">{{okText}}</span>
	//     </div>
	//   </ci-modal>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    isShow: {
	      type: Boolean,
	      default: false,
	      twoWay: true
	    },

	    title: {
	      type: String,
	      default: ''
	    },

	    okText: {
	      type: String,
	      default: '确认'
	    },

	    concelText: {
	      type: String,
	      default: '取消'
	    }
	  },

	  ready: function ready() {
	    // ...
	  },


	  methods: {
	    show: function show() {
	      this.isShow = true;
	    },
	    hide: function hide() {
	      this.isShow = false;
	    },
	    ok: function ok() {
	      this.hide();
	      this.$dispatch('ok');
	    },
	    cancel: function cancel() {
	      this.hide();
	      this.$dispatch('cancel');
	    }
	  }
	};
	// </script>

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\n<ci-modal v-bind:is-show.sync=\"isShow\" v-bind:is-close-via-dimmer=\"false\">\n  <div class=\"am-modal-hd\" slot=\"header\" v-if=\"title\">{{title}}</div>\n  <div class=\"am-modal-bd\" slot=\"body\"><slot>Are you sure ?</slot></div>\n  <div class=\"am-modal-footer\" slot=\"footer\">\n    <span class=\"am-modal-btn\" v-on:click=\"cancel\">{{concelText}}</span>\n    <span class=\"am-modal-btn\" v-on:click=\"ok\">{{okText}}</span>\n  </div>\n</ci-modal>\n";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(84)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CITabView/CITabBar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(85)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CITabBar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ci-tab-bar">
	//     <ul class="ci-tab-bar-items">
	//       <li class="ci-tab-bar-item" v-for="(index, item) in items"
	//         v-bind:class="[item.className, {'ci-selected': selectedIndex == index}]"
	//         v-on:click="clickItem(index, item)">
	//         <a v-if="item.path" v-link="{path: item.path}">{{item.text}}</a>
	//         <a v-else href="javascritp:;">{{item.text}}</a>
	//       </li>
	//     </ul>
	//   </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    items: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },

	    selectedIndex: {
	      type: Number,
	      default: 0
	    }
	  },

	  ready: function ready() {
	    // ...
	  },


	  methods: {
	    clickItem: function clickItem(index, item) {
	      this.selectedIndex = index;
	      this.$dispatch('item-click', index, item);
	    }
	  }
	};
	// </script>

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-tab-bar\">\n  <ul class=\"ci-tab-bar-items\">\n    <li class=\"ci-tab-bar-item\" v-for=\"(index, item) in items\"\n      v-bind:class=\"[item.className, {'ci-selected': selectedIndex == index}]\"\n      v-on:click=\"clickItem(index, item)\">\n      <a v-if=\"item.path\" v-link=\"{path: item.path}\">{{item.text}}</a>\n      <a v-else href=\"javascritp:;\">{{item.text}}</a>\n    </li>\n  </ul>\n</div>\n";

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @fileOverview CIScrollHelper
	 * @author: burning <www.cafeinit.com>
	 * @date: 2016-08-22
	 */

	function CIScrollHelper(opt) {
	  this.lastContentHeight = 0; // 最近一次滑动内容的高度
	  this.willScrollToEnd = false; // 是否即将滑动到底部
	  this.lead = 100; // 相差底部多少时触发事件
	  this.init(opt);
	}

	module.exports = CIScrollHelper;

	var prototype = CIScrollHelper.prototype;

	prototype.init = function (opt) {
	  opt = opt || {};
	  this.$container = opt.container;
	  this.$content = opt.content;
	  this.lead = opt.lead || this.lead;
	  this.willScrollToEndHandler = opt.willScrollToEndHandler;

	  this._bindEvent();
	};

	prototype._bindEvent = function () {
	  var that = this;

	  that.$container.on('scroll', function (evt) {
	    that.scrollTop = that.$container.scrollTop();
	    that.containerHeight = that.$container.height();
	    that.contentHeight = that.$content.height();

	    var delta = that.contentHeight - that.scrollTop - that.containerHeight;
	    console.log('CIScrollHelper.scroll', that.scrollTop, delta);
	    if (that.lastContentHeight != that.contentHeight) {
	      that.lastContentHeight = that.contentHeight;
	      that.willScrollToEnd = false;
	    }

	    if (delta <= that.lead) {
	      // console.log('willEnd', this.willEnd);
	      if (!that.willScrollToEnd && typeof that.willScrollToEndHandler === 'function') {
	        that.willScrollToEnd = true;
	        that.willScrollToEndHandler();
	      }
	    }
	  });
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(88)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIButton/CIButtonBootstrap.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(89)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIButtonBootstrap.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <button class="btn" type="{{type}}"
	//     v-bind:class="[
	//       'btn-' + style,
	//       size ? ('btn-' + size) : '',
	//       radius ? 'radius' : '',
	//       round ? 'round' : '',
	//       (status === 'actived') ? 'active' :'',
	//       block ? 'btn-block' : ''
	//     ]"
	//     v-bind:disabled="status === 'disabled' || status === 'loading'">
	//     <span class="icon-circle-o-notch icon-spin" v-if="status === 'loading'"></span>
	//     <slot>This is a button</slot>
	//   </button>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'button'
	    },

	    style: {
	      type: String,
	      default: 'default'
	    },

	    size: {
	      type: String,
	      default: ''
	    },

	    block: {
	      type: String,
	      default: ''
	    },

	    radius: {
	      type: String,
	      default: ''
	    },

	    round: {
	      type: String,
	      default: ''
	    },

	    status: {
	      type: String,
	      default: ''
	    }
	  },

	  methods: {
	    click: function click() {
	      this.$emit('click');
	    }
	  }
	};
	// </script>

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "\n<button class=\"btn\" type=\"{{type}}\"\n  v-bind:class=\"[\n    'btn-' + style,\n    size ? ('btn-' + size) : '',\n    radius ? 'radius' : '',\n    round ? 'round' : '',\n    (status === 'actived') ? 'active' :'',\n    block ? 'btn-block' : ''\n  ]\"\n  v-bind:disabled=\"status === 'disabled' || status === 'loading'\">\n  <span class=\"icon-circle-o-notch icon-spin\" v-if=\"status === 'loading'\"></span>\n  <slot>This is a button</slot>\n</button>\n";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(91)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIButton/CILinkButtonBootstrap.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(92)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CILinkButtonBootstrap.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <a class="btn"
	//     href="{{href}}"
	//     v-bind:class="[
	//       'btn-' + style,
	//       size ? ('btn-' + size) : '',
	//       radius ? 'radius' : '',
	//       round ? 'round' : '',
	//       (status === 'actived') ? 'am-active' :'',
	//       block ? 'btn-block' : ''
	//     ]"
	//     v-bind:disabled="status === 'disabled' || status === 'loading'">
	//     <span class="icon-circle-o-notch icon-spin" v-if="status === 'loading'"></span>
	//     <slot>This is a button</slot>
	//   </a>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    style: {
	      type: String,
	      default: 'default'
	    },

	    size: {
	      type: String,
	      default: ''
	    },

	    block: {
	      type: String,
	      default: ''
	    },

	    radius: {
	      type: String,
	      default: ''
	    },

	    round: {
	      type: String,
	      default: ''
	    },

	    status: {
	      type: String,
	      default: ''
	    },

	    href: {
	      type: String,
	      default: 'javascript:;'
	    }
	  },

	  methods: {
	    click: function click() {
	      this.$emit('click');
	    }
	  }
	};
	// </script>

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "\n<a class=\"btn\"\n  href=\"{{href}}\"\n  v-bind:class=\"[\n    'btn-' + style,\n    size ? ('btn-' + size) : '',\n    radius ? 'radius' : '',\n    round ? 'round' : '',\n    (status === 'actived') ? 'am-active' :'',\n    block ? 'btn-block' : ''\n  ]\"\n  v-bind:disabled=\"status === 'disabled' || status === 'loading'\">\n  <span class=\"icon-circle-o-notch icon-spin\" v-if=\"status === 'loading'\"></span>\n  <slot>This is a button</slot>\n</a>\n";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(94)
	__vue_script__ = __webpack_require__(98)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIModal/CIModalBootstrap.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(99)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIModalBootstrap.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CIModalBootstrap.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CIModalBootstrap.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.modal {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 96 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div v-show="isShow">
	//     <div class="modal fade" tabindex="-1" role="dialog"
	//       v-bind:class="{'in': isShow, 'modal-lg': lg}"
	//       v-on:click="closeViaDimmer">
	//       <div class="modal-dialog" role="document"
	//         v-bind:style="{'margin-top': marginTop + 'px'}">
	//         <div class="modal-content">
	//           <slot name="header"></slot>
	//           <slot name="body"></slot>
	//           <slot name="footer"></slot>
	//         </div>
	//       </div>
	//     </div>
	//
	//     <div class="modal-backdrop fade"
	//       v-bind:class="{'in': isShow}"
	//       transition="modal-fade"></div>
	//   </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    isShow: {
	      type: Boolean,
	      default: false,
	      twoWay: true
	    },

	    isCloseViaDimmer: { // 是否通过点击遮罩层关闭模态框，默认为true
	      type: Boolean,
	      default: true
	    },

	    lg: {
	      type: Boolean,
	      default: false
	    },

	    marginTop: {
	      type: Number,
	      default: 0
	    }
	  },

	  transitions: {
	    'modal-fade': {
	      beforeEnter: function beforeEnter(el) {
	        // ...
	      },
	      enter: function enter(el) {
	        // ...
	      },
	      afterEnter: function afterEnter(el) {
	        // ...
	      },
	      enterCancelled: function enterCancelled(el) {
	        // ...
	      },
	      beforeLeave: function beforeLeave(el) {
	        // ...
	      },
	      leave: function leave(el) {
	        // ...
	      },
	      afterLeave: function afterLeave(el) {
	        // ...
	      },
	      leaveCancelled: function leaveCancelled(el) {
	        // ...
	      }
	    }
	  },

	  ready: function ready() {
	    // ...
	  },


	  watch: {
	    isShow: function isShow(val, oldVal) {
	      // console.log('modal', this.$el, this)
	      if (val) {
	        var dialog = this.$el.querySelector('.modal-dialog');
	        // this.marginTop = - parseInt(dialog.offsetHeight / 2)
	        this.marginTop = 200;
	      }
	    }
	  },

	  methods: {
	    show: function show() {
	      this.isShow = true;
	    },
	    close: function close() {
	      this.isShow = false;
	    },
	    closeViaDimmer: function closeViaDimmer() {
	      if (this.isCloseViaDimmer) {
	        this.isShow = false;
	      }
	    }
	  }
	};
	// </script>
	//
	//
	// <style>
	// .modal {
	//   display: block;
	// }
	// </style>

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"isShow\">\n  <div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n    v-bind:class=\"{'in': isShow, 'modal-lg': lg}\"\n    v-on:click=\"closeViaDimmer\">\n    <div class=\"modal-dialog\" role=\"document\"\n      v-bind:style=\"{'margin-top': marginTop + 'px'}\">\n      <div class=\"modal-content\">\n        <slot name=\"header\"></slot>\n        <slot name=\"body\"></slot>\n        <slot name=\"footer\"></slot>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-backdrop fade\"\n    v-bind:class=\"{'in': isShow}\"\n    transition=\"modal-fade\"></div>\n</div>\n";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(101)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIModal/CIAlertBootstrap.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(102)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIAlertBootstrap.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <ci-modal v-bind:is-show.sync="isShow" v-bind:is-close-via-dimmer="isCloseViaDimmer">
	//     <div class="modal-header" slot="header" v-if="title">
	//       <h4 class="modal-title">{{title}}</h4>
	//     </div>
	//     <div class="modal-body" slot="body"><slot>default alert</slot></div>
	//     <div class="modal-footer" slot="footer">
	//       <span class="btn btn-default" v-on:click="ok">{{okText}}</span>
	//     </div>
	//   </ci-modal>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  props: {
	    isShow: {
	      type: Boolean,
	      default: false,
	      twoWay: true
	    },

	    title: {
	      type: String,
	      default: ''
	    },

	    okText: {
	      type: String,
	      default: '确认'
	    }
	  },

	  ready: function ready() {
	    // ...
	  },


	  methods: {
	    show: function show() {
	      this.isShow = true;
	    },
	    hide: function hide() {
	      this.isShow = false;
	    },
	    ok: function ok() {
	      this.hide();
	      this.$dispatch('ok');
	    }
	  }
	};
	// </script>

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "\n<ci-modal v-bind:is-show.sync=\"isShow\" v-bind:is-close-via-dimmer=\"isCloseViaDimmer\">\n  <div class=\"modal-header\" slot=\"header\" v-if=\"title\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n  </div>\n  <div class=\"modal-body\" slot=\"body\"><slot>default alert</slot></div>\n  <div class=\"modal-footer\" slot=\"footer\">\n    <span class=\"btn btn-default\" v-on:click=\"ok\">{{okText}}</span>\n  </div>\n</ci-modal>\n";

/***/ }
/******/ ])
});
;