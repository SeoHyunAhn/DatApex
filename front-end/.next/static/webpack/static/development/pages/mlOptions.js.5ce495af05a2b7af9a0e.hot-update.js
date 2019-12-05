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
  marginBottom: "10px",
  width: 525,
  height: 1000
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Machine Learning Algorithms"), __jsx("hr", {
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
        style: {
          marginBottom: "10px",
          width: 525,
          height: 800
        },
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
          lineNumber: 57
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        style: {
          marginBottom: "10px",
          width: 525,
          height: 700
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Logistic Regression algorithm"), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("img", {
        className: "card-img",
        variant: "top",
        src: "../static/lra.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Explanation: "), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Logistic Regression is a classification machine-learning algorithm used to assign observations to a discrete set of classes (binary or multiple classes). Logistic regression transforms its output using the logistic sigmoid function to return a probability value. Logistic Regression is a predictive analysis algorithm as it is based on the concepts of probability. It uses a more complex cost function than linear regression (the logistic or sigmoid function).", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), "In order to map predicted values to probabilities, we use the Sigmoid function which maps any real value into another value between 0 & 1."), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "mlalgo",
        params: {
          path: "lra"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Go somewhere"))))), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        style: {
          marginBottom: "10px",
          width: 525,
          height: 980
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Support Vector Machine algorithm"), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("img", {
        className: "card-img",
        variant: "top",
        src: "../static/svm.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Explanation: "), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "SVM is a supervised machine learning algorithm which may be used for either classification or regression problems. However, in general, it is used predominantly for classification problems. In this algorithm, we plot each data item as a point in n-dimensional space (n being the number of features) with the value of each feature being the value of a particular coordinate. Subsequently, classification is performed by finding the hyperplane (the equivalent of a line in a 2-dimensional space) that differentiates the two classes well. ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), "Above image shows, Support Vectors are simply the co-ordinates of individual observations. SVM is a frontier which best segregates the two classes."), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "mlalgo",
        params: {
          path: "svm"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Go somewhere"))))), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        style: {
          marginBottom: "10px",
          width: 525,
          height: 980
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Bagging algorithm"), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("img", {
        className: "card-img",
        variant: "top",
        src: "../static/bag.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Explanation: "), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Bagging algorithm is a simple yet powerful ensemble method. An ensemble method is one that combines predictions from multiple machine learning algorithms together to make more accurate predictions than any individual method.", "This method is especially helpful in reducing the variance for algorithms which tend to have really high variance. Bagging involves applying the Bootstrapping procedure to a high-variance machine learning algorithm (typically decision trees).", "Let\u2019s assume we have a sample dataset of 1000 instances & we are using the CART algorithm. Bagging would work as follows:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), "- Create several (e.g. 100) random sub-samples of the dataset with replacement.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), "- Train a CART model on each sample.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), "- Given a new dataset, calculate the average prediction from each model.", "Bagging may be used for either classification or regression problems."), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "mlalgo",
        params: {
          path: "bag"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Go somewhere"))))), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        style: {
          marginBottom: "10px",
          width: 525,
          height: 850
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "K-means Clustering algorithm"), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("img", {
        className: "card-img",
        variant: "top",
        src: "../static/clus.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Explanation: "), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "K-means Clustering is one of the simplest and most popular unsupervised machine learning algorithms. Typically, unsupervised machine learning algorithms make inferences from datasets using only input vectors without referring to known/labelled outcomes.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), "A cluster, simply put, refers to a collection of data points aggregated together because of certain similarities. The \u2018k\u2019 from the name refers to the number of centroids needed in the dataset, and is defined by us. A centroid is the imaginary or real location representing the center of the cluster. The \u2018means\u2019 in the K-Means refers to the averaging of data (i.e. finding the centroid).", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }), "The algorithm starts with a first group of randomly selected centroids that are used as beginning points for every cluster, and then performs iterative calculations to optimize the positions of the centroids. It stops creating or optimizing clusters when:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), "- The centroids have stabilized, i.e. there is no change in their values because the clustering has been successful;", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), "- The defined number of iterations has been reached."), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "mlalgo",
        params: {
          path: "clus"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "Go somewhere"))))), __jsx("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        style: {
          marginBottom: "10px",
          width: 525,
          height: 850
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Decision Tree algorithm"), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx("img", {
        className: "card-img",
        variant: "top",
        src: "../static/tree.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "Explanation: "), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Decision Tree algorithm belongs to the family of supervised machine learning algorithms. Unlike other supervised learning algorithms, this algorithm can be used for solving regression & classification problems too. The general model of Decision Trees algorithm is to create a training model which can be used to predict the class or value of target variables by learning decision rules inferred from the training data.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }), "As the name insinuates, this algorithm uses a tree representation to solve the problem, wherein each internal node corresponds to an attribute while each leaf node corresponds to a class label. A rough outline of the algorithm is as follows:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }), "- Place the best attribute of the dataset at the root of the tree.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }), "- Split the training set into subsets in such a way that each subset contains data with the same value for an attribute.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }), "- Repeat the previous two steps on each subset until leaf nodes are found in all branches of the tree.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), "With decision trees, one of the biggest challenges is to identify which attributes need to be considered as the root node and each level."), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "mlalgo",
        params: {
          path: "tree"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
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
//# sourceMappingURL=mlOptions.js.5ce495af05a2b7af9a0e.hot-update.js.map