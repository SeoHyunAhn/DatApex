webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/user */ "./common/user.js");
/* harmony import */ var _common_firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/firebase */ "./common/firebase.js");







var _jsxFileName = "/Users/youngjoon/Desktop/CS407/DatApex/front-end/components/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var styleLogo = {
  height: '500px',
  width: '700px'
};

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "loginWithGoogle", function () {
      var provider = new _common_firebase__WEBPACK_IMPORTED_MODULE_10__["default"].auth.GoogleAuthProvider();
      _common_firebase__WEBPACK_IMPORTED_MODULE_10__["default"].auth().signInWithPopup(provider).then(function (res) {
        console.log("res.credential : ", res.credential);
        console.log("res.user : ", res.user);
        console.log("res.user.displayName : ", res.user.displayName);
        console.log("res.user.photoURL : ", res.user.photoURL);
        console.log("res.user.email : ", res.user.email);
        console.log("res.user.uid : ", res.user.uid);
        var token = res.credential.accessToken;
        var name = res.user.displayName;
        var email = res.user.email;
        var avatar = res.user.photoURL;
        var uid = res.user.uid;
        _common_user__WEBPACK_IMPORTED_MODULE_9__["default"].user = {
          token: token,
          uid: uid,
          name: name,
          email: email,
          avatar: avatar
        };
        console.log(_common_user__WEBPACK_IMPORTED_MODULE_9__["default"].user);
      })["catch"](function (err) {
        alert('Login failed : ', err.message);
        console.log(err);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        className: "col-12 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("img", {
        src: "../static/Logo.png",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/signIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Sign In with Personal Account")), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx("button", {
        className: "btn btn-primary",
        onClick: this.loginWithGoogle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Sign In with Google Account"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/signUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Sign Up")))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=index.js.fbb7f65e1182ebd4c863.hot-update.js.map