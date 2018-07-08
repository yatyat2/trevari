module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FaqHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return faqheader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Question__ = __webpack_require__("./components/Question.js");
var _jsxFileName = "C:\\Users\\Jin\\hello-next\\homework\\components\\FaqHeader.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var faqheader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(faqheader, _React$Component);

  function faqheader(props) {
    var _this;

    _classCallCheck(this, faqheader);

    _this = _possibleConstructorReturn(this, (faqheader.__proto__ || Object.getPrototypeOf(faqheader)).call(this, props));
    _this.state = {
      category: null,
      qnadata: [{
        category: '북클럽',
        question: '트레바리 전체 일정을 더 편하게 보고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }, {
        category: '북클럽',
        question: '트레바리  더 편하게 보고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }, {
        category: '북클럽',
        question: '트레바리 전체 일정을하게 보고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }, {
        category: '북클럽',
        question: '트레바리 전체 일정을 더 편하게 고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }, {
        category: '북클럽',
        question: '트레바체 일정을 더 편하게 보고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }, {
        category: '북클럽',
        question: '트레바리 전체 일정을 더게 보고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }, {
        category: '북클럽',
        question: '트레바리 전체 일정을 더 편하게 보고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }, {
        category: '북클럽',
        question: '트레바리  일정을 더 편하게고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }, {
        category: '북클럽',
        question: '트레리 전체 일정을 더 편하게 보고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }, {
        category: '북클럽',
        question: '트레바리 전체 일정을 더 편하보고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }, {
        category: '북클럽',
        question: '바리 전체 일정을 더 편하게 보고 싶어요!',
        answer: '트레바리 아지트에서 진행되는 모든 독서모임 및 커뮤니티 이벤트 일정을 공유드리는 구글 캘린더가 있답니다. 트레바리 구글 캘린더(click!)를 등록해두시고, 독서모임과 각종 커뮤니티 이벤트 일정을 편하게 확인하세요!'
      }]
    };
    return _this;
  }

  _createClass(faqheader, [{
    key: "renderQuestion",
    value: function renderQuestion() {
      if (this.state.category == '북클럽') {
        this.state.qnadata.map(function (step) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }, "ads");
        }); // (<Question ={step.category} question={step.question} answer={step.answer}/>);
      } else if (this.state.category == '신청/환불') {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Question__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        });
      } else if (this.state.category == '독후감') {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Question__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        });
      } else if (this.state.category == '놀러가기') {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Question__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
      } else if (this.state.category == '이벤트') {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Question__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        });
      } else if (this.state.category == '아지트') {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Question__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "qnacategory",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-1644712485"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "qnatext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-1644712485"
      }, "\uB354 \uAD81\uAE08\uD558\uC2E0 \uC0AC\uD56D\uC740 contact@trevari.co.kr\uB85C \uBB38\uC758\uC8FC\uC138\uC694 :)", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-1644712485"
      }), "- \uD68C\uC2E0\uAC00\uB2A5\uC694\uC77C: \uC218~\uC77C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "buttongroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-1644712485"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "qnabutton",
        onClick: function onClick() {
          return _this2.setState({
            category: '북클럽'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-1644712485"
      }, "\uBD81\uD074\uB7FD"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "qnabutton",
        onClick: function onClick() {
          return _this2.setState({
            category: '신청/환불'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-1644712485"
      }, "\uC2E0\uCCAD/\uD658\uBD88"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "qnabutton",
        onClick: function onClick() {
          return _this2.setState({
            category: '독후감'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-1644712485"
      }, "\uB3C5\uD6C4\uAC10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-1644712485"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "qnabutton",
        onClick: function onClick() {
          return _this2.setState({
            category: '놀러가기'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-1644712485"
      }, "\uB180\uB7EC\uAC00\uAE30"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "qnabutton",
        onClick: function onClick() {
          return _this2.setState({
            category: '이벤트'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-1644712485"
      }, "\uC774\uBCA4\uD2B8"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "qnabutton",
        onClick: function onClick() {
          return _this2.setState({
            category: '아지트'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-1644712485"
      }, "\uC544\uC9C0\uD2B8")), this.renderQuestion(), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1644712485",
        css: "#qnabutton.jsx-1644712485{background-color:white;border:1px solid orange;color:orange;border-radius:5px;padding:6px 12px 6px 12px;margin:6px;}#qnabutton.jsx-1644712485:visited{color:white;background-color:orange;}#qnatext.jsx-1644712485{margin:0px 0px 20px 0px;text-align:center;font-size:1rem;padding:0px 30px 0px 30px;}#buttongroup.jsx-1644712485{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZhcUhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRVMsQUFHbUMsQUFRWCxBQU1ZLEFBT04sWUFaTSxNQWEzQixLQXJCMkIsQ0FjTixZQUxyQixNQU1rQixLQWRGLFVBZWEsR0FkUixrQkFDUSxLQWM3QixxQkFiYyxXQUNkIiwiZmlsZSI6ImNvbXBvbmVudHNcXEZhcUhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEppblxcaGVsbG8tbmV4dFxcaG9tZXdvcmsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9RdWVzdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZhcWhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5Om51bGwsXHJcbiAgICAgICAgICAgIHFuYWRhdGE6W1xyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5OifrtoHtgbTrn70nLHF1ZXN0aW9uOiftirjroIjrsJTrpqwg7KCE7LK0IOydvOygleydhCDrjZQg7Y647ZWY6rKMIOuztOqzoCDsi7bslrTsmpQhJywgYW5zd2VyOiftirjroIjrsJTrpqwg7JWE7KeA7Yq47JeQ7IScIOynhO2WieuQmOuKlCDrqqjrk6Ag64+F7ISc66qo7J6EIOuwjyDsu6TrrqTri4jti7Ag7J2067Kk7Yq4IOydvOygleydhCDqs7XsnKDrk5zrpqzripQg6rWs6riAIOy6mOumsOuNlOqwgCDsnojri7Xri4jri6QuIO2KuOugiOuwlOumrCDqtazquIAg7LqY66aw642UKGNsaWNrISnrpbwg65Ox66Gd7ZW065GQ7Iuc6rOgLCDrj4XshJzrqqjsnoTqs7wg6rCB7KKFIOy7pOuupOuLiO2LsCDsnbTrsqTtirgg7J287KCV7J2EIO2OuO2VmOqyjCDtmZXsnbjtlZjshLjsmpQhJ30sXHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnk6J+u2ge2BtOufvScscXVlc3Rpb246J+2KuOugiOuwlOumrCAg642UIO2OuO2VmOqyjCDrs7Tqs6Ag7Iu27Ja07JqUIScsIGFuc3dlcjon7Yq466CI67CU66asIOyVhOyngO2KuOyXkOyEnCDsp4TtlonrkJjripQg66qo65OgIOuPheyEnOuqqOyehCDrsI8g7Luk666k64uI7YuwIOydtOuypO2KuCDsnbzsoJXsnYQg6rO17Jyg65Oc66as64qUIOq1rOq4gCDsupjrprDrjZTqsIAg7J6I64u164uI64ukLiDtirjroIjrsJTrpqwg6rWs6riAIOy6mOumsOuNlChjbGljayEp66W8IOuTseuhne2VtOuRkOyLnOqzoCwg64+F7ISc66qo7J6E6rO8IOqwgeyihSDsu6TrrqTri4jti7Ag7J2067Kk7Yq4IOydvOygleydhCDtjrjtlZjqsowg7ZmV7J247ZWY7IS47JqUISd9LFxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5OifrtoHtgbTrn70nLHF1ZXN0aW9uOiftirjroIjrsJTrpqwg7KCE7LK0IOydvOygleydhO2VmOqyjCDrs7Tqs6Ag7Iu27Ja07JqUIScsIGFuc3dlcjon7Yq466CI67CU66asIOyVhOyngO2KuOyXkOyEnCDsp4TtlonrkJjripQg66qo65OgIOuPheyEnOuqqOyehCDrsI8g7Luk666k64uI7YuwIOydtOuypO2KuCDsnbzsoJXsnYQg6rO17Jyg65Oc66as64qUIOq1rOq4gCDsupjrprDrjZTqsIAg7J6I64u164uI64ukLiDtirjroIjrsJTrpqwg6rWs6riAIOy6mOumsOuNlChjbGljayEp66W8IOuTseuhne2VtOuRkOyLnOqzoCwg64+F7ISc66qo7J6E6rO8IOqwgeyihSDsu6TrrqTri4jti7Ag7J2067Kk7Yq4IOydvOygleydhCDtjrjtlZjqsowg7ZmV7J247ZWY7IS47JqUISd9LFxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5OifrtoHtgbTrn70nLHF1ZXN0aW9uOiftirjroIjrsJTrpqwg7KCE7LK0IOydvOygleydhCDrjZQg7Y647ZWY6rKMIOqzoCDsi7bslrTsmpQhJywgYW5zd2VyOiftirjroIjrsJTrpqwg7JWE7KeA7Yq47JeQ7IScIOynhO2WieuQmOuKlCDrqqjrk6Ag64+F7ISc66qo7J6EIOuwjyDsu6TrrqTri4jti7Ag7J2067Kk7Yq4IOydvOygleydhCDqs7XsnKDrk5zrpqzripQg6rWs6riAIOy6mOumsOuNlOqwgCDsnojri7Xri4jri6QuIO2KuOugiOuwlOumrCDqtazquIAg7LqY66aw642UKGNsaWNrISnrpbwg65Ox66Gd7ZW065GQ7Iuc6rOgLCDrj4XshJzrqqjsnoTqs7wg6rCB7KKFIOy7pOuupOuLiO2LsCDsnbTrsqTtirgg7J287KCV7J2EIO2OuO2VmOqyjCDtmZXsnbjtlZjshLjsmpQhJ30sXHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnk6J+u2ge2BtOufvScscXVlc3Rpb246J+2KuOugiOuwlOyytCDsnbzsoJXsnYQg642UIO2OuO2VmOqyjCDrs7Tqs6Ag7Iu27Ja07JqUIScsIGFuc3dlcjon7Yq466CI67CU66asIOyVhOyngO2KuOyXkOyEnCDsp4TtlonrkJjripQg66qo65OgIOuPheyEnOuqqOyehCDrsI8g7Luk666k64uI7YuwIOydtOuypO2KuCDsnbzsoJXsnYQg6rO17Jyg65Oc66as64qUIOq1rOq4gCDsupjrprDrjZTqsIAg7J6I64u164uI64ukLiDtirjroIjrsJTrpqwg6rWs6riAIOy6mOumsOuNlChjbGljayEp66W8IOuTseuhne2VtOuRkOyLnOqzoCwg64+F7ISc66qo7J6E6rO8IOqwgeyihSDsu6TrrqTri4jti7Ag7J2067Kk7Yq4IOydvOygleydhCDtjrjtlZjqsowg7ZmV7J247ZWY7IS47JqUISd9LFxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5OifrtoHtgbTrn70nLHF1ZXN0aW9uOiftirjroIjrsJTrpqwg7KCE7LK0IOydvOygleydhCDrjZTqsowg67O06rOgIOyLtuyWtOyalCEnLCBhbnN3ZXI6J+2KuOugiOuwlOumrCDslYTsp4Dtirjsl5DshJwg7KeE7ZaJ65CY64qUIOuqqOuToCDrj4XshJzrqqjsnoQg67CPIOy7pOuupOuLiO2LsCDsnbTrsqTtirgg7J287KCV7J2EIOqzteycoOuTnOumrOuKlCDqtazquIAg7LqY66aw642U6rCAIOyeiOuLteuLiOuLpC4g7Yq466CI67CU66asIOq1rOq4gCDsupjrprDrjZQoY2xpY2shKeulvCDrk7HroZ3tlbTrkZDsi5zqs6AsIOuPheyEnOuqqOyehOqzvCDqsIHsooUg7Luk666k64uI7YuwIOydtOuypO2KuCDsnbzsoJXsnYQg7Y647ZWY6rKMIO2ZleyduO2VmOyEuOyalCEnfSxcclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeTon67aB7YG065+9JyxxdWVzdGlvbjon7Yq466CI67CU66asIOyghOyytCDsnbzsoJXsnYQg642UIO2OuO2VmOqyjCDrs7Tqs6Ag7Iu27Ja07JqUIScsIGFuc3dlcjon7Yq466CI67CU66asIOyVhOyngO2KuOyXkOyEnCDsp4TtlonrkJjripQg66qo65OgIOuPheyEnOuqqOyehCDrsI8g7Luk666k64uI7YuwIOydtOuypO2KuCDsnbzsoJXsnYQg6rO17Jyg65Oc66as64qUIOq1rOq4gCDsupjrprDrjZTqsIAg7J6I64u164uI64ukLiDtirjroIjrsJTrpqwg6rWs6riAIOy6mOumsOuNlChjbGljayEp66W8IOuTseuhne2VtOuRkOyLnOqzoCwg64+F7ISc66qo7J6E6rO8IOqwgeyihSDsu6TrrqTri4jti7Ag7J2067Kk7Yq4IOydvOygleydhCDtjrjtlZjqsowg7ZmV7J247ZWY7IS47JqUISd9LFxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5OifrtoHtgbTrn70nLHF1ZXN0aW9uOiftirjroIjrsJTrpqwgIOydvOygleydhCDrjZQg7Y647ZWY6rKM6rOgIOyLtuyWtOyalCEnLCBhbnN3ZXI6J+2KuOugiOuwlOumrCDslYTsp4Dtirjsl5DshJwg7KeE7ZaJ65CY64qUIOuqqOuToCDrj4XshJzrqqjsnoQg67CPIOy7pOuupOuLiO2LsCDsnbTrsqTtirgg7J287KCV7J2EIOqzteycoOuTnOumrOuKlCDqtazquIAg7LqY66aw642U6rCAIOyeiOuLteuLiOuLpC4g7Yq466CI67CU66asIOq1rOq4gCDsupjrprDrjZQoY2xpY2shKeulvCDrk7HroZ3tlbTrkZDsi5zqs6AsIOuPheyEnOuqqOyehOqzvCDqsIHsooUg7Luk666k64uI7YuwIOydtOuypO2KuCDsnbzsoJXsnYQg7Y647ZWY6rKMIO2ZleyduO2VmOyEuOyalCEnfSxcclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeTon67aB7YG065+9JyxxdWVzdGlvbjon7Yq466CI66asIOyghOyytCDsnbzsoJXsnYQg642UIO2OuO2VmOqyjCDrs7Tqs6Ag7Iu27Ja07JqUIScsIGFuc3dlcjon7Yq466CI67CU66asIOyVhOyngO2KuOyXkOyEnCDsp4TtlonrkJjripQg66qo65OgIOuPheyEnOuqqOyehCDrsI8g7Luk666k64uI7YuwIOydtOuypO2KuCDsnbzsoJXsnYQg6rO17Jyg65Oc66as64qUIOq1rOq4gCDsupjrprDrjZTqsIAg7J6I64u164uI64ukLiDtirjroIjrsJTrpqwg6rWs6riAIOy6mOumsOuNlChjbGljayEp66W8IOuTseuhne2VtOuRkOyLnOqzoCwg64+F7ISc66qo7J6E6rO8IOqwgeyihSDsu6TrrqTri4jti7Ag7J2067Kk7Yq4IOydvOygleydhCDtjrjtlZjqsowg7ZmV7J247ZWY7IS47JqUISd9LFxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5OifrtoHtgbTrn70nLHF1ZXN0aW9uOiftirjroIjrsJTrpqwg7KCE7LK0IOydvOygleydhCDrjZQg7Y647ZWY67O06rOgIOyLtuyWtOyalCEnLCBhbnN3ZXI6J+2KuOugiOuwlOumrCDslYTsp4Dtirjsl5DshJwg7KeE7ZaJ65CY64qUIOuqqOuToCDrj4XshJzrqqjsnoQg67CPIOy7pOuupOuLiO2LsCDsnbTrsqTtirgg7J287KCV7J2EIOqzteycoOuTnOumrOuKlCDqtazquIAg7LqY66aw642U6rCAIOyeiOuLteuLiOuLpC4g7Yq466CI67CU66asIOq1rOq4gCDsupjrprDrjZQoY2xpY2shKeulvCDrk7HroZ3tlbTrkZDsi5zqs6AsIOuPheyEnOuqqOyehOqzvCDqsIHsooUg7Luk666k64uI7YuwIOydtOuypO2KuCDsnbzsoJXsnYQg7Y647ZWY6rKMIO2ZleyduO2VmOyEuOyalCEnfSxcclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeTon67aB7YG065+9JyxxdWVzdGlvbjon67CU66asIOyghOyytCDsnbzsoJXsnYQg642UIO2OuO2VmOqyjCDrs7Tqs6Ag7Iu27Ja07JqUIScsIGFuc3dlcjon7Yq466CI67CU66asIOyVhOyngO2KuOyXkOyEnCDsp4TtlonrkJjripQg66qo65OgIOuPheyEnOuqqOyehCDrsI8g7Luk666k64uI7YuwIOydtOuypO2KuCDsnbzsoJXsnYQg6rO17Jyg65Oc66as64qUIOq1rOq4gCDsupjrprDrjZTqsIAg7J6I64u164uI64ukLiDtirjroIjrsJTrpqwg6rWs6riAIOy6mOumsOuNlChjbGljayEp66W8IOuTseuhne2VtOuRkOyLnOqzoCwg64+F7ISc66qo7J6E6rO8IOqwgeyihSDsu6TrrqTri4jti7Ag7J2067Kk7Yq4IOydvOygleydhCDtjrjtlZjqsowg7ZmV7J247ZWY7IS47JqUISd9LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclF1ZXN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jYXRlZ29yeSA9PSAn67aB7YG065+9JylcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucW5hZGF0YS5tYXAoKHN0ZXApPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5hZHM8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICg8UXVlc3Rpb24gPXtzdGVwLmNhdGVnb3J5fSBxdWVzdGlvbj17c3RlcC5xdWVzdGlvbn0gYW5zd2VyPXtzdGVwLmFuc3dlcn0vPik7XHJcblxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuY2F0ZWdvcnkgPT0n7Iug7LKtL+2ZmOu2iCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gPFF1ZXN0aW9uPjwvUXVlc3Rpb24+XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5jYXRlZ29yeSA9PSfrj4Xtm4TqsJAnKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxRdWVzdGlvbj48L1F1ZXN0aW9uPlxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuY2F0ZWdvcnkgPT0n64aA65+s6rCA6riwJyl7XHJcbiAgICAgICAgICAgIHJldHVybiA8UXVlc3Rpb24+PC9RdWVzdGlvbj5cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLmNhdGVnb3J5ID09J+ydtOuypO2KuCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gPFF1ZXN0aW9uPjwvUXVlc3Rpb24+XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5jYXRlZ29yeSA9PSfslYTsp4DtirgnKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxRdWVzdGlvbj48L1F1ZXN0aW9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgIFxyXG4gICAgICA8ZGl2IGlkPVwicW5hY2F0ZWdvcnlcIj5cclxuICAgICAgICA8ZGl2IGlkPVwicW5hdGV4dFwiPlxyXG4gICAgICAgIOuNlCDqtoHquIjtlZjsi6Ag7IKs7ZWt7J2AIGNvbnRhY3RAdHJldmFyaS5jby5rcuuhnCDrrLjsnZjso7zshLjsmpQgOilcclxuICAgICAgICA8YnIvPi0g7ZqM7Iug6rCA64ql7JqU7J28OiDsiJh+7J28XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBpZD1cImJ1dHRvbmdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJxbmFidXR0b25cIiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7Y2F0ZWdvcnk6J+u2ge2BtOufvSd9KX0+67aB7YG065+9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJxbmFidXR0b25cIiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7Y2F0ZWdvcnk6J+yLoOyyrS/tmZjrtognfSl9PuyLoOyyrS/tmZjrtog8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInFuYWJ1dHRvblwiIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtjYXRlZ29yeTon64+F7ZuE6rCQJ30pfT7rj4Xtm4TqsJA8L2J1dHRvbj48YnIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwicW5hYnV0dG9uXCIgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2NhdGVnb3J5OifrhoDrn6zqsIDquLAnfSl9PuuGgOufrOqwgOq4sDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwicW5hYnV0dG9uXCIgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2NhdGVnb3J5OifsnbTrsqTtirgnfSl9PuydtOuypO2KuDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwicW5hYnV0dG9uXCIgb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe2NhdGVnb3J5OifslYTsp4DtirgnfSl9PuyVhOyngO2KuDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHt0aGlzLnJlbmRlclF1ZXN0aW9uKCl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICNxbmFidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICAgICAgY29sb3I6b3JhbmdlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgcGFkZGluZzo2cHggMTJweCA2cHggMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luOjZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3FuYWJ1dHRvbjp2aXNpdGVkIHtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6b3JhbmdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgI3FuYXRleHQge1xyXG4gICAgICAgICAgICBtYXJnaW46MHB4IDBweCAyMHB4IDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjBweCAzMHB4IDBweCAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2J1dHRvbmdyb3VwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3F1YXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4vLyAgICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4vLyAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuLy8gICAgICAgICB0aGlzLnN0YXRlID17XHJcbi8vICAgICAgICAgICAgIHZhbHVlOm51bGwsXHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJlbmRlcigpe1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbiJdfQ== */\n/*@ sourceURL=components\\FaqHeader.js */"
      }));
    }
  }]);

  return faqheader;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component); // export default class Square extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             value:null,
//         };
//     }
//     render(){
//         return (
//             
//         );
//     }
// }




/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "C:\\Users\\Jin\\hello-next\\homework\\components\\Footer.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-3656368449"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "QNA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3656368449"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "./cs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3656368449"
  }, "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38 & \uACF5\uC9C0\uC0AC\uD56D"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "vision",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3656368449"
  }, "\uC138\uC0C1\uC744 \uB354 \uC9C0\uC801\uC73C\uB85C \uC0AC\uB78C\uB4E4\uC744 \uB354 \uCE5C\uD558\uAC8C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "linktext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3656368449"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3656368449"
  }, "\uC774\uC6A9\uC57D\uAD00"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3656368449"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "linktext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-3656368449"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-3656368449"
  }, "\uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uBC29\uCE68")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-3656368449"
  }, "\uD2B8\uB808\uBC14\uB9AC | \uB300\uD45C: \uC724\uC218\uC601 | \uC0AC\uC5C5\uC790 \uB4F1\uB85D\uBC88\uD638: 195-40-00129 | \uC8FC\uC18C: \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uC555\uAD6C\uC815\uB85C28\uAE38 22-11, 404\uD638"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-3656368449"
  }, "\uC804\uD654: 070-7799-9708 | E-mail: contact@trevari.co.kr"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-3656368449"
  }, "Copyright \xA9 2018 Trevari. All rights reserved."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3656368449",
    css: "div#QNA.jsx-3656368449{background-color:orange;z-index:100;padding:6px 12px 6px 12px;border:1px solid orange;border-radius:5px 5px 5px 5px;margin-bottom:32px;text-align:center;-webkit-text-decoration:none;text-decoration:none;}#QNA.jsx-3656368449>a.jsx-3656368449{color:white;}#footer.jsx-3656368449{background-color:rgba(220,220,220,0.3);padding-top:10px;padding:8px 16px 8px 16px;}#linktext.jsx-3656368449{font-size:14px;margin-bottom:8px;}#vision.jsx-3656368449{font-weight:bold;margin-bottom:32px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQlMsQUFHb0MsQUFZWixBQUkyQixBQU14QixBQU1FLFlBZnBCLEdBV3FCLEVBS0MsT0E1QlAsU0F3QmYsR0F2QjZCLEFBNEI3QixHQWJvQixpQkFDUyxNQWZGLG9CQWdCM0IsSUFmaUMsOEJBQ1gsbUJBQ0Qsa0JBQ0csa0RBRXhCIiwiZmlsZSI6ImNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEppblxcaGVsbG8tbmV4dFxcaG9tZXdvcmsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PihcclxuICAgIDxkaXYgaWQ9XCJmb290ZXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwiUU5BXCI+PExpbmsgaHJlZj1cIi4vY3NcIj48YT7snpDso7wg66y764qUIOyniOusuCAmIOqzteyngOyCrO2VrTwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInZpc2lvblwiPuyEuOyDgeydhCDrjZQg7KeA7KCB7Jy866GcIOyCrOuejOuTpOydhCDrjZQg7Lmc7ZWY6rKMPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImxpbmt0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxhPuydtOyaqeyVveq0gDwvYT48YnIvPiAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsaW5rdGV4dFwiPlxyXG4gICAgICAgICAgICA8YT7qsJzsnbjsoJXrs7Qg7Leo6riJ67Cp7LmoPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwidGV4dFwiPu2KuOugiOuwlOumrCB8IOuMgO2RnDog7Jyk7IiY7JiBIHwg7IKs7JeF7J6QIOuTseuhneuyiO2YuDogMTk1LTQwLTAwMTI5IHwg7KO87IaMOiDshJzsmrjtirnrs4Tsi5wg6rCV64Ko6rWsIOyVleq1rOygleuhnDI46ri4IDIyLTExLCA0MDTtmLhcclxuPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInRleHRcIj7soITtmZQ6IDA3MC03Nzk5LTk3MDggfCBFLW1haWw6IGNvbnRhY3RAdHJldmFyaS5jby5rclxyXG48L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwidGV4dFwiPkNvcHlyaWdodCDCqSAyMDE4IFRyZXZhcmkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICBkaXYjUU5BIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpvcmFuZ2U7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTAwOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYWRkaW5nOjZweCAxMnB4IDZweCAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHggNXB4IDVweCA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MzJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNRTkEgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9vdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIyMCwyMjAsMjIwLDAuMyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6OHB4IDE2cHggOHB4IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbGlua3RleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgLy8gcGFkZGluZzo4cHggMTZweCA4cHggMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdmlzaW9uIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTozMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbikiXX0= */\n/*@ sourceURL=components\\Footer.js */"
  }));
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "C:\\Users\\Jin\\hello-next\\homework\\components\\Layout.js";





