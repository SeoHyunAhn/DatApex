webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/user */ "./common/user.js");
/* harmony import */ var _common_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/firebase */ "./common/firebase.js");
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/main */ "./pages/main.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");







var _jsxFileName = "/Users/youngjoon/Desktop/CS407/DatApex/front-end/components/layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


 // import source from './constants';
// import Link from "next/link";






var styleTextWhite = {
  color: "white"
};
var stylePaddingRight = {
  paddingRight: '10px'
};
var styleName = {
  marginRight: "20px"
};
var source = [{
  path: "nba",
  title: "Naive Bayes algorithm",
  from: "mlalgo"
}, {
  path: "lra",
  title: "Logistic Regression algorithm",
  from: "mlalgo"
}, {
  path: "svm",
  title: "Support Vector Machine algorithm",
  from: "mlalgo"
}, {
  path: "bag",
  title: "Bagging algorithm",
  from: "mlalgo"
}, {
  path: "clus",
  title: "Clustering algorithm",
  from: "mlalgo"
}, {
  path: "tree",
  title: "Decision tree algorithm",
  from: "mlalgo"
}, {
  path: "label",
  title: "Label Encoding",
  from: "preproc"
}, {
  path: "one-hot",
  title: "One-Hot Encoding",
  from: "preproc"
}, {
  path: "delete-rc",
  title: "Delete Row/Column",
  from: "preproc"
}, {
  path: "replaceW",
  title: "Replace W",
  from: "preproc"
}, {
  path: "certain",
  title: "Select Certain",
  from: "preproc"
}];

var resultRenderer = function resultRenderer(_ref) {
  var title = _ref.title;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Label"], {
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  });
};

resultRenderer.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
}; // const initialState = { isLoading: false, results: [], value: "" };

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "user", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "namesList", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "logout", function () {
      _common_firebase__WEBPACK_IMPORTED_MODULE_11__["default"].auth().signOut();
      window.location = "http://localhost:3000/";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleResultSelect", function (e, _ref2) {
      var result = _ref2.result;
      return _this.setState({
        value: result.title
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchChange", function (e, _ref3) {
      var value = _ref3.value;

      _this.setState({
        isLoading: true,
        value: value
      });

      setTimeout(function () {
        if (_this.state.value.length < 1) return _this.setState({
          isLoading: false,
          bool: [],
          results: [""],
          value: ""
        });
        var t = source.filter(function (p) {
          return p.title.toLowerCase().includes(_this.state.value.toLowerCase());
        });

        _this.setState({
          isLoading: false,
          results: t,
          bool: true
        });

        var s = _this.state.results.map(function (name) {
          console.log(name);
          return __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
            route: name.from,
            params: {
              path: name.path
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, __jsx("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, name.title)), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }));
        });

        _this.setState({
          bool: s
        });
      }, 300);
    });

    _this.state = {
      user: _this.props.user,
      isLoading: false,
      results: [""],
      bool: [],
      value: ""
    };
    _this.user = _this.state.user;
    _this.namesList = "";
    console.log(_this.user);
    _this.logout = _this.logout.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          value = _this$state.value,
          results = _this$state.results;
      var namesList = this.namesList;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-brand",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "DatApex"), __jsx("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      })), _common_firebase__WEBPACK_IMPORTED_MODULE_11__["default"].auth().currentUser !== null && __jsx("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("ul", {
        className: "navbar-nav mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link dropdown-toggle",
        href: "#",
        id: "navbarDropdown",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Pre Process Data"), __jsx("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "preproc",
        params: {
          path: 'labsel'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Labsel Encoding")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "preproc",
        params: {
          path: 'one-hot'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "One-hot Encoding")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "preproc",
        params: {
          path: 'delete-rc'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Delete Row/Column")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "preproc",
        params: {
          path: 'replaceW'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Replace W")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "preproc",
        params: {
          path: 'certain'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Select Certain")))), __jsx("li", {
        className: "nav-item dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link dropdown-toggle",
        href: "#",
        id: "navbarDropdown",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "ML Algorithm"), __jsx("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "mlalgo",
        params: {
          path: 'nba'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Naive Bayes algorithm")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "mlalgo",
        params: {
          path: 'lra'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Logistic Regression algorithm")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "mlalgo",
        params: {
          path: 'svm'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Support Vector Machine algorithm")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "mlalgo",
        params: {
          path: 'bag'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Bagging algorithm")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "mlalgo",
        params: {
          path: 'clus'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "Clustering algorithm"))))), __jsx("div", {
        className: "form-inline my-2 my-lg-0",
        style: styleTextWhite,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, __jsx("div", {
        style: stylePaddingRight,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, __jsx("input", {
        className: "form-control mr-sm-2",
        type: "search",
        placeholder: "Search",
        "aria-label": "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), __jsx("button", {
        className: "btn btn-outline-light my-2 my-sm-0",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Search")), __jsx("div", {
        className: "btn-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx("button", {
        type: "button",
        className: "btn btn-secondary",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Hi ", _common_firebase__WEBPACK_IMPORTED_MODULE_11__["default"].auth().currentUser.displayName, " "), __jsx("button", {
        type: "button",
        className: "btn btn-secondary dropdown-toggle dropdown-toggle-split",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Toggle Dropdown")), __jsx("div", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        href: "/profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "Profile")), __jsx("div", {
        className: "dropdown-divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }), __jsx("button", {
        className: "dropdown-item",
        onClick: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "Logout")))))), __jsx("div", {
        className: "container mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, __jsx("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, this.props.children))));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.e5efb097bd9b35c5ff4a.hot-update.js.map