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
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");






var _jsxFileName = "/Users/harsha.valluri/Desktop/cs407/DatApex/front-end/pages/mlalgo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); // this.fileInput = React.createRef();

    _this.state = {
      imgSrc: ""
    };
    _this.path = "";
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "handleSubmit",
    value: function handleSubmit(filename) {
      var _this2 = this;

      console.log("handling submit");
      var formData = new FormData(); // console.log(this.fileInput.current.files[0]);

      formData.append("file", filename);
      var div = document.getElementById("image-display");
      div.innerHTML = "<Spinner animation='border' role='status'> <span className='sr-only'>Loading...</span></Spinner>";
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("http://localhost:8000/upload/csv/", formData, {
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
      // console.log(this.props.url.asPath.substring(8));
      this.path = this.props.url.asPath.substring(8);

      if (this.path == "nba") {
        backend_url = "http://localhost:8000/dataMining/NaiveBayes/"; // List the params of each on of them
      } else if (this.path == "lra") {
        backend_url = "http://localhost:8000/dataMining/LogisticRegression/"; // List the params of each on of them
      } else if (this.path == "svm") {
        backend_url = "http://localhost:8000/dataMining/SVM/"; // List the params of each on of them
      } else if (this.path == "bag") {
        backend_url = "http://localhost:8000/dataMining/Bagging/"; // List the params of each on of them
      } else if (this.path == "clus") {
        backend_url = "http://localhost:8000/dataMining/Clustering/"; // List the params of each on of them
      } else if (this.path == "tree") {
        backend_url = "http://localhost:8000/dataMining/decisionTree/"; // List the params of each on of them
      }

      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, this.path), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("div", {
        id: "image-display",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), __jsx("img", {
        id: "image-output",
        src: this.state.imgSrc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=mlalgo.js.aa2cdcab5c4bf3830cca.hot-update.js.map