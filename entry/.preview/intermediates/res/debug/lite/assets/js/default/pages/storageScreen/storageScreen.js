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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault(requireNative("system.router"));

var _default = {
  backToHome: function backToHome() {
    _system["default"].replace({
      uri: 'pages/index/index'
    });
  }
};
exports["default"] = _default;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(38)
var $app_style$ = __webpack_require__(39)
var $app_script$ = __webpack_require__(40)
var options=$app_script$
 if ($app_script$.__esModule) {

      options = $app_script$.default;
 }
options.styleSheet=$app_style$
options.render=$app_template$;
module.exports=new ViewModel(options);

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = function (vm) { var _vm = vm || this; return _c('stack', {'staticClass' : ["stack"]} , [_c('image', {'attrs' : {'src' : "/common/images/background.png"},'staticClass' : ["background"]} ),_c('div', {'staticClass' : ["container"],'onBubbleEvents' : {'swipe' : _vm.touchMove}} , [_c('text', {'attrs' : {'value' : "Storage"},'staticClass' : ["title"]} ),_c('text', {'attrs' : {'value' : function () {return _vm.nameValue}},'staticClass' : ["title"],'staticStyle' : {'height' : 130}, } ),_c('div', {'staticClass' : ["row"]} , [_c('input', {'attrs' : {'type' : "button",'value' : "Get"},'staticClass' : ["btn-small"],'onBubbleEvents' : {'click' : _vm.getStorage}} ),_c('input', {'attrs' : {'type' : "button",'value' : "Set"},'staticClass' : ["btn-small"],'onBubbleEvents' : {'click' : _vm.setStorage}} ),_c('input', {'attrs' : {'type' : "button",'value' : "Clear"},'staticClass' : ["btn-small"],'onBubbleEvents' : {'click' : _vm.clearStorage}} ),_c('input', {'attrs' : {'type' : "button",'value' : "Delete"},'staticClass' : ["btn-small"],'onBubbleEvents' : {'click' : _vm.deleteStorage}} )] )] )] ) }

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = {"classSelectors":{"container":{"display":"flex","justifyContent":"center","alignItems":"center","left":0,"top":0,"width":454,"height":454},"title":{"fontSize":30,"textAlign":"center","width":200,"height":100}}}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault(requireNative("system.storage"));

var _utils = _interopRequireDefault(__webpack_require__(12));

var _default = {
  data: {
    nameValue: ''
  },
  getStorage: function getStorage() {
    var that = this;

    _system["default"].get({
      key: 'name_key',
      success: function success(data) {
        console.log('call storage.get success: ' + data);
        that.nameValue = "call storage.get success: " + data;
      },
      fail: function fail(data, code) {
        console.log('call storage.get fail, code: ' + code + ', data: ' + data);
        that.nameValue = 'call storage.get fail, code: ' + code + ', data: ' + data;
      },
      complete: function complete() {
        console.log('call complete');
      }
    });
  },
  setStorage: function setStorage() {
    var that = this;

    _system["default"].set({
      key: 'name_key',
      value: 'My Storage Value',
      success: function success() {
        console.log('call storage.set success.');
        that.nameValue = "call storage.set success.";
      },
      fail: function fail(data, code) {
        console.log('call storage.set fail, code: ' + code + ', data: ' + data);
      }
    });
  },
  clearStorage: function clearStorage() {
    var that = this;

    _system["default"].clear({
      success: function success() {
        console.log('call storage.clear success.');
        that.nameValue = 'call storage.clear success.';
      },
      fail: function fail(data, code) {
        console.log('call storage.clear fail, code: ' + code + ', data: ' + data);
      }
    });
  },
  deleteStorage: function deleteStorage() {
    var that = this;

    _system["default"]["delete"]({
      key: 'name_key',
      success: function success() {
        console.log('call storage.delete success.');
        that.nameValue = 'call storage.delete success.';
      },
      fail: function fail(data, code) {
        console.log('call storage.delete fail, code: ' + code + ', data: ' + data);
      }
    });
  },
  touchMove: function touchMove(e) {
    if (e.direction == "right") {
      _utils["default"].backToHome();
    }
  }
};
exports["default"] = _default;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ })

/******/ });