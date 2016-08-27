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

	exports.default = function (Vue) {
	  for (name in components) {
	    Vue.component(name, components[name]);
	  }
	};

	var _CIBlock = __webpack_require__(1);

	var _CIBlock2 = _interopRequireDefault(_CIBlock);

	var _CIBlockBody = __webpack_require__(4);

	var _CIBlockBody2 = _interopRequireDefault(_CIBlockBody);

	var _CIBlockFooter = __webpack_require__(7);

	var _CIBlockFooter2 = _interopRequireDefault(_CIBlockFooter);

	var _CIBlockHeader = __webpack_require__(10);

	var _CIBlockHeader2 = _interopRequireDefault(_CIBlockHeader);

	var _CIList = __webpack_require__(13);

	var _CIList2 = _interopRequireDefault(_CIList);

	var _CIListCell = __webpack_require__(16);

	var _CIListCell2 = _interopRequireDefault(_CIListCell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @fileOverview main
	 * @author: burning <www.cafeinit.com>
	 * @date: 2016-08-26
	 */

	var components = {
	  'ci-block': _CIBlock2.default,
	  'ci-block-body': _CIBlockBody2.default,
	  'ci-block-footer': _CIBlockFooter2.default,
	  'ci-block-header': _CIBlockHeader2.default,

	  'ci-list': _CIList2.default,
	  'ci-list-cell': _CIListCell2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(2)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIBlock/CIBlock.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(3)
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
/* 2 */
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
/* 3 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-block\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(5)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIBlock/CIBlockBody.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
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
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-block-bd\">\n  <slot>Block Body</slot>\n</div>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIBlock/CIBlockFooter.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
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
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-block-ft\">\n  <slot>Block Footer</slot>\n</div>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIBlock/CIBlockHeader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
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
/* 11 */
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
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-block-hd\">\n  <slot><h3>{{title}}</h3></slot>\n</div>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIList/CIList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
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
/* 14 */
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
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"ci-list\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(17)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIList/CIListCell.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
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
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"ci-list-cell\">\n  <div class=\"ci-list-cell-body\">\n    <slot></slot>\n  </div>\n  <div class=\"ci-list-cell-accessory\" v-if=\"accessory\">\n    <i class=\"fa fa-{{accessoryIcon}}\"></i>\n  </div>\n</li>\n";

/***/ }
/******/ ])
});
;