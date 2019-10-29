webpackHotUpdate("static/development/pages/signIn.js",{

/***/ "./pages/signIn.js":
/*!*************************!*\
  !*** ./pages/signIn.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/firebase */ "./common/firebase.js");







var _jsxFileName = "/Users/youngjoon/Desktop/CS407/DatApex/front-end/pages/signIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var SignIn =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SignIn, _Component);

  function SignIn() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SignIn);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SignIn).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SignIn, [{
    key: "render",
    value: function render() {
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
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Log In"), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), __jsx(SignInForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }))));
    }
  }]);

  return SignIn;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var SignInForm =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SignInForm, _Component2);

  function SignInForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SignInForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SignInForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      email: '',
      password: '',
      error: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onSubmitForm", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;
      console.log(email);
      console.log(password);
      _common_firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth().signInWithEmailAndPassword(email, password).then(function (user) {
        window.location = "/";
      })["catch"](function (error) {
        alert(error);

        _this.setState({
          error: error
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "input", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onRefInput", function (c) {
      _this.input = c;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onChangeInputEmail", function (e) {
      _this.setState({
        email: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onChangeInputPassword", function (e) {
      _this.setState({
        password: e.target.value
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SignInForm, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("form", {
        onSubmit: this.onSubmitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "User Name / Email"), __jsx("input", {
        type: "text",
        className: "form-control",
        id: "inputAddress",
        placeholder: "Username(Email)",
        ref: this.onRefInput,
        value: this.state.email,
        onChange: this.onChangeInputEmail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
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
          lineNumber: 77
        },
        __self: this
      })), __jsx("button", {
        type: "submit",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Sign in")));
    }
  }]);

  return SignInForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ })

})
//# sourceMappingURL=signIn.js.5f9f9444926b99e5db9e.hot-update.js.map