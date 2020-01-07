webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Loans.js":
/*!*****************************!*\
  !*** ./components/Loans.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "S:\\workspace\\haedream\\front\\components\\Loans.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Loans = function Loans() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      phone01 = _useState2[0],
      setPhone01 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      phone02 = _useState3[0],
      setPhone02 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      phone03 = _useState4[0],
      setPhone03 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      term01 = _useState5[0],
      setTerm01 = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      term02 = _useState6[0],
      setTerm02 = _useState6[1];

  var onSubmit = function onSubmit() {
    var phone = "".concat(phone01, "-").concat(phone02, "-").concat(phone03);
    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:3065/api/loans/', {
      name: name,
      phone: phone
    });
    console.log('대출 신청이 완료되었습니다.');
  };

  var onClick = function onClick() {};

  var onChangeName = function onChangeName(e) {
    setName(e.target.value);
  };

  var onChangePhone01 = function onChangePhone01(e) {
    setPhone01(e.target.value);
  };

  var onChangePhone02 = function onChangePhone02(e) {
    setPhone02(e.target.value);
  };

  var onChangePhone03 = function onChangePhone03(e) {
    setPhone03(e.target.value);
  };

  var onChangeTerm01 = function onChangeTerm01(e) {
    setTerm01(e.target.value);
  };

  var onChangeTerm02 = function onChangeTerm02(e) {
    setTerm02(e.target.value);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    layout: "inline",
    onSubmit: onSubmit,
    style: {
      textAlign: 'center',
      backgroundColor: 'silver',
      paddingTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-name",
    value: name,
    required: true,
    onChange: onChangeName,
    style: {
      width: 100
    },
    placeholder: "\uC774\uB984",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-phone01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-phone01",
    value: phone01,
    required: true,
    onChange: onChangePhone01,
    style: {
      width: 100
    },
    placeholder: "010",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-phone02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-phone02",
    value: phone02,
    required: true,
    onChange: onChangePhone02,
    style: {
      width: 100
    },
    placeholder: "1234",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-phone03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-phone03",
    value: phone03,
    required: true,
    onChange: onChangePhone03,
    style: {
      width: 100
    },
    placeholder: "5678",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\uC0C1\uB2F4\uC2E0\uCCAD\uB9CC\uC73C\uB85C\uB294 \uC2E0\uC6A9\uB3C4\uC5D0 \uC601\uD5A5\uC744 \uB07C\uCE58\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\uBE60\uB978 \uC0C1\uB2F4\uC2E0\uCCAD\uD558\uAE30")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loans);

/***/ })

})
//# sourceMappingURL=index.js.7b5955ed87341471bf81.hot-update.js.map