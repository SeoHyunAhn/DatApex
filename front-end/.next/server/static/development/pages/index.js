module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./node_modules/antd/lib/button/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/button/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/dropdown/style/css.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/style/css.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/layout/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/layout/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/menu/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/header.js":
/*!*************************!*\
  !*** ./pages/header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/dropdown/style/css */ "./node_modules/antd/lib/dropdown/style/css.js");
/* harmony import */ var antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/Users/seohyun/dataPex/front-end/pages/header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

const MenuItem = antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item;
const {
  Header,
  Content,
  Footer
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a;

const preProcMenu = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
  route: "preproc",
  params: {
    path: 'labsel'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Label")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
  route: "preproc",
  params: {
    path: 'one-hot'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "One-hot Encoding")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
  route: "preproc",
  params: {
    path: 'delete-rc'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Delete Row/Column")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
  route: "preproc",
  params: {
    path: 'replaceW'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Replace W")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
  route: "preproc",
  params: {
    path: 'certain'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Select Certain")));

const algoMenu = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
  route: "mlalgo",
  params: {
    path: 'nba'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "Naive Bayes algorithm")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
  route: "mlalgo",
  params: {
    path: 'lra'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Logistic Regression algorithm")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
  route: "mlalgo",
  params: {
    path: 'svm'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "Support Vector Machine")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
  route: "mlalgo",
  params: {
    path: 'bag'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "Bagging algorithm")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
  route: "mlalgo",
  params: {
    path: 'clus'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "Clustering algorith")));

const Head = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a, {
  className: "layout",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx(Header, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
  overlay: preProcMenu,
  placement: "topLeft",
  theme: "dark",
  mode: "horizontal",
  defaultSelectedKeys: ['2'],
  style: {
    lineHeight: '64px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, "Pre Processing")), __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
  overlay: algoMenu,
  placement: "topLeft",
  theme: "dark",
  mode: "horizontal",
  defaultSelectedKeys: ['2'],
  id: "dropdown",
  style: {
    lineHeight: '64px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, "Algorithms")))));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./pages/header.js");


var _jsxFileName = "/Users/seohyun/dataPex/front-end/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
  route: "procOptions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
  type: "primary",
  block: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Pre process Data")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
  route: "algoOptions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
  type: "primary",
  block: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "ML algorithm"))));

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const nextRoutes = __webpack_require__(/*! next-routes */ "next-routes");

const routes = module.exports = nextRoutes();
routes.add('preproc', '/preproc/:path');
routes.add('mlalgo', '/mlalgo/:path');
routes.add('procOptions', '/procOptions');
routes.add('algoOptions', '/algoOptions');
routes.add('about', '/about-us/:foo(bar|baz)');

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seohyun/dataPex/front-end/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/dropdown":
/*!************************************!*\
  !*** external "antd/lib/dropdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map