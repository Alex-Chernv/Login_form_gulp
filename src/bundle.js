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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/es6/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/es6/bundle.js":
/*!***************************!*\
  !*** ./src/es6/bundle.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.proj = undefined;\n\nvar _Modal = __webpack_require__(/*! ./proj/Modal.js */ \"./src/es6/proj/Modal.js\");\n\nvar _PasswordForm = __webpack_require__(/*! ./proj/PasswordForm.js */ \"./src/es6/proj/PasswordForm.js\");\n\nvar _Form = __webpack_require__(/*! ./proj/Form.js */ \"./src/es6/proj/Form.js\");\n\nfunction proj() {};\n\nproj.prototype.ModalInit = _Modal.ModalInit;\nproj.prototype.PasswordInit = _PasswordForm.PasswordInit;\nproj.prototype.ItemForm = _Form.ItemForm;\n\nexports.proj = proj;\n\n//# sourceURL=webpack:///./src/es6/bundle.js?");

/***/ }),

/***/ "./src/es6/main.js":
/*!*************************!*\
  !*** ./src/es6/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bundle = __webpack_require__(/*! ./bundle */ \"./src/es6/bundle.js\");\n\nvar Proj = new _bundle.proj();\n\nProj.ModalInit();\nProj.PasswordInit();\nProj.ItemForm();\n\n//# sourceURL=webpack:///./src/es6/main.js?");

/***/ }),

/***/ "./src/es6/proj/Form.js":
/*!******************************!*\
  !*** ./src/es6/proj/Form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Polyfill\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nif (!Array.prototype.forEach) {\n\n  Array.prototype.forEach = function (callback, thisArg) {\n\n    var T, k;\n\n    if (this == null) {\n      throw new TypeError(' this is null or not defined');\n    }\n\n    var O = Object(this);\n\n    var len = O.length >>> 0;\n\n    if (typeof callback !== 'function') {\n      throw new TypeError(callback + ' is not a function');\n    }\n\n    if (arguments.length > 1) {\n      T = thisArg;\n    }\n\n    k = 0;\n\n    while (k < len) {\n\n      var kValue;\n\n      if (k in O) {\n\n        kValue = O[k];\n\n        callback.call(T, kValue, k, O);\n      }\n      k++;\n    }\n  };\n}\n\nfunction ItemForm() {\n  var elements = document.getElementsByClassName('js-form-item'),\n      passwordEye = document.getElementsByClassName('js-password-toggle');\n\n  Array.from(elements).forEach(function (element) {\n    var status = false;\n\n    element.addEventListener('keyup', function () {\n      elemntKey.call(this);\n    }, true);\n\n    element.addEventListener('keydown', function () {\n      elemntKey.call(this);\n    }, true);\n  });\n\n  function elemntKey() {\n    if (!this.value.length && status) {\n      this.parentElement.classList.remove('is-active');\n\n      status = false;\n    } else if (this.value.length) {\n      this.parentElement.classList.add('is-active');\n\n      status = true;\n    }\n  };\n};\n\nexports.ItemForm = ItemForm;\n\n//# sourceURL=webpack:///./src/es6/proj/Form.js?");

/***/ }),

/***/ "./src/es6/proj/Modal.js":
/*!*******************************!*\
  !*** ./src/es6/proj/Modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nfunction ModalInit() {\n\tvar modalShowButton = document.querySelector(\".js-modal-show\"),\n\t    modalHideButton = document.querySelector(\".js-modal-exit\"),\n\t    modal = document.querySelector('.js-modal');\n\n\tmodalShowButton.addEventListener('click', function () {\n\t\tmodal.classList.add(\"is-active\");\n\t});\n\tmodalHideButton.addEventListener('click', function () {\n\t\tmodal.classList.remove(\"is-active\");\n\t});\n};\n\nexports.ModalInit = ModalInit;\n\n//# sourceURL=webpack:///./src/es6/proj/Modal.js?");

/***/ }),

/***/ "./src/es6/proj/PasswordForm.js":
/*!**************************************!*\
  !*** ./src/es6/proj/PasswordForm.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nfunction PasswordInit() {\n\tvar passwordToggle = document.querySelector('.js-password-toggle');\n\n\tpasswordToggle.addEventListener('change', function () {\n\t\tvar password = document.querySelector('.js-password'),\n\t\t    passwordLabel = document.querySelector('.js-password-label');\n\n\t\tif (password.type === 'password') {\n\t\t\tpassword.type = 'text';\n\t\t} else {\n\t\t\tpassword.type = 'password';\n\t\t}\n\n\t\tpassword.focus();\n\t});\n};\n\nexports.PasswordInit = PasswordInit;\n\n//# sourceURL=webpack:///./src/es6/proj/PasswordForm.js?");

/***/ })

/******/ });