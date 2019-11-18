webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/user */ "./common/user.js");
/* harmony import */ var _common_firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/firebase */ "./common/firebase.js");
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/main */ "./pages/main.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");








var _jsxFileName = "/Users/seohyun/dataPex/front-end/components/layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


 // import source from './constants';
// import Link from "next/link";






var styleTextWhite = {
  color: "white"
};
var styleName = {
  marginRight: "20px"
};
var source = [{
  path: "nba",
  title: "Naive Bayes algorithm"
}, {
  path: "lra",
  title: "Logistic Regression algorithm"
}, {
  path: "svm",
  title: "Support Vector Machine algorithm"
}, {
  path: "bag",
  title: "Bagging algorithm"
}, {
  path: "clus",
  title: "Clustering algorithm"
}, {
  path: "tree",
  title: "Decision tree algorithm"
}, {
  path: "label",
  title: "Label Encoding"
}, {
  path: "one-hot",
  title: "One-Hot Encoding"
}, {
  path: "delete-rc",
  title: "Delete Row/Column"
}, {
  path: "replaceW",
  title: "Replace W"
}, {
  path: "certain",
  title: "Select Certain"
}];

var resultRenderer = function resultRenderer(_ref) {
  var title = _ref.title;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Label"], {
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  });
};

resultRenderer.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
}; // const initialState = { isLoading: false, results: [], value: "" };

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "user", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "namesList", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "logout", function () {
      _common_firebase__WEBPACK_IMPORTED_MODULE_12__["default"].auth().signOut();
      window.location = "http://localhost:3000/";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleResultSelect", function (e, _ref2) {
      var result = _ref2.result;
      return _this.setState({
        value: result.title
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSearchChange", function (e, _ref3) {
      var value = _ref3.value;

      _this.setState({
        isLoading: true,
        value: value
      });

      setTimeout(function () {
        if (_this.state.value.length < 1) return _this.setState({
          isLoading: false,
          results: [""],
          value: ""
        });
        console.log("msoueoq");
        console.log(source);
        console.log(_this.state.value);
        var t = source.filter(function (p) {
          return p.title.includes(_this.state.value);
        });
        console.log(t);

        _this.setState({
          isLoading: false,
          results: t
        });
      }, 300);
      _this.namesList = _this.state.results.map(function (name) {
        console.log(name);
        return __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
          route: "preproc",
          params: {
            path: name.path
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("a", {
          className: "dropdown-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, "name.title"));
      });
      console.log(namesList);
    });

    _this.state = {
      user: _this.props.user,
      isLoading: false,
      results: [""],
      value: ""
    };
    _this.user = _this.state.user;
    _this.namesList = "";
    console.log(_this.user);
    _this.logout = _this.logout.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          value = _this$state.value,
          results = _this$state.results;
      var namesList = this.namesList;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-brand",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
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
          lineNumber: 110
        },
        __self: this
      }, __jsx("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })), __jsx("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("ul", {
        className: "navbar-nav mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
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
          lineNumber: 125
        },
        __self: this
      }, "Pre Process Data"), __jsx("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "preproc",
        params: {
          path: "label"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Labsel Encoding")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "preproc",
        params: {
          path: "one-hot"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "One-hot Encoding")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "preproc",
        params: {
          path: "delete-rc"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Delete Row/Column")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "preproc",
        params: {
          path: "replaceW"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Replace W")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "preproc",
        params: {
          path: "certain"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Select Certain")))), __jsx("li", {
        className: "nav-item dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
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
          lineNumber: 158
        },
        __self: this
      }, "ML Algorithm"), __jsx("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "mlalgo",
        params: {
          path: "nba"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Naive Bayes algorithm")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "mlalgo",
        params: {
          path: "lra"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Logistic Regression algorithm")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "mlalgo",
        params: {
          path: "svm"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Support Vector Machine algorithm")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "mlalgo",
        params: {
          path: "bag"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Bagging algorithm")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        route: "mlalgo",
        params: {
          path: "clus"
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
      }, "Clustering algorithm")))), __jsx("li", {
        className: "nav-item dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
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
          lineNumber: 194
        },
        __self: this
      }, "Searchs"), __jsx("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Search"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        loading: isLoading,
        onResultSelect: this.handleResultSelect,
        onSearchChange: lodash__WEBPACK_IMPORTED_MODULE_10___default.a.debounce(this.handleSearchChange, 500, {
          leading: true
        }),
        results: results,
        value: value,
        resultRenderer: resultRenderer
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      })), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, namesList)))), __jsx("div", {
        className: "form-inline my-2 my-lg-0",
        style: styleTextWhite,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, this.state.user !== null && __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("button", {
        className: "btn btn-secondary",
        onClick: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, " ", "Logout", " "))))), __jsx("div", {
        className: "container mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, __jsx("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, this.props.children))));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.f8998cda0054d467e0ec.hot-update.js.map