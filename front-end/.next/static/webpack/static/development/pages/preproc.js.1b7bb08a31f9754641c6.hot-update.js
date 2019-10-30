webpackHotUpdate("static/development/pages/preproc.js",{

/***/ "./pages/preproc.js":
/*!**************************!*\
  !*** ./pages/preproc.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-csv */ "./node_modules/react-csv/index.js");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");






var _jsxFileName = "/Users/seohyun/dataPex/front-end/pages/preproc.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




 // import { Components } from "@reactioncommerce/reaction-components";

var posts = [{
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


var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleOptionChange = _this.handleOptionChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); // this.csvLink = React.createRef();

    _this.state = {
      outputCsv: "",
      selectedOption: "",
      paramNum: "",
      showResults: false
    };
    _this.path = "";
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "handleSubmit",
    value: function handleSubmit(filename) {
      var _this2 = this;

      event.preventDefault();
      var formData = new FormData(); // console.log(this.fileInput.current.files[0]);

      formData.append("file", filename);
      var div = document.getElementById("result-display");
      div.innerHTML = "<Spinner animation='border' role='status'> <span className='sr-only'>Loading...</span></Spinner>";
      var link = "";
      console.log(this.state.selectedOption);

      if (this.path == "label") {//  selected params of each on of them
      } else if (this.path == "one-hot") {
        // selected  params of each on of them
        link = "preProc/OneHotEncoding/" + this.state.paramNum;
      } else if (this.path == "delete-rc") {
        if (this.state.selectedOption == "row") {
          link = "preProc/delRow/" + this.state.paramNum;
        } else if (this.state.selectedOption == "col") {
          link = "preProc/delCol/" + this.state.paramNum;
        }
      } else if (this.path == "replaceW") {
        link = "preProc/ReplaceW" + this.state.paramNum; // selected params of each on of them
      } else if (this.path == "certain") {// selected params of each on of them
      }

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("http://localhost:8000/" + link, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (e) {
        console.log(e);
        console.log(e.data);

        _this2.setState({
          outputCsv: e.data,
          showResults: true
        });

        div.innerHTML = "";
      })["catch"](function (err) {
        console.log(err);
        var div = document.getElementById("result-display");
        div.innerText = "Please provide a valid csv file";
      });
    }
  }, {
    key: "handleOptionChange",
    value: function handleOptionChange(changeEvent) {
      console.log(changeEvent.target);
      this.setState({
        selectedOption: changeEvent.target.value
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      console.log(event.target);
      this.setState({
        paramNum: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.props.url.asPath.substring(9));
      this.path = this.props.url.asPath.substring(9);
      var params = [];

      if (this.path == "label") {// List the params of each on of them
      } else if (this.path == "one-hot") {
        // List the params of each on of them
        return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, __jsx("main", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, __jsx("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "name of Column:", __jsx("input", {
          type: "text",
          name: "numCol",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }), __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_9__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, "download me")) : null));
      } else if (this.path == "delete-rc" || this.path == "replaceW") {
        // List the params of each on of them
        return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, __jsx("main", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, __jsx("div", {
          className: "radio",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, __jsx("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, __jsx("input", {
          type: "radio",
          value: "row",
          checked: this.state.selectedOption === "row",
          onChange: this.handleOptionChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }), "row"), __jsx("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, __jsx("input", {
          type: "radio",
          value: "col",
          checked: this.state.selectedOption === "col",
          onChange: this.handleOptionChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }), "col"), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }), __jsx("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, "number of rows:", __jsx("input", {
          type: "text",
          name: "numRow",
          pattern: "[0-9],*",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        })), __jsx("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, "number of col:", __jsx("input", {
          type: "text",
          name: "numCol",
          pattern: "[0-9],*",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }), __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_9__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, "download me")) : null)); // } else if (this.path == "replaceW") {
        // List the params of each on of them
      } else if (this.path == "certain") {// List the params of each on of them
      }
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=preproc.js.1b7bb08a31f9754641c6.hot-update.js.map