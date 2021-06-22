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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(4)
var $app_style$ = __webpack_require__(5)
var $app_script$ = __webpack_require__(6)
var options=$app_script$
 if ($app_script$.__esModule) {

      options = $app_script$.default;
 }
options.styleSheet=$app_style$
options.render=$app_template$;
module.exports=new ViewModel(options);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (vm) { var _vm = vm || this; return _c('stack', {'staticClass' : ["stack"]} , [_c('image', {'attrs' : {'src' : "/common/images/background.png"},'staticClass' : ["background"]} ),_c('div', {'staticClass' : ["container"],'onBubbleEvents' : {'swipe' : _vm.touchMove}} , [_c('list', {'staticClass' : ["showList"]} , [_c('list-item', {'staticClass' : ["showListItem"],'onBubbleEvents' : {'click' : function (evt) {_vm.openPage('arrays/arrays',evt)}}} , [_c('text', {'attrs' : {'value' : "Array"}} )] ),_c('list-item', {'staticClass' : ["showListItem"],'onBubbleEvents' : {'click' : function (evt) {_vm.openPage('animator/animator',evt)}}} , [_c('text', {'attrs' : {'value' : "Animator"}} )] ),_c('list-item', {'staticClass' : ["showListItem"],'onBubbleEvents' : {'click' : function (evt) {_vm.openPage('cssAnimation/cssAnimation',evt)}}} , [_c('text', {'attrs' : {'value' : "CSS Animation"}} )] ),_c('list-item', {'staticClass' : ["showListItem"],'onBubbleEvents' : {'click' : function (evt) {_vm.openPage('swiperScreen/swiperScreen',evt)}}} , [_c('text', {'attrs' : {'value' : "Swiper"}} )] ),_c('list-item', {'staticClass' : ["showListItem"],'onBubbleEvents' : {'click' : function (evt) {_vm.openPage('progressScreen/progressScreen',evt)}}} , [_c('text', {'attrs' : {'value' : "Progress"}} )] ),_c('list-item', {'staticClass' : ["showListItem"],'onBubbleEvents' : {'click' : function (evt) {_vm.openPage('sliderScreen/sliderScreen',evt)}}} , [_c('text', {'attrs' : {'value' : "Slider / Switch"}} )] ),_c('list-item', {'staticClass' : ["showListItem"],'onBubbleEvents' : {'click' : function (evt) {_vm.openPage('pickerScreen/pickerScreen',evt)}}} , [_c('text', {'attrs' : {'value' : "Picker"}} )] ),_c('list-item', {'staticClass' : ["showListItem"],'onBubbleEvents' : {'click' : function (evt) {_vm.openPage('storageScreen/storageScreen',evt)}}} , [_c('text', {'attrs' : {'value' : "Storage"}} )] ),_c('list-item', {'staticClass' : ["showListItem"],'onBubbleEvents' : {'click' : function (evt) {_vm.openPage('sensorScreen/sensorScreen',evt)}}} , [_c('text', {'attrs' : {'value' : "Sensor"}} )] )] )] )] ) }

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"classSelectors":{"stack":{"width":454,"height":454,"justifyContent":"center"},"background":{"width":454,"height":454},"container":{"flexDirection":"column","justifyContent":"center","alignItems":"center","left":0,"top":0,"width":454,"height":454,"backgroundColor":"rgba(0,0,0,0)"},"containerFlex":{"display":"flex","justifyContent":"center","alignItems":"center","left":0,"top":0,"width":454,"height":454,"backgroundColor":"rgba(0,0,0,0)"},"title":{"fontSize":30,"textAlign":"center","width":350,"height":60},"row":{"display":"flex","flexDirection":"row","justifyContent":"center","alignItems":"center","width":454,"height":100,"backgroundColor":"rgba(0,0,0,0)"},"btn":{"display":"flex","width":200,"height":50},"btn-small":{"display":"flex","width":100,"height":50},"backBtn":{"width":200,"height":50},"showList":{"backgroundColor":"rgba(0,0,0,0)","flexDirection":"column","width":454,"height":400},"showListItem":{"backgroundColor":"rgba(0,0,0,0)","flexDirection":"column","alignItems":"center","width":454,"height":50,"color":16711680}}}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault(requireNative("system.router"));

var _system2 = _interopRequireDefault(requireNative("system.app"));

var _default = {
  data: {},
  clickAction: function clickAction() {
    _system["default"].replace({
      uri: 'pages/detail/detail'
    });
  },
  openPage: function openPage($page) {
    console.log($page);

    _system["default"].replace({
      uri: 'pages/' + $page
    });
  },
  touchMove: function touchMove(e) {
    if (e.direction == "right") {
      console.log("APP运行结束。");
      this.appExit();
    }
  },
  appExit: function appExit() {
    _system2["default"].terminate();
  }
};
exports["default"] = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ })
/******/ ]);