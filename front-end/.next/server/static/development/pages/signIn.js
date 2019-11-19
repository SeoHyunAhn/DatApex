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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/firebase.js":
/*!****************************!*\
  !*** ./common/firebase.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase */ "./config/firebase.js");



try {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app();
} catch (error) {
  // Initialize Firebase
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(_config_firebase__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (firebase__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./config/firebase.js":
/*!****************************!*\
  !*** ./config/firebase.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const firebaseConfig = {
  apiKey: "AIzaSyCPnB943ZosWFSdFaypPugmD7tLq_HZgMY",
  authDomain: "datapex-c38f2.firebaseapp.com",
  databaseURL: "https://datapex-c38f2.firebaseio.com",
  projectId: "datapex-c38f2",
  storageBucket: "",
  messagingSenderId: "401525491919",
  appId: "1:401525491919:web:c80eaa56f58e09ceb38fba"
};
/* harmony default export */ __webpack_exports__["default"] = (firebaseConfig);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/signIn.js":
/*!*************************!*\
  !*** ./pages/signIn.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/firebase */ "./common/firebase.js");

var _jsxFileName = "/Users/youngjoon/Desktop/CS407/DatApex/front-end/pages/signIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class SignIn extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Log In"), __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx(SignInForm, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }))));
  }

}

class SignInForm extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      email: '',
      password: '',
      error: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmitForm", e => {
      e.preventDefault();
      const {
        email,
        password
      } = this.state;
      console.log(email);
      console.log(password);
      _common_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth().signInWithEmailAndPassword(email, password).then(user => {
        window.location = "/";
      }).catch(error => {
        alert(error);
        this.setState({
          error: error
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "input", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onRefInput", c => {
      this.input = c;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChangeInputEmail", e => {
      this.setState({
        email: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChangeInputPassword", e => {
      this.setState({
        password: e.target.value
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
      onSubmit: this.onSubmitForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "User Account"), __jsx("input", {
      type: "text",
      className: "form-control",
      id: "inputAddress",
      placeholder: "ID (Email)",
      ref: this.onRefInput,
      value: this.state.email,
      onChange: this.onChangeInputEmail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Password"), __jsx("input", {
      type: "text",
      className: "form-control",
      id: "inputAddress",
      placeholder: "******",
      ref: this.onRefInput,
      value: this.state.password,
      onChange: this.onChangeInputPassword,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), __jsx("div", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary btn-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Sign in"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/signIn.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/youngjoon/Desktop/CS407/DatApex/front-end/pages/signIn.js */"./pages/signIn.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

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
//# sourceMappingURL=signIn.js.map