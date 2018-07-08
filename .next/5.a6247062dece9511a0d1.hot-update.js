webpackHotUpdate(5,{

/***/ "./components/FaqHeader.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\Users\\Jin\\hello-next\\homework\\components\\FaqHeader.js: this is a reserved word (27:21)\n\n  25 |         if(this.state.category == '북클럽')\n  26 |         {   \n> 27 |             return ({this.state.qnadata.map((step,i) =>{\n     |                      ^\n  28 |                 <div>{i}</div>\n  29 |             })});\n  30 |            \n    at _class.raise (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:778:15)\n    at _class.checkReservedWord (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:3839:12)\n    at _class.parseObjectProperty (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:3592:12)\n    at _class.parseObjPropValue (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:3612:99)\n    at _class.parseObj (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:3523:12)\n    at _class.parseExprAtom (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:3091:21)\n    at _class.parseExprAtom (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprAtom (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprAtom (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprSubscripts (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:2725:21)\n    at _class.parseMaybeUnary (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:2704:21)\n    at _class.parseExprOps (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:2616:21)\n    at _class.parseMaybeConditional (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:2588:21)\n    at _class.parseMaybeAssign (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:2546:21)\n    at _class.parseParenAndDistinguishExpression (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:3271:28)\n    at _class.parseExprAtom (C:\\Users\\Jin\\hello-next\\homework\\node_modules\\babylon\\lib\\index.js:3081:21)");

/***/ }),

/***/ "./components/Question.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "C:\\Users\\Jin\\hello-next\\homework\\components\\Question.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Example =
/*#__PURE__*/
function (_Component) {
  _inherits(Example, _Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      collapse: false
    };
    return _this;
  }

  _createClass(Example, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        collapse: !this.state.collapse
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Button */], {
        onClick: this.toggle,
        style: {
          marginBottom: '1rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Q [", this.props.category, "] ", this.props.question), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Collapse */], {
        isOpen: this.state.collapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Card */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["c" /* CardBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.props.answer))));
    }
  }]);

  return Example;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (Example);

/***/ }),

/***/ "./pages/cs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Question__ = __webpack_require__("./components/Question.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_FaqHeader__ = __webpack_require__("./components/FaqHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_FaqHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_FaqHeader__);
var _jsxFileName = "C:\\Users\\Jin\\hello-next\\homework\\pages\\cs.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_FaqHeader__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/cs")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.a6247062dece9511a0d1.hot-update.js.map