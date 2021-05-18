(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/convert-json.js":
/*!*****************************!*\
  !*** ./src/convert-json.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction convert(a) {\n  var request = new XMLHttpRequest();\n  var adress = a;\n  var info;\n  request.open('GET', adress, true);\n\n  request.onload = function () {\n    info = JSON.parse(request.responseText);\n    console.log(info);\n    return info;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (convert);\n\n//# sourceURL=webpack://$/./src/convert-json.js?");

/***/ }),

/***/ "./src/getrandomint.js":
/*!*****************************!*\
  !*** ./src/getrandomint.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// get random whole numbers in a specific range\n// @see https://stackoverflow.com/a/1527820/2124254\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getRandomInt);\n\n//# sourceURL=webpack://$/./src/getrandomint.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: getRandomInt, convert, score, modtext, myMath, ins, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getrandomint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getrandomint */ \"./src/getrandomint.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return _getrandomint__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _convert_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert-json */ \"./src/convert-json.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"convert\", function() { return _convert_json__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score */ \"./src/score.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"score\", function() { return _score__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _modtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modtext */ \"./src/modtext.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"modtext\", function() { return _modtext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _myMath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myMath */ \"./src/myMath.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myMath\", function() { return _myMath__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _insertion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insertion */ \"./src/insertion.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ins\", function() { return _insertion__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _render__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://$/./src/index.js?");

/***/ }),

/***/ "./src/insertion.js":
/*!**************************!*\
  !*** ./src/insertion.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ins(variable, num) {\n  variable = variable + \"\" + num;\n  return variable;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ins);\n\n//# sourceURL=webpack://$/./src/insertion.js?");

/***/ }),

/***/ "./src/modtext.js":
/*!************************!*\
  !*** ./src/modtext.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction modtext(variable, value) {\n  variable.value = value;\n  return variable.value;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modtext);\n\n//# sourceURL=webpack://$/./src/modtext.js?");

/***/ }),

/***/ "./src/myMath.js":
/*!***********************!*\
  !*** ./src/myMath.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction myMath(selector, string) {\n  var temp = string;\n\n  switch (selector) {\n    case 1:\n      res(temp);\n      break;\n\n    case 2:\n      back(temp);\n      break;\n\n    case 3:\n      factorial(temp);\n      break;\n\n    case 4:\n      root(temp);\n      break;\n\n    case 5:\n      fat(temp);\n      break;\n  }\n\n  function res(a) {\n    a = eval(a);\n    return a;\n  }\n\n  function back(a) {\n    a = a.substring(0, a.length - 1);\n    return a;\n  }\n\n  function root(a) {\n    a = Number(eval(a));\n    a = Math.sqrt(a);\n    return a;\n  }\n\n  function factorial(a) {\n    a = Number(eval(a));\n\n    if (a < 52) {\n      var _res = 1;\n\n      while (a > 1) {\n        _res *= a;\n        a--;\n      }\n\n      return _res;\n    }\n  }\n\n  function fat(a) {\n    a = Number(eval(a));\n    var c = 1;\n\n    while (a > 1) {\n      a /= c;\n      c++;\n    }\n\n    return c - 1;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myMath);\n\n//# sourceURL=webpack://$/./src/myMath.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction render(place, element, classe) {\n  place.innerHTML = place.innerHTML + '<' + element + ' class =\"' + classe + '\"></' + element + '>';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack://$/./src/render.js?");

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction score(count) {\n  pontos += count;\n  console.log(pontos);\n  var score = document.querySelector('h3.score');\n  score.innerHTML = 'Pontua&ccedil&atildeo: ' + pontos;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (score);\n\n//# sourceURL=webpack://$/./src/score.js?");

/***/ })

/******/ });
});