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

	var _CIBlock = __webpack_require__(1);

	var _CIBlock2 = _interopRequireDefault(_CIBlock);

	var _CIBlockBody = __webpack_require__(4);

	var _CIBlockBody2 = _interopRequireDefault(_CIBlockBody);

	var _CIBlockFooter = __webpack_require__(7);

	var _CIBlockFooter2 = _interopRequireDefault(_CIBlockFooter);

	var _CIBlockHeader = __webpack_require__(10);

	var _CIBlockHeader2 = _interopRequireDefault(_CIBlockHeader);

	var _CIButton = __webpack_require__(13);

	var _CIButton2 = _interopRequireDefault(_CIButton);

	var _CILinkButton = __webpack_require__(16);

	var _CILinkButton2 = _interopRequireDefault(_CILinkButton);

	var _CICheckbox = __webpack_require__(19);

	var _CICheckbox2 = _interopRequireDefault(_CICheckbox);

	var _CIInput = __webpack_require__(22);

	var _CIInput2 = _interopRequireDefault(_CIInput);

	var _CIRadio = __webpack_require__(25);

	var _CIRadio2 = _interopRequireDefault(_CIRadio);

	var _CISelect = __webpack_require__(28);

	var _CISelect2 = _interopRequireDefault(_CISelect);

	var _CIList = __webpack_require__(31);

	var _CIList2 = _interopRequireDefault(_CIList);

	var _CIListCell = __webpack_require__(34);

	var _CIListCell2 = _interopRequireDefault(_CIListCell);

	var _CIListCheckbox = __webpack_require__(37);

	var _CIListCheckbox2 = _interopRequireDefault(_CIListCheckbox);

	var _CIListRadio = __webpack_require__(40);

	var _CIListRadio2 = _interopRequireDefault(_CIListRadio);

	var _CILoading = __webpack_require__(43);

	var _CILoading2 = _interopRequireDefault(_CILoading);

	var _CIGrid = __webpack_require__(46);

	var _CIGrid2 = _interopRequireDefault(_CIGrid);

	var _CIGridCell = __webpack_require__(49);

	var _CIGridCell2 = _interopRequireDefault(_CIGridCell);

	var _CIModal = __webpack_require__(52);

	var _CIModal2 = _interopRequireDefault(_CIModal);

	var _CIActions = __webpack_require__(55);

	var _CIActions2 = _interopRequireDefault(_CIActions);

	var _CIAlert = __webpack_require__(58);

	var _CIAlert2 = _interopRequireDefault(_CIAlert);

	var _CIConfirm = __webpack_require__(61);

	var _CIConfirm2 = _interopRequireDefault(_CIConfirm);

	var _CIScrollHelper = __webpack_require__(64);

	var _CIScrollHelper2 = _interopRequireDefault(_CIScrollHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @fileOverview main
	 * @author: burning <www.cafeinit.com>
	 * @date: 2016-08-26
	 */

	var _components = {
	  'ci-block': _CIBlock2.default,
	  'ci-block-body': _CIBlockBody2.default,
	  'ci-block-footer': _CIBlockFooter2.default,
	  'ci-block-header': _CIBlockHeader2.default,

	  'ci-button': _CIButton2.default,
	  'ci-link-button': _CILinkButton2.default,

	  'ci-checkbox': _CICheckbox2.default,
	  'ci-input': _CIInput2.default,
	  'ci-radio': _CIRadio2.default,
	  'ci-select': _CISelect2.default,

	  'ci-list': _CIList2.default,
	  'ci-list-cell': _CIListCell2.default,
	  'ci-list-checkbox': _CIListCheckbox2.default,
	  'ci-list-radio': _CIListRadio2.default,

	  'ci-loading': _CILoading2.default,

	  'ci-modal': _CIModal2.default,
	  'ci-actions': _CIActions2.default,
	  'ci-alert': _CIAlert2.default,
	  'ci-confirm': _CIConfirm2.default,

	  'ci-grid': _CIGrid2.default,
	  'ci-grid-cell': _CIGridCell2.default
	};

	// export default function (Vue) {
	//   for (name in components) {
	//     Vue.component(name, components[name]);
	//   }
	// }


	exports.default = {
	  components: function components(Vue) {
	    for (name in _components) {
	      Vue.component(name, _components[name]);
	    }
	  },

	  utils: {
	    CIScrollHelper: _CIScrollHelper2.default
	  }
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
	  console.warn("[vue-loader] src/js/CIButton/CIButton.vue: named exports in *.vue files are ignored.")}
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
	  var id = "./CIButton.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <button class="am-btn" type="{{type}}"
	//     v-bind:class="[
	//       'am-btn-' + style,
	//       size ? ('am-btn-' + size) : '',
	//       radius ? 'am-radius' : '',
	//       round ? 'am-round' : '',
	//       (status === 'actived') ? 'am-active' :'',
	//       block ? 'am-btn-block' : ''
	//     ]"
	//     v-bind:disabled="status === 'disabled' || status === 'loading'">
	//     <span class="am-icon-circle-o-notch am-icon-spin" v-if="status === 'loading'"></span>
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
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<button class=\"am-btn\" type=\"{{type}}\"\n  v-bind:class=\"[\n    'am-btn-' + style,\n    size ? ('am-btn-' + size) : '',\n    radius ? 'am-radius' : '',\n    round ? 'am-round' : '',\n    (status === 'actived') ? 'am-active' :'',\n    block ? 'am-btn-block' : ''\n  ]\"\n  v-bind:disabled=\"status === 'disabled' || status === 'loading'\">\n  <span class=\"am-icon-circle-o-notch am-icon-spin\" v-if=\"status === 'loading'\"></span>\n  <slot>This is a button</slot>\n</button>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(17)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIButton/CILinkButton.vue: named exports in *.vue files are ignored.")}
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
	  var id = "./CILinkButton.vue"
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
	//   <a class="am-btn"
	//     href="{{href}}"
	//     v-bind:class="[
	//       'am-btn-' + style,
	//       size ? ('am-btn-' + size) : '',
	//       radius ? 'am-radius' : '',
	//       round ? 'am-round' : '',
	//       (status === 'actived') ? 'am-active' :'',
	//       block ? 'am-btn-block' : ''
	//     ]"
	//     v-bind:disabled="status === 'disabled' || status === 'loading'">
	//     <span class="am-icon-circle-o-notch am-icon-spin" v-if="status === 'loading'"></span>
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
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<a class=\"am-btn\"\n  href=\"{{href}}\"\n  v-bind:class=\"[\n    'am-btn-' + style,\n    size ? ('am-btn-' + size) : '',\n    radius ? 'am-radius' : '',\n    round ? 'am-round' : '',\n    (status === 'actived') ? 'am-active' :'',\n    block ? 'am-btn-block' : ''\n  ]\"\n  v-bind:disabled=\"status === 'disabled' || status === 'loading'\">\n  <span class=\"am-icon-circle-o-notch am-icon-spin\" v-if=\"status === 'loading'\"></span>\n  <slot>This is a button</slot>\n</a>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIForm/CICheckbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
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
/* 20 */
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
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-form-group\">\n  <label class=\"ci-label\" v-if=\"title\"\n    v-bind:style=\"{width: titleWidth}\">{{title}}</label>\n  <div class=\"ci-form-control\">\n    <label v-for=\"item in items\">\n      <input type=\"checkbox\"\n        v-bind:name=\"name\"\n        v-bind:value=\"item.value\"\n        v-model=\"model\" /> {{item.title}}\n    </label>\n  </div>\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIForm/CIInput.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
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
/* 23 */
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
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-form-group\">\n  <label class=\"ci-label\" v-if=\"title\"\n    v-bind:style=\"{width: titleWidth}\">{{title}}</label>\n  <input class=\"ci-form-control\"\n    v-model=\"model\"\n    v-bind:type=\"type\"\n    v-bind:name=\"name\"\n    v-bind:placeholder=\"placeholder\"\n    v-bind:disabled=\"disabled\" />\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(26)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIForm/CIRadio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(27)
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
/* 26 */
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
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-form-group\">\n  <label class=\"ci-label\" v-if=\"title\"\n    v-bind:style=\"{width: titleWidth}\">{{title}}</label>\n  <div class=\"ci-form-control\">\n    <label v-for=\"item in items\">\n      <input type=\"radio\"\n        v-bind:name=\"name\"\n        v-bind:value=\"item.value\"\n        v-model=\"model\" /> {{item.title}}\n    </label>\n  </div>\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(29)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIForm/CISelect.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(30)
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
/* 29 */
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
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-form-group\">\n  <label class=\"ci-label\" v-if=\"title\"\n    v-bind:style=\"{width: titleWidth}\">{{title}}</label>\n  <select class=\"ci-form-control\" name=\"{{name}}\" v-model=\"model\">\n    <option value=\"{{item.value}}\" v-for=\"item in items\">{{item.title}}</option>\n  </select>\n</div>\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIList/CIList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
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
/* 32 */
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
/* 33 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"ci-list\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(35)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIList/CIListCell.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
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
/* 35 */
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
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"ci-list-cell\">\n  <div class=\"ci-list-cell-body\">\n    <slot></slot>\n  </div>\n  <div class=\"ci-list-cell-accessory\" v-if=\"accessory\">\n    <i class=\"fa fa-{{accessoryIcon}}\"></i>\n  </div>\n</li>\n";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(38)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIList/CIListCheckbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(39)
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
/* 38 */
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
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-list-hd\" v-if=\"title\">{{title}}</div>\n<ul class=\"ci-list ci-list-checkbox\">\n  <ci-list-cell v-for=\"item in items\">\n    <div class=\"ci-form-group\">\n      <label class=\"ci-form-control\">\n        <input class=\"ci-checkbox\" type=\"checkbox\"\n          v-bind:name=\"name\"\n          v-bind:value=\"item.value\"\n          v-model=\"model\" /> {{item.title}}\n      </label>\n    </div>\n  </ci-list-cell>\n</ul>\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIList/CIListRadio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
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
/* 41 */
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
/* 42 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-list-hd\" v-if=\"title\">{{title}}</div>\n<ul class=\"ci-list ci-list-radio\">\n  <ci-list-cell v-for=\"item in items\">\n    <div class=\"ci-form-group\">\n      <label class=\"ci-form-control\">\n        {{item.title}}\n        <input class=\"ci-radio\" type=\"radio\"\n          v-bind:name=\"name\"\n          v-bind:value=\"item.value\"\n          v-model=\"model\" />\n      </label>\n    </div>\n  </ci-list-cell>\n</ul>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(44)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CILoading/CILoading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(45)
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
/* 44 */
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
/* 45 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ci-loading\">\n  <i class=\"fa fa-spinner ci-icon-spin\"></i>\n</div>\n";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(47)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIGrid/CIGrid.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(48)
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
/* 47 */
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
/* 48 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"ci-grid\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(50)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIGrid/CIGridCell.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(51)
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
/* 50 */
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
/* 51 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"ci-grid-cell\">\n  <slot></slot>\n</li>\n";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIModal/CIModal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIModal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div v-show="isShow">
	//     <div class="am-modal" tabindex="-1"
	//       v-bind:class="{'am-modal-active': isShow, 'am-modal-lg': lg}"
	//       v-bind:style="{'margin-top': marginTop + 'px'}">
	//       <div class="am-modal-dialog">
	//         <slot name="header"></slot>
	//         <slot name="body"></slot>
	//         <slot name="footer"></slot>
	//       </div>
	//     </div>
	//
	//     <div class="am-dimmer"
	//       v-bind:class="{'am-active': isShow}"
	//       v-on:click="closeViaDimmer"
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
	        var dialog = this.$el.querySelector('.am-modal');
	        this.marginTop = -parseInt(dialog.offsetHeight / 2);
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

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"isShow\">\n  <div class=\"am-modal\" tabindex=\"-1\"\n    v-bind:class=\"{'am-modal-active': isShow, 'am-modal-lg': lg}\"\n    v-bind:style=\"{'margin-top': marginTop + 'px'}\">\n    <div class=\"am-modal-dialog\">\n      <slot name=\"header\"></slot>\n      <slot name=\"body\"></slot>\n      <slot name=\"footer\"></slot>\n    </div>\n  </div>\n\n  <div class=\"am-dimmer\"\n    v-bind:class=\"{'am-active': isShow}\"\n    v-on:click=\"closeViaDimmer\"\n    transition=\"modal-fade\"></div>\n</div>\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(56)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIModal/CIActions.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(57)
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
/* 56 */
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
	      this.$dispatch('click-item', index, item);
	    }
	  }
	};
	// </script>

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"isShow\">\n  <div class=\"am-modal-actions am-modal-active\">\n    <div class=\"am-modal-actions-group\">\n      <ul class=\"am-list\">\n        <li v-for=\"(index, item) in items\"\n          v-bind:class=\"[item.className, {'ci-selected': selectedIndex == index}]\"\n          v-on:click=\"clickItem(index, item)\">\n          <a v-if=\"item.path\" v-link=\"{path: item.path}\">{{item.text}}</a>\n          <a v-else href=\"javascritp:;\">{{item.text}}</a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"am-modal-actions-group\">\n      <button class=\"am-btn am-btn-secondary am-btn-block\"\n        v-on:click=\"close\">{{cancelText}}</button>\n    </div>\n  </div>\n\n  <div class=\"am-dimmer\"\n    v-bind:class=\"{'am-active': isShow}\"\n    v-on:click=\"closeViaDimmer\"></div>\n</div>\n";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(59)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIModal/CIAlert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(60)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CIAlert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <ci-modal v-bind:is-show.sync="isShow" v-bind:is-close-via-dimmer="isCloseViaDimmer">
	//     <div class="am-modal-hd" slot="header" v-if="title">{{title}}</div>
	//     <div class="am-modal-bd" slot="body"><slot>default alert</slot></div>
	//     <div class="am-modal-footer" slot="footer">
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

	    isCloseViaDimmer: { // 是否通过点击遮罩层关闭模态框，默认为true
	      type: Boolean,
	      default: false
	    },

	    // lg: {
	    //   type: Boolean,
	    //   default: false
	    // },

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
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n<ci-modal v-bind:is-show.sync=\"isShow\" v-bind:is-close-via-dimmer=\"isCloseViaDimmer\">\n  <div class=\"am-modal-hd\" slot=\"header\" v-if=\"title\">{{title}}</div>\n  <div class=\"am-modal-bd\" slot=\"body\"><slot>default alert</slot></div>\n  <div class=\"am-modal-footer\" slot=\"footer\">\n    <span class=\"am-modal-btn\" v-on:click=\"ok\">{{okText}}</span>\n  </div>\n</ci-modal>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(62)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/js/CIModal/CIConfirm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(63)
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
/* 62 */
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
/* 63 */
/***/ function(module, exports) {

	module.exports = "\n<ci-modal v-bind:is-show.sync=\"isShow\" v-bind:is-close-via-dimmer=\"false\">\n  <div class=\"am-modal-hd\" slot=\"header\" v-if=\"title\">{{title}}</div>\n  <div class=\"am-modal-bd\" slot=\"body\"><slot>Are you sure ?</slot></div>\n  <div class=\"am-modal-footer\" slot=\"footer\">\n    <span class=\"am-modal-btn\" v-on:click=\"cancel\">{{concelText}}</span>\n    <span class=\"am-modal-btn\" v-on:click=\"ok\">{{okText}}</span>\n  </div>\n</ci-modal>\n";

/***/ },
/* 64 */
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

/***/ }
/******/ ])
});
;