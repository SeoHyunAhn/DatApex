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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");









var _jsxFileName = "/Users/youngjoon/Desktop/CS407/DatApex/front-end/pages/mlalgo.js";
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(_default, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
        var query, res, post;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).call(this, props)); // alert("ctor : " + this.props.location);

    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.state = {
      imgSrc: "",
      sos: "",
      lambda: "",
      maxit: ""
    };
    _this.path = "";
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, [{
    key: "onChange",
    value: function onChange(event) {
      console.log(event.target.name);
      var param = event.target.name;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
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
        backend_url = "http://localhost:8000/dataMining/Bagging/"; // List the params of each on of them
      } else if (this.path == "clus") {
        backend_url = "http://localhost:8000/dataMining/Clustering/"; // List the params of each on of them
      } else if (this.path == "tree") {
        backend_url = "http://localhost:8000/dataMining/decisionTree/"; // List the params of each on of them
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
          imgSrc: imageOupput
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
        return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        })), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }))));
      } else if (this.path == "lra") {
        return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }), __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, " Size of Step: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
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
            lineNumber: 134
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, " Lambda: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
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
            lineNumber: 144
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, " ", "Number of Max iteration:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
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
            lineNumber: 157
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        })), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        })));
      } else if (this.path == "svm") {
        return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, post.title), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }), __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, __jsx("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, " Size of Step: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
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
            lineNumber: 183
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, " Lambda: "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
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
            lineNumber: 193
          },
          __self: this
        })), __jsx("label", {
          className: "col-sm-2 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, " ", "Number of Max iteration:", " "), __jsx("div", {
          className: "col-sm-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
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
            lineNumber: 206
          },
          __self: this
        }))), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        })), __jsx("div", {
          className: "col-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, __jsx("div", {
          id: "image-display",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }), __jsx("img", {
          id: "image-output",
          src: this.state.imgSrc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }))); // List the params of each on of them
      } else if (this.path == "bag") {
        backend_url = "http://localhost:8000/dataMining/Bagging/"; // List the params of each on of them
      } else if (this.path == "clus") {
        backend_url = "http://localhost:8000/dataMining/Clustering/"; // List the params of each on of them
      } else if (this.path == "tree") {
        backend_url = "http://localhost:8000/dataMining/decisionTree/"; // List the params of each on of them
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, post.title), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      })), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, __jsx("div", {
        id: "image-display",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }), __jsx("img", {
        id: "image-output",
        src: this.state.imgSrc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=mlalgo.js.f204f061dfc8273693a1.hot-update.js.map