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









var _jsxFileName = "/Users/harsha.valluri/Desktop/cs407/DatApex/front-end/pages/preproc.js";
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
      var date = tempDate.getFullYear() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getDate() + " " + tempDate.getHours() + ":" + tempDate.getMinutes() + ":" + tempDate.getSeconds();
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
      showResults: false,
      changeWord: "",
      toWord: ""
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
        link = "preProc/LabelEncoding/" + this.state.paramNum;
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
        link = "preProc/ReplaceW" + "/" + this.state.paramNum + "/" + this.state.changeWord + "/" + this.state.toWord;
      } else if (this.path == "certain") {
        // selected params of each on of them
        link = "preProc/SelectCertain/" + this.state.paramNum;
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
      console.log(event.target.name);
      var param = event.target.name;

      if (param == "toWord" || param == "changeWord") {
        this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, event.target.name, event.target.value));
      } else {
        this.setState({
          paramNum: event.target.value
        });
      }
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
            lineNumber: 167
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, " ", "Encoding list:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
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
            lineNumber: 179
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_13__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, "Download me"), __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, " ", "Save", " "))) : null)));
      } else if (this.path == "one-hot") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, __jsx("div", {
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
        }, " ", "Number of Column:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
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
            lineNumber: 234
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_13__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, "Download me"), __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, " ", "Save", " "))) : null)));
      } else if (this.path == "replaceW") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        }, " ", "Column number:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "3",
          type: "text",
          name: "numCol",
          pattern: "[0-9],*",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }))), __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          },
          __self: this
        }, " ", "Change from Word:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "Sample word",
          type: "text",
          name: "changeWord",
          pattern: "[0-9],*",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305
          },
          __self: this
        })), __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }, " ", "Change To Word:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "Change to word",
          type: "text",
          name: "toWord",
          pattern: "[0-9],*",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        })))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }, __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_13__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          },
          __self: this
        }, __jsx("div", {
          className: "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          __self: this
        }, "Download me"))), __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        }, " ", "Save", " "))) : null)));
      } else if (this.path == "delete-rc") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 366
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 367
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 370
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371
          },
          __self: this
        }, __jsx("div", {
          className: "form-check",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372
          },
          __self: this
        }, __jsx("label", {
          "class": "form-check-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373
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
            lineNumber: 374
          },
          __self: this
        }), "Row")), __jsx("div", {
          className: "form-check",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 384
          },
          __self: this
        }, __jsx("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385
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
            lineNumber: 386
          },
          __self: this
        }), "Col")), __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397
          },
          __self: this
        }, " ", "Number of Rows:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401
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
            lineNumber: 402
          },
          __self: this
        }))), __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413
          },
          __self: this
        }, " ", "Number of Cols:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
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
            lineNumber: 418
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 431
          },
          __self: this
        }, __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_13__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435
          },
          __self: this
        }, __jsx("div", {
          className: "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          },
          __self: this
        }, "Download me"))), __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446
          },
          __self: this
        }, " ", "Save", " "))) : null))); // } else if (this.path == "replaceW") {
        // List the params of each on of them
      } else if (this.path == "certain") {
        // List the params of each on of them
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 466
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 467
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 472
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 473
          },
          __self: this
        }, " ", "Name of the Column:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 477
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "City, State",
          type: "text",
          name: "numRow",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 487
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 490
          },
          __self: this
        }, __jsx("div", {
          id: "result-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 491
          },
          __self: this
        }), this.state.showResults ? __jsx("div", {
          id: "download-csv",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 493
          },
          __self: this
        }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_13__["CSVLink"], {
          data: this.state.outputCsv,
          filename: "data.csv",
          className: "hidden",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 494
          },
          __self: this
        }, __jsx("div", {
          className: "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 500
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 501
          },
          __self: this
        }, "Download me"))), __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 504
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 505
          },
          __self: this
        }, " ", "Save", " "))) : null)));
      }
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=preproc.js.5ee6339d5fa4678da31c.hot-update.js.map