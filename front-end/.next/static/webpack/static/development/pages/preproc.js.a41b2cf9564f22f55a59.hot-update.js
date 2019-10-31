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






var _jsxFileName = "/Users/youngjoon/Desktop/CS407/DatApex/front-end/pages/preproc.js";
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
        link = "preProc/OneHotEncoding/" + this.state.paramNum;
      } else if (this.path == "delete-rc") {
        console.log(this.state.selectedOption);

        if (this.state.selectedOption == "row") {
          link = "preProc/delRow/" + this.state.paramNum;
        } else if (this.state.selectedOption == "col") {
          link = "preProc/delCol/" + this.state.paramNum;
        }
      } else if (this.path == "replaceW") {
        link = "preProc/ReplaceW" + this.state.paramNum;
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
        div.innerText = "Please check your input and parameters";
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

      if (this.path == "label") {// List the params of each on of them
      } else if (this.path == "one-hot") {
        // List the params of each on of them
        return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, this.path), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, " Number of Column: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "1,2,3",
          type: "text",
          name: "numCol",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_9__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, "Download me")) : null)), __jsx("main", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, __jsx("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, "name of Column:", __jsx("input", {
          type: "text",
          name: "numCol",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }), __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_9__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, "download me")) : null));
      } else if (this.path == "delete-rc" || this.path == "replaceW") {
        // List the params of each on of them
        return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, this.path), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, __jsx("div", {
          className: "form-check",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, __jsx("label", {
          "class": "form-check-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, __jsx("input", {
          className: "form-check-input",
          type: "radio",
          value: "row",
          checked: this.state.selectedOption === "row",
          onChange: this.handleOptionChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }), "Row")), __jsx("div", {
          className: "form-check",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, __jsx("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, __jsx("input", {
          className: "form-check-input",
          type: "radio",
          value: "col",
          checked: this.state.selectedOption === "col",
          onChange: this.handleOptionChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }), "Col")), __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, " Number of Rows: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "1,2,3",
          type: "text",
          name: "numRow",
          pattern: "[0-9],*",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }))), __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, " Number of Cols: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "1,2,3",
          type: "text",
          name: "numCol",
          pattern: "[0-9],*",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_9__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, __jsx("div", {
          className: "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, "Download me")))) : null))); // } else if (this.path == "replaceW") {
        // List the params of each on of them
      } else if (this.path == "certain") {// List the params of each on of them
      }
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=preproc.js.a41b2cf9564f22f55a59.hot-update.js.map