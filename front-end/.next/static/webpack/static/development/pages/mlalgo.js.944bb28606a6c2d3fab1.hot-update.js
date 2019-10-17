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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");







var _jsxFileName = "/Users/seohyun/dataPex/front-end/pages/mlalgo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




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
}];


var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "refreshList", function () {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:8000/api/todos/").then(function (res) {
        return _this.setState({
          todoList: res.data
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "createItem", function () {
      var item = {
        title: "",
        description: "",
        completed: false
      };

      _this.setState({
        activeItem: item,
        modal: !_this.state.modal
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "editItem", function (item) {
      _this.setState({
        activeItem: item,
        modal: !_this.state.modal
      });
    });

    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.fileInput = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.state = {
      imgSrc: "1"
    };
    return _this;
  } // hexToBase64(str) {
  //   return 
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      // this.toggle();
      event.preventDefault();
      console.log("handling submit");
      console.log(this.fileInput.current.files);
      var formData = new FormData(); // var imagefile = this.fileInput.current.files;

      console.log(this.fileInput.current.files[0]);
      formData.append("file", this.fileInput.current.files[0]);
      var display = document.querySelector(".image-display");
      var output = document.getElementById("image-output"); // var imageOupput;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://localhost:8000/upload/csv/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        return _this2.setState({
          imgSrc: res.data
        });
      }) // .then(function(e) {
      //   console.log(e);
      //   // var data = [];
      //   // data.push(e.data)
      //   self.setState({imgSrc: e.data});
      //   // display.innerHTML = e.data.forms[0].name;
      //   // output.src = "{require('"+e.data+"')}";
      //   // console.log(e.data);
      //   // var img = new Image();
      //   // img.onload = function() {
      //   //   myCanvasContext.drawImage(img, 0, 0);
      //   // };
      //   // img.src = e.data;
      //   // imageOupput = "data:image/png;base64, " + e.data;
      //   // console.log(img);
      //   // var node = document.createElement("img");
      //   // // var t = btoa(String.fromCharCode.apply(null, e.data.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
      //   // // node.src = 'data:image/jpeg;base64,' + t;
      //   // node.src = Buffer.from(e.data, 'binary').toString('base64');
      //   // document.getElementById("image").appendChild(node);
      // })
      ["catch"](function (err) {
        return console.log(err);
      });
      console.log(this.state.imgSrc); // if (item.id) {
      //   axios
      //     .put(`http://localhost:8000/api/todos/${item.id}/`, item)
      //     .then(res => this.refreshList());
      //   return;
      // }
      // axios
      // .post("http://localhost:8000/upload/csv/", this.fileInput.current.files)
      // .then(res => this.refreshList());
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("main", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("h1", {
        className: "text-white text-uppercase text-center my-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Todo app"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        enctype: "multipart/form-data",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("label", {
        "for": "name" // class="col-md-3 col-sm-3 col-xs-12 control-label"
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "File:", " "), __jsx("div", {
        "class": "col-md-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("input", {
        type: "file",
        name: "csv_file",
        id: "csv_file",
        required: "True",
        "class": "form-control",
        ref: this.fileInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }))), __jsx("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }))), __jsx("div", {
        id: "image-display",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, __jsx("img", {
        id: "image-output",
        src: this.state.imagesrc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=mlalgo.js.944bb28606a6c2d3fab1.hot-update.js.map