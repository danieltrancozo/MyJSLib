/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/convert-json.js":
/*!*****************************!*\
  !*** ./src/convert-json.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction convert(a) {\n  var request = new XMLHttpRequest();\n  var adress = a;\n  var info;\n  request.open('GET', adress, true);\n\n  request.onload = function () {\n    info = JSON.parse(request.responseText);\n    console.log(info);\n    return info;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convert);\n\n//# sourceURL=webpack://$/./src/convert-json.js?");

/***/ }),

/***/ "./src/getrandomint.js":
/*!*****************************!*\
  !*** ./src/getrandomint.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// get random whole numbers in a specific range\n// @see https://stackoverflow.com/a/1527820/2124254\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomInt);\n\n//# sourceURL=webpack://$/./src/getrandomint.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomInt\": () => (/* reexport safe */ _getrandomint__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"convert\": () => (/* reexport safe */ _convert_json__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"score\": () => (/* reexport safe */ _score__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"modtext\": () => (/* reexport safe */ _modtext__WEBPACK_IMPORTED_MODULE_3__.default),\n/* harmony export */   \"myMath\": () => (/* reexport safe */ _myMath__WEBPACK_IMPORTED_MODULE_4__.default),\n/* harmony export */   \"ins\": () => (/* reexport safe */ _insertion__WEBPACK_IMPORTED_MODULE_5__.default)\n/* harmony export */ });\n/* harmony import */ var _getrandomint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getrandomint */ \"./src/getrandomint.js\");\n/* harmony import */ var _convert_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert-json */ \"./src/convert-json.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score */ \"./src/score.js\");\n/* harmony import */ var _modtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modtext */ \"./src/modtext.js\");\n/* harmony import */ var _myMath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myMath */ \"./src/myMath.js\");\n/* harmony import */ var _insertion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insertion */ \"./src/insertion.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://$/./src/index.js?");

/***/ }),

/***/ "./src/insertion.js":
/*!**************************!*\
  !*** ./src/insertion.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ins(variable, num) {\n  variable = variable + \"\" + num;\n  return variable;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ins);\n\n//# sourceURL=webpack://$/./src/insertion.js?");

/***/ }),

/***/ "./src/modtext.js":
/*!************************!*\
  !*** ./src/modtext.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction modtext(variable, value) {\n  variable.value = value;\n  return variable;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modtext);\n\n//# sourceURL=webpack://$/./src/modtext.js?");

/***/ }),

/***/ "./src/myMath.js":
/*!***********************!*\
  !*** ./src/myMath.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction myMath(selector, string) {\n  var temp = string;\n\n  switch (selector) {\n    case 'res':\n      res(temp);\n      break;\n\n    case 'clean':\n      clean(temp);\n      break;\n\n    case 'back':\n      back(temp);\n      break;\n\n    case 'factorial':\n      factorial(temp);\n      break;\n\n    case 'root':\n      root(temp);\n      break;\n\n    case 'fat':\n      fat(temp);\n      break;\n\n    default:\n      window.alert('Function not found!');\n  }\n\n  function res(a) {\n    a = eval(a);\n    return a;\n  }\n\n  function clean(a) {\n    a = '';\n    return a;\n  }\n\n  function back(a) {\n    a = a.substring(0, a.length - 1);\n    return a;\n  }\n\n  function root(a) {\n    a = Number(eval(a));\n    a = Math.sqrt(a);\n    return a;\n  }\n\n  function factorial(a) {\n    a = Number(eval(a));\n\n    if (a < 52) {\n      var _res = 1;\n\n      while (a > 1) {\n        _res *= a;\n        a--;\n      }\n\n      return _res;\n    }\n  }\n\n  function fat(a) {\n    a = Number(eval(a));\n    var c = 1;\n\n    while (a > 1) {\n      a /= c;\n      c++;\n    }\n\n    return c - 1;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myMath);\n\n//# sourceURL=webpack://$/./src/myMath.js?");

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction score(count) {\n  pontos += count;\n  console.log(pontos);\n  var score = document.querySelector('h3.score');\n  score.innerHTML = 'Pontua&ccedil&atildeo: ' + pontos;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (score);\n\n//# sourceURL=webpack://$/./src/score.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});