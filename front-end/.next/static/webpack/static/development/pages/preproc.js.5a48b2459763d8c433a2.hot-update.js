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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/firebase */ "./common/firebase.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-csv */ "./node_modules/react-csv/index.js");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");









var _jsxFileName = "/Users/seohyun/dataPex/front-end/pages/preproc.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;





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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, res, post;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, res = _ref.res;
                post = posts.find(function (post) {
                  return post.path == query.path;
                });
                console.log(post);
                return _context.abrupt("return", {
                  post: post
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUpload", function () {
      var message = _this.state.outputCsv; // console.log(this.state.imgSrc);
      // console.log(message);

      var storage = _common_firebase__WEBPACK_IMPORTED_MODULE_11__["default"].storage().ref();
      var user = _common_firebase__WEBPACK_IMPORTED_MODULE_11__["default"].auth().currentUser.uid;
      var tempDate = new Date();
      var date = tempDate.getFullYear() + " " + (tempDate.getMonth() + 1) + " " + tempDate.getDate() + " " + tempDate.getHours() + ":" + tempDate.getMinutes() + ":" + tempDate.getSeconds();
      var fileName = user + "/" + date + "_Preporcess_data.csv";
      var uploadTastk = storage.child(fileName).putString(message);
      uploadTastk.then(function (response) {
        console.log("file upload success");
      }, function (failedReason) {
        console.log("file upload failed");
      });
    });

    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleOptionChange = _this.handleOptionChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)); // this.csvLink = React.createRef();

    _this.state = {
      outputCsv: "",
      selectedOption: "",
      paramNum: "",
      showResults: false
    };
    _this.path = "";
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, [{
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

      if (this.path == "label") {
        //  selected params of each on of them
        link = "preProc/LabelEncoding/";
      } else if (this.path == "one-hot") {
        link = "preProc/OneHotEncoding/" + this.state.paramNum;
      } else if (this.path == "delete-rc") {
        // console.log(this.state.selectedOption)
        if (this.state.selectedOption == "row") {
          link = "preProc/delRow/" + this.state.paramNum;
        } else if (this.state.selectedOption == "col") {
          link = "preProc/delCol/" + this.state.paramNum;
        }
      } else if (this.path == "replaceW") {
        link = "preProc/ReplaceW" + this.state.paramNum;
      } else if (this.path == "certain") {// selected params of each on of them
      }

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("http://localhost:8000/" + link, formData, {
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
      var post = this.props.post;
      this.path = post.path;
      console.log(this.path);

      if (this.path == "label") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, __jsx("div", {
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
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_13__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, "Download me"), __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, " ", "Save", " "))) : null)));
      } else if (this.path == "one-hot") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, " ", "Number of Column:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
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
            lineNumber: 205
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_13__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, "Download me"), __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, " ", "Save", " "))) : null)));
      } else if (this.path == "delete-rc" || this.path == "replaceW") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }, __jsx("div", {
          className: "form-check",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, __jsx("label", {
          "class": "form-check-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
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
            lineNumber: 256
          },
          __self: this
        }), "Row")), __jsx("div", {
          className: "form-check",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, __jsx("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
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
            lineNumber: 268
          },
          __self: this
        }), "Col")), __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }, " ", "Number of Rows:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
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
            lineNumber: 284
          },
          __self: this
        }))), __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        }, " ", "Number of Cols:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
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
            lineNumber: 300
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313
          },
          __self: this
        }, __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_13__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }, __jsx("div", {
          className: "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324
          },
          __self: this
        }, "Download me"))), __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        }, " ", "Save", " "))) : null))); // } else if (this.path == "replaceW") {
        // List the params of each on of them
      } else if (this.path == "certain") {// List the params of each on of them
      }
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=preproc.js.5a48b2459763d8c433a2.hot-update.js.map