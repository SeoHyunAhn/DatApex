webpackHotUpdate("static/development/pages/mlalgo.js",{

/***/ "./pages/mlalgo.js":
/*!*************************!*\
  !*** ./pages/mlalgo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");








var _jsxFileName = "/Users/seohyun/dataPex/front-end/pages/mlalgo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var posts = [{
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
}];


var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "refreshList", function () {
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://localhost:8000/api/todos/").then(function (res) {
        return _this.setState({
          todoList: res.data
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "displayCompleted", function (status) {
      if (status) {
        return _this.setState({
          viewCompleted: true
        });
      }

      return _this.setState({
        viewCompleted: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderTabList", function () {
      return __jsx("div", {
        className: "my-5 tab-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("span", {
        onClick: function onClick() {
          return _this.displayCompleted(true);
        },
        className: _this.state.viewCompleted ? "active" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "complete"), __jsx("span", {
        onClick: function onClick() {
          return _this.displayCompleted(false);
        },
        className: _this.state.viewCompleted ? "" : "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Incomplete"));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderItems", function () {
      var viewCompleted = _this.state.viewCompleted;

      var newItems = _this.state.todoList.filter(function (item) {
        return item.completed === viewCompleted;
      });

      return newItems.map(function (item) {
        return __jsx("li", {
          key: item.id,
          className: "list-group-item d-flex justify-content-between align-items-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, __jsx("span", {
          className: "todo-title mr-2 ".concat(_this.state.viewCompleted ? "completed-todo" : ""),
          title: item.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, item.title), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("button", {
          onClick: function onClick() {
            return _this.editItem(item);
          },
          className: "btn btn-secondary mr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, " ", "Edit", " "), __jsx("button", {
          onClick: function onClick() {
            return _this.handleDelete(item);
          },
          className: "btn btn-danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "Delete", " ")));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggle", function () {
      _this.setState({
        modal: !_this.state.modal
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (item) {
      _this.toggle();

      if (item.id) {
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.put("http://localhost:8000/api/todos/".concat(item.id, "/"), item).then(function (res) {
          return _this.refreshList();
        });
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("http://localhost:8000/api/todos/", item).then(function (res) {
        return _this.refreshList();
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDelete", function (item) {
      axios__WEBPACK_IMPORTED_MODULE_9___default.a["delete"]("http://localhost:8000/api/todos/".concat(item.id)).then(function (res) {
        return _this.refreshList();
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "createItem", function () {
      var item = {
        title: "",
        description: "",
        completed: false
      };

      _this.setState({
        activeItem: item,
        modal: !_this.state.modal
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "editItem", function (item) {
      _this.setState({
        activeItem: item,
        modal: !_this.state.modal
      });
    });

    _this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshList();
    }
  }, {
    key: "submitForm",
    value: function submitForm(data) {
      var _this2 = this;

      fetch('/api/contact', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
      }).then(function (res) {
        res.status === 200 ? _this2.setState({
          submitted: true
        }) : '';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("main", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("h1", {
        className: "text-white text-uppercase text-center my-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Todo app"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, function (_ref) {
        var validateForm = _ref.validateForm,
            getPayload = _ref.getPayload;
        return __jsx("form", {
          className: "board-form",
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            validateForm() && _this3.submitForm(getPayload());
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, __jsx("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, "Contact"), __jsx("div", {
          className: "f fw grid-row--s",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, __jsx("div", {
          className: "mb1 pb05",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
          name: "name",
          label: "Name",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        })), __jsx("div", {
          className: "mb1 pb05",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
          name: "email",
          label: "Email",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }))), __jsx(ProgressButton, {
          className: "button green",
          formNoValidate: true,
          inProgress: _this3.state.submitting,
          inProgressText: "Submitting",
          isDone: _this3.state.submitted,
          isDoneText: "Submitted",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, "Submit Form"));
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=mlalgo.js.44a525f8b4b0d4f9f23e.hot-update.js.map