webpackHotUpdate("static/development/pages/mlOptions.js",{

/***/ "./pages/mlOptions.js":
/*!****************************!*\
  !*** ./pages/mlOptions.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/seohyun/dataPex/front-end/pages/mlOptions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

 // import Link from 'next/link';


var styleCard = {
  marginBottom: "10px"
};

var MlOptions =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MlOptions, _Component);

  function MlOptions() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MlOptions);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MlOptions).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MlOptions, [{
    key: "render",
    value: function render() {
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "MLOptions"), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), __jsx("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        style: styleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Naive Bayes algorithm"), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("img", {
        className: "card-img",
        variant: "top",
        src: "../static/nba.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Explanation: "), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Na\xEFve Bayes is a classification technique/algorithm based on Bayes\u2019 Theorem with an assumption of independence among the predictors. Loosely translated, this means that a Na\xEFve Bayes classifier assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature. This model is particularly useful for large data sets \u2013 along with simplicity, Na\xEFve Bayes is known to outperform even highly sophisticated classification methods in some cases. ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), "The Na\xEFve Bayes algorithm works by converting the dataset into a frequency table, creating a likelihood table by calculating probabilities & then using the Na\xEFve Bayes equation to calculate the posterior probability for each class. The class with the highest posterior probability is considered the outcome of the prediction. This algorithm is typically used in text classification & with problems having multiple classes."), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "mlalgo",
        params: {
          path: "nba"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Go somewhere"))))), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        style: styleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Logistic Regression algorithm"), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Explanation: "), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Predictive analysis algorithm and based on the concept of probability"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "mlalgo",
        params: {
          path: "lra"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Go somewhere"))))), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        style: styleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Support Vector Machine algorithm"), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("img", {
        className: "card-img",
        variant: "top",
        src: "../static/svm.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Explanation: "), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "SVM is a supervised machine learning algorithm which may be used for either classification or regression problems. However, in general, it is used predominantly for classification problems. In this algorithm, we plot each data item as a point in n-dimensional space (n being the number of features) with the value of each feature being the value of a particular coordinate. Subsequently, classification is performed by finding the hyperplane (the equivalent of a line in a 2-dimensional space) that differentiates the two classes well. ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), "Above image shows, Support Vectors are simply the co-ordinates of individual observations. SVM is a frontier which best segregates the two classes."), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "mlalgo",
        params: {
          path: "svm"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Go somewhere"))))), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        style: styleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Bagging algorithm"), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Explanation: "), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "aka. Bootstrap aggregating"), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Improve the stability and accuracy of machine learning algorithms used in statistical classification and regression."), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "mlalgo",
        params: {
          path: "bag"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Go somewhere"))))), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        style: styleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Clustering algorithm"), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Explanation: "), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Grouping a set of objects in a way that objects in the same group are more similar to each other than to those in other group"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "mlalgo",
        params: {
          path: "clus"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Go somewhere"))))))));
    }
  }]);

  return MlOptions;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MlOptions);

/***/ })

})
//# sourceMappingURL=mlOptions.js.fcfd4cc50492c4800c0c.hot-update.js.map