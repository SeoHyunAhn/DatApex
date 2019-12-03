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

      var message = _this.state.imgSrc.substring(22); // console.log(this.state.imgSrc);
      // console.log(message);


      var storage = _common_firebase__WEBPACK_IMPORTED_MODULE_12__["default"].storage().ref();
      var user = _common_firebase__WEBPACK_IMPORTED_MODULE_12__["default"].auth().currentUser.uid;
      var tempDate = new Date();
      var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();
      var imgName = user + "_" + date + "_image.png";
      var uploadTastk = _common_firebase__WEBPACK_IMPORTED_MODULE_12__["default"].storage().ref().child(imgName).putString(message, 'base64', {
        contentType: 'image/png'
      });
      uploadTastk.then(function (response) {
        console.log('image upload success');
      }, function (failedReason) {
        console.log('image upload failed');
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
      k: ""
    };
    _this.path = "";
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
      var formData = new FormData(); // console.log(this.fileInput.current.files[0]);

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
            lineNumber: 157
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        })), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, " Save "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }))));
      } else if (this.path == "lra") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, " Size of Step: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
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
            lineNumber: 191
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, " Lambda: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
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
            lineNumber: 201
          },
          __self: this
        })), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, " ", "Number of Max iteration:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
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
            lineNumber: 216
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, " Save "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }))));
      } else if (this.path == "svm") {
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
            lineNumber: 250
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, " Size of Step: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
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
            lineNumber: 256
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, " Lambda: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
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
            lineNumber: 266
          },
          __self: this
        })), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        }), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          },
          __self: this
        }, " ", "Number of Max iteration:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
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
            lineNumber: 281
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          },
          __self: this
        }, " Save "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305
          },
          __self: this
        })))); // List the params of each on of them
      } else if (this.path == "bag") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        }, " Depth limit: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321
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
            lineNumber: 322
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          },
          __self: this
        }, " ", "Example Limit:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
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
            lineNumber: 335
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          },
          __self: this
        }, " Save "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359
          },
          __self: this
        }))));
      } else if (this.path == "clus") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 367
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 368
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
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          },
          __self: this
        }, " ", "Number of Cluster:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377
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
            lineNumber: 378
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 387
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394
          },
          __self: this
        }, " Save "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          },
          __self: this
        }))));
      } else if (this.path == "tree") {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 411
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413
          },
          __self: this
        }, __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 415
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          },
          __self: this
        }, " Depth limit: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
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
            lineNumber: 418
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426
          },
          __self: this
        }, " ", "Example Limit:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430
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
            lineNumber: 431
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          },
          __self: this
        }))), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          },
          __self: this
        }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
          className: "text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446
          },
          __self: this
        }, __jsx("button", {
          className: "btn btn-secondary btn-sm",
          onClick: this.handleUpload,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 447
          },
          __self: this
        }, " Save "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 454
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 455
          },
          __self: this
        }))));
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        },
        __self: this
      }, post.title), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      })), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, this.state.isImageReady ? __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, __jsx("button", {
        className: "btn btn-secondary btn-sm",
        onClick: this.handleUpload,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, " Save "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null), __jsx("div", {
        id: "image-display",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }), __jsx("img", {
        id: "image-output",
        src: this.state.imgSrc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=mlalgo.js.f96f58bdb4185f0f6618.hot-update.js.map