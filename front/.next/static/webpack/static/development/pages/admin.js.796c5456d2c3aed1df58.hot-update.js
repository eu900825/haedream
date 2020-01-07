webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "S:\\workspace\\haedream\\front\\pages\\admin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var admin = function admin() {
  var data = [];
  data = axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:3065/api/agari/');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    style: {
      margin: '16px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\uC2E0\uCCAD\uC790 \uBAA9\uB85D"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("li", {
    key: data.phone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, data.name))));
};

/* harmony default export */ __webpack_exports__["default"] = (admin);

/***/ })

})
//# sourceMappingURL=admin.js.796c5456d2c3aed1df58.hot-update.js.map