var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "Layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1781044665"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1781044665"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1781044665"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1781044665"
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1781044665",
    css: "div#br.jsx-1781044665{style=clear:both;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVUyxBQUc2QixpQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcSmluXFxoZWxsby1uZXh0XFxob21ld29yayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICAgIDxkaXYgaWQ9XCJMYXlvdXRcIj5cclxuICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICA8YnIvPjxici8+PGJyLz5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgZGl2I2JyIHtcclxuICAgICAgICAgICAgc3R5bGU9Y2xlYXI6Ym90aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=components\\Layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Example; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
var _jsxFileName = "C:\\Users\\Jin\\hello-next\\homework\\components\\Navbar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));
    _this.toggleNavbar = _this.toggleNavbar.bind(_assertThisInitialized(_this));
    _this.state = {
      collapsed: true
    };
    return _this;
  }

  _createClass(Example, [{
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "menubar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-280765447"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Navbar"], {
        color: "faded",
        light: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavbarBrand"], {
        id: "TREVARI",
        href: "/",
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "TREVARI"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavbarToggler"], {
        onClick: this.toggleNavbar,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Collapse"], {
        isOpen: !this.state.collapsed,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Nav"], {
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavLink"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "\uB3C5\uC11C\uBAA8\uC784")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavLink"], {
        href: "./events",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "\uC774\uBCA4\uD2B8")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavLink"], {
        href: "./apply",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "\uBA64\uBC84\uC2ED \uC2E0\uCCAD")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavLink"], {
        href: "./login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "\uB85C\uADF8\uC778"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "280765447",
        css: "div#menubar.jsx-280765447{position:fixed;background-color:white;width:100%;z-index:1;border-bottom:1px solid gray;}#menubar.jsx-280765447>nav.jsx-280765447>a.jsx-280765447{color:orange;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ1MsQUFHMkIsQUFPSixhQUNJLEVBUFEsZUFRMUIsUUFQYyxXQUNELFVBQ21CLDZCQUNoQyIsImZpbGUiOiJjb21wb25lbnRzXFxOYXZiYXIuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxKaW5cXGhlbGxvLW5leHRcXGhvbWV3b3JrIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29sbGFwc2UsIE5hdmJhciwgTmF2YmFyVG9nZ2xlciwgTmF2YmFyQnJhbmQsIE5hdiwgTmF2SXRlbSwgTmF2TGluayB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZU5hdmJhciA9IHRoaXMudG9nZ2xlTmF2YmFyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb2xsYXBzZWQ6IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0b2dnbGVOYXZiYXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY29sbGFwc2VkOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWRcclxuICAgIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwibWVudWJhclwiPlxyXG4gICAgICAgIDxOYXZiYXIgY29sb3I9XCJmYWRlZFwiIGxpZ2h0PlxyXG4gICAgICAgICAgPE5hdmJhckJyYW5kIGlkPVwiVFJFVkFSSVwiIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibXItYXV0b1wiPlRSRVZBUkk8L05hdmJhckJyYW5kPlxyXG4gICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dGhpcy50b2dnbGVOYXZiYXJ9IGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxyXG4gICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17IXRoaXMuc3RhdGUuY29sbGFwc2VkfSBuYXZiYXI+XHJcbiAgICAgICAgICAgIDxOYXYgbmF2YmFyPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIj7rj4XshJzrqqjsnoQ8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi4vZXZlbnRzXCI+7J2067Kk7Yq4PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIuL2FwcGx5XCI+66mk67KE7IutIOyLoOyyrTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiLi9sb2dpblwiPuuhnOq3uOyduDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgZGl2I21lbnViYXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDoxO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbWVudWJhciA+IG5hdiA+IGEge1xyXG4gICAgICAgICAgY29sb3I6b3JhbmdlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=components\\Navbar.js */"
      }));
    }
  }]);

  return Example;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Question.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Button"], {
        onClick: this.toggle,
        style: {
          marginBottom: '1rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Q [", this.props.category, "] ", this.props.question), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Collapse"], {
        isOpen: this.state.collapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.props.answer))));
    }
  }]);

  return Example;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Example);

/***/ }),

/***/ "./pages/cs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Question__ = __webpack_require__("./components/Question.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_FaqHeader__ = __webpack_require__("./components/FaqHeader.js");
var _jsxFileName = "C:\\Users\\Jin\\hello-next\\homework\\pages\\cs.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_FaqHeader__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/cs.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=cs.js.map