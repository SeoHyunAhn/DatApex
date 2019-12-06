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
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _common_firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/firebase */ "./common/firebase.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");









var _jsxFileName = "/Users/seohyun/dataPex/front-end/pages/mlalgo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;




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
}, {
  path: "tree",
  title: "Decision tree algorithm"
}, {
  path: "forest",
  title: "Random Forest algorithm"
}];

var backend_url = "";

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

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).call(this, props)); // alert("ctor : " + this.props.location);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUpload", function () {
      var imgSrc = _this.state.imgSrc;

      var message = _this.state.imgSrc.substring(22);

      var storage = _common_firebase__WEBPACK_IMPORTED_MODULE_12__["default"].storage().ref();
      var user = _common_firebase__WEBPACK_IMPORTED_MODULE_12__["default"].auth().currentUser.uid;
      var tempDate = new Date();
      var date = tempDate.getFullYear() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getDate() + " " + tempDate.getHours() + ":" + tempDate.getMinutes() + ":" + tempDate.getSeconds();
      var imgName = user + "/" + date + "_ML_image.png";
      var uploadTastk = _common_firebase__WEBPACK_IMPORTED_MODULE_12__["default"].storage().ref().child(imgName).putString(message, "base64", {
        contentType: "image/png"
      });
      uploadTastk.then(function (response) {
        console.log("image upload success");
        var saveButton = document.getElementById("save-button");
        saveButton.innerText = "ALL SAVED!";
      }, function (failedReason) {
        console.log("image upload failed");
      });
    });

    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.state = {
      imgSrc: "",
      url: "",
      isImageReady: false,
      sos: "",
      lambda: "",
      maxit: "",
      depthlimit: "",
      exlimit: "",
      k: "",
      numTree: ""
    };
    _this.path = "";
    _this.fileInput = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, [{
    key: "onChange",
    value: function onChange(event) {
      console.log(event.target.name);
      var param = event.target.name;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(filename) {
      var _this2 = this;

      console.log("handling submit");
      var formData = new FormData(); // console.log(this.fileInput.current.files);
      // this.props.fileInput = this.fileInput.current.files[0]
      // this.props.onSubmit(this.fileInput.current.files[0]);
      // console.log(this.fileInput.current.files[0]);

      formData.append("file", filename);
      var div = document.getElementById("image-display");
      div.innerHTML = "<Spinner animation='border' role='status'> <span className='sr-only'>Loading...</span></Spinner>";

      if (this.path == "nba") {
        backend_url = "http://localhost:8000/dataMining/NaiveBayes/";
      } else if (this.path == "lra") {
        backend_url = "http://localhost:8000/dataMining/LogisticRegression/";
        backend_url = backend_url + this.state.sos + "/" + this.state.lambda + "/" + this.state.maxit;
        console.log(backend_url);
      } else if (this.path == "svm") {
        backend_url = "http://localhost:8000/dataMining/SVM/";
        backend_url = backend_url + this.state.sos + "/" + this.state.lambda + "/" + this.state.maxit;
        console.log(backend_url);
      } else if (this.path == "bag") {
        backend_url = "http://localhost:8000/dataMining/Bagging/";
        backend_url = backend_url + this.state.depthlimit + "/" + this.state.exlimit;
        console.log(backend_url);
      } else if (this.path == "clus") {
        backend_url = "http://localhost:8000/dataMining/Clustering/";
        backend_url = backend_url + this.state.k;
        console.log(backend_url);
      } else if (this.path == "tree") {
        backend_url = "http://localhost:8000/dataMining/DecisionTree/";
        backend_url = backend_url + this.state.depthlimit + "/" + this.state.exlimit;
        console.log(backend_url);
      } else if (this.path == "forest") {
        backend_url = "http://localhost:8000/dataMining/RandomForest/";
        backend_url = backend_url + this.state.depthlimit + "/" + this.state.exlimit + "/" + this.state.numTree;
        console.log(backend_url);
        formData.append("file", this.fileInput.current.files[0]);
        console.log(this.fileInput.current.files[0]);
      }

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(backend_url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (e) {
        // console.log(e);
        var div = document.getElementById("image-display");
        div.innerText = "";
        var imageOupput = "data:image/png;base64," + e.data;

        _this2.setState({
          imgSrc: imageOupput,
          isImageReady: true
        });
      })["catch"](function (err) {
        console.log(err);
        var div = document.getElementById("image-display");
        div.innerText = "Please check your input and parameters";
      });
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.props.path);
      // this.path = this.props.url.asPath.substring(8);
      // const post = posts.find(p => p.path == this.path);
      var post = this.props.post; // console.log(post)

      this.path = post.path;

      if (this.path == "nba") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        })), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, __jsx("button", {
          id: "save-button",
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, " ", "Save", " "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }))));
      } else if (this.path == "lra") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, " ", "Size of Step:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "1,2,3",
          type: "text",
          name: "sos",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, " Lambda: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "1,2,3",
          type: "text",
          name: "lambda",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        })), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, " ", "Number of Max iteration:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "1,2,3",
          type: "text",
          name: "maxit",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, __jsx("button", {
          id: "save-button",
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, " ", "Save", " "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }))));
      } else if (this.path == "svm") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }, " ", "Size of Step:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "1,2,3",
          type: "text",
          name: "sos",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        }, " Lambda: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "1,2,3",
          type: "text",
          name: "lambda",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          },
          __self: this
        })), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, " ", "Number of Max iteration:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "1,2,3",
          type: "text",
          name: "maxit",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }, __jsx("button", {
          id: "save-button",
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        }, " ", "Save", " "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          },
          __self: this
        })))); // List the params of each on of them
      } else if (this.path == "bag") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 364
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 366
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 367
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 368
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369
          },
          __self: this
        }, " ", "Depth limit:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "3",
          type: "text",
          name: "depthlimit",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 382
          },
          __self: this
        }, " ", "Example Limit:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 386
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "3",
          type: "text",
          name: "exlimit",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 387
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          },
          __self: this
        }, __jsx("button", {
          id: "save-button",
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 403
          },
          __self: this
        }, " ", "Save", " "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
          },
          __self: this
        }))));
      } else if (this.path == "clus") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 431
          },
          __self: this
        }, " ", "Number of Cluster:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "3",
          type: "text",
          name: "k",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 436
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 448
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 451
          },
          __self: this
        }, __jsx("button", {
          id: "save-button",
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 452
          },
          __self: this
        }, " ", "Save", " "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 465
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 466
          },
          __self: this
        }))));
      } else if (this.path == "tree") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 474
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 476
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 477
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 479
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 480
          },
          __self: this
        }, " ", "Depth limit:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 484
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "3",
          type: "text",
          name: "depthlimit",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 485
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 493
          },
          __self: this
        }, " ", "Example Limit:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 497
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "3",
          type: "text",
          name: "exlimit",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 498
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 507
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 510
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 513
          },
          __self: this
        }, __jsx("button", {
          id: "save-button",
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 514
          },
          __self: this
        }, " ", "Save", " "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 527
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 528
          },
          __self: this
        }))));
      } else if (this.path == "forest") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 536
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 537
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 538
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 539
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 540
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 541
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 542
          },
          __self: this
        }, " ", "Depth limit:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 546
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "3",
          type: "text",
          name: "depthlimit",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 547
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 555
          },
          __self: this
        }, " ", "Example Limit:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 559
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "3",
          type: "text",
          name: "exlimit",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 560
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 568
          },
          __self: this
        }, " ", "Number of Tree:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 572
          },
          __self: this
        }, __jsx("input", {
          className: "form-control",
          placeholder: "3",
          type: "text",
          name: "numTree",
          onChange: this.onChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 573
          },
          __self: this
        }))), __jsx("div", {
          "class": "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 582
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 583
          },
          __self: this
        }, "Training File:", " "), __jsx("div", {
          className: "col-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 584
          },
          __self: this
        }, __jsx("input", {
          type: "file",
          name: "csv_file",
          id: "csv_file",
          required: "True",
          className: "form-control-file",
          ref: this.fileInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 585
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 595
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 601
          },
          __self: this
        }, __jsx("button", {
          id: "save-button",
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 602
          },
          __self: this
        }, " ", "Save", " "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 615
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 616
          },
          __self: this
        }))));
      } // return (
      //   <>
      //     <h1>{post.title}</h1>
      //     <hr></hr>
      //     <div className="row">
      //       <div className="col-6">
      //         <UploadCSV onSubmit={this.handleSubmit}></UploadCSV>
      //       </div>
      //       <div className="col-6">
      //         {this.state.isImageReady ? (
      //           <>
      //             <div className="text-right">
      //               <button
      //                 id="save-button"
      //                 className="btn btn-secondary btn-sm"
      //                 onClick={this.handleUpload}
      //               >
      //                 {" "}
      //                 Save{" "}
      //               </button>
      //             </div>
      //           </>
      //         ) : (
      //           <></>
      //         )}
      //         <div id="image-display"></div>
      //         <img id="image-output" src={this.state.imgSrc}></img>
      //       </div>
      //     </div>
      //   </>
      // );

    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=mlalgo.js.91588377f6d24e010b1e.hot-update.js.map