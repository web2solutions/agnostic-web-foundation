/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classPrivateFieldGet;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }

  return value;
}

module.exports = _classPrivateFieldSet;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/array-concat/index.js":
/*!********************************************!*\
  !*** ./node_modules/array-concat/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/*!
 * imports.
 */

var curry2 = __webpack_require__(/*! curry2 */ "./node_modules/curry2/index.js")

/*!
 * exports.
 */

module.exports = curry2(last)

/**
 * Returns a new array comprised of the given array's contents with the given value appended.
 * Pass an array as the second argument to append multiple values.
 *
 * @param {Array} list
 * Array which will be copied and appended to.
 *
 * @param {*} value
 * Array or value to append.
 *
 * @return {Array}
 * Array comprised of the given array's contents with the given value(s) appended.
 */

function last (list, value) {
  return list.concat(value)
}


/***/ }),

/***/ "./src/LocalDatabaseTransport.js":
/*!***************************************!*\
  !*** ./src/LocalDatabaseTransport.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalDatabaseTransport)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.mjs");
/* harmony import */ var dexie_mongoify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dexie-mongoify */ "./node_modules/dexie-mongoify/src/dexie.mongoify.js");
/* harmony import */ var dexie_mongoify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dexie_mongoify__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./src/utils.js");











function cov_1j6dvs0c9r() {
  var path = "/Users/admin/apps/voodux/src/LocalDatabaseTransport.js";
  var hash = "93f7cd044f7c71004e2ecff52495f29301ab9ae1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/admin/apps/voodux/src/LocalDatabaseTransport.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 19
        }
      },
      "1": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 17
        }
      },
      "2": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 26
        }
      },
      "3": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 28
        }
      },
      "4": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 26
        }
      },
      "5": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 28
        }
      },
      "6": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 23
        }
      },
      "7": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 88,
          column: 5
        }
      },
      "8": {
        start: {
          line: 82,
          column: 6
        },
        end: {
          line: 87,
          column: 7
        }
      },
      "9": {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 86,
          column: 9
        }
      },
      "10": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 24
        }
      },
      "11": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 115,
          column: 66
        }
      },
      "12": {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 116,
          column: 39
        }
      },
      "13": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 117,
          column: 37
        }
      },
      "14": {
        start: {
          line: 132,
          column: 16
        },
        end: {
          line: 132,
          column: 20
        }
      },
      "15": {
        start: {
          line: 133,
          column: 15
        },
        end: {
          line: 133,
          column: 19
        }
      },
      "16": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 150,
          column: 5
        }
      },
      "17": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 135,
          column: 24
        }
      },
      "18": {
        start: {
          line: 137,
          column: 6
        },
        end: {
          line: 139,
          column: 32
        }
      },
      "19": {
        start: {
          line: 145,
          column: 19
        },
        end: {
          line: 145,
          column: 36
        }
      },
      "20": {
        start: {
          line: 146,
          column: 6
        },
        end: {
          line: 146,
          column: 17
        }
      },
      "21": {
        start: {
          line: 148,
          column: 6
        },
        end: {
          line: 148,
          column: 15
        }
      },
      "22": {
        start: {
          line: 149,
          column: 6
        },
        end: {
          line: 149,
          column: 17
        }
      },
      "23": {
        start: {
          line: 151,
          column: 4
        },
        end: {
          line: 151,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 53
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 68
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        },
        loc: {
          start: {
            line: 91,
            column: 15
          },
          end: {
            line: 93,
            column: 3
          }
        },
        line: 91
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 114,
            column: 2
          },
          end: {
            line: 114,
            column: 3
          }
        },
        loc: {
          start: {
            line: 114,
            column: 32
          },
          end: {
            line: 118,
            column: 3
          }
        },
        line: 114
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 131,
            column: 2
          },
          end: {
            line: 131,
            column: 3
          }
        },
        loc: {
          start: {
            line: 131,
            column: 18
          },
          end: {
            line: 152,
            column: 3
          }
        },
        line: 131
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 68,
            column: 17
          },
          end: {
            line: 68,
            column: 28
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 68,
            column: 27
          },
          end: {
            line: 68,
            column: 28
          }
        }],
        line: 68
      },
      "1": {
        loc: {
          start: {
            line: 68,
            column: 30
          },
          end: {
            line: 68,
            column: 41
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 68,
            column: 39
          },
          end: {
            line: 68,
            column: 41
          }
        }],
        line: 68
      },
      "2": {
        loc: {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        }, {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        }],
        line: 82
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "93f7cd044f7c71004e2ecff52495f29301ab9ae1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    cov_1j6dvs0c9r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1j6dvs0c9r();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




cov_1j6dvs0c9r().s[0]++;
dexie__WEBPACK_IMPORTED_MODULE_10__.default.debug = false;

var _version = new WeakMap();

var _tables = new WeakMap();

var _connected = new WeakMap();

var _schemas = new WeakMap();

var _dbName = new WeakMap();

var _setTables = new WeakSet();

var LocalDatabaseTransport = function (_dexie) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(LocalDatabaseTransport, _dexie);

  var _super = _createSuper(LocalDatabaseTransport);

  function LocalDatabaseTransport(_ref) {
    var _this;

    var _ref$version = _ref.version,
        version = _ref$version === void 0 ? (cov_1j6dvs0c9r().b[0][0]++, 1) : _ref$version,
        _ref$tables = _ref.tables,
        tables = _ref$tables === void 0 ? (cov_1j6dvs0c9r().b[1][0]++, {}) : _ref$tables,
        dbName = _ref.dbName;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, LocalDatabaseTransport);

    cov_1j6dvs0c9r().f[0]++;
    cov_1j6dvs0c9r().s[1]++;
    _this = _super.call(this, dbName);

    _setTables.add(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

    _version.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), {
      writable: true,
      value: void 0
    });

    _tables.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), {
      writable: true,
      value: void 0
    });

    _connected.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), {
      writable: true,
      value: void 0
    });

    _schemas.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), {
      writable: true,
      value: void 0
    });

    _dbName.set(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), {
      writable: true,
      value: void 0
    });

    cov_1j6dvs0c9r().s[2]++;

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), _dbName, dbName);

    cov_1j6dvs0c9r().s[3]++;

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), _version, version);

    cov_1j6dvs0c9r().s[4]++;

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), _tables, tables);

    cov_1j6dvs0c9r().s[5]++;

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), _connected, false);

    cov_1j6dvs0c9r().s[6]++;

    _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), _schemas, {});

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(LocalDatabaseTransport, [{
    key: "tables",
    get: function get() {
      cov_1j6dvs0c9r().f[1]++;
      cov_1j6dvs0c9r().s[10]++;
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _tables);
    }
  }, {
    key: "addSchema",
    value: function addSchema(schemaName, schema) {
      cov_1j6dvs0c9r().f[2]++;
      cov_1j6dvs0c9r().s[11]++;
      console.log('local transport addSchema', {
        schemaName: schemaName,
        schema: schema
      });
      cov_1j6dvs0c9r().s[12]++;
      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _schemas)[schemaName] = schema;
      cov_1j6dvs0c9r().s[13]++;
      return _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _schemas)[schemaName];
    }
  }, {
    key: "connect",
    value: function () {
      var _connect = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var error, data, open;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cov_1j6dvs0c9r().f[3]++;
                error = (cov_1j6dvs0c9r().s[14]++, null);
                data = (cov_1j6dvs0c9r().s[15]++, null);
                cov_1j6dvs0c9r().s[16]++;
                _context.prev = 4;
                cov_1j6dvs0c9r().s[17]++;

                _classPrivateMethodGet(this, _setTables, _setTables2).call(this);

                cov_1j6dvs0c9r().s[18]++;
                this.version(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _version)).stores(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _tables));
                cov_1j6dvs0c9r().s[19]++;
                _context.next = 12;
                return this.open();

              case 12:
                open = _context.sent;
                cov_1j6dvs0c9r().s[20]++;
                data = open;
                _context.next = 23;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](4);
                cov_1j6dvs0c9r().s[21]++;
                error = _context.t0;
                cov_1j6dvs0c9r().s[22]++;
                data = null;

              case 23:
                cov_1j6dvs0c9r().s[23]++;
                return _context.abrupt("return", (0,_utils__WEBPACK_IMPORTED_MODULE_12__.createMethodSignature)(error, data));

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 17]]);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }]);

  return LocalDatabaseTransport;
}(dexie__WEBPACK_IMPORTED_MODULE_10__.default);

var _setTables2 = function _setTables2() {
  cov_1j6dvs0c9r().s[7]++;

  for (var entity in _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _schemas)) {
    cov_1j6dvs0c9r().s[8]++;

    if (Object.prototype.hasOwnProperty.call(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _schemas), entity)) {
      cov_1j6dvs0c9r().b[2][0]++;
      cov_1j6dvs0c9r().s[9]++;
      _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _tables)[entity] = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.mongooseToDexieTableString)(_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8___default()(this, _schemas)[entity]);
    } else {
      cov_1j6dvs0c9r().b[2][1]++;
    }
  }
};



/***/ }),

/***/ "./src/VooduXWebWorker.js":
/*!********************************!*\
  !*** ./src/VooduXWebWorker.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LocalDatabaseTransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalDatabaseTransport */ "./src/LocalDatabaseTransport.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.js");




var _this = undefined;

function cov_dgrsn62u4() {
  var path = "/Users/admin/apps/voodux/src/VooduXWebWorker.js";
  var hash = "055c180cbe8c90250da53bea8029dede980ac8cc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/admin/apps/voodux/src/VooduXWebWorker.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 14
        },
        end: {
          line: 9,
          column: 16
        }
      },
      "1": {
        start: {
          line: 11,
          column: 29
        },
        end: {
          line: 11,
          column: 33
        }
      },
      "2": {
        start: {
          line: 12,
          column: 28
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "3": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 4
        }
      },
      "4": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 40
        }
      },
      "5": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 78
        }
      },
      "6": {
        start: {
          line: 17,
          column: 24
        },
        end: {
          line: 17,
          column: 76
        }
      },
      "7": {
        start: {
          line: 18,
          column: 21
        },
        end: {
          line: 18,
          column: 64
        }
      },
      "8": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 40
        }
      },
      "9": {
        start: {
          line: 22,
          column: 20
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "10": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 61
        }
      },
      "11": {
        start: {
          line: 27,
          column: 19
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "12": {
        start: {
          line: 28,
          column: 14
        },
        end: {
          line: 28,
          column: 18
        }
      },
      "13": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 61
        }
      },
      "14": {
        start: {
          line: 30,
          column: 14
        },
        end: {
          line: 30,
          column: 25
        }
      },
      "15": {
        start: {
          line: 31,
          column: 15
        },
        end: {
          line: 31,
          column: 50
        }
      },
      "16": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 52
        }
      },
      "17": {
        start: {
          line: 36,
          column: 19
        },
        end: {
          line: 48,
          column: 1
        }
      },
      "18": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 61
        }
      },
      "19": {
        start: {
          line: 38,
          column: 26
        },
        end: {
          line: 38,
          column: 48
        }
      },
      "20": {
        start: {
          line: 39,
          column: 19
        },
        end: {
          line: 39,
          column: 47
        }
      },
      "21": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 46,
          column: 4
        }
      },
      "22": {
        start: {
          line: 41,
          column: 19
        },
        end: {
          line: 41,
          column: 42
        }
      },
      "23": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 45,
          column: 6
        }
      },
      "24": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 33
        }
      },
      "25": {
        start: {
          line: 50,
          column: 23
        },
        end: {
          line: 72,
          column: 1
        }
      },
      "26": {
        start: {
          line: 51,
          column: 18
        },
        end: {
          line: 51,
          column: 24
        }
      },
      "27": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 71,
          column: 3
        }
      },
      "28": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 54,
          column: 26
        }
      },
      "29": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 12
        }
      },
      "30": {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 57,
          column: 25
        }
      },
      "31": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 12
        }
      },
      "32": {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 60,
          column: 34
        }
      },
      "33": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 12
        }
      },
      "34": {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 63,
          column: 25
        }
      },
      "35": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 12
        }
      },
      "36": {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 66,
          column: 41
        }
      },
      "37": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 67,
          column: 19
        }
      },
      "38": {
        start: {
          line: 68,
          column: 6
        },
        end: {
          line: 68,
          column: 12
        }
      },
      "39": {
        start: {
          line: 74,
          column: 0
        },
        end: {
          line: 74,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 28
          },
          end: {
            line: 12,
            column: 29
          }
        },
        loc: {
          start: {
            line: 12,
            column: 40
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 18
          },
          end: {
            line: 17,
            column: 19
          }
        },
        loc: {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 17,
            column: 76
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 22,
            column: 21
          }
        },
        loc: {
          start: {
            line: 22,
            column: 33
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 22
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 19
          },
          end: {
            line: 27,
            column: 20
          }
        },
        loc: {
          start: {
            line: 27,
            column: 32
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 27
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 36,
            column: 19
          },
          end: {
            line: 36,
            column: 20
          }
        },
        loc: {
          start: {
            line: 36,
            column: 32
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 36
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 40,
            column: 19
          },
          end: {
            line: 40,
            column: 20
          }
        },
        loc: {
          start: {
            line: 40,
            column: 29
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 40
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 50,
            column: 23
          },
          end: {
            line: 50,
            column: 24
          }
        },
        loc: {
          start: {
            line: 50,
            column: 30
          },
          end: {
            line: 72,
            column: 1
          }
        },
        line: 50
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 55,
            column: 12
          }
        }, {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 58,
            column: 12
          }
        }, {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 61,
            column: 12
          }
        }, {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 64,
            column: 12
          }
        }, {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 68,
            column: 12
          }
        }, {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 12
          }
        }],
        line: 52
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "055c180cbe8c90250da53bea8029dede980ac8cc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    cov_dgrsn62u4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_dgrsn62u4();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var schemas = (cov_dgrsn62u4().s[0]++, {});
var localDatabaseTransport = (cov_dgrsn62u4().s[1]++, null);
cov_dgrsn62u4().s[2]++;

var startLocalTransport = function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var connection;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_dgrsn62u4().f[0]++;
            cov_dgrsn62u4().s[3]++;
            localDatabaseTransport = new _LocalDatabaseTransport__WEBPACK_IMPORTED_MODULE_3__.default({
              dbName: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.genDbName)('WorkerDB')
            });
            cov_dgrsn62u4().s[4]++;
            console.log('>>>>>> schemas', schemas);
            cov_dgrsn62u4().s[5]++;
            schemas.forEach(function (s) {
              cov_dgrsn62u4().f[1]++;
              cov_dgrsn62u4().s[6]++;
              return localDatabaseTransport.addSchema(s.entity, s.schema);
            });
            cov_dgrsn62u4().s[7]++;
            _context.next = 10;
            return _this.localDatabaseTransport.connect();

          case 10:
            connection = _context.sent;
            cov_dgrsn62u4().s[8]++;
            console.warn('connection', connection);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function startLocalTransport() {
    return _ref.apply(this, arguments);
  };
}();

cov_dgrsn62u4().s[9]++;

var startWorker = function startWorker(request) {
  cov_dgrsn62u4().f[2]++;
  cov_dgrsn62u4().s[10]++;
  self.postMessage({
    cmd: 'start',
    data: true,
    error: null
  });
};

cov_dgrsn62u4().s[11]++;

var executeJob = function executeJob(request) {
  cov_dgrsn62u4().f[3]++;
  var error = (cov_dgrsn62u4().s[12]++, null);
  cov_dgrsn62u4().s[13]++;
  console.warn('WORKER>>>>>>>>> executeJob request', request);
  var job = (cov_dgrsn62u4().s[14]++, request.job);
  var data = (cov_dgrsn62u4().s[15]++, _objectSpread({
    __id: 1
  }, request.job.payload));
  cov_dgrsn62u4().s[16]++;
  self.postMessage({
    cmd: 'job',
    job: job,
    data: data,
    error: error
  });
};

cov_dgrsn62u4().s[17]++;

var setSchemas = function setSchemas(request) {
  cov_dgrsn62u4().f[4]++;
  cov_dgrsn62u4().s[18]++;
  console.warn('WORKER>>>>>>>>> setSchemas request', request);
  var receivedSchemas = (cov_dgrsn62u4().s[19]++, _objectSpread({}, request.schemas));
  var entities = (cov_dgrsn62u4().s[20]++, Object.keys(receivedSchemas));
  cov_dgrsn62u4().s[21]++;
  entities.forEach(function (entity) {
    cov_dgrsn62u4().f[5]++;
    var schema = (cov_dgrsn62u4().s[22]++, receivedSchemas[entity]);
    cov_dgrsn62u4().s[23]++;
    schemas.push({
      entity: entity,
      schema: schema
    });
  });
  cov_dgrsn62u4().s[24]++;
  console.log('schemas', schemas);
};

cov_dgrsn62u4().s[25]++;

var messagehandler = function messagehandler(e) {
  cov_dgrsn62u4().f[6]++;
  var request = (cov_dgrsn62u4().s[26]++, e.data);
  cov_dgrsn62u4().s[27]++;

  switch (request.cmd) {
    case 'start':
      cov_dgrsn62u4().b[0][0]++;
      cov_dgrsn62u4().s[28]++;
      startWorker(request);
      cov_dgrsn62u4().s[29]++;
      break;

    case 'setSchemas':
      cov_dgrsn62u4().b[0][1]++;
      cov_dgrsn62u4().s[30]++;
      setSchemas(request);
      cov_dgrsn62u4().s[31]++;
      break;

    case 'startLocalTransport':
      cov_dgrsn62u4().b[0][2]++;
      cov_dgrsn62u4().s[32]++;
      startLocalTransport(request);
      cov_dgrsn62u4().s[33]++;
      break;

    case 'job':
      cov_dgrsn62u4().b[0][3]++;
      cov_dgrsn62u4().s[34]++;
      executeJob(request);
      cov_dgrsn62u4().s[35]++;
      break;

    case 'stop':
      cov_dgrsn62u4().b[0][4]++;
      cov_dgrsn62u4().s[36]++;
      self.postMessage('WORKER STOPPED');
      cov_dgrsn62u4().s[37]++;
      self.close();
      cov_dgrsn62u4().s[38]++;
      break;

    default:
      cov_dgrsn62u4().b[0][5]++;
  }
};

cov_dgrsn62u4().s[39]++;
self.addEventListener('message', messagehandler, false);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMethodSignature": () => (/* binding */ createMethodSignature),
/* harmony export */   "uuid": () => (/* binding */ uuid),
/* harmony export */   "genDbName": () => (/* binding */ genDbName),
/* harmony export */   "toJSON": () => (/* binding */ toJSON),
/* harmony export */   "mongooseToDexieTableString": () => (/* binding */ mongooseToDexieTableString),
/* harmony export */   "getSearchTokenStream": () => (/* binding */ getSearchTokenStream),
/* harmony export */   "Schema": () => (/* binding */ Schema),
/* harmony export */   "ArrayObserver": () => (/* binding */ ArrayObserver)
/* harmony export */ });
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lunr */ "./node_modules/lunr/lunr.js");
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lunr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
function cov_1q0r7qyu1f() {
  var path = "/Users/admin/apps/voodux/src/utils.js";
  var hash = "0b657b14bd13e6e780261ffef396d5e167a4f31e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/admin/apps/voodux/src/utils.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 37
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 24
        }
      },
      "2": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 36,
          column: 4
        }
      },
      "3": {
        start: {
          line: 33,
          column: 14
        },
        end: {
          line: 33,
          column: 38
        }
      },
      "4": {
        start: {
          line: 34,
          column: 14
        },
        end: {
          line: 34,
          column: 45
        }
      },
      "5": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 25
        }
      },
      "6": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 52
        }
      },
      "7": {
        start: {
          line: 48,
          column: 17
        },
        end: {
          line: 48,
          column: 36
        }
      },
      "8": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 49,
          column: 15
        }
      },
      "9": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 62,
          column: 3
        }
      },
      "10": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 26
        }
      },
      "11": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 63,
          column: 40
        }
      },
      "12": {
        start: {
          line: 77,
          column: 15
        },
        end: {
          line: 77,
          column: 17
        }
      },
      "13": {
        start: {
          line: 78,
          column: 21
        },
        end: {
          line: 78,
          column: 23
        }
      },
      "14": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 101,
          column: 3
        }
      },
      "15": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 100,
          column: 5
        }
      },
      "16": {
        start: {
          line: 81,
          column: 23
        },
        end: {
          line: 81,
          column: 49
        }
      },
      "17": {
        start: {
          line: 85,
          column: 83
        },
        end: {
          line: 85,
          column: 91
        }
      },
      "18": {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 88,
          column: 7
        }
      },
      "19": {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 87,
          column: 16
        }
      },
      "20": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 92,
          column: 7
        }
      },
      "21": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 90,
          column: 37
        }
      },
      "22": {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 91,
          column: 16
        }
      },
      "23": {
        start: {
          line: 93,
          column: 6
        },
        end: {
          line: 95,
          column: 7
        }
      },
      "24": {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 41
        }
      },
      "25": {
        start: {
          line: 96,
          column: 6
        },
        end: {
          line: 98,
          column: 7
        }
      },
      "26": {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 97,
          column: 41
        }
      },
      "27": {
        start: {
          line: 99,
          column: 6
        },
        end: {
          line: 99,
          column: 29
        }
      },
      "28": {
        start: {
          line: 103,
          column: 26
        },
        end: {
          line: 103,
          column: 64
        }
      },
      "29": {
        start: {
          line: 105,
          column: 2
        },
        end: {
          line: 111,
          column: 3
        }
      },
      "30": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 100
        }
      },
      "31": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 69
        }
      },
      "32": {
        start: {
          line: 126,
          column: 24
        },
        end: {
          line: 126,
          column: 26
        }
      },
      "33": {
        start: {
          line: 127,
          column: 23
        },
        end: {
          line: 127,
          column: 25
        }
      },
      "34": {
        start: {
          line: 129,
          column: 2
        },
        end: {
          line: 131,
          column: 3
        }
      },
      "35": {
        start: {
          line: 130,
          column: 4
        },
        end: {
          line: 130,
          column: 26
        }
      },
      "36": {
        start: {
          line: 132,
          column: 2
        },
        end: {
          line: 153,
          column: 3
        }
      },
      "37": {
        start: {
          line: 132,
          column: 15
        },
        end: {
          line: 132,
          column: 16
        }
      },
      "38": {
        start: {
          line: 133,
          column: 25
        },
        end: {
          line: 133,
          column: 38
        }
      },
      "39": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 137,
          column: 5
        }
      },
      "40": {
        start: {
          line: 136,
          column: 6
        },
        end: {
          line: 136,
          column: 14
        }
      },
      "41": {
        start: {
          line: 139,
          column: 22
        },
        end: {
          line: 139,
          column: 40
        }
      },
      "42": {
        start: {
          line: 140,
          column: 4
        },
        end: {
          line: 151,
          column: 5
        }
      },
      "43": {
        start: {
          line: 140,
          column: 17
        },
        end: {
          line: 140,
          column: 18
        }
      },
      "44": {
        start: {
          line: 141,
          column: 21
        },
        end: {
          line: 141,
          column: 33
        }
      },
      "45": {
        start: {
          line: 142,
          column: 19
        },
        end: {
          line: 142,
          column: 38
        }
      },
      "46": {
        start: {
          line: 144,
          column: 6
        },
        end: {
          line: 150,
          column: 7
        }
      },
      "47": {
        start: {
          line: 145,
          column: 8
        },
        end: {
          line: 145,
          column: 55
        }
      },
      "48": {
        start: {
          line: 146,
          column: 8
        },
        end: {
          line: 146,
          column: 49
        }
      },
      "49": {
        start: {
          line: 146,
          column: 27
        },
        end: {
          line: 146,
          column: 47
        }
      },
      "50": {
        start: {
          line: 149,
          column: 8
        },
        end: {
          line: 149,
          column: 13
        }
      },
      "51": {
        start: {
          line: 154,
          column: 2
        },
        end: {
          line: 154,
          column: 24
        }
      },
      "52": {
        start: {
          line: 168,
          column: 16
        },
        end: {
          line: 168,
          column: 56
        }
      },
      "53": {
        start: {
          line: 168,
          column: 49
        },
        end: {
          line: 168,
          column: 54
        }
      },
      "54": {
        start: {
          line: 169,
          column: 2
        },
        end: {
          line: 169,
          column: 14
        }
      },
      "55": {
        start: {
          line: 173,
          column: 22
        },
        end: {
          line: 173,
          column: 37
        }
      },
      "56": {
        start: {
          line: 177,
          column: 14
        },
        end: {
          line: 177,
          column: 18
        }
      },
      "57": {
        start: {
          line: 178,
          column: 2
        },
        end: {
          line: 178,
          column: 16
        }
      },
      "58": {
        start: {
          line: 179,
          column: 2
        },
        end: {
          line: 179,
          column: 21
        }
      },
      "59": {
        start: {
          line: 181,
          column: 2
        },
        end: {
          line: 183,
          column: 3
        }
      },
      "60": {
        start: {
          line: 182,
          column: 4
        },
        end: {
          line: 182,
          column: 40
        }
      },
      "61": {
        start: {
          line: 185,
          column: 2
        },
        end: {
          line: 191,
          column: 3
        }
      },
      "62": {
        start: {
          line: 186,
          column: 15
        },
        end: {
          line: 186,
          column: 55
        }
      },
      "63": {
        start: {
          line: 187,
          column: 4
        },
        end: {
          line: 189,
          column: 5
        }
      },
      "64": {
        start: {
          line: 187,
          column: 17
        },
        end: {
          line: 187,
          column: 18
        }
      },
      "65": {
        start: {
          line: 188,
          column: 6
        },
        end: {
          line: 188,
          column: 37
        }
      },
      "66": {
        start: {
          line: 190,
          column: 4
        },
        end: {
          line: 190,
          column: 15
        }
      },
      "67": {
        start: {
          line: 193,
          column: 2
        },
        end: {
          line: 199,
          column: 3
        }
      },
      "68": {
        start: {
          line: 194,
          column: 17
        },
        end: {
          line: 194,
          column: 56
        }
      },
      "69": {
        start: {
          line: 195,
          column: 4
        },
        end: {
          line: 197,
          column: 5
        }
      },
      "70": {
        start: {
          line: 195,
          column: 17
        },
        end: {
          line: 195,
          column: 18
        }
      },
      "71": {
        start: {
          line: 196,
          column: 6
        },
        end: {
          line: 196,
          column: 39
        }
      },
      "72": {
        start: {
          line: 198,
          column: 4
        },
        end: {
          line: 198,
          column: 17
        }
      },
      "73": {
        start: {
          line: 201,
          column: 2
        },
        end: {
          line: 207,
          column: 3
        }
      },
      "74": {
        start: {
          line: 202,
          column: 17
        },
        end: {
          line: 202,
          column: 60
        }
      },
      "75": {
        start: {
          line: 203,
          column: 4
        },
        end: {
          line: 205,
          column: 5
        }
      },
      "76": {
        start: {
          line: 203,
          column: 17
        },
        end: {
          line: 203,
          column: 18
        }
      },
      "77": {
        start: {
          line: 204,
          column: 6
        },
        end: {
          line: 204,
          column: 43
        }
      },
      "78": {
        start: {
          line: 206,
          column: 4
        },
        end: {
          line: 206,
          column: 17
        }
      },
      "79": {
        start: {
          line: 209,
          column: 2
        },
        end: {
          line: 215,
          column: 3
        }
      },
      "80": {
        start: {
          line: 210,
          column: 23
        },
        end: {
          line: 210,
          column: 64
        }
      },
      "81": {
        start: {
          line: 211,
          column: 4
        },
        end: {
          line: 213,
          column: 5
        }
      },
      "82": {
        start: {
          line: 211,
          column: 17
        },
        end: {
          line: 211,
          column: 18
        }
      },
      "83": {
        start: {
          line: 212,
          column: 6
        },
        end: {
          line: 212,
          column: 47
        }
      },
      "84": {
        start: {
          line: 214,
          column: 4
        },
        end: {
          line: 214,
          column: 23
        }
      },
      "85": {
        start: {
          line: 217,
          column: 2
        },
        end: {
          line: 223,
          column: 3
        }
      },
      "86": {
        start: {
          line: 218,
          column: 17
        },
        end: {
          line: 218,
          column: 57
        }
      },
      "87": {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 221,
          column: 5
        }
      },
      "88": {
        start: {
          line: 219,
          column: 17
        },
        end: {
          line: 219,
          column: 18
        }
      },
      "89": {
        start: {
          line: 220,
          column: 6
        },
        end: {
          line: 220,
          column: 40
        }
      },
      "90": {
        start: {
          line: 222,
          column: 4
        },
        end: {
          line: 222,
          column: 17
        }
      },
      "91": {
        start: {
          line: 225,
          column: 2
        },
        end: {
          line: 237,
          column: 3
        }
      },
      "92": {
        start: {
          line: 226,
          column: 20
        },
        end: {
          line: 226,
          column: 22
        }
      },
      "93": {
        start: {
          line: 227,
          column: 4
        },
        end: {
          line: 232,
          column: 5
        }
      },
      "94": {
        start: {
          line: 228,
          column: 6
        },
        end: {
          line: 228,
          column: 46
        }
      },
      "95": {
        start: {
          line: 229,
          column: 6
        },
        end: {
          line: 229,
          column: 31
        }
      },
      "96": {
        start: {
          line: 231,
          column: 6
        },
        end: {
          line: 231,
          column: 60
        }
      },
      "97": {
        start: {
          line: 233,
          column: 4
        },
        end: {
          line: 235,
          column: 5
        }
      },
      "98": {
        start: {
          line: 233,
          column: 17
        },
        end: {
          line: 233,
          column: 18
        }
      },
      "99": {
        start: {
          line: 234,
          column: 6
        },
        end: {
          line: 234,
          column: 45
        }
      },
      "100": {
        start: {
          line: 236,
          column: 4
        },
        end: {
          line: 236,
          column: 20
        }
      },
      "101": {
        start: {
          line: 239,
          column: 2
        },
        end: {
          line: 245,
          column: 3
        }
      },
      "102": {
        start: {
          line: 240,
          column: 21
        },
        end: {
          line: 240,
          column: 64
        }
      },
      "103": {
        start: {
          line: 241,
          column: 4
        },
        end: {
          line: 243,
          column: 5
        }
      },
      "104": {
        start: {
          line: 241,
          column: 17
        },
        end: {
          line: 241,
          column: 18
        }
      },
      "105": {
        start: {
          line: 242,
          column: 6
        },
        end: {
          line: 242,
          column: 47
        }
      },
      "106": {
        start: {
          line: 244,
          column: 4
        },
        end: {
          line: 244,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 37
          },
          end: {
            line: 21,
            column: 38
          }
        },
        loc: {
          start: {
            line: 21,
            column: 68
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 21
      },
      "1": {
        name: "uuid",
        decl: {
          start: {
            line: 31,
            column: 16
          },
          end: {
            line: 31,
            column: 20
          }
        },
        loc: {
          start: {
            line: 31,
            column: 24
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 31
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 65
          },
          end: {
            line: 32,
            column: 66
          }
        },
        loc: {
          start: {
            line: 32,
            column: 78
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 32
      },
      "3": {
        name: "genDbName",
        decl: {
          start: {
            line: 46,
            column: 16
          },
          end: {
            line: 46,
            column: 25
          }
        },
        loc: {
          start: {
            line: 46,
            column: 40
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 46
      },
      "4": {
        name: "toJSON",
        decl: {
          start: {
            line: 59,
            column: 16
          },
          end: {
            line: 59,
            column: 22
          }
        },
        loc: {
          start: {
            line: 59,
            column: 34
          },
          end: {
            line: 64,
            column: 1
          }
        },
        line: 59
      },
      "5": {
        name: "mongooseToDexieTableString",
        decl: {
          start: {
            line: 75,
            column: 16
          },
          end: {
            line: 75,
            column: 42
          }
        },
        loc: {
          start: {
            line: 75,
            column: 51
          },
          end: {
            line: 112,
            column: 1
          }
        },
        line: 75
      },
      "6": {
        name: "getCompoundIndexes",
        decl: {
          start: {
            line: 125,
            column: 9
          },
          end: {
            line: 125,
            column: 27
          }
        },
        loc: {
          start: {
            line: 125,
            column: 48
          },
          end: {
            line: 155,
            column: 1
          }
        },
        line: 125
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 146,
            column: 21
          },
          end: {
            line: 146,
            column: 22
          }
        },
        loc: {
          start: {
            line: 146,
            column: 27
          },
          end: {
            line: 146,
            column: 47
          }
        },
        line: 146
      },
      "8": {
        name: "getSearchTokenStream",
        decl: {
          start: {
            line: 163,
            column: 16
          },
          end: {
            line: 163,
            column: 36
          }
        },
        loc: {
          start: {
            line: 163,
            column: 48
          },
          end: {
            line: 171,
            column: 1
          }
        },
        line: 163
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 168,
            column: 43
          },
          end: {
            line: 168,
            column: 44
          }
        },
        loc: {
          start: {
            line: 168,
            column: 49
          },
          end: {
            line: 168,
            column: 54
          }
        },
        line: 168
      },
      "10": {
        name: "ArrayObserver",
        decl: {
          start: {
            line: 176,
            column: 16
          },
          end: {
            line: 176,
            column: 29
          }
        },
        loc: {
          start: {
            line: 176,
            column: 34
          },
          end: {
            line: 246,
            column: 1
          }
        },
        line: 176
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 181,
            column: 17
          },
          end: {
            line: 181,
            column: 18
          }
        },
        loc: {
          start: {
            line: 181,
            column: 43
          },
          end: {
            line: 183,
            column: 3
          }
        },
        line: 181
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 185,
            column: 11
          },
          end: {
            line: 185,
            column: 12
          }
        },
        loc: {
          start: {
            line: 185,
            column: 26
          },
          end: {
            line: 191,
            column: 3
          }
        },
        line: 185
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 193,
            column: 10
          },
          end: {
            line: 193,
            column: 11
          }
        },
        loc: {
          start: {
            line: 193,
            column: 22
          },
          end: {
            line: 199,
            column: 3
          }
        },
        line: 193
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 201,
            column: 14
          },
          end: {
            line: 201,
            column: 15
          }
        },
        loc: {
          start: {
            line: 201,
            column: 26
          },
          end: {
            line: 207,
            column: 3
          }
        },
        line: 201
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 209,
            column: 12
          },
          end: {
            line: 209,
            column: 13
          }
        },
        loc: {
          start: {
            line: 209,
            column: 24
          },
          end: {
            line: 215,
            column: 3
          }
        },
        line: 209
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 217,
            column: 11
          },
          end: {
            line: 217,
            column: 12
          }
        },
        loc: {
          start: {
            line: 217,
            column: 23
          },
          end: {
            line: 223,
            column: 3
          }
        },
        line: 217
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 225,
            column: 13
          },
          end: {
            line: 225,
            column: 14
          }
        },
        loc: {
          start: {
            line: 225,
            column: 49
          },
          end: {
            line: 237,
            column: 3
          }
        },
        line: 225
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 239,
            column: 14
          },
          end: {
            line: 239,
            column: 15
          }
        },
        loc: {
          start: {
            line: 239,
            column: 26
          },
          end: {
            line: 245,
            column: 3
          }
        },
        line: 239
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 21,
            column: 38
          },
          end: {
            line: 21,
            column: 50
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 21,
            column: 46
          },
          end: {
            line: 21,
            column: 50
          }
        }],
        line: 21
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 52
          },
          end: {
            line: 21,
            column: 63
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 21,
            column: 59
          },
          end: {
            line: 21,
            column: 63
          }
        }],
        line: 21
      },
      "2": {
        loc: {
          start: {
            line: 34,
            column: 14
          },
          end: {
            line: 34,
            column: 45
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 34,
            column: 26
          },
          end: {
            line: 34,
            column: 27
          }
        }, {
          start: {
            line: 34,
            column: 30
          },
          end: {
            line: 34,
            column: 45
          }
        }],
        line: 34
      },
      "3": {
        loc: {
          start: {
            line: 46,
            column: 26
          },
          end: {
            line: 46,
            column: 38
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 46,
            column: 36
          },
          end: {
            line: 46,
            column: 38
          }
        }],
        line: 46
      },
      "4": {
        loc: {
          start: {
            line: 59,
            column: 24
          },
          end: {
            line: 59,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 59,
            column: 30
          },
          end: {
            line: 59,
            column: 32
          }
        }],
        line: 59
      },
      "5": {
        loc: {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 62,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 62,
            column: 3
          }
        }, {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 62,
            column: 3
          }
        }],
        line: 60
      },
      "6": {
        loc: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 100,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 100,
            column: 5
          }
        }, {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 100,
            column: 5
          }
        }],
        line: 80
      },
      "7": {
        loc: {
          start: {
            line: 85,
            column: 44
          },
          end: {
            line: 85,
            column: 58
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 85,
            column: 53
          },
          end: {
            line: 85,
            column: 58
          }
        }],
        line: 85
      },
      "8": {
        loc: {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 88,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 88,
            column: 7
          }
        }, {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 88,
            column: 7
          }
        }],
        line: 86
      },
      "9": {
        loc: {
          start: {
            line: 86,
            column: 10
          },
          end: {
            line: 86,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 86,
            column: 10
          },
          end: {
            line: 86,
            column: 32
          }
        }, {
          start: {
            line: 86,
            column: 36
          },
          end: {
            line: 86,
            column: 59
          }
        }],
        line: 86
      },
      "10": {
        loc: {
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 92,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 92,
            column: 7
          }
        }, {
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 92,
            column: 7
          }
        }],
        line: 89
      },
      "11": {
        loc: {
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 95,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 95,
            column: 7
          }
        }, {
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 95,
            column: 7
          }
        }],
        line: 93
      },
      "12": {
        loc: {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 98,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 98,
            column: 7
          }
        }, {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 98,
            column: 7
          }
        }],
        line: 96
      },
      "13": {
        loc: {
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        }, {
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        }],
        line: 105
      },
      "14": {
        loc: {
          start: {
            line: 107,
            column: 53
          },
          end: {
            line: 107,
            column: 98
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 107,
            column: 72
          },
          end: {
            line: 107,
            column: 92
          }
        }, {
          start: {
            line: 107,
            column: 96
          },
          end: {
            line: 107,
            column: 98
          }
        }],
        line: 107
      },
      "15": {
        loc: {
          start: {
            line: 110,
            column: 24
          },
          end: {
            line: 110,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 110,
            column: 42
          },
          end: {
            line: 110,
            column: 62
          }
        }, {
          start: {
            line: 110,
            column: 65
          },
          end: {
            line: 110,
            column: 67
          }
        }],
        line: 110
      },
      "16": {
        loc: {
          start: {
            line: 129,
            column: 2
          },
          end: {
            line: 131,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 129,
            column: 2
          },
          end: {
            line: 131,
            column: 3
          }
        }, {
          start: {
            line: 129,
            column: 2
          },
          end: {
            line: 131,
            column: 3
          }
        }],
        line: 129
      },
      "17": {
        loc: {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 137,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 137,
            column: 5
          }
        }, {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 137,
            column: 5
          }
        }],
        line: 135
      },
      "18": {
        loc: {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 150,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 150,
            column: 7
          }
        }, {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 150,
            column: 7
          }
        }],
        line: 144
      },
      "19": {
        loc: {
          start: {
            line: 163,
            column: 37
          },
          end: {
            line: 163,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 163,
            column: 44
          },
          end: {
            line: 163,
            column: 46
          }
        }],
        line: 163
      },
      "20": {
        loc: {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 232,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 232,
            column: 5
          }
        }, {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 232,
            column: 5
          }
        }],
        line: 227
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0, 0],
      "3": [0],
      "4": [0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0],
      "20": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0b657b14bd13e6e780261ffef396d5e167a4f31e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    cov_1q0r7qyu1f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1q0r7qyu1f();


cov_1q0r7qyu1f().s[0]++;
var createMethodSignature = function createMethodSignature() {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1q0r7qyu1f().b[0][0]++, null);
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1q0r7qyu1f().b[1][0]++, null);
  cov_1q0r7qyu1f().f[0]++;
  cov_1q0r7qyu1f().s[1]++;
  return {
    error: error,
    data: data
  };
};
function uuid() {
  cov_1q0r7qyu1f().f[1]++;
  cov_1q0r7qyu1f().s[2]++;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    cov_1q0r7qyu1f().f[2]++;
    var r = (cov_1q0r7qyu1f().s[3]++, Math.random() * 16 | 0);
    var v = (cov_1q0r7qyu1f().s[4]++, c === 'x' ? (cov_1q0r7qyu1f().b[2][0]++, r) : (cov_1q0r7qyu1f().b[2][1]++, r & 0x3 | 0x8));
    cov_1q0r7qyu1f().s[5]++;
    return v.toString(16);
  });
}
function genDbName() {
  var appName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1q0r7qyu1f().b[3][0]++, '');
  cov_1q0r7qyu1f().f[3]++;
  cov_1q0r7qyu1f().s[6]++;
  appName = appName.toLowerCase().replace(/ /g, '_');
  var dbName = (cov_1q0r7qyu1f().s[7]++, "VooduX_".concat(appName));
  cov_1q0r7qyu1f().s[8]++;
  return dbName;
}
function toJSON() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1q0r7qyu1f().b[4][0]++, '');
  cov_1q0r7qyu1f().f[4]++;
  cov_1q0r7qyu1f().s[9]++;

  if (typeof obj === 'string') {
    cov_1q0r7qyu1f().b[5][0]++;
    cov_1q0r7qyu1f().s[10]++;
    return JSON.parse(obj);
  } else {
    cov_1q0r7qyu1f().b[5][1]++;
  }

  cov_1q0r7qyu1f().s[11]++;
  return JSON.parse(JSON.stringify(obj));
}
function mongooseToDexieTableString(schema) {
  cov_1q0r7qyu1f().f[5]++;
  var cols = (cov_1q0r7qyu1f().s[12]++, []);
  var notIndexed = (cov_1q0r7qyu1f().s[13]++, []);
  cov_1q0r7qyu1f().s[14]++;

  for (var propertyName in schema.paths) {
    cov_1q0r7qyu1f().s[15]++;

    if (Object.prototype.hasOwnProperty.call(schema.paths, propertyName)) {
      cov_1q0r7qyu1f().b[6][0]++;
      var property = (cov_1q0r7qyu1f().s[16]++, schema.paths[propertyName]);

      var _ref = (cov_1q0r7qyu1f().s[17]++, property),
          instance = _ref.instance,
          _index = _ref._index,
          _ref$options$unique = _ref.options.unique,
          unique = _ref$options$unique === void 0 ? (cov_1q0r7qyu1f().b[7][0]++, false) : _ref$options$unique;

      cov_1q0r7qyu1f().s[18]++;

      if ((cov_1q0r7qyu1f().b[9][0]++, propertyName === '_id') || (cov_1q0r7qyu1f().b[9][1]++, propertyName === '__id')) {
        cov_1q0r7qyu1f().b[8][0]++;
        cov_1q0r7qyu1f().s[19]++;
        continue;
      } else {
        cov_1q0r7qyu1f().b[8][1]++;
      }

      cov_1q0r7qyu1f().s[20]++;

      if (!_index) {
        cov_1q0r7qyu1f().b[10][0]++;
        cov_1q0r7qyu1f().s[21]++;
        notIndexed.push(propertyName);
        cov_1q0r7qyu1f().s[22]++;
        continue;
      } else {
        cov_1q0r7qyu1f().b[10][1]++;
      }

      cov_1q0r7qyu1f().s[23]++;

      if (instance === 'Array') {
        cov_1q0r7qyu1f().b[11][0]++;
        cov_1q0r7qyu1f().s[24]++;
        propertyName = "*".concat(propertyName);
      } else {
        cov_1q0r7qyu1f().b[11][1]++;
      }

      cov_1q0r7qyu1f().s[25]++;

      if (unique) {
        cov_1q0r7qyu1f().b[12][0]++;
        cov_1q0r7qyu1f().s[26]++;
        propertyName = "&".concat(propertyName);
      } else {
        cov_1q0r7qyu1f().b[12][1]++;
      }

      cov_1q0r7qyu1f().s[27]++;
      cols.push(propertyName);
    } else {
      cov_1q0r7qyu1f().b[6][1]++;
    }
  }

  var compoundIndexes = (cov_1q0r7qyu1f().s[28]++, getCompoundIndexes(notIndexed, schema));
  cov_1q0r7qyu1f().s[29]++;

  if (compoundIndexes.length > 0) {
    cov_1q0r7qyu1f().b[13][0]++;
    cov_1q0r7qyu1f().s[30]++;
    return "++__id,_id,".concat(compoundIndexes.join(',')).concat(cols.length > 0 ? (cov_1q0r7qyu1f().b[14][0]++, ',' + cols.join(',')) : (cov_1q0r7qyu1f().b[14][1]++, ''));
  } else {
    cov_1q0r7qyu1f().b[13][1]++;
    cov_1q0r7qyu1f().s[31]++;
    return "++__id,_id".concat(cols.length > 0 ? (cov_1q0r7qyu1f().b[15][0]++, ',' + cols.join(',')) : (cov_1q0r7qyu1f().b[15][1]++, ''));
  }
}

function getCompoundIndexes(notIndexed, schema) {
  cov_1q0r7qyu1f().f[6]++;
  var compoundIndexes = (cov_1q0r7qyu1f().s[32]++, []);
  var compoundKeys = (cov_1q0r7qyu1f().s[33]++, []);
  cov_1q0r7qyu1f().s[34]++;

  if (schema._indexes.length === 0) {
    cov_1q0r7qyu1f().b[16][0]++;
    cov_1q0r7qyu1f().s[35]++;
    return compoundIndexes;
  } else {
    cov_1q0r7qyu1f().b[16][1]++;
  }

  cov_1q0r7qyu1f().s[36]++;

  for (var x = (cov_1q0r7qyu1f().s[37]++, 0); x < notIndexed.length; x++) {
    var propertyName = (cov_1q0r7qyu1f().s[38]++, notIndexed[x]);
    cov_1q0r7qyu1f().s[39]++;

    if (compoundKeys.indexOf(propertyName) > -1) {
      cov_1q0r7qyu1f().b[17][0]++;
      cov_1q0r7qyu1f().s[40]++;
      continue;
    } else {
      cov_1q0r7qyu1f().b[17][1]++;
    }

    var __indexes = (cov_1q0r7qyu1f().s[41]++, schema._indexes[0]);

    cov_1q0r7qyu1f().s[42]++;

    for (var y = (cov_1q0r7qyu1f().s[43]++, 0); y < __indexes.length; y++) {
      var _index = (cov_1q0r7qyu1f().s[44]++, __indexes[y]);

      var keys = (cov_1q0r7qyu1f().s[45]++, Object.keys(_index));
      cov_1q0r7qyu1f().s[46]++;

      if (keys.indexOf(propertyName) > -1) {
        cov_1q0r7qyu1f().b[18][0]++;
        cov_1q0r7qyu1f().s[47]++;
        compoundIndexes.push("[".concat(keys[0], "+").concat(keys[1], "]"));
        cov_1q0r7qyu1f().s[48]++;
        keys.forEach(function (k) {
          cov_1q0r7qyu1f().f[7]++;
          cov_1q0r7qyu1f().s[49]++;
          return compoundKeys.push(k);
        });
        cov_1q0r7qyu1f().s[50]++;
        break;
      } else {
        cov_1q0r7qyu1f().b[18][1]++;
      }
    }
  }

  cov_1q0r7qyu1f().s[51]++;
  return compoundIndexes;
}

function getSearchTokenStream() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1q0r7qyu1f().b[19][0]++, '');
  cov_1q0r7qyu1f().f[8]++;
  var token = (cov_1q0r7qyu1f().s[52]++, lunr__WEBPACK_IMPORTED_MODULE_0___default().tokenizer(text).map(function (t) {
    cov_1q0r7qyu1f().f[9]++;
    cov_1q0r7qyu1f().s[53]++;
    return t.str;
  }));
  cov_1q0r7qyu1f().s[54]++;
  return token;
}
var Schema = (cov_1q0r7qyu1f().s[55]++, (mongoose__WEBPACK_IMPORTED_MODULE_1___default().Schema));
function ArrayObserver(a) {
  cov_1q0r7qyu1f().f[10]++;

  var _this = (cov_1q0r7qyu1f().s[56]++, this);

  cov_1q0r7qyu1f().s[57]++;
  this.array = a;
  cov_1q0r7qyu1f().s[58]++;
  this.observers = [];
  cov_1q0r7qyu1f().s[59]++;

  this.Observe = function (notifyCallback) {
    cov_1q0r7qyu1f().f[11]++;
    cov_1q0r7qyu1f().s[60]++;

    _this.observers.push(notifyCallback);
  };

  cov_1q0r7qyu1f().s[61]++;

  a.push = function (obj) {
    cov_1q0r7qyu1f().f[12]++;
    var push = (cov_1q0r7qyu1f().s[62]++, Array.prototype.push.apply(a, arguments));
    cov_1q0r7qyu1f().s[63]++;

    for (var i = (cov_1q0r7qyu1f().s[64]++, 0); i < _this.observers.length; i++) {
      cov_1q0r7qyu1f().s[65]++;

      _this.observers[i](obj, 'push');
    }

    cov_1q0r7qyu1f().s[66]++;
    return push;
  };

  cov_1q0r7qyu1f().s[67]++;

  a.pop = function () {
    cov_1q0r7qyu1f().f[13]++;
    var popped = (cov_1q0r7qyu1f().s[68]++, Array.prototype.pop.apply(a, arguments));
    cov_1q0r7qyu1f().s[69]++;

    for (var i = (cov_1q0r7qyu1f().s[70]++, 0); i < _this.observers.length; i++) {
      cov_1q0r7qyu1f().s[71]++;

      _this.observers[i](popped, 'pop');
    }

    cov_1q0r7qyu1f().s[72]++;
    return popped;
  };

  cov_1q0r7qyu1f().s[73]++;

  a.reverse = function () {
    cov_1q0r7qyu1f().f[14]++;
    var result = (cov_1q0r7qyu1f().s[74]++, Array.prototype.reverse.apply(a, arguments));
    cov_1q0r7qyu1f().s[75]++;

    for (var i = (cov_1q0r7qyu1f().s[76]++, 0); i < _this.observers.length; i++) {
      cov_1q0r7qyu1f().s[77]++;

      _this.observers[i](result, 'reverse');
    }

    cov_1q0r7qyu1f().s[78]++;
    return result;
  };

  cov_1q0r7qyu1f().s[79]++;

  a.shift = function () {
    cov_1q0r7qyu1f().f[15]++;
    var deleted_item = (cov_1q0r7qyu1f().s[80]++, Array.prototype.shift.apply(a, arguments));
    cov_1q0r7qyu1f().s[81]++;

    for (var i = (cov_1q0r7qyu1f().s[82]++, 0); i < _this.observers.length; i++) {
      cov_1q0r7qyu1f().s[83]++;

      _this.observers[i](deleted_item, 'shift');
    }

    cov_1q0r7qyu1f().s[84]++;
    return deleted_item;
  };

  cov_1q0r7qyu1f().s[85]++;

  a.sort = function () {
    cov_1q0r7qyu1f().f[16]++;
    var result = (cov_1q0r7qyu1f().s[86]++, Array.prototype.sort.apply(a, arguments));
    cov_1q0r7qyu1f().s[87]++;

    for (var i = (cov_1q0r7qyu1f().s[88]++, 0); i < _this.observers.length; i++) {
      cov_1q0r7qyu1f().s[89]++;

      _this.observers[i](result, 'sort');
    }

    cov_1q0r7qyu1f().s[90]++;
    return result;
  };

  cov_1q0r7qyu1f().s[91]++;

  a.splice = function (i, length, itemsToInsert) {
    cov_1q0r7qyu1f().f[17]++;
    var returnObj = (cov_1q0r7qyu1f().s[92]++, '');
    cov_1q0r7qyu1f().s[93]++;

    if (itemsToInsert) {
      cov_1q0r7qyu1f().b[20][0]++;
      cov_1q0r7qyu1f().s[94]++;
      Array.prototype.slice.call(arguments, 2);
      cov_1q0r7qyu1f().s[95]++;
      returnObj = itemsToInsert;
    } else {
      cov_1q0r7qyu1f().b[20][1]++;
      cov_1q0r7qyu1f().s[96]++;
      returnObj = Array.prototype.splice.apply(a, arguments);
    }

    cov_1q0r7qyu1f().s[97]++;

    for (var _i = (cov_1q0r7qyu1f().s[98]++, 0); _i < _this.observers.length; _i++) {
      cov_1q0r7qyu1f().s[99]++;

      _this.observers[_i](returnObj, 'splice');
    }

    cov_1q0r7qyu1f().s[100]++;
    return returnObj;
  };

  cov_1q0r7qyu1f().s[101]++;

  a.unshift = function () {
    cov_1q0r7qyu1f().f[18]++;
    var new_length = (cov_1q0r7qyu1f().s[102]++, Array.prototype.unshift.apply(a, arguments));
    cov_1q0r7qyu1f().s[103]++;

    for (var i = (cov_1q0r7qyu1f().s[104]++, 0); i < _this.observers.length; i++) {
      cov_1q0r7qyu1f().s[105]++;

      _this.observers[i](new_length, 'unshift');
    }

    cov_1q0r7qyu1f().s[106]++;
    return arguments;
  };
}

/***/ }),

/***/ "./node_modules/curry2/index.js":
/*!**************************************!*\
  !*** ./node_modules/curry2/index.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


/*!
 * exports.
 */

module.exports = curry2

/**
 * Curry a binary function.
 *
 * @param {Function} fn
 * Binary function to curry.
 *
 * @param {Object} [self]
 * Function `this` context.
 *
 * @return {Function|*}
 * If partially applied, return unary function, otherwise, return result of full application.
 */

function curry2 (fn, self) {
  var out = function () {
    return arguments.length > 1
    ? fn.call(self, arguments[0], arguments[1])
    : fn.bind(self, arguments[0])
  }

  out.uncurry = function uncurry () {
    return fn
  }

  return out
}


/***/ }),

/***/ "./node_modules/dexie-mongoify/src/dexie.mongoify.js":
/*!***********************************************************!*\
  !*** ./node_modules/dexie-mongoify/src/dexie.mongoify.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dexie = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.mjs");
var only = __webpack_require__(/*! only */ "./node_modules/only/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var concat = __webpack_require__(/*! array-concat */ "./node_modules/array-concat/index.js");

var valueComparator = __webpack_require__(/*! ./utils/value-comparator */ "./node_modules/dexie-mongoify/src/utils/value-comparator.js");
var isArrayField = __webpack_require__(/*! ./utils/is-array-field */ "./node_modules/dexie-mongoify/src/utils/is-array-field.js");
var isEmptyValue = __webpack_require__(/*! ./utils/is-empty-value */ "./node_modules/dexie-mongoify/src/utils/is-empty-value.js");
var isPlainValue = __webpack_require__(/*! ./utils/is-plain-value */ "./node_modules/dexie-mongoify/src/utils/is-plain-value.js");
var arraySlice = __webpack_require__(/*! ./utils/array-slice */ "./node_modules/dexie-mongoify/src/utils/array-slice.js");
var noop = __webpack_require__(/*! ./utils/noop */ "./node_modules/dexie-mongoify/src/utils/noop.js");
var has = __webpack_require__(/*! ./utils/has */ "./node_modules/dexie-mongoify/src/utils/has.js");

var comparsionQueryOperatorsImpl = {

    $eq: function(key, value) {
        return function(item) {
            return has(item, key) && item[key] === value;
        };
    },

    $gt: function(key, value) {
        return function(item) {
            return has(item, key) && item[key] > value;
        };
    },

    $gte: function(key, value) {
        return function(item) {
            return has(item, key) && item[key] >= value;
        };
    },

    $lt: function(key, value) {
        return function(item) {
            return has(item, key) && item[key] < value;
        };
    },

    $lte: function(key, value) {
        return function(item) {
            return has(item, key) && item[key] <= value;
        };
    },

    $ne: function(key, value) {
        return function(item) {
            return has(item, key) && item[key] !== value;
        };
    },

    $in: function(key, value) {
        return function(item) {
            return has(item, key) && value.indexOf(item[key]) > -1;
        };
    },

    $nin: function(key, value) {
        return function(item) {
            return has(item, key) && value.indexOf(item[key]) === -1;
        };
    },

    $exists: function(key, value) {
        return function(item) {
            return has(item, key) === value;
        };
    },

    $all: function(key, value) {
        return function(item) {
            return has(item, key) && value.every(function(valueItem) {
                return item[key].indexOf(valueItem) > -1;
            });
        };
    },

    $size: function(key, value) {
        return function(item) {
            return has(item, key) && item[key].length === value;
        };
    },

    $elemMatch: function(key, value) {
        var matchers = getQueryValueMatchers(key, value);
        return function(item) {
            return has(item, key) && item[key].some(function(element) {
                var dummy = {};
                dummy[key] = element;
                return matchers.every(function(matcher) {
                    return matcher(dummy);
                });
            });
        };
    },

    $not: function(key, value) {
        var matchers = getQueryValueMatchers(key, value);

        return function(item) {
            return !has(item, key) || matchers.every(function(matcher) {
                return !matcher(item);
            });
        };
    }

};

var logicalQueryOperatorsImpl = {

    $and: function(key, value) {
        var matchers = value.map(getMatcherSets).reduce(concat);

        return function(item) {
            return matchers.every(function(matcher) {
                return matcher(item);
            });
        };
    },

    $or: function(key, value) {
        var matchersSets = value.map(getMatcherSets);

        return function(item) {
            return matchersSets.some(function(matchers) {
                return matchers.every(function(matcher) {
                    return matcher(item);
                });
            });
        };

    },

    $nor: function(key, value) {
        var matcher = this.$and(key, value);
        return function(item) {
            return !matcher(item);
        };
    }

};

var updateOperatorsImpl = {

    $inc: function(_null, increments) {
        return createUpdateIterator(increments, function(key, item) {
            if (has(item, key)) {
                item[key] += increments[key];
            }
        });
    },

    $mul: function(_null, muls) {
        return createUpdateIterator(muls, function(key, item) {
            if (has(item, key)) {
                item[key] *= muls[key];
            }
        });
    },

    $rename: function(_null, renames) {
        return createUpdateIterator(renames, function(key, item) {
            var oldValue = item[key];
            delete item[key];
            item[renames[key]] = oldValue;
        });
    },

    $set: function(_null, sets) {
        return createUpdateIterator(sets, function(key, item) {
            item[key] = sets[key];
        });
    },

    $unset: function(_null, unsets) {
        return createUpdateIterator(unsets, function(key, item) {
            delete item[key];
        });
    },

    $min: function(_null, minimums) {
        return createUpdateIterator(minimums, function(key, item) {
            item[key] = Math.min(item[key], minimums[key]);
        });
    },

    $max: function(_null, maximums) {
        return createUpdateIterator(maximums, function(key, item) {
            item[key] = Math.max(item[key], maximums[key]);
        });
    },

    $addToSet: function(_null, additions) {
        return createUpdateIterator(additions, function(key, item) {
            if (!isArrayField(item, key)) {
                item[key] = [additions[key]];
            } else if (item[key].indexOf(additions[key]) === -1) {
                item[key].push(additions[key]);
            }
        });
    },

    $pop: function(_null, pops) {
        return createUpdateIterator(pops, function(key, item) {
            isArrayField(item, key);
            if (pops[key] === 1) {
                item[key].pop();
            } else if (pops[key] === -1) {
                item[key].shift();
            }
        });
    },

    $push: function(_null, pushes) {
        return createUpdateIterator(pushes, function(key, item) {
            if (!isArrayField(item, key)) {
                item[key] = [pushes[key]];
            } else {
                item[key].push(pushes[key]);
            }
        });
    },

    $pullAll: function(_null, pulls) {
        return createUpdateIterator(pulls, function(key, item) {
            isArrayField(item, key);
            var pullValue = pulls[key];
            item[key] = item[key].filter(function(fieldItem) {
                return pullValue.indexOf(fieldItem) === -1;
            });
        });
    },

    $pull: function(_null, pulls) {
        return createUpdateIterator(pulls, function(key, item) {
            isArrayField(item, key);
            var pullValue = pulls[key];
            var plainValue = isPlainValue(pullValue);
            if (plainValue) {
                item[key] = item[key].filter(function(fieldItem) {
                    return fieldItem !== pullValue;
                });
            } else {
                var matchers = getQueryValueMatchers(key, pullValue);
                item[key] = item[key].filter(function(fieldItem) {
                    var dummy = {};
                    dummy[key] = fieldItem;
                    return !matchers.some(function(matcher) {
                        return matcher(dummy);
                    });
                });
            }
        });
    },

    // $each: function() {}, <- modifier

    $slice: function(_null, slices) {
        return createUpdateIterator(slices, function(key, item) {
            isArrayField(item, key);
            var sliceValue = slices[key];
            if (isPlainValue(sliceValue)) {
                item[key] = arraySlice(item[key], sliceValue);
            } else {
                var slicesKeys = Object.keys(sliceValue);
                item[key] = item[key].map(function(fieldItem) {
                    return slicesKeys.reduce(function(obj, slicesKey) {
                        obj[slicesKey] = arraySlice(obj[slicesKey], sliceValue[slicesKey]);
                        return obj;
                    }, fieldItem);
                });
            }
        });
    },

    $sort: function(_null, sortings) {
        return createUpdateIterator(sortings, function(key, item) {
            isArrayField(item, key);

            var sortValue = sortings[key];

            if (isPlainValue(sortValue)) {
                item[key] = item[key].sort(function(prev, next) {
                    return valueComparator(prev, next, sortValue);
                });
            } else {
                var res = item[key].slice();
                item[key] = Object.keys(sortValue).reduce(function(array, sortingValueKey) {
                    var direction = sortValue[sortingValueKey];
                    return res.sort(function(prev, next) {
                        var prevValue = prev[sortingValueKey];
                        var nextValue = next[sortingValueKey];
                        return valueComparator(prevValue, nextValue, direction);
                    });
                }, item[key]);
            }
        });
    }

};

var operators = {
    query: Object.keys(comparsionQueryOperatorsImpl),
    queryLogical: Object.keys(logicalQueryOperatorsImpl),
    update: Object.keys(updateOperatorsImpl)
};

var supportedUpdateOptions = ['upsert'];
var supportedUpsertOperators = ['$set', '$addToSet', '$push'];

var getMatcherSets = function(operator) {
    return Object.keys(operator).map(function(operatorKey) {
        return getQueryValueMatchers(operatorKey, operator[operatorKey]);
    }).reduce(concat);
};

var getQueryValueMatchers = function(itemKey, queryOperators) {
    return Object.keys(queryOperators).map(function(operatorKey) {
        return getOperatorImplementation({
            key: itemKey,
            type: operatorKey,
            value: queryOperators[operatorKey]
        });
    });
};

var createPlainPropertyMatcher = function(query, objectKeys) {
    var keys = objectKeys || Object.keys(query);
    return function(item) {
        return keys.every(function(key) {
            return has(item, key) && item[key] === query[key];
        });
    };
};

var createPlainPropertyUpdater = function(update, objectKeys) {
    var keys = objectKeys || Object.keys(update);
    return function(item) {
        keys.forEach(function(key) {
            if (has(item, key)) {
                item[key] = update[key];
            }
        });
    };
};

var createUpdateIterator = function(updates, iteratorCallback) {
    var keys = Object.keys(updates);
    return function(item) {
        keys.forEach(function(key) {
            iteratorCallback(key, item);
        });
    };
};

var createObjectForUpsert = function(query, update) {
    var plainQueryKeys = Object.keys(query).filter(function(key) {
        var hasPlainOperatorKey = has(comparsionQueryOperatorsImpl, key);
        var hasLogicalOperatorKey = has(logicalQueryOperatorsImpl, key);
        return !(hasPlainOperatorKey || hasLogicalOperatorKey);
    });

    var objectFromQuery = only(query, plainQueryKeys);

    var objectFromUpdate = supportedUpsertOperators.reduce(function(obj, operatorKey) {
        var updateItem = update[operatorKey];
        return assign(obj, updateItem);
    }, {});

    return assign(objectFromQuery, objectFromUpdate);
};

var chooseIndex = function(query, queryAnalysis) {
    var uniqueFieldIndex = -1;
    var numericFieldIndex = -1;
    var plainFieldIndex = -1;

    queryAnalysis.indexedKeys.forEach(function(indexedField, index) {
        if (indexedField.unique) {
            uniqueFieldIndex = index;
        } else if (typeof indexedField.value === 'number') {
            numericFieldIndex = index;
        } else if (indexedField.plain) {
            plainFieldIndex = index;
        }
    });

    if (uniqueFieldIndex > -1) {
        return queryAnalysis.indexedKeys[uniqueFieldIndex];
    }

    if (numericFieldIndex > -1) {
        return queryAnalysis.indexedKeys[numericFieldIndex];
    }

    return queryAnalysis.indexedKeys[plainFieldIndex];
};

var getQueryOperatorsFilters = function(queryAnalysis) {
    return queryAnalysis.queryOperators.advanced.map(function(operator) {

        return operator.operators.map(function(primitiveOperator) {
            return getOperatorImplementation({
                type: primitiveOperator,
                key: operator.key,
                value: operator.value[primitiveOperator]
            });
        });

    }).reduce(concat);
};

var getPropertyUpdaters = function(updateAnalysis) {
    return updateAnalysis.updateOperators.advanced.map(function(operator) {
        return getOperatorImplementation({
            type: operator.key,
            key: null,
            value: operator.value
        });
    });
};

var createAdvancedOperatorsMatcher = function(queryAnalysis) {
    var operatorsFilters = getQueryOperatorsFilters(queryAnalysis);
    return function(item) {
        return operatorsFilters.every(function(filter) {
            return filter(item);
        });
    };
};

var createAdvancedPropertyUpdater = function(updateAnalysis) {
    var updaters = getPropertyUpdaters(updateAnalysis);
    return function(item) {
        updaters.forEach(function(updater) {
            updater(item);
        });
    };
};

var getPlainKeys = function(queryAnalysis) {
    return queryAnalysis.queryOperators.plain.map(function(op) {
        return op.key;
    });
};

var executionPlans = {

    primaryKey: function(query, queryAnalysis, table) {
        var primaryKeyName = queryAnalysis.primaryKey.key;
        var primaryQueryValue = queryAnalysis.primaryKey.value;

        var collection = table.where(primaryKeyName).equals(primaryQueryValue);


        if (queryAnalysis.queryOperators.plain.length > 0) {
            var plainPropsMatcher = createPlainPropertyMatcher(query, getPlainKeys(queryAnalysis));
            collection.and(plainPropsMatcher);
        }

        if (queryAnalysis.queryOperators.advanced.length > 0) {
            var advancedOperatorsMatcher = createAdvancedOperatorsMatcher(queryAnalysis);
            collection.and(advancedOperatorsMatcher);
        }

        return collection;
    },

    indexedProp: function(query, queryAnalysis, table) {
        var index = chooseIndex(query, queryAnalysis);
        var collection;
        if (index && index.plain) {
            collection = table.where(index.key).equals(index.value);
        } else {
            collection = table.toCollection();
        }

        if (queryAnalysis.queryOperators.plain.length > 0) {
            var plainPropsMatcher = createPlainPropertyMatcher(query, getPlainKeys(queryAnalysis));
            collection.and(plainPropsMatcher);
        }

        if (queryAnalysis.queryOperators.advanced.length > 0) {
            var advancedOperatorsMatcher = createAdvancedOperatorsMatcher(queryAnalysis);
            collection.and(advancedOperatorsMatcher);
        }

        return collection;
    },

    fullScan: function(query, queryAnalysis, table) {
        var collection = table.toCollection();

        if (queryAnalysis.queryOperators.plain.length > 0) {
            var plainPropsMatcher = createPlainPropertyMatcher(query, getPlainKeys(queryAnalysis));
            collection.and(plainPropsMatcher);
        }

        if (queryAnalysis.queryOperators.advanced.length > 0) {
            var advancedOperatorsMatcher = createAdvancedOperatorsMatcher(queryAnalysis);
            collection.and(advancedOperatorsMatcher);
        }

        return collection;
    }

};

var createCollectionUpdater = function(update, updateAnalysis) {

    var plainUpdate = updateAnalysis.updateOperators.plain.length > 0;
    var advancedUpdate = updateAnalysis.updateOperators.advanced.length > 0;

    if (plainUpdate && advancedUpdate) {
        return noop; // do nothing
    }

    if (plainUpdate) {
        return createPlainPropertyUpdater(update, updateAnalysis.keys);
    }

    if (advancedUpdate) {
        return createAdvancedPropertyUpdater(updateAnalysis);
    }
};

var createInsertResult = function(insertedCount, options) {
    return {
        insertedCount: 1,
        insertedId: options.id,
        ops: [options.item],
        result: {
            ok: 1,
            n: 1
        }
    };
};

var createUpdateResult = function(updateCount, options) {
    var isUpsert = options && options.isUpsert === true;
    var modified = isUpsert ? 0 : updateCount;
    var upserted = isUpsert ? 1 : 0;
    return {
        result: {
            ok: 1,
            // nScanned: 0, TODO: Can we add this?
            nModified: modified
        },
        // matchedCount: 0, TODO: Can we add this?
        modifiedCount: modified,
        upsertedCount: upserted,
        upsertedId: isUpsert ? options.id : null
    };
};

var createDeleteResult = function(deletedCount) {
    return {
        result: {
            ok: 1,
            n: deletedCount
        },

        deletedCount: deletedCount
    };
};

var createUpsertModifier = function(table, query, update) {
    return new dexie.Promise(function(resolve) {
        return table.update(query, update).then(function(result) {
            if (result.modifiedCount === 0) {
                var newItem = createObjectForUpsert(query, update);
                return table.insert(newItem);
            }
            return dexie.Promise.resolve(result);
        }).then(function(result) {
            var finalResult = result;
            if (typeof result.insertedId === 'number') {
                finalResult = createUpdateResult(1, {
                    isUpsert: true,
                    id: result.insertedId
                });
            }
            return resolve(finalResult);
        });
    });
};

var createPlainModifier = function(table, query, update) {
    var updateAnalysis = analyseUpdates(update);
    var updater = createCollectionUpdater(update, updateAnalysis);
    return table.find(query).modify(updater).then(function(updatesCount) {
        return createUpdateResult(updatesCount, null);
    });
};

var getOperatorImplementation = function(operator) {

    var operatorsImpl;
    if (operators.query.indexOf(operator.type) > -1) {
        operatorsImpl = comparsionQueryOperatorsImpl;
    } else if (operators.queryLogical.indexOf(operator.type) > -1) {
        operatorsImpl = logicalQueryOperatorsImpl;
    } else if (operators.update.indexOf(operator.type) > -1) {
        operatorsImpl = updateOperatorsImpl;
    }
    return operatorsImpl[operator.type](operator.key, operator.value);
};

var getOperators = function(objectKind, keys, reducerMaker) {
    return keys.reduce(reducerMaker(objectKind, keys), {
        plain: [],
        advanced: []
    });
};

var createQueryOperatorsReducer = function(query) {
    return function(operatorsKinds, queryKey) {
        var queryValue = query[queryKey];
        var plainValue = isPlainValue(queryValue);
        var logicalOperator = operators.queryLogical.indexOf(queryKey) > -1;

        if (plainValue) {

            operatorsKinds.plain.push({
                key: queryKey,
                value: queryValue,
                plain: plainValue
            });

        } else if (logicalOperator) {

            var value = {};
            value[queryKey] = queryValue;
            operatorsKinds.advanced.push({
                key: queryKey,
                value: value,
                plain: plainValue,
                operators: [queryKey]
            });

        } else {

            operatorsKinds.advanced.push({
                key: queryKey,
                value: queryValue,
                plain: plainValue,
                operators: Object.keys(queryValue).filter(function(operatorKey) {
                    return operators.query.indexOf(operatorKey) > -1;
                })
            });

        }

        return operatorsKinds;
    };
};

var createUpdateOperatorsReducer = function(update) {
    return function(updateKinds, updateKey) {
        var updateValue = update[updateKey];
        var plainValue = isPlainValue(updateValue);

        if (plainValue) {

            updateKinds.plain.push({
                key: updateKey,
                value: updateValue,
                plain: plainValue
            });

        } else {

            updateKinds.advanced.push({
                key: updateKey,
                value: updateValue,
                plain: plainValue
            });

        }

        return updateKinds;
    };
};

var getQueryOperators = function(query, keys) {
    return getOperators(query, keys, createQueryOperatorsReducer);
};

var getUpdateOperators = function(update, keys) {
    return getOperators(update, keys, createUpdateOperatorsReducer);
};

var getQueryPrimaryKey = function(query, schema) {
    var keyName = schema.primKey.keyPath;
    var keyValue = query[keyName];
    var keyType = typeof keyValue;
    var hasPrimaryKey = keyType === 'number' || keyType === 'string';
    return hasPrimaryKey ? { key: keyName, value: keyValue } : { key: false };
};

var getQueryIndexedKeys = function(query, keys, schema) {
    return schema.indexes.filter(function(indexSpec) {
        return keys.indexOf(indexSpec.keyPath) > -1;
    }).map(function(indexSpec) {
        var key = indexSpec.keyPath;
        return {
            key: key,
            value: query[key],
            unique: indexSpec.unique,
            plain: isPlainValue(query[key])
        };
    });
};

var analyseQuery = function(query, schema) {
    var keys = Object.keys(query);

    return {
        keys: keys,
        queryOperators: getQueryOperators(query, keys),
        primaryKey: getQueryPrimaryKey(query, schema),
        indexedKeys: getQueryIndexedKeys(query, keys, schema)
    };
};

var analyseUpdates = function(update) {
    var keys = Object.keys(update);

    return {
        keys: keys,
        updateOperators: getUpdateOperators(update, keys)
    };
};

var analyseUpdateOptions = function(options) {
    if (isEmptyValue(options)) {
        return {};
    }

    return only(options, supportedUpdateOptions);
};

var chooseExecutuionPlan = function(query, schema) {

    var queryAnalysis = analyseQuery(query, schema);

    var plan;
    if (queryAnalysis.primaryKey.key) {
        plan = 'primaryKey';
    } else if (queryAnalysis.indexedKeys.length > 0) {
        plan = 'indexedProp';
    } else {
        plan = 'fullScan';
    }

    return {
        queryAnalysis: queryAnalysis,
        execute: executionPlans[plan]
    };
};

var performCollectionUpdate = function(table, query, update, options) {
    var updateModifier = options.upsert === true ? createUpsertModifier : createPlainModifier;
    return updateModifier(table, query, update);
};

var performFind = function(table, query) {
    if (isEmptyValue(query)) { return table.toCollection(); }
    var executionPlan = chooseExecutuionPlan(query, table.schema);
    return executionPlan.execute(query, executionPlan.queryAnalysis, table);
};

var performInsert = function(table, item) {
    var idKey = table.schema.primKey.keyPath;
    return table.add(item).then(function(id) {
        var newObj = only(item, Object.keys(item));
        newObj[idKey] = id;

        return createInsertResult(1, {
            item: item,
            id: id
        });
    });
};

var performRemove = function(table, query) {
    return performFind(table, query).delete().then(createDeleteResult);
};

var performDrop = function(table) {
    return table.toCollection().delete().then(createDeleteResult);
};

dexie = dexie.default || dexie;

dexie.addons.push(function(db) {

    dexie.prototype.collection = function collection(collectionName) {
        return db.table(collectionName);
    };

    db.Table.prototype.count = function count(query) {
        var emptyQuery = isEmptyValue(query);
        var collection = emptyQuery ? this.toCollection() : performFind(this, query);
        return collection.count();
    };

    db.Table.prototype.find = function find(query) {
        return performFind(this, query);
    };

    db.Table.prototype.findOne = function findOne(query) {
        return performFind(this, query).first();
    };

    db.Table.prototype.insert = function insert(item) {
        return performInsert(this, item);
    };

    db.Table.prototype.remove = function remove(query) {
        return performRemove(this, query);
    };

    db.Table.prototype.drop = function drop() {
        return performDrop(this);
    };

    var WriteableTable;
    if (db.WriteableTable) {
        WriteableTable = db.WriteableTable;
    } else {
        WriteableTable = db.Table;
    }

    WriteableTable.prototype.update = function update(query, update, options) {
        var processedOptions = analyseUpdateOptions(options);
        return performCollectionUpdate(this, query, update, processedOptions);
    };
});


/***/ }),

/***/ "./node_modules/dexie-mongoify/src/utils/array-slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/dexie-mongoify/src/utils/array-slice.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";

module.exports = function arraySlice(array, slice) {
    if (slice >= 0) {
        return array.slice(0, slice);
    } else {
        return array.slice(slice);
    }
};


/***/ }),

/***/ "./node_modules/dexie-mongoify/src/utils/has.js":
/*!******************************************************!*\
  !*** ./node_modules/dexie-mongoify/src/utils/has.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

module.exports = function has(obj, key) {
    return obj.hasOwnProperty(key);
};


/***/ }),

/***/ "./node_modules/dexie-mongoify/src/utils/is-array-field.js":
/*!*****************************************************************!*\
  !*** ./node_modules/dexie-mongoify/src/utils/is-array-field.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var has = __webpack_require__(/*! ./has */ "./node_modules/dexie-mongoify/src/utils/has.js");
module.exports = function isArrayField(value, key) {
    var hasField = has(value, key);
    var isArray = Array.isArray(value[key]);

    if (hasField && !isArray) {
        throw new Error('You can\'t use array update operator on non-array field');
    }
    return hasField;
};


/***/ }),

/***/ "./node_modules/dexie-mongoify/src/utils/is-empty-value.js":
/*!*****************************************************************!*\
  !*** ./node_modules/dexie-mongoify/src/utils/is-empty-value.js ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = function isEmptyValue(value) {
    var isObj = typeof value === 'object' && value !== null;
    var isFalsy = !(isObj && value);
    return isFalsy || Object.keys(value).length === 0;
};


/***/ }),

/***/ "./node_modules/dexie-mongoify/src/utils/is-plain-value.js":
/*!*****************************************************************!*\
  !*** ./node_modules/dexie-mongoify/src/utils/is-plain-value.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";

module.exports = function(value) {
    var type = typeof value;
    return type === 'number' || type === 'string' || type === 'boolean';
};


/***/ }),

/***/ "./node_modules/dexie-mongoify/src/utils/noop.js":
/*!*******************************************************!*\
  !*** ./node_modules/dexie-mongoify/src/utils/noop.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = function noop() {};


/***/ }),

/***/ "./node_modules/dexie-mongoify/src/utils/value-comparator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/dexie-mongoify/src/utils/value-comparator.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";

module.exports = function valueComparator(prev, next, direction) {
    return direction === 1 ? prev > next : prev < next;
};


/***/ }),

/***/ "./node_modules/dexie/dist/dexie.mjs":
/*!*******************************************!*\
  !*** ./node_modules/dexie/dist/dexie.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Dexie": () => (/* binding */ Dexie)
/* harmony export */ });
/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version 3.0.3, Wed Nov 18 2020
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */
 
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};










function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var keys = Object.keys;
var isArray = Array.isArray;
var _global = typeof self !== 'undefined' ? self :
    typeof window !== 'undefined' ? window :
        global;
if (typeof Promise !== 'undefined' && !_global.Promise) {
    _global.Promise = Promise;
}
function extend(obj, extension) {
    if (typeof extension !== 'object')
        return obj;
    keys(extension).forEach(function (key) {
        obj[key] = extension[key];
    });
    return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
    return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
    if (typeof extension === 'function')
        extension = extension(getProto(proto));
    keys(extension).forEach(function (key) {
        setProp(proto, key, extension[key]);
    });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
    defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ?
        { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } :
        { value: functionOrGetSet, configurable: true, writable: true }, options));
}
function derive(Child) {
    return {
        from: function (Parent) {
            Child.prototype = Object.create(Parent.prototype);
            setProp(Child.prototype, "constructor", Child);
            return {
                extend: props.bind(null, Child.prototype)
            };
        }
    };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
    var pd = getOwnPropertyDescriptor(obj, prop);
    var proto;
    return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
    return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
    return overridedFactory(origFunc);
}
function assert(b) {
    if (!b)
        throw new Error("Assertion Failed");
}
function asap(fn) {
    if (_global.setImmediate)
        setImmediate(fn);
    else
        setTimeout(fn, 0);
}

function arrayToObject(array, extractor) {
    return array.reduce(function (result, item, i) {
        var nameAndValue = extractor(item, i);
        if (nameAndValue)
            result[nameAndValue[0]] = nameAndValue[1];
        return result;
    }, {});
}

function tryCatch(fn, onerror, args) {
    try {
        fn.apply(null, args);
    }
    catch (ex) {
        onerror && onerror(ex);
    }
}
function getByKeyPath(obj, keyPath) {
    if (hasOwn(obj, keyPath))
        return obj[keyPath];
    if (!keyPath)
        return obj;
    if (typeof keyPath !== 'string') {
        var rv = [];
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            var val = getByKeyPath(obj, keyPath[i]);
            rv.push(val);
        }
        return rv;
    }
    var period = keyPath.indexOf('.');
    if (period !== -1) {
        var innerObj = obj[keyPath.substr(0, period)];
        return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
    }
    return undefined;
}
function setByKeyPath(obj, keyPath, value) {
    if (!obj || keyPath === undefined)
        return;
    if ('isFrozen' in Object && Object.isFrozen(obj))
        return;
    if (typeof keyPath !== 'string' && 'length' in keyPath) {
        assert(typeof value !== 'string' && 'length' in value);
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            setByKeyPath(obj, keyPath[i], value[i]);
        }
    }
    else {
        var period = keyPath.indexOf('.');
        if (period !== -1) {
            var currentKeyPath = keyPath.substr(0, period);
            var remainingKeyPath = keyPath.substr(period + 1);
            if (remainingKeyPath === "")
                if (value === undefined) {
                    if (isArray(obj) && !isNaN(parseInt(currentKeyPath)))
                        obj.splice(currentKeyPath, 1);
                    else
                        delete obj[currentKeyPath];
                }
                else
                    obj[currentKeyPath] = value;
            else {
                var innerObj = obj[currentKeyPath];
                if (!innerObj)
                    innerObj = (obj[currentKeyPath] = {});
                setByKeyPath(innerObj, remainingKeyPath, value);
            }
        }
        else {
            if (value === undefined) {
                if (isArray(obj) && !isNaN(parseInt(keyPath)))
                    obj.splice(keyPath, 1);
                else
                    delete obj[keyPath];
            }
            else
                obj[keyPath] = value;
        }
    }
}
function delByKeyPath(obj, keyPath) {
    if (typeof keyPath === 'string')
        setByKeyPath(obj, keyPath, undefined);
    else if ('length' in keyPath)
        [].map.call(keyPath, function (kp) {
            setByKeyPath(obj, kp, undefined);
        });
}
function shallowClone(obj) {
    var rv = {};
    for (var m in obj) {
        if (hasOwn(obj, m))
            rv[m] = obj[m];
    }
    return rv;
}
var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set"
    .split(',').concat(flatten([8, 16, 32, 64].map(function (num) { return ["Int", "Uint", "Float"].map(function (t) { return t + num + "Array"; }); }))).filter(function (t) { return _global[t]; });
var intrinsicTypes = intrinsicTypeNames.map(function (t) { return _global[t]; });
var intrinsicTypeNameSet = arrayToObject(intrinsicTypeNames, function (x) { return [x, true]; });
function deepClone(any) {
    if (!any || typeof any !== 'object')
        return any;
    var rv;
    if (isArray(any)) {
        rv = [];
        for (var i = 0, l = any.length; i < l; ++i) {
            rv.push(deepClone(any[i]));
        }
    }
    else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
        rv = any;
    }
    else {
        rv = any.constructor ? Object.create(any.constructor.prototype) : {};
        for (var prop in any) {
            if (hasOwn(any, prop)) {
                rv[prop] = deepClone(any[prop]);
            }
        }
    }
    return rv;
}
var toString = {}.toString;
function toStringTag(o) {
    return toString.call(o).slice(8, -1);
}
var getValueOf = function (val, type) {
    return type === "Array" ? '' + val.map(function (v) { return getValueOf(v, toStringTag(v)); }) :
        type === "ArrayBuffer" ? '' + new Uint8Array(val) :
            type === "Date" ? val.getTime() :
                ArrayBuffer.isView(val) ? '' + new Uint8Array(val.buffer) :
                    val;
};
function getObjectDiff(a, b, rv, prfx) {
    rv = rv || {};
    prfx = prfx || '';
    keys(a).forEach(function (prop) {
        if (!hasOwn(b, prop))
            rv[prfx + prop] = undefined;
        else {
            var ap = a[prop], bp = b[prop];
            if (typeof ap === 'object' && typeof bp === 'object' && ap && bp) {
                var apTypeName = toStringTag(ap);
                var bpTypeName = toStringTag(bp);
                if (apTypeName === bpTypeName) {
                    if (intrinsicTypeNameSet[apTypeName]) {
                        if (getValueOf(ap, apTypeName) !== getValueOf(bp, bpTypeName)) {
                            rv[prfx + prop] = b[prop];
                        }
                    }
                    else {
                        getObjectDiff(ap, bp, rv, prfx + prop + ".");
                    }
                }
                else {
                    rv[prfx + prop] = b[prop];
                }
            }
            else if (ap !== bp)
                rv[prfx + prop] = b[prop];
        }
    });
    keys(b).forEach(function (prop) {
        if (!hasOwn(a, prop)) {
            rv[prfx + prop] = b[prop];
        }
    });
    return rv;
}
var iteratorSymbol = typeof Symbol !== 'undefined' && Symbol.iterator;
var getIteratorOf = iteratorSymbol ? function (x) {
    var i;
    return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () { return null; };
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
    var i, a, x, it;
    if (arguments.length === 1) {
        if (isArray(arrayLike))
            return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string')
            return [arrayLike];
        if ((it = getIteratorOf(arrayLike))) {
            a = [];
            while (x = it.next(), !x.done)
                a.push(x.value);
            return a;
        }
        if (arrayLike == null)
            return [arrayLike];
        i = arrayLike.length;
        if (typeof i === 'number') {
            a = new Array(i);
            while (i--)
                a[i] = arrayLike[i];
            return a;
        }
        return [arrayLike];
    }
    i = arguments.length;
    a = new Array(i);
    while (i--)
        a[i] = arguments[i];
    return a;
}
var isAsyncFunction = typeof Symbol !== 'undefined'
    ? function (fn) { return fn[Symbol.toStringTag] === 'AsyncFunction'; }
    : function () { return false; };

var debug = typeof location !== 'undefined' &&
    /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
    debug = value;
    libraryFilter = filter;
}
var libraryFilter = function () { return true; };
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
    if (NEEDS_THROW_FOR_STACK)
        try {
            throw new Error();
        }
        catch (e) {
            return e;
        }
    return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
    var stack = exception.stack;
    if (!stack)
        return "";
    numIgnoredFrames = (numIgnoredFrames || 0);
    if (stack.indexOf(exception.name) === 0)
        numIgnoredFrames += (exception.name + exception.message).split('\n').length;
    return stack.split('\n')
        .slice(numIgnoredFrames)
        .filter(libraryFilter)
        .map(function (frame) { return "\n" + frame; })
        .join('');
}

var dexieErrorNames = [
    'Modify',
    'Bulk',
    'OpenFailed',
    'VersionChange',
    'Schema',
    'Upgrade',
    'InvalidTable',
    'MissingAPI',
    'NoSuchDatabase',
    'InvalidArgument',
    'SubTransaction',
    'Unsupported',
    'Internal',
    'DatabaseClosed',
    'PrematureCommit',
    'ForeignAwait'
];
var idbDomErrorNames = [
    'Unknown',
    'Constraint',
    'Data',
    'TransactionInactive',
    'ReadOnly',
    'Version',
    'NotFound',
    'InvalidState',
    'InvalidAccess',
    'Abort',
    'Timeout',
    'QuotaExceeded',
    'Syntax',
    'DataClone'
];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed"
};
function DexieError(name, msg) {
    this._e = getErrorWithStack();
    this.name = name;
    this.message = msg;
}
derive(DexieError).from(Error).extend({
    stack: {
        get: function () {
            return this._stack ||
                (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
        }
    },
    toString: function () { return this.name + ": " + this.message; }
});
function getMultiErrorMessage(msg, failures) {
    return msg + ". Errors: " + Object.keys(failures)
        .map(function (key) { return failures[key].toString(); })
        .filter(function (v, i, s) { return s.indexOf(v) === i; })
        .join('\n');
}
function ModifyError(msg, failures, successCount, failedKeys) {
    this._e = getErrorWithStack();
    this.failures = failures;
    this.failedKeys = failedKeys;
    this.successCount = successCount;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
    this._e = getErrorWithStack();
    this.name = "BulkError";
    this.failures = failures;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce(function (obj, name) { return (obj[name] = name + "Error", obj); }, {});
var BaseException = DexieError;
var exceptions = errorList.reduce(function (obj, name) {
    var fullName = name + "Error";
    function DexieError(msgOrInner, inner) {
        this._e = getErrorWithStack();
        this.name = fullName;
        if (!msgOrInner) {
            this.message = defaultTexts[name] || fullName;
            this.inner = null;
        }
        else if (typeof msgOrInner === 'string') {
            this.message = "" + msgOrInner + (!inner ? '' : '\n ' + inner);
            this.inner = inner || null;
        }
        else if (typeof msgOrInner === 'object') {
            this.message = msgOrInner.name + " " + msgOrInner.message;
            this.inner = msgOrInner;
        }
    }
    derive(DexieError).from(BaseException);
    obj[name] = DexieError;
    return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
    obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
function mapError(domError, message) {
    if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
        return domError;
    var rv = new exceptionMap[domError.name](message || domError.message, domError);
    if ("stack" in domError) {
        setProp(rv, "stack", { get: function () {
                return this.inner.stack;
            } });
    }
    return rv;
}
var fullNameExceptions = errorList.reduce(function (obj, name) {
    if (["Syntax", "Type", "Range"].indexOf(name) === -1)
        obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;

function nop() { }
function mirror(val) { return val; }
function pureFunctionChain(f1, f2) {
    if (f1 == null || f1 === mirror)
        return f2;
    return function (val) {
        return f2(f1(val));
    };
}
function callBoth(on1, on2) {
    return function () {
        on1.apply(this, arguments);
        on2.apply(this, arguments);
    };
}
function hookCreatingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res !== undefined)
            arguments[0] = res;
        var onsuccess = this.onsuccess,
        onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res2 !== undefined ? res2 : res;
    };
}
function hookDeletingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess,
        onerror = this.onerror;
        this.onsuccess = this.onerror = null;
        f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    };
}
function hookUpdatingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function (modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res);
        var onsuccess = this.onsuccess,
        onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res === undefined ?
            (res2 === undefined ? undefined : res2) :
            (extend(res, res2));
    };
}
function reverseStoppableEventChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        if (f2.apply(this, arguments) === false)
            return false;
        return f1.apply(this, arguments);
    };
}

function promisableChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res && typeof res.then === 'function') {
            var thiz = this, i = arguments.length, args = new Array(i);
            while (i--)
                args[i] = arguments[i];
            return res.then(function () {
                return f2.apply(thiz, args);
            });
        }
        return f2.apply(this, arguments);
    };
}

var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100;
var MAX_LONG_STACKS = 20;
var ZONE_ECHO_LIMIT = 100;
var _a = typeof Promise === 'undefined' ?
    [] :
    (function () {
        var globalP = Promise.resolve();
        if (typeof crypto === 'undefined' || !crypto.subtle)
            return [globalP, globalP.__proto__, globalP];
        var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [
            nativeP,
            nativeP.__proto__,
            globalP
        ];
    })();
var resolvedNativePromise = _a[0];
var nativePromiseProto = _a[1];
var resolvedGlobalPromise = _a[2];
var nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ?
    function () { resolvedGlobalPromise.then(physicalTick); }
    :
        _global.setImmediate ?
            setImmediate.bind(null, physicalTick) :
            _global.MutationObserver ?
                function () {
                    var hiddenDiv = document.createElement("div");
                    (new MutationObserver(function () {
                        physicalTick();
                        hiddenDiv = null;
                    })).observe(hiddenDiv, { attributes: true });
                    hiddenDiv.setAttribute('i', '1');
                } :
                function () { setTimeout(physicalTick, 0); };
var asap$1 = function (callback, args) {
    microtickQueue.push([callback, args]);
    if (needsNewPhysicalTick) {
        schedulePhysicalTick();
        needsNewPhysicalTick = false;
    }
};
var isOutsideMicroTick = true;
var needsNewPhysicalTick = true;
var unhandledErrors = [];
var rejectingErrors = [];
var currentFulfiller = null;
var rejectionMapper = mirror;
var globalPSD = {
    id: 'global',
    global: true,
    ref: 0,
    unhandleds: [],
    onunhandled: globalError,
    pgp: false,
    env: {},
    finalize: function () {
        this.unhandleds.forEach(function (uh) {
            try {
                globalError(uh[0], uh[1]);
            }
            catch (e) { }
        });
    }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
    if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
    this._listeners = [];
    this.onuncatched = nop;
    this._lib = false;
    var psd = (this._PSD = PSD);
    if (debug) {
        this._stackHolder = getErrorWithStack();
        this._prev = null;
        this._numPrev = 0;
    }
    if (typeof fn !== 'function') {
        if (fn !== INTERNAL)
            throw new TypeError('Not a function');
        this._state = arguments[1];
        this._value = arguments[2];
        if (this._state === false)
            handleRejection(this, this._value);
        return;
    }
    this._state = null;
    this._value = null;
    ++psd.ref;
    executePromiseTask(this, fn);
}
var thenProp = {
    get: function () {
        var psd = PSD, microTaskId = totalEchoes;
        function then(onFulfilled, onRejected) {
            var _this = this;
            var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
            var cleanup = possibleAwait && !decrementExpectedAwaits();
            var rv = new DexiePromise(function (resolve, reject) {
                propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
            });
            debug && linkToPreviousPromise(rv, this);
            return rv;
        }
        then.prototype = INTERNAL;
        return then;
    },
    set: function (value) {
        setProp(this, 'then', value && value.prototype === INTERNAL ?
            thenProp :
            {
                get: function () {
                    return value;
                },
                set: thenProp.set
            });
    }
};
props(DexiePromise.prototype, {
    then: thenProp,
    _then: function (onFulfilled, onRejected) {
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
    },
    catch: function (onRejected) {
        if (arguments.length === 1)
            return this.then(null, onRejected);
        var type = arguments[0], handler = arguments[1];
        return typeof type === 'function' ? this.then(null, function (err) {
            return err instanceof type ? handler(err) : PromiseReject(err);
        })
            : this.then(null, function (err) {
                return err && err.name === type ? handler(err) : PromiseReject(err);
            });
    },
    finally: function (onFinally) {
        return this.then(function (value) {
            onFinally();
            return value;
        }, function (err) {
            onFinally();
            return PromiseReject(err);
        });
    },
    stack: {
        get: function () {
            if (this._stack)
                return this._stack;
            try {
                stack_being_generated = true;
                var stacks = getStack(this, [], MAX_LONG_STACKS);
                var stack = stacks.join("\nFrom previous: ");
                if (this._state !== null)
                    this._stack = stack;
                return stack;
            }
            finally {
                stack_being_generated = false;
            }
        }
    },
    timeout: function (ms, msg) {
        var _this = this;
        return ms < Infinity ?
            new DexiePromise(function (resolve, reject) {
                var handle = setTimeout(function () { return reject(new exceptions.Timeout(msg)); }, ms);
                _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
            }) : this;
    }
});
if (typeof Symbol !== 'undefined' && Symbol.toStringTag)
    setProp(DexiePromise.prototype, Symbol.toStringTag, 'Dexie.Promise');
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.resolve = resolve;
    this.reject = reject;
    this.psd = zone;
}
props(DexiePromise, {
    all: function () {
        var values = getArrayOf.apply(null, arguments)
            .map(onPossibleParallellAsync);
        return new DexiePromise(function (resolve, reject) {
            if (values.length === 0)
                resolve([]);
            var remaining = values.length;
            values.forEach(function (a, i) { return DexiePromise.resolve(a).then(function (x) {
                values[i] = x;
                if (!--remaining)
                    resolve(values);
            }, reject); });
        });
    },
    resolve: function (value) {
        if (value instanceof DexiePromise)
            return value;
        if (value && typeof value.then === 'function')
            return new DexiePromise(function (resolve, reject) {
                value.then(resolve, reject);
            });
        var rv = new DexiePromise(INTERNAL, true, value);
        linkToPreviousPromise(rv, currentFulfiller);
        return rv;
    },
    reject: PromiseReject,
    race: function () {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function (resolve, reject) {
            values.map(function (value) { return DexiePromise.resolve(value).then(resolve, reject); });
        });
    },
    PSD: {
        get: function () { return PSD; },
        set: function (value) { return PSD = value; }
    },
    totalEchoes: { get: function () { return totalEchoes; } },
    newPSD: newScope,
    usePSD: usePSD,
    scheduler: {
        get: function () { return asap$1; },
        set: function (value) { asap$1 = value; }
    },
    rejectionMapper: {
        get: function () { return rejectionMapper; },
        set: function (value) { rejectionMapper = value; }
    },
    follow: function (fn, zoneProps) {
        return new DexiePromise(function (resolve, reject) {
            return newScope(function (resolve, reject) {
                var psd = PSD;
                psd.unhandleds = [];
                psd.onunhandled = reject;
                psd.finalize = callBoth(function () {
                    var _this = this;
                    run_at_end_of_this_or_next_physical_tick(function () {
                        _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
                    });
                }, psd.finalize);
                fn();
            }, zoneProps, resolve, reject);
        });
    }
});
if (NativePromise) {
    if (NativePromise.allSettled)
        setProp(DexiePromise, "allSettled", function () {
            var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function (resolve) {
                if (possiblePromises.length === 0)
                    resolve([]);
                var remaining = possiblePromises.length;
                var results = new Array(remaining);
                possiblePromises.forEach(function (p, i) { return DexiePromise.resolve(p).then(function (value) { return results[i] = { status: "fulfilled", value: value }; }, function (reason) { return results[i] = { status: "rejected", reason: reason }; })
                    .then(function () { return --remaining || resolve(results); }); });
            });
        });
    if (NativePromise.any && typeof AggregateError !== 'undefined')
        setProp(DexiePromise, "any", function () {
            var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function (resolve, reject) {
                if (possiblePromises.length === 0)
                    reject(new AggregateError([]));
                var remaining = possiblePromises.length;
                var failures = new Array(remaining);
                possiblePromises.forEach(function (p, i) { return DexiePromise.resolve(p).then(function (value) { return resolve(value); }, function (failure) {
                    failures[i] = failure;
                    if (!--remaining)
                        reject(new AggregateError(failures));
                }); });
            });
        });
}
function executePromiseTask(promise, fn) {
    try {
        fn(function (value) {
            if (promise._state !== null)
                return;
            if (value === promise)
                throw new TypeError('A promise cannot be resolved with itself.');
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            if (value && typeof value.then === 'function') {
                executePromiseTask(promise, function (resolve, reject) {
                    value instanceof DexiePromise ?
                        value._then(resolve, reject) :
                        value.then(resolve, reject);
                });
            }
            else {
                promise._state = true;
                promise._value = value;
                propagateAllListeners(promise);
            }
            if (shouldExecuteTick)
                endMicroTickScope();
        }, handleRejection.bind(null, promise));
    }
    catch (ex) {
        handleRejection(promise, ex);
    }
}
function handleRejection(promise, reason) {
    rejectingErrors.push(reason);
    if (promise._state !== null)
        return;
    var shouldExecuteTick = promise._lib && beginMicroTickScope();
    reason = rejectionMapper(reason);
    promise._state = false;
    promise._value = reason;
    debug && reason !== null && typeof reason === 'object' && !reason._promise && tryCatch(function () {
        var origProp = getPropertyDescriptor(reason, "stack");
        reason._promise = promise;
        setProp(reason, "stack", {
            get: function () {
                return stack_being_generated ?
                    origProp && (origProp.get ?
                        origProp.get.apply(reason) :
                        origProp.value) :
                    promise.stack;
            }
        });
    });
    addPossiblyUnhandledError(promise);
    propagateAllListeners(promise);
    if (shouldExecuteTick)
        endMicroTickScope();
}
function propagateAllListeners(promise) {
    var listeners = promise._listeners;
    promise._listeners = [];
    for (var i = 0, len = listeners.length; i < len; ++i) {
        propagateToListener(promise, listeners[i]);
    }
    var psd = promise._PSD;
    --psd.ref || psd.finalize();
    if (numScheduledCalls === 0) {
        ++numScheduledCalls;
        asap$1(function () {
            if (--numScheduledCalls === 0)
                finalizePhysicalTick();
        }, []);
    }
}
function propagateToListener(promise, listener) {
    if (promise._state === null) {
        promise._listeners.push(listener);
        return;
    }
    var cb = promise._state ? listener.onFulfilled : listener.onRejected;
    if (cb === null) {
        return (promise._state ? listener.resolve : listener.reject)(promise._value);
    }
    ++listener.psd.ref;
    ++numScheduledCalls;
    asap$1(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
    try {
        currentFulfiller = promise;
        var ret, value = promise._value;
        if (promise._state) {
            ret = cb(value);
        }
        else {
            if (rejectingErrors.length)
                rejectingErrors = [];
            ret = cb(value);
            if (rejectingErrors.indexOf(value) === -1)
                markErrorAsHandled(promise);
        }
        listener.resolve(ret);
    }
    catch (e) {
        listener.reject(e);
    }
    finally {
        currentFulfiller = null;
        if (--numScheduledCalls === 0)
            finalizePhysicalTick();
        --listener.psd.ref || listener.psd.finalize();
    }
}
function getStack(promise, stacks, limit) {
    if (stacks.length === limit)
        return stacks;
    var stack = "";
    if (promise._state === false) {
        var failure = promise._value, errorName, message;
        if (failure != null) {
            errorName = failure.name || "Error";
            message = failure.message || failure;
            stack = prettyStack(failure, 0);
        }
        else {
            errorName = failure;
            message = "";
        }
        stacks.push(errorName + (message ? ": " + message : "") + stack);
    }
    if (debug) {
        stack = prettyStack(promise._stackHolder, 2);
        if (stack && stacks.indexOf(stack) === -1)
            stacks.push(stack);
        if (promise._prev)
            getStack(promise._prev, stacks, limit);
    }
    return stacks;
}
function linkToPreviousPromise(promise, prev) {
    var numPrev = prev ? prev._numPrev + 1 : 0;
    if (numPrev < LONG_STACKS_CLIP_LIMIT) {
        promise._prev = prev;
        promise._numPrev = numPrev;
    }
}
function physicalTick() {
    beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
    var wasRootExec = isOutsideMicroTick;
    isOutsideMicroTick = false;
    needsNewPhysicalTick = false;
    return wasRootExec;
}
function endMicroTickScope() {
    var callbacks, i, l;
    do {
        while (microtickQueue.length > 0) {
            callbacks = microtickQueue;
            microtickQueue = [];
            l = callbacks.length;
            for (i = 0; i < l; ++i) {
                var item = callbacks[i];
                item[0].apply(null, item[1]);
            }
        }
    } while (microtickQueue.length > 0);
    isOutsideMicroTick = true;
    needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
    var unhandledErrs = unhandledErrors;
    unhandledErrors = [];
    unhandledErrs.forEach(function (p) {
        p._PSD.onunhandled.call(null, p._value, p);
    });
    var finalizers = tickFinalizers.slice(0);
    var i = finalizers.length;
    while (i)
        finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
    function finalizer() {
        fn();
        tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
    }
    tickFinalizers.push(finalizer);
    ++numScheduledCalls;
    asap$1(function () {
        if (--numScheduledCalls === 0)
            finalizePhysicalTick();
    }, []);
}
function addPossiblyUnhandledError(promise) {
    if (!unhandledErrors.some(function (p) { return p._value === promise._value; }))
        unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
    var i = unhandledErrors.length;
    while (i)
        if (unhandledErrors[--i]._value === promise._value) {
            unhandledErrors.splice(i, 1);
            return;
        }
}
function PromiseReject(reason) {
    return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
    var psd = PSD;
    return function () {
        var wasRootExec = beginMicroTickScope(), outerScope = PSD;
        try {
            switchToZone(psd, true);
            return fn.apply(this, arguments);
        }
        catch (e) {
            errorCatcher && errorCatcher(e);
        }
        finally {
            switchToZone(outerScope, false);
            if (wasRootExec)
                endMicroTickScope();
        }
    };
}
var task = { awaits: 0, echoes: 0, id: 0 };
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props$$1, a1, a2) {
    var parent = PSD, psd = Object.create(parent);
    psd.parent = parent;
    psd.ref = 0;
    psd.global = false;
    psd.id = ++zone_id_counter;
    var globalEnv = globalPSD.env;
    psd.env = patchGlobalPromise ? {
        Promise: DexiePromise,
        PromiseProp: { value: DexiePromise, configurable: true, writable: true },
        all: DexiePromise.all,
        race: DexiePromise.race,
        allSettled: DexiePromise.allSettled,
        any: DexiePromise.any,
        resolve: DexiePromise.resolve,
        reject: DexiePromise.reject,
        nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
        gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
    } : {};
    if (props$$1)
        extend(psd, props$$1);
    ++parent.ref;
    psd.finalize = function () {
        --this.parent.ref || this.parent.finalize();
    };
    var rv = usePSD(psd, fn, a1, a2);
    if (psd.ref === 0)
        psd.finalize();
    return rv;
}
function incrementExpectedAwaits() {
    if (!task.id)
        task.id = ++taskCounter;
    ++task.awaits;
    task.echoes += ZONE_ECHO_LIMIT;
    return task.id;
}
function decrementExpectedAwaits() {
    if (!task.awaits)
        return false;
    if (--task.awaits === 0)
        task.id = 0;
    task.echoes = task.awaits * ZONE_ECHO_LIMIT;
    return true;
}
if (('' + nativePromiseThen).indexOf('[native code]') === -1) {
    incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
    if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
        incrementExpectedAwaits();
        return possiblePromise.then(function (x) {
            decrementExpectedAwaits();
            return x;
        }, function (e) {
            decrementExpectedAwaits();
            return rejection(e);
        });
    }
    return possiblePromise;
}
function zoneEnterEcho(targetZone) {
    ++totalEchoes;
    if (!task.echoes || --task.echoes === 0) {
        task.echoes = task.id = 0;
    }
    zoneStack.push(PSD);
    switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
    var zone = zoneStack[zoneStack.length - 1];
    zoneStack.pop();
    switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
    var currentZone = PSD;
    if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
        enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
    }
    if (targetZone === PSD)
        return;
    PSD = targetZone;
    if (currentZone === globalPSD)
        globalPSD.env = snapShot();
    if (patchGlobalPromise) {
        var GlobalPromise_1 = globalPSD.env.Promise;
        var targetEnv = targetZone.env;
        nativePromiseProto.then = targetEnv.nthen;
        GlobalPromise_1.prototype.then = targetEnv.gthen;
        if (currentZone.global || targetZone.global) {
            Object.defineProperty(_global, 'Promise', targetEnv.PromiseProp);
            GlobalPromise_1.all = targetEnv.all;
            GlobalPromise_1.race = targetEnv.race;
            GlobalPromise_1.resolve = targetEnv.resolve;
            GlobalPromise_1.reject = targetEnv.reject;
            if (targetEnv.allSettled)
                GlobalPromise_1.allSettled = targetEnv.allSettled;
            if (targetEnv.any)
                GlobalPromise_1.any = targetEnv.any;
        }
    }
}
function snapShot() {
    var GlobalPromise = _global.Promise;
    return patchGlobalPromise ? {
        Promise: GlobalPromise,
        PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
        all: GlobalPromise.all,
        race: GlobalPromise.race,
        allSettled: GlobalPromise.allSettled,
        any: GlobalPromise.any,
        resolve: GlobalPromise.resolve,
        reject: GlobalPromise.reject,
        nthen: nativePromiseProto.then,
        gthen: GlobalPromise.prototype.then
    } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
    var outerScope = PSD;
    try {
        switchToZone(psd, true);
        return fn(a1, a2, a3);
    }
    finally {
        switchToZone(outerScope, false);
    }
}
function enqueueNativeMicroTask(job) {
    nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
    return typeof fn !== 'function' ? fn : function () {
        var outerZone = PSD;
        if (possibleAwait)
            incrementExpectedAwaits();
        switchToZone(zone, true);
        try {
            return fn.apply(this, arguments);
        }
        finally {
            switchToZone(outerZone, false);
            if (cleanup)
                enqueueNativeMicroTask(decrementExpectedAwaits);
        }
    };
}
function getPatchedPromiseThen(origThen, zone) {
    return function (onResolved, onRejected) {
        return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
    };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
    var rv;
    try {
        rv = promise.onuncatched(err);
    }
    catch (e) { }
    if (rv !== false)
        try {
            var event, eventData = { promise: promise, reason: err };
            if (_global.document && document.createEvent) {
                event = document.createEvent('Event');
                event.initEvent(UNHANDLEDREJECTION, true, true);
                extend(event, eventData);
            }
            else if (_global.CustomEvent) {
                event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
                extend(event, eventData);
            }
            if (event && _global.dispatchEvent) {
                dispatchEvent(event);
                if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
                    try {
                        _global.onunhandledrejection(event);
                    }
                    catch (_) { }
            }
            if (debug && event && !event.defaultPrevented) {
                console.warn("Unhandled rejection: " + (err.stack || err));
            }
        }
        catch (e) { }
}
var rejection = DexiePromise.reject;

function tempTransaction(db, mode, storeNames, fn) {
    if (!db._state.openComplete && (!PSD.letThrough)) {
        if (!db._state.isBeingOpened) {
            if (!db._options.autoOpen)
                return rejection(new exceptions.DatabaseClosed());
            db.open().catch(nop);
        }
        return db._state.dbReadyPromise.then(function () { return tempTransaction(db, mode, storeNames, fn); });
    }
    else {
        var trans = db._createTransaction(mode, storeNames, db._dbSchema);
        try {
            trans.create();
        }
        catch (ex) {
            return rejection(ex);
        }
        return trans._promise(mode, function (resolve, reject) {
            return newScope(function () {
                PSD.trans = trans;
                return fn(resolve, reject, trans);
            });
        }).then(function (result) {
            return trans._completion.then(function () { return result; });
        });
    }
}

var DEXIE_VERSION = '3.0.3';
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = function (frame) { return !/(dexie\.js|dexie\.min\.js)/.test(frame); };
var DBNAMES_DB = '__dbnames';
var READONLY = 'readonly';
var READWRITE = 'readwrite';

function combine(filter1, filter2) {
    return filter1 ?
        filter2 ?
            function () { return filter1.apply(this, arguments) && filter2.apply(this, arguments); } :
            filter1 :
        filter2;
}

var AnyRange = {
    type: 3          ,
    lower: -Infinity,
    lowerOpen: false,
    upper: [[]],
    upperOpen: false
};

function workaroundForUndefinedPrimKey(keyPath) {
    return function (obj) {
        if (getByKeyPath(obj, keyPath) === undefined) {
            obj = deepClone(obj);
            delByKeyPath(obj, keyPath);
        }
        return obj;
    };
}

var Table =               (function () {
    function Table() {
    }
    Table.prototype._trans = function (mode, fn, writeLocked) {
        var trans = this._tx || PSD.trans;
        var tableName = this.name;
        function checkTableInTransaction(resolve, reject, trans) {
            if (!trans.schema[tableName])
                throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            return fn(trans.idbtrans, trans);
        }
        var wasRootExec = beginMicroTickScope();
        try {
            return trans && trans.db === this.db ?
                trans === PSD.trans ?
                    trans._promise(mode, checkTableInTransaction, writeLocked) :
                    newScope(function () { return trans._promise(mode, checkTableInTransaction, writeLocked); }, { trans: trans, transless: PSD.transless || PSD }) :
                tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
        }
        finally {
            if (wasRootExec)
                endMicroTickScope();
        }
    };
    Table.prototype.get = function (keyOrCrit, cb) {
        var _this = this;
        if (keyOrCrit && keyOrCrit.constructor === Object)
            return this.where(keyOrCrit).first(cb);
        return this._trans('readonly', function (trans) {
            return _this.core.get({ trans: trans, key: keyOrCrit })
                .then(function (res) { return _this.hook.reading.fire(res); });
        }).then(cb);
    };
    Table.prototype.where = function (indexOrCrit) {
        if (typeof indexOrCrit === 'string')
            return new this.db.WhereClause(this, indexOrCrit);
        if (isArray(indexOrCrit))
            return new this.db.WhereClause(this, "[" + indexOrCrit.join('+') + "]");
        var keyPaths = keys(indexOrCrit);
        if (keyPaths.length === 1)
            return this
                .where(keyPaths[0])
                .equals(indexOrCrit[keyPaths[0]]);
        var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
            return ix.compound &&
                keyPaths.every(function (keyPath) { return ix.keyPath.indexOf(keyPath) >= 0; }) &&
                ix.keyPath.every(function (keyPath) { return keyPaths.indexOf(keyPath) >= 0; });
        })[0];
        if (compoundIndex && this.db._maxKey !== maxString)
            return this
                .where(compoundIndex.name)
                .equals(compoundIndex.keyPath.map(function (kp) { return indexOrCrit[kp]; }));
        if (!compoundIndex && debug)
            console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " +
                ("compound index [" + keyPaths.join('+') + "]"));
        var idxByName = this.schema.idxByName;
        var idb = this.db._deps.indexedDB;
        function equals(a, b) {
            try {
                return idb.cmp(a, b) === 0;
            }
            catch (e) {
                return false;
            }
        }
        var _a = keyPaths.reduce(function (_a, keyPath) {
            var prevIndex = _a[0], prevFilterFn = _a[1];
            var index = idxByName[keyPath];
            var value = indexOrCrit[keyPath];
            return [
                prevIndex || index,
                prevIndex || !index ?
                    combine(prevFilterFn, index && index.multi ?
                        function (x) {
                            var prop = getByKeyPath(x, keyPath);
                            return isArray(prop) && prop.some(function (item) { return equals(value, item); });
                        } : function (x) { return equals(value, getByKeyPath(x, keyPath)); })
                    : prevFilterFn
            ];
        }, [null, null]), idx = _a[0], filterFunction = _a[1];
        return idx ?
            this.where(idx.name).equals(indexOrCrit[idx.keyPath])
                .filter(filterFunction) :
            compoundIndex ?
                this.filter(filterFunction) :
                this.where(keyPaths).equals('');
    };
    Table.prototype.filter = function (filterFunction) {
        return this.toCollection().and(filterFunction);
    };
    Table.prototype.count = function (thenShortcut) {
        return this.toCollection().count(thenShortcut);
    };
    Table.prototype.offset = function (offset) {
        return this.toCollection().offset(offset);
    };
    Table.prototype.limit = function (numRows) {
        return this.toCollection().limit(numRows);
    };
    Table.prototype.each = function (callback) {
        return this.toCollection().each(callback);
    };
    Table.prototype.toArray = function (thenShortcut) {
        return this.toCollection().toArray(thenShortcut);
    };
    Table.prototype.toCollection = function () {
        return new this.db.Collection(new this.db.WhereClause(this));
    };
    Table.prototype.orderBy = function (index) {
        return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ?
            "[" + index.join('+') + "]" :
            index));
    };
    Table.prototype.reverse = function () {
        return this.toCollection().reverse();
    };
    Table.prototype.mapToClass = function (constructor) {
        this.schema.mappedClass = constructor;
        var readHook = function (obj) {
            if (!obj)
                return obj;
            var res = Object.create(constructor.prototype);
            for (var m in obj)
                if (hasOwn(obj, m))
                    try {
                        res[m] = obj[m];
                    }
                    catch (_) { }
            return res;
        };
        if (this.schema.readHook) {
            this.hook.reading.unsubscribe(this.schema.readHook);
        }
        this.schema.readHook = readHook;
        this.hook("reading", readHook);
        return constructor;
    };
    Table.prototype.defineClass = function () {
        function Class(content) {
            extend(this, content);
        }
        
        return this.mapToClass(Class);
    };
    Table.prototype.add = function (obj, key) {
        var _this = this;
        var _a = this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
        var objToAdd = obj;
        if (keyPath && auto) {
            objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
        }
        return this._trans('readwrite', function (trans) {
            return _this.core.mutate({ trans: trans, type: 'add', keys: key != null ? [key] : null, values: [objToAdd] });
        }).then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult; })
            .then(function (lastResult) {
            if (keyPath) {
                try {
                    setByKeyPath(obj, keyPath, lastResult);
                }
                catch (_) { }
                
            }
            return lastResult;
        });
    };
    Table.prototype.update = function (keyOrObject, modifications) {
        if (typeof modifications !== 'object' || isArray(modifications))
            throw new exceptions.InvalidArgument("Modifications must be an object.");
        if (typeof keyOrObject === 'object' && !isArray(keyOrObject)) {
            keys(modifications).forEach(function (keyPath) {
                setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
            });
            var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
            if (key === undefined)
                return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
            return this.where(":id").equals(key).modify(modifications);
        }
        else {
            return this.where(":id").equals(keyOrObject).modify(modifications);
        }
    };
    Table.prototype.put = function (obj, key) {
        var _this = this;
        var _a = this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
        var objToAdd = obj;
        if (keyPath && auto) {
            objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
        }
        return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'put', values: [objToAdd], keys: key != null ? [key] : null }); })
            .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult; })
            .then(function (lastResult) {
            if (keyPath) {
                try {
                    setByKeyPath(obj, keyPath, lastResult);
                }
                catch (_) { }
                
            }
            return lastResult;
        });
    };
    Table.prototype.delete = function (key) {
        var _this = this;
        return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'delete', keys: [key] }); })
            .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined; });
    };
    Table.prototype.clear = function () {
        var _this = this;
        return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'deleteRange', range: AnyRange }); })
            .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined; });
    };
    Table.prototype.bulkGet = function (keys$$1) {
        var _this = this;
        return this._trans('readonly', function (trans) {
            return _this.core.getMany({
                keys: keys$$1,
                trans: trans
            }).then(function (result) { return result.map(function (res) { return _this.hook.reading.fire(res); }); });
        });
    };
    Table.prototype.bulkAdd = function (objects, keysOrOptions, options) {
        var _this = this;
        var keys$$1 = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
        options = options || (keys$$1 ? undefined : keysOrOptions);
        var wantResults = options ? options.allKeys : undefined;
        return this._trans('readwrite', function (trans) {
            var _a = _this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
            if (keyPath && keys$$1)
                throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (keys$$1 && keys$$1.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToAdd = keyPath && auto ?
                objects.map(workaroundForUndefinedPrimKey(keyPath)) :
                objects;
            return _this.core.mutate({ trans: trans, type: 'add', keys: keys$$1, values: objectsToAdd, wantResults: wantResults })
                .then(function (_a) {
                var numFailures = _a.numFailures, results = _a.results, lastResult = _a.lastResult, failures = _a.failures;
                var result = wantResults ? results : lastResult;
                if (numFailures === 0)
                    return result;
                throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", Object.keys(failures).map(function (pos) { return failures[pos]; }));
            });
        });
    };
    Table.prototype.bulkPut = function (objects, keysOrOptions, options) {
        var _this = this;
        var keys$$1 = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
        options = options || (keys$$1 ? undefined : keysOrOptions);
        var wantResults = options ? options.allKeys : undefined;
        return this._trans('readwrite', function (trans) {
            var _a = _this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
            if (keyPath && keys$$1)
                throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (keys$$1 && keys$$1.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToPut = keyPath && auto ?
                objects.map(workaroundForUndefinedPrimKey(keyPath)) :
                objects;
            return _this.core.mutate({ trans: trans, type: 'put', keys: keys$$1, values: objectsToPut, wantResults: wantResults })
                .then(function (_a) {
                var numFailures = _a.numFailures, results = _a.results, lastResult = _a.lastResult, failures = _a.failures;
                var result = wantResults ? results : lastResult;
                if (numFailures === 0)
                    return result;
                throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", Object.keys(failures).map(function (pos) { return failures[pos]; }));
            });
        });
    };
    Table.prototype.bulkDelete = function (keys$$1) {
        var _this = this;
        var numKeys = keys$$1.length;
        return this._trans('readwrite', function (trans) {
            return _this.core.mutate({ trans: trans, type: 'delete', keys: keys$$1 });
        }).then(function (_a) {
            var numFailures = _a.numFailures, lastResult = _a.lastResult, failures = _a.failures;
            if (numFailures === 0)
                return lastResult;
            throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
        });
    };
    return Table;
}());

function Events(ctx) {
    var evs = {};
    var rv = function (eventName, subscriber) {
        if (subscriber) {
            var i = arguments.length, args = new Array(i - 1);
            while (--i)
                args[i - 1] = arguments[i];
            evs[eventName].subscribe.apply(null, args);
            return ctx;
        }
        else if (typeof (eventName) === 'string') {
            return evs[eventName];
        }
    };
    rv.addEventType = add;
    for (var i = 1, l = arguments.length; i < l; ++i) {
        add(arguments[i]);
    }
    return rv;
    function add(eventName, chainFunction, defaultFunction) {
        if (typeof eventName === 'object')
            return addConfiguredEvents(eventName);
        if (!chainFunction)
            chainFunction = reverseStoppableEventChain;
        if (!defaultFunction)
            defaultFunction = nop;
        var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function (cb) {
                if (context.subscribers.indexOf(cb) === -1) {
                    context.subscribers.push(cb);
                    context.fire = chainFunction(context.fire, cb);
                }
            },
            unsubscribe: function (cb) {
                context.subscribers = context.subscribers.filter(function (fn) { return fn !== cb; });
                context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
        };
        evs[eventName] = rv[eventName] = context;
        return context;
    }
    function addConfiguredEvents(cfg) {
        keys(cfg).forEach(function (eventName) {
            var args = cfg[eventName];
            if (isArray(args)) {
                add(eventName, cfg[eventName][0], cfg[eventName][1]);
            }
            else if (args === 'asap') {
                var context = add(eventName, mirror, function fire() {
                    var i = arguments.length, args = new Array(i);
                    while (i--)
                        args[i] = arguments[i];
                    context.subscribers.forEach(function (fn) {
                        asap(function fireEvent() {
                            fn.apply(null, args);
                        });
                    });
                });
            }
            else
                throw new exceptions.InvalidArgument("Invalid event config");
        });
    }
}

function makeClassConstructor(prototype, constructor) {
    derive(constructor).from({ prototype: prototype });
    return constructor;
}

function createTableConstructor(db) {
    return makeClassConstructor(Table.prototype, function Table$$1(name, tableSchema, trans) {
        this.db = db;
        this._tx = trans;
        this.name = name;
        this.schema = tableSchema;
        this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
            "creating": [hookCreatingChain, nop],
            "reading": [pureFunctionChain, mirror],
            "updating": [hookUpdatingChain, nop],
            "deleting": [hookDeletingChain, nop]
        });
    });
}

function isPlainKeyRange(ctx, ignoreLimitFilter) {
    return !(ctx.filter || ctx.algorithm || ctx.or) &&
        (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
    ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
    var curr = ctx.replayFilter;
    ctx.replayFilter = curr ? function () { return combine(curr(), factory()); } : factory;
    ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
    ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
    if (ctx.isPrimKey)
        return coreSchema.primaryKey;
    var index = coreSchema.getIndexByKeyPath(ctx.index);
    if (!index)
        throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
    return index;
}
function openCursor(ctx, coreTable, trans) {
    var index = getIndexOrStore(ctx, coreTable.schema);
    return coreTable.openCursor({
        trans: trans,
        values: !ctx.keysOnly,
        reverse: ctx.dir === 'prev',
        unique: !!ctx.unique,
        query: {
            index: index,
            range: ctx.range
        }
    });
}
function iter(ctx, fn, coreTrans, coreTable) {
    var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
    if (!ctx.or) {
        return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
    }
    else {
        var set_1 = {};
        var union = function (item, cursor, advance) {
            if (!filter || filter(cursor, advance, function (result) { return cursor.stop(result); }, function (err) { return cursor.fail(err); })) {
                var primaryKey = cursor.primaryKey;
                var key = '' + primaryKey;
                if (key === '[object ArrayBuffer]')
                    key = '' + new Uint8Array(primaryKey);
                if (!hasOwn(set_1, key)) {
                    set_1[key] = true;
                    fn(item, cursor, advance);
                }
            }
        };
        return Promise.all([
            ctx.or._iterate(union, coreTrans),
            iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
        ]);
    }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
    var mappedFn = valueMapper ? function (x, c, a) { return fn(valueMapper(x), c, a); } : fn;
    var wrappedFn = wrap(mappedFn);
    return cursorPromise.then(function (cursor) {
        if (cursor) {
            return cursor.start(function () {
                var c = function () { return cursor.continue(); };
                if (!filter || filter(cursor, function (advancer) { return c = advancer; }, function (val) { cursor.stop(val); c = nop; }, function (e) { cursor.fail(e); c = nop; }))
                    wrappedFn(cursor.value, cursor, function (advancer) { return c = advancer; });
                c();
            });
        }
    });
}

var Collection =               (function () {
    function Collection() {
    }
    Collection.prototype._read = function (fn, cb) {
        var ctx = this._ctx;
        return ctx.error ?
            ctx.table._trans(null, rejection.bind(null, ctx.error)) :
            ctx.table._trans('readonly', fn).then(cb);
    };
    Collection.prototype._write = function (fn) {
        var ctx = this._ctx;
        return ctx.error ?
            ctx.table._trans(null, rejection.bind(null, ctx.error)) :
            ctx.table._trans('readwrite', fn, "locked");
    };
    Collection.prototype._addAlgorithm = function (fn) {
        var ctx = this._ctx;
        ctx.algorithm = combine(ctx.algorithm, fn);
    };
    Collection.prototype._iterate = function (fn, coreTrans) {
        return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
    };
    Collection.prototype.clone = function (props$$1) {
        var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
        if (props$$1)
            extend(ctx, props$$1);
        rv._ctx = ctx;
        return rv;
    };
    Collection.prototype.raw = function () {
        this._ctx.valueMapper = null;
        return this;
    };
    Collection.prototype.each = function (fn) {
        var ctx = this._ctx;
        return this._read(function (trans) { return iter(ctx, fn, trans, ctx.table.core); });
    };
    Collection.prototype.count = function (cb) {
        var _this = this;
        return this._read(function (trans) {
            var ctx = _this._ctx;
            var coreTable = ctx.table.core;
            if (isPlainKeyRange(ctx, true)) {
                return coreTable.count({
                    trans: trans,
                    query: {
                        index: getIndexOrStore(ctx, coreTable.schema),
                        range: ctx.range
                    }
                }).then(function (count) { return Math.min(count, ctx.limit); });
            }
            else {
                var count = 0;
                return iter(ctx, function () { ++count; return false; }, trans, coreTable)
                    .then(function () { return count; });
            }
        }).then(cb);
    };
    Collection.prototype.sortBy = function (keyPath, cb) {
        var parts = keyPath.split('.').reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
        function getval(obj, i) {
            if (i)
                return getval(obj[parts[i]], i - 1);
            return obj[lastPart];
        }
        var order = this._ctx.dir === "next" ? 1 : -1;
        function sorter(a, b) {
            var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
            return aVal < bVal ? -order : aVal > bVal ? order : 0;
        }
        return this.toArray(function (a) {
            return a.sort(sorter);
        }).then(cb);
    };
    Collection.prototype.toArray = function (cb) {
        var _this = this;
        return this._read(function (trans) {
            var ctx = _this._ctx;
            if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                var valueMapper_1 = ctx.valueMapper;
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                    trans: trans,
                    limit: ctx.limit,
                    values: true,
                    query: {
                        index: index,
                        range: ctx.range
                    }
                }).then(function (_a) {
                    var result = _a.result;
                    return valueMapper_1 ? result.map(valueMapper_1) : result;
                });
            }
            else {
                var a_1 = [];
                return iter(ctx, function (item) { return a_1.push(item); }, trans, ctx.table.core).then(function () { return a_1; });
            }
        }, cb);
    };
    Collection.prototype.offset = function (offset) {
        var ctx = this._ctx;
        if (offset <= 0)
            return this;
        ctx.offset += offset;
        if (isPlainKeyRange(ctx)) {
            addReplayFilter(ctx, function () {
                var offsetLeft = offset;
                return function (cursor, advance) {
                    if (offsetLeft === 0)
                        return true;
                    if (offsetLeft === 1) {
                        --offsetLeft;
                        return false;
                    }
                    advance(function () {
                        cursor.advance(offsetLeft);
                        offsetLeft = 0;
                    });
                    return false;
                };
            });
        }
        else {
            addReplayFilter(ctx, function () {
                var offsetLeft = offset;
                return function () { return (--offsetLeft < 0); };
            });
        }
        return this;
    };
    Collection.prototype.limit = function (numRows) {
        this._ctx.limit = Math.min(this._ctx.limit, numRows);
        addReplayFilter(this._ctx, function () {
            var rowsLeft = numRows;
            return function (cursor, advance, resolve) {
                if (--rowsLeft <= 0)
                    advance(resolve);
                return rowsLeft >= 0;
            };
        }, true);
        return this;
    };
    Collection.prototype.until = function (filterFunction, bIncludeStopEntry) {
        addFilter(this._ctx, function (cursor, advance, resolve) {
            if (filterFunction(cursor.value)) {
                advance(resolve);
                return bIncludeStopEntry;
            }
            else {
                return true;
            }
        });
        return this;
    };
    Collection.prototype.first = function (cb) {
        return this.limit(1).toArray(function (a) { return a[0]; }).then(cb);
    };
    Collection.prototype.last = function (cb) {
        return this.reverse().first(cb);
    };
    Collection.prototype.filter = function (filterFunction) {
        addFilter(this._ctx, function (cursor) {
            return filterFunction(cursor.value);
        });
        addMatchFilter(this._ctx, filterFunction);
        return this;
    };
    Collection.prototype.and = function (filter) {
        return this.filter(filter);
    };
    Collection.prototype.or = function (indexName) {
        return new this.db.WhereClause(this._ctx.table, indexName, this);
    };
    Collection.prototype.reverse = function () {
        this._ctx.dir = (this._ctx.dir === "prev" ? "next" : "prev");
        if (this._ondirectionchange)
            this._ondirectionchange(this._ctx.dir);
        return this;
    };
    Collection.prototype.desc = function () {
        return this.reverse();
    };
    Collection.prototype.eachKey = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function (val, cursor) { cb(cursor.key, cursor); });
    };
    Collection.prototype.eachUniqueKey = function (cb) {
        this._ctx.unique = "unique";
        return this.eachKey(cb);
    };
    Collection.prototype.eachPrimaryKey = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function (val, cursor) { cb(cursor.primaryKey, cursor); });
    };
    Collection.prototype.keys = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function (item, cursor) {
            a.push(cursor.key);
        }).then(function () {
            return a;
        }).then(cb);
    };
    Collection.prototype.primaryKeys = function (cb) {
        var ctx = this._ctx;
        if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
            return this._read(function (trans) {
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                    trans: trans,
                    values: false,
                    limit: ctx.limit,
                    query: {
                        index: index,
                        range: ctx.range
                    }
                });
            }).then(function (_a) {
                var result = _a.result;
                return result;
            }).then(cb);
        }
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function (item, cursor) {
            a.push(cursor.primaryKey);
        }).then(function () {
            return a;
        }).then(cb);
    };
    Collection.prototype.uniqueKeys = function (cb) {
        this._ctx.unique = "unique";
        return this.keys(cb);
    };
    Collection.prototype.firstKey = function (cb) {
        return this.limit(1).keys(function (a) { return a[0]; }).then(cb);
    };
    Collection.prototype.lastKey = function (cb) {
        return this.reverse().firstKey(cb);
    };
    Collection.prototype.distinct = function () {
        var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
        if (!idx || !idx.multi)
            return this;
        var set = {};
        addFilter(this._ctx, function (cursor) {
            var strKey = cursor.primaryKey.toString();
            var found = hasOwn(set, strKey);
            set[strKey] = true;
            return !found;
        });
        return this;
    };
    Collection.prototype.modify = function (changes) {
        var _this = this;
        var ctx = this._ctx;
        return this._write(function (trans) {
            var modifyer;
            if (typeof changes === 'function') {
                modifyer = changes;
            }
            else {
                var keyPaths = keys(changes);
                var numKeys = keyPaths.length;
                modifyer = function (item) {
                    var anythingModified = false;
                    for (var i = 0; i < numKeys; ++i) {
                        var keyPath = keyPaths[i], val = changes[keyPath];
                        if (getByKeyPath(item, keyPath) !== val) {
                            setByKeyPath(item, keyPath, val);
                            anythingModified = true;
                        }
                    }
                    return anythingModified;
                };
            }
            var coreTable = ctx.table.core;
            var _a = coreTable.schema.primaryKey, outbound = _a.outbound, extractKey = _a.extractKey;
            var limit = 'testmode' in Dexie ? 1 : 2000;
            var cmp = _this.db.core.cmp;
            var totalFailures = [];
            var successCount = 0;
            var failedKeys = [];
            var applyMutateResult = function (expectedCount, res) {
                var failures = res.failures, numFailures = res.numFailures;
                successCount += expectedCount - numFailures;
                for (var _i = 0, _a = keys(failures); _i < _a.length; _i++) {
                    var pos = _a[_i];
                    totalFailures.push(failures[pos]);
                }
            };
            return _this.clone().primaryKeys().then(function (keys$$1) {
                var nextChunk = function (offset) {
                    var count = Math.min(limit, keys$$1.length - offset);
                    return coreTable.getMany({ trans: trans, keys: keys$$1.slice(offset, offset + count) }).then(function (values) {
                        var addValues = [];
                        var putValues = [];
                        var putKeys = outbound ? [] : null;
                        var deleteKeys = [];
                        for (var i = 0; i < count; ++i) {
                            var origValue = values[i];
                            var ctx_1 = {
                                value: deepClone(origValue),
                                primKey: keys$$1[offset + i]
                            };
                            if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                                if (ctx_1.value == null) {
                                    deleteKeys.push(keys$$1[offset + i]);
                                }
                                else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                                    deleteKeys.push(keys$$1[offset + i]);
                                    addValues.push(ctx_1.value);
                                }
                                else {
                                    putValues.push(ctx_1.value);
                                    if (outbound)
                                        putKeys.push(keys$$1[offset + i]);
                                }
                            }
                        }
                        return Promise.resolve(addValues.length > 0 &&
                            coreTable.mutate({ trans: trans, type: 'add', values: addValues })
                                .then(function (res) {
                                for (var pos in res.failures) {
                                    deleteKeys.splice(parseInt(pos), 1);
                                }
                                applyMutateResult(addValues.length, res);
                            })).then(function (res) { return putValues.length > 0 &&
                            coreTable.mutate({ trans: trans, type: 'put', keys: putKeys, values: putValues })
                                .then(function (res) { return applyMutateResult(putValues.length, res); }); }).then(function () { return deleteKeys.length > 0 &&
                            coreTable.mutate({ trans: trans, type: 'delete', keys: deleteKeys })
                                .then(function (res) { return applyMutateResult(deleteKeys.length, res); }); }).then(function () {
                            return keys$$1.length > offset + count && nextChunk(offset + limit);
                        });
                    });
                };
                return nextChunk(0).then(function () {
                    if (totalFailures.length > 0)
                        throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                    return keys$$1.length;
                });
            });
        });
    };
    Collection.prototype.delete = function () {
        var ctx = this._ctx, range = ctx.range;
        if (isPlainKeyRange(ctx) &&
            ((ctx.isPrimKey && !hangsOnDeleteLargeKeyRange) || range.type === 3          ))
         {
            return this._write(function (trans) {
                var primaryKey = ctx.table.core.schema.primaryKey;
                var coreRange = range;
                return ctx.table.core.count({ trans: trans, query: { index: primaryKey, range: coreRange } }).then(function (count) {
                    return ctx.table.core.mutate({ trans: trans, type: 'deleteRange', range: coreRange })
                        .then(function (_a) {
                        var failures = _a.failures, lastResult = _a.lastResult, results = _a.results, numFailures = _a.numFailures;
                        if (numFailures)
                            throw new ModifyError("Could not delete some values", Object.keys(failures).map(function (pos) { return failures[pos]; }), count - numFailures);
                        return count - numFailures;
                    });
                });
            });
        }
        return this.modify(function (value, ctx) { return ctx.value = null; });
    };
    return Collection;
}());

function createCollectionConstructor(db) {
    return makeClassConstructor(Collection.prototype, function Collection$$1(whereClause, keyRangeGenerator) {
        this.db = db;
        var keyRange = AnyRange, error = null;
        if (keyRangeGenerator)
            try {
                keyRange = keyRangeGenerator();
            }
            catch (ex) {
                error = ex;
            }
        var whereCtx = whereClause._ctx;
        var table = whereCtx.table;
        var readingHook = table.hook.reading.fire;
        this._ctx = {
            table: table,
            index: whereCtx.index,
            isPrimKey: (!whereCtx.index || (table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name)),
            range: keyRange,
            keysOnly: false,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: true,
            isMatch: null,
            offset: 0,
            limit: Infinity,
            error: error,
            or: whereCtx.or,
            valueMapper: readingHook !== mirror ? readingHook : null
        };
    });
}

function simpleCompare(a, b) {
    return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
}

function fail(collectionOrWhereClause, err, T) {
    var collection = collectionOrWhereClause instanceof WhereClause ?
        new collectionOrWhereClause.Collection(collectionOrWhereClause) :
        collectionOrWhereClause;
    collection._ctx.error = T ? new T(err) : new TypeError(err);
    return collection;
}
function emptyCollection(whereClause) {
    return new whereClause.Collection(whereClause, function () { return rangeEqual(""); }).limit(0);
}
function upperFactory(dir) {
    return dir === "next" ?
        function (s) { return s.toUpperCase(); } :
        function (s) { return s.toLowerCase(); };
}
function lowerFactory(dir) {
    return dir === "next" ?
        function (s) { return s.toLowerCase(); } :
        function (s) { return s.toUpperCase(); };
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
    var length = Math.min(key.length, lowerNeedle.length);
    var llp = -1;
    for (var i = 0; i < length; ++i) {
        var lwrKeyChar = lowerKey[i];
        if (lwrKeyChar !== lowerNeedle[i]) {
            if (cmp(key[i], upperNeedle[i]) < 0)
                return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
            if (cmp(key[i], lowerNeedle[i]) < 0)
                return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
            if (llp >= 0)
                return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
            return null;
        }
        if (cmp(key[i], lwrKeyChar) < 0)
            llp = i;
    }
    if (length < lowerNeedle.length && dir === "next")
        return key + upperNeedle.substr(key.length);
    if (length < key.length && dir === "prev")
        return key.substr(0, upperNeedle.length);
    return (llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1));
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
    var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
    if (!needles.every(function (s) { return typeof s === 'string'; })) {
        return fail(whereClause, STRING_EXPECTED);
    }
    function initDirection(dir) {
        upper = upperFactory(dir);
        lower = lowerFactory(dir);
        compare = (dir === "next" ? simpleCompare : simpleCompareReverse);
        var needleBounds = needles.map(function (needle) {
            return { lower: lower(needle), upper: upper(needle) };
        }).sort(function (a, b) {
            return compare(a.lower, b.lower);
        });
        upperNeedles = needleBounds.map(function (nb) { return nb.upper; });
        lowerNeedles = needleBounds.map(function (nb) { return nb.lower; });
        direction = dir;
        nextKeySuffix = (dir === "next" ? "" : suffix);
    }
    initDirection("next");
    var c = new whereClause.Collection(whereClause, function () { return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix); });
    c._ondirectionchange = function (direction) {
        initDirection(direction);
    };
    var firstPossibleNeedle = 0;
    c._addAlgorithm(function (cursor, advance, resolve) {
        var key = cursor.key;
        if (typeof key !== 'string')
            return false;
        var lowerKey = lower(key);
        if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
            return true;
        }
        else {
            var lowestPossibleCasing = null;
            for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
                var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                if (casing === null && lowestPossibleCasing === null)
                    firstPossibleNeedle = i + 1;
                else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                    lowestPossibleCasing = casing;
                }
            }
            if (lowestPossibleCasing !== null) {
                advance(function () { cursor.continue(lowestPossibleCasing + nextKeySuffix); });
            }
            else {
                advance(resolve);
            }
            return false;
        }
    });
    return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
    return {
        type: 2            ,
        lower: lower,
        upper: upper,
        lowerOpen: lowerOpen,
        upperOpen: upperOpen
    };
}
function rangeEqual(value) {
    return {
        type: 1            ,
        lower: value,
        upper: value
    };
}

var WhereClause =               (function () {
    function WhereClause() {
    }
    Object.defineProperty(WhereClause.prototype, "Collection", {
        get: function () {
            return this._ctx.table.db.Collection;
        },
        enumerable: true,
        configurable: true
    });
    WhereClause.prototype.between = function (lower, upper, includeLower, includeUpper) {
        includeLower = includeLower !== false;
        includeUpper = includeUpper === true;
        try {
            if ((this._cmp(lower, upper) > 0) ||
                (this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)))
                return emptyCollection(this);
            return new this.Collection(this, function () { return createRange(lower, upper, !includeLower, !includeUpper); });
        }
        catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
    };
    WhereClause.prototype.equals = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return rangeEqual(value); });
    };
    WhereClause.prototype.above = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(value, undefined, true); });
    };
    WhereClause.prototype.aboveOrEqual = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(value, undefined, false); });
    };
    WhereClause.prototype.below = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(undefined, value, false, true); });
    };
    WhereClause.prototype.belowOrEqual = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(undefined, value); });
    };
    WhereClause.prototype.startsWith = function (str) {
        if (typeof str !== 'string')
            return fail(this, STRING_EXPECTED);
        return this.between(str, str + maxString, true, true);
    };
    WhereClause.prototype.startsWithIgnoreCase = function (str) {
        if (str === "")
            return this.startsWith(str);
        return addIgnoreCaseAlgorithm(this, function (x, a) { return x.indexOf(a[0]) === 0; }, [str], maxString);
    };
    WhereClause.prototype.equalsIgnoreCase = function (str) {
        return addIgnoreCaseAlgorithm(this, function (x, a) { return x === a[0]; }, [str], "");
    };
    WhereClause.prototype.anyOfIgnoreCase = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
            return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function (x, a) { return a.indexOf(x) !== -1; }, set, "");
    };
    WhereClause.prototype.startsWithAnyOfIgnoreCase = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
            return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function (x, a) { return a.some(function (n) { return x.indexOf(n) === 0; }); }, set, maxString);
    };
    WhereClause.prototype.anyOf = function () {
        var _this = this;
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        var compare = this._cmp;
        try {
            set.sort(compare);
        }
        catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        if (set.length === 0)
            return emptyCollection(this);
        var c = new this.Collection(this, function () { return createRange(set[0], set[set.length - 1]); });
        c._ondirectionchange = function (direction) {
            compare = (direction === "next" ?
                _this._ascending :
                _this._descending);
            set.sort(compare);
        };
        var i = 0;
        c._addAlgorithm(function (cursor, advance, resolve) {
            var key = cursor.key;
            while (compare(key, set[i]) > 0) {
                ++i;
                if (i === set.length) {
                    advance(resolve);
                    return false;
                }
            }
            if (compare(key, set[i]) === 0) {
                return true;
            }
            else {
                advance(function () { cursor.continue(set[i]); });
                return false;
            }
        });
        return c;
    };
    WhereClause.prototype.notEqual = function (value) {
        return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
    };
    WhereClause.prototype.noneOf = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
            return new this.Collection(this);
        try {
            set.sort(this._ascending);
        }
        catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        var ranges = set.reduce(function (res, val) { return res ?
            res.concat([[res[res.length - 1][1], val]]) :
            [[minKey, val]]; }, null);
        ranges.push([set[set.length - 1], this.db._maxKey]);
        return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
    };
    WhereClause.prototype.inAnyRange = function (ranges, options) {
        var _this = this;
        var cmp = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
        if (ranges.length === 0)
            return emptyCollection(this);
        if (!ranges.every(function (range) {
            return range[0] !== undefined &&
                range[1] !== undefined &&
                ascending(range[0], range[1]) <= 0;
        })) {
            return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
        }
        var includeLowers = !options || options.includeLowers !== false;
        var includeUppers = options && options.includeUppers === true;
        function addRange(ranges, newRange) {
            var i = 0, l = ranges.length;
            for (; i < l; ++i) {
                var range = ranges[i];
                if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
                    range[0] = min(range[0], newRange[0]);
                    range[1] = max(range[1], newRange[1]);
                    break;
                }
            }
            if (i === l)
                ranges.push(newRange);
            return ranges;
        }
        var sortDirection = ascending;
        function rangeSorter(a, b) { return sortDirection(a[0], b[0]); }
        var set;
        try {
            set = ranges.reduce(addRange, []);
            set.sort(rangeSorter);
        }
        catch (ex) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        var rangePos = 0;
        var keyIsBeyondCurrentEntry = includeUppers ?
            function (key) { return ascending(key, set[rangePos][1]) > 0; } :
            function (key) { return ascending(key, set[rangePos][1]) >= 0; };
        var keyIsBeforeCurrentEntry = includeLowers ?
            function (key) { return descending(key, set[rangePos][0]) > 0; } :
            function (key) { return descending(key, set[rangePos][0]) >= 0; };
        function keyWithinCurrentRange(key) {
            return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
        }
        var checkKey = keyIsBeyondCurrentEntry;
        var c = new this.Collection(this, function () { return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers); });
        c._ondirectionchange = function (direction) {
            if (direction === "next") {
                checkKey = keyIsBeyondCurrentEntry;
                sortDirection = ascending;
            }
            else {
                checkKey = keyIsBeforeCurrentEntry;
                sortDirection = descending;
            }
            set.sort(rangeSorter);
        };
        c._addAlgorithm(function (cursor, advance, resolve) {
            var key = cursor.key;
            while (checkKey(key)) {
                ++rangePos;
                if (rangePos === set.length) {
                    advance(resolve);
                    return false;
                }
            }
            if (keyWithinCurrentRange(key)) {
                return true;
            }
            else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
                return false;
            }
            else {
                advance(function () {
                    if (sortDirection === ascending)
                        cursor.continue(set[rangePos][0]);
                    else
                        cursor.continue(set[rangePos][1]);
                });
                return false;
            }
        });
        return c;
    };
    WhereClause.prototype.startsWithAnyOf = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (!set.every(function (s) { return typeof s === 'string'; })) {
            return fail(this, "startsWithAnyOf() only works with strings");
        }
        if (set.length === 0)
            return emptyCollection(this);
        return this.inAnyRange(set.map(function (str) { return [str, str + maxString]; }));
    };
    return WhereClause;
}());

function createWhereClauseConstructor(db) {
    return makeClassConstructor(WhereClause.prototype, function WhereClause$$1(table, index, orCollection) {
        this.db = db;
        this._ctx = {
            table: table,
            index: index === ":id" ? null : index,
            or: orCollection
        };
        var indexedDB = db._deps.indexedDB;
        if (!indexedDB)
            throw new exceptions.MissingAPI("indexedDB API missing");
        this._cmp = this._ascending = indexedDB.cmp.bind(indexedDB);
        this._descending = function (a, b) { return indexedDB.cmp(b, a); };
        this._max = function (a, b) { return indexedDB.cmp(a, b) > 0 ? a : b; };
        this._min = function (a, b) { return indexedDB.cmp(a, b) < 0 ? a : b; };
        this._IDBKeyRange = db._deps.IDBKeyRange;
    });
}

function safariMultiStoreFix(storeNames) {
    return storeNames.length === 1 ? storeNames[0] : storeNames;
}

function getMaxKey(IdbKeyRange) {
    try {
        IdbKeyRange.only([[]]);
        return [[]];
    }
    catch (e) {
        return maxString;
    }
}

function eventRejectHandler(reject) {
    return wrap(function (event) {
        preventDefault(event);
        reject(event.target.error);
        return false;
    });
}



function preventDefault(event) {
    if (event.stopPropagation)
        event.stopPropagation();
    if (event.preventDefault)
        event.preventDefault();
}

var Transaction =               (function () {
    function Transaction() {
    }
    Transaction.prototype._lock = function () {
        assert(!PSD.global);
        ++this._reculock;
        if (this._reculock === 1 && !PSD.global)
            PSD.lockOwnerFor = this;
        return this;
    };
    Transaction.prototype._unlock = function () {
        assert(!PSD.global);
        if (--this._reculock === 0) {
            if (!PSD.global)
                PSD.lockOwnerFor = null;
            while (this._blockedFuncs.length > 0 && !this._locked()) {
                var fnAndPSD = this._blockedFuncs.shift();
                try {
                    usePSD(fnAndPSD[1], fnAndPSD[0]);
                }
                catch (e) { }
            }
        }
        return this;
    };
    Transaction.prototype._locked = function () {
        return this._reculock && PSD.lockOwnerFor !== this;
    };
    Transaction.prototype.create = function (idbtrans) {
        var _this = this;
        if (!this.mode)
            return this;
        var idbdb = this.db.idbdb;
        var dbOpenError = this.db._state.dbOpenError;
        assert(!this.idbtrans);
        if (!idbtrans && !idbdb) {
            switch (dbOpenError && dbOpenError.name) {
                case "DatabaseClosedError":
                    throw new exceptions.DatabaseClosed(dbOpenError);
                case "MissingAPIError":
                    throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                default:
                    throw new exceptions.OpenFailed(dbOpenError);
            }
        }
        if (!this.active)
            throw new exceptions.TransactionInactive();
        assert(this._completion._state === null);
        idbtrans = this.idbtrans = idbtrans || idbdb.transaction(safariMultiStoreFix(this.storeNames), this.mode);
        idbtrans.onerror = wrap(function (ev) {
            preventDefault(ev);
            _this._reject(idbtrans.error);
        });
        idbtrans.onabort = wrap(function (ev) {
            preventDefault(ev);
            _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
            _this.active = false;
            _this.on("abort").fire(ev);
        });
        idbtrans.oncomplete = wrap(function () {
            _this.active = false;
            _this._resolve();
        });
        return this;
    };
    Transaction.prototype._promise = function (mode, fn, bWriteLock) {
        var _this = this;
        if (mode === 'readwrite' && this.mode !== 'readwrite')
            return rejection(new exceptions.ReadOnly("Transaction is readonly"));
        if (!this.active)
            return rejection(new exceptions.TransactionInactive());
        if (this._locked()) {
            return new DexiePromise(function (resolve, reject) {
                _this._blockedFuncs.push([function () {
                        _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                    }, PSD]);
            });
        }
        else if (bWriteLock) {
            return newScope(function () {
                var p = new DexiePromise(function (resolve, reject) {
                    _this._lock();
                    var rv = fn(resolve, reject, _this);
                    if (rv && rv.then)
                        rv.then(resolve, reject);
                });
                p.finally(function () { return _this._unlock(); });
                p._lib = true;
                return p;
            });
        }
        else {
            var p = new DexiePromise(function (resolve, reject) {
                var rv = fn(resolve, reject, _this);
                if (rv && rv.then)
                    rv.then(resolve, reject);
            });
            p._lib = true;
            return p;
        }
    };
    Transaction.prototype._root = function () {
        return this.parent ? this.parent._root() : this;
    };
    Transaction.prototype.waitFor = function (promiseLike) {
        var root = this._root();
        var promise = DexiePromise.resolve(promiseLike);
        if (root._waitingFor) {
            root._waitingFor = root._waitingFor.then(function () { return promise; });
        }
        else {
            root._waitingFor = promise;
            root._waitingQueue = [];
            var store = root.idbtrans.objectStore(root.storeNames[0]);
            (function spin() {
                ++root._spinCount;
                while (root._waitingQueue.length)
                    (root._waitingQueue.shift())();
                if (root._waitingFor)
                    store.get(-Infinity).onsuccess = spin;
            }());
        }
        var currentWaitPromise = root._waitingFor;
        return new DexiePromise(function (resolve, reject) {
            promise.then(function (res) { return root._waitingQueue.push(wrap(resolve.bind(null, res))); }, function (err) { return root._waitingQueue.push(wrap(reject.bind(null, err))); }).finally(function () {
                if (root._waitingFor === currentWaitPromise) {
                    root._waitingFor = null;
                }
            });
        });
    };
    Transaction.prototype.abort = function () {
        this.active && this._reject(new exceptions.Abort());
        this.active = false;
    };
    Transaction.prototype.table = function (tableName) {
        var memoizedTables = (this._memoizedTables || (this._memoizedTables = {}));
        if (hasOwn(memoizedTables, tableName))
            return memoizedTables[tableName];
        var tableSchema = this.schema[tableName];
        if (!tableSchema) {
            throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
        }
        var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
        transactionBoundTable.core = this.db.core.table(tableName);
        memoizedTables[tableName] = transactionBoundTable;
        return transactionBoundTable;
    };
    return Transaction;
}());

function createTransactionConstructor(db) {
    return makeClassConstructor(Transaction.prototype, function Transaction$$1(mode, storeNames, dbschema, parent) {
        var _this = this;
        this.db = db;
        this.mode = mode;
        this.storeNames = storeNames;
        this.schema = dbschema;
        this.idbtrans = null;
        this.on = Events(this, "complete", "error", "abort");
        this.parent = parent || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0;
        this._completion = new DexiePromise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this._completion.then(function () {
            _this.active = false;
            _this.on.complete.fire();
        }, function (e) {
            var wasActive = _this.active;
            _this.active = false;
            _this.on.error.fire(e);
            _this.parent ?
                _this.parent._reject(e) :
                wasActive && _this.idbtrans && _this.idbtrans.abort();
            return rejection(e);
        });
    });
}

function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
    return {
        name: name,
        keyPath: keyPath,
        unique: unique,
        multi: multi,
        auto: auto,
        compound: compound,
        src: (unique && !isPrimKey ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + nameFromKeyPath(keyPath)
    };
}
function nameFromKeyPath(keyPath) {
    return typeof keyPath === 'string' ?
        keyPath :
        keyPath ? ('[' + [].join.call(keyPath, '+') + ']') : "";
}

function createTableSchema(name, primKey, indexes) {
    return {
        name: name,
        primKey: primKey,
        indexes: indexes,
        mappedClass: null,
        idxByName: arrayToObject(indexes, function (index) { return [index.name, index]; })
    };
}

function getKeyExtractor(keyPath) {
    if (keyPath == null) {
        return function () { return undefined; };
    }
    else if (typeof keyPath === 'string') {
        return getSinglePathKeyExtractor(keyPath);
    }
    else {
        return function (obj) { return getByKeyPath(obj, keyPath); };
    }
}
function getSinglePathKeyExtractor(keyPath) {
    var split = keyPath.split('.');
    if (split.length === 1) {
        return function (obj) { return obj[keyPath]; };
    }
    else {
        return function (obj) { return getByKeyPath(obj, keyPath); };
    }
}

function getEffectiveKeys(primaryKey, req) {
    if (req.type === 'delete')
        return req.keys;
    return req.keys || req.values.map(primaryKey.extractKey);
}
function getExistingValues(table, req, effectiveKeys) {
    return req.type === 'add' ? Promise.resolve(new Array(req.values.length)) :
        table.getMany({ trans: req.trans, keys: effectiveKeys });
}

function arrayify(arrayLike) {
    return [].slice.call(arrayLike);
}

var _id_counter = 0;
function getKeyPathAlias(keyPath) {
    return keyPath == null ?
        ":id" :
        typeof keyPath === 'string' ?
            keyPath :
            "[" + keyPath.join('+') + "]";
}
function createDBCore(db, indexedDB, IdbKeyRange, tmpTrans) {
    var cmp = indexedDB.cmp.bind(indexedDB);
    function extractSchema(db, trans) {
        var tables = arrayify(db.objectStoreNames);
        return {
            schema: {
                name: db.name,
                tables: tables.map(function (table) { return trans.objectStore(table); }).map(function (store) {
                    var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
                    var compound = isArray(keyPath);
                    var outbound = keyPath == null;
                    var indexByKeyPath = {};
                    var result = {
                        name: store.name,
                        primaryKey: {
                            name: null,
                            isPrimaryKey: true,
                            outbound: outbound,
                            compound: compound,
                            keyPath: keyPath,
                            autoIncrement: autoIncrement,
                            unique: true,
                            extractKey: getKeyExtractor(keyPath)
                        },
                        indexes: arrayify(store.indexNames).map(function (indexName) { return store.index(indexName); })
                            .map(function (index) {
                            var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath = index.keyPath;
                            var compound = isArray(keyPath);
                            var result = {
                                name: name,
                                compound: compound,
                                keyPath: keyPath,
                                unique: unique,
                                multiEntry: multiEntry,
                                extractKey: getKeyExtractor(keyPath)
                            };
                            indexByKeyPath[getKeyPathAlias(keyPath)] = result;
                            return result;
                        }),
                        getIndexByKeyPath: function (keyPath) { return indexByKeyPath[getKeyPathAlias(keyPath)]; }
                    };
                    indexByKeyPath[":id"] = result.primaryKey;
                    if (keyPath != null) {
                        indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
                    }
                    return result;
                })
            },
            hasGetAll: tables.length > 0 && ('getAll' in trans.objectStore(tables[0])) &&
                !(typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) &&
                    !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                    [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
        };
    }
    function makeIDBKeyRange(range) {
        if (range.type === 3          )
            return null;
        if (range.type === 4            )
            throw new Error("Cannot convert never type to IDBKeyRange");
        var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
        var idbRange = lower === undefined ?
            upper === undefined ?
                null :
                IdbKeyRange.upperBound(upper, !!upperOpen) :
            upper === undefined ?
                IdbKeyRange.lowerBound(lower, !!lowerOpen) :
                IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
        return idbRange;
    }
    function createDbCoreTable(tableSchema) {
        var tableName = tableSchema.name;
        function mutate(_a) {
            var trans = _a.trans, type = _a.type, keys$$1 = _a.keys, values = _a.values, range = _a.range, wantResults = _a.wantResults;
            return new Promise(function (resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName);
                var outbound = store.keyPath == null;
                var isAddOrPut = type === "put" || type === "add";
                if (!isAddOrPut && type !== 'delete' && type !== 'deleteRange')
                    throw new Error("Invalid operation type: " + type);
                var length = (keys$$1 || values || { length: 1 }).length;
                if (keys$$1 && values && keys$$1.length !== values.length) {
                    throw new Error("Given keys array must have same length as given values array.");
                }
                if (length === 0)
                    return resolve({ numFailures: 0, failures: {}, results: [], lastResult: undefined });
                var results = wantResults && __spreadArrays((keys$$1 ?
                    keys$$1 :
                    getEffectiveKeys(tableSchema.primaryKey, { type: type, keys: keys$$1, values: values })));
                var req;
                var failures = [];
                var numFailures = 0;
                var errorHandler = function (event) {
                    ++numFailures;
                    preventDefault(event);
                    if (results)
                        results[event.target._reqno] = undefined;
                    failures[event.target._reqno] = event.target.error;
                };
                var setResult = function (_a) {
                    var target = _a.target;
                    results[target._reqno] = target.result;
                };
                if (type === 'deleteRange') {
                    if (range.type === 4            )
                        return resolve({ numFailures: numFailures, failures: failures, results: results, lastResult: undefined });
                    if (range.type === 3          )
                        req = store.clear();
                    else
                        req = store.delete(makeIDBKeyRange(range));
                }
                else {
                    var _a = isAddOrPut ?
                        outbound ?
                            [values, keys$$1] :
                            [values, null] :
                        [keys$$1, null], args1 = _a[0], args2 = _a[1];
                    if (isAddOrPut) {
                        for (var i = 0; i < length; ++i) {
                            req = (args2 && args2[i] !== undefined ?
                                store[type](args1[i], args2[i]) :
                                store[type](args1[i]));
                            req._reqno = i;
                            if (results && results[i] === undefined) {
                                req.onsuccess = setResult;
                            }
                            req.onerror = errorHandler;
                        }
                    }
                    else {
                        for (var i = 0; i < length; ++i) {
                            req = store[type](args1[i]);
                            req._reqno = i;
                            req.onerror = errorHandler;
                        }
                    }
                }
                var done = function (event) {
                    var lastResult = event.target.result;
                    if (results)
                        results[length - 1] = lastResult;
                    resolve({
                        numFailures: numFailures,
                        failures: failures,
                        results: results,
                        lastResult: lastResult
                    });
                };
                req.onerror = function (event) {
                    errorHandler(event);
                    done(event);
                };
                req.onsuccess = done;
            });
        }
        function openCursor(_a) {
            var trans = _a.trans, values = _a.values, query = _a.query, reverse = _a.reverse, unique = _a.unique;
            return new Promise(function (resolve, reject) {
                resolve = wrap(resolve);
                var index = query.index, range = query.range;
                var store = trans.objectStore(tableName);
                var source = index.isPrimaryKey ?
                    store :
                    store.index(index.name);
                var direction = reverse ?
                    unique ?
                        "prevunique" :
                        "prev" :
                    unique ?
                        "nextunique" :
                        "next";
                var req = values || !('openKeyCursor' in source) ?
                    source.openCursor(makeIDBKeyRange(range), direction) :
                    source.openKeyCursor(makeIDBKeyRange(range), direction);
                req.onerror = eventRejectHandler(reject);
                req.onsuccess = wrap(function (ev) {
                    var cursor = req.result;
                    if (!cursor) {
                        resolve(null);
                        return;
                    }
                    cursor.___id = ++_id_counter;
                    cursor.done = false;
                    var _cursorContinue = cursor.continue.bind(cursor);
                    var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                    if (_cursorContinuePrimaryKey)
                        _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
                    var _cursorAdvance = cursor.advance.bind(cursor);
                    var doThrowCursorIsNotStarted = function () { throw new Error("Cursor not started"); };
                    var doThrowCursorIsStopped = function () { throw new Error("Cursor not stopped"); };
                    cursor.trans = trans;
                    cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
                    cursor.fail = wrap(reject);
                    cursor.next = function () {
                        var _this = this;
                        var gotOne = 1;
                        return this.start(function () { return gotOne-- ? _this.continue() : _this.stop(); }).then(function () { return _this; });
                    };
                    cursor.start = function (callback) {
                        var iterationPromise = new Promise(function (resolveIteration, rejectIteration) {
                            resolveIteration = wrap(resolveIteration);
                            req.onerror = eventRejectHandler(rejectIteration);
                            cursor.fail = rejectIteration;
                            cursor.stop = function (value) {
                                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                                resolveIteration(value);
                            };
                        });
                        var guardedCallback = function () {
                            if (req.result) {
                                try {
                                    callback();
                                }
                                catch (err) {
                                    cursor.fail(err);
                                }
                            }
                            else {
                                cursor.done = true;
                                cursor.start = function () { throw new Error("Cursor behind last entry"); };
                                cursor.stop();
                            }
                        };
                        req.onsuccess = wrap(function (ev) {
                            req.onsuccess = guardedCallback;
                            guardedCallback();
                        });
                        cursor.continue = _cursorContinue;
                        cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                        cursor.advance = _cursorAdvance;
                        guardedCallback();
                        return iterationPromise;
                    };
                    resolve(cursor);
                }, reject);
            });
        }
        function query(hasGetAll) {
            return function (request) {
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var trans = request.trans, values = request.values, limit = request.limit, query = request.query;
                    var nonInfinitLimit = limit === Infinity ? undefined : limit;
                    var index = query.index, range = query.range;
                    var store = trans.objectStore(tableName);
                    var source = index.isPrimaryKey ? store : store.index(index.name);
                    var idbKeyRange = makeIDBKeyRange(range);
                    if (limit === 0)
                        return resolve({ result: [] });
                    if (hasGetAll) {
                        var req = values ?
                            source.getAll(idbKeyRange, nonInfinitLimit) :
                            source.getAllKeys(idbKeyRange, nonInfinitLimit);
                        req.onsuccess = function (event) { return resolve({ result: event.target.result }); };
                        req.onerror = eventRejectHandler(reject);
                    }
                    else {
                        var count_1 = 0;
                        var req_1 = values || !('openKeyCursor' in source) ?
                            source.openCursor(idbKeyRange) :
                            source.openKeyCursor(idbKeyRange);
                        var result_1 = [];
                        req_1.onsuccess = function (event) {
                            var cursor = req_1.result;
                            if (!cursor)
                                return resolve({ result: result_1 });
                            result_1.push(values ? cursor.value : cursor.primaryKey);
                            if (++count_1 === limit)
                                return resolve({ result: result_1 });
                            cursor.continue();
                        };
                        req_1.onerror = eventRejectHandler(reject);
                    }
                });
            };
        }
        return {
            name: tableName,
            schema: tableSchema,
            mutate: mutate,
            getMany: function (_a) {
                var trans = _a.trans, keys$$1 = _a.keys;
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var length = keys$$1.length;
                    var result = new Array(length);
                    var keyCount = 0;
                    var callbackCount = 0;
                    var valueCount = 0;
                    var req;
                    var successHandler = function (event) {
                        var req = event.target;
                        if ((result[req._pos] = req.result) != null)
                            ++valueCount;
                        if (++callbackCount === keyCount)
                            resolve(result);
                    };
                    var errorHandler = eventRejectHandler(reject);
                    for (var i = 0; i < length; ++i) {
                        var key = keys$$1[i];
                        if (key != null) {
                            req = store.get(keys$$1[i]);
                            req._pos = i;
                            req.onsuccess = successHandler;
                            req.onerror = errorHandler;
                            ++keyCount;
                        }
                    }
                    if (keyCount === 0)
                        resolve(result);
                });
            },
            get: function (_a) {
                var trans = _a.trans, key = _a.key;
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var req = store.get(key);
                    req.onsuccess = function (event) { return resolve(event.target.result); };
                    req.onerror = eventRejectHandler(reject);
                });
            },
            query: query(hasGetAll),
            openCursor: openCursor,
            count: function (_a) {
                var query = _a.query, trans = _a.trans;
                var index = query.index, range = query.range;
                return new Promise(function (resolve, reject) {
                    var store = trans.objectStore(tableName);
                    var source = index.isPrimaryKey ? store : store.index(index.name);
                    var idbKeyRange = makeIDBKeyRange(range);
                    var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                    req.onsuccess = wrap(function (ev) { return resolve(ev.target.result); });
                    req.onerror = eventRejectHandler(reject);
                });
            }
        };
    }
    var _a = extractSchema(db, tmpTrans), schema = _a.schema, hasGetAll = _a.hasGetAll;
    var tables = schema.tables.map(function (tableSchema) { return createDbCoreTable(tableSchema); });
    var tableMap = {};
    tables.forEach(function (table) { return tableMap[table.name] = table; });
    return {
        stack: "dbcore",
        transaction: db.transaction.bind(db),
        table: function (name) {
            var result = tableMap[name];
            if (!result)
                throw new Error("Table '" + name + "' not found");
            return tableMap[name];
        },
        cmp: cmp,
        MIN_KEY: -Infinity,
        MAX_KEY: getMaxKey(IdbKeyRange),
        schema: schema
    };
}

function createMiddlewareStack(stackImpl, middlewares) {
    return middlewares.reduce(function (down, _a) {
        var create = _a.create;
        return (__assign(__assign({}, down), create(down)));
    }, stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, _a, tmpTrans) {
    var IDBKeyRange = _a.IDBKeyRange, indexedDB = _a.indexedDB;
    var dbcore = createMiddlewareStack(createDBCore(idbdb, indexedDB, IDBKeyRange, tmpTrans), middlewares.dbcore);
    return {
        dbcore: dbcore
    };
}
function generateMiddlewareStacks(db, tmpTrans) {
    var idbdb = tmpTrans.db;
    var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
    db.core = stacks.dbcore;
    db.tables.forEach(function (table) {
        var tableName = table.name;
        if (db.core.schema.tables.some(function (tbl) { return tbl.name === tableName; })) {
            table.core = db.core.table(tableName);
            if (db[tableName] instanceof db.Table) {
                db[tableName].core = table.core;
            }
        }
    });
}

function setApiOnPlace(db, objs, tableNames, dbschema) {
    tableNames.forEach(function (tableName) {
        var schema = dbschema[tableName];
        objs.forEach(function (obj) {
            var propDesc = getPropertyDescriptor(obj, tableName);
            if (!propDesc || ("value" in propDesc && propDesc.value === undefined)) {
                if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
                    setProp(obj, tableName, {
                        get: function () { return this.table(tableName); },
                        set: function (value) {
                            defineProperty(this, tableName, { value: value, writable: true, configurable: true, enumerable: true });
                        }
                    });
                }
                else {
                    obj[tableName] = new db.Table(tableName, schema);
                }
            }
        });
    });
}
function removeTablesApi(db, objs) {
    objs.forEach(function (obj) {
        for (var key in obj) {
            if (obj[key] instanceof db.Table)
                delete obj[key];
        }
    });
}
function lowerVersionFirst(a, b) {
    return a._cfg.version - b._cfg.version;
}
function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
    var globalSchema = db._dbSchema;
    var trans = db._createTransaction('readwrite', db._storeNames, globalSchema);
    trans.create(idbUpgradeTrans);
    trans._completion.catch(reject);
    var rejectTransaction = trans._reject.bind(trans);
    var transless = PSD.transless || PSD;
    newScope(function () {
        PSD.trans = trans;
        PSD.transless = transless;
        if (oldVersion === 0) {
            keys(globalSchema).forEach(function (tableName) {
                createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
            });
            generateMiddlewareStacks(db, idbUpgradeTrans);
            DexiePromise.follow(function () { return db.on.populate.fire(trans); }).catch(rejectTransaction);
        }
        else
            updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
    });
}
function updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans) {
    var queue = [];
    var versions = db._versions;
    var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
    var anyContentUpgraderHasRun = false;
    var versToRun = versions.filter(function (v) { return v._cfg.version >= oldVersion; });
    versToRun.forEach(function (version) {
        queue.push(function () {
            var oldSchema = globalSchema;
            var newSchema = version._cfg.dbschema;
            adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
            adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
            globalSchema = db._dbSchema = newSchema;
            var diff = getSchemaDiff(oldSchema, newSchema);
            diff.add.forEach(function (tuple) {
                createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
            });
            diff.change.forEach(function (change) {
                if (change.recreate) {
                    throw new exceptions.Upgrade("Not yet support for changing primary key");
                }
                else {
                    var store_1 = idbUpgradeTrans.objectStore(change.name);
                    change.add.forEach(function (idx) { return addIndex(store_1, idx); });
                    change.change.forEach(function (idx) {
                        store_1.deleteIndex(idx.name);
                        addIndex(store_1, idx);
                    });
                    change.del.forEach(function (idxName) { return store_1.deleteIndex(idxName); });
                }
            });
            var contentUpgrade = version._cfg.contentUpgrade;
            if (contentUpgrade && version._cfg.version > oldVersion) {
                generateMiddlewareStacks(db, idbUpgradeTrans);
                trans._memoizedTables = {};
                anyContentUpgraderHasRun = true;
                var upgradeSchema_1 = shallowClone(newSchema);
                diff.del.forEach(function (table) {
                    upgradeSchema_1[table] = oldSchema[table];
                });
                removeTablesApi(db, [db.Transaction.prototype]);
                setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
                trans.schema = upgradeSchema_1;
                var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
                if (contentUpgradeIsAsync_1) {
                    incrementExpectedAwaits();
                }
                var returnValue_1;
                var promiseFollowed = DexiePromise.follow(function () {
                    returnValue_1 = contentUpgrade(trans);
                    if (returnValue_1) {
                        if (contentUpgradeIsAsync_1) {
                            var decrementor = decrementExpectedAwaits.bind(null, null);
                            returnValue_1.then(decrementor, decrementor);
                        }
                    }
                });
                return (returnValue_1 && typeof returnValue_1.then === 'function' ?
                    DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function () { return returnValue_1; }));
            }
        });
        queue.push(function (idbtrans) {
            if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
                var newSchema = version._cfg.dbschema;
                deleteRemovedTables(newSchema, idbtrans);
            }
            removeTablesApi(db, [db.Transaction.prototype]);
            setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
            trans.schema = db._dbSchema;
        });
    });
    function runQueue() {
        return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) :
            DexiePromise.resolve();
    }
    return runQueue().then(function () {
        createMissingTables(globalSchema, idbUpgradeTrans);
    });
}
function getSchemaDiff(oldSchema, newSchema) {
    var diff = {
        del: [],
        add: [],
        change: []
    };
    var table;
    for (table in oldSchema) {
        if (!newSchema[table])
            diff.del.push(table);
    }
    for (table in newSchema) {
        var oldDef = oldSchema[table], newDef = newSchema[table];
        if (!oldDef) {
            diff.add.push([table, newDef]);
        }
        else {
            var change = {
                name: table,
                def: newDef,
                recreate: false,
                del: [],
                add: [],
                change: []
            };
            if ((
            '' + (oldDef.primKey.keyPath || '')) !== ('' + (newDef.primKey.keyPath || '')) ||
                (oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge))
             {
                change.recreate = true;
                diff.change.push(change);
            }
            else {
                var oldIndexes = oldDef.idxByName;
                var newIndexes = newDef.idxByName;
                var idxName = void 0;
                for (idxName in oldIndexes) {
                    if (!newIndexes[idxName])
                        change.del.push(idxName);
                }
                for (idxName in newIndexes) {
                    var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                    if (!oldIdx)
                        change.add.push(newIdx);
                    else if (oldIdx.src !== newIdx.src)
                        change.change.push(newIdx);
                }
                if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                    diff.change.push(change);
                }
            }
        }
    }
    return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
    var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ?
        { keyPath: primKey.keyPath, autoIncrement: primKey.auto } :
        { autoIncrement: primKey.auto });
    indexes.forEach(function (idx) { return addIndex(store, idx); });
    return store;
}
function createMissingTables(newSchema, idbtrans) {
    keys(newSchema).forEach(function (tableName) {
        if (!idbtrans.db.objectStoreNames.contains(tableName)) {
            createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
        }
    });
}
function deleteRemovedTables(newSchema, idbtrans) {
    for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
        var storeName = idbtrans.db.objectStoreNames[i];
        if (newSchema[storeName] == null) {
            idbtrans.db.deleteObjectStore(storeName);
        }
    }
}
function addIndex(store, idx) {
    store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
}
function buildGlobalSchema(db, idbdb, tmpTrans) {
    var globalSchema = {};
    var dbStoreNames = slice(idbdb.objectStoreNames, 0);
    dbStoreNames.forEach(function (storeName) {
        var store = tmpTrans.objectStore(storeName);
        var keyPath = store.keyPath;
        var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
        var indexes = [];
        for (var j = 0; j < store.indexNames.length; ++j) {
            var idbindex = store.index(store.indexNames[j]);
            keyPath = idbindex.keyPath;
            var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
            indexes.push(index);
        }
        globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
    });
    return globalSchema;
}
function readGlobalSchema(db, idbdb, tmpTrans) {
    db.verno = idbdb.version / 10;
    var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
    db._storeNames = slice(idbdb.objectStoreNames, 0);
    setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db, tmpTrans) {
    var installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
    var diff = getSchemaDiff(installedSchema, db._dbSchema);
    return !(diff.add.length || diff.change.some(function (ch) { return ch.add.length || ch.change.length; }));
}
function adjustToExistingIndexNames(db, schema, idbtrans) {
    var storeNames = idbtrans.db.objectStoreNames;
    for (var i = 0; i < storeNames.length; ++i) {
        var storeName = storeNames[i];
        var store = idbtrans.objectStore(storeName);
        db._hasGetAll = 'getAll' in store;
        for (var j = 0; j < store.indexNames.length; ++j) {
            var indexName = store.indexNames[j];
            var keyPath = store.index(indexName).keyPath;
            var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";
            if (schema[storeName]) {
                var indexSpec = schema[storeName].idxByName[dexieName];
                if (indexSpec) {
                    indexSpec.name = indexName;
                    delete schema[storeName].idxByName[dexieName];
                    schema[storeName].idxByName[indexName] = indexSpec;
                }
            }
        }
    }
    if (typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) &&
        !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
        _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope &&
        [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
        db._hasGetAll = false;
    }
}
function parseIndexSyntax(primKeyAndIndexes) {
    return primKeyAndIndexes.split(',').map(function (index, indexNum) {
        index = index.trim();
        var name = index.replace(/([&*]|\+\+)/g, "");
        var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;
        return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
    });
}

var Version =               (function () {
    function Version() {
    }
    Version.prototype._parseStoresSpec = function (stores, outSchema) {
        keys(stores).forEach(function (tableName) {
            if (stores[tableName] !== null) {
                var indexes = parseIndexSyntax(stores[tableName]);
                var primKey = indexes.shift();
                if (primKey.multi)
                    throw new exceptions.Schema("Primary key cannot be multi-valued");
                indexes.forEach(function (idx) {
                    if (idx.auto)
                        throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                    if (!idx.keyPath)
                        throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                });
                outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
            }
        });
    };
    Version.prototype.stores = function (stores) {
        var db = this.db;
        this._cfg.storesSource = this._cfg.storesSource ?
            extend(this._cfg.storesSource, stores) :
            stores;
        var versions = db._versions;
        var storesSpec = {};
        var dbschema = {};
        versions.forEach(function (version) {
            extend(storesSpec, version._cfg.storesSource);
            dbschema = (version._cfg.dbschema = {});
            version._parseStoresSpec(storesSpec, dbschema);
        });
        db._dbSchema = dbschema;
        removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
        setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
        db._storeNames = keys(dbschema);
        return this;
    };
    Version.prototype.upgrade = function (upgradeFunction) {
        this._cfg.contentUpgrade = upgradeFunction;
        return this;
    };
    return Version;
}());

function createVersionConstructor(db) {
    return makeClassConstructor(Version.prototype, function Version$$1(versionNumber) {
        this.db = db;
        this._cfg = {
            version: versionNumber,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
        };
    });
}

var databaseEnumerator;
function DatabaseEnumerator(indexedDB) {
    var hasDatabasesNative = indexedDB && typeof indexedDB.databases === 'function';
    var dbNamesTable;
    if (!hasDatabasesNative) {
        var db = new Dexie(DBNAMES_DB, { addons: [] });
        db.version(1).stores({ dbnames: 'name' });
        dbNamesTable = db.table('dbnames');
    }
    return {
        getDatabaseNames: function () {
            return hasDatabasesNative
                ?
                    DexiePromise.resolve(indexedDB.databases()).then(function (infos) { return infos
                        .map(function (info) { return info.name; })
                        .filter(function (name) { return name !== DBNAMES_DB; }); })
                :
                    dbNamesTable.toCollection().primaryKeys();
        },
        add: function (name) {
            return !hasDatabasesNative && name !== DBNAMES_DB && dbNamesTable.put({ name: name }).catch(nop);
        },
        remove: function (name) {
            return !hasDatabasesNative && name !== DBNAMES_DB && dbNamesTable.delete(name).catch(nop);
        }
    };
}
function initDatabaseEnumerator(indexedDB) {
    try {
        databaseEnumerator = DatabaseEnumerator(indexedDB);
    }
    catch (e) { }
}

function vip(fn) {
    return newScope(function () {
        PSD.letThrough = true;
        return fn();
    });
}

function dexieOpen(db) {
    var state = db._state;
    var indexedDB = db._deps.indexedDB;
    if (state.isBeingOpened || db.idbdb)
        return state.dbReadyPromise.then(function () { return state.dbOpenError ?
            rejection(state.dbOpenError) :
            db; });
    debug && (state.openCanceller._stackHolder = getErrorWithStack());
    state.isBeingOpened = true;
    state.dbOpenError = null;
    state.openComplete = false;
    var resolveDbReady = state.dbReadyResolve,
    upgradeTransaction = null;
    return DexiePromise.race([state.openCanceller, new DexiePromise(function (resolve, reject) {
            if (!indexedDB)
                throw new exceptions.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL " +
                    "(not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
            var dbName = db.name;
            var req = state.autoSchema ?
                indexedDB.open(dbName) :
                indexedDB.open(dbName, Math.round(db.verno * 10));
            if (!req)
                throw new exceptions.MissingAPI("IndexedDB API not available");
            req.onerror = eventRejectHandler(reject);
            req.onblocked = wrap(db._fireOnBlocked);
            req.onupgradeneeded = wrap(function (e) {
                upgradeTransaction = req.transaction;
                if (state.autoSchema && !db._options.allowEmptyDB) {
                    req.onerror = preventDefault;
                    upgradeTransaction.abort();
                    req.result.close();
                    var delreq = indexedDB.deleteDatabase(dbName);
                    delreq.onsuccess = delreq.onerror = wrap(function () {
                        reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
                    });
                }
                else {
                    upgradeTransaction.onerror = eventRejectHandler(reject);
                    var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                    db.idbdb = req.result;
                    runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
                }
            }, reject);
            req.onsuccess = wrap(function () {
                upgradeTransaction = null;
                var idbdb = db.idbdb = req.result;
                var objectStoreNames = slice(idbdb.objectStoreNames);
                if (objectStoreNames.length > 0)
                    try {
                        var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), 'readonly');
                        if (state.autoSchema)
                            readGlobalSchema(db, idbdb, tmpTrans);
                        else {
                            adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
                            if (!verifyInstalledSchema(db, tmpTrans)) {
                                console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.");
                            }
                        }
                        generateMiddlewareStacks(db, tmpTrans);
                    }
                    catch (e) {
                    }
                connections.push(db);
                idbdb.onversionchange = wrap(function (ev) {
                    state.vcFired = true;
                    db.on("versionchange").fire(ev);
                });
                databaseEnumerator.add(dbName);
                resolve();
            }, reject);
        })]).then(function () {
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(db.on.ready.fire)).then(function fireRemainders() {
            if (state.onReadyBeingFired.length > 0) {
                var remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
                state.onReadyBeingFired = [];
                return DexiePromise.resolve(vip(remainders)).then(fireRemainders);
            }
        });
    }).finally(function () {
        state.onReadyBeingFired = null;
    }).then(function () {
        state.isBeingOpened = false;
        return db;
    }).catch(function (err) {
        try {
            upgradeTransaction && upgradeTransaction.abort();
        }
        catch (e) { }
        state.isBeingOpened = false;
        db.close();
        state.dbOpenError = err;
        return rejection(state.dbOpenError);
    }).finally(function () {
        state.openComplete = true;
        resolveDbReady();
    });
}

function awaitIterator(iterator) {
    var callNext = function (result) { return iterator.next(result); }, doThrow = function (error) { return iterator.throw(error); }, onSuccess = step(callNext), onError = step(doThrow);
    function step(getNext) {
        return function (val) {
            var next = getNext(val), value = next.value;
            return next.done ? value :
                (!value || typeof value.then !== 'function' ?
                    isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) :
                    value.then(onSuccess, onError));
        };
    }
    return step(callNext)();
}

function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
    var i = arguments.length;
    if (i < 2)
        throw new exceptions.InvalidArgument("Too few arguments");
    var args = new Array(i - 1);
    while (--i)
        args[i - 1] = arguments[i];
    scopeFunc = args.pop();
    var tables = flatten(args);
    return [mode, tables, scopeFunc];
}
function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
    return DexiePromise.resolve().then(function () {
        var transless = PSD.transless || PSD;
        var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
        var zoneProps = {
            trans: trans,
            transless: transless
        };
        if (parentTransaction) {
            trans.idbtrans = parentTransaction.idbtrans;
        }
        else {
            trans.create();
        }
        var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
        if (scopeFuncIsAsync) {
            incrementExpectedAwaits();
        }
        var returnValue;
        var promiseFollowed = DexiePromise.follow(function () {
            returnValue = scopeFunc.call(trans, trans);
            if (returnValue) {
                if (scopeFuncIsAsync) {
                    var decrementor = decrementExpectedAwaits.bind(null, null);
                    returnValue.then(decrementor, decrementor);
                }
                else if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
                    returnValue = awaitIterator(returnValue);
                }
            }
        }, zoneProps);
        return (returnValue && typeof returnValue.then === 'function' ?
            DexiePromise.resolve(returnValue).then(function (x) { return trans.active ?
                x
                : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")); })
            : promiseFollowed.then(function () { return returnValue; })).then(function (x) {
            if (parentTransaction)
                trans._resolve();
            return trans._completion.then(function () { return x; });
        }).catch(function (e) {
            trans._reject(e);
            return rejection(e);
        });
    });
}

function pad(a, value, count) {
    var result = isArray(a) ? a.slice() : [a];
    for (var i = 0; i < count; ++i)
        result.push(value);
    return result;
}
function createVirtualIndexMiddleware(down) {
    return __assign(__assign({}, down), { table: function (tableName) {
            var table = down.table(tableName);
            var schema = table.schema;
            var indexLookup = {};
            var allVirtualIndexes = [];
            function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
                var keyPathAlias = getKeyPathAlias(keyPath);
                var indexList = (indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || []);
                var keyLength = keyPath == null ? 0 : typeof keyPath === 'string' ? 1 : keyPath.length;
                var isVirtual = keyTail > 0;
                var virtualIndex = __assign(__assign({}, lowLevelIndex), { isVirtual: isVirtual, isPrimaryKey: !isVirtual && lowLevelIndex.isPrimaryKey, keyTail: keyTail,
                    keyLength: keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
                indexList.push(virtualIndex);
                if (!virtualIndex.isPrimaryKey) {
                    allVirtualIndexes.push(virtualIndex);
                }
                if (keyLength > 1) {
                    var virtualKeyPath = keyLength === 2 ?
                        keyPath[0] :
                        keyPath.slice(0, keyLength - 1);
                    addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
                }
                indexList.sort(function (a, b) { return a.keyTail - b.keyTail; });
                return virtualIndex;
            }
            var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
            indexLookup[":id"] = [primaryKey];
            for (var _i = 0, _a = schema.indexes; _i < _a.length; _i++) {
                var index = _a[_i];
                addVirtualIndexes(index.keyPath, 0, index);
            }
            function findBestIndex(keyPath) {
                var result = indexLookup[getKeyPathAlias(keyPath)];
                return result && result[0];
            }
            function translateRange(range, keyTail) {
                return {
                    type: range.type === 1             ?
                        2             :
                        range.type,
                    lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
                    lowerOpen: true,
                    upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
                    upperOpen: true
                };
            }
            function translateRequest(req) {
                var index = req.query.index;
                return index.isVirtual ? __assign(__assign({}, req), { query: {
                        index: index,
                        range: translateRange(req.query.range, index.keyTail)
                    } }) : req;
            }
            var result = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey: primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function (req) {
                    return table.count(translateRequest(req));
                },
                query: function (req) {
                    return table.query(translateRequest(req));
                },
                openCursor: function (req) {
                    var _a = req.query.index, keyTail = _a.keyTail, isVirtual = _a.isVirtual, keyLength = _a.keyLength;
                    if (!isVirtual)
                        return table.openCursor(req);
                    function createVirtualCursor(cursor) {
                        function _continue(key) {
                            key != null ?
                                cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) :
                                req.unique ?
                                    cursor.continue(pad(cursor.key, req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) :
                                    cursor.continue();
                        }
                        var virtualCursor = Object.create(cursor, {
                            continue: { value: _continue },
                            continuePrimaryKey: {
                                value: function (key, primaryKey) {
                                    cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey);
                                }
                            },
                            key: {
                                get: function () {
                                    var key = cursor.key;
                                    return keyLength === 1 ?
                                        key[0] :
                                        key.slice(0, keyLength);
                                }
                            },
                            value: {
                                get: function () {
                                    return cursor.value;
                                }
                            }
                        });
                        return virtualCursor;
                    }
                    return table.openCursor(translateRequest(req))
                        .then(function (cursor) { return cursor && createVirtualCursor(cursor); });
                } });
            return result;
        } });
}
var virtualIndexMiddleware = {
    stack: "dbcore",
    name: "VirtualIndexMiddleware",
    level: 1,
    create: createVirtualIndexMiddleware
};

var hooksMiddleware = {
    stack: "dbcore",
    name: "HooksMiddleware",
    level: 2,
    create: function (downCore) { return (__assign(__assign({}, downCore), { table: function (tableName) {
            var downTable = downCore.table(tableName);
            var primaryKey = downTable.schema.primaryKey;
            var tableMiddleware = __assign(__assign({}, downTable), { mutate: function (req) {
                    var dxTrans = PSD.trans;
                    var _a = dxTrans.table(tableName).hook, deleting = _a.deleting, creating = _a.creating, updating = _a.updating;
                    switch (req.type) {
                        case 'add':
                            if (creating.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                        case 'put':
                            if (creating.fire === nop && updating.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                        case 'delete':
                            if (deleting.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                        case 'deleteRange':
                            if (deleting.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return deleteRange(req); }, true);
                    }
                    return downTable.mutate(req);
                    function addPutOrDelete(req) {
                        var dxTrans = PSD.trans;
                        var keys$$1 = req.keys || getEffectiveKeys(primaryKey, req);
                        if (!keys$$1)
                            throw new Error("Keys missing");
                        req = req.type === 'add' || req.type === 'put' ? __assign(__assign({}, req), { keys: keys$$1, wantResults: true }) :
                         __assign({}, req);
                        if (req.type !== 'delete')
                            req.values = __spreadArrays(req.values);
                        if (req.keys)
                            req.keys = __spreadArrays(req.keys);
                        return getExistingValues(downTable, req, keys$$1).then(function (existingValues) {
                            var contexts = keys$$1.map(function (key, i) {
                                var existingValue = existingValues[i];
                                var ctx = { onerror: null, onsuccess: null };
                                if (req.type === 'delete') {
                                    deleting.fire.call(ctx, key, existingValue, dxTrans);
                                }
                                else if (req.type === 'add' || existingValue === undefined) {
                                    var generatedPrimaryKey = creating.fire.call(ctx, key, req.values[i], dxTrans);
                                    if (key == null && generatedPrimaryKey != null) {
                                        key = generatedPrimaryKey;
                                        req.keys[i] = key;
                                        if (!primaryKey.outbound) {
                                            setByKeyPath(req.values[i], primaryKey.keyPath, key);
                                        }
                                    }
                                }
                                else {
                                    var objectDiff = getObjectDiff(existingValue, req.values[i]);
                                    var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans);
                                    if (additionalChanges_1) {
                                        var requestedValue_1 = req.values[i];
                                        Object.keys(additionalChanges_1).forEach(function (keyPath) {
                                            if (hasOwn(requestedValue_1, keyPath)) {
                                                requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                                            }
                                            else {
                                                setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                                            }
                                        });
                                    }
                                }
                                return ctx;
                            });
                            return downTable.mutate(req).then(function (_a) {
                                var failures = _a.failures, results = _a.results, numFailures = _a.numFailures, lastResult = _a.lastResult;
                                for (var i = 0; i < keys$$1.length; ++i) {
                                    var primKey = results ? results[i] : keys$$1[i];
                                    var ctx = contexts[i];
                                    if (primKey == null) {
                                        ctx.onerror && ctx.onerror(failures[i]);
                                    }
                                    else {
                                        ctx.onsuccess && ctx.onsuccess(req.type === 'put' && existingValues[i] ?
                                            req.values[i] :
                                            primKey
                                        );
                                    }
                                }
                                return { failures: failures, results: results, numFailures: numFailures, lastResult: lastResult };
                            }).catch(function (error) {
                                contexts.forEach(function (ctx) { return ctx.onerror && ctx.onerror(error); });
                                return Promise.reject(error);
                            });
                        });
                    }
                    function deleteRange(req) {
                        return deleteNextChunk(req.trans, req.range, 10000);
                    }
                    function deleteNextChunk(trans, range, limit) {
                        return downTable.query({ trans: trans, values: false, query: { index: primaryKey, range: range }, limit: limit })
                            .then(function (_a) {
                            var result = _a.result;
                            return addPutOrDelete({ type: 'delete', keys: result, trans: trans }).then(function (res) {
                                if (res.numFailures > 0)
                                    return Promise.reject(res.failures[0]);
                                if (result.length < limit) {
                                    return { failures: [], numFailures: 0, lastResult: undefined };
                                }
                                else {
                                    return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: true }), limit);
                                }
                            });
                        });
                    }
                } });
            return tableMiddleware;
        } })); }
};

var Dexie =               (function () {
    function Dexie(name, options) {
        var _this = this;
        this._middlewares = {};
        this.verno = 0;
        var deps = Dexie.dependencies;
        this._options = options = __assign({
            addons: Dexie.addons, autoOpen: true,
            indexedDB: deps.indexedDB, IDBKeyRange: deps.IDBKeyRange }, options);
        this._deps = {
            indexedDB: options.indexedDB,
            IDBKeyRange: options.IDBKeyRange
        };
        var addons = options.addons;
        this._dbSchema = {};
        this._versions = [];
        this._storeNames = [];
        this._allTables = {};
        this.idbdb = null;
        var state = {
            dbOpenError: null,
            isBeingOpened: false,
            onReadyBeingFired: null,
            openComplete: false,
            dbReadyResolve: nop,
            dbReadyPromise: null,
            cancelOpen: nop,
            openCanceller: null,
            autoSchema: true
        };
        state.dbReadyPromise = new DexiePromise(function (resolve) {
            state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function (_, reject) {
            state.cancelOpen = reject;
        });
        this._state = state;
        this.name = name;
        this.on = Events(this, "populate", "blocked", "versionchange", { ready: [promisableChain, nop] });
        this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
            return function (subscriber, bSticky) {
                Dexie.vip(function () {
                    var state = _this._state;
                    if (state.openComplete) {
                        if (!state.dbOpenError)
                            DexiePromise.resolve().then(subscriber);
                        if (bSticky)
                            subscribe(subscriber);
                    }
                    else if (state.onReadyBeingFired) {
                        state.onReadyBeingFired.push(subscriber);
                        if (bSticky)
                            subscribe(subscriber);
                    }
                    else {
                        subscribe(subscriber);
                        var db_1 = _this;
                        if (!bSticky)
                            subscribe(function unsubscribe() {
                                db_1.on.ready.unsubscribe(subscriber);
                                db_1.on.ready.unsubscribe(unsubscribe);
                            });
                    }
                });
            };
        });
        this.Collection = createCollectionConstructor(this);
        this.Table = createTableConstructor(this);
        this.Transaction = createTransactionConstructor(this);
        this.Version = createVersionConstructor(this);
        this.WhereClause = createWhereClauseConstructor(this);
        this.on("versionchange", function (ev) {
            if (ev.newVersion > 0)
                console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.");
            else
                console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request.");
            _this.close();
        });
        this.on("blocked", function (ev) {
            if (!ev.newVersion || ev.newVersion < ev.oldVersion)
                console.warn("Dexie.delete('" + _this.name + "') was blocked");
            else
                console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
        });
        this._maxKey = getMaxKey(options.IDBKeyRange);
        this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) { return new _this.Transaction(mode, storeNames, dbschema, parentTransaction); };
        this._fireOnBlocked = function (ev) {
            _this.on("blocked").fire(ev);
            connections
                .filter(function (c) { return c.name === _this.name && c !== _this && !c._state.vcFired; })
                .map(function (c) { return c.on("versionchange").fire(ev); });
        };
        this.use(virtualIndexMiddleware);
        this.use(hooksMiddleware);
        addons.forEach(function (addon) { return addon(_this); });
    }
    Dexie.prototype.version = function (versionNumber) {
        if (isNaN(versionNumber) || versionNumber < 0.1)
            throw new exceptions.Type("Given version is not a positive number");
        versionNumber = Math.round(versionNumber * 10) / 10;
        if (this.idbdb || this._state.isBeingOpened)
            throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versions = this._versions;
        var versionInstance = versions.filter(function (v) { return v._cfg.version === versionNumber; })[0];
        if (versionInstance)
            return versionInstance;
        versionInstance = new this.Version(versionNumber);
        versions.push(versionInstance);
        versions.sort(lowerVersionFirst);
        versionInstance.stores({});
        this._state.autoSchema = false;
        return versionInstance;
    };
    Dexie.prototype._whenReady = function (fn) {
        var _this = this;
        return this._state.openComplete || PSD.letThrough ? fn() : new DexiePromise(function (resolve, reject) {
            if (!_this._state.isBeingOpened) {
                if (!_this._options.autoOpen) {
                    reject(new exceptions.DatabaseClosed());
                    return;
                }
                _this.open().catch(nop);
            }
            _this._state.dbReadyPromise.then(resolve, reject);
        }).then(fn);
    };
    Dexie.prototype.use = function (_a) {
        var stack = _a.stack, create = _a.create, level = _a.level, name = _a.name;
        if (name)
            this.unuse({ stack: stack, name: name });
        var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
        middlewares.push({ stack: stack, create: create, level: level == null ? 10 : level, name: name });
        middlewares.sort(function (a, b) { return a.level - b.level; });
        return this;
    };
    Dexie.prototype.unuse = function (_a) {
        var stack = _a.stack, name = _a.name, create = _a.create;
        if (stack && this._middlewares[stack]) {
            this._middlewares[stack] = this._middlewares[stack].filter(function (mw) {
                return create ? mw.create !== create :
                    name ? mw.name !== name :
                        false;
            });
        }
        return this;
    };
    Dexie.prototype.open = function () {
        return dexieOpen(this);
    };
    Dexie.prototype.close = function () {
        var idx = connections.indexOf(this), state = this._state;
        if (idx >= 0)
            connections.splice(idx, 1);
        if (this.idbdb) {
            try {
                this.idbdb.close();
            }
            catch (e) { }
            this.idbdb = null;
        }
        this._options.autoOpen = false;
        state.dbOpenError = new exceptions.DatabaseClosed();
        if (state.isBeingOpened)
            state.cancelOpen(state.dbOpenError);
        state.dbReadyPromise = new DexiePromise(function (resolve) {
            state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function (_, reject) {
            state.cancelOpen = reject;
        });
    };
    Dexie.prototype.delete = function () {
        var _this = this;
        var hasArguments = arguments.length > 0;
        var state = this._state;
        return new DexiePromise(function (resolve, reject) {
            var doDelete = function () {
                _this.close();
                var req = _this._deps.indexedDB.deleteDatabase(_this.name);
                req.onsuccess = wrap(function () {
                    databaseEnumerator.remove(_this.name);
                    resolve();
                });
                req.onerror = eventRejectHandler(reject);
                req.onblocked = _this._fireOnBlocked;
            };
            if (hasArguments)
                throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
            if (state.isBeingOpened) {
                state.dbReadyPromise.then(doDelete);
            }
            else {
                doDelete();
            }
        });
    };
    Dexie.prototype.backendDB = function () {
        return this.idbdb;
    };
    Dexie.prototype.isOpen = function () {
        return this.idbdb !== null;
    };
    Dexie.prototype.hasBeenClosed = function () {
        var dbOpenError = this._state.dbOpenError;
        return dbOpenError && (dbOpenError.name === 'DatabaseClosed');
    };
    Dexie.prototype.hasFailed = function () {
        return this._state.dbOpenError !== null;
    };
    Dexie.prototype.dynamicallyOpened = function () {
        return this._state.autoSchema;
    };
    Object.defineProperty(Dexie.prototype, "tables", {
        get: function () {
            var _this = this;
            return keys(this._allTables).map(function (name) { return _this._allTables[name]; });
        },
        enumerable: true,
        configurable: true
    });
    Dexie.prototype.transaction = function () {
        var args = extractTransactionArgs.apply(this, arguments);
        return this._transaction.apply(this, args);
    };
    Dexie.prototype._transaction = function (mode, tables, scopeFunc) {
        var _this = this;
        var parentTransaction = PSD.trans;
        if (!parentTransaction || parentTransaction.db !== this || mode.indexOf('!') !== -1)
            parentTransaction = null;
        var onlyIfCompatible = mode.indexOf('?') !== -1;
        mode = mode.replace('!', '').replace('?', '');
        var idbMode, storeNames;
        try {
            storeNames = tables.map(function (table) {
                var storeName = table instanceof _this.Table ? table.name : table;
                if (typeof storeName !== 'string')
                    throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
            });
            if (mode == "r" || mode === READONLY)
                idbMode = READONLY;
            else if (mode == "rw" || mode == READWRITE)
                idbMode = READWRITE;
            else
                throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
            if (parentTransaction) {
                if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
                    if (onlyIfCompatible) {
                        parentTransaction = null;
                    }
                    else
                        throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                }
                if (parentTransaction) {
                    storeNames.forEach(function (storeName) {
                        if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                            if (onlyIfCompatible) {
                                parentTransaction = null;
                            }
                            else
                                throw new exceptions.SubTransaction("Table " + storeName +
                                    " not included in parent transaction.");
                        }
                    });
                }
                if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
                    parentTransaction = null;
                }
            }
        }
        catch (e) {
            return parentTransaction ?
                parentTransaction._promise(null, function (_, reject) { reject(e); }) :
                rejection(e);
        }
        var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
        return (parentTransaction ?
            parentTransaction._promise(idbMode, enterTransaction, "lock") :
            PSD.trans ?
                usePSD(PSD.transless, function () { return _this._whenReady(enterTransaction); }) :
                this._whenReady(enterTransaction));
    };
    Dexie.prototype.table = function (tableName) {
        if (!hasOwn(this._allTables, tableName)) {
            throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
        }
        return this._allTables[tableName];
    };
    return Dexie;
}());

var Dexie$1 = Dexie;
props(Dexie$1, __assign(__assign({}, fullNameExceptions), {
    delete: function (databaseName) {
        var db = new Dexie$1(databaseName);
        return db.delete();
    },
    exists: function (name) {
        return new Dexie$1(name, { addons: [] }).open().then(function (db) {
            db.close();
            return true;
        }).catch('NoSuchDatabaseError', function () { return false; });
    },
    getDatabaseNames: function (cb) {
        return databaseEnumerator ?
            databaseEnumerator.getDatabaseNames().then(cb) :
            DexiePromise.resolve([]);
    },
    defineClass: function () {
        function Class(content) {
            extend(this, content);
        }
        return Class;
    },
    ignoreTransaction: function (scopeFunc) {
        return PSD.trans ?
            usePSD(PSD.transless, scopeFunc) :
            scopeFunc();
    },
    vip: vip, async: function (generatorFn) {
        return function () {
            try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                if (!rv || typeof rv.then !== 'function')
                    return DexiePromise.resolve(rv);
                return rv;
            }
            catch (e) {
                return rejection(e);
            }
        };
    }, spawn: function (generatorFn, args, thiz) {
        try {
            var rv = awaitIterator(generatorFn.apply(thiz, args || []));
            if (!rv || typeof rv.then !== 'function')
                return DexiePromise.resolve(rv);
            return rv;
        }
        catch (e) {
            return rejection(e);
        }
    },
    currentTransaction: {
        get: function () { return PSD.trans || null; }
    }, waitFor: function (promiseOrFunction, optionalTimeout) {
        var promise = DexiePromise.resolve(typeof promiseOrFunction === 'function' ?
            Dexie$1.ignoreTransaction(promiseOrFunction) :
            promiseOrFunction)
            .timeout(optionalTimeout || 60000);
        return PSD.trans ?
            PSD.trans.waitFor(promise) :
            promise;
    },
    Promise: DexiePromise,
    debug: {
        get: function () { return debug; },
        set: function (value) {
            setDebug(value, value === 'dexie' ? function () { return true; } : dexieStackFrameFilter);
        }
    },
    derive: derive, extend: extend, props: props, override: override,
    Events: Events,
    getByKeyPath: getByKeyPath, setByKeyPath: setByKeyPath, delByKeyPath: delByKeyPath, shallowClone: shallowClone, deepClone: deepClone, getObjectDiff: getObjectDiff, asap: asap,
    minKey: minKey,
    addons: [],
    connections: connections,
    errnames: errnames,
    dependencies: (function () {
        try {
            return {
                indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
                IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
            };
        }
        catch (e) {
            return { indexedDB: null, IDBKeyRange: null };
        }
    })(),
    semVer: DEXIE_VERSION, version: DEXIE_VERSION.split('.')
        .map(function (n) { return parseInt(n); })
        .reduce(function (p, c, i) { return p + (c / Math.pow(10, i * 2)); }),
    default: Dexie$1,
    Dexie: Dexie$1 }));
Dexie$1.maxKey = getMaxKey(Dexie$1.dependencies.IDBKeyRange);

initDatabaseEnumerator(Dexie.dependencies.indexedDB);
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dexie);

//# sourceMappingURL=dexie.mjs.map


/***/ }),

/***/ "./node_modules/lunr/lunr.js":
/*!***********************************!*\
  !*** ./node_modules/lunr/lunr.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9
 * Copyright (C) 2020 Oliver Nightingale
 * @license MIT
 */

;(function(){

/**
 * A convenience function for configuring and constructing
 * a new lunr Index.
 *
 * A lunr.Builder instance is created and the pipeline setup
 * with a trimmer, stop word filter and stemmer.
 *
 * This builder object is yielded to the configuration function
 * that is passed as a parameter, allowing the list of fields
 * and other builder parameters to be customised.
 *
 * All documents _must_ be added within the passed config function.
 *
 * @example
 * var idx = lunr(function () {
 *   this.field('title')
 *   this.field('body')
 *   this.ref('id')
 *
 *   documents.forEach(function (doc) {
 *     this.add(doc)
 *   }, this)
 * })
 *
 * @see {@link lunr.Builder}
 * @see {@link lunr.Pipeline}
 * @see {@link lunr.trimmer}
 * @see {@link lunr.stopWordFilter}
 * @see {@link lunr.stemmer}
 * @namespace {function} lunr
 */
var lunr = function (config) {
  var builder = new lunr.Builder

  builder.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  builder.searchPipeline.add(
    lunr.stemmer
  )

  config.call(builder, builder)
  return builder.build()
}

lunr.version = "2.3.9"
/*!
 * lunr.utils
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 * @namespace lunr.utils
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf lunr.utils
 * @function
 */
lunr.utils.warn = (function (global) {
  /* eslint-disable no-console */
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
  /* eslint-enable no-console */
})(this)

/**
 * Convert an object to a string.
 *
 * In the case of `null` and `undefined` the function returns
 * the empty string, in all other cases the result of calling
 * `toString` on the passed object is returned.
 *
 * @param {Any} obj The object to convert to a string.
 * @return {String} string representation of the passed object.
 * @memberOf lunr.utils
 */
lunr.utils.asString = function (obj) {
  if (obj === void 0 || obj === null) {
    return ""
  } else {
    return obj.toString()
  }
}

/**
 * Clones an object.
 *
 * Will create a copy of an existing object such that any mutations
 * on the copy cannot affect the original.
 *
 * Only shallow objects are supported, passing a nested object to this
 * function will cause a TypeError.
 *
 * Objects with primitives, and arrays of primitives are supported.
 *
 * @param {Object} obj The object to clone.
 * @return {Object} a clone of the passed object.
 * @throws {TypeError} when a nested object is passed.
 * @memberOf Utils
 */
lunr.utils.clone = function (obj) {
  if (obj === null || obj === undefined) {
    return obj
  }

  var clone = Object.create(null),
      keys = Object.keys(obj)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
        val = obj[key]

    if (Array.isArray(val)) {
      clone[key] = val.slice()
      continue
    }

    if (typeof val === 'string' ||
        typeof val === 'number' ||
        typeof val === 'boolean') {
      clone[key] = val
      continue
    }

    throw new TypeError("clone is not deep and does not support nested objects")
  }

  return clone
}
lunr.FieldRef = function (docRef, fieldName, stringValue) {
  this.docRef = docRef
  this.fieldName = fieldName
  this._stringValue = stringValue
}

lunr.FieldRef.joiner = "/"

lunr.FieldRef.fromString = function (s) {
  var n = s.indexOf(lunr.FieldRef.joiner)

  if (n === -1) {
    throw "malformed field ref string"
  }

  var fieldRef = s.slice(0, n),
      docRef = s.slice(n + 1)

  return new lunr.FieldRef (docRef, fieldRef, s)
}

lunr.FieldRef.prototype.toString = function () {
  if (this._stringValue == undefined) {
    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef
  }

  return this._stringValue
}
/*!
 * lunr.Set
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * A lunr set.
 *
 * @constructor
 */
lunr.Set = function (elements) {
  this.elements = Object.create(null)

  if (elements) {
    this.length = elements.length

    for (var i = 0; i < this.length; i++) {
      this.elements[elements[i]] = true
    }
  } else {
    this.length = 0
  }
}

/**
 * A complete set that contains all elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.complete = {
  intersect: function (other) {
    return other
  },

  union: function () {
    return this
  },

  contains: function () {
    return true
  }
}

/**
 * An empty set that contains no elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.empty = {
  intersect: function () {
    return this
  },

  union: function (other) {
    return other
  },

  contains: function () {
    return false
  }
}

/**
 * Returns true if this set contains the specified object.
 *
 * @param {object} object - Object whose presence in this set is to be tested.
 * @returns {boolean} - True if this set contains the specified object.
 */
lunr.Set.prototype.contains = function (object) {
  return !!this.elements[object]
}

/**
 * Returns a new set containing only the elements that are present in both
 * this set and the specified set.
 *
 * @param {lunr.Set} other - set to intersect with this set.
 * @returns {lunr.Set} a new set that is the intersection of this and the specified set.
 */

lunr.Set.prototype.intersect = function (other) {
  var a, b, elements, intersection = []

  if (other === lunr.Set.complete) {
    return this
  }

  if (other === lunr.Set.empty) {
    return other
  }

  if (this.length < other.length) {
    a = this
    b = other
  } else {
    a = other
    b = this
  }

  elements = Object.keys(a.elements)

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    if (element in b.elements) {
      intersection.push(element)
    }
  }

  return new lunr.Set (intersection)
}

/**
 * Returns a new set combining the elements of this and the specified set.
 *
 * @param {lunr.Set} other - set to union with this set.
 * @return {lunr.Set} a new set that is the union of this and the specified set.
 */

lunr.Set.prototype.union = function (other) {
  if (other === lunr.Set.complete) {
    return lunr.Set.complete
  }

  if (other === lunr.Set.empty) {
    return this
  }

  return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)))
}
/**
 * A function to calculate the inverse document frequency for
 * a posting. This is shared between the builder and the index
 *
 * @private
 * @param {object} posting - The posting for a given term
 * @param {number} documentCount - The total number of documents.
 */
lunr.idf = function (posting, documentCount) {
  var documentsWithTerm = 0

  for (var fieldName in posting) {
    if (fieldName == '_index') continue // Ignore the term index, its not a field
    documentsWithTerm += Object.keys(posting[fieldName]).length
  }

  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)

  return Math.log(1 + Math.abs(x))
}

/**
 * A token wraps a string representation of a token
 * as it is passed through the text processing pipeline.
 *
 * @constructor
 * @param {string} [str=''] - The string token being wrapped.
 * @param {object} [metadata={}] - Metadata associated with this token.
 */
lunr.Token = function (str, metadata) {
  this.str = str || ""
  this.metadata = metadata || {}
}

/**
 * Returns the token string that is being wrapped by this object.
 *
 * @returns {string}
 */
lunr.Token.prototype.toString = function () {
  return this.str
}

/**
 * A token update function is used when updating or optionally
 * when cloning a token.
 *
 * @callback lunr.Token~updateFunction
 * @param {string} str - The string representation of the token.
 * @param {Object} metadata - All metadata associated with this token.
 */

/**
 * Applies the given function to the wrapped string token.
 *
 * @example
 * token.update(function (str, metadata) {
 *   return str.toUpperCase()
 * })
 *
 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.update = function (fn) {
  this.str = fn(this.str, this.metadata)
  return this
}

/**
 * Creates a clone of this token. Optionally a function can be
 * applied to the cloned token.
 *
 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.clone = function (fn) {
  fn = fn || function (s) { return s }
  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
}
/*!
 * lunr.tokenizer
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
 * the value of this property to change how strings are split into tokens.
 *
 * This tokenizer will convert its parameter to a string by calling `toString` and
 * then will split this string on the character in `lunr.tokenizer.separator`.
 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
 *
 * Optional metadata can be passed to the tokenizer, this metadata will be cloned and
 * added as metadata to every token that is created from the object to be tokenized.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @param {?object} metadata - Optional metadata to associate with every token
 * @returns {lunr.Token[]}
 * @see {@link lunr.Pipeline}
 */
lunr.tokenizer = function (obj, metadata) {
  if (obj == null || obj == undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map(function (t) {
      return new lunr.Token(
        lunr.utils.asString(t).toLowerCase(),
        lunr.utils.clone(metadata)
      )
    })
  }

  var str = obj.toString().toLowerCase(),
      len = str.length,
      tokens = []

  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    var char = str.charAt(sliceEnd),
        sliceLength = sliceEnd - sliceStart

    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

      if (sliceLength > 0) {
        var tokenMetadata = lunr.utils.clone(metadata) || {}
        tokenMetadata["position"] = [sliceStart, sliceLength]
        tokenMetadata["index"] = tokens.length

        tokens.push(
          new lunr.Token (
            str.slice(sliceStart, sliceEnd),
            tokenMetadata
          )
        )
      }

      sliceStart = sliceEnd + 1
    }

  }

  return tokens
}

/**
 * The separator used to split a string into tokens. Override this property to change the behaviour of
 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
 *
 * @static
 * @see lunr.tokenizer
 */
lunr.tokenizer.separator = /[\s\-]+/
/*!
 * lunr.Pipeline
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = Object.create(null)

/**
 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
 * string as well as all known metadata. A pipeline function can mutate the token string
 * or mutate (or add) metadata for a given token.
 *
 * A pipeline function can indicate that the passed token should be discarded by returning
 * null, undefined or an empty string. This token will not be passed to any downstream pipeline
 * functions and will not be added to the index.
 *
 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
 * to any downstream pipeline functions and all will returned tokens will be added to the index.
 *
 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
 *
 * @interface lunr.PipelineFunction
 * @param {lunr.Token} token - A token from the document being processed.
 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
 * @param {lunr.Token[]} tokens - All tokens for this document/field.
 * @returns {(?lunr.Token|lunr.Token[])}
 */

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @param {String} label - The label to register this function with
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @private
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised - The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load unregistered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var stackLength = this._stack.length

  for (var i = 0; i < stackLength; i++) {
    var fn = this._stack[i]
    var memo = []

    for (var j = 0; j < tokens.length; j++) {
      var result = fn(tokens[j], j, tokens)

      if (result === null || result === void 0 || result === '') continue

      if (Array.isArray(result)) {
        for (var k = 0; k < result.length; k++) {
          memo.push(result[k])
        }
      } else {
        memo.push(result)
      }
    }

    tokens = memo
  }

  return tokens
}

/**
 * Convenience method for passing a string through a pipeline and getting
 * strings out. This method takes care of wrapping the passed string in a
 * token and mapping the resulting tokens back to strings.
 *
 * @param {string} str - The string to pass through the pipeline.
 * @param {?object} metadata - Optional metadata to associate with the token
 * passed to the pipeline.
 * @returns {string[]}
 */
lunr.Pipeline.prototype.runString = function (str, metadata) {
  var token = new lunr.Token (str, metadata)

  return this.run([token]).map(function (t) {
    return t.toString()
  })
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * A vector is used to construct the vector space of documents and queries. These
 * vectors support operations to determine the similarity between two documents or
 * a document and a query.
 *
 * Normally no parameters are required for initializing a vector, but in the case of
 * loading a previously dumped vector the raw elements can be provided to the constructor.
 *
 * For performance reasons vectors are implemented with a flat array, where an elements
 * index is immediately followed by its value. E.g. [index, value, index, value]. This
 * allows the underlying array to be as sparse as possible and still offer decent
 * performance when being used for vector calculations.
 *
 * @constructor
 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
 */
lunr.Vector = function (elements) {
  this._magnitude = 0
  this.elements = elements || []
}


/**
 * Calculates the position within the vector to insert a given index.
 *
 * This is used internally by insert and upsert. If there are duplicate indexes then
 * the position is returned as if the value for that index were to be updated, but it
 * is the callers responsibility to check whether there is a duplicate at that index
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @returns {Number}
 */
lunr.Vector.prototype.positionForIndex = function (index) {
  // For an empty vector the tuple can be inserted at the beginning
  if (this.elements.length == 0) {
    return 0
  }

  var start = 0,
      end = this.elements.length / 2,
      sliceLength = end - start,
      pivotPoint = Math.floor(sliceLength / 2),
      pivotIndex = this.elements[pivotPoint * 2]

  while (sliceLength > 1) {
    if (pivotIndex < index) {
      start = pivotPoint
    }

    if (pivotIndex > index) {
      end = pivotPoint
    }

    if (pivotIndex == index) {
      break
    }

    sliceLength = end - start
    pivotPoint = start + Math.floor(sliceLength / 2)
    pivotIndex = this.elements[pivotPoint * 2]
  }

  if (pivotIndex == index) {
    return pivotPoint * 2
  }

  if (pivotIndex > index) {
    return pivotPoint * 2
  }

  if (pivotIndex < index) {
    return (pivotPoint + 1) * 2
  }
}

/**
 * Inserts an element at an index within the vector.
 *
 * Does not allow duplicates, will throw an error if there is already an entry
 * for this index.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 */
lunr.Vector.prototype.insert = function (insertIdx, val) {
  this.upsert(insertIdx, val, function () {
    throw "duplicate index"
  })
}

/**
 * Inserts or updates an existing index within the vector.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 * @param {function} fn - A function that is called for updates, the existing value and the
 * requested value are passed as arguments
 */
lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
  this._magnitude = 0
  var position = this.positionForIndex(insertIdx)

  if (this.elements[position] == insertIdx) {
    this.elements[position + 1] = fn(this.elements[position + 1], val)
  } else {
    this.elements.splice(position, 0, insertIdx, val)
  }
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude

  var sumOfSquares = 0,
      elementsLength = this.elements.length

  for (var i = 1; i < elementsLength; i += 2) {
    var val = this.elements[i]
    sumOfSquares += val * val
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
 * @returns {Number}
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var dotProduct = 0,
      a = this.elements, b = otherVector.elements,
      aLen = a.length, bLen = b.length,
      aVal = 0, bVal = 0,
      i = 0, j = 0

  while (i < aLen && j < bLen) {
    aVal = a[i], bVal = b[j]
    if (aVal < bVal) {
      i += 2
    } else if (aVal > bVal) {
      j += 2
    } else if (aVal == bVal) {
      dotProduct += a[i + 1] * b[j + 1]
      i += 2
      j += 2
    }
  }

  return dotProduct
}

/**
 * Calculates the similarity between this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The other vector to calculate the
 * similarity with.
 * @returns {Number}
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / this.magnitude() || 0
}

/**
 * Converts the vector to an array of the elements within the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toArray = function () {
  var output = new Array (this.elements.length / 2)

  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    output[j] = this.elements[i]
  }

  return output
}

/**
 * A JSON serializable representation of the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toJSON = function () {
  return this.elements
}
/* eslint-disable */
/*!
 * lunr.stemmer
 * Copyright (C) 2020 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token - The string to stem
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 * @function
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) { w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return function (token) {
    return token.update(porterStemmer);
  }
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
 * list of stop words.
 *
 * The built in lunr.stopWordFilter is built using this generator and can be used
 * to generate custom stopWordFilters for applications or non English languages.
 *
 * @function
 * @param {Array} token The token to pass through the filter
 * @returns {lunr.PipelineFunction}
 * @see lunr.Pipeline
 * @see lunr.stopWordFilter
 */
lunr.generateStopWordFilter = function (stopWords) {
  var words = stopWords.reduce(function (memo, stopWord) {
    memo[stopWord] = stopWord
    return memo
  }, {})

  return function (token) {
    if (token && words[token.toString()] !== token.toString()) return token
  }
}

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @function
 * @implements {lunr.PipelineFunction}
 * @params {lunr.Token} token - A token to check for being a stop word.
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stopWordFilter = lunr.generateStopWordFilter([
  'a',
  'able',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'am',
  'among',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'dear',
  'did',
  'do',
  'does',
  'either',
  'else',
  'ever',
  'every',
  'for',
  'from',
  'get',
  'got',
  'had',
  'has',
  'have',
  'he',
  'her',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'just',
  'least',
  'let',
  'like',
  'likely',
  'may',
  'me',
  'might',
  'most',
  'must',
  'my',
  'neither',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'often',
  'on',
  'only',
  'or',
  'other',
  'our',
  'own',
  'rather',
  'said',
  'say',
  'says',
  'she',
  'should',
  'since',
  'so',
  'some',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'tis',
  'to',
  'too',
  'twas',
  'us',
  'wants',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'yet',
  'you',
  'your'
])

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^\W+/, '').replace(/\W+$/, '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.TokenSet
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * A token set is used to store the unique list of all tokens
 * within an index. Token sets are also used to represent an
 * incoming query to the index, this query token set and index
 * token set are then intersected to find which tokens to look
 * up in the inverted index.
 *
 * A token set can hold multiple tokens, as in the case of the
 * index token set, or it can hold a single token as in the
 * case of a simple query token set.
 *
 * Additionally token sets are used to perform wildcard matching.
 * Leading, contained and trailing wildcards are supported, and
 * from this edit distance matching can also be provided.
 *
 * Token sets are implemented as a minimal finite state automata,
 * where both common prefixes and suffixes are shared between tokens.
 * This helps to reduce the space used for storing the token set.
 *
 * @constructor
 */
lunr.TokenSet = function () {
  this.final = false
  this.edges = {}
  this.id = lunr.TokenSet._nextId
  lunr.TokenSet._nextId += 1
}

/**
 * Keeps track of the next, auto increment, identifier to assign
 * to a new tokenSet.
 *
 * TokenSets require a unique identifier to be correctly minimised.
 *
 * @private
 */
lunr.TokenSet._nextId = 1

/**
 * Creates a TokenSet instance from the given sorted array of words.
 *
 * @param {String[]} arr - A sorted array of strings to create the set from.
 * @returns {lunr.TokenSet}
 * @throws Will throw an error if the input array is not sorted.
 */
lunr.TokenSet.fromArray = function (arr) {
  var builder = new lunr.TokenSet.Builder

  for (var i = 0, len = arr.length; i < len; i++) {
    builder.insert(arr[i])
  }

  builder.finish()
  return builder.root
}

/**
 * Creates a token set from a query clause.
 *
 * @private
 * @param {Object} clause - A single clause from lunr.Query.
 * @param {string} clause.term - The query clause term.
 * @param {number} [clause.editDistance] - The optional edit distance for the term.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromClause = function (clause) {
  if ('editDistance' in clause) {
    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
  } else {
    return lunr.TokenSet.fromString(clause.term)
  }
}

/**
 * Creates a token set representing a single string with a specified
 * edit distance.
 *
 * Insertions, deletions, substitutions and transpositions are each
 * treated as an edit distance of 1.
 *
 * Increasing the allowed edit distance will have a dramatic impact
 * on the performance of both creating and intersecting these TokenSets.
 * It is advised to keep the edit distance less than 3.
 *
 * @param {string} str - The string to create the token set from.
 * @param {number} editDistance - The allowed edit distance to match.
 * @returns {lunr.Vector}
 */
lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
  var root = new lunr.TokenSet

  var stack = [{
    node: root,
    editsRemaining: editDistance,
    str: str
  }]

  while (stack.length) {
    var frame = stack.pop()

    // no edit
    if (frame.str.length > 0) {
      var char = frame.str.charAt(0),
          noEditNode

      if (char in frame.node.edges) {
        noEditNode = frame.node.edges[char]
      } else {
        noEditNode = new lunr.TokenSet
        frame.node.edges[char] = noEditNode
      }

      if (frame.str.length == 1) {
        noEditNode.final = true
      }

      stack.push({
        node: noEditNode,
        editsRemaining: frame.editsRemaining,
        str: frame.str.slice(1)
      })
    }

    if (frame.editsRemaining == 0) {
      continue
    }

    // insertion
    if ("*" in frame.node.edges) {
      var insertionNode = frame.node.edges["*"]
    } else {
      var insertionNode = new lunr.TokenSet
      frame.node.edges["*"] = insertionNode
    }

    if (frame.str.length == 0) {
      insertionNode.final = true
    }

    stack.push({
      node: insertionNode,
      editsRemaining: frame.editsRemaining - 1,
      str: frame.str
    })

    // deletion
    // can only do a deletion if we have enough edits remaining
    // and if there are characters left to delete in the string
    if (frame.str.length > 1) {
      stack.push({
        node: frame.node,
        editsRemaining: frame.editsRemaining - 1,
        str: frame.str.slice(1)
      })
    }

    // deletion
    // just removing the last character from the str
    if (frame.str.length == 1) {
      frame.node.final = true
    }

    // substitution
    // can only do a substitution if we have enough edits remaining
    // and if there are characters left to substitute
    if (frame.str.length >= 1) {
      if ("*" in frame.node.edges) {
        var substitutionNode = frame.node.edges["*"]
      } else {
        var substitutionNode = new lunr.TokenSet
        frame.node.edges["*"] = substitutionNode
      }

      if (frame.str.length == 1) {
        substitutionNode.final = true
      }

      stack.push({
        node: substitutionNode,
        editsRemaining: frame.editsRemaining - 1,
        str: frame.str.slice(1)
      })
    }

    // transposition
    // can only do a transposition if there are edits remaining
    // and there are enough characters to transpose
    if (frame.str.length > 1) {
      var charA = frame.str.charAt(0),
          charB = frame.str.charAt(1),
          transposeNode

      if (charB in frame.node.edges) {
        transposeNode = frame.node.edges[charB]
      } else {
        transposeNode = new lunr.TokenSet
        frame.node.edges[charB] = transposeNode
      }

      if (frame.str.length == 1) {
        transposeNode.final = true
      }

      stack.push({
        node: transposeNode,
        editsRemaining: frame.editsRemaining - 1,
        str: charA + frame.str.slice(2)
      })
    }
  }

  return root
}

/**
 * Creates a TokenSet from a string.
 *
 * The string may contain one or more wildcard characters (*)
 * that will allow wildcard matching when intersecting with
 * another TokenSet.
 *
 * @param {string} str - The string to create a TokenSet from.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromString = function (str) {
  var node = new lunr.TokenSet,
      root = node

  /*
   * Iterates through all characters within the passed string
   * appending a node for each character.
   *
   * When a wildcard character is found then a self
   * referencing edge is introduced to continually match
   * any number of any characters.
   */
  for (var i = 0, len = str.length; i < len; i++) {
    var char = str[i],
        final = (i == len - 1)

    if (char == "*") {
      node.edges[char] = node
      node.final = final

    } else {
      var next = new lunr.TokenSet
      next.final = final

      node.edges[char] = next
      node = next
    }
  }

  return root
}

/**
 * Converts this TokenSet into an array of strings
 * contained within the TokenSet.
 *
 * This is not intended to be used on a TokenSet that
 * contains wildcards, in these cases the results are
 * undefined and are likely to cause an infinite loop.
 *
 * @returns {string[]}
 */
lunr.TokenSet.prototype.toArray = function () {
  var words = []

  var stack = [{
    prefix: "",
    node: this
  }]

  while (stack.length) {
    var frame = stack.pop(),
        edges = Object.keys(frame.node.edges),
        len = edges.length

    if (frame.node.final) {
      /* In Safari, at this point the prefix is sometimes corrupted, see:
       * https://github.com/olivernn/lunr.js/issues/279 Calling any
       * String.prototype method forces Safari to "cast" this string to what
       * it's supposed to be, fixing the bug. */
      frame.prefix.charAt(0)
      words.push(frame.prefix)
    }

    for (var i = 0; i < len; i++) {
      var edge = edges[i]

      stack.push({
        prefix: frame.prefix.concat(edge),
        node: frame.node.edges[edge]
      })
    }
  }

  return words
}

/**
 * Generates a string representation of a TokenSet.
 *
 * This is intended to allow TokenSets to be used as keys
 * in objects, largely to aid the construction and minimisation
 * of a TokenSet. As such it is not designed to be a human
 * friendly representation of the TokenSet.
 *
 * @returns {string}
 */
lunr.TokenSet.prototype.toString = function () {
  // NOTE: Using Object.keys here as this.edges is very likely
  // to enter 'hash-mode' with many keys being added
  //
  // avoiding a for-in loop here as it leads to the function
  // being de-optimised (at least in V8). From some simple
  // benchmarks the performance is comparable, but allowing
  // V8 to optimize may mean easy performance wins in the future.

  if (this._str) {
    return this._str
  }

  var str = this.final ? '1' : '0',
      labels = Object.keys(this.edges).sort(),
      len = labels.length

  for (var i = 0; i < len; i++) {
    var label = labels[i],
        node = this.edges[label]

    str = str + label + node.id
  }

  return str
}

/**
 * Returns a new TokenSet that is the intersection of
 * this TokenSet and the passed TokenSet.
 *
 * This intersection will take into account any wildcards
 * contained within the TokenSet.
 *
 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.prototype.intersect = function (b) {
  var output = new lunr.TokenSet,
      frame = undefined

  var stack = [{
    qNode: b,
    output: output,
    node: this
  }]

  while (stack.length) {
    frame = stack.pop()

    // NOTE: As with the #toString method, we are using
    // Object.keys and a for loop instead of a for-in loop
    // as both of these objects enter 'hash' mode, causing
    // the function to be de-optimised in V8
    var qEdges = Object.keys(frame.qNode.edges),
        qLen = qEdges.length,
        nEdges = Object.keys(frame.node.edges),
        nLen = nEdges.length

    for (var q = 0; q < qLen; q++) {
      var qEdge = qEdges[q]

      for (var n = 0; n < nLen; n++) {
        var nEdge = nEdges[n]

        if (nEdge == qEdge || qEdge == '*') {
          var node = frame.node.edges[nEdge],
              qNode = frame.qNode.edges[qEdge],
              final = node.final && qNode.final,
              next = undefined

          if (nEdge in frame.output.edges) {
            // an edge already exists for this character
            // no need to create a new node, just set the finality
            // bit unless this node is already final
            next = frame.output.edges[nEdge]
            next.final = next.final || final

          } else {
            // no edge exists yet, must create one
            // set the finality bit and insert it
            // into the output
            next = new lunr.TokenSet
            next.final = final
            frame.output.edges[nEdge] = next
          }

          stack.push({
            qNode: qNode,
            output: next,
            node: node
          })
        }
      }
    }
  }

  return output
}
lunr.TokenSet.Builder = function () {
  this.previousWord = ""
  this.root = new lunr.TokenSet
  this.uncheckedNodes = []
  this.minimizedNodes = {}
}

lunr.TokenSet.Builder.prototype.insert = function (word) {
  var node,
      commonPrefix = 0

  if (word < this.previousWord) {
    throw new Error ("Out of order word insertion")
  }

  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    if (word[i] != this.previousWord[i]) break
    commonPrefix++
  }

  this.minimize(commonPrefix)

  if (this.uncheckedNodes.length == 0) {
    node = this.root
  } else {
    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child
  }

  for (var i = commonPrefix; i < word.length; i++) {
    var nextNode = new lunr.TokenSet,
        char = word[i]

    node.edges[char] = nextNode

    this.uncheckedNodes.push({
      parent: node,
      char: char,
      child: nextNode
    })

    node = nextNode
  }

  node.final = true
  this.previousWord = word
}

lunr.TokenSet.Builder.prototype.finish = function () {
  this.minimize(0)
}

lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    var node = this.uncheckedNodes[i],
        childKey = node.child.toString()

    if (childKey in this.minimizedNodes) {
      node.parent.edges[node.char] = this.minimizedNodes[childKey]
    } else {
      // Cache the key for this node since
      // we know it can't change anymore
      node.child._str = childKey

      this.minimizedNodes[childKey] = node.child
    }

    this.uncheckedNodes.pop()
  }
}
/*!
 * lunr.Index
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * An index contains the built index of all documents and provides a query interface
 * to the index.
 *
 * Usually instances of lunr.Index will not be created using this constructor, instead
 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
 * used to load previously built and serialized indexes.
 *
 * @constructor
 * @param {Object} attrs - The attributes of the built search index.
 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
 * @param {Object<string, lunr.Vector>} attrs.fieldVectors - Field vectors
 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
 * @param {string[]} attrs.fields - The names of indexed document fields.
 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
 */
lunr.Index = function (attrs) {
  this.invertedIndex = attrs.invertedIndex
  this.fieldVectors = attrs.fieldVectors
  this.tokenSet = attrs.tokenSet
  this.fields = attrs.fields
  this.pipeline = attrs.pipeline
}

/**
 * A result contains details of a document matching a search query.
 * @typedef {Object} lunr.Index~Result
 * @property {string} ref - The reference of the document this result represents.
 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
 */

/**
 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
 * query language which itself is parsed into an instance of lunr.Query.
 *
 * For programmatically building queries it is advised to directly use lunr.Query, the query language
 * is best used for human entered text rather than program generated text.
 *
 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
 * or 'world', though those that contain both will rank higher in the results.
 *
 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
 * wildcards will increase the number of documents that will be found but can also have a negative
 * impact on query performance, especially with wildcards at the beginning of a term.
 *
 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
 * hello in the title field will match this query. Using a field not present in the index will lead
 * to an error being thrown.
 *
 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
 * Avoid large values for edit distance to improve query performance.
 *
 * Each term also supports a presence modifier. By default a term's presence in document is optional, however
 * this can be changed to either required or prohibited. For a term's presence to be required in a document the
 * term should be prefixed with a '+', e.g. `+foo bar` is a search for documents that must contain 'foo' and
 * optionally contain 'bar'. Conversely a leading '-' sets the terms presence to prohibited, i.e. it must not
 * appear in a document, e.g. `-foo bar` is a search for documents that do not contain 'foo' but may contain 'bar'.
 *
 * To escape special characters the backslash character '\' can be used, this allows searches to include
 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
 * of attempting to apply a boost of 2 to the search term "foo".
 *
 * @typedef {string} lunr.Index~QueryString
 * @example <caption>Simple single term query</caption>
 * hello
 * @example <caption>Multiple term query</caption>
 * hello world
 * @example <caption>term scoped to a field</caption>
 * title:hello
 * @example <caption>term with a boost of 10</caption>
 * hello^10
 * @example <caption>term with an edit distance of 2</caption>
 * hello~2
 * @example <caption>terms with presence modifiers</caption>
 * -foo +bar baz
 */

/**
 * Performs a search against the index using lunr query syntax.
 *
 * Results will be returned sorted by their score, the most relevant results
 * will be returned first.  For details on how the score is calculated, please see
 * the {@link https://lunrjs.com/guides/searching.html#scoring|guide}.
 *
 * For more programmatic querying use lunr.Index#query.
 *
 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.search = function (queryString) {
  return this.query(function (query) {
    var parser = new lunr.QueryParser(queryString, query)
    parser.parse()
  })
}

/**
 * A query builder callback provides a query object to be used to express
 * the query to perform on the index.
 *
 * @callback lunr.Index~queryBuilder
 * @param {lunr.Query} query - The query object to build up.
 * @this lunr.Query
 */

/**
 * Performs a query against the index using the yielded lunr.Query object.
 *
 * If performing programmatic queries against the index, this method is preferred
 * over lunr.Index#search so as to avoid the additional query parsing overhead.
 *
 * A query object is yielded to the supplied function which should be used to
 * express the query to be run against the index.
 *
 * Note that although this function takes a callback parameter it is _not_ an
 * asynchronous operation, the callback is just yielded a query object to be
 * customized.
 *
 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.query = function (fn) {
  // for each query clause
  // * process terms
  // * expand terms from token set
  // * find matching documents and metadata
  // * get document vectors
  // * score documents

  var query = new lunr.Query(this.fields),
      matchingFields = Object.create(null),
      queryVectors = Object.create(null),
      termFieldCache = Object.create(null),
      requiredMatches = Object.create(null),
      prohibitedMatches = Object.create(null)

  /*
   * To support field level boosts a query vector is created per
   * field. An empty vector is eagerly created to support negated
   * queries.
   */
  for (var i = 0; i < this.fields.length; i++) {
    queryVectors[this.fields[i]] = new lunr.Vector
  }

  fn.call(query, query)

  for (var i = 0; i < query.clauses.length; i++) {
    /*
     * Unless the pipeline has been disabled for this term, which is
     * the case for terms with wildcards, we need to pass the clause
     * term through the search pipeline. A pipeline returns an array
     * of processed terms. Pipeline functions may expand the passed
     * term, which means we may end up performing multiple index lookups
     * for a single query term.
     */
    var clause = query.clauses[i],
        terms = null,
        clauseMatches = lunr.Set.empty

    if (clause.usePipeline) {
      terms = this.pipeline.runString(clause.term, {
        fields: clause.fields
      })
    } else {
      terms = [clause.term]
    }

    for (var m = 0; m < terms.length; m++) {
      var term = terms[m]

      /*
       * Each term returned from the pipeline needs to use the same query
       * clause object, e.g. the same boost and or edit distance. The
       * simplest way to do this is to re-use the clause object but mutate
       * its term property.
       */
      clause.term = term

      /*
       * From the term in the clause we create a token set which will then
       * be used to intersect the indexes token set to get a list of terms
       * to lookup in the inverted index
       */
      var termTokenSet = lunr.TokenSet.fromClause(clause),
          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()

      /*
       * If a term marked as required does not exist in the tokenSet it is
       * impossible for the search to return any matches. We set all the field
       * scoped required matches set to empty and stop examining any further
       * clauses.
       */
      if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {
        for (var k = 0; k < clause.fields.length; k++) {
          var field = clause.fields[k]
          requiredMatches[field] = lunr.Set.empty
        }

        break
      }

      for (var j = 0; j < expandedTerms.length; j++) {
        /*
         * For each term get the posting and termIndex, this is required for
         * building the query vector.
         */
        var expandedTerm = expandedTerms[j],
            posting = this.invertedIndex[expandedTerm],
            termIndex = posting._index

        for (var k = 0; k < clause.fields.length; k++) {
          /*
           * For each field that this query term is scoped by (by default
           * all fields are in scope) we need to get all the document refs
           * that have this term in that field.
           *
           * The posting is the entry in the invertedIndex for the matching
           * term from above.
           */
          var field = clause.fields[k],
              fieldPosting = posting[field],
              matchingDocumentRefs = Object.keys(fieldPosting),
              termField = expandedTerm + "/" + field,
              matchingDocumentsSet = new lunr.Set(matchingDocumentRefs)

          /*
           * if the presence of this term is required ensure that the matching
           * documents are added to the set of required matches for this clause.
           *
           */
          if (clause.presence == lunr.Query.presence.REQUIRED) {
            clauseMatches = clauseMatches.union(matchingDocumentsSet)

            if (requiredMatches[field] === undefined) {
              requiredMatches[field] = lunr.Set.complete
            }
          }

          /*
           * if the presence of this term is prohibited ensure that the matching
           * documents are added to the set of prohibited matches for this field,
           * creating that set if it does not yet exist.
           */
          if (clause.presence == lunr.Query.presence.PROHIBITED) {
            if (prohibitedMatches[field] === undefined) {
              prohibitedMatches[field] = lunr.Set.empty
            }

            prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet)

            /*
             * Prohibited matches should not be part of the query vector used for
             * similarity scoring and no metadata should be extracted so we continue
             * to the next field
             */
            continue
          }

          /*
           * The query field vector is populated using the termIndex found for
           * the term and a unit value with the appropriate boost applied.
           * Using upsert because there could already be an entry in the vector
           * for the term we are working with. In that case we just add the scores
           * together.
           */
          queryVectors[field].upsert(termIndex, clause.boost, function (a, b) { return a + b })

          /**
           * If we've already seen this term, field combo then we've already collected
           * the matching documents and metadata, no need to go through all that again
           */
          if (termFieldCache[termField]) {
            continue
          }

          for (var l = 0; l < matchingDocumentRefs.length; l++) {
            /*
             * All metadata for this term/field/document triple
             * are then extracted and collected into an instance
             * of lunr.MatchData ready to be returned in the query
             * results
             */
            var matchingDocumentRef = matchingDocumentRefs[l],
                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
                metadata = fieldPosting[matchingDocumentRef],
                fieldMatch

            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)
            } else {
              fieldMatch.add(expandedTerm, field, metadata)
            }

          }

          termFieldCache[termField] = true
        }
      }
    }

    /**
     * If the presence was required we need to update the requiredMatches field sets.
     * We do this after all fields for the term have collected their matches because
     * the clause terms presence is required in _any_ of the fields not _all_ of the
     * fields.
     */
    if (clause.presence === lunr.Query.presence.REQUIRED) {
      for (var k = 0; k < clause.fields.length; k++) {
        var field = clause.fields[k]
        requiredMatches[field] = requiredMatches[field].intersect(clauseMatches)
      }
    }
  }

  /**
   * Need to combine the field scoped required and prohibited
   * matching documents into a global set of required and prohibited
   * matches
   */
  var allRequiredMatches = lunr.Set.complete,
      allProhibitedMatches = lunr.Set.empty

  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i]

    if (requiredMatches[field]) {
      allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field])
    }

    if (prohibitedMatches[field]) {
      allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field])
    }
  }

  var matchingFieldRefs = Object.keys(matchingFields),
      results = [],
      matches = Object.create(null)

  /*
   * If the query is negated (contains only prohibited terms)
   * we need to get _all_ fieldRefs currently existing in the
   * index. This is only done when we know that the query is
   * entirely prohibited terms to avoid any cost of getting all
   * fieldRefs unnecessarily.
   *
   * Additionally, blank MatchData must be created to correctly
   * populate the results.
   */
  if (query.isNegated()) {
    matchingFieldRefs = Object.keys(this.fieldVectors)

    for (var i = 0; i < matchingFieldRefs.length; i++) {
      var matchingFieldRef = matchingFieldRefs[i]
      var fieldRef = lunr.FieldRef.fromString(matchingFieldRef)
      matchingFields[matchingFieldRef] = new lunr.MatchData
    }
  }

  for (var i = 0; i < matchingFieldRefs.length; i++) {
    /*
     * Currently we have document fields that match the query, but we
     * need to return documents. The matchData and scores are combined
     * from multiple fields belonging to the same document.
     *
     * Scores are calculated by field, using the query vectors created
     * above, and combined into a final document score using addition.
     */
    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
        docRef = fieldRef.docRef

    if (!allRequiredMatches.contains(docRef)) {
      continue
    }

    if (allProhibitedMatches.contains(docRef)) {
      continue
    }

    var fieldVector = this.fieldVectors[fieldRef],
        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
        docMatch

    if ((docMatch = matches[docRef]) !== undefined) {
      docMatch.score += score
      docMatch.matchData.combine(matchingFields[fieldRef])
    } else {
      var match = {
        ref: docRef,
        score: score,
        matchData: matchingFields[fieldRef]
      }
      matches[docRef] = match
      results.push(match)
    }
  }

  /*
   * Sort the results objects by score, highest first.
   */
  return results.sort(function (a, b) {
    return b.score - a.score
  })
}

/**
 * Prepares the index for JSON serialization.
 *
 * The schema for this JSON blob will be described in a
 * separate JSON schema file.
 *
 * @returns {Object}
 */
lunr.Index.prototype.toJSON = function () {
  var invertedIndex = Object.keys(this.invertedIndex)
    .sort()
    .map(function (term) {
      return [term, this.invertedIndex[term]]
    }, this)

  var fieldVectors = Object.keys(this.fieldVectors)
    .map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()]
    }, this)

  return {
    version: lunr.version,
    fields: this.fields,
    fieldVectors: fieldVectors,
    invertedIndex: invertedIndex,
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Loads a previously serialized lunr.Index
 *
 * @param {Object} serializedIndex - A previously serialized lunr.Index
 * @returns {lunr.Index}
 */
lunr.Index.load = function (serializedIndex) {
  var attrs = {},
      fieldVectors = {},
      serializedVectors = serializedIndex.fieldVectors,
      invertedIndex = Object.create(null),
      serializedInvertedIndex = serializedIndex.invertedIndex,
      tokenSetBuilder = new lunr.TokenSet.Builder,
      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)

  if (serializedIndex.version != lunr.version) {
    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'")
  }

  for (var i = 0; i < serializedVectors.length; i++) {
    var tuple = serializedVectors[i],
        ref = tuple[0],
        elements = tuple[1]

    fieldVectors[ref] = new lunr.Vector(elements)
  }

  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    var tuple = serializedInvertedIndex[i],
        term = tuple[0],
        posting = tuple[1]

    tokenSetBuilder.insert(term)
    invertedIndex[term] = posting
  }

  tokenSetBuilder.finish()

  attrs.fields = serializedIndex.fields

  attrs.fieldVectors = fieldVectors
  attrs.invertedIndex = invertedIndex
  attrs.tokenSet = tokenSetBuilder.root
  attrs.pipeline = pipeline

  return new lunr.Index(attrs)
}
/*!
 * lunr.Builder
 * Copyright (C) 2020 Oliver Nightingale
 */

/**
 * lunr.Builder performs indexing on a set of documents and
 * returns instances of lunr.Index ready for querying.
 *
 * All configuration of the index is done via the builder, the
 * fields to index, the document reference, the text processing
 * pipeline and document scoring parameters are all set on the
 * builder before indexing.
 *
 * @constructor
 * @property {string} _ref - Internal reference to the document reference field.
 * @property {string[]} _fields - Internal reference to the document fields to index.
 * @property {object} invertedIndex - The inverted index maps terms to document fields.
 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
 * @property {number} documentCount - Keeps track of the total number of documents indexed.
 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
 */
lunr.Builder = function () {
  this._ref = "id"
  this._fields = Object.create(null)
  this._documents = Object.create(null)
  this.invertedIndex = Object.create(null)
  this.fieldTermFrequencies = {}
  this.fieldLengths = {}
  this.tokenizer = lunr.tokenizer
  this.pipeline = new lunr.Pipeline
  this.searchPipeline = new lunr.Pipeline
  this.documentCount = 0
  this._b = 0.75
  this._k1 = 1.2
  this.termIndex = 0
  this.metadataWhitelist = []
}

/**
 * Sets the document field used as the document reference. Every document must have this field.
 * The type of this field in the document should be a string, if it is not a string it will be
 * coerced into a string by calling toString.
 *
 * The default ref is 'id'.
 *
 * The ref should _not_ be changed during indexing, it should be set before any documents are
 * added to the index. Changing it during indexing can lead to inconsistent results.
 *
 * @param {string} ref - The name of the reference field in the document.
 */
lunr.Builder.prototype.ref = function (ref) {
  this._ref = ref
}

/**
 * A function that is used to extract a field from a document.
 *
 * Lunr expects a field to be at the top level of a document, if however the field
 * is deeply nested within a document an extractor function can be used to extract
 * the right field for indexing.
 *
 * @callback fieldExtractor
 * @param {object} doc - The document being added to the index.
 * @returns {?(string|object|object[])} obj - The object that will be indexed for this field.
 * @example <caption>Extracting a nested field</caption>
 * function (doc) { return doc.nested.field }
 */

/**
 * Adds a field to the list of document fields that will be indexed. Every document being
 * indexed should have this field. Null values for this field in indexed documents will
 * not cause errors but will limit the chance of that document being retrieved by searches.
 *
 * All fields should be added before adding documents to the index. Adding fields after
 * a document has been indexed will have no effect on already indexed documents.
 *
 * Fields can be boosted at build time. This allows terms within that field to have more
 * importance when ranking search results. Use a field boost to specify that matches within
 * one field are more important than other fields.
 *
 * @param {string} fieldName - The name of a field to index in all documents.
 * @param {object} attributes - Optional attributes associated with this field.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this field.
 * @param {fieldExtractor} [attributes.extractor] - Function to extract a field from a document.
 * @throws {RangeError} fieldName cannot contain unsupported characters '/'
 */
lunr.Builder.prototype.field = function (fieldName, attributes) {
  if (/\//.test(fieldName)) {
    throw new RangeError ("Field '" + fieldName + "' contains illegal character '/'")
  }

  this._fields[fieldName] = attributes || {}
}

/**
 * A parameter to tune the amount of field length normalisation that is applied when
 * calculating relevance scores. A value of 0 will completely disable any normalisation
 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
 * will be clamped to the range 0 - 1.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.b = function (number) {
  if (number < 0) {
    this._b = 0
  } else if (number > 1) {
    this._b = 1
  } else {
    this._b = number
  }
}

/**
 * A parameter that controls the speed at which a rise in term frequency results in term
 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
 * slower saturation levels, a lower value will result in quicker saturation.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.k1 = function (number) {
  this._k1 = number
}

/**
 * Adds a document to the index.
 *
 * Before adding fields to the index the index should have been fully setup, with the document
 * ref and all fields to index already having been specified.
 *
 * The document must have a field name as specified by the ref (by default this is 'id') and
 * it should have all fields defined for indexing, though null or undefined values will not
 * cause errors.
 *
 * Entire documents can be boosted at build time. Applying a boost to a document indicates that
 * this document should rank higher in search results than other documents.
 *
 * @param {object} doc - The document to add to the index.
 * @param {object} attributes - Optional attributes associated with this document.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this document.
 */
lunr.Builder.prototype.add = function (doc, attributes) {
  var docRef = doc[this._ref],
      fields = Object.keys(this._fields)

  this._documents[docRef] = attributes || {}
  this.documentCount += 1

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i],
        extractor = this._fields[fieldName].extractor,
        field = extractor ? extractor(doc) : doc[fieldName],
        tokens = this.tokenizer(field, {
          fields: [fieldName]
        }),
        terms = this.pipeline.run(tokens),
        fieldRef = new lunr.FieldRef (docRef, fieldName),
        fieldTerms = Object.create(null)

    this.fieldTermFrequencies[fieldRef] = fieldTerms
    this.fieldLengths[fieldRef] = 0

    // store the length of this field for this document
    this.fieldLengths[fieldRef] += terms.length

    // calculate term frequencies for this field
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j]

      if (fieldTerms[term] == undefined) {
        fieldTerms[term] = 0
      }

      fieldTerms[term] += 1

      // add to inverted index
      // create an initial posting if one doesn't exist
      if (this.invertedIndex[term] == undefined) {
        var posting = Object.create(null)
        posting["_index"] = this.termIndex
        this.termIndex += 1

        for (var k = 0; k < fields.length; k++) {
          posting[fields[k]] = Object.create(null)
        }

        this.invertedIndex[term] = posting
      }

      // add an entry for this term/fieldName/docRef to the invertedIndex
      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
        this.invertedIndex[term][fieldName][docRef] = Object.create(null)
      }

      // store all whitelisted metadata about this token in the
      // inverted index
      for (var l = 0; l < this.metadataWhitelist.length; l++) {
        var metadataKey = this.metadataWhitelist[l],
            metadata = term.metadata[metadataKey]

        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
          this.invertedIndex[term][fieldName][docRef][metadataKey] = []
        }

        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)
      }
    }

  }
}

/**
 * Calculates the average document length for this index
 *
 * @private
 */
lunr.Builder.prototype.calculateAverageFieldLengths = function () {

  var fieldRefs = Object.keys(this.fieldLengths),
      numberOfFields = fieldRefs.length,
      accumulator = {},
      documentsWithField = {}

  for (var i = 0; i < numberOfFields; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName

    documentsWithField[field] || (documentsWithField[field] = 0)
    documentsWithField[field] += 1

    accumulator[field] || (accumulator[field] = 0)
    accumulator[field] += this.fieldLengths[fieldRef]
  }

  var fields = Object.keys(this._fields)

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i]
    accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName]
  }

  this.averageFieldLength = accumulator
}

/**
 * Builds a vector space model of every document using lunr.Vector
 *
 * @private
 */
lunr.Builder.prototype.createFieldVectors = function () {
  var fieldVectors = {},
      fieldRefs = Object.keys(this.fieldTermFrequencies),
      fieldRefsLength = fieldRefs.length,
      termIdfCache = Object.create(null)

  for (var i = 0; i < fieldRefsLength; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        fieldName = fieldRef.fieldName,
        fieldLength = this.fieldLengths[fieldRef],
        fieldVector = new lunr.Vector,
        termFrequencies = this.fieldTermFrequencies[fieldRef],
        terms = Object.keys(termFrequencies),
        termsLength = terms.length


    var fieldBoost = this._fields[fieldName].boost || 1,
        docBoost = this._documents[fieldRef.docRef].boost || 1

    for (var j = 0; j < termsLength; j++) {
      var term = terms[j],
          tf = termFrequencies[term],
          termIndex = this.invertedIndex[term]._index,
          idf, score, scoreWithPrecision

      if (termIdfCache[term] === undefined) {
        idf = lunr.idf(this.invertedIndex[term], this.documentCount)
        termIdfCache[term] = idf
      } else {
        idf = termIdfCache[term]
      }

      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf)
      score *= fieldBoost
      score *= docBoost
      scoreWithPrecision = Math.round(score * 1000) / 1000
      // Converts 1.23456789 to 1.234.
      // Reducing the precision so that the vectors take up less
      // space when serialised. Doing it now so that they behave
      // the same before and after serialisation. Also, this is
      // the fastest approach to reducing a number's precision in
      // JavaScript.

      fieldVector.insert(termIndex, scoreWithPrecision)
    }

    fieldVectors[fieldRef] = fieldVector
  }

  this.fieldVectors = fieldVectors
}

/**
 * Creates a token set of all tokens in the index using lunr.TokenSet
 *
 * @private
 */
lunr.Builder.prototype.createTokenSet = function () {
  this.tokenSet = lunr.TokenSet.fromArray(
    Object.keys(this.invertedIndex).sort()
  )
}

/**
 * Builds the index, creating an instance of lunr.Index.
 *
 * This completes the indexing process and should only be called
 * once all documents have been added to the index.
 *
 * @returns {lunr.Index}
 */
lunr.Builder.prototype.build = function () {
  this.calculateAverageFieldLengths()
  this.createFieldVectors()
  this.createTokenSet()

  return new lunr.Index({
    invertedIndex: this.invertedIndex,
    fieldVectors: this.fieldVectors,
    tokenSet: this.tokenSet,
    fields: Object.keys(this._fields),
    pipeline: this.searchPipeline
  })
}

/**
 * Applies a plugin to the index builder.
 *
 * A plugin is a function that is called with the index builder as its context.
 * Plugins can be used to customise or extend the behaviour of the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied when building the index.
 *
 * The plugin function will be called with the index builder as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index builder as its context.
 *
 * @param {Function} plugin The plugin to apply.
 */
lunr.Builder.prototype.use = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  fn.apply(this, args)
}
/**
 * Contains and collects metadata about a matching document.
 * A single instance of lunr.MatchData is returned as part of every
 * lunr.Index~Result.
 *
 * @constructor
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 * @property {object} metadata - A cloned collection of metadata associated with this document.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData = function (term, field, metadata) {
  var clonedMetadata = Object.create(null),
      metadataKeys = Object.keys(metadata || {})

  // Cloning the metadata to prevent the original
  // being mutated during match data combination.
  // Metadata is kept in an array within the inverted
  // index so cloning the data can be done with
  // Array#slice
  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]
    clonedMetadata[key] = metadata[key].slice()
  }

  this.metadata = Object.create(null)

  if (term !== undefined) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = clonedMetadata
  }
}

/**
 * An instance of lunr.MatchData will be created for every term that matches a
 * document. However only one instance is required in a lunr.Index~Result. This
 * method combines metadata from another instance of lunr.MatchData with this
 * objects metadata.
 *
 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData.prototype.combine = function (otherMatchData) {
  var terms = Object.keys(otherMatchData.metadata)

  for (var i = 0; i < terms.length; i++) {
    var term = terms[i],
        fields = Object.keys(otherMatchData.metadata[term])

    if (this.metadata[term] == undefined) {
      this.metadata[term] = Object.create(null)
    }

    for (var j = 0; j < fields.length; j++) {
      var field = fields[j],
          keys = Object.keys(otherMatchData.metadata[term][field])

      if (this.metadata[term][field] == undefined) {
        this.metadata[term][field] = Object.create(null)
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k]

        if (this.metadata[term][field][key] == undefined) {
          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]
        } else {
          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])
        }

      }
    }
  }
}

/**
 * Add metadata for a term/field pair to this instance of match data.
 *
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 */
lunr.MatchData.prototype.add = function (term, field, metadata) {
  if (!(term in this.metadata)) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = metadata
    return
  }

  if (!(field in this.metadata[term])) {
    this.metadata[term][field] = metadata
    return
  }

  var metadataKeys = Object.keys(metadata)

  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]

    if (key in this.metadata[term][field]) {
      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])
    } else {
      this.metadata[term][field][key] = metadata[key]
    }
  }
}
/**
 * A lunr.Query provides a programmatic way of defining queries to be performed
 * against a {@link lunr.Index}.
 *
 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
 * so the query object is pre-initialized with the right index fields.
 *
 * @constructor
 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
 */
lunr.Query = function (allFields) {
  this.clauses = []
  this.allFields = allFields
}

/**
 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
 *
 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
 * concatenation.
 *
 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
 *
 * @constant
 * @default
 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with trailing wildcard</caption>
 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
 * @example <caption>query term with leading and trailing wildcard</caption>
 * query.term('foo', {
 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
 * })
 */

lunr.Query.wildcard = new String ("*")
lunr.Query.wildcard.NONE = 0
lunr.Query.wildcard.LEADING = 1
lunr.Query.wildcard.TRAILING = 2

/**
 * Constants for indicating what kind of presence a term must have in matching documents.
 *
 * @constant
 * @enum {number}
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with required presence</caption>
 * query.term('foo', { presence: lunr.Query.presence.REQUIRED })
 */
lunr.Query.presence = {
  /**
   * Term's presence in a document is optional, this is the default value.
   */
  OPTIONAL: 1,

  /**
   * Term's presence in a document is required, documents that do not contain
   * this term will not be returned.
   */
  REQUIRED: 2,

  /**
   * Term's presence in a document is prohibited, documents that do contain
   * this term will not be returned.
   */
  PROHIBITED: 3
}

/**
 * A single clause in a {@link lunr.Query} contains a term and details on how to
 * match that term against a {@link lunr.Index}.
 *
 * @typedef {Object} lunr.Query~Clause
 * @property {string[]} fields - The fields in an index this clause should be matched against.
 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
 * @property {number} [wildcard=lunr.Query.wildcard.NONE] - Whether the term should have wildcards appended or prepended.
 * @property {number} [presence=lunr.Query.presence.OPTIONAL] - The terms presence in any matching documents.
 */

/**
 * Adds a {@link lunr.Query~Clause} to this query.
 *
 * Unless the clause contains the fields to be matched all fields will be matched. In addition
 * a default boost of 1 is applied to the clause.
 *
 * @param {lunr.Query~Clause} clause - The clause to add to this query.
 * @see lunr.Query~Clause
 * @returns {lunr.Query}
 */
lunr.Query.prototype.clause = function (clause) {
  if (!('fields' in clause)) {
    clause.fields = this.allFields
  }

  if (!('boost' in clause)) {
    clause.boost = 1
  }

  if (!('usePipeline' in clause)) {
    clause.usePipeline = true
  }

  if (!('wildcard' in clause)) {
    clause.wildcard = lunr.Query.wildcard.NONE
  }

  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    clause.term = "*" + clause.term
  }

  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    clause.term = "" + clause.term + "*"
  }

  if (!('presence' in clause)) {
    clause.presence = lunr.Query.presence.OPTIONAL
  }

  this.clauses.push(clause)

  return this
}

/**
 * A negated query is one in which every clause has a presence of
 * prohibited. These queries require some special processing to return
 * the expected results.
 *
 * @returns boolean
 */
lunr.Query.prototype.isNegated = function () {
  for (var i = 0; i < this.clauses.length; i++) {
    if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) {
      return false
    }
  }

  return true
}

/**
 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
 * to the list of clauses that make up this query.
 *
 * The term is used as is, i.e. no tokenization will be performed by this method. Instead conversion
 * to a token or token-like string should be done before calling this method.
 *
 * The term will be converted to a string by calling `toString`. Multiple terms can be passed as an
 * array, each term in the array will share the same options.
 *
 * @param {object|object[]} term - The term(s) to add to the query.
 * @param {object} [options] - Any additional properties to add to the query clause.
 * @returns {lunr.Query}
 * @see lunr.Query#clause
 * @see lunr.Query~Clause
 * @example <caption>adding a single term to a query</caption>
 * query.term("foo")
 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
 * query.term("foo", {
 *   fields: ["title"],
 *   boost: 10,
 *   wildcard: lunr.Query.wildcard.TRAILING
 * })
 * @example <caption>using lunr.tokenizer to convert a string to tokens before using them as terms</caption>
 * query.term(lunr.tokenizer("foo bar"))
 */
lunr.Query.prototype.term = function (term, options) {
  if (Array.isArray(term)) {
    term.forEach(function (t) { this.term(t, lunr.utils.clone(options)) }, this)
    return this
  }

  var clause = options || {}
  clause.term = term.toString()

  this.clause(clause)

  return this
}
lunr.QueryParseError = function (message, start, end) {
  this.name = "QueryParseError"
  this.message = message
  this.start = start
  this.end = end
}

lunr.QueryParseError.prototype = new Error
lunr.QueryLexer = function (str) {
  this.lexemes = []
  this.str = str
  this.length = str.length
  this.pos = 0
  this.start = 0
  this.escapeCharPositions = []
}

lunr.QueryLexer.prototype.run = function () {
  var state = lunr.QueryLexer.lexText

  while (state) {
    state = state(this)
  }
}

lunr.QueryLexer.prototype.sliceString = function () {
  var subSlices = [],
      sliceStart = this.start,
      sliceEnd = this.pos

  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    sliceEnd = this.escapeCharPositions[i]
    subSlices.push(this.str.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd + 1
  }

  subSlices.push(this.str.slice(sliceStart, this.pos))
  this.escapeCharPositions.length = 0

  return subSlices.join('')
}

lunr.QueryLexer.prototype.emit = function (type) {
  this.lexemes.push({
    type: type,
    str: this.sliceString(),
    start: this.start,
    end: this.pos
  })

  this.start = this.pos
}

lunr.QueryLexer.prototype.escapeCharacter = function () {
  this.escapeCharPositions.push(this.pos - 1)
  this.pos += 1
}

lunr.QueryLexer.prototype.next = function () {
  if (this.pos >= this.length) {
    return lunr.QueryLexer.EOS
  }

  var char = this.str.charAt(this.pos)
  this.pos += 1
  return char
}

lunr.QueryLexer.prototype.width = function () {
  return this.pos - this.start
}

lunr.QueryLexer.prototype.ignore = function () {
  if (this.start == this.pos) {
    this.pos += 1
  }

  this.start = this.pos
}

lunr.QueryLexer.prototype.backup = function () {
  this.pos -= 1
}

lunr.QueryLexer.prototype.acceptDigitRun = function () {
  var char, charCode

  do {
    char = this.next()
    charCode = char.charCodeAt(0)
  } while (charCode > 47 && charCode < 58)

  if (char != lunr.QueryLexer.EOS) {
    this.backup()
  }
}

lunr.QueryLexer.prototype.more = function () {
  return this.pos < this.length
}

lunr.QueryLexer.EOS = 'EOS'
lunr.QueryLexer.FIELD = 'FIELD'
lunr.QueryLexer.TERM = 'TERM'
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'
lunr.QueryLexer.BOOST = 'BOOST'
lunr.QueryLexer.PRESENCE = 'PRESENCE'

lunr.QueryLexer.lexField = function (lexer) {
  lexer.backup()
  lexer.emit(lunr.QueryLexer.FIELD)
  lexer.ignore()
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexTerm = function (lexer) {
  if (lexer.width() > 1) {
    lexer.backup()
    lexer.emit(lunr.QueryLexer.TERM)
  }

  lexer.ignore()

  if (lexer.more()) {
    return lunr.QueryLexer.lexText
  }
}

lunr.QueryLexer.lexEditDistance = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexBoost = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.BOOST)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexEOS = function (lexer) {
  if (lexer.width() > 0) {
    lexer.emit(lunr.QueryLexer.TERM)
  }
}

// This matches the separator used when tokenising fields
// within a document. These should match otherwise it is
// not possible to search for some tokens within a document.
//
// It is possible for the user to change the separator on the
// tokenizer so it _might_ clash with any other of the special
// characters already used within the search string, e.g. :.
//
// This means that it is possible to change the separator in
// such a way that makes some words unsearchable using a search
// string.
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

lunr.QueryLexer.lexText = function (lexer) {
  while (true) {
    var char = lexer.next()

    if (char == lunr.QueryLexer.EOS) {
      return lunr.QueryLexer.lexEOS
    }

    // Escape character is '\'
    if (char.charCodeAt(0) == 92) {
      lexer.escapeCharacter()
      continue
    }

    if (char == ":") {
      return lunr.QueryLexer.lexField
    }

    if (char == "~") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexEditDistance
    }

    if (char == "^") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexBoost
    }

    // "+" indicates term presence is required
    // checking for length to ensure that only
    // leading "+" are considered
    if (char == "+" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    // "-" indicates term presence is prohibited
    // checking for length to ensure that only
    // leading "-" are considered
    if (char == "-" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    if (char.match(lunr.QueryLexer.termSeparator)) {
      return lunr.QueryLexer.lexTerm
    }
  }
}

lunr.QueryParser = function (str, query) {
  this.lexer = new lunr.QueryLexer (str)
  this.query = query
  this.currentClause = {}
  this.lexemeIdx = 0
}

lunr.QueryParser.prototype.parse = function () {
  this.lexer.run()
  this.lexemes = this.lexer.lexemes

  var state = lunr.QueryParser.parseClause

  while (state) {
    state = state(this)
  }

  return this.query
}

lunr.QueryParser.prototype.peekLexeme = function () {
  return this.lexemes[this.lexemeIdx]
}

lunr.QueryParser.prototype.consumeLexeme = function () {
  var lexeme = this.peekLexeme()
  this.lexemeIdx += 1
  return lexeme
}

lunr.QueryParser.prototype.nextClause = function () {
  var completedClause = this.currentClause
  this.query.clause(completedClause)
  this.currentClause = {}
}

lunr.QueryParser.parseClause = function (parser) {
  var lexeme = parser.peekLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.type) {
    case lunr.QueryLexer.PRESENCE:
      return lunr.QueryParser.parsePresence
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expected either a field or a term, found " + lexeme.type

      if (lexeme.str.length >= 1) {
        errorMessage += " with value '" + lexeme.str + "'"
      }

      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }
}

lunr.QueryParser.parsePresence = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.str) {
    case "-":
      parser.currentClause.presence = lunr.Query.presence.PROHIBITED
      break
    case "+":
      parser.currentClause.presence = lunr.Query.presence.REQUIRED
      break
    default:
      var errorMessage = "unrecognised presence operator'" + lexeme.str + "'"
      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term or field, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseField = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields

    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.fields = [lexeme.str]

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseTerm = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  parser.currentClause.term = lexeme.str.toLowerCase()

  if (lexeme.str.indexOf("*") != -1) {
    parser.currentClause.usePipeline = false
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseEditDistance = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var editDistance = parseInt(lexeme.str, 10)

  if (isNaN(editDistance)) {
    var errorMessage = "edit distance must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.editDistance = editDistance

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseBoost = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var boost = parseInt(lexeme.str, 10)

  if (isNaN(boost)) {
    var errorMessage = "boost must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.boost = boost

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else {}
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();


/***/ }),

/***/ "./node_modules/mongoose/dist/browser.umd.js":
/*!***************************************************!*\
  !*** ./node_modules/mongoose/dist/browser.umd.js ***!
  \***************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=93)}([function(t,e,r){"use strict";e.arrayAtomicsSymbol=Symbol("mongoose#Array#_atomics"),e.arrayParentSymbol=Symbol("mongoose#Array#_parent"),e.arrayPathSymbol=Symbol("mongoose#Array#_path"),e.arraySchemaSymbol=Symbol("mongoose#Array#_schema"),e.documentArrayParent=Symbol("mongoose:documentArrayParent"),e.documentIsSelected=Symbol("mongoose#Document#isSelected"),e.documentIsModified=Symbol("mongoose#Document#isModified"),e.documentModifiedPaths=Symbol("mongoose#Document#modifiedPaths"),e.documentSchemaSymbol=Symbol("mongoose#Document#schema"),e.getSymbol=Symbol("mongoose#Document#get"),e.modelSymbol=Symbol("mongoose#Model"),e.objectIdSymbol=Symbol("mongoose#ObjectId"),e.populateModelSymbol=Symbol("mongoose.PopulateOptions#Model"),e.schemaTypeSymbol=Symbol("mongoose#schemaType"),e.sessionNewDocuments=Symbol("mongoose:ClientSession#newDocuments"),e.scopeSymbol=Symbol("mongoose#Document#scope"),e.validatorErrorSymbol=Symbol("mongoose:validatorError")},function(t,e,r){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=r(95),o=r(96),i=r(97);function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=u.prototype:(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,r){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return c(this,t,e,r)}function c(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);u.TYPED_ARRAY_SUPPORT?(t=e).__proto__=u.prototype:t=p(t,e);return t}(t,e,r,n):"string"==typeof e?function(t,e,r){"string"==typeof r&&""!==r||(r="utf8");if(!u.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|y(e,r),o=(t=a(t,n)).write(e,r);o!==n&&(t=t.slice(0,o));return t}(t,e,r):function(t,e){if(u.isBuffer(e)){var r=0|h(e.length);return 0===(t=a(t,r)).length||e.copy(t,0,0,r),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?a(t,0):p(t,e);if("Buffer"===e.type&&i(e.data))return p(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function l(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e){if(l(e),t=a(t,e<0?0:0|h(e)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function p(t,e){var r=e.length<0?0:0|h(e.length);t=a(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function h(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function y(t,e){if(u.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return L(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return U(t).length;default:if(n)return L(t).length;e=(""+e).toLowerCase(),n=!0}}function d(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return x(this,e,r);case"utf8":case"utf-8":return j(this,e,r);case"ascii":return $(this,e,r);case"latin1":case"binary":return P(this,e,r);case"base64":return E(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function _(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function m(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:v(t,e,r,n,o);if("number"==typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):v(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function v(t,e,r,n,o){var i,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,u/=2,r/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var l=-1;for(i=r;i<a;i++)if(c(t,i)===c(e,-1===l?0:i-l)){if(-1===l&&(l=i),i-l+1===u)return l*s}else-1!==l&&(i-=i-l),l=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){for(var f=!0,p=0;p<u;p++)if(c(t,i+p)!==c(e,p)){f=!1;break}if(f)return i}return-1}function g(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[r+s]=a}return s}function b(t,e,r,n){return V(L(e,t.length-r),t,r,n)}function w(t,e,r,n){return V(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function O(t,e,r,n){return w(t,e,r,n)}function S(t,e,r,n){return V(U(e),t,r,n)}function A(t,e,r,n){return V(function(t,e){for(var r,n,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function E(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function j(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,s,a,u,c=t[o],l=null,f=c>239?4:c>223?3:c>191?2:1;if(o+f<=r)switch(f){case 1:c<128&&(l=c);break;case 2:128==(192&(i=t[o+1]))&&(u=(31&c)<<6|63&i)>127&&(l=u);break;case 3:i=t[o+1],s=t[o+2],128==(192&i)&&128==(192&s)&&(u=(15&c)<<12|(63&i)<<6|63&s)>2047&&(u<55296||u>57343)&&(l=u);break;case 4:i=t[o+1],s=t[o+2],a=t[o+3],128==(192&i)&&128==(192&s)&&128==(192&a)&&(u=(15&c)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(l=u)}null===l?(l=65533,f=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|1023&l),n.push(l),o+=f}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0);return u.alloc(+t)},e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,r){return c(null,t,e,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,r){return function(t,e,r,n){return l(e),e<=0?a(t,e):void 0!==r?"string"==typeof n?a(t,e).fill(r,n):a(t,e).fill(r):a(t,e)}(null,t,e,r)},u.allocUnsafe=function(t){return f(null,t)},u.allocUnsafeSlow=function(t){return f(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=u.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var s=t[r];if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,o),o+=s.length}return n},u.byteLength=y,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)_(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)_(this,e,e+3),_(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)_(this,e,e+7),_(this,e+1,e+6),_(this,e+2,e+5),_(this,e+3,e+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?j(this,0,t):d.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,r,n,o){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),a=Math.min(i,s),c=this.slice(n,o),l=t.slice(e,r),f=0;f<a;++f)if(c[f]!==l[f]){i=c[f],s=l[f];break}return i<s?-1:s<i?1:0},u.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return m(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return m(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return g(this,t,e,r);case"utf8":case"utf-8":return b(this,t,e,r);case"ascii":return w(this,t,e,r);case"latin1":case"binary":return O(this,t,e,r);case"base64":return S(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function P(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function x(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=F(t[i]);return o}function N(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function T(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function k(t,e,r,n,o,i){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function C(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function R(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function D(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function B(t,e,r,n,i){return i||D(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function M(t,e,r,n,i){return i||D(t,0,r,8),o.write(t,e,r,n,52,8),r+8}u.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=u.prototype;else{var o=e-t;r=new u(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},u.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||T(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},u.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||T(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},u.prototype.readUInt8=function(t,e){return e||T(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||T(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||T(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||T(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||T(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||T(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||T(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},u.prototype.readInt8=function(t,e){return e||T(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||T(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){e||T(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return e||T(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||T(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||T(t,4,this.length),o.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||T(t,4,this.length),o.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||T(t,8,this.length),o.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||T(t,8,this.length),o.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||k(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},u.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||k(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},u.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):C(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):C(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):R(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):R(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);k(this,t,e,r,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);k(this,t,e,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):C(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):C(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):R(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):R(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,r){return B(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return B(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return M(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return M(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!u.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var s=u.isBuffer(t)?t:L(new u(t,n).toString()),a=s.length;for(i=0;i<r-e;++i)this[i+e]=s[i%a]}return this};var I=/[^+\/0-9A-Za-z-_]/g;function F(t){return t<16?"0"+t.toString(16):t.toString(16)}function L(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function U(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(I,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function V(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}}).call(this,r(11))},function(t,e,r){"use strict";(function(t){
/*!
 * Module dependencies.
 */
function n(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s,a=r(111),u=r(46),c=r(62),l=r(63).Buffer,f=r(20),p=r(13),h=r(114),y=r(28),d=r(21),_=r(66),m=r(65),v=r(29),g=r(24),b=r(47);function w(t){if(Array.isArray(t.populate)){var r=[];t.populate.forEach((function(t){if(/[\s]/.test(t.path)){var n=Object.assign({},t);n.path.split(" ").forEach((function(t){n.path=t,r.push(e.populate(n)[0])}))}else r.push(e.populate(t)[0])})),t.populate=e.populate(r)}else null!=t.populate&&"object"===i(t.populate)&&(t.populate=e.populate(t.populate));var o=[],s=t.path.split(" ");null!=t.options&&(t.options=e.clone(t.options));var a,u=n(s);try{for(u.s();!(a=u.n()).done;){var c=a.value;o.push(new h(Object.assign({},t,{path:c})))}}catch(t){u.e(t)}finally{u.f()}return o}
/*!
 * Return the value of `obj` at the given `path`.
 *
 * @param {String} path
 * @param {Object} obj
 */e.specialProperties=b,
/*!
 * Produces a collection name from model `name`. By default, just returns
 * the model name
 *
 * @param {String} name a model name
 * @param {Function} pluralize function that pluralizes the collection name
 * @return {String} a collection name
 * @api private
 */
e.toCollectionName=function(t,e){return"system.profile"===t||"system.indexes"===t?t:"function"==typeof e?e(t):t},
/*!
 * Determines if `a` and `b` are deep equal.
 *
 * Modified from node/lib/assert.js
 *
 * @param {any} a a value to compare to `b`
 * @param {any} b a value to compare to `a`
 * @return {Boolean}
 * @api private
 */
e.deepEqual=function t(r,n){if(r===n)return!0;if("object"!==i(r)&&"object"!==i(n))return r===n;if(r instanceof Date&&n instanceof Date)return r.getTime()===n.getTime();if(_(r,"ObjectID")&&_(n,"ObjectID")||_(r,"Decimal128")&&_(n,"Decimal128"))return r.toString()===n.toString();if(r instanceof RegExp&&n instanceof RegExp)return r.source===n.source&&r.ignoreCase===n.ignoreCase&&r.multiline===n.multiline&&r.global===n.global;if(null==r||null==n)return!1;if(r.prototype!==n.prototype)return!1;if(r instanceof Map&&n instanceof Map)return t(Array.from(r.keys()),Array.from(n.keys()))&&t(Array.from(r.values()),Array.from(n.values()));if(r instanceof Number&&n instanceof Number)return r.valueOf()===n.valueOf();if(l.isBuffer(r))return e.buffer.areEqual(r,n);if(Array.isArray(r)&&Array.isArray(n)){var o=r.length;if(o!==n.length)return!1;for(var s=0;s<o;++s)if(!t(r[s],n[s]))return!1;return!0}null!=r.$__?r=r._doc:v(r)&&(r=r.toObject()),null!=n.$__?n=n._doc:v(n)&&(n=n.toObject());var a=Object.keys(r),u=Object.keys(n),c=a.length;if(c!==u.length)return!1;a.sort(),u.sort();for(var f=c-1;f>=0;f--)if(a[f]!==u[f])return!1;for(var p=0,h=a;p<h.length;p++){var y=h[p];if(!t(r[y],n[y]))return!1}return!0},
/*!
 * Get the last element of an array
 */
e.last=function(t){if(t.length>0)return t[t.length-1]},e.clone=y,
/*!
 * ignore
 */
e.promiseOrCallback=g,
/*!
 * ignore
 */
e.omit=function(t,e){if(null==e)return Object.assign({},t);Array.isArray(e)||(e=[e]);var r,o=Object.assign({},t),i=n(e);try{for(i.s();!(r=i.n()).done;){delete o[r.value]}}catch(t){i.e(t)}finally{i.f()}return o},
/*!
 * Shallow copies defaults into options.
 *
 * @param {Object} defaults
 * @param {Object} options
 * @return {Object} the merged object
 * @api private
 */
e.options=function(t,e){var r,n=Object.keys(t),o=n.length;for(e=e||{};o--;)(r=n[o])in e||(e[r]=t[r]);return e},
/*!
 * Generates a random string
 *
 * @api private
 */
e.random=function(){return Math.random().toString().substr(3)},
/*!
 * Merges `from` into `to` without overwriting existing properties.
 *
 * @param {Object} to
 * @param {Object} from
 * @api private
 */
e.merge=function t(r,n,o,i){o=o||{};var s,a=Object.keys(n),u=0,c=a.length;i=i||"";for(var l=o.omitNested||{};u<c;)if(s=a[u++],!(o.omit&&o.omit[s]||l[i]||b.has(s)))if(null==r[s])r[s]=n[s];else if(e.isObject(n[s])){if(e.isObject(r[s])||(r[s]={}),null!=n[s]){if(o.isDiscriminatorSchemaMerge&&n[s].$isSingleNested&&r[s].$isMongooseDocumentArray||n[s].$isMongooseDocumentArray&&r[s].$isSingleNested)continue;if(n[s].instanceOfSchema){r[s].instanceOfSchema?r[s].add(n[s].clone()):r[s]=n[s].clone();continue}if(n[s]instanceof p){r[s]=new p(n[s]);continue}}t(r[s],n[s],o,i?i+"."+s:s)}else o.overwrite&&(r[s]=n[s])},
/*!
 * Applies toObject recursively.
 *
 * @param {Document|Array|Object} obj
 * @return {Object}
 * @api private
 */
e.toObject=function t(o){var i;if(s||(s=r(6)),null==o)return o;if(o instanceof s)return o.toObject();if(Array.isArray(o)){i=[];var a,u=n(o);try{for(u.s();!(a=u.n()).done;){var c=a.value;i.push(t(c))}}catch(t){u.e(t)}finally{u.f()}return i}if(e.isPOJO(o)){i={};for(var l=0,f=Object.keys(o);l<f.length;l++){var p=f[l];b.has(p)||(i[p]=t(o[p]))}return i}return o},e.isObject=d,
/*!
 * Determines if `arg` is a plain old JavaScript object (POJO). Specifically,
 * `arg` must be an object but not an instance of any special class, like String,
 * ObjectId, etc.
 *
 * `Object.getPrototypeOf()` is part of ES5: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
 *
 * @param {Object|Array|String|Function|RegExp|any} arg
 * @api private
 * @return {Boolean}
 */
e.isPOJO=function(t){if(null==t||"object"!==i(t))return!1;var e=Object.getPrototypeOf(t);return!e||"Object"===e.constructor.name},
/*!
 * Determines if `obj` is a built-in object like an array, date, boolean,
 * etc.
 */
e.isNativeObject=function(t){return Array.isArray(t)||t instanceof Date||t instanceof Boolean||t instanceof Number||t instanceof String},
/*!
 * Determines if `val` is an object that has no own keys
 */
e.isEmptyObject=function(t){return null!=t&&"object"===i(t)&&0===Object.keys(t).length},
/*!
 * Search if `obj` or any POJOs nested underneath `obj` has a property named
 * `key`
 */
e.hasKey=function(t,r){for(var n=0,o=Object.keys(t);n<o.length;n++){var i=o[n];if(i===r)return!0;if(e.isPOJO(t[i])&&e.hasKey(t[i],r))return!0}return!1},
/*!
 * A faster Array.prototype.slice.call(arguments) alternative
 * @api private
 */
e.args=c,
/*!
 * process.nextTick helper.
 *
 * Wraps `callback` in a try/catch + nextTick.
 *
 * node-mongodb-native has a habit of state corruption when an error is immediately thrown from within a collection callback.
 *
 * @param {Function} callback
 * @api private
 */
e.tick=function(e){if("function"==typeof e)return function(){try{e.apply(this,arguments)}catch(e){t.nextTick((function(){throw e}))}}},
/*!
 * Returns true if `v` is an object that can be serialized as a primitive in
 * MongoDB
 */
e.isMongooseType=function(t){return t instanceof p||t instanceof f||t instanceof l},e.isMongooseObject=v,
/*!
 * Converts `expires` options of index objects to `expiresAfterSeconds` options for MongoDB.
 *
 * @param {Object} object
 * @api private
 */
e.expires=function(t){var e;t&&"Object"===t.constructor.name&&("expires"in t&&(e="string"!=typeof t.expires?t.expires:Math.round(a(t.expires)/1e3),t.expireAfterSeconds=e,delete t.expires))},
/*!
 * populate helper
 */
e.populate=function(t,r,n,o,s,a,u,c){var l=null;if(1===arguments.length){if(t instanceof h)return[t];if(Array.isArray(t)){var f=p(t);return f.map((function(t){return e.populate(t)[0]}))}l=e.isObject(t)?Object.assign({},t):{path:t}}else l="object"===i(n)?{path:t,select:r,match:n,options:o}:{path:t,select:r,model:n,match:o,options:s,populate:a,justOne:u,count:c};if("string"!=typeof l.path)throw new TypeError("utils.populate: invalid path. Expected string. Got typeof `"+i(t)+"`");return w(l);function p(t){var e=[];return t.forEach((function(t){/[\s]/.test(t.path)?t.path.split(" ").forEach((function(r){var n=Object.assign({},t);n.path=r,e.push(n)})):e.push(t)})),e}},e.getValue=function(t,e,r){return u.get(t,e,"_doc",r)},
/*!
 * Sets the value of `obj` at the given `path`.
 *
 * @param {String} path
 * @param {Anything} val
 * @param {Object} obj
 */
e.setValue=function(t,e,r,n,o){u.set(t,e,r,"_doc",n,o)},
/*!
 * Returns an array of values from object `o`.
 *
 * @param {Object} o
 * @return {Array}
 * @private
 */
e.object={},e.object.vals=function(t){for(var e=Object.keys(t),r=e.length,n=[];r--;)n.push(t[e[r]]);return n},
/*!
 * @see exports.options
 */
e.object.shallowCopy=e.options;
/*!
 * Safer helper for hasOwnProperty checks
 *
 * @param {Object} obj
 * @param {String} prop
 */
var O=Object.prototype.hasOwnProperty;e.object.hasOwnProperty=function(t,e){return O.call(t,e)},
/*!
 * Determine if `val` is null or undefined
 *
 * @return {Boolean}
 */
e.isNullOrUndefined=function(t){return null==t},
/*!
 * ignore
 */
e.array={},
/*!
 * Flattens an array.
 *
 * [ 1, [ 2, 3, [4] ]] -> [1,2,3,4]
 *
 * @param {Array} arr
 * @param {Function} [filter] If passed, will be invoked with each item in the array. If `filter` returns a falsy value, the item will not be included in the results.
 * @return {Array}
 * @private
 */
e.array.flatten=function t(e,r,n){return n||(n=[]),e.forEach((function(e){Array.isArray(e)?t(e,r,n):r&&!r(e)||n.push(e)})),n};
/*!
 * ignore
 */
var S=Object.prototype.hasOwnProperty;e.hasUserDefinedProperty=function(t,r){if(null==t)return!1;if(Array.isArray(r)){var o,s=n(r);try{for(s.s();!(o=s.n()).done;){var a=o.value;if(e.hasUserDefinedProperty(t,a))return!0}}catch(t){s.e(t)}finally{s.f()}return!1}if(S.call(t,r))return!0;if("object"===i(t)&&r in t){var u=t[r];return u!==Object.prototype[r]&&u!==Array.prototype[r]}return!1};
/*!
 * ignore
 */
var A=Math.pow(2,32)-1;e.isArrayIndex=function(t){return"number"==typeof t?t>=0&&t<=A:"string"==typeof t&&(!!/^\d+$/.test(t)&&((t=+t)>=0&&t<=A))},
/*!
 * Removes duplicate values from an array
 *
 * [1, 2, 3, 3, 5] => [1, 2, 3, 5]
 * [ ObjectId("550988ba0c19d57f697dc45e"), ObjectId("550988ba0c19d57f697dc45e") ]
 *    => [ObjectId("550988ba0c19d57f697dc45e")]
 *
 * @param {Array} arr
 * @return {Array}
 * @private
 */
e.array.unique=function(t){var e,r={},o={},i=[],s=n(t);try{for(s.s();!(e=s.n()).done;){var a=e.value;if("number"==typeof a||"string"==typeof a||null==a){if(r[a])continue;i.push(a),r[a]=!0}else if(a instanceof p){if(o[a.toString()])continue;i.push(a),o[a.toString()]=!0}else i.push(a)}}catch(t){s.e(t)}finally{s.f()}return i},
/*!
 * Determines if two buffers are equal.
 *
 * @param {Buffer} a
 * @param {Object} b
 */
e.buffer={},e.buffer.areEqual=function(t,e){if(!l.isBuffer(t))return!1;if(!l.isBuffer(e))return!1;if(t.length!==e.length)return!1;for(var r=0,n=t.length;r<n;++r)if(t[r]!==e[r])return!1;return!0},e.getFunctionName=m,
/*!
 * Decorate buffers
 */
e.decorate=function(t,e){for(var r in e)b.has(r)||(t[r]=e[r])},e.mergeClone=function(t,r){v(r)&&(r=r.toObject({transform:!1,virtuals:!1,depopulate:!0,getters:!1,flattenDecimals:!1}));for(var n,o=Object.keys(r),i=o.length,s=0;s<i;)if(n=o[s++],!b.has(n))if(void 0===t[n])t[n]=e.clone(r[n],{transform:!1,virtuals:!1,depopulate:!0,getters:!1,flattenDecimals:!1});else{var a=r[n];if(null==a||!a.valueOf||a instanceof Date||(a=a.valueOf()),e.isObject(a)){var u=a;v(a)&&!a.isMongooseBuffer&&(u=u.toObject({transform:!1,virtuals:!1,depopulate:!0,getters:!1,flattenDecimals:!1})),a.isMongooseBuffer&&(u=l.from(u)),e.mergeClone(t[n],u)}else t[n]=e.clone(a,{flattenDecimals:!1})}},e.each=function(t,e){var r,o=n(t);try{for(o.s();!(r=o.n()).done;){e(r.value)}}catch(t){o.e(t)}finally{o.f()}},
/*!
 * ignore
 */
e.getOption=function(t){var e,r=Array.prototype.slice.call(arguments,1),o=n(r);try{for(o.s();!(e=o.n()).done;){var i=e.value;if(null!=i[t])return i[t]}}catch(t){o.e(t)}finally{o.f()}return null},
/*!
 * ignore
 */
e.noop=function(){}}).call(this,r(8))},function(t,e,r){"use strict";
/*!
 * Simplified lodash.get to work around the annoying null quirk. See:
 * https://github.com/lodash/lodash/issues/3659
 */function n(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){return null==t?t:t instanceof Map?t.get(e):t[e]}t.exports=function(t,e,r){var o,s=e.split("."),a=e,u=t,c=n(s);try{for(c.s();!(o=c.n()).done;){var l=o.value;if(null==u)return r;if(null!=u[a])return u[a];u=i(u,l),a=a.substr(l.length+1)}}catch(t){c.e(t)}finally{c.f()}return null==u?r:u}},function(t,e,r){(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},i=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(u(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,o=n.length,s=String(t).replace(i,(function(t){if("%%"===t)return"%";if(r>=o)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}})),a=n[r];r<o;a=n[++r])_(a)||!w(a)?s+=" "+a:s+=" "+u(a);return s},e.deprecate=function(r,n){if(void 0!==t&&!0===t.noDeprecation)return r;if(void 0===t)return function(){return e.deprecate(r,n).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),o=!0}return r.apply(this,arguments)}};var s,a={};function u(t,r){var n={seen:[],stylize:l};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),d(r)?n.showHidden=r:r&&e._extend(n,r),g(n.showHidden)&&(n.showHidden=!1),g(n.depth)&&(n.depth=2),g(n.colors)&&(n.colors=!1),g(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),f(n,t,n.depth)}function c(t,e){var r=u.styles[e];return r?"["+u.colors[r][0]+"m"+t+"["+u.colors[r][1]+"m":t}function l(t,e){return t}function f(t,r,n){if(t.customInspect&&r&&A(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,t);return v(o)||(o=f(t,o,n)),o}var i=function(t,e){if(g(e))return t.stylize("undefined","undefined");if(v(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}if(m(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(_(e))return t.stylize("null","null")}(t,r);if(i)return i;var s=Object.keys(r),a=function(t){var e={};return t.forEach((function(t,r){e[t]=!0})),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(r)),S(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return p(r);if(0===s.length){if(A(r)){var u=r.name?": "+r.name:"";return t.stylize("[Function"+u+"]","special")}if(b(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(O(r))return t.stylize(Date.prototype.toString.call(r),"date");if(S(r))return p(r)}var c,l="",w=!1,E=["{","}"];(y(r)&&(w=!0,E=["[","]"]),A(r))&&(l=" [Function"+(r.name?": "+r.name:"")+"]");return b(r)&&(l=" "+RegExp.prototype.toString.call(r)),O(r)&&(l=" "+Date.prototype.toUTCString.call(r)),S(r)&&(l=" "+p(r)),0!==s.length||w&&0!=r.length?n<0?b(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),c=w?function(t,e,r,n,o){for(var i=[],s=0,a=e.length;s<a;++s)x(e,String(s))?i.push(h(t,e,r,n,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(h(t,e,r,n,o,!0))})),i}(t,r,n,a,s):s.map((function(e){return h(t,r,n,a,e,w)})),t.seen.pop(),function(t,e,r){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1];return r[0]+e+" "+t.join(", ")+" "+r[1]}(c,l,E)):E[0]+l+E[1]}function p(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,r,n,o,i){var s,a,u;if((u=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(a=t.stylize("[Setter]","special")),x(n,o)||(s="["+o+"]"),a||(t.seen.indexOf(u.value)<0?(a=_(r)?f(t,u.value,null):f(t,u.value,r-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n")):a=t.stylize("[Circular]","special")),g(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function y(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function _(t){return null===t}function m(t){return"number"==typeof t}function v(t){return"string"==typeof t}function g(t){return void 0===t}function b(t){return w(t)&&"[object RegExp]"===E(t)}function w(t){return"object"===n(t)&&null!==t}function O(t){return w(t)&&"[object Date]"===E(t)}function S(t){return w(t)&&("[object Error]"===E(t)||t instanceof Error)}function A(t){return"function"==typeof t}function E(t){return Object.prototype.toString.call(t)}function j(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(g(s)&&(s=t.env.NODE_DEBUG||""),r=r.toUpperCase(),!a[r])if(new RegExp("\\b"+r+"\\b","i").test(s)){var n=t.pid;a[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else a[r]=function(){};return a[r]},e.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=y,e.isBoolean=d,e.isNull=_,e.isNullOrUndefined=function(t){return null==t},e.isNumber=m,e.isString=v,e.isSymbol=function(t){return"symbol"===n(t)},e.isUndefined=g,e.isRegExp=b,e.isObject=w,e.isDate=O,e.isError=S,e.isFunction=A,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"===n(t)||void 0===t},e.isBuffer=r(100);var $=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function P(){var t=new Date,e=[j(t.getHours()),j(t.getMinutes()),j(t.getSeconds())].join(":");return[t.getDate(),$[t.getMonth()],e].join(" ")}function x(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",P(),e.format.apply(e,arguments))},e.inherits=r(101),e._extend=function(t,e){if(!e||!w(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t};var N="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function T(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(N&&t[N]){var e;if("function"!=typeof(e=t[N]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,N,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise((function(t,n){e=t,r=n})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,n){t?r(t):e(n)}));try{t.apply(this,o)}catch(t){r(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),N&&Object.defineProperty(e,N,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,o(t))},e.promisify.custom=N,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var o=r.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,s=function(){return o.apply(i,arguments)};e.apply(this,r).then((function(e){t.nextTick(s,null,e)}),(function(e){t.nextTick(T,e,s)}))}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,o(e)),r}}).call(this,r(8))},function(t,e,r){"use strict";var n=r(14);
/*!
 * Module exports.
 */t.exports=n,n.messages=r(127),n.Messages=n.messages,n.DocumentNotFoundError=r(128),n.CastError=r(12),n.ValidationError=r(31),n.ValidatorError=r(71),n.VersionError=r(129),n.ParallelSaveError=r(130),n.OverwriteModelError=r(131),n.MissingSchemaError=r(132),n.DivergentArrayError=r(133),n.StrictModeError=r(32)},function(t,e,r){"use strict";(function(e,n){
/*!
 * Module dependencies.
 */
function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u,c,l,f=r(19).EventEmitter,p=r(109),h=r(5),y=r(25),d=r(73),_=r(135),m=r(136),v=r(52),g=r(32),b=r(31),w=r(71),O=r(53),S=r(24),A=r(84),E=r(57).compile,j=r(57).defineKey,$=r(172).flatten,P=r(3),x=r(173),N=r(88),T=r(174),k=r(58),C=r(175),R=r(4).inspect,D=r(17).internalToObjectOptions,B=r(46),M=r(176),I=r(2),F=r(178),L=I.clone,U=I.deepEqual,V=I.isMongooseObject,q=Symbol("mongoose.Array#atomicsBackup"),W=r(0).arrayAtomicsSymbol,H=r(0).documentArrayParent,Y=r(0).documentIsModified,K=r(0).documentModifiedPaths,z=r(0).documentSchemaSymbol,Q=r(0).getSymbol,J=r(0).populateModelSymbol,G=r(0).scopeSymbol,X=I.specialProperties;function Z(t,e,r,n){var o=this;"object"===a(r)&&null!=r&&(r=(n=r).skipId),n=Object.assign({},n);var s=P(n,"defaults",!0);if(n.defaults=s,null==this.schema){var u=I.isObject(e)&&!e.instanceOfSchema?new v(e):e;this.$__setSchema(u),e=r,r=n,n=arguments[4]||{}}if(this.$__=new p,this.$__.emitter=new f,this.isNew=!("isNew"in n)||n.isNew,this.errors=void 0,this.$__.$options=n||{},this.$locals={},this.$op=null,null!=t&&"object"!==a(t))throw new _(t,"obj","Document");var c=this.schema;"boolean"==typeof e||"throw"===e?(this.$__.strictMode=e,e=void 0):(this.$__.strictMode=c.options.strict,this.$__.selected=e);var l,h=c.requiredPaths(!0),y=i(h);try{for(y.s();!(l=y.n()).done;){var d=l.value;this.$__.activePaths.require(d)}}catch(t){y.e(t)}finally{y.f()}this.$__.emitter.setMaxListeners(0);var m=null;I.isPOJO(e)&&(m=C(e));var g=!1===m&&e?et(e):{};if(null==this._doc&&(this.$__buildDoc(t,e,r,m,g,!1),s&&rt(this,e,r,m,g,!0,{isNew:this.isNew})),t&&(this.$__original_set?this.$__original_set(t,void 0,!0):this.$set(t,void 0,!0),t instanceof Z&&(this.isNew=t.isNew)),n.willInit&&s?f.prototype.once.call(this,"init",(function(){rt(o,e,r,m,g,!1,n.skipDefaults,o.isNew)})):s&&rt(this,e,r,m,g,!1,n.skipDefaults,this.isNew),this.$__._id=this._id,!this.$__.strictMode&&t){var b=this,w=Object.keys(this._doc);w.forEach((function(t){t in c.tree||j(t,null,b)}))}st(this)}
/*!
 * Document exposes the NodeJS event emitter API, so you can use
 * `on`, `once`, etc.
 */for(var tt in I.each(["on","once","emit","listeners","removeListener","setMaxListeners","removeAllListeners","addListener"],(function(t){Z.prototype[t]=function(){return this.$__.emitter[t].apply(this.$__.emitter,arguments)}})),Z.prototype.constructor=Z,f.prototype)Z[tt]=f.prototype[tt];
/*!
 * ignore
 */
function et(t){for(var e={},r=0,n=Object.keys(t);r<n.length;r++){var o,s=[],a=i(n[r].split("."));try{for(a.s();!(o=a.n()).done;){var u=o.value;s.push(u),e[s.join(".")]=1}}catch(t){a.e(t)}finally{a.f()}}return e}
/*!
 * ignore
 */function rt(t,e,r,n,o,i,s){for(var a=Object.keys(t.schema.paths),u=a.length,c=0;c<u;++c){var l=void 0,f="",p=a[c];if("_id"!==p||!r)for(var h=t.schema.paths[p],y=-1===p.indexOf(".")?[p]:p.split("."),d=y.length,_=!1,m=t._doc,v=0;v<d&&null!=m;++v){var g=y[v];if(f+=(f.length?".":"")+g,!0===n){if(f in e)break}else if(!1===n&&e&&!_)if(f in e)_=!0;else if(!o[f])break;if(v===d-1){if(void 0!==m[g])break;if("function"==typeof h.defaultValue){if(!h.defaultValue.$runBeforeSetters&&i)break;if(h.defaultValue.$runBeforeSetters&&!i)break}else if(!i)continue;if(s&&s[f])break;if(e&&null!==n){if(!0===n){if(p in e)continue;try{l=h.getDefault(t,!1)}catch(e){t.invalidate(p,e);break}void 0!==l&&(m[g]=l,t.$__.activePaths.default(p))}else if(_){try{l=h.getDefault(t,!1)}catch(e){t.invalidate(p,e);break}void 0!==l&&(m[g]=l,t.$__.activePaths.default(p))}}else{try{l=h.getDefault(t,!1)}catch(e){t.invalidate(p,e);break}void 0!==l&&(m[g]=l,t.$__.activePaths.default(p))}}else m=m[g]}}}function nt(t){if(null==t)return!0;if("object"!==a(t)||Array.isArray(t))return!1;for(var e=0,r=Object.keys(t);e<r.length;e++){if(!nt(t[r[e]]))return!1}return!0}
/*!
 * ignore
 */
function ot(t){var e={};!
/*!
 * ignore
 */
function(t){Object.keys(t.$__.activePaths.states.require).forEach((function(e){var r=t.schema.path(e);null!=r&&"function"==typeof r.originalRequiredValue&&(t.$__.cachedRequired[e]=r.originalRequiredValue.call(t,t))}))}(t);var r=new Set(Object.keys(t.$__.activePaths.states.require).filter((function(e){return!(!t.$__isSelected(e)&&!t.isModified(e))&&(!(e in t.$__.cachedRequired)||t.$__.cachedRequired[e])})));function n(t){r.add(t)}Object.keys(t.$__.activePaths.states.init).forEach(n),Object.keys(t.$__.activePaths.states.modify).forEach(n),Object.keys(t.$__.activePaths.states.default).forEach(n);var o,s=t.$__getAllSubdocs(),a=t.modifiedPaths(),u=i(s);try{for(u.s();!(o=u.n()).done;){var c=o.value;if(c.$basePath){var l,f=i(r);try{for(f.s();!(l=f.n()).done;){var p=l.value;(null===p||p.startsWith(c.$basePath+"."))&&r.delete(p)}}catch(t){f.e(t)}finally{f.f()}!t.isModified(c.$basePath,a)||t.isDirectModified(c.$basePath)||t.$isDefault(c.$basePath)||(r.add(c.$basePath),e[c.$basePath]=!0)}}}catch(t){u.e(t)}finally{u.f()}var h,y=i(r);try{for(y.s();!(h=y.n()).done;){var d=h.value,_=t.schema.path(d);if(_&&_.$isMongooseArray&&(!_.$isMongooseDocumentArray||P(_,"schemaOptions.required")))m(t.$__getValue(d),r,d)}}catch(t){y.e(t)}finally{y.f()}function m(t,e,r){if(null!=t)for(var n=t.length,o=0;o<n;++o)Array.isArray(t[o])?m(t[o],e,r+"."+o):e.add(r+"."+o)}var v,g={skipArrays:!0},b=i(r);try{for(b.s();!(v=b.n()).done;){var w=v.value;if(t.schema.nested[w]){var O=t.$__getValue(w);V(O)&&(O=O.toObject({transform:!1}));var S=$(O,w,g,t.schema);Object.keys(S).forEach(n)}}}catch(t){b.e(t)}finally{b.f()}var A,E=i(r);try{for(E.s();!(A=E.n()).done;){var j=A.value;if(t.schema.singleNestedPaths.hasOwnProperty(j))r.delete(j);else{var x=t.schema.path(j);if(x&&x.$isSchemaMap){var N=t.$__getValue(j);if(null!=N){var T,k=i(N.keys());try{for(k.s();!(T=k.n()).done;){var C=T.value;r.add(j+"."+C)}}catch(t){k.e(t)}finally{k.f()}}}}}}catch(t){E.e(t)}finally{E.f()}return[r=Array.from(r),e]}
/*!
 * ignore
 */
/*!
 * ignore
 */
function it(t,e){var r,n=new Set(e),o=new Map([]),s=i(e);try{for(s.s();!(r=s.n()).done;){var a=r.value;if(-1!==a.indexOf("."))for(var u=a.split("."),c=u[0],l=1;l<u.length;++l)o.set(c,a),c=c+"."+u[l]}}catch(t){s.e(t)}finally{s.f()}var f,p=[],h=i(t);try{for(h.s();!(f=h.n()).done;){var y=f.value;n.has(y)?p.push(y):o.has(y)&&p.push(o.get(y))}}catch(t){h.e(t)}finally{h.f()}return p}
/*!
 * Runs queued functions
 */
function st(t){var e=t.schema&&t.schema.callQueue;if(e.length){var r,n=i(e);try{for(n.s();!(r=n.n()).done;){var o=r.value;"pre"!==o[0]&&"post"!==o[0]&&"on"!==o[0]&&t[o[0]].apply(t,o[1])}}catch(t){n.e(t)}finally{n.f()}}}
/*!
 * ignore
 */
/*!
 * Applies virtuals properties to `json`.
 */
function at(t,e,r,n){var o,i,s,a=t.schema,u=Object.keys(a.virtuals),c=u.length,l=c,f=t._doc,p=P(n,"aliases",!0);if(!f)return e;for(r=r||{},c=0;c<l;++c)if(o=u[c],p||!a.aliases.hasOwnProperty(o)){if(i=o,null!=r.path){if(!o.startsWith(r.path+"."))continue;i=o.substr(r.path.length+1)}var h=i.split(".");if(void 0!==(s=L(t.get(o),r))){var y=h.length;f=e;for(var d=0;d<y-1;++d)f[h[d]]=f[h[d]]||{},f=f[h[d]];f[h[y-1]]=s}}return e}
/*!
 * Applies virtuals properties to `json`.
 *
 * @param {Document} self
 * @param {Object} json
 * @return {Object} `json`
 */function ut(t,e){if(F(e))throw new Error("`transform` function must be synchronous, but the transform on path `"+t+"` returned a promise.")}
/*!
 * ignore
 */Z.prototype.schema,Object.defineProperty(Z.prototype,"$locals",{configurable:!1,enumerable:!1,writable:!0}),Z.prototype.isNew,Z.prototype.id,Z.prototype.errors,Z.prototype.$op,Z.prototype.$__buildDoc=function(t,e,r,n,o){for(var i={},s=Object.keys(this.schema.paths).filter((function(t){return!t.includes("$*")})),a=s.length,u=0;u<a;++u){var c=s[u];if("_id"===c){if(r)continue;if(t&&"_id"in t)continue}for(var l=c.split("."),f=l.length,p=f-1,h="",y=i,d=!1,_=0;_<f;++_){var m=l[_];if(h+=(h.length?".":"")+m,!0===n){if(h in e)break}else if(!1===n&&e&&!d)if(h in e)d=!0;else if(!o[h])break;_<p&&(y=y[m]||(y[m]={}))}}this._doc=i},
/*!
 * Converts to POJO when you use the document for querying
 */
Z.prototype.toBSON=function(){return this.toObject(D)},Z.prototype.init=function(t,e,r){return"function"==typeof e&&(r=e,e=null),this.$__init(t,e),r&&r(null,this),this},
/*!
 * ignore
 */
Z.prototype.$__init=function(t,e){if(this.isNew=!1,this.$init=!0,e=e||{},null!=t._id&&e.populated&&e.populated.length){var r,n=String(t._id),o=i(e.populated);try{for(o.s();!(r=o.n()).done;){var s=r.value;if(s.isVirtual?this.populated(s.path,I.getValue(s.path,t),s):this.populated(s.path,s._docs[n],s),null!=s._childDocs){var a,u=i(s._childDocs);try{for(u.s();!(a=u.n()).done;){var c=a.value;null!=c&&null!=c.$__&&(c.$__.parent=this)}}catch(t){u.e(t)}finally{u.f()}}}}catch(t){o.e(t)}finally{o.f()}}
/*!
 * Init helper.
 *
 * @param {Object} self document instance
 * @param {Object} obj raw mongodb doc
 * @param {Object} doc object we are initializing
 * @api private
 */
return function t(e,r,n,o,i){i=i||"";var s,a,u,c=Object.keys(r),l=c.length,f=0;for(;f<l;)p(f++);function p(l){if(u=c[l],a=i+u,s=e.schema.path(a),!e.schema.$isRootDiscriminator||e.$__isSelected(a))if(!s&&I.isPOJO(r[u]))n[u]||(n[u]={}),t(e,r[u],n[u],o,a+".");else if(s){if(null===r[u])n[u]=s._castNullish(null);else if(void 0!==r[u]){var f=(r[u].$__||{}).wasPopulated||null;if(s&&!f)try{n[u]=s.cast(r[u],e,!0)}catch(t){e.invalidate(t.path,new w({path:t.path,message:t.message,type:"cast",value:t.value,reason:t}))}else n[u]=r[u]}e.isModified(a)||e.$__.activePaths.init(a)}else n[u]=r[u]}}(this,t,this._doc,e),
/*!
 * If populating a path within a document array, make sure each
 * subdoc within the array knows its subpaths are populated.
 *
 * ####Example:
 *     const doc = await Article.findOne().populate('comments.author');
 *     doc.comments[0].populated('author'); // Should be set
 */
function(t,e){if(null==t._id||null==e||0===e.length)return;var r,n=String(t._id),o=i(e);try{for(o.s();!(r=o.n()).done;){var s=r.value;if(!s.isVirtual)for(var a=s.path.split("."),u=0;u<a.length-1;++u){var c=a.slice(0,u+1).join("."),l=a.slice(u+1).join("."),f=t.get(c);if(null!=f&&f.isMongooseDocumentArray){for(var p=0;p<f.length;++p)f[p].populated(l,null==s._docs[n]?[]:s._docs[n][p],s);break}}}}catch(t){o.e(t)}finally{o.f()}}(this,e.populated),this.emit("init",this),this.constructor.emit("init",this),this.$__._id=this._id,this},Z.prototype.update=function(){var t=I.args(arguments);t.unshift({_id:this._id});var e=this.constructor.update.apply(this.constructor,t);return null!=this.$session()&&("session"in e.options||(e.options.session=this.$session())),e},Z.prototype.updateOne=function(t,e,r){var n=this,o=this.constructor.updateOne({_id:this._id},t,e);return o._pre((function(t){n.constructor._middleware.execPre("updateOne",n,[n],t)})),o._post((function(t){n.constructor._middleware.execPost("updateOne",n,[n],{},t)})),null!=this.$session()&&("session"in o.options||(o.options.session=this.$session())),null!=r?o.exec(r):o},Z.prototype.replaceOne=function(){var t=I.args(arguments);return t.unshift({_id:this._id}),this.constructor.replaceOne.apply(this.constructor,t)},Z.prototype.$session=function(t){if(0===arguments.length)return this.$__.session;if(this.$__.session=t,!this.ownerDocument){var e,r=this.$__getAllSubdocs(),n=i(r);try{for(n.s();!(e=n.n()).done;){var o=e.value;o.$session(t)}}catch(t){n.e(t)}finally{n.f()}}return t},Z.prototype.overwrite=function(t){for(var e=0,r=Array.from(new Set(Object.keys(this._doc).concat(Object.keys(t))));e<r.length;e++){var n=r[e];"_id"!==n&&(this.schema.options.versionKey&&n===this.schema.options.versionKey||this.schema.options.discriminatorKey&&n===this.schema.options.discriminatorKey||this.$set(n,t[n]))}return this},Z.prototype.$set=function(t,e,r,n){var s=this;I.isPOJO(r)&&(n=r,r=void 0);var u,c,l,f,p=(n=n||{}).merge,_=r&&!0!==r,m=!0===r,v=0,b="strict"in n?n.strict:this.$__.strictMode;if(_&&((this.$__.adhocPaths||(this.$__.adhocPaths={}))[t]=this.schema.interpretAsType(t,r,this.schema.options)),null==t){var w=t;t=e,e=w}else{if("string"!=typeof t){if(t instanceof Z&&(t=t.$__isNested?t.toObject():t._doc),null==t){var O=t;t=e,e=O}f=e?e+".":"";var S=(u=Object.keys(t)).length,E=P(n,"_skipMinimizeTopLevel",!1);if(0===S&&E)return delete n._skipMinimizeTopLevel,e&&this.$set(e,{}),this;for(var j=0;j<S;++j){var $=f+(l=u[j]);if(c=this.schema.pathType($),!0!==r||f||null==t[l]||"nested"!==c||null==this._doc[l]||0!==Object.keys(this._doc[l]).length||(delete this._doc[l],n=Object.assign({},n,{_skipMinimizeTopLevel:!0})),!("object"!==a(t[l])||I.isNativeObject(t[l])||I.isMongooseType(t[l])||null==t[l]||"virtual"===c||"real"===c||"adhocOrUndefined"===c||this.$__path($)instanceof y||this.schema.paths[$]&&this.schema.paths[$].options&&this.schema.paths[$].options.ref))this.$__.$setCalled.add(f+l),this.$set(t[l],f+l,m,n);else if(b){if(m&&void 0===t[l]&&void 0!==this.get($))continue;if("adhocOrUndefined"===c&&(c=x(this,$,{typeOnly:!0})),"real"===c||"virtual"===c){var T=t[l];this.schema.paths[$]&&this.schema.paths[$].$isSingleNested&&t[l]instanceof Z&&(T=T.toObject({virtuals:!1,transform:!1})),this.$set(f+l,T,m,n)}else if("nested"===c&&t[l]instanceof Z)this.$set(f+l,t[l].toObject({transform:!1}),m,n);else if("throw"===b)throw"nested"===c?new d(l,t[l]):new g(l)}else void 0!==t[l]&&this.$set(f+l,t[l],m,n)}return this}this.$__.$setCalled.add(t)}var k,C=this.schema.pathType(t);if("adhocOrUndefined"===C&&(C=x(this,t,{typeOnly:!0})),e=N(e),"nested"===C&&e){if("object"===a(e)&&null!=e){var R=null!=this.$__.savedState&&this.$__.savedState.hasOwnProperty(t);if(null!=this.$__.savedState&&!this.isNew&&!this.$__.savedState.hasOwnProperty(t)){var D=this.$__getValue(t);this.$__.savedState[t]=D;for(var M=0,F=Object.keys(D||{});M<F.length;M++){var L=F[M];this.$__.savedState[t+"."+L]=D[L]}}if(p)return this.$set(e,t,m);this.$__setValue(t,null),A(this,t);var U=Object.keys(e);this.$__setValue(t,{});for(var V=0,q=U;V<q.length;V++){var W=q[V];this.$set(t+"."+W,e[W],m)}return R&&I.deepEqual(this.$__.savedState[t],e)?this.unmarkModified(t):this.markModified(t),A(this,t,{skipDocArrays:!0}),this}return this.invalidate(t,new h.CastError("Object",e,t)),this}var H=-1===t.indexOf(".")?[t]:t.split(".");if("string"==typeof this.schema.aliases[H[0]]&&(H[0]=this.schema.aliases[H[0]]),"adhocOrUndefined"===C&&b){var Y;for(v=0;v<H.length;++v){var K=H.slice(0,v+1).join(".");if(v+1<H.length&&"virtual"===this.schema.pathType(K))return B.set(t,e,this),this;if(null!=(k=this.schema.path(K))&&k instanceof y){Y=!0;break}}if(null==k&&(k=x(this,t)),!Y&&!k){if("throw"===b)throw new g(t);return this}}else{if("virtual"===C)return(k=this.schema.virtualpath(t)).applySetters(e,this),this;k=this.$__path(t)}var z,Q=this._doc,G="";for(v=0;v<H.length-1;++v)Q=Q[H[v]],G+=(G.length>0?".":"")+H[v],Q||(this.$set(G,{}),this.$__isSelected(G)||this.unmarkModified(G),Q=this.$__getValue(G));if(H.length<=1)z=t;else{for(v=0;v<H.length;++v){var X=H.slice(0,v+1).join(".");if(null===this.get(X,null,{getters:!1})){z=X;break}}z||(z=t)}var tt=null!=s.$__.$options.priorDoc?s.$__.$options.priorDoc.$__getValue(t):m?void 0:s.$__getValue(t);if(!k)return this.$__set(z,t,m,H,k,e,tt),this;if((k.$isSingleNested||k.$isMongooseArray)&&
/*!
 * ignore
 */
function(t,e){if(!t.$__.validationError)return;for(var r=Object.keys(t.$__.validationError.errors),n=0,o=r;n<o.length;n++){var i=o[n];i.startsWith(e+".")&&delete t.$__.validationError.errors[i]}0===Object.keys(t.$__.validationError.errors).length&&(t.$__.validationError=null)}
/*!
 * ignore
 */(this,t),k.$isSingleNested&&null!=e&&p){e instanceof Z&&(e=e.toObject({virtuals:!1,transform:!1}));for(var et=0,rt=Object.keys(e);et<rt.length;et++){var nt=rt[et];this.$set(t+"."+nt,e[nt],m,n)}return this}var ot=!0;try{var it,st=function(){if(null==k.options)return!1;if(!(e instanceof Z))return!1;var t=e.constructor,r=k.options.ref;if(null!=r&&(r===t.modelName||r===t.baseModelName))return!0;var n=k.options.refPath;if(null==n)return!1;var o=e.get(n);return o===t.modelName||o===t.baseModelName}(),at=!1;if(st&&e instanceof Z&&(this.populated(t,e._id,o({},J,e.constructor)),e.$__.wasPopulated=!0,at=!0),k.options&&Array.isArray(k.options[this.schema.options.typeKey])&&k.options[this.schema.options.typeKey].length&&k.options[this.schema.options.typeKey][0].ref&&
/*!
 * ignore
 */
function(t,e){if(!Array.isArray(t))return!1;if(0===t.length)return!1;var r,n=i(t);try{for(n.s();!(r=n.n()).done;){var o=r.value;if(!(o instanceof Z))return!1;if(null==o.constructor.modelName)return!1;if(o.constructor.modelName!=e&&o.constructor.baseModelName!=e)return!1}}catch(t){n.e(t)}finally{n.f()}return!0}(e,k.options[this.schema.options.typeKey][0].ref)){this.ownerDocument?(it=o({},J,e[0].constructor),this.ownerDocument().populated(this.$__fullPath(t),e.map((function(t){return t._id})),it)):(it=o({},J,e[0].constructor),this.populated(t,e.map((function(t){return t._id})),it));var ut,ct=i(e);try{for(ct.s();!(ut=ct.n()).done;){ut.value.$__.wasPopulated=!0}}catch(t){ct.e(t)}finally{ct.f()}at=!0}if(null==this.schema.singleNestedPaths[t]&&(e=k.applySetters(e,this,!1,tt)),k.$isMongooseDocumentArray&&Array.isArray(e)&&e.length>0&&null!=e[0]&&null!=e[0].$__&&null!=e[0].$__.populated){for(var lt=Object.keys(e[0].$__.populated),ft=function(){var r=ht[pt];s.populated(t+"."+r,e.map((function(t){return t.populated(r)})),e[0].$__.populated[r].options)},pt=0,ht=lt;pt<ht.length;pt++)ft();at=!0}if(!at&&this.$__.populated){if(Array.isArray(e)&&this.$__.populated[t])for(var yt=0;yt<e.length;++yt)e[yt]instanceof Z&&(e[yt]=e[yt]._id);delete this.$__.populated[t]}k.$isSingleNested&&null!=e&&function(t,e,r){var n=e.schema;if(null==n)return;for(var o=0,i=Object.keys(n.paths);o<i.length;o++){var s=i[o],a=n.paths[s];if(null!=a.$immutableSetter){var u=null==r?void 0:r.$__getValue(s);a.$immutableSetter.call(t,u)}}}(e,k,tt),this.$markValid(t)}catch(r){r instanceof h.StrictModeError&&r.isImmutableError?this.invalidate(t,r):r instanceof h.CastError?(this.invalidate(r.path,r),r.$originalErrorPath&&this.invalidate(t,new h.CastError(k.instance,e,t,r.$originalErrorPath))):this.invalidate(t,new h.CastError(k.instance,e,t,r)),ot=!1}return ot&&(this.$__set(z,t,m,H,k,e,tt),null!=this.$__.savedState&&(this.isNew||this.$__.savedState.hasOwnProperty(t)?this.$__.savedState.hasOwnProperty(t)&&I.deepEqual(e,this.$__.savedState[t])&&this.unmarkModified(t):this.$__.savedState[t]=tt)),k.$isSingleNested&&(this.isDirectModified(t)||null==e)&&A(this,t),this},Z.prototype.set=Z.prototype.$set,Z.prototype.$__shouldModify=function(t,e,r,n,o,i,s){return!!this.isNew||null==this.schema.singleNestedPaths[e]&&(void 0===i&&!this.$__isSelected(e)||(void 0!==i||!(e in this.$__.activePaths.states.default))&&(!(this.populated(e)&&i instanceof Z&&U(i._id,s))&&(!U(i,s||I.getValue(e,this))||!(r||null==i||!(e in this.$__.activePaths.states.default)||!U(i,o.getDefault(this,r))))))},Z.prototype.$__set=function(t,e,n,o,i,s,a){l=l||r(26);var u=this.$__shouldModify(t,e,n,o,i,s,a),f=this;u&&(this.markModified(t),c||(c=r(82)),s&&s.isMongooseArray&&(s._registerAtomic("$set",s),s.isMongooseDocumentArray&&s.forEach((function(t){t&&t.__parentArray&&(t.__parentArray=s)})),this.$__.activePaths.forEach((function(t){t.startsWith(e+".")&&f.$__.activePaths.ignore(t)}))));for(var p=this._doc,h=0,y=o.length,d="";h<y;h++){var _=h+1===y;if(d+=d?"."+o[h]:o[h],X.has(o[h]))return;_?p instanceof Map?p.set(o[h],s):p[o[h]]=s:(I.isPOJO(p[o[h]])||p[o[h]]&&p[o[h]]instanceof l||p[o[h]]&&p[o[h]].$isSingleNested||p[o[h]]&&Array.isArray(p[o[h]])||(p[o[h]]=p[o[h]]||{}),p=p[o[h]])}},Z.prototype.$__getValue=function(t){return I.getValue(t,this._doc)},Z.prototype.$__setValue=function(t,e){return I.setValue(t,e,this._doc),this},Z.prototype.get=function(t,e,r){var n;r=r||{},e&&(n=this.schema.interpretAsType(t,e,this.schema.options));var o=this.$__path(t);if(null==o&&(o=this.schema.virtualpath(t)),o instanceof y){var i=this.schema.virtualpath(t);null!=i&&(o=i)}var s=t.split("."),a=this._doc;if(o instanceof O)return o.applyGetters(void 0,this);"string"==typeof this.schema.aliases[s[0]]&&(s[0]=this.schema.aliases[s[0]]);for(var u=0,c=s.length;u<c;u++)a&&a._doc&&(a=a._doc),a=null==a?void 0:a instanceof Map?a.get(s[u],{getters:!1}):u===c-1?I.getValue(s[u],a):a[s[u]];if(n&&(a=n.cast(a)),null!=o&&!1!==r.getters)a=o.applyGetters(a,this);else if(this.schema.nested[t]&&r.virtuals)return at(this,I.clone(a)||{},{path:t});return a},
/*!
 * ignore
 */
Z.prototype[Q]=Z.prototype.get,Z.prototype.$__path=function(t){var e=this.$__.adhocPaths,r=e&&e.hasOwnProperty(t)?e[t]:null;return r||this.schema.path(t)},Z.prototype.markModified=function(t,e){this.$__.activePaths.modify(t),null==e||this.ownerDocument||(this.$__.pathsToScopes[t]=e)},Z.prototype.unmarkModified=function(t){this.$__.activePaths.init(t),delete this.$__.pathsToScopes[t]},Z.prototype.$ignore=function(t){this.$__.activePaths.ignore(t)},Z.prototype.directModifiedPaths=function(){return Object.keys(this.$__.activePaths.states.modify)},Z.prototype.$isEmpty=function(t){var e={minimize:!0,virtuals:!1,getters:!1,transform:!1};if(arguments.length>0){var r=this.get(t);return null==r||"object"===a(r)&&(I.isPOJO(r)?nt(r):0===Object.keys(r.toObject(e)).length)}return 0===Object.keys(this.toObject(e)).length},Z.prototype.modifiedPaths=function(t){t=t||{};var e=Object.keys(this.$__.activePaths.states.modify),r=this;return e.reduce((function(e,n){var o=n.split(".");if(e=e.concat(o.reduce((function(t,e,r){return t.concat(o.slice(0,r).concat(e).join("."))}),[]).filter((function(t){return-1===e.indexOf(t)}))),!t.includeChildren)return e;var s=r.get(n);if(null!=s&&"object"===a(s))if(s._doc&&(s=s._doc),Array.isArray(s)){for(var u=s.length,c=0;c<u;++c)if(-1===e.indexOf(n+"."+c)&&(e.push(n+"."+c),null!=s[c]&&s[c].$__)){var l,f=i(s[c].modifiedPaths());try{for(f.s();!(l=f.n()).done;){var p=l.value;e.push(n+"."+c+"."+p)}}catch(t){f.e(t)}finally{f.f()}}}else Object.keys(s).filter((function(t){return-1===e.indexOf(n+"."+t)})).forEach((function(t){e.push(n+"."+t)}));return e}),[])},Z.prototype[K]=Z.prototype.modifiedPaths,Z.prototype.isModified=function(t,e){if(t){Array.isArray(t)||(t=t.split(" "));var r=e||this[K](),n=Object.keys(this.$__.activePaths.states.modify);return t.some((function(t){return!!~r.indexOf(t)}))||t.some((function(t){return n.some((function(e){return e===t||t.startsWith(e+".")}))}))}return this.$__.activePaths.some("modify")},Z.prototype[Y]=Z.prototype.isModified,Z.prototype.$isDefault=function(t){var e=this;if(null==t)return this.$__.activePaths.some("default");if("string"==typeof t&&-1===t.indexOf(" "))return this.$__.activePaths.states.default.hasOwnProperty(t);var r=t;return Array.isArray(r)||(r=r.split(" ")),r.some((function(t){return e.$__.activePaths.states.default.hasOwnProperty(t)}))},Z.prototype.$isDeleted=function(t){return 0===arguments.length?!!this.$__.isDeleted:(this.$__.isDeleted=!!t,this)},Z.prototype.isDirectModified=function(t){var e=this;if(null==t)return this.$__.activePaths.some("modify");if("string"==typeof t&&-1===t.indexOf(" "))return this.$__.activePaths.states.modify.hasOwnProperty(t);var r=t;return Array.isArray(r)||(r=r.split(" ")),r.some((function(t){return e.$__.activePaths.states.modify.hasOwnProperty(t)}))},Z.prototype.isInit=function(t){var e=this;if(null==t)return this.$__.activePaths.some("init");if("string"==typeof t&&-1===t.indexOf(" "))return this.$__.activePaths.states.init.hasOwnProperty(t);var r=t;return Array.isArray(r)||(r=r.split(" ")),r.some((function(t){return e.$__.activePaths.states.init.hasOwnProperty(t)}))},Z.prototype.isSelected=function(t){var e=this;if(null==this.$__.selected)return!0;if("_id"===t)return 0!==this.$__.selected._id;if(-1!==t.indexOf(" ")&&(t=t.split(" ")),Array.isArray(t))return t.some((function(t){return e.$__isSelected(t)}));var r=Object.keys(this.$__.selected),n=null;if(1===r.length&&"_id"===r[0])return 0===this.$__.selected._id;for(var o=0,i=r;o<i.length;o++){var s=i[o];if("_id"!==s&&k(this.$__.selected[s])){n=!!this.$__.selected[s];break}}if(null===n)return!0;if(t in this.$__.selected)return n;for(var a=t+".",u=0,c=r;u<c.length;u++){var l=c[u];if("_id"!==l){if(l.startsWith(a))return n||l!==a;if(a.startsWith(l+"."))return n}}return!n},Z.prototype.$__isSelected=Z.prototype.isSelected,Z.prototype.isDirectSelected=function(t){var e=this;if(null==this.$__.selected)return!0;if("_id"===t)return 0!==this.$__.selected._id;if(-1!==t.indexOf(" ")&&(t=t.split(" ")),Array.isArray(t))return t.some((function(t){return e.isDirectSelected(t)}));var r=Object.keys(this.$__.selected),n=null;if(1===r.length&&"_id"===r[0])return 0===this.$__.selected._id;for(var o=0,i=r;o<i.length;o++){var s=i[o];if("_id"!==s&&k(this.$__.selected[s])){n=!!this.$__.selected[s];break}}return null===n||(this.$__.selected.hasOwnProperty(t)?n:!n)},Z.prototype.validate=function(t,e,r){var n,o=this;return this.$op="validate",null!=this.ownerDocument||(this.$__.validating?n=new m(this,{parentStack:e&&e.parentStack,conflictStack:this.$__.validating.stack}):this.$__.validating=new m(this,{parentStack:e&&e.parentStack})),"function"==typeof t?(r=t,e=null,t=null):"function"==typeof e&&(r=e,e=t,t=null),S(r,(function(r){if(null!=n)return r(n);o.$__validate(t,e,(function(t){o.$op=null,r(t)}))}),this.constructor.events)},Z.prototype.$__validate=function(t,r,n){var o=this;"function"==typeof t?(n=t,r=null,t=null):"function"==typeof r&&(n=r,r=null);var i,s=r&&"object"===a(r)&&"validateModifiedOnly"in r;i=s?!!r.validateModifiedOnly:this.schema.options.validateModifiedOnly;var u=this,c=function(){var t=o.$__.validationError;if(o.$__.validationError=void 0,i&&null!=t){for(var e=0,r=Object.keys(t.errors);e<r.length;e++){var n=r[e];o.isModified(n)||delete t.errors[n]}0===Object.keys(t.errors).length&&(t=void 0)}if(o.$__.cachedRequired={},o.emit("validate",u),o.constructor.emit("validate",u),o.$__.validating=null,t){for(var s in t.errors)!o[H]&&t.errors[s]instanceof h.CastError&&o.invalidate(s,t.errors[s]);return t}},l=ot(this),f=i?l[0].filter((function(t){return o.isModified(t)})):l[0],p=l[1];if(Array.isArray(t)&&(f=it(f,t)),0===f.length)return e.nextTick((function(){var t=c();if(t)return u.schema.s.hooks.execPost("validate:error",u,[u],{error:t},(function(t){n(t)}));n(null,u)}));for(var y={},d=0,_=function(){var t=c();if(t)return u.schema.s.hooks.execPost("validate:error",u,[u],{error:t},(function(t){n(t)}));n(null,u)},m=function(t){null==t||y[t]||(y[t]=!0,d++,e.nextTick((function(){var e=u.schema.path(t);if(!e)return--d||_();if(u.$isValid(t)){var r,n=u.$__getValue(t);null==n&&(r=u.populated(t))&&(n=r);var o=t in u.$__.pathsToScopes?u.$__.pathsToScopes[t]:u,i={skipSchemaValidators:p[t],path:t};e.doValidate(n,(function(r){if(r&&(!e.$isMongooseDocumentArray||r.$isArrayValidatorError)){if(e.$isSingleNested&&r instanceof b&&!1===e.schema.options.storeSubdocValidationError)return--d||_();u.invalidate(t,r,void 0,!0)}--d||_()}),o,i)}else--d||_()})))},v=f.length,g=0;g<v;++g)m(f[g])},Z.prototype.validateSync=function(t,e){var r,n=this,o=this;r=e&&"object"===a(e)&&"validateModifiedOnly"in e?!!e.validateModifiedOnly:this.schema.options.validateModifiedOnly,"string"==typeof t&&(t=t.split(" "));var i=ot(this),s=r?i[0].filter((function(t){return n.isModified(t)})):i[0],u=i[1];Array.isArray(t)&&(s=it(s,t));var c={};s.forEach((function(t){if(!c[t]){c[t]=!0;var e=o.schema.path(t);if(e&&o.$isValid(t)){var r=o.$__getValue(t),n=e.doValidateSync(r,o,{skipSchemaValidators:u[t],path:t});if(n&&(!e.$isMongooseDocumentArray||n.$isArrayValidatorError)){if(e.$isSingleNested&&n instanceof b&&!1===e.schema.options.storeSubdocValidationError)return;o.invalidate(t,n,void 0,!0)}}}}));var l=o.$__.validationError;if(o.$__.validationError=void 0,o.emit("validate",o),o.constructor.emit("validate",o),l)for(var f in l.errors)l.errors[f]instanceof h.CastError&&o.invalidate(f,l.errors[f]);return l},Z.prototype.invalidate=function(t,e,r,n){if(this.$__.validationError||(this.$__.validationError=new b(this)),!this.$__.validationError.errors[t])return e&&"string"!=typeof e||(e=new w({path:t,message:e,type:n||"user defined",value:r})),this.$__.validationError===e||this.$__.validationError.addError(t,e),this.$__.validationError},Z.prototype.$markValid=function(t){this.$__.validationError&&this.$__.validationError.errors[t]&&(delete this.$__.validationError.errors[t],0===Object.keys(this.$__.validationError.errors).length&&(this.$__.validationError=null))},Z.prototype.$isValid=function(t){var e=this;return null==this.$__.validationError||0===Object.keys(this.$__.validationError.errors).length||null!=t&&(-1!==t.indexOf(" ")&&(t=t.split(" ")),Array.isArray(t)?t.some((function(t){return null==e.$__.validationError.errors[t]})):null==this.$__.validationError.errors[t])},Z.prototype.$__reset=function(){var t=this;return u||(u=r(18)),this.$__.activePaths.map("init","modify",(function(e){return t.$__getValue(e)})).filter((function(t){return t&&t instanceof Array&&t.isMongooseDocumentArray&&t.length})).forEach((function(e){for(var r=e.length;r--;){var n=e[r];n&&n.$__reset()}t.$__.activePaths.init(e.$path()),e[q]=e[W],e[W]={}})),this.$__.activePaths.map("init","modify",(function(e){return t.$__getValue(e)})).filter((function(t){return t&&t.$isSingleNested})).forEach((function(e){e.$__reset(),t.$__.activePaths.init(e.$basePath)})),this.$__dirty().forEach((function(t){var e=t.value;e&&e[W]&&(e[q]=e[W],e[W]={})})),this.$__.backup={},this.$__.backup.activePaths={modify:Object.assign({},this.$__.activePaths.states.modify),default:Object.assign({},this.$__.activePaths.states.default)},this.$__.backup.validationError=this.$__.validationError,this.$__.backup.errors=this.errors,this.$__.activePaths.clear("modify"),this.$__.activePaths.clear("default"),this.$__.validationError=void 0,this.errors=void 0,t=this,this.schema.requiredPaths().forEach((function(e){t.$__.activePaths.require(e)})),this},
/*!
 * ignore
 */
Z.prototype.$__undoReset=function(){if(null!=this.$__.backup&&null!=this.$__.backup.activePaths){this.$__.activePaths.states.modify=this.$__.backup.activePaths.modify,this.$__.activePaths.states.default=this.$__.backup.activePaths.default,this.$__.validationError=this.$__.backup.validationError,this.errors=this.$__.backup.errors;var t,e=i(this.$__dirty());try{for(e.s();!(t=e.n()).done;){var r=t.value.value;r&&r[W]&&r[q]&&(r[W]=r[q])}}catch(t){e.e(t)}finally{e.f()}var n,o=i(this.$__getAllSubdocs());try{for(o.s();!(n=o.n()).done;){n.value.$__undoReset()}}catch(t){o.e(t)}finally{o.f()}}},Z.prototype.$__dirty=function(){var t=this,e=this.$__.activePaths.map("modify",(function(e){return{path:e,value:t.$__getValue(e),schema:t.$__path(e)}}));(e=e.concat(this.$__.activePaths.map("default",(function(e){if("_id"!==e&&null!=t.$__getValue(e))return{path:e,value:t.$__getValue(e),schema:t.$__path(e)}})))).sort((function(t,e){return t.path<e.path?-1:t.path>e.path?1:0}));var r,n,o=[];return e.forEach((function(t){t&&(null==r||0!==t.path.indexOf(r)?(r=t.path+".",o.push(t),n=t):null!=n&&null!=n.value&&null!=n.value[W]&&n.value.hasAtomics()&&(n.value[W]={},n.value[W].$set=n.value))})),n=r=null,o},Z.prototype.$__setSchema=function(t){t.plugin(T,{deduplicate:!0}),E(t.tree,this,void 0,t.options);for(var e=0,r=Object.keys(t.virtuals);e<r.length;e++){var n=r[e];t.virtuals[n]._applyDefaultGetters()}this.schema=t,this[z]=t},Z.prototype.$__getArrayPathsToValidate=function(){return u||(u=r(18)),this.$__.activePaths.map("init","modify",function(t){return this.$__getValue(t)}.bind(this)).filter((function(t){return t&&t instanceof Array&&t.isMongooseDocumentArray&&t.length})).reduce((function(t,e){return t.concat(e)}),[]).filter((function(t){return t}))},Z.prototype.$__getAllSubdocs=function(){u||(u=r(18)),l=l||r(26);var t=this;return Object.keys(this._doc).reduce((function(e,r){return function t(e,r,n){var o=e;return n&&(o=e instanceof Z&&e[z].paths[n]?e._doc[n]:e[n]),o instanceof l?r.push(o):o instanceof Map?r=Array.from(o.keys()).reduce((function(e,r){return t(o.get(r),e,null)}),r):o&&o.$isSingleNested?(r=Object.keys(o._doc).reduce((function(e,r){return t(o._doc,e,r)}),r)).push(o):o&&o.isMongooseDocumentArray?o.forEach((function(e){e&&e._doc&&(r=Object.keys(e._doc).reduce((function(r,n){return t(e._doc,r,n)}),r),e instanceof l&&r.push(e))})):o instanceof Z&&o.$__isNested&&(r=Object.keys(o).reduce((function(e,r){return t(o,e,r)}),r)),r}(t,e,r)}),[])},Z.prototype.$__handleReject=function(t){this.listeners("error").length?this.emit("error",t):this.constructor.listeners&&this.constructor.listeners("error").length&&this.constructor.emit("error",t)},Z.prototype.$toObject=function(t,e){var r,o={transform:!0,flattenDecimals:!0},i=e?"toJSON":"toObject",s=P(this,"constructor.base.options."+i,{}),a=P(this,"schema.options",{});o=I.options(o,L(s)),o=I.options(o,L(a[i]||{})),(t=I.isPOJO(t)?L(t):{})._calledWithOptions=t._calledWithOptions||L(t),"flattenMaps"in t||(t.flattenMaps=o.flattenMaps),r=null!=t._calledWithOptions.minimize?t.minimize:null!=o.minimize?o.minimize:a.minimize;var u=Object.assign(I.clone(t),{_isNested:!0,json:e,minimize:r});if(I.hasUserDefinedProperty(t,"getters")&&(u.getters=t.getters),I.hasUserDefinedProperty(t,"virtuals")&&(u.virtuals=t.virtuals),(t.depopulate||P(t,"_parentOptions.depopulate",!1))&&t._isNested&&this.$__.wasPopulated)return L(this._id,u);(t=I.options(o,t))._isNested=!0,t.json=e,t.minimize=r,u._parentOptions=t,u._skipSingleNestedGetters=!0;var c=Object.assign({},u);c._skipSingleNestedGetters=!1;var l=t.transform,f=L(this._doc,u)||{};t.getters&&(!function(t,e,r){var n,o,i=t.schema,s=Object.keys(i.paths),a=s.length,u=t._doc;if(!u)return e;for(;a--;){var c=(n=s[a]).split("."),l=c.length,f=l-1,p=e,h=void 0;if(u=t._doc,t.$__isSelected(n))for(var y=0;y<l;++y){if(h=c[y],o=u[h],y===f){var d=t.get(n);p[h]=L(d,r)}else{if(null==o){h in u&&(p[h]=o);break}p=p[h]||(p[h]={})}u=o}}}
/*!
 * Applies schema type transforms to `json`.
 *
 * @param {Document} self
 * @param {Object} json
 * @return {Object} `json`
 */(this,f,c),t.minimize&&(f=
/*!
 * Minimizes an object, removing undefined values and empty objects
 *
 * @param {Object} object to minimize
 * @return {Object}
 */
function t(e){var r,o,i,s=Object.keys(e),a=s.length;for(;a--;)o=s[a],i=e[o],I.isObject(i)&&!n.isBuffer(i)&&(e[o]=t(i)),void 0!==e[o]?r=!0:delete e[o];return r?e:void 0}(f)||{})),(t.virtuals||t.getters&&!1!==t.virtuals)&&at(this,f,c,t),!1===t.versionKey&&this.schema.options.versionKey&&delete f[this.schema.options.versionKey];var p=t.transform;if(p&&function(t,e){var r=t.schema,n=Object.keys(r.paths||{});if(!t._doc)return e;for(var o=0,i=n;o<i.length;o++){var s=i[o],a=r.paths[s];if("function"==typeof a.options.transform){var u=t.get(s),c=a.options.transform.call(t,u);ut(s,c),I.setValue(s,c,e)}else if(null!=a.$embeddedSchemaType&&"function"==typeof a.$embeddedSchemaType.options.transform){for(var l=[].concat(t.get(s)),f=a.$embeddedSchemaType.options.transform,p=0;p<l.length;++p){var h=f.call(t,l[p]);l[p]=h,ut(s,h)}e[s]=l}}}(this,f),t.useProjection&&function(t,e){var r=t.schema,n=Object.keys(r.paths||{});if(!t._doc)return e;var o=t.$__.selected;void 0===o&&(o={},M.applyPaths(o,r));if(null==o||0===Object.keys(o).length)return e;for(var i=0,s=n;i<s.length;i++){var a=s[i];null==o[a]||o[a]||delete e[a]}}(this,f),!0===p||a.toObject&&p){var h=t.json?a.toJSON:a.toObject;h&&(p="function"==typeof t.transform?t.transform:h.transform)}else t.transform=l;if("function"==typeof p){var y=p(this,f,t);void 0!==y&&(f=y)}return f},Z.prototype.toObject=function(t){return this.$toObject(t)},Z.prototype.toJSON=function(t){return this.$toObject(t,!0)},Z.prototype.parent=function(){return this.$__.parent},Z.prototype.$parent=Z.prototype.parent,Z.prototype.inspect=function(t){var e;I.isPOJO(t)&&((e=t).minimize=!1);var r=this.toObject(e);return null==r?"MongooseDocument { "+r+" }":r},R.custom&&(
/*!
  * Avoid Node deprecation warning DEP0079
  */
Z.prototype[R.custom]=Z.prototype.inspect),Z.prototype.toString=function(){var t=this.inspect();return"string"==typeof t?t:R(t)},Z.prototype.equals=function(t){if(!t)return!1;var e=this.$__getValue("_id"),r=null!=t.$__?t.$__getValue("_id"):t;return e||r?e&&e.equals?e.equals(r):e===r:U(this,t)},Z.prototype.populate=function(){if(0===arguments.length)return this;var t,e=this.$__.populate||(this.$__.populate={}),r=I.args(arguments);if("function"==typeof r[r.length-1]&&(t=r.pop()),r.length){var n,o=I.populate.apply(null,r),s=i(o);try{for(s.s();!(n=s.n()).done;){var a=n.value;e[a.path]=a}}catch(t){s.e(t)}finally{s.f()}}if(t){var u=I.object.vals(e);this.$__.populate=void 0;var c=this.constructor;if(this.$__isNested){c=this.$__[G].constructor;var l=this.$__.nestedPath;u.forEach((function(t){t.path=l+"."+t.path}))}if(null!=this.$session()){var f=this.$session();u.forEach((function(t){null!=t.options?"session"in t.options||(t.options.session=f):t.options={session:f}}))}c.populate(this,u,t)}return this},Z.prototype.execPopulate=function(t){var e=this,r=null!=t&&"function"!=typeof t;return r?this.populate.apply(this,arguments).execPopulate():S(t,(function(t){e.populate(t)}),this.constructor.events)},Z.prototype.populated=function(t,e,r){if(null==e){if(!this.$__.populated)return;var n=this.$__.populated[t];return n?n.value:void 0}if(!0===e){if(!this.$__.populated)return;return this.$__.populated[t]}this.$__.populated||(this.$__.populated={}),this.$__.populated[t]={value:e,options:r};for(var o=t.split("."),i=0;i<o.length-1;++i){var s=o.slice(0,i+1).join("."),a=this.get(s);if(null!=a&&null!=a.$__&&this.populated(s)){var u=o.slice(i+1).join(".");a.populated(u,e,r);break}}return e},Z.prototype.depopulate=function(t){var e;"string"==typeof t&&(t=t.split(" "));var r=this.$$populatedVirtuals?Object.keys(this.$$populatedVirtuals):[],n=P(this,"$__.populated",{});if(0===arguments.length){var o,s=i(r);try{for(s.s();!(o=s.n()).done;){var a=o.value;delete this.$$populatedVirtuals[a],delete this._doc[a],delete n[a]}}catch(t){s.e(t)}finally{s.f()}for(var u=Object.keys(n),c=0,l=u;c<l.length;c++){var f=l[c];(e=this.populated(f))&&(delete n[f],this.$set(f,e))}return this}var p,h=i(t);try{for(h.s();!(p=h.n()).done;){var y=p.value;e=this.populated(y),delete n[y],-1!==r.indexOf(y)?(delete this.$$populatedVirtuals[y],delete this._doc[y]):e&&this.$set(y,e)}}catch(t){h.e(t)}finally{h.f()}return this},Z.prototype.$__fullPath=function(t){return t||""},Z.prototype.getChanges=function(){var t=this.$__delta();return t?t[1]:{}},
/*!
 * Module exports.
 */
Z.ValidationError=b,t.exports=Z}).call(this,r(8),r(1).Buffer)},function(t,e,r){"use strict";(function(n){
/*!
 * Module dependencies.
 */
function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a=r(5),u=r(9),c=r(48),l=r(72),f=r(3),p=r(134),h=r(50),y=r(0).schemaTypeSymbol,d=r(4),_=r(2),m=r(0).validatorErrorSymbol,v=r(0).documentIsModified,g=a.CastError,b=a.ValidatorError;function w(t,e,r){this[y]=!0,this.path=t,this.instance=r,this.validators=[],this.getters=this.constructor.hasOwnProperty("getters")?this.constructor.getters.slice():[],this.setters=[],e=e||{};for(var n=this.constructor.defaultOptions||{},o=0,i=Object.keys(n);o<i.length;o++){var a=i[o];n.hasOwnProperty(a)&&!e.hasOwnProperty(a)&&(e[a]=n[a])}null==e.select&&delete e.select;var c=this.OptionsConstructor||u;this.options=new c(e),this._index=null,_.hasUserDefinedProperty(this.options,"immutable")&&(this.$immutable=this.options.immutable,p(this));for(var l=0,f=Object.keys(this.options);l<f.length;l++){var h=f[l];if("cast"!==h){if(_.hasUserDefinedProperty(this.options,h)&&"function"==typeof this[h]){if("index"===h&&this._index){if(!1===e.index){var d=this._index;if("object"===s(d)&&null!=d){if(d.unique)throw new Error('Path "'+this.path+'" may not have `index` set to false and `unique` set to true');if(d.sparse)throw new Error('Path "'+this.path+'" may not have `index` set to false and `sparse` set to true')}this._index=!1}continue}var m=e[h];if("default"===h){this.default(m);continue}var v=Array.isArray(m)?m:[m];this[h].apply(this,v)}}else this.castFunction(this.options[h])}Object.defineProperty(this,"$$context",{enumerable:!1,configurable:!1,writable:!0,value:null})}
/*!
 * ignore
 */w.prototype.OptionsConstructor=u,w.cast=function(t){return 0===arguments.length||(!1===t&&(t=function(t){return t}),this._cast=t),this._cast},w.prototype.castFunction=function(t){return 0===arguments.length||(!1===t&&(t=this.constructor._defaultCaster||function(t){return t}),this._castFunction=t),this._castFunction},w.set=function(t,e){this.hasOwnProperty("defaultOptions")||(this.defaultOptions=Object.assign({},this.defaultOptions)),this.defaultOptions[t]=e},w.get=function(t){this.getters=this.hasOwnProperty("getters")?this.getters:[],this.getters.push(t)},w.prototype.default=function(t){if(1===arguments.length){if(void 0===t)return void(this.defaultValue=void 0);if(null!=t&&t.instanceOfSchema)throw new a("Cannot set default value of path `"+this.path+"` to a mongoose Schema instance.");return this.defaultValue=t,this.defaultValue}return arguments.length>1&&(this.defaultValue=_.args(arguments)),this.defaultValue},w.prototype.index=function(t){return this._index=t,_.expires(this._index),this},w.prototype.unique=function(t){if(!1===this._index){if(!t)return;throw new Error('Path "'+this.path+'" may not have `index` set to false and `unique` set to true')}return null==this._index||!0===this._index?this._index={}:"string"==typeof this._index&&(this._index={type:this._index}),this._index.unique=t,this},w.prototype.text=function(t){if(!1===this._index){if(!t)return;throw new Error('Path "'+this.path+'" may not have `index` set to false and `text` set to true')}return null===this._index||void 0===this._index||"boolean"==typeof this._index?this._index={}:"string"==typeof this._index&&(this._index={type:this._index}),this._index.text=t,this},w.prototype.sparse=function(t){if(!1===this._index){if(!t)return;throw new Error('Path "'+this.path+'" may not have `index` set to false and `sparse` set to true')}return null==this._index||"boolean"==typeof this._index?this._index={}:"string"==typeof this._index&&(this._index={type:this._index}),this._index.sparse=t,this},w.prototype.immutable=function(t){return this.$immutable=t,p(this),this},w.prototype.transform=function(t){return this.options.transform=t,this},w.prototype.set=function(t){if("function"!=typeof t)throw new TypeError("A setter must be a function.");return this.setters.push(t),this},w.prototype.get=function(t){if("function"!=typeof t)throw new TypeError("A getter must be a function.");return this.getters.push(t),this},w.prototype.validate=function(t,e,r){var n,o,i,u;if("function"==typeof t||t&&"RegExp"===_.getFunctionName(t.constructor))return"function"==typeof e?(n={validator:t,message:e}).type=r||"user defined":e instanceof Object&&!r?((n=_.clone(e)).message||(n.message=n.msg),n.validator=t,n.type=n.type||"user defined"):(null==e&&(e=a.messages.general.default),r||(r="user defined"),n={message:e,type:r,validator:t}),n.isAsync&&O(),this.validators.push(n),this;for(o=0,i=arguments.length;o<i;o++){if(u=arguments[o],!_.isPOJO(u)){var c="Invalid validator. Received ("+s(u)+") "+u+". See http://mongoosejs.com/docs/api.html#schematype_SchemaType-validate";throw new Error(c)}this.validate(u.validator,u)}return this};
/*!
 * ignore
 */
var O=d.deprecate((function(){}),"Mongoose: the `isAsync` option for custom validators is deprecated. Make your async validators return a promise instead: https://mongoosejs.com/docs/validation.html#async-custom-validators");
/*!
 * ignore
 */
function S(t){return this.castForQuery(t)}
/*!
 * ignore
 */
/*!
 * Just like handleArray, except also allows `[]` because surprisingly
 * `$in: [1, []]` works fine
 */
function A(t){var e=this;return Array.isArray(t)?t.map((function(t){return Array.isArray(t)&&0===t.length?t:e.castForQuery(t)})):[this.castForQuery(t)]}
/*!
 * ignore
 */w.prototype.required=function(t,e){var r={};if(arguments.length>0&&null==t)return this.validators=this.validators.filter((function(t){return t.validator!==this.requiredValidator}),this),this.isRequired=!1,delete this.originalRequiredValue,this;if("object"===s(t)&&(e=(r=t).message||e,t=t.isRequired),!1===t)return this.validators=this.validators.filter((function(t){return t.validator!==this.requiredValidator}),this),this.isRequired=!1,delete this.originalRequiredValue,this;var n=this;this.isRequired=!0,this.requiredValidator=function(e){var r=f(this,"$__.cachedRequired");if(null!=r&&!this.$__isSelected(n.path)&&!this[v](n.path))return!0;if(null!=r&&n.path in r){var o=!r[n.path]||n.checkRequired(e,this);return delete r[n.path],o}return"function"==typeof t&&!t.apply(this)||n.checkRequired(e,this)},this.originalRequiredValue=t,"string"==typeof t&&(e=t,t=void 0);var o=e||a.messages.general.required;return this.validators.unshift(Object.assign({},r,{validator:this.requiredValidator,message:o,type:"required"})),this},w.prototype.ref=function(t){return this.options.ref=t,this},w.prototype.getDefault=function(t,e){var r="function"==typeof this.defaultValue?this.defaultValue.call(t):this.defaultValue;if(null!=r){"object"!==s(r)||this.options&&this.options.shared||(r=_.clone(r));var n=this.applySetters(r,t,e);return n&&n.$isSingleNested&&(n.$__parent=t),n}return r},
/*!
 * Applies setters without casting
 *
 * @api private
 */
w.prototype._applySetters=function(t,e,r){var n=t;if(r)return n;var i,s=this.setters,a=o(_.clone(s).reverse());try{for(a.s();!(i=a.n()).done;){n=i.value.call(e,n,this)}}catch(t){a.e(t)}finally{a.f()}return n},
/*!
 * ignore
 */
w.prototype._castNullish=function(t){return t},w.prototype.applySetters=function(t,e,r,n,o){var i=this._applySetters(t,e,r,n,o);return null==i?this._castNullish(i):i=this.cast(i,e,r,n,o)},w.prototype.applyGetters=function(t,e){var r=t,n=this.getters,o=n.length;if(0===o)return r;for(var i=0;i<o;++i)r=n[i].call(e,r,this);return r},w.prototype.select=function(t){return this.selected=!!t,this},w.prototype.doValidate=function(t,e,r,n){var o=!1,i=this.path,a=this.validators.filter((function(t){return null!=t&&"object"===s(t)})),u=a.length;if(!u)return e(null);var c=this;function l(t,r){if(!o)if(void 0===t||t)--u<=0&&h((function(){e(null)}));else{var n=r.ErrorConstructor||b;(o=new n(r))[m]=!0,h((function(){e(o)}))}}a.forEach((function(e){if(!o){var s,a=e.validator,u=_.clone(e);if(u.path=n&&n.path?n.path:i,u.value=t,a instanceof RegExp)l(a.test(t),u);else if("function"==typeof a)if(void 0!==t||a===c.requiredValidator)if(u.isAsync)!
/*!
 * Handle async validators
 */
function(t,e,r,n,o){var i=!1,s=t.call(e,r,(function(t,e){i||(i=!0,e&&(n.message=e),o(t,n))}));"boolean"==typeof s?(i=!0,o(s,n)):s&&"function"==typeof s.then&&s.then((function(t){i||(i=!0,o(t,n))}),(function(t){i||(i=!0,n.reason=t,n.message=t.message,o(!1,n))}))}(a,r,t,u,l);else{try{s=u.propsParameter?a.call(r,t,u):a.call(r,t)}catch(t){s=!1,u.reason=t,t.message&&(u.message=t.message)}null!=s&&"function"==typeof s.then?s.then((function(t){l(t,u)}),(function(t){u.reason=t,u.message=t.message,l(s=!1,u)})):l(s,u)}else l(!0,u)}}))},w.prototype.doValidateSync=function(t,e,r){var n=this.path;if(!this.validators.length)return null;var o=this.validators;if(void 0===t){if(!(this.validators.length>0&&"required"===this.validators[0].type))return null;o=[this.validators[0]]}var i=null;return o.forEach((function(o){if(!i&&null!=o&&"object"===s(o)){var u,c=o.validator,l=_.clone(o);if(l.path=r&&r.path?r.path:n,l.value=t,!c.isAsync)if(c instanceof RegExp)a(c.test(t),l);else if("function"==typeof c){try{u=l.propsParameter?c.call(e,t,l):c.call(e,t)}catch(t){u=!1,l.reason=t}null!=u&&"function"==typeof u.then||a(u,l)}}})),i;function a(t,e){if(!i&&void 0!==t&&!t){var r=e.ErrorConstructor||b;(i=new r(e))[m]=!0}}},w._isRef=function(t,e,r,o){var i=o&&t.options&&(t.options.ref||t.options.refPath);if(!i&&r&&null!=r.$__){var s=r.$__fullPath(t.path);i=(r.ownerDocument?r.ownerDocument():r).populated(s)||r.populated(t.path)}if(i){if(null==e)return!0;if(!n.isBuffer(e)&&"Binary"!==e._bsontype&&_.isObject(e))return!0}return!1},w.prototype.$conditionalHandlers={$all:function(t){var e=this;return Array.isArray(t)?t.map((function(t){return e.castForQuery(t)})):[this.castForQuery(t)]},$eq:S,$in:A,$ne:S,$nin:A,$exists:c,$type:l},
/*!
 * Wraps `castForQuery` to handle context
 */
w.prototype.castForQueryWrapper=function(t){if(this.$$context=t.context,"$conditional"in t){var e=this.castForQuery(t.$conditional,t.val);return this.$$context=null,e}if(t.$skipQueryCastForUpdate||t.$applySetters){var r=this._castForQuery(t.val);return this.$$context=null,r}var n=this.castForQuery(t.val);return this.$$context=null,n},w.prototype.castForQuery=function(t,e){var r;if(2===arguments.length){if(!(r=this.$conditionalHandlers[t]))throw new Error("Can't use "+t);return r.call(this,e)}return e=t,this._castForQuery(e)},
/*!
 * Internal switch for runSetters
 *
 * @api private
 */
w.prototype._castForQuery=function(t){return this.applySetters(t,this.$$context)},w.checkRequired=function(t){return arguments.length>0&&(this._checkRequired=t),this._checkRequired},w.prototype.checkRequired=function(t){return null!=t},
/*!
 * ignore
 */
w.prototype.clone=function(){var t=Object.assign({},this.options),e=new this.constructor(this.path,t,this.instance);return e.validators=this.validators.slice(),void 0!==this.requiredValidator&&(e.requiredValidator=this.requiredValidator),void 0!==this.defaultValue&&(e.defaultValue=this.defaultValue),void 0!==this.$immutable&&void 0===this.options.immutable&&(e.$immutable=this.$immutable,p(e)),void 0!==this._index&&(e._index=this._index),void 0!==this.selected&&(e.selected=this.selected),void 0!==this.isRequired&&(e.isRequired=this.isRequired),void 0!==this.originalRequiredValue&&(e.originalRequiredValue=this.originalRequiredValue),e.getters=this.getters.slice(),e.setters=this.setters.slice(),e},
/*!
 * Module exports.
 */
t.exports=e=w,e.CastError=g,e.ValidatorError=b}).call(this,r(1).Buffer)},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var t=a(p);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new y(t,e)),1!==c.length||l||a(h)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){"use strict";var n=r(28),o=function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),null==e)return this;Object.assign(this,n(e))},i=r(10);Object.defineProperty(o.prototype,"type",i),Object.defineProperty(o.prototype,"validate",i),Object.defineProperty(o.prototype,"cast",i),Object.defineProperty(o.prototype,"required",i),Object.defineProperty(o.prototype,"default",i),Object.defineProperty(o.prototype,"ref",i),Object.defineProperty(o.prototype,"select",i),Object.defineProperty(o.prototype,"index",i),Object.defineProperty(o.prototype,"unique",i),Object.defineProperty(o.prototype,"immutable",i),Object.defineProperty(o.prototype,"sparse",i),Object.defineProperty(o.prototype,"text",i),Object.defineProperty(o.prototype,"transform",i),t.exports=o},function(t,e,r){"use strict";t.exports=Object.freeze({enumerable:!0,configurable:!0,writable:!0,value:void 0})},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}t.exports=n},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=r(14),f=r(3),p=r(4),h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(l,t);var e,r,n,c=a(l);function l(t,e,r,n,i){var s;if(o(this,l),arguments.length>0){var a=y(e),f=d(i),p=_(null,t,a,r,f);(s=c.call(this,p)).init(t,e,r,n,i)}else s=c.call(this,_());return u(s)}
/*!
   * ignore
   */return e=l,(r=[{key:"init",value:function(t,e,r,n,o){this.stringValue=y(e),this.messageFormat=d(o),this.kind=t,this.value=e,this.path=r,this.reason=n}
/*!
     * ignore
     * @param {Readonly<CastError>} other
     */},{key:"copy",value:function(t){this.messageFormat=t.messageFormat,this.stringValue=t.stringValue,this.kind=t.kind,this.value=t.value,this.path=t.path,this.reason=t.reason,this.message=t.message}
/*!
     * ignore
     */},{key:"setModel",value:function(t){this.model=t,this.message=_(t,this.kind,this.stringValue,this.path,this.messageFormat)}}])&&i(e.prototype,r),n&&i(e,n),l}(l);function y(t){var e=p.inspect(t);return(e=e.replace(/^'|'$/g,'"')).startsWith('"')||(e='"'+e+'"'),e}function d(t){var e=f(t,"options.cast",null);if("string"==typeof e)return e}
/*!
 * ignore
 */function _(t,e,r,n,o){if(null!=o){var i=o.replace("{KIND}",e).replace("{VALUE}",r).replace("{PATH}",n);return null!=t&&(i=i.replace("{MODEL}",t.modelName)),i}var s="Cast to "+e+" failed for value "+r+' at path "'+n+'"';return null!=t&&(s+=' for model "'+t.modelName+'"'),s}
/*!
 * exports
 */Object.defineProperty(h.prototype,"name",{value:"CastError"}),t.exports=h},function(t,e,r){"use strict";var n=r(15).get().ObjectId,o=r(0).objectIdSymbol;
/*!
 * Getter for convenience with populate, see gh-6115
 */
Object.defineProperty(n.prototype,"_id",{enumerable:!1,configurable:!0,get:function(){return this}}),n.prototype[o]=!0,t.exports=n},function(t,e,r){"use strict";
/*!
 * ignore
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){var e="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return a(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,t)})(t)}function a(t,e,r){return(a=u()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,t);var e,r,n=(e=s,r=u(),function(){var t,n=l(e);if(r){var o=l(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return i(this,t)});function s(){return o(this,s),n.apply(this,arguments)}return s}(s(Error));Object.defineProperty(f.prototype,"name",{value:"MongooseError"}),t.exports=f},function(t,e,r){"use strict";
/*!
 * ignore
 */var n=null;t.exports.get=function(){return n},t.exports.set=function(t){n=t}},function(t,e,r){"use strict";(function(e){function r(t,r){return new e(t,r)}t.exports={normalizedFunctionString:function(t){return t.toString().replace(/function *\(/,"function (")},allocBuffer:"function"==typeof e.alloc?function(){return e.alloc.apply(e,arguments)}:r,toBuffer:"function"==typeof e.from?function(){return e.from.apply(e,arguments)}:r}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";
/*!
 * ignore
 */e.internalToObjectOptions={transform:!1,virtuals:!1,getters:!1,_skipDepopulateTopLevel:!0,depopulate:!0,flattenDecimals:!1}},function(t,e,r){"use strict";(function(e){
/*!
 * Module dependencies.
 */
function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function f(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=r(83),y=r(6),d=r(13),_=r(86),m=r(34),v=r(17).internalToObjectOptions,g=r(4),b=r(2),w=r(0).arrayAtomicsSymbol,O=r(0).arrayParentSymbol,S=r(0).arrayPathSymbol,A=r(0).arraySchemaSymbol,E=r(0).documentArrayParent,j=Array.prototype.push,$=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,t);var r=l(n);function n(){return s(this,n),r.apply(this,arguments)}return function(t,e,r){e&&a(t.prototype,e),r&&a(t,r)}(n,[{key:"isMongooseDocumentArray",get:function(){return!0}
/*!
     * ignore
     */},{key:"toBSON",value:function(){return this.toObject(v)}
/*!
     * ignore
     */},{key:"map",value:function(){var t=u(p(n.prototype),"map",this).apply(this,arguments);return t[A]=null,t[S]=null,t[O]=null,t}},{key:"_cast",value:function(t,r){if(null==this[A])return t;var n=this[A].casterConstructor;if((n.$isMongooseDocumentArray?t&&t.isMongooseDocumentArray:t instanceof n)||t&&t.constructor&&t.constructor.baseCasterConstructor===n)return t[E]&&t.__parentArray||(t[E]=this[O],t.__parentArray=this),t.$setIndex(r),t;if(null==t)return null;if((e.isBuffer(t)||t instanceof d||!b.isObject(t))&&(t={_id:t}),t&&n.discriminators&&n.schema&&n.schema.options&&n.schema.options.discriminatorKey)if("string"==typeof t[n.schema.options.discriminatorKey]&&n.discriminators[t[n.schema.options.discriminatorKey]])n=n.discriminators[t[n.schema.options.discriminatorKey]];else{var o=m(n,t[n.schema.options.discriminatorKey]);o&&(n=o)}return n.$isMongooseDocumentArray?n.cast(t,this,void 0,void 0,r):new n(t,this,void 0,void 0,r)}},{key:"id",value:function(t){var e,r,n;try{e=_(t).toString()}catch(t){e=null}var i,s=o(this);try{for(s.s();!(i=s.n()).done;){var a=i.value;if(a&&null!=(n=a.get("_id")))if(n instanceof y){if(r||(r=String(t)),r==n._id)return a}else if(t instanceof d||n instanceof d){if(e==n)return a}else if(t==n||b.deepEqual(t,n))return a}}catch(t){s.e(t)}finally{s.f()}return null}},{key:"toObject",value:function(t){return[].concat(this.map((function(e){return null==e?null:"function"!=typeof e.toObject?e:e.toObject(t)})))}},{key:"slice",value:function(){var t=u(p(n.prototype),"slice",this).apply(this,arguments);return t[O]=this[O],t[S]=this[S],t}},{key:"push",value:function(){var t=u(p(n.prototype),"push",this).apply(this,arguments);return P(this),t}},{key:"pull",value:function(){var t=u(p(n.prototype),"pull",this).apply(this,arguments);return P(this),t}},{key:"shift",value:function(){var t=u(p(n.prototype),"shift",this).apply(this,arguments);return P(this),t}},{key:"splice",value:function(){var t=u(p(n.prototype),"splice",this).apply(this,arguments);return P(this),t}},{key:"inspect",value:function(){return this.toObject()}},{key:"create",value:function(t){var e=this[A].casterConstructor;if(t&&e.discriminators&&e.schema&&e.schema.options&&e.schema.options.discriminatorKey)if("string"==typeof t[e.schema.options.discriminatorKey]&&e.discriminators[t[e.schema.options.discriminatorKey]])e=e.discriminators[t[e.schema.options.discriminatorKey]];else{var r=m(e,t[e.schema.options.discriminatorKey]);r&&(e=r)}return new e(t,this)}
/*!
     * ignore
     */},{key:"notify",value:function(t){var e=this;return function r(n,o){for(var i=(o=o||e).length;i--;)if(null!=o[i]){switch(t){case"save":n=e[i]}o[i].isMongooseArray?r(n,o[i]):o[i]&&o[i].emit(t,n)}}}}]),n}(h);
/*!
 * If this is a document array, each element may contain single
 * populated paths, so we need to modify the top-level document's
 * populated cache. See gh-8247, gh-8265.
 */
function P(t){var e=t[O];if(e&&null!=e.$__.populated){var r,n=o(Object.keys(e.$__.populated).filter((function(e){return e.startsWith(t[S]+".")})));try{var i=function(){var n=r.value,o=n.slice((t[S]+".").length);if(!Array.isArray(e.$__.populated[n].value))return"continue";e.$__.populated[n].value=t.map((function(t){return t.populated(o)}))};for(n.s();!(r=n.n()).done;)i()}catch(t){n.e(t)}finally{n.f()}}}g.inspect.custom&&($.prototype[g.inspect.custom]=$.prototype.inspect),
/*!
 * Module exports.
 */
t.exports=function(t,e,r){var n=new $;if(n[w]={},n[A]=void 0,Array.isArray(t)&&(t[S]===e&&t[O]===r&&(n[w]=Object.assign({},t[w])),t.forEach((function(t){j.call(n,t)}))),n[S]=e,r&&r instanceof y)for(n[O]=r,n[A]=r.schema.path(e);null!=n&&null!=n[A]&&n[A].$isMongooseArray&&!n[A].$isMongooseDocumentArray;)n[A]=n[A].casterConstructor;return n}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o,i="object"===("undefined"==typeof Reflect?"undefined":n(Reflect))?Reflect:null,s=i&&"function"==typeof i.apply?i.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};o=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var a=Number.isNaN||function(t){return t!=t};function u(){u.init.call(this)}t.exports=u,t.exports.once=function(t,e){return new Promise((function(r,n){function o(){void 0!==i&&t.removeListener("error",i),r([].slice.call(arguments))}var i;"error"!==e&&(i=function(r){t.removeListener(e,o),n(r)},t.once("error",i)),t.once(e,o)}))},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var c=10;function l(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+n(t))}function f(t){return void 0===t._maxListeners?u.defaultMaxListeners:t._maxListeners}function p(t,e,r,n){var o,i,s,a;if(l(r),void 0===(i=t._events)?(i=t._events=Object.create(null),t._eventsCount=0):(void 0!==i.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),i=t._events),s=i[e]),void 0===s)s=i[e]=r,++t._eventsCount;else if("function"==typeof s?s=i[e]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(o=f(t))>0&&s.length>o&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=s.length,a=u,console&&console.warn&&console.warn(a)}return t}function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function y(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=h.bind(n);return o.listener=r,n.wrapFn=o,o}function d(t,e,r){var n=t._events;if(void 0===n)return[];var o=n[e];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(o):m(o,o.length)}function _(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function m(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");c=t}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},u.prototype.getMaxListeners=function(){return f(this)},u.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var n="error"===t,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var i;if(e.length>0&&(i=e[0]),i instanceof Error)throw i;var a=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw a.context=i,a}var u=o[t];if(void 0===u)return!1;if("function"==typeof u)s(u,this,e);else{var c=u.length,l=m(u,c);for(r=0;r<c;++r)s(l[r],this,e)}return!0},u.prototype.addListener=function(t,e){return p(this,t,e,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(t,e){return p(this,t,e,!0)},u.prototype.once=function(t,e){return l(e),this.on(t,y(this,t,e)),this},u.prototype.prependOnceListener=function(t,e){return l(e),this.prependListener(t,y(this,t,e)),this},u.prototype.removeListener=function(t,e){var r,n,o,i,s;if(l(e),void 0===(n=this._events))return this;if(void 0===(r=n[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===e||r[i].listener===e){s=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,o),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,s||e)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(t){var e,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},u.prototype.listeners=function(t){return d(this,t,!0)},u.prototype.rawListeners=function(t){return d(this,t,!1)},u.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):_.call(t,e)},u.prototype.listenerCount=_,u.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},function(t,e,r){"use strict";t.exports=r(15).get().Decimal128},function(t,e,r){"use strict";(function(e){
/*!
 * Determines if `arg` is an object.
 *
 * @param {Object|Array|String|Function|RegExp|any} arg
 * @api private
 * @return {Boolean}
 */
t.exports=function(t){return!!e.isBuffer(t)||"[object Object]"===Object.prototype.toString.call(t)}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(115);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function i(t,e){if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0}function s(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var a=r(4),u=Object.prototype.hasOwnProperty,c=Array.prototype.slice,l="foo"===function(){}.name;function f(t){return Object.prototype.toString.call(t)}function p(t){return!s(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var h=t.exports=g,y=/\s*function\s+([^\(\s]*)\s*/;function d(t){if(a.isFunction(t)){if(l)return t.name;var e=t.toString().match(y);return e&&e[1]}}function _(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function m(t){if(l||!a.isFunction(t))return a.inspect(t);var e=d(t);return"[Function"+(e?": "+e:"")+"]"}function v(t,e,r,n,o){throw new h.AssertionError({message:r,actual:t,expected:e,operator:n,stackStartFunction:o})}function g(t,e){t||v(t,!0,e,"==",h.ok)}function b(t,e,r,o){if(t===e)return!0;if(s(t)&&s(e))return 0===i(t,e);if(a.isDate(t)&&a.isDate(e))return t.getTime()===e.getTime();if(a.isRegExp(t)&&a.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"===n(t)||null!==e&&"object"===n(e)){if(p(t)&&p(e)&&f(t)===f(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===i(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(s(t)!==s(e))return!1;var u=(o=o||{actual:[],expected:[]}).actual.indexOf(t);return-1!==u&&u===o.expected.indexOf(e)||(o.actual.push(t),o.expected.push(e),function(t,e,r,n){if(null==t||null==e)return!1;if(a.isPrimitive(t)||a.isPrimitive(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=w(t),i=w(e);if(o&&!i||!o&&i)return!1;if(o)return t=c.call(t),e=c.call(e),b(t,e,r);var s,u,l=A(t),f=A(e);if(l.length!==f.length)return!1;for(l.sort(),f.sort(),u=l.length-1;u>=0;u--)if(l[u]!==f[u])return!1;for(u=l.length-1;u>=0;u--)if(s=l[u],!b(t[s],e[s],r,n))return!1;return!0}(t,e,r,o))}return r?t===e:t==e}function w(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function O(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function S(t,e,r,n){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),o=function(t){var e;try{t()}catch(t){e=t}return e}(e),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),t&&!o&&v(o,r,"Missing expected exception"+n);var i="string"==typeof n,s=!t&&o&&!r;if((!t&&a.isError(o)&&i&&O(o,r)||s)&&v(o,r,"Got unwanted exception"+n),t&&o&&r&&!O(o,r)||!t&&o)throw o}h.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=function(t){return _(m(t.actual),128)+" "+t.operator+" "+_(m(t.expected),128)}(this),this.generatedMessage=!0);var e=t.stackStartFunction||v;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var n=r.stack,o=d(e),i=n.indexOf("\n"+o);if(i>=0){var s=n.indexOf("\n",i+1);n=n.substring(s+1)}this.stack=n}}},a.inherits(h.AssertionError,Error),h.fail=v,h.ok=g,h.equal=function(t,e,r){t!=e&&v(t,e,r,"==",h.equal)},h.notEqual=function(t,e,r){t==e&&v(t,e,r,"!=",h.notEqual)},h.deepEqual=function(t,e,r){b(t,e,!1)||v(t,e,r,"deepEqual",h.deepEqual)},h.deepStrictEqual=function(t,e,r){b(t,e,!0)||v(t,e,r,"deepStrictEqual",h.deepStrictEqual)},h.notDeepEqual=function(t,e,r){b(t,e,!1)&&v(t,e,r,"notDeepEqual",h.notDeepEqual)},h.notDeepStrictEqual=function t(e,r,n){b(e,r,!0)&&v(e,r,n,"notDeepStrictEqual",t)},h.strictEqual=function(t,e,r){t!==e&&v(t,e,r,"===",h.strictEqual)},h.notStrictEqual=function(t,e,r){t===e&&v(t,e,r,"!==",h.notStrictEqual)},h.throws=function(t,e,r){S(!0,t,e,r)},h.doesNotThrow=function(t,e,r){S(!1,t,e,r)},h.ifError=function(t){if(t)throw t},h.strict=o((function t(e,r){e||v(e,!0,r,"==",t)}),h,{equal:h.strictEqual,deepEqual:h.deepStrictEqual,notEqual:h.notStrictEqual,notDeepEqual:h.notDeepStrictEqual}),h.strict.strict=h.strict;var A=Object.keys||function(t){var e=[];for(var r in t)u.call(t,r)&&e.push(r);return e}}).call(this,r(11))},function(t,e){function r(t,e){if(!(this instanceof r))return new r(t,e);this._bsontype="Long",this.low_=0|t,this.high_=0|e}r.prototype.toInt=function(){return this.low_},r.prototype.toNumber=function(){return this.high_*r.TWO_PWR_32_DBL_+this.getLowBitsUnsigned()},r.prototype.toJSON=function(){return this.toString()},r.prototype.toString=function(t){var e=t||10;if(e<2||36<e)throw Error("radix out of range: "+e);if(this.isZero())return"0";if(this.isNegative()){if(this.equals(r.MIN_VALUE)){var n=r.fromNumber(e),o=this.div(n),i=o.multiply(n).subtract(this);return o.toString(e)+i.toInt().toString(e)}return"-"+this.negate().toString(e)}var s=r.fromNumber(Math.pow(e,6));i=this;for(var a="";!i.isZero();){var u=i.div(s),c=i.subtract(u.multiply(s)).toInt().toString(e);if((i=u).isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}},r.prototype.getHighBits=function(){return this.high_},r.prototype.getLowBits=function(){return this.low_},r.prototype.getLowBitsUnsigned=function(){return this.low_>=0?this.low_:r.TWO_PWR_32_DBL_+this.low_},r.prototype.getNumBitsAbs=function(){if(this.isNegative())return this.equals(r.MIN_VALUE)?64:this.negate().getNumBitsAbs();for(var t=0!==this.high_?this.high_:this.low_,e=31;e>0&&0==(t&1<<e);e--);return 0!==this.high_?e+33:e+1},r.prototype.isZero=function(){return 0===this.high_&&0===this.low_},r.prototype.isNegative=function(){return this.high_<0},r.prototype.isOdd=function(){return 1==(1&this.low_)},r.prototype.equals=function(t){return this.high_===t.high_&&this.low_===t.low_},r.prototype.notEquals=function(t){return this.high_!==t.high_||this.low_!==t.low_},r.prototype.lessThan=function(t){return this.compare(t)<0},r.prototype.lessThanOrEqual=function(t){return this.compare(t)<=0},r.prototype.greaterThan=function(t){return this.compare(t)>0},r.prototype.greaterThanOrEqual=function(t){return this.compare(t)>=0},r.prototype.compare=function(t){if(this.equals(t))return 0;var e=this.isNegative(),r=t.isNegative();return e&&!r?-1:!e&&r?1:this.subtract(t).isNegative()?-1:1},r.prototype.negate=function(){return this.equals(r.MIN_VALUE)?r.MIN_VALUE:this.not().add(r.ONE)},r.prototype.add=function(t){var e=this.high_>>>16,n=65535&this.high_,o=this.low_>>>16,i=65535&this.low_,s=t.high_>>>16,a=65535&t.high_,u=t.low_>>>16,c=0,l=0,f=0,p=0;return f+=(p+=i+(65535&t.low_))>>>16,p&=65535,l+=(f+=o+u)>>>16,f&=65535,c+=(l+=n+a)>>>16,l&=65535,c+=e+s,c&=65535,r.fromBits(f<<16|p,c<<16|l)},r.prototype.subtract=function(t){return this.add(t.negate())},r.prototype.multiply=function(t){if(this.isZero())return r.ZERO;if(t.isZero())return r.ZERO;if(this.equals(r.MIN_VALUE))return t.isOdd()?r.MIN_VALUE:r.ZERO;if(t.equals(r.MIN_VALUE))return this.isOdd()?r.MIN_VALUE:r.ZERO;if(this.isNegative())return t.isNegative()?this.negate().multiply(t.negate()):this.negate().multiply(t).negate();if(t.isNegative())return this.multiply(t.negate()).negate();if(this.lessThan(r.TWO_PWR_24_)&&t.lessThan(r.TWO_PWR_24_))return r.fromNumber(this.toNumber()*t.toNumber());var e=this.high_>>>16,n=65535&this.high_,o=this.low_>>>16,i=65535&this.low_,s=t.high_>>>16,a=65535&t.high_,u=t.low_>>>16,c=65535&t.low_,l=0,f=0,p=0,h=0;return p+=(h+=i*c)>>>16,h&=65535,f+=(p+=o*c)>>>16,p&=65535,f+=(p+=i*u)>>>16,p&=65535,l+=(f+=n*c)>>>16,f&=65535,l+=(f+=o*u)>>>16,f&=65535,l+=(f+=i*a)>>>16,f&=65535,l+=e*c+n*u+o*a+i*s,l&=65535,r.fromBits(p<<16|h,l<<16|f)},r.prototype.div=function(t){if(t.isZero())throw Error("division by zero");if(this.isZero())return r.ZERO;if(this.equals(r.MIN_VALUE)){if(t.equals(r.ONE)||t.equals(r.NEG_ONE))return r.MIN_VALUE;if(t.equals(r.MIN_VALUE))return r.ONE;var e=this.shiftRight(1).div(t).shiftLeft(1);if(e.equals(r.ZERO))return t.isNegative()?r.ONE:r.NEG_ONE;var n=this.subtract(t.multiply(e));return e.add(n.div(t))}if(t.equals(r.MIN_VALUE))return r.ZERO;if(this.isNegative())return t.isNegative()?this.negate().div(t.negate()):this.negate().div(t).negate();if(t.isNegative())return this.div(t.negate()).negate();var o=r.ZERO;for(n=this;n.greaterThanOrEqual(t);){e=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var i=Math.ceil(Math.log(e)/Math.LN2),s=i<=48?1:Math.pow(2,i-48),a=r.fromNumber(e),u=a.multiply(t);u.isNegative()||u.greaterThan(n);)e-=s,u=(a=r.fromNumber(e)).multiply(t);a.isZero()&&(a=r.ONE),o=o.add(a),n=n.subtract(u)}return o},r.prototype.modulo=function(t){return this.subtract(this.div(t).multiply(t))},r.prototype.not=function(){return r.fromBits(~this.low_,~this.high_)},r.prototype.and=function(t){return r.fromBits(this.low_&t.low_,this.high_&t.high_)},r.prototype.or=function(t){return r.fromBits(this.low_|t.low_,this.high_|t.high_)},r.prototype.xor=function(t){return r.fromBits(this.low_^t.low_,this.high_^t.high_)},r.prototype.shiftLeft=function(t){if(0===(t&=63))return this;var e=this.low_;if(t<32){var n=this.high_;return r.fromBits(e<<t,n<<t|e>>>32-t)}return r.fromBits(0,e<<t-32)},r.prototype.shiftRight=function(t){if(0===(t&=63))return this;var e=this.high_;if(t<32){var n=this.low_;return r.fromBits(n>>>t|e<<32-t,e>>t)}return r.fromBits(e>>t-32,e>=0?0:-1)},r.prototype.shiftRightUnsigned=function(t){if(0===(t&=63))return this;var e=this.high_;if(t<32){var n=this.low_;return r.fromBits(n>>>t|e<<32-t,e>>>t)}return 32===t?r.fromBits(e,0):r.fromBits(e>>>t-32,0)},r.fromInt=function(t){if(-128<=t&&t<128){var e=r.INT_CACHE_[t];if(e)return e}var n=new r(0|t,t<0?-1:0);return-128<=t&&t<128&&(r.INT_CACHE_[t]=n),n},r.fromNumber=function(t){return isNaN(t)||!isFinite(t)?r.ZERO:t<=-r.TWO_PWR_63_DBL_?r.MIN_VALUE:t+1>=r.TWO_PWR_63_DBL_?r.MAX_VALUE:t<0?r.fromNumber(-t).negate():new r(t%r.TWO_PWR_32_DBL_|0,t/r.TWO_PWR_32_DBL_|0)},r.fromBits=function(t,e){return new r(t,e)},r.fromString=function(t,e){if(0===t.length)throw Error("number format error: empty string");var n=e||10;if(n<2||36<n)throw Error("radix out of range: "+n);if("-"===t.charAt(0))return r.fromString(t.substring(1),n).negate();if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character: '+t);for(var o=r.fromNumber(Math.pow(n,8)),i=r.ZERO,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+a),n);if(a<8){var c=r.fromNumber(Math.pow(n,a));i=i.multiply(c).add(r.fromNumber(u))}else i=(i=i.multiply(o)).add(r.fromNumber(u))}return i},r.INT_CACHE_={},r.TWO_PWR_16_DBL_=65536,r.TWO_PWR_24_DBL_=1<<24,r.TWO_PWR_32_DBL_=r.TWO_PWR_16_DBL_*r.TWO_PWR_16_DBL_,r.TWO_PWR_31_DBL_=r.TWO_PWR_32_DBL_/2,r.TWO_PWR_48_DBL_=r.TWO_PWR_32_DBL_*r.TWO_PWR_16_DBL_,r.TWO_PWR_64_DBL_=r.TWO_PWR_32_DBL_*r.TWO_PWR_32_DBL_,r.TWO_PWR_63_DBL_=r.TWO_PWR_64_DBL_/2,r.ZERO=r.fromInt(0),r.ONE=r.fromInt(1),r.NEG_ONE=r.fromInt(-1),r.MAX_VALUE=r.fromBits(-1,2147483647),r.MIN_VALUE=r.fromBits(0,-2147483648),r.TWO_PWR_24_=r.fromInt(1<<24),t.exports=r,t.exports.Long=r},function(t,e,r){"use strict";(function(e){var n=r(67),o=Symbol.for("mongoose:emitted");t.exports=function(t,r,i,s){return"function"==typeof t?r((function(r){if(null==r)t.apply(this,arguments);else{null!=i&&i.listeners("error").length>0&&!r[o]&&(r[o]=!0,i.emit("error",r));try{t(r)}catch(r){return e.nextTick((function(){throw r}))}}})):new(s=s||n.get())((function(t,e){r((function(r,n){return null!=r?(null!=i&&i.listeners("error").length>0&&!r[o]&&(r[o]=!0,i.emit("error",r)),e(r)):arguments.length>2?t(Array.prototype.slice.call(arguments,1)):void t(n)}))}))}}).call(this,r(8))},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(7),o=r(51),i=r(21);function s(t,e){if(e&&e.default){var r=e.default;Array.isArray(r)&&0===r.length?e.default=Array:!e.shared&&i(r)&&0===Object.keys(r).length&&(e.default=function(){return{}})}n.call(this,t,e,"Mixed"),this[o.schemaMixedSymbol]=!0}s.schemaName="Mixed",s.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.get=n.get,s.set=n.set,s.prototype.cast=function(t){return t},s.prototype.castForQuery=function(t,e){return 2===arguments.length?e:t},
/*!
 * Module exports.
 */
t.exports=s},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(61)(),o=r(19).EventEmitter,i=r(31),s=r(50),a=r(17).internalToObjectOptions,u=r(3),c=r(24),l=r(4),f=r(0).documentArrayParent,p=r(0).validatorErrorSymbol;function h(t,e,r,o,i){var s={};null!=e&&e.isMongooseDocumentArray?(this.__parentArray=e,this[f]=e.$parent()):(this.__parentArray=void 0,this[f]=void 0),this.$setIndex(i),this.$isDocumentArrayElement=!0,null!=this[f]&&(s.defaults=this[f].$__.$options.defaults),n.call(this,t,o,r,s);var a=this;this.on("isNew",(function(t){a.isNew=t})),a.on("save",(function(){a.constructor.emit("save",a)}))}
/*!
 * Inherit from Document
 */for(var y in h.prototype=Object.create(n.prototype),h.prototype.constructor=h,o.prototype)h[y]=o.prototype[y];h.prototype.toBSON=function(){return this.toObject(a)},
/*!
 * ignore
 */
h.prototype.$setIndex=function(t){if(this.__index=t,null!=u(this,"$__.validationError",null))for(var e=0,r=Object.keys(this.$__.validationError.errors);e<r.length;e++){var n=r[e];this.invalidate(n,this.$__.validationError.errors[n])}},h.prototype.markModified=function(t){if(this.$__.activePaths.modify(t),this.__parentArray){var e=this.__parentArray.$path()+".0."+t;this.isNew&&this.ownerDocument().$__isSelected(e)?this.__parentArray._markModified():this.__parentArray._markModified(this,t)}},
/*!
 * ignore
 */
h.prototype.populate=function(){throw new Error('Mongoose does not support calling populate() on nested docs. Instead of `doc.arr[0].populate("path")`, use `doc.populate("arr.0.path")`')},h.prototype.save=function(t,e){var r=this;return"function"==typeof t&&(e=t,t={}),(t=t||{}).suppressWarning||console.warn("mongoose: calling `save()` on a subdoc does **not** save the document to MongoDB, it only runs save middleware. Use `subdoc.save({ suppressWarning: true })` to hide this warning if you're sure this behavior is right for your app."),c(e,(function(t){r.$__save(t)}))},h.prototype.$__save=function(t){var e=this;return s((function(){return t(null,e)}))},
/*!
 * no-op for hooks
 */
h.prototype.$__remove=function(t){if(null!=t)return t(null,this)},h.prototype.remove=function(t,e){if("function"!=typeof t||e||(e=t,t=void 0),!this.__parentArray||t&&t.noop)return this.$__remove(e),this;var r;if(!this.willRemove){if(!(r=this._doc._id))throw new Error("For your own good, Mongoose does not know how to remove an EmbeddedDocument that has no _id");this.__parentArray.pull({_id:r}),this.willRemove=!0,
/*!
 * Registers remove event listeners for triggering
 * on subdocuments.
 *
 * @param {EmbeddedDocument} sub
 * @api private
 */
function(t){var e=t.ownerDocument();function r(){e.removeListener("save",r),e.removeListener("remove",r),t.emit("remove",t),t.constructor.emit("remove",t),e=t=null}e.on("save",r),e.on("remove",r)}(this)}return this.$__remove(e),this},h.prototype.update=function(){throw new Error("The #update method is not available on EmbeddedDocuments")},h.prototype.inspect=function(){return this.toObject({transform:!1,virtuals:!1,flattenDecimals:!1})},l.inspect.custom&&(
/*!
  * Avoid Node deprecation warning DEP0079
  */
h.prototype[l.inspect.custom]=h.prototype.inspect),h.prototype.invalidate=function(t,e,r){if(n.prototype.invalidate.call(this,t,e,r),!this[f]||null==this.__index){if(e[p]||e instanceof i)return this.ownerDocument().$__.validationError;throw e}var o=this.__index,s=[this.__parentArray.$path(),o,t].join(".");return this[f].invalidate(s,e,r),this.ownerDocument().$__.validationError},h.prototype.$markValid=function(t){if(this[f]){var e=this.__index;if(void 0!==e){var r=[this.__parentArray.$path(),e,t].join(".");this[f].$markValid(r)}}},
/*!
 * ignore
 */
h.prototype.$ignore=function(t){if(n.prototype.$ignore.call(this,t),this[f]){var e=this.__index;if(void 0!==e){var r=[this.__parentArray.$path(),e,t].join(".");this[f].$ignore(r)}}},h.prototype.$isValid=function(t){return void 0===this.__index||!this[f]||(!this[f].$__.validationError||!this[f].$__.validationError.errors[this.$__fullPath(t)])},h.prototype.ownerDocument=function(){if(this.$__.ownerDocument)return this.$__.ownerDocument;var t=this[f];if(!t)return this;for(;t[f]||t.$__parent;)t=t[f]||t.$__parent;return this.$__.ownerDocument=t,this.$__.ownerDocument},h.prototype.$__fullPath=function(t){if(!this.$__.fullPath){var e=this;if(!e[f])return t;for(var r=[];e[f]||e.$__parent;)e[f]?r.unshift(e.__parentArray.$path()):r.unshift(e.$basePath),e=e[f]||e.$__parent;this.$__.fullPath=r.join("."),this.$__.ownerDocument||(this.$__.ownerDocument=e)}return t?this.$__.fullPath+"."+t:this.$__.fullPath},h.prototype.parent=function(){return this[f]},h.prototype.$parent=h.prototype.parent,h.prototype.parentArray=function(){return this.__parentArray},
/*!
 * Module exports.
 */
t.exports=h},function(t,e,r){(function(e){if(void 0!==e)var n=r(1).Buffer;var o=r(16);function i(t,e){if(!(this instanceof i))return new i(t,e);if(!(null==t||"string"==typeof t||n.isBuffer(t)||t instanceof Uint8Array||Array.isArray(t)))throw new Error("only String, Buffer, Uint8Array or Array accepted");if(this._bsontype="Binary",t instanceof Number?(this.sub_type=t,this.position=0):(this.sub_type=null==e?s:e,this.position=0),null==t||t instanceof Number)void 0!==n?this.buffer=o.allocBuffer(i.BUFFER_SIZE):"undefined"!=typeof Uint8Array?this.buffer=new Uint8Array(new ArrayBuffer(i.BUFFER_SIZE)):this.buffer=new Array(i.BUFFER_SIZE),this.position=0;else{if("string"==typeof t)if(void 0!==n)this.buffer=o.toBuffer(t);else{if("undefined"==typeof Uint8Array&&"[object Array]"!==Object.prototype.toString.call(t))throw new Error("only String, Buffer, Uint8Array or Array accepted");this.buffer=a(t)}else this.buffer=t;this.position=t.length}}i.prototype.put=function(t){if(null!=t.length&&"number"!=typeof t&&1!==t.length)throw new Error("only accepts single character String, Uint8Array or Array");if("number"!=typeof t&&t<0||t>255)throw new Error("only accepts number in a valid unsigned byte range 0-255");var e=null;if(e="string"==typeof t?t.charCodeAt(0):null!=t.length?t[0]:t,this.buffer.length>this.position)this.buffer[this.position++]=e;else if(void 0!==n&&n.isBuffer(this.buffer)){var r=o.allocBuffer(i.BUFFER_SIZE+this.buffer.length);this.buffer.copy(r,0,0,this.buffer.length),this.buffer=r,this.buffer[this.position++]=e}else{r=null,r="[object Uint8Array]"===Object.prototype.toString.call(this.buffer)?new Uint8Array(new ArrayBuffer(i.BUFFER_SIZE+this.buffer.length)):new Array(i.BUFFER_SIZE+this.buffer.length);for(var s=0;s<this.buffer.length;s++)r[s]=this.buffer[s];this.buffer=r,this.buffer[this.position++]=e}},i.prototype.write=function(t,e){if(e="number"==typeof e?e:this.position,this.buffer.length<e+t.length){var r=null;if(void 0!==n&&n.isBuffer(this.buffer))r=o.allocBuffer(this.buffer.length+t.length),this.buffer.copy(r,0,0,this.buffer.length);else if("[object Uint8Array]"===Object.prototype.toString.call(this.buffer)){r=new Uint8Array(new ArrayBuffer(this.buffer.length+t.length));for(var i=0;i<this.position;i++)r[i]=this.buffer[i]}this.buffer=r}if(void 0!==n&&n.isBuffer(t)&&n.isBuffer(this.buffer))t.copy(this.buffer,e,0,t.length),this.position=e+t.length>this.position?e+t.length:this.position;else if(void 0!==n&&"string"==typeof t&&n.isBuffer(this.buffer))this.buffer.write(t,e,"binary"),this.position=e+t.length>this.position?e+t.length:this.position;else if("[object Uint8Array]"===Object.prototype.toString.call(t)||"[object Array]"===Object.prototype.toString.call(t)&&"string"!=typeof t){for(i=0;i<t.length;i++)this.buffer[e++]=t[i];this.position=e>this.position?e:this.position}else if("string"==typeof t){for(i=0;i<t.length;i++)this.buffer[e++]=t.charCodeAt(i);this.position=e>this.position?e:this.position}},i.prototype.read=function(t,e){if(e=e&&e>0?e:this.position,this.buffer.slice)return this.buffer.slice(t,t+e);for(var r="undefined"!=typeof Uint8Array?new Uint8Array(new ArrayBuffer(e)):new Array(e),n=0;n<e;n++)r[n]=this.buffer[t++];return r},i.prototype.value=function(t){if((t=null!=t&&t)&&void 0!==n&&n.isBuffer(this.buffer)&&this.buffer.length===this.position)return this.buffer;if(void 0!==n&&n.isBuffer(this.buffer))return t?this.buffer.slice(0,this.position):this.buffer.toString("binary",0,this.position);if(t){if(null!=this.buffer.slice)return this.buffer.slice(0,this.position);for(var e="[object Uint8Array]"===Object.prototype.toString.call(this.buffer)?new Uint8Array(new ArrayBuffer(this.position)):new Array(this.position),r=0;r<this.position;r++)e[r]=this.buffer[r];return e}return u(this.buffer,0,this.position)},i.prototype.length=function(){return this.position},i.prototype.toJSON=function(){return null!=this.buffer?this.buffer.toString("base64"):""},i.prototype.toString=function(t){return null!=this.buffer?this.buffer.slice(0,this.position).toString(t):""};var s=0,a=function(t){for(var e="undefined"!=typeof Uint8Array?new Uint8Array(new ArrayBuffer(t.length)):new Array(t.length),r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e},u=function(t,e,r){for(var n="",o=e;o<r;o++)n+=String.fromCharCode(t[o]);return n};i.BUFFER_SIZE=256,i.SUBTYPE_DEFAULT=0,i.SUBTYPE_FUNCTION=1,i.SUBTYPE_BYTE_ARRAY=2,i.SUBTYPE_UUID_OLD=3,i.SUBTYPE_UUID=4,i.SUBTYPE_MD5=5,i.SUBTYPE_USER_DEFINED=128,t.exports=i,t.exports.Binary=i}).call(this,r(11))},function(t,e,r){"use strict";function n(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=r(64),s=r(20),a=r(13),u=r(47),c=r(29),l=r(65),f=r(66),p=r(21),h=r(0),y=r(2);
/*!
 * Object clone with Mongoose natives support.
 *
 * If options.minimize is true, creates a minimal data object. Empty objects and undefined values will not be cloned. This makes the data payload sent to MongoDB as small as possible.
 *
 * Functions are never cloned.
 *
 * @param {Object} obj the object to clone
 * @param {Object} options
 * @param {Boolean} isArrayChild true if cloning immediately underneath an array. Special case for minimize.
 * @return {Object} the cloned object
 * @api private
 */
function d(t,e,r){if(null==t)return t;if(Array.isArray(t))return function(t,e){var r,o=[],i=n(t);try{for(i.s();!(r=i.n()).done;){var s=r.value;o.push(d(s,e,!0))}}catch(t){i.e(t)}finally{i.f()}return o}(t,e);if(c(t))return e&&e._skipSingleNestedGetters&&t.$isSingleNested&&(e=Object.assign({},e,{getters:!1})),y.isPOJO(t)&&null!=t.$__&&null!=t._doc?t._doc:e&&e.json&&"function"==typeof t.toJSON?t.toJSON(e):t.toObject(e);if(t.constructor)switch(l(t.constructor)){case"Object":return _(t,e,r);case"Date":return new t.constructor(+t);case"RegExp":return i(t)}return t instanceof a?new a(t.id):f(t,"Decimal128")?e&&e.flattenDecimals?t.toJSON():s.fromString(t.toString()):!t.constructor&&p(t)?_(t,e,r):t[h.schemaTypeSymbol]?t.clone():e&&e.bson&&"function"==typeof t.toBSON?t:null!=t.valueOf?t.valueOf():_(t,e,r)}
/*!
 * ignore
 */
function _(t,e,r){for(var n,o=e&&e.minimize,i={},s=0,a=Object.keys(t);s<a.length;s++){var c=a[s];if(!u.has(c)){var l=d(t[c],e);o&&void 0===l||(!1===o&&void 0===l?delete i[c]:(n||(n=!0),i[c]=l))}}return o&&!r?n&&i:i}t.exports=d},function(t,e,r){"use strict";
/*!
 * Returns if `v` is a mongoose object that has a `toObject()` method we can use.
 *
 * This is for compatibility with libs like Date.js which do foolish things to Natives.
 *
 * @param {any} v
 * @api private
 */t.exports=function(t){return null!=t&&(null!=t.$__||t.isMongooseArray||t.isMongooseBuffer||t.$isMongooseMap)}},function(t,e,r){"use strict";var n=["find","findOne","update","updateMany","updateOne","replaceOne","remove","count","distinct","findAndModify","aggregate","findStream","deleteOne","deleteMany"];function o(){}for(var i=0,s=n.length;i<s;++i){var a=n[i];o.prototype[a]=u(a)}function u(t){return function(){throw new Error("collection."+t+" not implemented")}}t.exports=o,o.methods=n},function(t,e,r){"use strict";
/*!
 * Module requirements
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=r(14),l=r(4),f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(u,t);var e,r,n,a=s(u);function u(t){var e,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=t&&"model"===t.constructor.name?t.constructor.modelName+" validation failed":"Validation failed",(e=a.call(this,r)).errors={},e._message=r,t&&(t.errors=e.errors),e}return e=u,(r=[{key:"toString",value:function(){return this.name+": "+p(this)}
/*!
     * inspect helper
     */},{key:"inspect",value:function(){return Object.assign(new Error(this.message),this)}
/*!
    * add message
    */},{key:"addError",value:function(t,e){this.errors[t]=e,this.message=this._message+": "+p(this)}}])&&o(e.prototype,r),n&&o(e,n),u}(c);
/*!
 * ignore
 */
function p(t){for(var e,r=Object.keys(t.errors||{}),n=r.length,o=[],i=0;i<n;++i)e=r[i],t!==t.errors[e]&&o.push(e+": "+t.errors[e].message);return o.join(", ")}
/*!
 * Module exports
 */l.inspect.custom&&(
/*!
  * Avoid Node deprecation warning DEP0079
  */
f.prototype[l.inspect.custom]=f.prototype.inspect)
/*!
 * Helper for JSON.stringify
 * Ensure `name` and `message` show up in toJSON output re: gh-9847
 */,Object.defineProperty(f.prototype,"toJSON",{enumerable:!1,writable:!1,configurable:!0,value:function(){return Object.assign({},this,{name:this.name,message:this.message})}}),Object.defineProperty(f.prototype,"name",{value:"ValidationError"}),t.exports=f},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=i(r);function r(t,n,o){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),n=n||"Field `"+t+"` is not in schema and strict mode is set to throw.",(i=e.call(this,n)).isImmutableError=!!o,i.path=t,i}return r}(r(5));Object.defineProperty(u.prototype,"name",{value:"StrictModeError"}),t.exports=u},function(t,e,r){"use strict";
/*!
 * Module requirements.
 */var n=r(78);
/*!
 * @ignore
 */
/*!
 * @ignore
 */
function o(t){return n.cast()(t)}e.castToNumber=o,e.castArraysOfNumbers=function t(e,r){e.forEach((function(n,i){Array.isArray(n)?t(n,r):e[i]=o.call(r,n)}))}},function(t,e,r){"use strict";
/*!
* returns discriminator by discriminatorMapping.value
*
* @param {Model} model
* @param {string} value
*/t.exports=function(t,e){var r=null;if(!t.discriminators)return r;for(var n in t.discriminators){var o=t.discriminators[n];if(o.schema&&o.schema.discriminatorMapping&&o.schema.discriminatorMapping.value==e){r=o;break}}return r}},function(t,e,r){"use strict";var n=r(59),o=r(23),i=r(36),s=r(37),a=r(38),u=r(39),c=r(40),l=r(60),f=r(41),p=r(42),h=r(43),y=r(44),d=r(45),_=r(27),m=r(102),v=r(103),g=r(105),b=r(16),w=b.allocBuffer(17825792),O=function(){};O.prototype.serialize=function(t,e){var r="boolean"==typeof(e=e||{}).checkKeys&&e.checkKeys,n="boolean"==typeof e.serializeFunctions&&e.serializeFunctions,o="boolean"!=typeof e.ignoreUndefined||e.ignoreUndefined,i="number"==typeof e.minInternalBufferSize?e.minInternalBufferSize:17825792;w.length<i&&(w=b.allocBuffer(i));var s=v(w,t,r,0,0,n,o,[]),a=b.allocBuffer(s);return w.copy(a,0,0,a.length),a},O.prototype.serializeWithBufferAndIndex=function(t,e,r){var n="boolean"==typeof(r=r||{}).checkKeys&&r.checkKeys,o="boolean"==typeof r.serializeFunctions&&r.serializeFunctions,i="boolean"!=typeof r.ignoreUndefined||r.ignoreUndefined,s="number"==typeof r.index?r.index:0;return v(e,t,n,s||0,0,o,i)-1},O.prototype.deserialize=function(t,e){return m(t,e)},O.prototype.calculateObjectSize=function(t,e){var r="boolean"==typeof(e=e||{}).serializeFunctions&&e.serializeFunctions,n="boolean"!=typeof e.ignoreUndefined||e.ignoreUndefined;return g(t,r,n)},O.prototype.deserializeStream=function(t,e,r,n,o,i){i=null!=i?i:{};for(var s=e,a=0;a<r;a++){var u=t[s]|t[s+1]<<8|t[s+2]<<16|t[s+3]<<24;i.index=s,n[o+a]=this.deserialize(t,i),s+=u}return s},O.BSON_INT32_MAX=2147483647,O.BSON_INT32_MIN=-2147483648,O.BSON_INT64_MAX=Math.pow(2,63)-1,O.BSON_INT64_MIN=-Math.pow(2,63),O.JS_INT_MAX=9007199254740992,O.JS_INT_MIN=-9007199254740992,O.BSON_DATA_NUMBER=1,O.BSON_DATA_STRING=2,O.BSON_DATA_OBJECT=3,O.BSON_DATA_ARRAY=4,O.BSON_DATA_BINARY=5,O.BSON_DATA_OID=7,O.BSON_DATA_BOOLEAN=8,O.BSON_DATA_DATE=9,O.BSON_DATA_NULL=10,O.BSON_DATA_REGEXP=11,O.BSON_DATA_CODE=13,O.BSON_DATA_SYMBOL=14,O.BSON_DATA_CODE_W_SCOPE=15,O.BSON_DATA_INT=16,O.BSON_DATA_TIMESTAMP=17,O.BSON_DATA_LONG=18,O.BSON_DATA_MIN_KEY=255,O.BSON_DATA_MAX_KEY=127,O.BSON_BINARY_SUBTYPE_DEFAULT=0,O.BSON_BINARY_SUBTYPE_FUNCTION=1,O.BSON_BINARY_SUBTYPE_BYTE_ARRAY=2,O.BSON_BINARY_SUBTYPE_UUID=3,O.BSON_BINARY_SUBTYPE_MD5=4,O.BSON_BINARY_SUBTYPE_USER_DEFINED=128,t.exports=O,t.exports.Code=f,t.exports.Map=n,t.exports.Symbol=c,t.exports.BSON=O,t.exports.DBRef=d,t.exports.Binary=_,t.exports.ObjectID=a,t.exports.Long=o,t.exports.Timestamp=s,t.exports.Double=i,t.exports.Int32=l,t.exports.MinKey=h,t.exports.MaxKey=y,t.exports.BSONRegExp=u,t.exports.Decimal128=p},function(t,e){function r(t){if(!(this instanceof r))return new r(t);this._bsontype="Double",this.value=t}r.prototype.valueOf=function(){return this.value},r.prototype.toJSON=function(){return this.value},t.exports=r,t.exports.Double=r},function(t,e){function r(t,e){if(!(this instanceof r))return new r(t,e);this._bsontype="Timestamp",this.low_=0|t,this.high_=0|e}r.prototype.toInt=function(){return this.low_},r.prototype.toNumber=function(){return this.high_*r.TWO_PWR_32_DBL_+this.getLowBitsUnsigned()},r.prototype.toJSON=function(){return this.toString()},r.prototype.toString=function(t){var e=t||10;if(e<2||36<e)throw Error("radix out of range: "+e);if(this.isZero())return"0";if(this.isNegative()){if(this.equals(r.MIN_VALUE)){var n=r.fromNumber(e),o=this.div(n),i=o.multiply(n).subtract(this);return o.toString(e)+i.toInt().toString(e)}return"-"+this.negate().toString(e)}var s=r.fromNumber(Math.pow(e,6));i=this;for(var a="";!i.isZero();){var u=i.div(s),c=i.subtract(u.multiply(s)).toInt().toString(e);if((i=u).isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}},r.prototype.getHighBits=function(){return this.high_},r.prototype.getLowBits=function(){return this.low_},r.prototype.getLowBitsUnsigned=function(){return this.low_>=0?this.low_:r.TWO_PWR_32_DBL_+this.low_},r.prototype.getNumBitsAbs=function(){if(this.isNegative())return this.equals(r.MIN_VALUE)?64:this.negate().getNumBitsAbs();for(var t=0!==this.high_?this.high_:this.low_,e=31;e>0&&0==(t&1<<e);e--);return 0!==this.high_?e+33:e+1},r.prototype.isZero=function(){return 0===this.high_&&0===this.low_},r.prototype.isNegative=function(){return this.high_<0},r.prototype.isOdd=function(){return 1==(1&this.low_)},r.prototype.equals=function(t){return this.high_===t.high_&&this.low_===t.low_},r.prototype.notEquals=function(t){return this.high_!==t.high_||this.low_!==t.low_},r.prototype.lessThan=function(t){return this.compare(t)<0},r.prototype.lessThanOrEqual=function(t){return this.compare(t)<=0},r.prototype.greaterThan=function(t){return this.compare(t)>0},r.prototype.greaterThanOrEqual=function(t){return this.compare(t)>=0},r.prototype.compare=function(t){if(this.equals(t))return 0;var e=this.isNegative(),r=t.isNegative();return e&&!r?-1:!e&&r?1:this.subtract(t).isNegative()?-1:1},r.prototype.negate=function(){return this.equals(r.MIN_VALUE)?r.MIN_VALUE:this.not().add(r.ONE)},r.prototype.add=function(t){var e=this.high_>>>16,n=65535&this.high_,o=this.low_>>>16,i=65535&this.low_,s=t.high_>>>16,a=65535&t.high_,u=t.low_>>>16,c=0,l=0,f=0,p=0;return f+=(p+=i+(65535&t.low_))>>>16,p&=65535,l+=(f+=o+u)>>>16,f&=65535,c+=(l+=n+a)>>>16,l&=65535,c+=e+s,c&=65535,r.fromBits(f<<16|p,c<<16|l)},r.prototype.subtract=function(t){return this.add(t.negate())},r.prototype.multiply=function(t){if(this.isZero())return r.ZERO;if(t.isZero())return r.ZERO;if(this.equals(r.MIN_VALUE))return t.isOdd()?r.MIN_VALUE:r.ZERO;if(t.equals(r.MIN_VALUE))return this.isOdd()?r.MIN_VALUE:r.ZERO;if(this.isNegative())return t.isNegative()?this.negate().multiply(t.negate()):this.negate().multiply(t).negate();if(t.isNegative())return this.multiply(t.negate()).negate();if(this.lessThan(r.TWO_PWR_24_)&&t.lessThan(r.TWO_PWR_24_))return r.fromNumber(this.toNumber()*t.toNumber());var e=this.high_>>>16,n=65535&this.high_,o=this.low_>>>16,i=65535&this.low_,s=t.high_>>>16,a=65535&t.high_,u=t.low_>>>16,c=65535&t.low_,l=0,f=0,p=0,h=0;return p+=(h+=i*c)>>>16,h&=65535,f+=(p+=o*c)>>>16,p&=65535,f+=(p+=i*u)>>>16,p&=65535,l+=(f+=n*c)>>>16,f&=65535,l+=(f+=o*u)>>>16,f&=65535,l+=(f+=i*a)>>>16,f&=65535,l+=e*c+n*u+o*a+i*s,l&=65535,r.fromBits(p<<16|h,l<<16|f)},r.prototype.div=function(t){if(t.isZero())throw Error("division by zero");if(this.isZero())return r.ZERO;if(this.equals(r.MIN_VALUE)){if(t.equals(r.ONE)||t.equals(r.NEG_ONE))return r.MIN_VALUE;if(t.equals(r.MIN_VALUE))return r.ONE;var e=this.shiftRight(1).div(t).shiftLeft(1);if(e.equals(r.ZERO))return t.isNegative()?r.ONE:r.NEG_ONE;var n=this.subtract(t.multiply(e));return e.add(n.div(t))}if(t.equals(r.MIN_VALUE))return r.ZERO;if(this.isNegative())return t.isNegative()?this.negate().div(t.negate()):this.negate().div(t).negate();if(t.isNegative())return this.div(t.negate()).negate();var o=r.ZERO;for(n=this;n.greaterThanOrEqual(t);){e=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var i=Math.ceil(Math.log(e)/Math.LN2),s=i<=48?1:Math.pow(2,i-48),a=r.fromNumber(e),u=a.multiply(t);u.isNegative()||u.greaterThan(n);)e-=s,u=(a=r.fromNumber(e)).multiply(t);a.isZero()&&(a=r.ONE),o=o.add(a),n=n.subtract(u)}return o},r.prototype.modulo=function(t){return this.subtract(this.div(t).multiply(t))},r.prototype.not=function(){return r.fromBits(~this.low_,~this.high_)},r.prototype.and=function(t){return r.fromBits(this.low_&t.low_,this.high_&t.high_)},r.prototype.or=function(t){return r.fromBits(this.low_|t.low_,this.high_|t.high_)},r.prototype.xor=function(t){return r.fromBits(this.low_^t.low_,this.high_^t.high_)},r.prototype.shiftLeft=function(t){if(0===(t&=63))return this;var e=this.low_;if(t<32){var n=this.high_;return r.fromBits(e<<t,n<<t|e>>>32-t)}return r.fromBits(0,e<<t-32)},r.prototype.shiftRight=function(t){if(0===(t&=63))return this;var e=this.high_;if(t<32){var n=this.low_;return r.fromBits(n>>>t|e<<32-t,e>>t)}return r.fromBits(e>>t-32,e>=0?0:-1)},r.prototype.shiftRightUnsigned=function(t){if(0===(t&=63))return this;var e=this.high_;if(t<32){var n=this.low_;return r.fromBits(n>>>t|e<<32-t,e>>>t)}return 32===t?r.fromBits(e,0):r.fromBits(e>>>t-32,0)},r.fromInt=function(t){if(-128<=t&&t<128){var e=r.INT_CACHE_[t];if(e)return e}var n=new r(0|t,t<0?-1:0);return-128<=t&&t<128&&(r.INT_CACHE_[t]=n),n},r.fromNumber=function(t){return isNaN(t)||!isFinite(t)?r.ZERO:t<=-r.TWO_PWR_63_DBL_?r.MIN_VALUE:t+1>=r.TWO_PWR_63_DBL_?r.MAX_VALUE:t<0?r.fromNumber(-t).negate():new r(t%r.TWO_PWR_32_DBL_|0,t/r.TWO_PWR_32_DBL_|0)},r.fromBits=function(t,e){return new r(t,e)},r.fromString=function(t,e){if(0===t.length)throw Error("number format error: empty string");var n=e||10;if(n<2||36<n)throw Error("radix out of range: "+n);if("-"===t.charAt(0))return r.fromString(t.substring(1),n).negate();if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character: '+t);for(var o=r.fromNumber(Math.pow(n,8)),i=r.ZERO,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+a),n);if(a<8){var c=r.fromNumber(Math.pow(n,a));i=i.multiply(c).add(r.fromNumber(u))}else i=(i=i.multiply(o)).add(r.fromNumber(u))}return i},r.INT_CACHE_={},r.TWO_PWR_16_DBL_=65536,r.TWO_PWR_24_DBL_=1<<24,r.TWO_PWR_32_DBL_=r.TWO_PWR_16_DBL_*r.TWO_PWR_16_DBL_,r.TWO_PWR_31_DBL_=r.TWO_PWR_32_DBL_/2,r.TWO_PWR_48_DBL_=r.TWO_PWR_32_DBL_*r.TWO_PWR_16_DBL_,r.TWO_PWR_64_DBL_=r.TWO_PWR_32_DBL_*r.TWO_PWR_32_DBL_,r.TWO_PWR_63_DBL_=r.TWO_PWR_64_DBL_/2,r.ZERO=r.fromInt(0),r.ONE=r.fromInt(1),r.NEG_ONE=r.fromInt(-1),r.MAX_VALUE=r.fromBits(-1,2147483647),r.MIN_VALUE=r.fromBits(0,-2147483648),r.TWO_PWR_24_=r.fromInt(1<<24),t.exports=r,t.exports.Timestamp=r},function(t,e,r){(function(e,n){var o="inspect",i=r(16),s=parseInt(16777215*Math.random(),10),a=new RegExp("^[0-9a-fA-F]{24}$");try{if(e&&e.from){var u=!0;o=r(4).inspect.custom||"inspect"}}catch(t){u=!1}for(var c=function t(e){if(e instanceof t)return e;if(!(this instanceof t))return new t(e);if(this._bsontype="ObjectID",null==e||"number"==typeof e)return this.id=this.generate(e),void(t.cacheHexString&&(this.__id=this.toString("hex")));var r=t.isValid(e);if(!r&&null!=e)throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");if(r&&"string"==typeof e&&24===e.length&&u)return new t(i.toBuffer(e,"hex"));if(r&&"string"==typeof e&&24===e.length)return t.createFromHexString(e);if(null==e||12!==e.length){if(null!=e&&"function"==typeof e.toHexString)return e;throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters")}this.id=e,t.cacheHexString&&(this.__id=this.toString("hex"))},l=[],f=0;f<256;f++)l[f]=(f<=15?"0":"")+f.toString(16);c.prototype.toHexString=function(){if(c.cacheHexString&&this.__id)return this.__id;var t="";if(!this.id||!this.id.length)throw new Error("invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is ["+JSON.stringify(this.id)+"]");if(this.id instanceof h)return t=y(this.id),c.cacheHexString&&(this.__id=t),t;for(var e=0;e<this.id.length;e++)t+=l[this.id.charCodeAt(e)];return c.cacheHexString&&(this.__id=t),t},c.prototype.get_inc=function(){return c.index=(c.index+1)%16777215},c.prototype.getInc=function(){return this.get_inc()},c.prototype.generate=function(t){"number"!=typeof t&&(t=~~(Date.now()/1e3));var e=(void 0===n||1===n.pid?Math.floor(1e5*Math.random()):n.pid)%65535,r=this.get_inc(),o=i.allocBuffer(12);return o[3]=255&t,o[2]=t>>8&255,o[1]=t>>16&255,o[0]=t>>24&255,o[6]=255&s,o[5]=s>>8&255,o[4]=s>>16&255,o[8]=255&e,o[7]=e>>8&255,o[11]=255&r,o[10]=r>>8&255,o[9]=r>>16&255,o},c.prototype.toString=function(t){return this.id&&this.id.copy?this.id.toString("string"==typeof t?t:"hex"):this.toHexString()},c.prototype[o]=c.prototype.toString,c.prototype.toJSON=function(){return this.toHexString()},c.prototype.equals=function(t){return t instanceof c?this.toString()===t.toString():"string"==typeof t&&c.isValid(t)&&12===t.length&&this.id instanceof h?t===this.id.toString("binary"):"string"==typeof t&&c.isValid(t)&&24===t.length?t.toLowerCase()===this.toHexString():"string"==typeof t&&c.isValid(t)&&12===t.length?t===this.id:!(null==t||!(t instanceof c||t.toHexString))&&t.toHexString()===this.toHexString()},c.prototype.getTimestamp=function(){var t=new Date,e=this.id[3]|this.id[2]<<8|this.id[1]<<16|this.id[0]<<24;return t.setTime(1e3*Math.floor(e)),t},c.index=~~(16777215*Math.random()),c.createPk=function(){return new c},c.createFromTime=function(t){var e=i.toBuffer([0,0,0,0,0,0,0,0,0,0,0,0]);return e[3]=255&t,e[2]=t>>8&255,e[1]=t>>16&255,e[0]=t>>24&255,new c(e)};var p=[];for(f=0;f<10;)p[48+f]=f++;for(;f<16;)p[55+f]=p[87+f]=f++;var h=e,y=function(t){return t.toString("hex")};c.createFromHexString=function(t){if(void 0===t||null!=t&&24!==t.length)throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");if(u)return new c(i.toBuffer(t,"hex"));for(var e=new h(12),r=0,n=0;n<24;)e[r++]=p[t.charCodeAt(n++)]<<4|p[t.charCodeAt(n++)];return new c(e)},c.isValid=function(t){return null!=t&&("number"==typeof t||("string"==typeof t?12===t.length||24===t.length&&a.test(t):t instanceof c||(t instanceof h||"function"==typeof t.toHexString&&(t.id instanceof h||"string"==typeof t.id)&&(12===t.id.length||24===t.id.length&&a.test(t.id)))))},Object.defineProperty(c.prototype,"generationTime",{enumerable:!0,get:function(){return this.id[3]|this.id[2]<<8|this.id[1]<<16|this.id[0]<<24},set:function(t){this.id[3]=255&t,this.id[2]=t>>8&255,this.id[1]=t>>16&255,this.id[0]=t>>24&255}}),t.exports=c,t.exports.ObjectID=c,t.exports.ObjectId=c}).call(this,r(1).Buffer,r(8))},function(t,e){function r(t,e){if(!(this instanceof r))return new r;this._bsontype="BSONRegExp",this.pattern=t||"",this.options=e||"";for(var n=0;n<this.options.length;n++)if("i"!==this.options[n]&&"m"!==this.options[n]&&"x"!==this.options[n]&&"l"!==this.options[n]&&"s"!==this.options[n]&&"u"!==this.options[n])throw new Error("the regular expression options ["+this.options[n]+"] is not supported")}t.exports=r,t.exports.BSONRegExp=r},function(t,e,r){(function(e){var n=e&&r(4).inspect.custom||"inspect";function o(t){if(!(this instanceof o))return new o(t);this._bsontype="Symbol",this.value=t}o.prototype.valueOf=function(){return this.value},o.prototype.toString=function(){return this.value},o.prototype[n]=function(){return this.value},o.prototype.toJSON=function(){return this.value},t.exports=o,t.exports.Symbol=o}).call(this,r(1).Buffer)},function(t,e){var r=function t(e,r){if(!(this instanceof t))return new t(e,r);this._bsontype="Code",this.code=e,this.scope=r};r.prototype.toJSON=function(){return{scope:this.scope,code:this.code}},t.exports=r,t.exports.Code=r},function(t,e,r){"use strict";var n=r(23),o=/^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,i=/^(\+|-)?(Infinity|inf)$/i,s=/^(\+|-)?NaN$/i,a=6176,u=[124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse(),c=[248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse(),l=[120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse(),f=/^([-+])?(\d+)?$/,p=r(16),h=function(t){return!isNaN(parseInt(t,10))},y=function(t){var e=n.fromNumber(1e9),r=n.fromNumber(0),o=0;if(!(t.parts[0]||t.parts[1]||t.parts[2]||t.parts[3]))return{quotient:t,rem:r};for(o=0;o<=3;o++)r=(r=r.shiftLeft(32)).add(new n(t.parts[o],0)),t.parts[o]=r.div(e).low_,r=r.modulo(e);return{quotient:t,rem:r}},d=function(t){this._bsontype="Decimal128",this.bytes=t};d.fromString=function(t){var e,r=!1,y=!1,_=!1,m=0,v=0,g=0,b=0,w=0,O=[0],S=0,A=0,E=0,j=0,$=0,P=0,x=[0,0],N=[0,0],T=0;if((t=t.trim()).length>=7e3)throw new Error(t+" not a valid Decimal128 string");var k=t.match(o),C=t.match(i),R=t.match(s);if(!k&&!C&&!R||0===t.length)throw new Error(t+" not a valid Decimal128 string");if(k&&k[4]&&void 0===k[2])throw new Error(t+" not a valid Decimal128 string");if("+"!==t[T]&&"-"!==t[T]||(r="-"===t[T++]),!h(t[T])&&"."!==t[T]){if("i"===t[T]||"I"===t[T])return new d(p.toBuffer(r?c:l));if("N"===t[T])return new d(p.toBuffer(u))}for(;h(t[T])||"."===t[T];)if("."!==t[T])S<34&&("0"!==t[T]||_)&&(_||(w=v),_=!0,O[A++]=parseInt(t[T],10),S+=1),_&&(g+=1),y&&(b+=1),v+=1,T+=1;else{if(y)return new d(p.toBuffer(u));y=!0,T+=1}if(y&&!v)throw new Error(t+" not a valid Decimal128 string");if("e"===t[T]||"E"===t[T]){var D=t.substr(++T).match(f);if(!D||!D[2])return new d(p.toBuffer(u));$=parseInt(D[0],10),T+=D[0].length}if(t[T])return new d(p.toBuffer(u));if(E=0,S){if(j=S-1,m=g,0!==$&&1!==m)for(;"0"===t[w+m-1];)m-=1}else E=0,j=0,O[0]=0,g=1,S=1,m=0;for($<=b&&b-$>16384?$=-6176:$-=b;$>6111;){if((j+=1)-E>34){var B=O.join("");if(B.match(/^0+$/)){$=6111;break}return new d(p.toBuffer(r?c:l))}$-=1}for(;$<-6176||S<g;){if(0===j){$=-6176,m=0;break}if(S<g?g-=1:j-=1,!($<6111)){if((B=O.join("")).match(/^0+$/)){$=6111;break}return new d(p.toBuffer(r?c:l))}$+=1}if(j-E+1<m&&"0"!==t[m]){var M=v;y&&-6176===$&&(w+=1,M+=1);var I=parseInt(t[w+j+1],10),F=0;if(I>=5&&(F=1,5===I))for(F=O[j]%2==1,P=w+j+2;P<M;P++)if(parseInt(t[P],10)){F=1;break}if(F)for(var L=j;L>=0&&++O[L]>9;L--)if(O[L]=0,0===L){if(!($<6111))return new d(p.toBuffer(r?c:l));$+=1,O[L]=1}}if(x=n.fromNumber(0),N=n.fromNumber(0),0===m)x=n.fromNumber(0),N=n.fromNumber(0);else if(j-E<17)for(L=E,N=n.fromNumber(O[L++]),x=new n(0,0);L<=j;L++)N=(N=N.multiply(n.fromNumber(10))).add(n.fromNumber(O[L]));else{for(L=E,x=n.fromNumber(O[L++]);L<=j-17;L++)x=(x=x.multiply(n.fromNumber(10))).add(n.fromNumber(O[L]));for(N=n.fromNumber(O[L++]);L<=j;L++)N=(N=N.multiply(n.fromNumber(10))).add(n.fromNumber(O[L]))}var U,V,q,W,H=function(t,e){if(!t&&!e)return{high:n.fromNumber(0),low:n.fromNumber(0)};var r=t.shiftRightUnsigned(32),o=new n(t.getLowBits(),0),i=e.shiftRightUnsigned(32),s=new n(e.getLowBits(),0),a=r.multiply(i),u=r.multiply(s),c=o.multiply(i),l=o.multiply(s);return a=a.add(u.shiftRightUnsigned(32)),u=new n(u.getLowBits(),0).add(c).add(l.shiftRightUnsigned(32)),{high:a=a.add(u.shiftRightUnsigned(32)),low:l=u.shiftLeft(32).add(new n(l.getLowBits(),0))}}(x,n.fromString("100000000000000000"));H.low=H.low.add(N),U=H.low,V=N,q=U.high_>>>0,W=V.high_>>>0,(q<W||q===W&&U.low_>>>0<V.low_>>>0)&&(H.high=H.high.add(n.fromNumber(1))),e=$+a;var Y={low:n.fromNumber(0),high:n.fromNumber(0)};H.high.shiftRightUnsigned(49).and(n.fromNumber(1)).equals(n.fromNumber)?(Y.high=Y.high.or(n.fromNumber(3).shiftLeft(61)),Y.high=Y.high.or(n.fromNumber(e).and(n.fromNumber(16383).shiftLeft(47))),Y.high=Y.high.or(H.high.and(n.fromNumber(0x7fffffffffff)))):(Y.high=Y.high.or(n.fromNumber(16383&e).shiftLeft(49)),Y.high=Y.high.or(H.high.and(n.fromNumber(562949953421311)))),Y.low=H.low,r&&(Y.high=Y.high.or(n.fromString("9223372036854775808")));var K=p.allocBuffer(16);return T=0,K[T++]=255&Y.low.low_,K[T++]=Y.low.low_>>8&255,K[T++]=Y.low.low_>>16&255,K[T++]=Y.low.low_>>24&255,K[T++]=255&Y.low.high_,K[T++]=Y.low.high_>>8&255,K[T++]=Y.low.high_>>16&255,K[T++]=Y.low.high_>>24&255,K[T++]=255&Y.high.low_,K[T++]=Y.high.low_>>8&255,K[T++]=Y.high.low_>>16&255,K[T++]=Y.high.low_>>24&255,K[T++]=255&Y.high.high_,K[T++]=Y.high.high_>>8&255,K[T++]=Y.high.high_>>16&255,K[T++]=Y.high.high_>>24&255,new d(K)};a=6176,d.prototype.toString=function(){for(var t,e,r,o,i,s,u=0,c=new Array(36),l=0;l<c.length;l++)c[l]=0;var f,p,h,d,_,m=0,v=!1,g={parts:new Array(4)},b=[];m=0;var w=this.bytes;if(o=w[m++]|w[m++]<<8|w[m++]<<16|w[m++]<<24,r=w[m++]|w[m++]<<8|w[m++]<<16|w[m++]<<24,e=w[m++]|w[m++]<<8|w[m++]<<16|w[m++]<<24,t=w[m++]|w[m++]<<8|w[m++]<<16|w[m++]<<24,m=0,{low:new n(o,r),high:new n(e,t)}.high.lessThan(n.ZERO)&&b.push("-"),(i=t>>26&31)>>3==3){if(30===i)return b.join("")+"Infinity";if(31===i)return"NaN";s=t>>15&16383,h=8+(t>>14&1)}else h=t>>14&7,s=t>>17&16383;if(f=s-a,g.parts[0]=(16383&t)+((15&h)<<14),g.parts[1]=e,g.parts[2]=r,g.parts[3]=o,0===g.parts[0]&&0===g.parts[1]&&0===g.parts[2]&&0===g.parts[3])v=!0;else for(_=3;_>=0;_--){var O=0,S=y(g);if(g=S.quotient,O=S.rem.low_)for(d=8;d>=0;d--)c[9*_+d]=O%10,O=Math.floor(O/10)}if(v)u=1,c[m]=0;else for(u=36,l=0;!c[m];)l++,u-=1,m+=1;if((p=u-1+f)>=34||p<=-7||f>0){for(b.push(c[m++]),(u-=1)&&b.push("."),l=0;l<u;l++)b.push(c[m++]);b.push("E"),p>0?b.push("+"+p):b.push(p)}else if(f>=0)for(l=0;l<u;l++)b.push(c[m++]);else{var A=u+f;if(A>0)for(l=0;l<A;l++)b.push(c[m++]);else b.push("0");for(b.push(".");A++<0;)b.push("0");for(l=0;l<u-Math.max(A-1,0);l++)b.push(c[m++])}return b.join("")},d.prototype.toJSON=function(){return{$numberDecimal:this.toString()}},t.exports=d,t.exports.Decimal128=d},function(t,e){function r(){if(!(this instanceof r))return new r;this._bsontype="MinKey"}t.exports=r,t.exports.MinKey=r},function(t,e){function r(){if(!(this instanceof r))return new r;this._bsontype="MaxKey"}t.exports=r,t.exports.MaxKey=r},function(t,e){function r(t,e,n){if(!(this instanceof r))return new r(t,e,n);this._bsontype="DBRef",this.namespace=t,this.oid=e,this.db=n}r.prototype.toJSON=function(){return{$ref:this.namespace,$id:this.oid,$db:null==this.db?"":this.db}},t.exports=r,t.exports.DBRef=r},function(t,e,r){"use strict";t.exports=r(112)},function(t,e,r){"use strict";t.exports=new Set(["__proto__","constructor","prototype"])},function(t,e,r){"use strict";var n=r(49);
/*!
 * ignore
 */t.exports=function(t){var e=null!=this?this.path:null;return n(t,e)}},function(t,e,r){"use strict";var n=r(12);
/*!
 * Given a value, cast it to a boolean, or throw a `CastError` if the value
 * cannot be casted. `null` and `undefined` are considered valid.
 *
 * @param {Any} value
 * @param {String} [path] optional the path to set on the CastError
 * @return {Boolean|null|undefined}
 * @throws {CastError} if `value` is not one of the allowed values
 * @api private
 */t.exports=function(e,r){if(t.exports.convertToTrue.has(e))return!0;if(t.exports.convertToFalse.has(e))return!1;if(null==e)return e;throw new n("boolean",e,r)},t.exports.convertToTrue=new Set([!0,"true",1,"1","yes"]),t.exports.convertToFalse=new Set([!1,"false",0,"0","no"])},function(t,e,r){"use strict";(function(e){
/*!
 * Centralize this so we can more easily work around issues with people
 * stubbing out `process.nextTick()` in tests using sinon:
 * https://github.com/sinonjs/lolex#automatically-incrementing-mocked-time
 * See gh-6074
 */
t.exports=function(t){return e.nextTick(t)}}).call(this,r(8))},function(t,e,r){"use strict";e.schemaMixedSymbol=Symbol.for("mongoose:schema_mixed"),e.builtInMiddleware=Symbol.for("mongoose:built-in-middleware")},function(t,e,r){"use strict";(function(n){
/*!
 * Module dependencies.
 */
function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return s=t.done,t},e:function(t){u=!0,i=t},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u,c=r(19).EventEmitter,l=r(137),f=r(14),p=r(7),h=r(9),y=r(138),d=r(53),_=r(74),m=r(0).arrayParentSymbol,v=r(3),g=r(139),b=r(140),w=r(46),O=r(15).get().ReadPreference,S=r(141),A=r(4),E=r(2),j=r(145),$=r(146).middlewareFunctions,P=r(76).middlewareFunctions,x=$.concat(P).reduce((function(t,e){return t.add(e)}),new Set),N=0;function T(t,e){if(!(this instanceof T))return new T(t,e);if(this.obj=t,this.paths={},this.aliases={},this.subpaths={},this.virtuals={},this.singleNestedPaths={},this.nested={},this.inherits={},this.callQueue=[],this._indexes=[],this.methods={},this.methodOptions={},this.statics={},this.tree={},this.query={},this.childSchemas=[],this.plugins=[],this.$id=++N,this.s={hooks:new l},this.options=this.defaultOptions(e),Array.isArray(t)){var r,n=s(t);try{for(n.s();!(r=n.n()).done;){var o=r.value;this.add(o)}}catch(t){n.e(t)}finally{n.f()}}else t&&this.add(t);var i=t&&t._id&&E.isObject(t._id);!this.paths._id&&!this.options.noId&&this.options._id&&!i&&_(this),this.setupTimestamp(this.options.timestamps)}
/*!
 * Create virtual properties with alias field
 */
/*!
 * Inherit from EventEmitter.
 */
T.prototype=Object.create(c.prototype),T.prototype.constructor=T,T.prototype.instanceOfSchema=!0,
/*!
 * ignore
 */
Object.defineProperty(T.prototype,"$schemaType",{configurable:!1,enumerable:!1,writable:!0}),Object.defineProperty(T.prototype,"childSchemas",{configurable:!1,enumerable:!0,writable:!0}),T.prototype.obj,T.prototype.paths,T.prototype.tree,T.prototype.clone=function(){var t=this,e=new(null==this.base?T:this.base.Schema)({},this._userProvidedOptions);return e.base=this.base,e.obj=this.obj,e.options=E.clone(this.options),e.callQueue=this.callQueue.map((function(t){return t})),e.methods=E.clone(this.methods),e.methodOptions=E.clone(this.methodOptions),e.statics=E.clone(this.statics),e.query=E.clone(this.query),e.plugins=Array.prototype.slice.call(this.plugins),e._indexes=E.clone(this._indexes),e.s.hooks=this.s.hooks.clone(),e.tree=E.clone(this.tree),e.paths=E.clone(this.paths),e.nested=E.clone(this.nested),e.subpaths=E.clone(this.subpaths),e.singleNestedPaths=E.clone(this.singleNestedPaths),e.childSchemas=
/*!
 * ignore
 */
function(t){for(var e=[],r=0,n=Object.keys(t.paths);r<n.length;r++){var o=n[r],i=t.paths[o];(i.$isMongooseDocumentArray||i.$isSingleNested)&&e.push({schema:i.schema,model:i.caster})}return e}
/*!
 * ignore
 */(e),e.virtuals=E.clone(this.virtuals),e.$globalPluginsApplied=this.$globalPluginsApplied,e.$isRootDiscriminator=this.$isRootDiscriminator,e.$implicitlyCreated=this.$implicitlyCreated,null!=this.discriminatorMapping&&(e.discriminatorMapping=Object.assign({},this.discriminatorMapping)),null!=this.discriminators&&(e.discriminators=Object.assign({},this.discriminators)),e.aliases=Object.assign({},this.aliases),e.on("init",(function(e){return t.emit("init",e)})),e},T.prototype.pick=function(t,e){var r=new T({},e||this.options);if(!Array.isArray(t))throw new f('Schema#pick() only accepts an array argument, got "'+i(t)+'"');var n,a=s(t);try{for(a.s();!(n=a.n()).done;){var u=n.value;if(this.nested[u])r.add(o({},u,v(this.tree,u)));else{var c=this.path(u);if(null==c)throw new f("Path `"+u+"` is not in the schema");r.add(o({},u,c))}}}catch(t){a.e(t)}finally{a.f()}return r},T.prototype.defaultOptions=function(t){t&&!1===t.safe&&(t.safe={w:0}),t&&t.safe&&0===t.safe.w&&(t.versionKey=!1),this._userProvidedOptions=null==t?{}:E.clone(t);var e=v(this,"base.options",{});if((t=E.options({strict:!("strict"in e)||e.strict,strictQuery:"strictQuery"in e&&e.strictQuery,bufferCommands:!0,capped:!1,versionKey:"__v",optimisticConcurrency:!1,discriminatorKey:"__t",minimize:!0,autoIndex:null,shardKey:null,read:null,validateBeforeSave:!0,noId:!1,_id:!0,noVirtualId:!1,id:!0,typeKey:"type",typePojoToMixed:!("typePojoToMixed"in e)||e.typePojoToMixed},E.clone(t))).read&&(t.read=O(t.read)),t.optimisticConcurrency&&!t.versionKey)throw new f("Must set `versionKey` if using `optimisticConcurrency`");return t},T.prototype.add=function(t,e){if(t instanceof T||null!=t&&t.instanceOfSchema)return b(this,t),this;!1===t._id&&null==e&&(this.options._id=!1),e=e||"";for(var r=0,n=Object.keys(t);r<n.length;r++){var i=n[r],a=e+i;if(null==t[i])throw new TypeError("Invalid value for schema path `"+a+'`, got value "'+t[i]+'"');if("_id"!==i||!1!==t[i])if(t[i]instanceof d||"VirtualType"===v(t[i],"constructor.name",null))this.virtual(t[i]);else{if(Array.isArray(t[i])&&1===t[i].length&&null==t[i][0])throw new TypeError("Invalid value for schema Array path `"+a+'`, got value "'+t[i][0]+'"');if(E.isPOJO(t[i])||t[i]instanceof h)if(Object.keys(t[i]).length<1)e&&(this.nested[e.substr(0,e.length-1)]=!0),this.path(a,t[i]);else if(!t[i][this.options.typeKey]||"type"===this.options.typeKey&&t[i].type.type)this.nested[a]=!0,this.add(t[i],a+".");else if(!this.options.typePojoToMixed&&E.isPOJO(t[i][this.options.typeKey])){e&&(this.nested[e.substr(0,e.length-1)]=!0);var u=new T(t[i][this.options.typeKey],{typePojoToMixed:!1}),c=Object.assign({},t[i],o({},this.options.typeKey,u));this.path(e+i,c)}else e&&(this.nested[e.substr(0,e.length-1)]=!0),this.path(e+i,t[i]);else e&&(this.nested[e.substr(0,e.length-1)]=!0),this.path(e+i,t[i])}}return function(t,e){var r,n=s(e=e||Object.keys(t.paths));try{for(n.s();!(r=n.n()).done;){var o=r.value,i=v(t.paths[o],"options");if(null!=i){var a=t.paths[o].path,u=i.alias;if(u){if("string"!=typeof u)throw new Error("Invalid value for alias option on "+a+", got "+u);t.aliases[u]=a,t.virtual(u).get(function(t){return function(){return"function"==typeof this.get?this.get(t):this[t]}}(a)).set(function(t){return function(e){return this.$set(t,e)}}(a))}}}}catch(t){n.e(t)}finally{n.f()}}(this,Object.keys(t).map((function(t){return e?e+t:t}))),this},T.reserved=Object.create(null),T.prototype.reserved=T.reserved;var k=T.reserved;
/*!
 * ignore
 */
function C(t){return/\.\d+/.test(t)?t.replace(/\.\d+\./g,".$.").replace(/\.\d+$/,".$"):t}
/*!
 * ignore
 */function R(t,e){for(var r=0,n=Object.keys(t.paths);r<n.length;r++){var o=n[r];if(o.includes(".$*"))if(new RegExp("^"+o.replace(/\.\$\*/g,"\\.[^.]+")+"$").test(e))return t.paths[o]}return null}
/*!
 * ignore. Deprecated re: #6405
 */
function D(t,e){var r=e.split(/\.(\d+)\.|\.(\d+)$/).filter(Boolean);if(r.length<2)return t.paths.hasOwnProperty(r[0])?t.paths[r[0]]:"adhocOrUndefined";var n=t.path(r[0]),o=!1;if(!n)return"adhocOrUndefined";for(var i=r.length-1,s=1;s<r.length;++s){o=!1;var a=r[s];if(s===i&&n&&!/\D/.test(a)){n=n.$isMongooseDocumentArray?n.$embeddedSchemaType:n instanceof u.Array?n.caster:void 0;break}if(/\D/.test(a)){if(!n||!n.schema){n=void 0;break}o="nested"===n.schema.pathType(a),n=n.schema.path(a)}else n instanceof u.Array&&s!==i&&(n=n.caster)}return t.subpaths[e]=n,n?"real":o?"nested":"adhocOrUndefined"}
/*!
 * ignore
 */k.prototype=k.emit=k.listeners=k.on=k.removeListener=k.collection=k.errors=k.get=k.init=k.isModified=k.isNew=k.populated=k.remove=k.save=k.schema=k.toObject=k.validate=1,T.prototype.path=function(t,e){var r=C(t);if(void 0===e){var n=function(t,e,r){if(t.paths.hasOwnProperty(e))return t.paths[e];if(t.subpaths.hasOwnProperty(r))return t.subpaths[r];if(t.singleNestedPaths.hasOwnProperty(r)&&"object"===i(t.singleNestedPaths[r]))return t.singleNestedPaths[r];return null}(this,t,r);if(null!=n)return n;var o=R(this,t);return null!=o?o:null!=(n=this.hasMixedParent(r))?n:/\.\d+\.?.*$/.test(t)?function(t,e){return D(t,e),t.subpaths[e]}(this,t):void 0}var a=t.split(".")[0];if(k[a])throw new Error("`"+a+"` may not be used as a schema pathname");"object"===i(e)&&E.hasUserDefinedProperty(e,"ref")&&j(e.ref,t);var u,c=t.split(/\./),l=c.pop(),f=this.tree,h="",y=s(c);try{for(y.s();!(u=y.n()).done;){var d=u.value;if(h=h+=(h.length>0?".":"")+d,f[d]||(this.nested[h]=!0,f[d]={}),"object"!==i(f[d])){var _="Cannot set nested path `"+t+"`. Parent path `"+h+"` already set to type "+f[d].name+".";throw new Error(_)}f=f[d]}}catch(t){y.e(t)}finally{y.f()}f[l]=E.clone(e),this.paths[t]=this.interpretAsType(t,e,this.options);var m=this.paths[t];if(m.$isSchemaMap){var v=t+".$*",g={type:{}};if(E.hasUserDefinedProperty(e,"of"))g=E.isPOJO(e.of)&&Object.keys(e.of).length>0&&!E.hasUserDefinedProperty(e.of,this.options.typeKey)?new T(e.of):e.of;this.paths[v]=this.interpretAsType(v,g,this.options),m.$__schemaType=this.paths[v]}if(m.$isSingleNested){for(var b=0,w=Object.keys(m.schema.paths);b<w.length;b++){var O=w[b];this.singleNestedPaths[t+"."+O]=m.schema.paths[O]}for(var S=0,A=Object.keys(m.schema.singleNestedPaths);S<A.length;S++){var $=A[S];this.singleNestedPaths[t+"."+$]=m.schema.singleNestedPaths[$]}for(var P=0,x=Object.keys(m.schema.subpaths);P<x.length;P++){var N=x[P];this.singleNestedPaths[t+"."+N]=m.schema.subpaths[N]}for(var B=0,M=Object.keys(m.schema.nested);B<M.length;B++){var I=M[B];this.singleNestedPaths[t+"."+I]="nested"}Object.defineProperty(m.schema,"base",{configurable:!0,enumerable:!1,writable:!1,value:this.base}),m.caster.base=this.base,this.childSchemas.push({schema:m.schema,model:m.caster})}else m.$isMongooseDocumentArray&&(Object.defineProperty(m.schema,"base",{configurable:!0,enumerable:!1,writable:!1,value:this.base}),m.casterConstructor.base=this.base,this.childSchemas.push({schema:m.schema,model:m.casterConstructor}));if(m.$isMongooseArray&&m.caster instanceof p){for(var F=t,L=m,U=[];L.$isMongooseArray;)F+=".$",L.$isMongooseDocumentArray?(L.$embeddedSchemaType._arrayPath=F,L.$embeddedSchemaType._arrayParentPath=t,L=L.$embeddedSchemaType.clone()):(L.caster._arrayPath=F,L.caster._arrayParentPath=t,L=L.caster.clone()),L.path=F,U.push(L);for(var V=0,q=U;V<q.length;V++){var W=q[V];this.subpaths[W.path]=W}}if(m.$isMongooseDocumentArray){for(var H=0,Y=Object.keys(m.schema.paths);H<Y.length;H++){var K=Y[H];this.subpaths[t+"."+K]=m.schema.paths[K],m.schema.paths[K].$isUnderneathDocArray=!0}for(var z=0,Q=Object.keys(m.schema.subpaths);z<Q.length;z++){var J=Q[z];this.subpaths[t+"."+J]=m.schema.subpaths[J],m.schema.subpaths[J].$isUnderneathDocArray=!0}for(var G=0,X=Object.keys(m.schema.singleNestedPaths);G<X.length;G++){var Z=X[G];"object"===i(m.schema.singleNestedPaths[r])&&(this.subpaths[t+"."+Z]=m.schema.singleNestedPaths[Z],m.schema.singleNestedPaths[Z].$isUnderneathDocArray=!0)}}return this},Object.defineProperty(T.prototype,"base",{configurable:!0,enumerable:!1,writable:!0,value:null}),T.prototype.interpretAsType=function(t,e,r){if(e instanceof p){if(e.path===t)return e;var o=e.clone();return o.path=t,o}var s=null!=this.base?this.base.Schema.Types:T.Types;if(!(E.isPOJO(e)||e instanceof h)&&"Object"!==E.getFunctionName(e.constructor)){var a=e;(e={})[r.typeKey]=a}var u,c=!e[r.typeKey]||"type"===r.typeKey&&e.type.type?{}:e[r.typeKey];if(E.isPOJO(c)||"mixed"===c)return new s.Mixed(t,e);if(Array.isArray(c)||c===Array||"array"===c||c===s.Array){var l=c===Array||"array"===c?e.cast||e.of:c[0];if(l&&l.instanceOfSchema)return new s.DocumentArray(t,l,e);if(l&&l[r.typeKey]&&l[r.typeKey].instanceOfSchema)return new s.DocumentArray(t,l[r.typeKey],e,l);if(Array.isArray(l))return new s.Array(t,this.interpretAsType(t,l,r),e);if("string"==typeof l)l=s[l.charAt(0).toUpperCase()+l.substring(1)];else if(l&&(!l[r.typeKey]||"type"===r.typeKey&&l.type.type)&&E.isPOJO(l)){if(Object.keys(l).length){var f={minimize:r.minimize};r.typeKey&&(f.typeKey=r.typeKey),r.hasOwnProperty("strict")&&(f.strict=r.strict),r.hasOwnProperty("typePojoToMixed")&&(f.typePojoToMixed=r.typePojoToMixed),this._userProvidedOptions.hasOwnProperty("_id")?f._id=this._userProvidedOptions._id:T.Types.DocumentArray.defaultOptions&&null!=T.Types.DocumentArray.defaultOptions._id&&(f._id=T.Types.DocumentArray.defaultOptions._id);var y=new T(l,f);return y.$implicitlyCreated=!0,new s.DocumentArray(t,y,e)}return new s.Array(t,s.Mixed,e)}if(l&&(u="string"==typeof(c=!l[r.typeKey]||"type"===r.typeKey&&l.type.type?l:l[r.typeKey])?c:c.schemaName||E.getFunctionName(c),!s.hasOwnProperty(u)))throw new TypeError("Invalid schema configuration: "+"`".concat(u,"` is not a valid type within the array `").concat(t,"`.")+"See http://bit.ly/mongoose-schematypes for a list of valid schema types.");return new s.Array(t,l||s.Mixed,e,r)}if(c&&c.instanceOfSchema)return new s.Embedded(c,t,e);if((u=n.isBuffer(c)?"Buffer":"function"==typeof c||"object"===i(c)?c.schemaName||E.getFunctionName(c):null==c?""+c:c.toString())&&(u=u.charAt(0).toUpperCase()+u.substring(1)),"ObjectID"===u&&(u="ObjectId"),null==s[u])throw new TypeError("Invalid schema configuration: `".concat(u,"` is not ")+"a valid type at path `".concat(t,"`. See ")+"http://bit.ly/mongoose-schematypes for a list of valid schema types.");return new s[u](t,e)},T.prototype.eachPath=function(t){for(var e=Object.keys(this.paths),r=e.length,n=0;n<r;++n)t(e[n],this.paths[e[n]]);return this},T.prototype.requiredPaths=function(t){if(this._requiredpaths&&!t)return this._requiredpaths;for(var e=Object.keys(this.paths),r=e.length,n=[];r--;){var o=e[r];this.paths[o].isRequired&&n.push(o)}return this._requiredpaths=n,this._requiredpaths},T.prototype.indexedPaths=function(){return this._indexedpaths||(this._indexedpaths=this.indexes()),this._indexedpaths},T.prototype.pathType=function(t){var e=C(t);if(this.paths.hasOwnProperty(t))return"real";if(this.virtuals.hasOwnProperty(t))return"virtual";if(this.nested.hasOwnProperty(t))return"nested";if(this.subpaths.hasOwnProperty(e)||this.subpaths.hasOwnProperty(t))return"real";var r=this.singleNestedPaths.hasOwnProperty(e)||this.singleNestedPaths.hasOwnProperty(t);return r?"nested"===r?"nested":"real":null!=R(this,t)?"real":/\.\d+\.|\.\d+$/.test(t)?D(this,t):"adhocOrUndefined"},T.prototype.hasMixedParent=function(t){var e=t.split(/\./g);t="";for(var r=0;r<e.length;++r)if(t=r>0?t+"."+e[r]:e[r],this.paths.hasOwnProperty(t)&&this.paths[t]instanceof u.Mixed)return this.paths[t];return null},T.prototype.setupTimestamp=function(t){return S(this,t)},T.prototype.queue=function(t,e){return this.callQueue.push([t,e]),this},T.prototype.pre=function(t){if(t instanceof RegExp){var e,r=Array.prototype.slice.call(arguments,1),n=s(x);try{for(n.s();!(e=n.n()).done;){var o=e.value;t.test(o)&&this.pre.apply(this,[o].concat(r))}}catch(t){n.e(t)}finally{n.f()}return this}if(Array.isArray(t)){var i,a=Array.prototype.slice.call(arguments,1),u=s(t);try{for(u.s();!(i=u.n()).done;){var c=i.value;this.pre.apply(this,[c].concat(a))}}catch(t){u.e(t)}finally{u.f()}return this}return this.s.hooks.pre.apply(this.s.hooks,arguments),this},T.prototype.post=function(t){if(t instanceof RegExp){var e,r=Array.prototype.slice.call(arguments,1),n=s(x);try{for(n.s();!(e=n.n()).done;){var o=e.value;t.test(o)&&this.post.apply(this,[o].concat(r))}}catch(t){n.e(t)}finally{n.f()}return this}if(Array.isArray(t)){var i,a=Array.prototype.slice.call(arguments,1),u=s(t);try{for(u.s();!(i=u.n()).done;){var c=i.value;this.post.apply(this,[c].concat(a))}}catch(t){u.e(t)}finally{u.f()}return this}return this.s.hooks.post.apply(this.s.hooks,arguments),this},T.prototype.plugin=function(t,e){if("function"!=typeof t)throw new Error('First param to `schema.plugin()` must be a function, got "'+i(t)+'"');if(e&&e.deduplicate){var r,n=s(this.plugins);try{for(n.s();!(r=n.n()).done;){if(r.value.fn===t)return this}}catch(t){n.e(t)}finally{n.f()}}return this.plugins.push({fn:t,opts:e}),t(this,e),this},T.prototype.method=function(t,e,r){if("string"!=typeof t)for(var n in t)this.methods[n]=t[n],this.methodOptions[n]=E.clone(r);else this.methods[t]=e,this.methodOptions[t]=E.clone(r);return this},T.prototype.static=function(t,e){if("string"!=typeof t)for(var r in t)this.statics[r]=t[r];else this.statics[t]=e;return this},T.prototype.index=function(t,e){return t||(t={}),e||(e={}),e.expires&&E.expires(e),this._indexes.push([t,e]),this},T.prototype.set=function(t,e,r){if(1===arguments.length)return this.options[t];switch(t){case"read":this.options[t]=O(e,r),this._userProvidedOptions[t]=this.options[t];break;case"safe":B(this.options,e),this._userProvidedOptions[t]=this.options[t];break;case"timestamps":this.setupTimestamp(e),this.options[t]=e,this._userProvidedOptions[t]=this.options[t];break;case"_id":this.options[t]=e,this._userProvidedOptions[t]=this.options[t],e&&!this.paths._id?_(this):!e&&null!=this.paths._id&&this.paths._id.auto&&this.remove("_id");break;default:this.options[t]=e,this._userProvidedOptions[t]=this.options[t]}return this};
/*!
 * ignore
 */
var B=A.deprecate((function(t,e){t.safe=!1===e?{w:0}:e}),"Mongoose: The `safe` option for schemas is deprecated. Use the `writeConcern` option instead: http://bit.ly/mongoose-write-concern");T.prototype.get=function(t){return this.options[t]};var M="2d 2dsphere hashed text".split(" ");
/*!
 * ignore
 */
function I(t,e){var r,n=e.split("."),o=n.pop(),i=t.tree,a=s(n);try{for(a.s();!(r=a.n()).done;){i=i[r.value]}}catch(t){a.e(t)}finally{a.f()}delete i[o]}
/*!
 * ignore
 */
function F(t){return t.startsWith("$[")&&t.endsWith("]")}
/*!
 * Module exports.
 */Object.defineProperty(T,"indexTypes",{get:function(){return M},set:function(){throw new Error("Cannot overwrite Schema.indexTypes")}}),T.prototype.indexes=function(){return g(this)},T.prototype.virtual=function(t,e){var r=this;if(t instanceof d||null!=t&&"VirtualType"===t.constructor.name)return this.virtual(t.path,t.options);if(e=new y(e),E.hasUserDefinedProperty(e,["ref","refPath"])){if(null==e.localField)throw new Error("Reference virtuals require `localField` option");if(null==e.foreignField)throw new Error("Reference virtuals require `foreignField` option");this.pre("init",(function(r){if(w.has(t,r)){var n=w.get(t,r);this.$$populatedVirtuals||(this.$$populatedVirtuals={}),e.justOne||e.count?this.$$populatedVirtuals[t]=Array.isArray(n)?n[0]:n:this.$$populatedVirtuals[t]=Array.isArray(n)?n:null==n?[]:[n],w.unset(t,r)}}));var n=this.virtual(t);return n.options=e,n.set((function(r){this.$$populatedVirtuals||(this.$$populatedVirtuals={}),e.justOne||e.count?(this.$$populatedVirtuals[t]=Array.isArray(r)?r[0]:r,"object"!==i(this.$$populatedVirtuals[t])&&(this.$$populatedVirtuals[t]=e.count?r:null)):(this.$$populatedVirtuals[t]=Array.isArray(r)?r:null==r?[]:[r],this.$$populatedVirtuals[t]=this.$$populatedVirtuals[t].filter((function(t){return t&&"object"===i(t)})))})),"function"==typeof e.get&&n.get(e.get),n}var o=this.virtuals,s=t.split(".");if("real"===this.pathType(t))throw new Error('Virtual path "'+t+'" conflicts with a real path in the schema');o[t]=s.reduce((function(r,n,o){return r[n]||(r[n]=o===s.length-1?new d(e,t):{}),r[n]}),this.tree);for(var a=s[0],u=0;u<s.length-1;++u){if(null!=this.paths[a]&&this.paths[a].$isMongooseDocumentArray)if("break"===function(){var t=s.slice(u+1).join(".");return r.paths[a].schema.virtual(t).get((function(e,r,n){var o=n.__parentArray[m],i=a+"."+n.__index+"."+t;return o.get(i)})),"break"}())break;a+="."+s[u+1]}return o[t]},T.prototype.virtualpath=function(t){return this.virtuals.hasOwnProperty(t)?this.virtuals[t]:null},T.prototype.remove=function(t){return"string"==typeof t&&(t=[t]),Array.isArray(t)&&t.forEach((function(t){if(null!=this.path(t)||this.nested[t]){if(this.nested[t]){var e,r=s(Object.keys(this.paths).concat(Object.keys(this.nested)));try{for(r.s();!(e=r.n()).done;){var n=e.value;n.startsWith(t+".")&&(delete this.paths[n],delete this.nested[n],I(this,n))}}catch(t){r.e(t)}finally{r.f()}return delete this.nested[t],void I(this,t)}delete this.paths[t],I(this,t)}}),this),this},T.prototype.loadClass=function(t,e){return t===Object.prototype||t===Function.prototype||t.prototype.hasOwnProperty("$isMongooseModelPrototype")||(this.loadClass(Object.getPrototypeOf(t)),e||Object.getOwnPropertyNames(t).forEach((function(e){if(!e.match(/^(length|name|prototype)$/)){var r=Object.getOwnPropertyDescriptor(t,e);"function"==typeof r.value&&this.static(e,r.value)}}),this),Object.getOwnPropertyNames(t.prototype).forEach((function(r){if(!r.match(/^(constructor)$/)){var n=Object.getOwnPropertyDescriptor(t.prototype,r);e||"function"==typeof n.value&&this.method(r,n.value),"function"==typeof n.get&&this.virtual(r).get(n.get),"function"==typeof n.set&&this.virtual(r).set(n.set)}}),this)),this},
/*!
 * ignore
 */
T.prototype._getSchema=function(t){var e=this.path(t),r=[];if(e)return e.$fullPath=t,e;for(var n=t.split("."),o=0;o<n.length;++o)("$"===n[o]||F(n[o]))&&(n[o]="0");return function t(e,n){for(var o,i,s=e.length+1;s--;)if(i=e.slice(0,s).join("."),o=n.path(i)){if(r.push(i),o.caster){if(o.caster instanceof u.Mixed)return o.caster.$fullPath=r.join("."),o.caster;if(s!==e.length&&o.schema){var a=void 0;return"$"===e[s]||F(e[s])?s+1===e.length?o:((a=t(e.slice(s+1),o.schema))&&(a.$isUnderneathDocArray=a.$isUnderneathDocArray||!o.schema.$isSingleNested),a):((a=t(e.slice(s),o.schema))&&(a.$isUnderneathDocArray=a.$isUnderneathDocArray||!o.schema.$isSingleNested),a)}}else if(o.$isSchemaMap){return s+1>=e.length?o.$__schemaType:t(e.slice(s+1),o.$__schemaType.schema)}return o.$fullPath=r.join("."),o}}(n,this)},
/*!
 * ignore
 */
T.prototype._getPathType=function(t){if(this.path(t))return"real";return function t(e,r){for(var n,o,i=e.length+1;i--;){if(o=e.slice(0,i).join("."),n=r.path(o))return n.caster?n.caster instanceof u.Mixed?{schema:n,pathType:"mixed"}:i!==e.length&&n.schema?"$"===e[i]||F(e[i])?i===e.length-1?{schema:n,pathType:"nested"}:t(e.slice(i+1),n.schema):t(e.slice(i),n.schema):{schema:n,pathType:n.$isSingleNested?"nested":"array"}:{schema:n,pathType:"real"};if(i===e.length&&r.nested[o])return{schema:r,pathType:"nested"}}return{schema:n||r,pathType:"undefined"}}(t.split("."),this)},t.exports=e=T,T.Types=u=r(54),
/*!
 * ignore
 */
e.ObjectId=u.ObjectId}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n=r(2);function o(t,e){this.path=e,this.getters=[],this.setters=[],this.options=Object.assign({},t)}o.prototype._applyDefaultGetters=function(){if(!(this.getters.length>0||this.setters.length>0)){var t="$"+this.path;this.getters.push((function(){return this[t]})),this.setters.push((function(e){this[t]=e}))}},
/*!
 * ignore
 */
o.prototype.clone=function(){var t=new o(this.options,this.path);return t.getters=[].concat(this.getters),t.setters=[].concat(this.setters),t},o.prototype.get=function(t){return this.getters.push(t),this},o.prototype.set=function(t){return this.setters.push(t),this},o.prototype.applyGetters=function(t,e){n.hasUserDefinedProperty(this.options,["ref","refPath"])&&e.$$populatedVirtuals&&e.$$populatedVirtuals.hasOwnProperty(this.path)&&(t=e.$$populatedVirtuals[this.path]);for(var r=t,o=this.getters.length-1;o>=0;o--)r=this.getters[o].call(e,r,this,e);return r},o.prototype.applySetters=function(t,e){for(var r=t,n=this.setters.length-1;n>=0;n--)r=this.setters[n].call(e,r,this,e);return r},
/*!
 * exports
 */
t.exports=o},function(t,e,r){"use strict";
/*!
 * Module exports.
 */e.String=r(147),e.Number=r(78),e.Boolean=r(151),e.DocumentArray=r(152),e.Embedded=r(159),e.Array=r(55),e.Buffer=r(161),e.Date=r(163),e.ObjectId=r(166),e.Mixed=r(25),e.Decimal128=e.Decimal=r(168),e.Map=r(170),e.Oid=e.ObjectId,e.Object=e.Mixed,e.Bool=e.Boolean,e.ObjectID=e.ObjectId},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i,s,a=r(48),u=r(72),c=r(14),l=r(153),f=r(7),p=f.CastError,h=r(25),y=r(154),d=r(155),_=r(3),m=r(80),v=r(4),g=r(2),b=r(33).castToNumber,w=r(81),O=r(34),S=Symbol("mongoose#isNestedArray");function A(t,e,n,o){s||(s=r(56).Embedded);var i,a,u="type";if(o&&o.typeKey&&(u=o.typeKey),this.schemaOptions=o,e){var c={};g.isPOJO(e)&&(e[u]?(delete(c=g.clone(e))[u],e=e[u]):e=h),e===Object&&(e=h);var l="string"==typeof e?e:g.getFunctionName(e),p=r(54),y=p.hasOwnProperty(l)?p[l]:e;this.casterConstructor=y,this.casterConstructor instanceof A&&(this.casterConstructor[S]=!0),"function"!=typeof y||y.$isArraySubdocument||y.$isSchemaMap?this.caster=y:this.caster=new y(null,c),this.$embeddedSchemaType=this.caster,this.caster instanceof s||(this.caster.path=t)}if(this.$isMongooseArray=!0,f.call(this,t,n,"Array"),null!=this.defaultValue&&(i=this.defaultValue,a="function"==typeof i),!("defaultValue"in this)||void 0!==this.defaultValue){var d=function(){var t=[];return a?t=i.call(this):null!=i&&(t=t.concat(i)),t};d.$runBeforeSetters=!a,this.default(d)}}A.schemaName="Array",A.options={castNonArrays:!0},A.defaultOptions={},A.set=f.set,
/*!
 * Inherits from SchemaType.
 */
A.prototype=Object.create(f.prototype),A.prototype.constructor=A,A.prototype.OptionsConstructor=l,
/*!
 * ignore
 */
A._checkRequired=f.prototype.checkRequired,A.checkRequired=f.checkRequired,A.prototype.checkRequired=function(t,e){return f._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():A.checkRequired())(t)},A.prototype.enum=function(){for(var t=this;;){var e=_(t,"caster.instance");if("Array"!==e){if("String"!==e&&"Number"!==e)throw new Error("`enum` can only be set on an array of strings or numbers , not "+e);break}t=t.caster}var r=arguments;return!Array.isArray(arguments)&&g.isObject(arguments)&&(r=g.object.vals(r)),t.caster.enum.apply(t.caster,r),this},A.prototype.applyGetters=function(t,e){if(null!=e&&e.populated(this.path))return t;var r=f.prototype.applyGetters.call(this,t,e);if(Array.isArray(r))for(var n=r.length,o=0;o<n;++o)r[o]=this.caster.applyGetters(r[o],e);return r},A.prototype._applySetters=function(t,e,r,n){if(this.casterConstructor instanceof A&&A.options.castNonArrays&&!this[S]){for(var o=0,i=this;null!=i&&i instanceof A&&!i.$isMongooseDocumentArray;)++o,i=i.casterConstructor;if(null!=t&&t.length>0){var s=y(t);if(s.min===s.max&&s.max<o&&s.containsNonArrayItem)for(var a=s.max;a<o;++a)t=[t]}}return f.prototype._applySetters.call(this,t,e,r,n)},A.prototype.cast=function(t,e,n,o,s){var a,u;if(i||(i=r(56).Array),Array.isArray(t)){if(!t.length&&e){var l=e.schema.indexedPaths(),f=this.path;for(a=0,u=l.length;a<u;++a){var y=l[a][0][f];if("2dsphere"===y||"2d"===y)return}var d=this.path.endsWith(".coordinates")?this.path.substr(0,this.path.lastIndexOf(".")):null;if(null!=d)for(a=0,u=l.length;a<u;++a){if("2dsphere"===l[a][0][d])return}}if(t&&t.isMongooseArray?t&&t.isMongooseArray&&(t=i(t,_(s,"path",null)||this._arrayPath||this.path,e,this)):t=i(t,_(s,"path",null)||this._arrayPath||this.path,e,this),null!=e&&null!=e.$__&&e.populated(this.path)&&n)return t;var m=this.caster;if(m&&this.casterConstructor!==h)try{var g=t.length;for(a=0;a<g;a++){if("Number"===m.instance&&void 0===t[a])throw new c("Mongoose number arrays disallow storing undefined");var b={};m.$isMongooseArray&&(null!=s&&null!=s.arrayPath?b.arrayPath=s.arrayPath+"."+a:null!=this.caster._arrayParentPath&&(b.arrayPath=this.caster._arrayParentPath+"."+a)),t[a]=m.applySetters(t[a],e,n,void 0,b)}}catch(e){throw new p("["+e.kind+"]",v.inspect(t),this.path+"."+a,e,this)}return t}if(n||A.options.castNonArrays)return e&&n&&e.markModified(this.path),this.cast([t],e,n);throw new p("Array",v.inspect(t),this.path,null,this)},
/*!
 * Ignore
 */
A.prototype.discriminator=function(t,e){for(var r=this;r.$isMongooseArray&&!r.$isMongooseDocumentArray;)if(null==(r=r.casterConstructor)||"function"==typeof r)throw new c("You can only add an embedded discriminator on a document array, "+this.path+" is a plain array");return r.discriminator(t,e)},
/*!
 * ignore
 */
A.prototype.clone=function(){var t=Object.assign({},this.options),e=new this.constructor(this.path,this.caster,t,this.schemaOptions);return e.validators=this.validators.slice(),void 0!==this.requiredValidator&&(e.requiredValidator=this.requiredValidator),e},A.prototype.castForQuery=function(t,e){var r,n,o=this;if(2===arguments.length){if(!(r=this.$conditionalHandlers[t]))throw new Error("Can't use "+t+" with Array.");n=r.call(this,e)}else{n=t;var i=this.casterConstructor;if(n&&i.discriminators&&i.schema&&i.schema.options&&i.schema.options.discriminatorKey)if("string"==typeof n[i.schema.options.discriminatorKey]&&i.discriminators[n[i.schema.options.discriminatorKey]])i=i.discriminators[n[i.schema.options.discriminatorKey]];else{var s=O(i,n[i.schema.options.discriminatorKey]);s&&(i=s)}var a=this.casterConstructor.prototype,u=a&&(a.castForQuery||a.cast);!u&&i.castForQuery&&(u=i.castForQuery);var c=this.caster;Array.isArray(n)?(this.setters.reverse().forEach((function(t){n=t.call(o,n,o)})),n=n.map((function(t){return g.isObject(t)&&t.$elemMatch?t:u?t=u.call(c,t):null!=t?t=new i(t):t}))):u?n=u.call(c,n):null!=n&&(n=new i(n))}return n};var E=A.prototype.$conditionalHandlers={};function j(t){return function(e){if(!Array.isArray(e))throw new TypeError("conditional "+t+" requires an array");var r,o=[],i=n(e);try{for(i.s();!(r=i.n()).done;){var s=r.value;o.push(d(this.casterConstructor.schema,s))}}catch(t){i.e(t)}finally{i.f()}return o}}E.$all=function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){if(g.isObject(t)){var e={};return e[this.path]=t,d(this.casterConstructor.schema,e)[this.path]}return t}),this),this.castForQuery(t)},E.$options=String,E.$elemMatch=function(t){for(var e=Object.keys(t),r=e.length,n=0;n<r;++n){var o=e[n],i=t[o];m(o)&&null!=i&&(t[o]=this.castForQuery(o,i))}var s=_(this,"casterConstructor.schema.options.discriminatorKey"),a=_(this,"casterConstructor.schema.discriminators",{});return null!=s&&null!=t[s]&&null!=a[t[s]]?d(a[t[s]],t):d(this.casterConstructor.schema,t)},E.$geoIntersects=w.cast$geoIntersects,E.$or=j("$or"),E.$and=j("$and"),E.$nor=j("$nor"),E.$near=E.$nearSphere=w.cast$near,E.$within=E.$geoWithin=w.cast$within,E.$size=E.$minDistance=E.$maxDistance=b,E.$exists=a,E.$type=u,E.$eq=E.$gt=E.$gte=E.$lt=E.$lte=E.$ne=E.$regex=A.prototype.castForQuery,E.$nin=f.prototype.$conditionalHandlers.$nin,E.$in=f.prototype.$conditionalHandlers.$in,
/*!
 * Module exports.
 */
t.exports=A},function(t,e,r){"use strict";
/*!
 * Module exports.
 */e.Array=r(82),e.Buffer=r(85),e.Document=e.Embedded=r(26),e.DocumentArray=r(18),e.Decimal128=r(20),e.ObjectId=r(13),e.Map=r(87),e.Subdocument=r(89)},function(t,e,r){"use strict";var n,o=r(0).documentSchemaSymbol,i=r(3),s=r(17).internalToObjectOptions,a=r(2),u=r(0).getSymbol,c=r(0).scopeSymbol;
/*!
 * Compiles schemas.
 */
function l(t,e,o,i){n=n||r(6);for(var s,u,c=Object.keys(t),l=c.length,p=0;p<l;++p){s=t[u=c[p]],f(u,a.isPOJO(s)&&Object.keys(s).length&&(!s[i.typeKey]||"type"===i.typeKey&&s.type.type)?s:null,e,o,c,i)}}
/*!
 * Defines the accessor named prop on the incoming prototype.
 */function f(t,e,f,p,h,y){n=n||r(6);var d=(p?p+".":"")+t;p=p||"",e?Object.defineProperty(f,t,{enumerable:!0,configurable:!0,get:function(){var t,r,s=this;if(this.$__.getters||(this.$__.getters={}),!this.$__.getters[d]){var u=Object.create(n.prototype,(t=this,r={},Object.getOwnPropertyNames(t).forEach((function(e){r[e]=Object.getOwnPropertyDescriptor(t,e),r[e].get?delete r[e]:r[e].enumerable=-1===["isNew","$__","errors","_doc","$locals","$op","__parentArray","__index","$isDocumentArrayElement"].indexOf(e)})),r));p||(u.$__[c]=this),u.$__.nestedPath=d,Object.defineProperty(u,"schema",{enumerable:!1,configurable:!0,writable:!1,value:f.schema}),Object.defineProperty(u,o,{enumerable:!1,configurable:!0,writable:!1,value:f.schema}),Object.defineProperty(u,"toObject",{enumerable:!1,configurable:!0,writable:!1,value:function(){return a.clone(s.get(d,null,{virtuals:i(this,"schema.options.toObject.virtuals",null)}))}}),Object.defineProperty(u,"$__get",{enumerable:!1,configurable:!0,writable:!1,value:function(){return s.get(d,null,{virtuals:i(this,"schema.options.toObject.virtuals",null)})}}),Object.defineProperty(u,"toJSON",{enumerable:!1,configurable:!0,writable:!1,value:function(){return s.get(d,null,{virtuals:i(s,"schema.options.toJSON.virtuals",null)})}}),Object.defineProperty(u,"$__isNested",{enumerable:!1,configurable:!0,writable:!1,value:!0});var h=Object.freeze({minimize:!0,virtuals:!1,getters:!1,transform:!1});Object.defineProperty(u,"$isEmpty",{enumerable:!1,configurable:!0,writable:!1,value:function(){return 0===Object.keys(this.get(d,null,h)||{}).length}}),Object.defineProperty(u,"$__parent",{enumerable:!1,configurable:!0,writable:!1,value:this}),l(e,u,d,y),this.$__.getters[d]=u}return this.$__.getters[d]},set:function(t){null!=t&&t.$__isNested?t=t.$__get():t instanceof n&&!t.$__isNested&&(t=t.toObject(s)),(this.$__[c]||this).$set(d,t)}}):Object.defineProperty(f,t,{enumerable:!0,configurable:!0,get:function(){return this[u].call(this.$__[c]||this,d)},set:function(t){this.$set.call(this.$__[c]||this,d,t)}})}
/*!
 * exports
 */
e.compile=l,e.defineKey=f},function(t,e,r){"use strict";
/*!
 * ignore
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return null==t||("object"!==n(t)||!("$meta"in t)&&!("$slice"in t))}},function(t,e,r){"use strict";(function(e){if(void 0!==e.Map)t.exports=e.Map,t.exports.Map=e.Map;else{var r=function(t){this._keys=[],this._values={};for(var e=0;e<t.length;e++)if(null!=t[e]){var r=t[e],n=r[0],o=r[1];this._keys.push(n),this._values[n]={v:o,i:this._keys.length-1}}};r.prototype.clear=function(){this._keys=[],this._values={}},r.prototype.delete=function(t){var e=this._values[t];return null!=e&&(delete this._values[t],this._keys.splice(e.i,1),!0)},r.prototype.entries=function(){var t=this,e=0;return{next:function(){var r=t._keys[e++];return{value:void 0!==r?[r,t._values[r].v]:void 0,done:void 0===r}}}},r.prototype.forEach=function(t,e){e=e||this;for(var r=0;r<this._keys.length;r++){var n=this._keys[r];t.call(e,this._values[n].v,n,e)}},r.prototype.get=function(t){return this._values[t]?this._values[t].v:void 0},r.prototype.has=function(t){return null!=this._values[t]},r.prototype.keys=function(){var t=this,e=0;return{next:function(){var r=t._keys[e++];return{value:void 0!==r?r:void 0,done:void 0===r}}}},r.prototype.set=function(t,e){return this._values[t]?(this._values[t].v=e,this):(this._keys.push(t),this._values[t]={v:e,i:this._keys.length-1},this)},r.prototype.values=function(){var t=this,e=0;return{next:function(){var r=t._keys[e++];return{value:void 0!==r?t._values[r].v:void 0,done:void 0===r}}}},Object.defineProperty(r.prototype,"size",{enumerable:!0,get:function(){return this._keys.length}}),t.exports=r,t.exports.Map=r}}).call(this,r(11))},function(t,e){var r=function t(e){if(!(this instanceof t))return new t(e);this._bsontype="Int32",this.value=e};r.prototype.valueOf=function(){return this.value},r.prototype.toJSON=function(){return this.value},t.exports=r,t.exports.Int32=r},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(6),o=r(179),i=!1;t.exports=function(){return i?o:n},
/*!
 * ignore
 */
t.exports.setBrowser=function(t){i=t}},function(t,e){t.exports=function(t,e,r){var n=[],o=t.length;if(0===o)return n;var i=e<0?Math.max(0,e+o):e||0;for(void 0!==r&&(o=r<0?r+o:r);o-- >i;)n[o-i]=t[o];return n}},function(t,e,r){
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var n=r(1),o=n.Buffer;function i(t,e){for(var r in t)e[r]=t[r]}function s(t,e,r){return o(t,e,r)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?t.exports=n:(i(n,e),e.Buffer=s),s.prototype=Object.create(o.prototype),i(o,s),s.from=function(t,e,r){if("number"==typeof t)throw new TypeError("Argument must not be a number");return o(t,e,r)},s.alloc=function(t,e,r){if("number"!=typeof t)throw new TypeError("Argument must be a number");var n=o(t);return void 0!==e?"string"==typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},s.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return o(t)},s.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=Object.prototype.toString;t.exports=function(t){if("object"!=r(e=t)||"[object RegExp]"!=n.call(e))throw new TypeError("Not a RegExp");var e,o=[];t.global&&o.push("g"),t.multiline&&o.push("m"),t.ignoreCase&&o.push("i"),t.dotAll&&o.push("s"),t.unicode&&o.push("u"),t.sticky&&o.push("y");var i=new RegExp(t.source,o.join(""));return"number"==typeof t.lastIndex&&(i.lastIndex=t.lastIndex),i}},function(t,e,r){"use strict";t.exports=function(t){return t.name?t.name:(t.toString().trim().match(/^function\s*([^\s(]+)/)||[])[1]}},function(t,e,r){"use strict";var n=r(3);
/*!
 * Get the bson type, if it exists
 */t.exports=function(t,e){return n(t,"_bsontype",void 0)===e}},function(t,e,r){"use strict";(function(e){
/*!
 * ignore
 */
var n=r(22),o=r(116),i={_promise:null,get:function(){return i._promise},set:function(t){n.ok("function"==typeof t,"mongoose.Promise must be a function, got ".concat(t)),i._promise=t,o.Promise=t}};
/*!
 * Use native promises by default
 */
i.set(e.Promise),t.exports=i}).call(this,r(11))},function(t,e,r){"use strict";(function(t,n){
/*!
 * Module dependencies.
 */
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=r(118).Buffer,s=r(64),a=["__proto__","constructor","prototype"],u=e.clone=function t(r,n){if(null==r)return r;if(Array.isArray(r))return e.cloneArray(r,n);if(r.constructor){if(/ObjectI[dD]$/.test(r.constructor.name))return"function"==typeof r.clone?r.clone():new r.constructor(r.id);if("ReadPreference"===r.constructor.name)return new r.constructor(r.mode,t(r.tags,n));if("Binary"==r._bsontype&&r.buffer&&r.value)return"function"==typeof r.clone?r.clone():new r.constructor(r.value(!0),r.sub_type);if("Date"===r.constructor.name||"Function"===r.constructor.name)return new r.constructor(+r);if("RegExp"===r.constructor.name)return s(r);if("Buffer"===r.constructor.name)return e.cloneBuffer(r)}return l(r)?e.cloneObject(r,n):r.valueOf?r.valueOf():void 0};
/*!
 * ignore
 */
e.cloneObject=function(t,e){for(var r,n,o=e&&e.minimize,i={},s=0,c=Object.keys(t);s<c.length;s++){var l=c[s];-1===a.indexOf(l)&&(n=u(t[l],e),o&&void 0===n||(r||(r=!0),i[l]=n))}return o?r&&i:i},e.cloneArray=function(t,e){for(var r=[],n=0,o=t.length;n<o;n++)r.push(u(t[n],e));return r},e.tick=function(t){if("function"==typeof t)return function(){var e=arguments;f((function(){t.apply(this,e)}))}},e.merge=function t(r,n){for(var o,i=Object.keys(n),s=i.length;s--;)o=i[s],-1===a.indexOf(o)&&(void 0===r[o]?r[o]=n[o]:e.isObject(n[o])?t(r[o],n[o]):r[o]=n[o])},e.mergeClone=function t(r,n){for(var o,i=Object.keys(n),s=i.length;s--;)void 0===r[o=i[s]]?r[o]=u(n[o]):e.isObject(n[o])?t(r[o],n[o]):r[o]=u(n[o])},e.readPref=function(t){switch(t){case"p":t="primary";break;case"pp":t="primaryPreferred";break;case"s":t="secondary";break;case"sp":t="secondaryPreferred";break;case"n":t="nearest"}return t},e.readConcern=function(t){if("string"==typeof t){switch(t){case"l":t="local";break;case"a":t="available";break;case"m":t="majority";break;case"lz":t="linearizable";break;case"s":t="snapshot"}t={level:t}}return t};var c=Object.prototype.toString;e.toString=function(t){return c.call(t)};var l=e.isObject=function(t){return"[object Object]"==e.toString(t)};e.isArray=function(t){return Array.isArray(t)||"object"==o(t)&&"[object Array]"==e.toString(t)},e.keys=Object.keys,e.create="function"==typeof Object.create?Object.create:function(t){if(arguments.length>1)throw new Error("Adding properties is not supported");function e(){}return e.prototype=t,new e},e.inherits=function(t,r){t.prototype=e.create(r.prototype),t.prototype.constructor=t};var f=e.soon="function"==typeof t?t:n.nextTick;e.cloneBuffer=function(t){var e=i.alloc(t.length);return t.copy(e,0,0,t.length),e},e.isArgumentsObject=function(t){return"[object Arguments]"===Object.prototype.toString.call(t)}}).call(this,r(69).setImmediate,r(8))},function(t,e,r){(function(t){var n=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},r(117),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,r(11))},function(t,e,r){"use strict";(function(t,r,n,o){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.isNode=void 0!==t&&"object"==i(r)&&"object"==(void 0===n?"undefined":i(n))&&"function"==typeof o&&t.argv,e.isMongo=!e.isNode&&"function"==typeof printjson&&"function"==typeof ObjectId&&"function"==typeof rs&&"function"==typeof sh,e.isBrowser=!e.isNode&&!e.isMongo&&"undefined"!=typeof window,e.type=e.isNode?"node":e.isMongo?"mongo":e.isBrowser?"browser":"unknown"}).call(this,r(8),r(123)(t),r(11),r(1).Buffer)},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=r(5),l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(u,t);var e,r,n,a=s(u);function u(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);var r=t.message;r||(r=c.messages.general.default);var n=f(r,t);return e=a.call(this,n),t=Object.assign({},t,{message:n}),e.properties=t,e.kind=t.type,e.path=t.path,e.value=t.value,e.reason=t.reason,e}
/*!
   * toString helper
   * TODO remove? This defaults to `${this.name}: ${this.message}`
   */return e=u,(r=[{key:"toString",value:function(){return this.message}
/*!
     * Ensure `name` and `message` show up in toJSON output re: gh-9296
     */},{key:"toJSON",value:function(){return Object.assign({name:this.name,message:this.message},this)}}])&&o(e.prototype,r),n&&o(e,n),u}(c);
/*!
 * Formats error messages
 */
function f(t,e){if("function"==typeof t)return t(e);for(var r=0,n=Object.keys(e);r<n.length;r++){var o=n[r];"message"!==o&&(t=t.replace("{"+o.toUpperCase()+"}",e[o]))}return t}
/*!
 * exports
 */Object.defineProperty(l.prototype,"name",{value:"ValidatorError"}),
/*!
 * The object used to define this validator. Not enumerable to hide
 * it from `require('util').inspect()` output re: gh-3925
 */
Object.defineProperty(l.prototype,"properties",{enumerable:!1,writable:!0,value:null}),l.prototype.formatMessage=f,t.exports=l},function(t,e,r){"use strict";
/*!
 * ignore
 */t.exports=function(t){if(Array.isArray(t)){if(!t.every((function(t){return"number"==typeof t||"string"==typeof t})))throw new Error("$type array values must be strings or numbers");return t}if("number"!=typeof t&&"string"!=typeof t)throw new Error("$type parameter must be number, string, or array of numbers and strings");return t}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=i(r);function r(t,n){var o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var i=Array.isArray(n)?"array":"primitive value";return(o=e.call(this,"Tried to set nested object field `"+t+"` to ".concat(i," `")+n+"` and strict mode is set to throw.")).path=t,o}return r}(r(5));Object.defineProperty(u.prototype,"name",{value:"ObjectExpectedError"}),t.exports=u},function(t,e,r){"use strict";t.exports=function(t){var e={_id:{auto:!0}};e._id[t.options.typeKey]="ObjectId",t.add(e)}},function(t,e,r){"use strict";t.exports=
/*!
 * ignore
 */
function(t,e){if(null==t)return null;if("boolean"==typeof t)return e;if("boolean"==typeof t[e])return t[e]?e:null;if(!(e in t))return e;return t[e]}},function(t,e,r){"use strict";var n=r(51),o=r(24);
/*!
 * Register hooks for this model
 *
 * @param {Model} model
 * @param {Schema} schema
 */
function i(t,e,r){var s={useErrorHandlers:!0,numCallbackParams:1,nullResultByDefault:!0,contextParameter:!0},a=(r=r||{}).decorateDoc?t:t.prototype;t.$appliedHooks=!0;for(var u=0,c=Object.keys(e.paths);u<c.length;u++){var l=c[u],f=e.paths[l],p=null;if(f.$isSingleNested)p=f.caster;else{if(!f.$isMongooseDocumentArray)continue;p=f.Constructor}if(!p.$appliedHooks&&(i(p,f.schema,r),null!=p.discriminators))for(var h=0,y=Object.keys(p.discriminators);h<y.length;h++){var d=y[h];i(p.discriminators[d],p.discriminators[d].schema,r)}}var _=e.s.hooks.filter((function(t){return"updateOne"===t.name||"deleteOne"===t.name?!!t.document:"remove"===t.name||"init"===t.name?null==t.document||!!t.document:null==t.query&&null==t.document||!1!==t.document})).filter((function(t){return!e.methods[t.name]||!t.fn[n.builtInMiddleware]}));t._middleware=_,a.$__originalValidate=a.$__originalValidate||a.$__validate;for(var m=0,v=["save","validate","remove","deleteOne"];m<v.length;m++){var g=v[m],b="validate"===g?"$__originalValidate":"$__".concat(g),w=_.createWrapper(g,a[b],null,s);a["$__".concat(g)]=w}a.$__init=_.createWrapperSync("init",a.$__init,null,s);for(var O=Object.keys(e.methods),S=Object.assign({},s,{checkForPromise:!0}),A=function(){var e=j[E];if(!_.hasHooks(e))return"continue";var r=a[e];a[e]=function(){var r=this,n=Array.prototype.slice.call(arguments),i=n.slice(-1).pop(),s="function"==typeof i?n.slice(0,n.length-1):n;return o(i,(function(t){return r["$__".concat(e)].apply(r,s.concat([t]))}),t.events)},a["$__".concat(e)]=_.createWrapper(e,r,null,S)},E=0,j=O;E<j.length;E++)A()}
/*!
 * ignore
 */
t.exports=i,
/*!
 * ignore
 */
i.middlewareFunctions=["deleteOne","save","validate","remove","updateOne","init"]},function(t,e,r){"use strict";var n=r(12);
/*!
 * Given a value, cast it to a string, or throw a `CastError` if the value
 * cannot be casted. `null` and `undefined` are considered valid.
 *
 * @param {Any} value
 * @param {String} [path] optional the path to set on the CastError
 * @return {string|null|undefined}
 * @throws {CastError}
 * @api private
 */t.exports=function(t,e){if(null==t)return t;if(t._id&&"string"==typeof t._id)return t._id;if(t.toString&&t.toString!==Object.prototype.toString&&!Array.isArray(t))return t.toString();throw new n("string",t,e)}},function(t,e,r){"use strict";(function(e){
/*!
 * Module requirements.
 */
var n,o=r(5),i=r(149),s=r(7),a=r(150),u=r(79),c=r(2),l=r(0).populateModelSymbol,f=s.CastError;function p(t,e){s.call(this,t,e,"Number")}
/*!
 * ignore
 */
function h(t){return this.cast(t)}p.get=s.get,p.set=s.set,
/*!
 * ignore
 */
p._cast=a,p.cast=function(t){return 0===arguments.length||(!1===t&&(t=this._defaultCaster),this._cast=t),this._cast},
/*!
 * ignore
 */
p._defaultCaster=function(t){if("number"!=typeof t)throw new Error;return t},p.schemaName="Number",p.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
p.prototype=Object.create(s.prototype),p.prototype.constructor=p,p.prototype.OptionsConstructor=i,
/*!
 * ignore
 */
p._checkRequired=function(t){return"number"==typeof t||t instanceof Number},p.checkRequired=s.checkRequired,p.prototype.checkRequired=function(t,e){return s._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():p.checkRequired())(t)},p.prototype.min=function(t,e){if(this.minValidator&&(this.validators=this.validators.filter((function(t){return t.validator!==this.minValidator}),this)),null!=t){var r=e||o.messages.Number.min;r=r.replace(/{MIN}/,t),this.validators.push({validator:this.minValidator=function(e){return null==e||e>=t},message:r,type:"min",min:t})}return this},p.prototype.max=function(t,e){if(this.maxValidator&&(this.validators=this.validators.filter((function(t){return t.validator!==this.maxValidator}),this)),null!=t){var r=e||o.messages.Number.max;r=r.replace(/{MAX}/,t),this.validators.push({validator:this.maxValidator=function(e){return null==e||e<=t},message:r,type:"max",max:t})}return this},p.prototype.enum=function(t,e){return this.enumValidator&&(this.validators=this.validators.filter((function(t){return t.validator!==this.enumValidator}),this)),Array.isArray(t)||(t=c.isObject(t)?c.object.vals(t):Array.prototype.slice.call(arguments),e=o.messages.Number.enum),e=null==e?o.messages.Number.enum:e,this.enumValidator=function(e){return null==e||-1!==t.indexOf(e)},this.validators.push({validator:this.enumValidator,message:e,type:"enum",enumValues:t}),this},p.prototype.cast=function(t,o,i){if(s._isRef(this,t,o,i)){if(null==t)return t;if(n||(n=r(6)),t instanceof n)return t.$__.wasPopulated=!0,t;if("number"==typeof t)return t;if(e.isBuffer(t)||!c.isObject(t))throw new f("Number",t,this.path,null,this);var a=o.$__fullPath(this.path),u=new((o.ownerDocument?o.ownerDocument():o).populated(a,!0).options[l])(t);return u.$__.wasPopulated=!0,u}var h,y=t&&void 0!==t._id?t._id:t;h="function"==typeof this._castFunction?this._castFunction:"function"==typeof this.constructor.cast?this.constructor.cast():p.cast();try{return h(y)}catch(t){throw new f("Number",y,this.path,t,this)}},p.prototype.$conditionalHandlers=c.options(s.prototype.$conditionalHandlers,{$bitsAllClear:u,$bitsAnyClear:u,$bitsAllSet:u,$bitsAnySet:u,$gt:h,$gte:h,$lt:h,$lte:h,$mod:function(t){var e=this;return Array.isArray(t)?t.map((function(t){return e.cast(t)})):[this.cast(t)]}}),p.prototype.castForQuery=function(t,e){var r;if(2===arguments.length){if(!(r=this.$conditionalHandlers[t]))throw new f("number",e,this.path,null,this);return r.call(this,e)}return e=this._castForQuery(t)},
/*!
 * Module exports.
 */
t.exports=p}).call(this,r(1).Buffer)},function(t,e,r){"use strict";(function(e){
/*!
 * Module requirements.
 */
var n=r(12);
/*!
 * ignore
 */
/*!
 * ignore
 */
function o(t,e){var r=Number(e);if(isNaN(r))throw new n("number",e,t);return r}t.exports=function(t){var r=this;return Array.isArray(t)?t.map((function(t){return o(r.path,t)})):e.isBuffer(t)?t:o(r.path,t)}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n=new Set(["$ref","$id","$db"]);t.exports=function(t){return t.startsWith("$")&&!n.has(t)}},function(t,e,r){"use strict";
/*!
 * Module requirements.
 */var n=r(33).castArraysOfNumbers,o=r(33).castToNumber;function i(t,e){switch(t.$geometry.type){case"Polygon":case"LineString":case"Point":n(t.$geometry.coordinates,e)}return s(e,t),t}function s(t,e){e.$maxDistance&&(e.$maxDistance=o.call(t,e.$maxDistance)),e.$minDistance&&(e.$minDistance=o.call(t,e.$minDistance))}
/*!
 * ignore
 */
e.cast$geoIntersects=function(t){if(!t.$geometry)return;return i(t,this),t},e.cast$near=function(t){var e=r(55);if(Array.isArray(t))return n(t,this),t;if(s(this,t),t&&t.$geometry)return i(t,this);if(!Array.isArray(t))throw new TypeError("$near must be either an array or an object with a $geometry property");return e.prototype.castForQuery.call(this,t)},e.cast$within=function(t){var e=this;if(s(this,t),t.$box||t.$polygon){var r=t.$box?"$box":"$polygon";t[r].forEach((function(t){if(!Array.isArray(t))throw new TypeError("Invalid $within $box argument. Expected an array, received "+t);t.forEach((function(r,n){t[n]=o.call(e,r)}))}))}else if(t.$center||t.$centerSphere){var n=t.$center?"$center":"$centerSphere";t[n].forEach((function(r,i){Array.isArray(r)?r.forEach((function(t,n){r[n]=o.call(e,t)})):t[n][i]=o.call(e,r)}))}else t.$geometry&&i(t,this);return t}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(83),o=r(6),i=r(0).arrayAtomicsSymbol,s=r(0).arrayParentSymbol,a=r(0).arrayPathSymbol,u=r(0).arraySchemaSymbol,c=Array.prototype.push;
/*!
 * Module exports.
 */
t.exports=function(t,e,r,l){var f=new n;if(f[i]={},Array.isArray(t)){for(var p=t.length,h=0;h<p;++h)c.call(f,t[h]);null!=t[i]&&(f[i]=t[i])}return f[a]=e,f[u]=void 0,r&&r instanceof o&&(f[s]=r,f[u]=l||r.schema.path(e)),f}},function(t,e,r){"use strict";(function(e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return f(t,arguments,y(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)})(t)}function f(t,e,r){return(f=p()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o}).apply(null,arguments)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=r(6),_=r(26),m=r(14),v=r(13),g=r(84),b=r(3),w=r(17).internalToObjectOptions,O=r(2),S=r(4),A=r(0).arrayAtomicsSymbol,E=r(0).arrayParentSymbol,j=r(0).arrayPathSymbol,$=r(0).arraySchemaSymbol,P=r(0).populateModelSymbol,x=Symbol("mongoose#Array#sliced"),N=Array.prototype.push,T=Symbol("mongoose#MongooseCoreArray#validators"),k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(S,t);var r,n,o,i,l,f=(r=S,n=p(),function(){var t,e=y(r);if(n){var o=y(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return c(this,t)});function S(){return s(this,S),f.apply(this,arguments)}return o=S,(i=[{key:"isMongooseArray",get:function(){return!0}},{key:"validators",get:function(){return this[T]},set:function(t){this[T]=t}},{key:"$__getAtomics",value:function(){var t=[],e=Object.keys(this[A]||{}),r=e.length,n=Object.assign({},w,{_isNested:!0});if(0===r)return t[0]=["$set",this.toObject(n)],t;for(;r--;){var o=e[r],i=this[A][o];O.isMongooseObject(i)?i=i.toObject(n):Array.isArray(i)?i=this.toObject.call(i,n):null!=i&&Array.isArray(i.$each)?i.$each=this.toObject.call(i.$each,n):null!=i&&"function"==typeof i.valueOf&&(i=i.valueOf()),"$addToSet"===o&&(i={$each:i}),t.push([o,i])}return t}
/*!
     * ignore
     */},{key:"$atomics",value:function(){return this[A]}
/*!
     * ignore
     */},{key:"$parent",value:function(){return this[E]}
/*!
     * ignore
     */},{key:"$path",value:function(){return this[j]}},{key:"$shift",value:function(){if(this._registerAtomic("$pop",-1),this._markModified(),!this._shifted)return this._shifted=!0,[].shift.call(this)}},{key:"$pop",value:function(){if(this._registerAtomic("$pop",1),this._markModified(),!this._popped)return this._popped=!0,[].pop.call(this)}
/*!
     * ignore
     */},{key:"$schema",value:function(){return this[$]}},{key:"_cast",value:function(t){var r,n=!1;return this[E]&&(n=this[E].populated(this[j],!0)),n&&null!=t?(r=n.options[P],(e.isBuffer(t)||t instanceof v||!O.isObject(t))&&(t={_id:t}),t.schema&&t.schema.discriminatorMapping&&void 0!==t.schema.discriminatorMapping.key||(t=new r(t)),this[$].caster.applySetters(t,this[E],!0)):this[$].caster.applySetters(t,this[E],!1)}},{key:"_mapCast",value:function(t,e){return this._cast(t,this.length+e)}},{key:"_markModified",value:function(t,e){var r,n=this[E];if(n){if(r=this[j],arguments.length&&(r=null!=e?r+"."+this.indexOf(t)+"."+e:r+"."+t),null!=r&&r.endsWith(".$"))return this;n.markModified(r,arguments.length>0?t:n)}return this}},{key:"_registerAtomic",value:function(t,e){if(!this[x]){if("$set"===t)return this[A]={$set:e},g(this[E],this[j]),this._markModified(),this;var r,n=this[A];if("$pop"===t&&!("$pop"in n)){var o=this;this[E].once("save",(function(){o._popped=o._shifted=null}))}if(this[A].$set||Object.keys(n).length&&!(t in n))return this[A]={$set:this},this;if("$pullAll"===t||"$addToSet"===t)n[t]||(n[t]=[]),n[t]=n[t].concat(e);else if("$pullDocs"===t){var i=n.$pull||(n.$pull={});e[0]instanceof _?(r=i.$or||(i.$or=[]),Array.prototype.push.apply(r,e.map((function(t){return t.toObject({transform:!1,virtuals:!1})})))):(r=i._id||(i._id={$in:[]})).$in=r.$in.concat(e)}else"$push"===t?(n.$push=n.$push||{$each:[]},null!=e&&O.hasUserDefinedProperty(e,"$each")?n.$push=e:n.$push.$each=n.$push.$each.concat(e)):n[t]=e;return this}}},{key:"addToSet",value:function(){C(this,arguments);var t=[].map.call(arguments,this._mapCast,this);t=this[$].applySetters(t,this[E]);var e=[],r="";return t[0]instanceof _?r="doc":t[0]instanceof Date&&(r="date"),t.forEach((function(t){var n,o=+t;switch(r){case"doc":n=this.some((function(e){return e.equals(t)}));break;case"date":n=this.some((function(t){return+t===o}));break;default:n=~this.indexOf(t)}n||([].push.call(this,t),this._registerAtomic("$addToSet",t),this._markModified(),[].push.call(e,t))}),this),e}},{key:"hasAtomics",value:function(){return O.isPOJO(this[A])?Object.keys(this[A]).length:0}},{key:"includes",value:function(t,e){return-1!==this.indexOf(t,e)}},{key:"indexOf",value:function(t,e){t instanceof v&&(t=t.toString()),e=null==e?0:e;for(var r=this.length,n=e;n<r;++n)if(t==this[n])return n;return-1}},{key:"inspect",value:function(){return JSON.stringify(this)}},{key:"nonAtomicPush",value:function(){var t=[].map.call(arguments,this._mapCast,this),e=[].push.apply(this,t);return this._registerAtomic("$set",this),this._markModified(),e}},{key:"pop",value:function(){var t=[].pop.call(this);return this._registerAtomic("$set",this),this._markModified(),t}},{key:"pull",value:function(){for(var t,e=[].map.call(arguments,this._cast,this),r=this[E].get(this[j]),n=r.length;n--;)if((t=r[n])instanceof d){var o=e.some((function(e){return t.equals(e)}));o&&[].splice.call(r,n,1)}else~r.indexOf.call(e,t)&&[].splice.call(r,n,1);return e[0]instanceof _?this._registerAtomic("$pullDocs",e.map((function(t){return t.$__getValue("_id")||t}))):this._registerAtomic("$pullAll",e),this._markModified(),g(this[E],this[j])>0&&this._registerAtomic("$set",this),this}},{key:"push",value:function(){var t=arguments,e=t,r=null!=t[0]&&O.hasUserDefinedProperty(t[0],"$each");if(r&&(e=t[0],t=t[0].$each),null==this[$])return N.apply(this,t);C(this,t);var n,o=this[E];t=[].map.call(t,this._mapCast,this),t=this[$].applySetters(t,o,void 0,void 0,{skipDocumentArrayCast:!0});var i=this[A];if(r){if(e.$each=t,b(i,"$push.$each.length",0)>0&&i.$push.$position!=i.$position)throw new m("Cannot call `Array#push()` multiple times with different `$position`");null!=e.$position?([].splice.apply(this,[e.$position,0].concat(t)),n=this.length):n=[].push.apply(this,t)}else{if(b(i,"$push.$each.length",0)>0&&null!=i.$push.$position)throw new m("Cannot call `Array#push()` multiple times with different `$position`");e=t,n=[].push.apply(this,t)}return this._registerAtomic("$push",e),this._markModified(),n}},{key:"remove",value:function(){return this.pull.apply(this,arguments)}},{key:"set",value:function(t,e){var r=this._cast(e,t);return this[t]=r,this._markModified(t),this}},{key:"shift",value:function(){var t=[].shift.call(this);return this._registerAtomic("$set",this),this._markModified(),t}},{key:"sort",value:function(){var t=[].sort.apply(this,arguments);return this._registerAtomic("$set",this),t}},{key:"splice",value:function(){var t;if(C(this,Array.prototype.slice.call(arguments,2)),arguments.length){var e;if(null==this[$])e=arguments;else{e=[];for(var r=0;r<arguments.length;++r)e[r]=r<2?arguments[r]:this._cast(arguments[r],arguments[0]+(r-2))}t=[].splice.apply(this,e),this._registerAtomic("$set",this)}return t}
/*!
     * ignore
     */},{key:"slice",value:function(){var t=u(y(S.prototype),"slice",this).apply(this,arguments);return t[E]=this[E],t[$]=this[$],t[A]=this[A],t[j]=this[j],t[x]=!0,t}
/*!
     * ignore
     */},{key:"filter",value:function(){var t=u(y(S.prototype),"filter",this).apply(this,arguments);return t[E]=this[E],t[$]=this[$],t[A]=this[A],t[j]=this[j],t}
/*!
     * ignore
     */},{key:"toBSON",value:function(){return this.toObject(w)}},{key:"toObject",value:function(t){return t&&t.depopulate?((t=O.clone(t))._isNested=!0,[].concat(this).map((function(e){return e instanceof d?e.toObject(t):e}))):[].concat(this)}},{key:"unshift",value:function(){var t;return C(this,arguments),null==this[$]?t=arguments:(t=[].map.call(arguments,this._cast,this),t=this[$].applySetters(t,this[E])),[].unshift.apply(this,t),this._registerAtomic("$set",this),this._markModified(),this.length}}])&&a(o.prototype,i),l&&a(o,l),S}(l(Array));
/*!
 * ignore
 */
function C(t,e){var r,n,i,s=null==t?null:b(t[$],"caster.options.ref",null);0===t.length&&e.length>0&&
/*!
 * ignore
 */
function(t,e){if(!e)return!1;var r,n=o(t);try{for(n.s();!(r=n.n()).done;){var i=r.value;if(null==i)return!1;var s=i.constructor;if(!(i instanceof d)||s.modelName!==e&&s.baseModelName!==e)return!1}}catch(t){n.e(t)}finally{n.f()}return!0}(e,s)&&t[E].populated(t[j],[],(r={},n=P,i=e[0].constructor,n in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r))}S.inspect.custom&&(k.prototype[S.inspect.custom]=k.prototype.inspect),t.exports=k}).call(this,r(1).Buffer)},function(t,e,r){"use strict";
/*!
 * ignore
 */t.exports=function(t,e,r){var n=(r=r||{}).skipDocArrays,o=0;if(!t)return o;for(var i=0,s=Object.keys(t.$__.activePaths.states.modify);i<s.length;i++){var a=s[i];if(n){var u=t.schema.path(a);if(u&&u.$isMongooseDocumentArray)continue}a.startsWith(e+".")&&(delete t.$__.activePaths.states.modify[a],++o)}return o}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(15).get().Binary,o=r(2),i=r(63).Buffer;function s(t,e,r){var n,a,c,l,f,p=arguments.length;return n=0===p||null==arguments[0]?0:t,Array.isArray(e)?(c=e[0],l=e[1]):a=e,f="number"==typeof n||n instanceof Number?i.alloc(n):i.from(n,a,r),o.decorate(f,s.mixin),f.isMongooseBuffer=!0,f[s.pathSymbol]=c,f[u]=l,f._subtype=0,f}var a=Symbol.for("mongoose#Buffer#_path"),u=Symbol.for("mongoose#Buffer#_parent");s.pathSymbol=a,
/*!
 * Inherit from Buffer.
 */
s.mixin={_subtype:void 0,_markModified:function(){var t=this[u];return t&&t.markModified(this[s.pathSymbol]),this},write:function(){var t=i.prototype.write.apply(this,arguments);return t>0&&this._markModified(),t},copy:function(t){var e=i.prototype.copy.apply(this,arguments);return t&&t.isMongooseBuffer&&t._markModified(),e}},
/*!
 * Compile other Buffer methods marking this buffer as modified.
 */
"writeUInt8 writeUInt16 writeUInt32 writeInt8 writeInt16 writeInt32 writeFloat writeDouble fill utf8Write binaryWrite asciiWrite set writeUInt16LE writeUInt16BE writeUInt32LE writeUInt32BE writeInt16LE writeInt16BE writeInt32LE writeInt32BE writeFloatLE writeFloatBE writeDoubleLE writeDoubleBE".split(" ").forEach((function(t){i.prototype[t]&&(s.mixin[t]=function(){var e=i.prototype[t].apply(this,arguments);return this._markModified(),e})})),s.mixin.toObject=function(t){var e="number"==typeof t?t:this._subtype||0;return new n(i.from(this),e)},s.mixin.toBSON=function(){return new n(this,this._subtype||0)},s.mixin.equals=function(t){if(!i.isBuffer(t))return!1;if(this.length!==t.length)return!1;for(var e=0;e<this.length;++e)if(this[e]!==t[e])return!1;return!0},s.mixin.subtype=function(t){if("number"!=typeof t)throw new TypeError("Invalid subtype. Expected a number");this._subtype!==t&&this._markModified(),this._subtype=t},
/*!
 * Module exports.
 */
s.Binary=n,t.exports=s},function(t,e,r){"use strict";var n=r(15).get().ObjectId,o=r(22);t.exports=function(t){if(null==t)return t;if(t instanceof n)return t;if(t._id){if(t._id instanceof n)return t._id;if(t._id.toString instanceof Function)return new n(t._id.toString())}if(t.toString instanceof Function)return new n(t.toString());o.ok(!1)}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return l(t,arguments,h(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,t)})(t)}function l(t,e,r){return(l=f()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&p(o,r.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=r(25),d=r(2).deepEqual,_=r(3),m=r(88),v=r(4),g=r(47),b=r(0).populateModelSymbol,w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(v,t);var e,r,n,i,c,l=(e=v,r=f(),function(){var t,n=h(e);if(r){var o=h(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return u(this,t)});function v(t,e,r,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v),null!=t&&"Object"===t.constructor.name&&(t=Object.keys(t).reduce((function(e,r){return e.concat([[r,t[r]]])}),[])),(o=l.call(this,t)).$__parent=null!=r&&null!=r.$__?r:null,o.$__path=e,o.$__schemaType=null==n?new y(e):n,o.$__runDeferred(),o}return n=v,(i=[{key:"$init",value:function(t,e){O(t),a(h(v.prototype),"set",this).call(this,t,e),null!=e&&e.$isSingleNested&&(e.$basePath=this.$__path+"."+t)}},{key:"$__set",value:function(t,e){a(h(v.prototype),"set",this).call(this,t,e)}},{key:"get",value:function(t,e){return!1===(e=e||{}).getters?a(h(v.prototype),"get",this).call(this,t):this.$__schemaType.applyGetters(a(h(v.prototype),"get",this).call(this,t),this.$__parent)}},{key:"set",value:function(t,e){if(O(t),e=m(e),null==this.$__schemaType)return this.$__deferred=this.$__deferred||[],void this.$__deferred.push({key:t,value:e});var r=this.$__path+"."+t,n=null!=this.$__parent&&this.$__parent.$__?this.$__parent.populated(r)||this.$__parent.populated(this.$__path):null,o=this.get(t);if(null!=n)null==e.$__&&(e=new n.options[b](e)),e.$__.wasPopulated=!0;else try{e=this.$__schemaType.applySetters(e,this.$__parent,!1,this.get(t),{path:r})}catch(t){if(null!=this.$__parent&&null!=this.$__parent.$__)return void this.$__parent.invalidate(r,t);throw t}a(h(v.prototype),"set",this).call(this,t,e),null!=e&&e.$isSingleNested&&(e.$basePath=this.$__path+"."+t);var i=this.$__parent;null==i||null==i.$__||d(e,o)||i.markModified(this.$__path+"."+t)}},{key:"clear",value:function(){a(h(v.prototype),"clear",this).call(this);var t=this.$__parent;null!=t&&t.markModified(this.$__path)}},{key:"delete",value:function(t){this.set(t,void 0),a(h(v.prototype),"delete",this).call(this,t)}},{key:"toBSON",value:function(){return new Map(this)}},{key:"toObject",value:function(t){if(_(t,"flattenMaps")){var e,r={},n=o(this.keys());try{for(n.s();!(e=n.n()).done;){var i=e.value;r[i]=this.get(i)}}catch(t){n.e(t)}finally{n.f()}return r}return new Map(this)}},{key:"toJSON",value:function(){var t,e={},r=o(this.keys());try{for(r.s();!(t=r.n()).done;){var n=t.value;e[n]=this.get(n)}}catch(t){r.e(t)}finally{r.f()}return e}},{key:"inspect",value:function(){return new Map(this)}},{key:"$__runDeferred",value:function(){if(this.$__deferred){var t,e=o(this.$__deferred);try{for(e.s();!(t=e.n()).done;){var r=t.value;this.set(r.key,r.value)}}catch(t){e.e(t)}finally{e.f()}this.$__deferred=null}}}])&&s(n.prototype,i),c&&s(n,c),v}(c(Map));
/*!
 * Since maps are stored as objects under the hood, keys must be strings
 * and can't contain any invalid characters
 */
function O(t){var e=n(t);if("string"!==e)throw new TypeError("Mongoose maps only support string keys, got ".concat(e));if(t.startsWith("$"))throw new Error('Mongoose maps do not support keys that start with "$", got "'.concat(t,'"'));if(t.includes("."))throw new Error('Mongoose maps do not support keys that contain ".", got "'.concat(t,'"'));if(g.has(t))throw new Error('Mongoose maps do not support reserved key name "'.concat(t,'"'))}v.inspect.custom&&Object.defineProperty(w.prototype,v.inspect.custom,{enumerable:!1,writable:!1,configurable:!1,value:w.prototype.inspect}),Object.defineProperty(w.prototype,"$__set",{enumerable:!1,writable:!0,configurable:!1}),Object.defineProperty(w.prototype,"$__parent",{enumerable:!1,writable:!0,configurable:!1}),Object.defineProperty(w.prototype,"$__path",{enumerable:!1,writable:!0,configurable:!1}),Object.defineProperty(w.prototype,"$__schemaType",{enumerable:!1,writable:!0,configurable:!1}),Object.defineProperty(w.prototype,"$isMongooseMap",{enumerable:!1,writable:!1,configurable:!1,value:!0}),Object.defineProperty(w.prototype,"$__deferredCalls",{enumerable:!1,writable:!1,configurable:!1,value:!0}),t.exports=w},function(t,e,r){"use strict";var n=r(2);t.exports=function(t){return n.isPOJO(t)&&null!=t.$__&&null!=t._doc?t._doc:t}},function(t,e,r){"use strict";function n(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=r(6),s=r(50),a=r(17).internalToObjectOptions,u=r(24),c=r(0).documentArrayParent;function l(t,e,r,o,s){var a=this;this.$isSingleNested=!0,null!=s&&null!=s.path&&(this.$basePath=s.path);var u=null!=s&&s.priorDoc,c=null;if(u&&(this._doc=Object.assign({},s.priorDoc._doc),delete this._doc[this.schema.options.discriminatorKey],c=Object.keys(s.priorDoc._doc||{}).filter((function(t){return t!==a.schema.options.discriminatorKey}))),null!=r&&(s=Object.assign({},s,{isNew:r.isNew,defaults:r.$__.$options.defaults})),i.call(this,t,e,o,s),u){var l,f=n(c);try{for(f.s();!(l=f.n()).done;){var p=l.value;if(!this.$__.activePaths.states.modify[p]&&!this.$__.activePaths.states.default[p]&&!this.$__.$setCalled.has(p)){var h=this.schema.path(p),y=null==h?void 0:h.getDefault(this);void 0===y?delete this._doc[p]:(this._doc[p]=y,this.$__.activePaths.default(p))}}}catch(t){f.e(t)}finally{f.f()}delete s.priorDoc,delete this.$__.$options.priorDoc}}t.exports=l,l.prototype=Object.create(i.prototype),l.prototype.toBSON=function(){return this.toObject(a)},l.prototype.save=function(t,e){var r=this;return"function"==typeof t&&(e=t,t={}),(t=t||{}).suppressWarning||console.warn("mongoose: calling `save()` on a subdoc does **not** save the document to MongoDB, it only runs save middleware. Use `subdoc.save({ suppressWarning: true })` to hide this warning if you're sure this behavior is right for your app."),u(e,(function(t){r.$__save(t)}))},l.prototype.$__save=function(t){var e=this;return s((function(){return t(null,e)}))},l.prototype.$isValid=function(t){return this.$__parent&&this.$basePath?this.$__parent.$isValid([this.$basePath,t].join(".")):i.prototype.$isValid.call(this,t)},l.prototype.markModified=function(t){if(i.prototype.markModified.call(this,t),this.$__parent&&this.$basePath){if(this.$__parent.isDirectModified(this.$basePath))return;this.$__parent.markModified([this.$basePath,t].join("."),this)}},l.prototype.isModified=function(t,e){var r=this;return this.$__parent&&this.$basePath?Array.isArray(t)||"string"==typeof t?(t=(t=Array.isArray(t)?t:t.split(" ")).map((function(t){return[r.$basePath,t].join(".")})),this.$__parent.isModified(t,e)):this.$__parent.isModified(this.$basePath):i.prototype.isModified.call(this,t,e)},l.prototype.$markValid=function(t){i.prototype.$markValid.call(this,t),this.$__parent&&this.$basePath&&this.$__parent.$markValid([this.$basePath,t].join("."))},
/*!
 * ignore
 */
l.prototype.invalidate=function(t,e,r){if(e!==this.ownerDocument().$__.validationError&&i.prototype.invalidate.call(this,t,e,r),this.$__parent&&this.$basePath)this.$__parent.invalidate([this.$basePath,t].join("."),e,r);else if("cast"===e.kind||"CastError"===e.name)throw e;return this.ownerDocument().$__.validationError},
/*!
 * ignore
 */
l.prototype.$ignore=function(t){i.prototype.$ignore.call(this,t),this.$__parent&&this.$basePath&&this.$__parent.$ignore([this.$basePath,t].join("."))},l.prototype.ownerDocument=function(){if(this.$__.ownerDocument)return this.$__.ownerDocument;var t=this.$__parent;if(!t)return this;for(;t.$__parent||t[c];)t=t.$__parent||t[c];return this.$__.ownerDocument=t,this.$__.ownerDocument},l.prototype.parent=function(){return this.$__parent},l.prototype.$parent=l.prototype.parent,
/*!
 * no-op for hooks
 */
l.prototype.$__remove=function(t){return t(null,this)},l.prototype.remove=function(t,e){"function"==typeof t&&(e=t,t=null),
/*!
 * Registers remove event listeners for triggering
 * on subdocuments.
 *
 * @param {Subdocument} sub
 * @api private
 */
function(t){var e=t.ownerDocument();function r(){e.removeListener("save",r),e.removeListener("remove",r),t.emit("remove",t),t.constructor.emit("remove",t),e=t=null}e.on("save",r),e.on("remove",r)}(this),t&&t.noop||this.$__parent.set(this.$basePath,null),"function"==typeof e&&e(null)},
/*!
 * ignore
 */
l.prototype.populate=function(){throw new Error('Mongoose does not support calling populate() on nested docs. Instead of `doc.nested.populate("path")`, use `doc.populate("nested.path")`')}},function(t,e,r){"use strict";function n(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=r(25),s=r(57).defineKey,a=r(3),u=r(2),c={toJSON:!0,toObject:!0,_id:!0,id:!0};
/*!
 * ignore
 */
t.exports=function(t,e,r,o,l){if(!r||!r.instanceOfSchema)throw new Error("You must pass a valid discriminator Schema");if(t.schema.discriminatorMapping&&!t.schema.discriminatorMapping.isRoot)throw new Error('Discriminator "'+e+'" can only be a discriminator of the root model');if(l){var f=a(t.base,"options.applyPluginsToDiscriminators",!1);t.base._applyPlugins(r,{skipTopLevel:!f})}var p=t.schema.options.discriminatorKey,h=t.schema.path(p);if(null!=h)u.hasUserDefinedProperty(h.options,"select")||(h.options.select=!0),h.options.$skipDiscriminatorCheck=!0;else{var y={};y[p]={default:void 0,select:!0,$skipDiscriminatorCheck:!0},y[p][t.schema.options.typeKey]=String,t.schema.add(y),s(p,null,t.prototype,null,[p],t.schema.options)}if(r.path(p)&&!0!==r.path(p).options.$skipDiscriminatorCheck)throw new Error('Discriminator "'+e+'" cannot have field with name "'+p+'"');var d=e;if("string"==typeof o&&o.length&&(d=o),function(e,r){e._baseSchema=r,r.paths._id&&r.paths._id.options&&!r.paths._id.options.auto&&e.remove("_id");for(var o=[],s=0,a=Object.keys(r.paths);s<a.length;s++){var l=a[s];if(e.nested[l])o.push(l);else if(-1!==l.indexOf(".")){var f,y="",_=n(l.split(".").slice(0,-1));try{for(_.s();!(f=_.n()).done;){var m=f.value;y+=(y.length?".":"")+m,(e.paths[y]instanceof i||e.singleNestedPaths[y]instanceof i)&&o.push(l)}}catch(t){_.e(t)}finally{_.f()}}}u.merge(e,r,{isDiscriminatorSchemaMerge:!0,omit:{discriminators:!0,base:!0},omitNested:o.reduce((function(t,e){return t["tree."+e]=!0,t}),{})});for(var v=0,g=o;v<g.length;v++){var b=g[v];delete e.paths[b]}e.childSchemas.forEach((function(t){t.model.prototype.$__setSchema(t.schema)}));var w={};w[p]={default:d,select:!0,set:function(t){if(t===d)return d;throw new Error("Can't set discriminator key \""+p+'"')},$skipDiscriminatorCheck:!0},w[p][e.options.typeKey]=h?h.instance:String,e.add(w),e.discriminatorMapping={key:p,value:d,isRoot:!1},r.options.collection&&(e.options.collection=r.options.collection);var O=e.options.toJSON,S=e.options.toObject,A=e.options._id,E=e.options.id,j=Object.keys(e.options);e.options.discriminatorKey=r.options.discriminatorKey;for(var $=0,P=j;$<P.length;$++){var x=P[$];if(!c[x]){if("pluralization"===x&&1==e.options[x]&&null==r.options[x])continue;if(!u.deepEqual(e.options[x],r.options[x]))throw new Error("Can't customize discriminator option "+x+" (can only modify "+Object.keys(c).join(", ")+")")}}e.options=u.clone(r.options),O&&(e.options.toJSON=O),S&&(e.options.toObject=S),void 0!==A&&(e.options._id=A),e.options.id=E,e.s.hooks=t.schema.s.hooks.merge(e.s.hooks),e.plugins=Array.prototype.slice.call(r.plugins),e.callQueue=r.callQueue.concat(e.callQueue),delete e._requiredpaths}(r,t.schema),t.discriminators||(t.discriminators={}),t.schema.discriminatorMapping||(t.schema.discriminatorMapping={key:p,value:null,isRoot:!0}),t.schema.discriminators||(t.schema.discriminators={}),t.schema.discriminators[e]=r,t.discriminators[e])throw new Error('Discriminator with name "'+e+'" already exists');return r}},function(t,e,r){"use strict";var n=r(74);t.exports=function(t,e){return null==e||null==e._id||(t=t.clone(),e._id?t.paths._id||(n(t),t.options._id=!0):(t.remove("_id"),t.options._id=!1)),t}},function(t,e,r){"use strict";var n=r(34);
/*!
 * Find the correct constructor, taking into account discriminators
 */t.exports=function(t,e){var r=t.schema.options.discriminatorKey;if(null!=e&&t.discriminators&&null!=e[r])if(t.discriminators[e[r]])t=t.discriminators[e[r]];else{var o=n(t,e[r]);o&&(t=o)}return t}},function(t,e,r){"use strict";t.exports=r(94)},function(t,e,r){"use strict";(function(n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r(15).set(r(98));var c=r(61),l=r(67);c.setBrowser(!0),Object.defineProperty(e,"Promise",{get:function(){return l.get()},set:function(t){l.set(t)}}),e.PromiseProvider=l,e.Error=r(5),e.Schema=r(52),e.Types=r(56),e.VirtualType=r(53),e.SchemaType=r(7),e.utils=r(2),e.Document=c(),e.model=function(t,r){var n=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=s(n);function n(t,o){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e.call(this,t,r,o)}return n}(e.Document);return n.modelName=t,n},
/*!
 * Module exports.
 */
"undefined"!=typeof window&&(window.mongoose=t.exports,window.Buffer=n)}).call(this,r(1).Buffer)},function(t,e,r){"use strict";e.byteLength=function(t){var e=c(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,n=c(t),s=n[0],a=n[1],u=new i(function(t,e,r){return 3*(e+r)/4-r}(0,s,a)),l=0,f=a>0?s-4:s;for(r=0;r<f;r+=4)e=o[t.charCodeAt(r)]<<18|o[t.charCodeAt(r+1)]<<12|o[t.charCodeAt(r+2)]<<6|o[t.charCodeAt(r+3)],u[l++]=e>>16&255,u[l++]=e>>8&255,u[l++]=255&e;2===a&&(e=o[t.charCodeAt(r)]<<2|o[t.charCodeAt(r+1)]>>4,u[l++]=255&e);1===a&&(e=o[t.charCodeAt(r)]<<10|o[t.charCodeAt(r+1)]<<4|o[t.charCodeAt(r+2)]>>2,u[l++]=e>>8&255,u[l++]=255&e);return u},e.fromByteArray=function(t){for(var e,r=t.length,o=r%3,i=[],s=0,a=r-o;s<a;s+=16383)i.push(l(t,s,s+16383>a?a:s+16383));1===o?(e=t[r-1],i.push(n[e>>2]+n[e<<4&63]+"==")):2===o&&(e=(t[r-2]<<8)+t[r-1],i.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return i.join("")};for(var n=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=s.length;a<u;++a)n[a]=s[a],o[s.charCodeAt(a)]=a;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function l(t,e,r){for(var o,i,s=[],a=e;a<r;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return s.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(t,e){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
e.read=function(t,e,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,c=u>>1,l=-7,f=r?o-1:0,p=r?-1:1,h=t[e+f];for(f+=p,i=h&(1<<-l)-1,h>>=-l,l+=a;l>0;i=256*i+t[e+f],f+=p,l-=8);for(s=i&(1<<-l)-1,i>>=-l,l+=n;l>0;s=256*s+t[e+f],f+=p,l-=8);if(0===i)i=1-c;else{if(i===u)return s?NaN:1/0*(h?-1:1);s+=Math.pow(2,n),i-=c}return(h?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,a,u,c=8*i-o-1,l=(1<<c)-1,f=l>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:i-1,y=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+f>=1?p/u:p*Math.pow(2,1-f))*u>=2&&(s++,u/=2),s+f>=l?(a=0,s=l):s+f>=1?(a=(e*u-1)*Math.pow(2,o),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;t[r+h]=255&a,h+=y,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;t[r+h]=255&s,h+=y,s/=256,c-=8);t[r+h-y]|=128*d}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e,r){"use strict";
/*!
 * Module exports.
 */e.Binary=r(99),e.Collection=function(){throw new Error("Cannot create a collection from browser library")},e.Decimal128=r(106),e.ObjectId=r(107),e.ReadPreference=r(108)},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(35).Binary;
/*!
 * Module exports.
 */t.exports=n},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return t&&"object"===r(t)&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(module,exports,__nested_webpack_require_266993__){"use strict";var Long=__nested_webpack_require_266993__(23).Long,Double=__nested_webpack_require_266993__(36).Double,Timestamp=__nested_webpack_require_266993__(37).Timestamp,ObjectID=__nested_webpack_require_266993__(38).ObjectID,_Symbol=__nested_webpack_require_266993__(40).Symbol,Code=__nested_webpack_require_266993__(41).Code,MinKey=__nested_webpack_require_266993__(43).MinKey,MaxKey=__nested_webpack_require_266993__(44).MaxKey,Decimal128=__nested_webpack_require_266993__(42),Int32=__nested_webpack_require_266993__(60),DBRef=__nested_webpack_require_266993__(45).DBRef,BSONRegExp=__nested_webpack_require_266993__(39).BSONRegExp,Binary=__nested_webpack_require_266993__(27).Binary,utils=__nested_webpack_require_266993__(16),deserialize=function(t,e,r){var n=(e=null==e?{}:e)&&e.index?e.index:0,o=t[n]|t[n+1]<<8|t[n+2]<<16|t[n+3]<<24;if(o<5||t.length<o||o+n>t.length)throw new Error("corrupt bson message");if(0!==t[n+o-1])throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");return deserializeObject(t,n,e,r)},deserializeObject=function t(e,r,n,o){var i=null!=n.evalFunctions&&n.evalFunctions,s=null!=n.cacheFunctions&&n.cacheFunctions,a=null!=n.cacheFunctionsCrc32&&n.cacheFunctionsCrc32;if(!a)var u=null;var c=null==n.fieldsAsRaw?null:n.fieldsAsRaw,l=null!=n.raw&&n.raw,f="boolean"==typeof n.bsonRegExp&&n.bsonRegExp,p=null!=n.promoteBuffers&&n.promoteBuffers,h=null==n.promoteLongs||n.promoteLongs,y=null==n.promoteValues||n.promoteValues,d=r;if(e.length<5)throw new Error("corrupt bson message < 5 bytes long");var _=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;if(_<5||_>e.length)throw new Error("corrupt bson message");for(var m=o?[]:{},v=0;;){var g=e[r++];if(0===g)break;for(var b=r;0!==e[b]&&b<e.length;)b++;if(b>=e.length)throw new Error("Bad BSON Document: illegal CString");var w=o?v++:e.toString("utf8",r,b);if(r=b+1,g===BSON.BSON_DATA_STRING){var O=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;if(O<=0||O>e.length-r||0!==e[r+O-1])throw new Error("bad string length in bson");m[w]=e.toString("utf8",r,r+O-1),r+=O}else if(g===BSON.BSON_DATA_OID){var S=utils.allocBuffer(12);e.copy(S,0,r,r+12),m[w]=new ObjectID(S),r+=12}else if(g===BSON.BSON_DATA_INT&&!1===y)m[w]=new Int32(e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24);else if(g===BSON.BSON_DATA_INT)m[w]=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;else if(g===BSON.BSON_DATA_NUMBER&&!1===y)m[w]=new Double(e.readDoubleLE(r)),r+=8;else if(g===BSON.BSON_DATA_NUMBER)m[w]=e.readDoubleLE(r),r+=8;else if(g===BSON.BSON_DATA_DATE){var A=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,E=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;m[w]=new Date(new Long(A,E).toNumber())}else if(g===BSON.BSON_DATA_BOOLEAN){if(0!==e[r]&&1!==e[r])throw new Error("illegal boolean type value");m[w]=1===e[r++]}else if(g===BSON.BSON_DATA_OBJECT){var j=r,$=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24;if($<=0||$>e.length-r)throw new Error("bad embedded document length in bson");m[w]=l?e.slice(r,r+$):t(e,j,n,!1),r+=$}else if(g===BSON.BSON_DATA_ARRAY){j=r;var P=n,x=r+($=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24);if(c&&c[w]){for(var N in P={},n)P[N]=n[N];P.raw=!0}if(m[w]=t(e,j,P,!0),0!==e[(r+=$)-1])throw new Error("invalid array terminator byte");if(r!==x)throw new Error("corrupted array bson")}else if(g===BSON.BSON_DATA_UNDEFINED)m[w]=void 0;else if(g===BSON.BSON_DATA_NULL)m[w]=null;else if(g===BSON.BSON_DATA_LONG){A=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,E=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;var T=new Long(A,E);m[w]=h&&!0===y&&T.lessThanOrEqual(JS_INT_MAX_LONG)&&T.greaterThanOrEqual(JS_INT_MIN_LONG)?T.toNumber():T}else if(g===BSON.BSON_DATA_DECIMAL128){var k=utils.allocBuffer(16);e.copy(k,0,r,r+16),r+=16;var C=new Decimal128(k);m[w]=C.toObject?C.toObject():C}else if(g===BSON.BSON_DATA_BINARY){var R=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,D=R,B=e[r++];if(R<0)throw new Error("Negative binary type element size found");if(R>e.length)throw new Error("Binary type size larger than document size");if(null!=e.slice){if(B===Binary.SUBTYPE_BYTE_ARRAY){if((R=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<0)throw new Error("Negative binary type element size found for subtype 0x02");if(R>D-4)throw new Error("Binary type with subtype 0x02 contains to long binary size");if(R<D-4)throw new Error("Binary type with subtype 0x02 contains to short binary size")}m[w]=p&&y?e.slice(r,r+R):new Binary(e.slice(r,r+R),B)}else{var M="undefined"!=typeof Uint8Array?new Uint8Array(new ArrayBuffer(R)):new Array(R);if(B===Binary.SUBTYPE_BYTE_ARRAY){if((R=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<0)throw new Error("Negative binary type element size found for subtype 0x02");if(R>D-4)throw new Error("Binary type with subtype 0x02 contains to long binary size");if(R<D-4)throw new Error("Binary type with subtype 0x02 contains to short binary size")}for(b=0;b<R;b++)M[b]=e[r+b];m[w]=p&&y?M:new Binary(M,B)}r+=R}else if(g===BSON.BSON_DATA_REGEXP&&!1===f){for(b=r;0!==e[b]&&b<e.length;)b++;if(b>=e.length)throw new Error("Bad BSON Document: illegal CString");var I=e.toString("utf8",r,b);for(b=r=b+1;0!==e[b]&&b<e.length;)b++;if(b>=e.length)throw new Error("Bad BSON Document: illegal CString");var F=e.toString("utf8",r,b);r=b+1;var L=new Array(F.length);for(b=0;b<F.length;b++)switch(F[b]){case"m":L[b]="m";break;case"s":L[b]="g";break;case"i":L[b]="i"}m[w]=new RegExp(I,L.join(""))}else if(g===BSON.BSON_DATA_REGEXP&&!0===f){for(b=r;0!==e[b]&&b<e.length;)b++;if(b>=e.length)throw new Error("Bad BSON Document: illegal CString");for(I=e.toString("utf8",r,b),b=r=b+1;0!==e[b]&&b<e.length;)b++;if(b>=e.length)throw new Error("Bad BSON Document: illegal CString");F=e.toString("utf8",r,b),r=b+1,m[w]=new BSONRegExp(I,F)}else if(g===BSON.BSON_DATA_SYMBOL){if((O=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||O>e.length-r||0!==e[r+O-1])throw new Error("bad string length in bson");m[w]=new _Symbol(e.toString("utf8",r,r+O-1)),r+=O}else if(g===BSON.BSON_DATA_TIMESTAMP)A=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,E=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,m[w]=new Timestamp(A,E);else if(g===BSON.BSON_DATA_MIN_KEY)m[w]=new MinKey;else if(g===BSON.BSON_DATA_MAX_KEY)m[w]=new MaxKey;else if(g===BSON.BSON_DATA_CODE){if((O=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||O>e.length-r||0!==e[r+O-1])throw new Error("bad string length in bson");var U=e.toString("utf8",r,r+O-1);if(i)if(s){var V=a?u(U):U;m[w]=isolateEvalWithHash(functionCache,V,U,m)}else m[w]=isolateEval(U);else m[w]=new Code(U);r+=O}else if(g===BSON.BSON_DATA_CODE_W_SCOPE){var q=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;if(q<13)throw new Error("code_w_scope total size shorter minimum expected length");if((O=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||O>e.length-r||0!==e[r+O-1])throw new Error("bad string length in bson");U=e.toString("utf8",r,r+O-1),j=r+=O,$=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24;var W=t(e,j,n,!1);if(r+=$,q<8+$+O)throw new Error("code_w_scope total size is to short, truncating scope");if(q>8+$+O)throw new Error("code_w_scope total size is to long, clips outer document");i?(s?(V=a?u(U):U,m[w]=isolateEvalWithHash(functionCache,V,U,m)):m[w]=isolateEval(U),m[w].scope=W):m[w]=new Code(U,W)}else{if(g!==BSON.BSON_DATA_DBPOINTER)throw new Error("Detected unknown BSON type "+g.toString(16)+' for fieldname "'+w+'", are you using the latest BSON parser');if((O=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||O>e.length-r||0!==e[r+O-1])throw new Error("bad string length in bson");var H=e.toString("utf8",r,r+O-1);r+=O;var Y=utils.allocBuffer(12);e.copy(Y,0,r,r+12),S=new ObjectID(Y),r+=12;var K=H.split("."),z=K.shift(),Q=K.join(".");m[w]=new DBRef(Q,S,z)}}if(_!==r-d){if(o)throw new Error("corrupt array bson");throw new Error("corrupt object bson")}return null!=m.$id&&(m=new DBRef(m.$ref,m.$id,m.$db)),m},isolateEvalWithHash=function isolateEvalWithHash(functionCache,hash,functionString,object){var value=null;return null==functionCache[hash]&&(eval("value = "+functionString),functionCache[hash]=value),functionCache[hash].bind(object)},isolateEval=function isolateEval(functionString){var value=null;return eval("value = "+functionString),value},BSON={},functionCache=BSON.functionCache={};BSON.BSON_DATA_NUMBER=1,BSON.BSON_DATA_STRING=2,BSON.BSON_DATA_OBJECT=3,BSON.BSON_DATA_ARRAY=4,BSON.BSON_DATA_BINARY=5,BSON.BSON_DATA_UNDEFINED=6,BSON.BSON_DATA_OID=7,BSON.BSON_DATA_BOOLEAN=8,BSON.BSON_DATA_DATE=9,BSON.BSON_DATA_NULL=10,BSON.BSON_DATA_REGEXP=11,BSON.BSON_DATA_DBPOINTER=12,BSON.BSON_DATA_CODE=13,BSON.BSON_DATA_SYMBOL=14,BSON.BSON_DATA_CODE_W_SCOPE=15,BSON.BSON_DATA_INT=16,BSON.BSON_DATA_TIMESTAMP=17,BSON.BSON_DATA_LONG=18,BSON.BSON_DATA_DECIMAL128=19,BSON.BSON_DATA_MIN_KEY=255,BSON.BSON_DATA_MAX_KEY=127,BSON.BSON_BINARY_SUBTYPE_DEFAULT=0,BSON.BSON_BINARY_SUBTYPE_FUNCTION=1,BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY=2,BSON.BSON_BINARY_SUBTYPE_UUID=3,BSON.BSON_BINARY_SUBTYPE_MD5=4,BSON.BSON_BINARY_SUBTYPE_USER_DEFINED=128,BSON.BSON_INT32_MAX=2147483647,BSON.BSON_INT32_MIN=-2147483648,BSON.BSON_INT64_MAX=Math.pow(2,63)-1,BSON.BSON_INT64_MIN=-Math.pow(2,63),BSON.JS_INT_MAX=9007199254740992,BSON.JS_INT_MIN=-9007199254740992;var JS_INT_MAX_LONG=Long.fromNumber(9007199254740992),JS_INT_MIN_LONG=Long.fromNumber(-9007199254740992);module.exports=deserialize},function(t,e,r){"use strict";(function(e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(104).writeIEEE754,i=r(23).Long,s=r(59),a=r(27).Binary,u=r(16).normalizedFunctionString,c=/\x00/,l=["$db","$ref","$id","$clusterTime"],f=function(t){return"object"===n(t)&&"[object Date]"===Object.prototype.toString.call(t)},p=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},h=function(t,e,r,n,o){t[n++]=R.BSON_DATA_STRING;var i=o?t.write(e,n,"ascii"):t.write(e,n,"utf8");t[(n=n+i+1)-1]=0;var s=t.write(r,n+4,"utf8");return t[n+3]=s+1>>24&255,t[n+2]=s+1>>16&255,t[n+1]=s+1>>8&255,t[n]=s+1&255,n=n+4+s,t[n++]=0,n},y=function(t,e,r,n,s){if(Math.floor(r)===r&&r>=R.JS_INT_MIN&&r<=R.JS_INT_MAX)if(r>=R.BSON_INT32_MIN&&r<=R.BSON_INT32_MAX){t[n++]=R.BSON_DATA_INT;var a=s?t.write(e,n,"ascii"):t.write(e,n,"utf8");n+=a,t[n++]=0,t[n++]=255&r,t[n++]=r>>8&255,t[n++]=r>>16&255,t[n++]=r>>24&255}else if(r>=R.JS_INT_MIN&&r<=R.JS_INT_MAX)t[n++]=R.BSON_DATA_NUMBER,n+=a=s?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,o(t,r,n,"little",52,8),n+=8;else{t[n++]=R.BSON_DATA_LONG,n+=a=s?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var u=i.fromNumber(r),c=u.getLowBits(),l=u.getHighBits();t[n++]=255&c,t[n++]=c>>8&255,t[n++]=c>>16&255,t[n++]=c>>24&255,t[n++]=255&l,t[n++]=l>>8&255,t[n++]=l>>16&255,t[n++]=l>>24&255}else t[n++]=R.BSON_DATA_NUMBER,n+=a=s?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,o(t,r,n,"little",52,8),n+=8;return n},d=function(t,e,r,n,o){return t[n++]=R.BSON_DATA_NULL,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,n},_=function(t,e,r,n,o){return t[n++]=R.BSON_DATA_BOOLEAN,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,t[n++]=r?1:0,n},m=function(t,e,r,n,o){t[n++]=R.BSON_DATA_DATE,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var s=i.fromNumber(r.getTime()),a=s.getLowBits(),u=s.getHighBits();return t[n++]=255&a,t[n++]=a>>8&255,t[n++]=a>>16&255,t[n++]=a>>24&255,t[n++]=255&u,t[n++]=u>>8&255,t[n++]=u>>16&255,t[n++]=u>>24&255,n},v=function(t,e,r,n,o){if(t[n++]=R.BSON_DATA_REGEXP,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,r.source&&null!=r.source.match(c))throw Error("value "+r.source+" must not contain null bytes");return n+=t.write(r.source,n,"utf8"),t[n++]=0,r.global&&(t[n++]=115),r.ignoreCase&&(t[n++]=105),r.multiline&&(t[n++]=109),t[n++]=0,n},g=function(t,e,r,n,o){if(t[n++]=R.BSON_DATA_REGEXP,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,null!=r.pattern.match(c))throw Error("pattern "+r.pattern+" must not contain null bytes");return n+=t.write(r.pattern,n,"utf8"),t[n++]=0,n+=t.write(r.options.split("").sort().join(""),n,"utf8"),t[n++]=0,n},b=function(t,e,r,n,o){return null===r?t[n++]=R.BSON_DATA_NULL:"MinKey"===r._bsontype?t[n++]=R.BSON_DATA_MIN_KEY:t[n++]=R.BSON_DATA_MAX_KEY,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,n},w=function(t,e,r,n,o){if(t[n++]=R.BSON_DATA_OID,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,"string"==typeof r.id)t.write(r.id,n,"binary");else{if(!r.id||!r.id.copy)throw new Error("object ["+JSON.stringify(r)+"] is not a valid ObjectId");r.id.copy(t,n,0,12)}return n+12},O=function(t,e,r,n,o){t[n++]=R.BSON_DATA_BINARY,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var i=r.length;return t[n++]=255&i,t[n++]=i>>8&255,t[n++]=i>>16&255,t[n++]=i>>24&255,t[n++]=R.BSON_BINARY_SUBTYPE_DEFAULT,r.copy(t,n,0,i),n+=i},S=function(t,e,r,n,o,i,s,a,u,c){for(var l=0;l<c.length;l++)if(c[l]===r)throw new Error("cyclic dependency detected");c.push(r),t[n++]=Array.isArray(r)?R.BSON_DATA_ARRAY:R.BSON_DATA_OBJECT,n+=u?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var f=C(t,r,o,n,i+1,s,a,c);return c.pop(),f},A=function(t,e,r,n,o){return t[n++]=R.BSON_DATA_DECIMAL128,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,r.bytes.copy(t,n,0,16),n+16},E=function(t,e,r,n,o){t[n++]="Long"===r._bsontype?R.BSON_DATA_LONG:R.BSON_DATA_TIMESTAMP,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var i=r.getLowBits(),s=r.getHighBits();return t[n++]=255&i,t[n++]=i>>8&255,t[n++]=i>>16&255,t[n++]=i>>24&255,t[n++]=255&s,t[n++]=s>>8&255,t[n++]=s>>16&255,t[n++]=s>>24&255,n},j=function(t,e,r,n,o){return t[n++]=R.BSON_DATA_INT,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,t[n++]=255&r,t[n++]=r>>8&255,t[n++]=r>>16&255,t[n++]=r>>24&255,n},$=function(t,e,r,n,i){return t[n++]=R.BSON_DATA_NUMBER,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,o(t,r,n,"little",52,8),n+=8},P=function(t,e,r,n,o,i,s){t[n++]=R.BSON_DATA_CODE,n+=s?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var a=u(r),c=t.write(a,n+4,"utf8")+1;return t[n]=255&c,t[n+1]=c>>8&255,t[n+2]=c>>16&255,t[n+3]=c>>24&255,n=n+4+c-1,t[n++]=0,n},x=function(t,e,r,o,i,s,a,u,c){if(r.scope&&"object"===n(r.scope)){t[o++]=R.BSON_DATA_CODE_W_SCOPE;var l=c?t.write(e,o,"ascii"):t.write(e,o,"utf8");o+=l,t[o++]=0;var f=o,p="string"==typeof r.code?r.code:r.code.toString();o+=4;var h=t.write(p,o+4,"utf8")+1;t[o]=255&h,t[o+1]=h>>8&255,t[o+2]=h>>16&255,t[o+3]=h>>24&255,t[o+4+h-1]=0,o=o+h+4;var y=C(t,r.scope,i,o,s+1,a,u);o=y-1;var d=y-f;t[f++]=255&d,t[f++]=d>>8&255,t[f++]=d>>16&255,t[f++]=d>>24&255,t[o++]=0}else{t[o++]=R.BSON_DATA_CODE,o+=l=c?t.write(e,o,"ascii"):t.write(e,o,"utf8"),t[o++]=0,p=r.code.toString();var _=t.write(p,o+4,"utf8")+1;t[o]=255&_,t[o+1]=_>>8&255,t[o+2]=_>>16&255,t[o+3]=_>>24&255,o=o+4+_-1,t[o++]=0}return o},N=function(t,e,r,n,o){t[n++]=R.BSON_DATA_BINARY,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var i=r.value(!0),s=r.position;return r.sub_type===a.SUBTYPE_BYTE_ARRAY&&(s+=4),t[n++]=255&s,t[n++]=s>>8&255,t[n++]=s>>16&255,t[n++]=s>>24&255,t[n++]=r.sub_type,r.sub_type===a.SUBTYPE_BYTE_ARRAY&&(s-=4,t[n++]=255&s,t[n++]=s>>8&255,t[n++]=s>>16&255,t[n++]=s>>24&255),i.copy(t,n,0,r.position),n+=r.position},T=function(t,e,r,n,o){t[n++]=R.BSON_DATA_SYMBOL,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var i=t.write(r.value,n+4,"utf8")+1;return t[n]=255&i,t[n+1]=i>>8&255,t[n+2]=i>>16&255,t[n+3]=i>>24&255,n=n+4+i-1,t[n++]=0,n},k=function(t,e,r,n,o,i,s){t[n++]=R.BSON_DATA_OBJECT,n+=s?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var a,u=n,c=(a=null!=r.db?C(t,{$ref:r.namespace,$id:r.oid,$db:r.db},!1,n,o+1,i):C(t,{$ref:r.namespace,$id:r.oid},!1,n,o+1,i))-u;return t[u++]=255&c,t[u++]=c>>8&255,t[u++]=c>>16&255,t[u++]=c>>24&255,a},C=function(t,r,o,i,a,u,C,R){i=i||0,(R=R||[]).push(r);var D=i+4;if(Array.isArray(r))for(var B=0;B<r.length;B++){var M=""+B,I=r[B];if(I&&I.toBSON){if("function"!=typeof I.toBSON)throw new Error("toBSON is not a function");I=I.toBSON()}var F=n(I);if("string"===F)D=h(t,M,I,D,!0);else if("number"===F)D=y(t,M,I,D,!0);else if("boolean"===F)D=_(t,M,I,D,!0);else if(I instanceof Date||f(I))D=m(t,M,I,D,!0);else if(void 0===I)D=d(t,M,0,D,!0);else if(null===I)D=d(t,M,0,D,!0);else if("ObjectID"===I._bsontype||"ObjectId"===I._bsontype)D=w(t,M,I,D,!0);else if(e.isBuffer(I))D=O(t,M,I,D,!0);else if(I instanceof RegExp||p(I))D=v(t,M,I,D,!0);else if("object"===F&&null==I._bsontype)D=S(t,M,I,D,o,a,u,C,!0,R);else if("object"===F&&"Decimal128"===I._bsontype)D=A(t,M,I,D,!0);else if("Long"===I._bsontype||"Timestamp"===I._bsontype)D=E(t,M,I,D,!0);else if("Double"===I._bsontype)D=$(t,M,I,D,!0);else if("function"==typeof I&&u)D=P(t,M,I,D,0,0,u);else if("Code"===I._bsontype)D=x(t,M,I,D,o,a,u,C,!0);else if("Binary"===I._bsontype)D=N(t,M,I,D,!0);else if("Symbol"===I._bsontype)D=T(t,M,I,D,!0);else if("DBRef"===I._bsontype)D=k(t,M,I,D,a,u,!0);else if("BSONRegExp"===I._bsontype)D=g(t,M,I,D,!0);else if("Int32"===I._bsontype)D=j(t,M,I,D,!0);else if("MinKey"===I._bsontype||"MaxKey"===I._bsontype)D=b(t,M,I,D,!0);else if(void 0!==I._bsontype)throw new TypeError("Unrecognized or invalid _bsontype: "+I._bsontype)}else if(r instanceof s)for(var L=r.entries(),U=!1;!U;){var V=L.next();if(!(U=V.done)){if(M=V.value[0],F=n(I=V.value[1]),"string"==typeof M&&-1===l.indexOf(M)){if(null!=M.match(c))throw Error("key "+M+" must not contain null bytes");if(o){if("$"===M[0])throw Error("key "+M+" must not start with '$'");if(~M.indexOf("."))throw Error("key "+M+" must not contain '.'")}}if("string"===F)D=h(t,M,I,D);else if("number"===F)D=y(t,M,I,D);else if("boolean"===F)D=_(t,M,I,D);else if(I instanceof Date||f(I))D=m(t,M,I,D);else if(null===I||void 0===I&&!1===C)D=d(t,M,0,D);else if("ObjectID"===I._bsontype||"ObjectId"===I._bsontype)D=w(t,M,I,D);else if(e.isBuffer(I))D=O(t,M,I,D);else if(I instanceof RegExp||p(I))D=v(t,M,I,D);else if("object"===F&&null==I._bsontype)D=S(t,M,I,D,o,a,u,C,!1,R);else if("object"===F&&"Decimal128"===I._bsontype)D=A(t,M,I,D);else if("Long"===I._bsontype||"Timestamp"===I._bsontype)D=E(t,M,I,D);else if("Double"===I._bsontype)D=$(t,M,I,D);else if("Code"===I._bsontype)D=x(t,M,I,D,o,a,u,C);else if("function"==typeof I&&u)D=P(t,M,I,D,0,0,u);else if("Binary"===I._bsontype)D=N(t,M,I,D);else if("Symbol"===I._bsontype)D=T(t,M,I,D);else if("DBRef"===I._bsontype)D=k(t,M,I,D,a,u);else if("BSONRegExp"===I._bsontype)D=g(t,M,I,D);else if("Int32"===I._bsontype)D=j(t,M,I,D);else if("MinKey"===I._bsontype||"MaxKey"===I._bsontype)D=b(t,M,I,D);else if(void 0!==I._bsontype)throw new TypeError("Unrecognized or invalid _bsontype: "+I._bsontype)}}else{if(r.toBSON){if("function"!=typeof r.toBSON)throw new Error("toBSON is not a function");if(null!=(r=r.toBSON())&&"object"!==n(r))throw new Error("toBSON function did not return an object")}for(M in r){if((I=r[M])&&I.toBSON){if("function"!=typeof I.toBSON)throw new Error("toBSON is not a function");I=I.toBSON()}if(F=n(I),"string"==typeof M&&-1===l.indexOf(M)){if(null!=M.match(c))throw Error("key "+M+" must not contain null bytes");if(o){if("$"===M[0])throw Error("key "+M+" must not start with '$'");if(~M.indexOf("."))throw Error("key "+M+" must not contain '.'")}}if("string"===F)D=h(t,M,I,D);else if("number"===F)D=y(t,M,I,D);else if("boolean"===F)D=_(t,M,I,D);else if(I instanceof Date||f(I))D=m(t,M,I,D);else if(void 0===I)!1===C&&(D=d(t,M,0,D));else if(null===I)D=d(t,M,0,D);else if("ObjectID"===I._bsontype||"ObjectId"===I._bsontype)D=w(t,M,I,D);else if(e.isBuffer(I))D=O(t,M,I,D);else if(I instanceof RegExp||p(I))D=v(t,M,I,D);else if("object"===F&&null==I._bsontype)D=S(t,M,I,D,o,a,u,C,!1,R);else if("object"===F&&"Decimal128"===I._bsontype)D=A(t,M,I,D);else if("Long"===I._bsontype||"Timestamp"===I._bsontype)D=E(t,M,I,D);else if("Double"===I._bsontype)D=$(t,M,I,D);else if("Code"===I._bsontype)D=x(t,M,I,D,o,a,u,C);else if("function"==typeof I&&u)D=P(t,M,I,D,0,0,u);else if("Binary"===I._bsontype)D=N(t,M,I,D);else if("Symbol"===I._bsontype)D=T(t,M,I,D);else if("DBRef"===I._bsontype)D=k(t,M,I,D,a,u);else if("BSONRegExp"===I._bsontype)D=g(t,M,I,D);else if("Int32"===I._bsontype)D=j(t,M,I,D);else if("MinKey"===I._bsontype||"MaxKey"===I._bsontype)D=b(t,M,I,D);else if(void 0!==I._bsontype)throw new TypeError("Unrecognized or invalid _bsontype: "+I._bsontype)}}R.pop(),t[D++]=0;var q=D-i;return t[i++]=255&q,t[i++]=q>>8&255,t[i++]=q>>16&255,t[i++]=q>>24&255,D},R={BSON_DATA_NUMBER:1,BSON_DATA_STRING:2,BSON_DATA_OBJECT:3,BSON_DATA_ARRAY:4,BSON_DATA_BINARY:5,BSON_DATA_UNDEFINED:6,BSON_DATA_OID:7,BSON_DATA_BOOLEAN:8,BSON_DATA_DATE:9,BSON_DATA_NULL:10,BSON_DATA_REGEXP:11,BSON_DATA_CODE:13,BSON_DATA_SYMBOL:14,BSON_DATA_CODE_W_SCOPE:15,BSON_DATA_INT:16,BSON_DATA_TIMESTAMP:17,BSON_DATA_LONG:18,BSON_DATA_DECIMAL128:19,BSON_DATA_MIN_KEY:255,BSON_DATA_MAX_KEY:127,BSON_BINARY_SUBTYPE_DEFAULT:0,BSON_BINARY_SUBTYPE_FUNCTION:1,BSON_BINARY_SUBTYPE_BYTE_ARRAY:2,BSON_BINARY_SUBTYPE_UUID:3,BSON_BINARY_SUBTYPE_MD5:4,BSON_BINARY_SUBTYPE_USER_DEFINED:128,BSON_INT32_MAX:2147483647,BSON_INT32_MIN:-2147483648};R.BSON_INT64_MAX=Math.pow(2,63)-1,R.BSON_INT64_MIN=-Math.pow(2,63),R.JS_INT_MAX=9007199254740992,R.JS_INT_MIN=-9007199254740992,t.exports=C}).call(this,r(1).Buffer)},function(t,e){e.readIEEE754=function(t,e,r,n,o){var i,s,a="big"===r,u=8*o-n-1,c=(1<<u)-1,l=c>>1,f=-7,p=a?0:o-1,h=a?1:-1,y=t[e+p];for(p+=h,i=y&(1<<-f)-1,y>>=-f,f+=u;f>0;i=256*i+t[e+p],p+=h,f-=8);for(s=i&(1<<-f)-1,i>>=-f,f+=n;f>0;s=256*s+t[e+p],p+=h,f-=8);if(0===i)i=1-l;else{if(i===c)return s?NaN:1/0*(y?-1:1);s+=Math.pow(2,n),i-=l}return(y?-1:1)*s*Math.pow(2,i-n)},e.writeIEEE754=function(t,e,r,n,o,i){var s,a,u,c="big"===n,l=8*i-o-1,f=(1<<l)-1,p=f>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,y=c?i-1:0,d=c?-1:1,_=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=f):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+p>=1?h/u:h*Math.pow(2,1-p))*u>=2&&(s++,u/=2),s+p>=f?(a=0,s=f):s+p>=1?(a=(e*u-1)*Math.pow(2,o),s+=p):(a=e*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;t[r+y]=255&a,y+=d,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;t[r+y]=255&s,y+=d,s/=256,l-=8);t[r+y-d]|=128*_}},function(t,e,r){"use strict";(function(e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(23).Long,i=r(36).Double,s=r(37).Timestamp,a=r(38).ObjectID,u=r(40).Symbol,c=r(39).BSONRegExp,l=r(41).Code,f=r(42),p=r(43).MinKey,h=r(44).MaxKey,y=r(45).DBRef,d=r(27).Binary,_=r(16).normalizedFunctionString,m=function(t,e,r){var n=5;if(Array.isArray(t))for(var o=0;o<t.length;o++)n+=v(o.toString(),t[o],e,!0,r);else for(var i in t.toBSON&&(t=t.toBSON()),t)n+=v(i,t[i],e,!1,r);return n};function v(t,r,v,b,w){switch(r&&r.toBSON&&(r=r.toBSON()),n(r)){case"string":return 1+e.byteLength(t,"utf8")+1+4+e.byteLength(r,"utf8")+1;case"number":return Math.floor(r)===r&&r>=g.JS_INT_MIN&&r<=g.JS_INT_MAX&&r>=g.BSON_INT32_MIN&&r<=g.BSON_INT32_MAX?(null!=t?e.byteLength(t,"utf8")+1:0)+5:(null!=t?e.byteLength(t,"utf8")+1:0)+9;case"undefined":return b||!w?(null!=t?e.byteLength(t,"utf8")+1:0)+1:0;case"boolean":return(null!=t?e.byteLength(t,"utf8")+1:0)+2;case"object":if(null==r||r instanceof p||r instanceof h||"MinKey"===r._bsontype||"MaxKey"===r._bsontype)return(null!=t?e.byteLength(t,"utf8")+1:0)+1;if(r instanceof a||"ObjectID"===r._bsontype||"ObjectId"===r._bsontype)return(null!=t?e.byteLength(t,"utf8")+1:0)+13;if(r instanceof Date||"object"===n(S=r)&&"[object Date]"===Object.prototype.toString.call(S))return(null!=t?e.byteLength(t,"utf8")+1:0)+9;if(void 0!==e&&e.isBuffer(r))return(null!=t?e.byteLength(t,"utf8")+1:0)+6+r.length;if(r instanceof o||r instanceof i||r instanceof s||"Long"===r._bsontype||"Double"===r._bsontype||"Timestamp"===r._bsontype)return(null!=t?e.byteLength(t,"utf8")+1:0)+9;if(r instanceof f||"Decimal128"===r._bsontype)return(null!=t?e.byteLength(t,"utf8")+1:0)+17;if(r instanceof l||"Code"===r._bsontype)return null!=r.scope&&Object.keys(r.scope).length>0?(null!=t?e.byteLength(t,"utf8")+1:0)+1+4+4+e.byteLength(r.code.toString(),"utf8")+1+m(r.scope,v,w):(null!=t?e.byteLength(t,"utf8")+1:0)+1+4+e.byteLength(r.code.toString(),"utf8")+1;if(r instanceof d||"Binary"===r._bsontype)return r.sub_type===d.SUBTYPE_BYTE_ARRAY?(null!=t?e.byteLength(t,"utf8")+1:0)+(r.position+1+4+1+4):(null!=t?e.byteLength(t,"utf8")+1:0)+(r.position+1+4+1);if(r instanceof u||"Symbol"===r._bsontype)return(null!=t?e.byteLength(t,"utf8")+1:0)+e.byteLength(r.value,"utf8")+4+1+1;if(r instanceof y||"DBRef"===r._bsontype){var O={$ref:r.namespace,$id:r.oid};return null!=r.db&&(O.$db=r.db),(null!=t?e.byteLength(t,"utf8")+1:0)+1+m(O,v,w)}return r instanceof RegExp||"[object RegExp]"===Object.prototype.toString.call(r)?(null!=t?e.byteLength(t,"utf8")+1:0)+1+e.byteLength(r.source,"utf8")+1+(r.global?1:0)+(r.ignoreCase?1:0)+(r.multiline?1:0)+1:r instanceof c||"BSONRegExp"===r._bsontype?(null!=t?e.byteLength(t,"utf8")+1:0)+1+e.byteLength(r.pattern,"utf8")+1+e.byteLength(r.options,"utf8")+1:(null!=t?e.byteLength(t,"utf8")+1:0)+m(r,v,w)+1;case"function":if(r instanceof RegExp||"[object RegExp]"===Object.prototype.toString.call(r)||"[object RegExp]"===String.call(r))return(null!=t?e.byteLength(t,"utf8")+1:0)+1+e.byteLength(r.source,"utf8")+1+(r.global?1:0)+(r.ignoreCase?1:0)+(r.multiline?1:0)+1;if(v&&null!=r.scope&&Object.keys(r.scope).length>0)return(null!=t?e.byteLength(t,"utf8")+1:0)+1+4+4+e.byteLength(_(r),"utf8")+1+m(r.scope,v,w);if(v)return(null!=t?e.byteLength(t,"utf8")+1:0)+1+4+e.byteLength(_(r),"utf8")+1}var S;return 0}var g={BSON_INT32_MAX:2147483647,BSON_INT32_MIN:-2147483648,JS_INT_MAX:9007199254740992,JS_INT_MIN:-9007199254740992};t.exports=m}).call(this,r(1).Buffer)},function(t,e,r){"use strict";
/*!
 * ignore
 */t.exports=r(35).Decimal128},function(t,e,r){"use strict";
/*!
 * [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) ObjectId
 * @constructor NodeMongoDbObjectId
 * @see ObjectId
 */var n=r(35).ObjectID;
/*!
 * Getter for convenience with populate, see gh-6115
 */Object.defineProperty(n.prototype,"_id",{enumerable:!1,configurable:!0,get:function(){return this}}),
/*!
 * ignore
 */
t.exports=n},function(t,e,r){"use strict";
/*!
 * ignore
 */t.exports=function(){}},function(t,e,r){"use strict";
/*!
 * Dependencies
 */var n=r(110).ctor("require","modify","init","default","ignore");t.exports=function(){this.strictMode=void 0,this.selected=void 0,this.shardval=void 0,this.saveError=void 0,this.validationError=void 0,this.adhocPaths=void 0,this.removing=void 0,this.inserting=void 0,this.saving=void 0,this.version=void 0,this.getters={},this._id=void 0,this.populate=void 0,this.populated=void 0,this.wasPopulated=!1,this.scope=void 0,this.activePaths=new n,this.pathsToScopes={},this.cachedRequired={},this.session=null,this.$setCalled=new Set,this.ownerDocument=void 0,this.fullPath=void 0}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(2),o=t.exports=function(){};
/*!
 * StateMachine represents a minimal `interface` for the
 * constructors it builds via StateMachine.ctor(...).
 *
 * @api private
 */
/*!
 * StateMachine.ctor('state1', 'state2', ...)
 * A factory method for subclassing StateMachine.
 * The arguments are a list of states. For each state,
 * the constructor's prototype gets state transition
 * methods named after each state. These transition methods
 * place their path argument into the given state.
 *
 * @param {String} state
 * @param {String} [state]
 * @return {Function} subclass constructor
 * @private
 */
o.ctor=function(){var t=n.args(arguments),e=function(){o.apply(this,arguments),this.paths={},this.states={},this.stateNames=t;for(var e,r=t.length;r--;)e=t[r],this.states[e]={}};return e.prototype=new o,t.forEach((function(t){e.prototype[t]=function(e){this._changeState(e,t)}})),e},
/*!
 * This function is wrapped by the state change functions:
 *
 * - `require(path)`
 * - `modify(path)`
 * - `init(path)`
 *
 * @api private
 */
o.prototype._changeState=function(t,e){var r=this.states[this.paths[t]];r&&delete r[t],this.paths[t]=e,this.states[e][t]=!0},
/*!
 * ignore
 */
o.prototype.clear=function(t){for(var e,r=Object.keys(this.states[t]),n=r.length;n--;)e=r[n],delete this.states[t][e],delete this.paths[e]},
/*!
 * Checks to see if at least one path is in the states passed in via `arguments`
 * e.g., this.some('required', 'inited')
 *
 * @param {String} state that we want to check for.
 * @private
 */
o.prototype.some=function(){var t=this,e=arguments.length?arguments:this.stateNames;return Array.prototype.some.call(e,(function(e){return Object.keys(t.states[e]).length}))},
/*!
 * This function builds the functions that get assigned to `forEach` and `map`,
 * since both of those methods share a lot of the same logic.
 *
 * @param {String} iterMethod is either 'forEach' or 'map'
 * @return {Function}
 * @api private
 */
o.prototype._iter=function(t){return function(){var e=arguments.length,r=n.args(arguments,0,e-1),o=arguments[e-1];r.length||(r=this.stateNames);var i=this,s=r.reduce((function(t,e){return t.concat(Object.keys(i.states[e]))}),[]);return s[t]((function(t,e,r){return o(t,e,r)}))}},
/*!
 * Iterates over the paths that belong to one of the parameter states.
 *
 * The function profile can look like:
 * this.forEach(state1, fn);         // iterates over all paths in state1
 * this.forEach(state1, state2, fn); // iterates over all paths in state1 or state2
 * this.forEach(fn);                 // iterates over all paths in all states
 *
 * @param {String} [state]
 * @param {String} [state]
 * @param {Function} callback
 * @private
 */
o.prototype.forEach=function(){return this.forEach=this._iter("forEach"),this.forEach.apply(this,arguments)},
/*!
 * Maps over the paths that belong to one of the parameter states.
 *
 * The function profile can look like:
 * this.forEach(state1, fn);         // iterates over all paths in state1
 * this.forEach(state1, state2, fn); // iterates over all paths in state1 or state2
 * this.forEach(fn);                 // iterates over all paths in all states
 *
 * @param {String} [state]
 * @param {String} [state]
 * @param {Function} callback
 * @return {Array}
 * @private
 */
o.prototype.map=function(){return this.map=this._iter("map"),this.map.apply(this,arguments)}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=1e3,o=6e4,i=60*o,s=24*i;function a(t,e,r,n){var o=e>=1.5*r;return Math.round(t/r)+" "+n+(o?"s":"")}t.exports=function(t,e){e=e||{};var u=r(t);if("string"===u&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!e)return;var r=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"weeks":case"week":case"w":return 6048e5*r;case"days":case"day":case"d":return r*s;case"hours":case"hour":case"hrs":case"hr":case"h":return r*i;case"minutes":case"minute":case"mins":case"min":case"m":return r*o;case"seconds":case"second":case"secs":case"sec":case"s":return r*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}(t);if("number"===u&&isFinite(t))return e.long?function(t){var e=Math.abs(t);if(e>=s)return a(t,e,s,"day");if(e>=i)return a(t,e,i,"hour");if(e>=o)return a(t,e,o,"minute");if(e>=n)return a(t,e,n,"second");return t+" ms"}(t):function(t){var e=Math.abs(t);if(e>=s)return Math.round(t/s)+"d";if(e>=i)return Math.round(t/i)+"h";if(e>=o)return Math.round(t/o)+"m";if(e>=n)return Math.round(t/n)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(113),i=["__proto__","constructor","prototype"];
/*!
 * Returns the value passed to it.
 */
function s(t){return t}e.get=function(t,r,n,i){var a;"function"==typeof n&&(n.length<2?(i=n,n=void 0):(a=n,n=void 0)),i||(i=s);var u="string"==typeof t?o(t):t;if(!Array.isArray(u))throw new TypeError("Invalid `path`. Must be either string or array");for(var c,l=r,f=0;f<u.length;++f){if(c=u[f],Array.isArray(l)&&!/^\d+$/.test(c)){var p=u.slice(f);return[].concat(l).map((function(t){return t?e.get(p,t,n||a,i):i(void 0)}))}if(a)l=a(l,c);else{var h=n&&l[n]?l[n]:l;l=h instanceof Map?h.get(c):h[c]}if(!l)return i(l)}return i(l)},e.has=function(t,e){var r="string"==typeof t?o(t):t;if(!Array.isArray(r))throw new TypeError("Invalid `path`. Must be either string or array");for(var i=r.length,s=e,a=0;a<i;++a){if(null==s||"object"!==n(s)||!(r[a]in s))return!1;s=s[r[a]]}return!0},e.unset=function(t,e){var r="string"==typeof t?o(t):t;if(!Array.isArray(r))throw new TypeError("Invalid `path`. Must be either string or array");for(var s=r.length,a=e,u=0;u<s;++u){if(null==a||"object"!==n(a)||!(r[u]in a))return!1;if(-1!==i.indexOf(r[u]))return!1;if(u===s-1)return delete a[r[u]],!0;a=a instanceof Map?a.get(r[u]):a[r[u]]}return!0},e.set=function(t,r,n,a,u,c){var l;"function"==typeof a&&(a.length<2?(u=a,a=void 0):(l=a,a=void 0)),u||(u=s);var f="string"==typeof t?o(t):t;if(!Array.isArray(f))throw new TypeError("Invalid `path`. Must be either string or array");if(null!=n){for(var p=0;p<f.length;++p)if(-1!==i.indexOf(f[p]))return;for(var h,y=c||/\$/.test(t)&&!1!==c,d=n,_=(p=0,f.length-1);p<_;++p)if("$"!=(h=f[p])){if(Array.isArray(d)&&!/^\d+$/.test(h)){var m=f.slice(p);if(!y&&Array.isArray(r))for(var v=0;v<d.length&&v<r.length;++v)e.set(m,r[v],d[v],a||l,u,y);else for(v=0;v<d.length;++v)e.set(m,r,d[v],a||l,u,y);return}if(l)d=l(d,h);else{var g=a&&d[a]?d[a]:d;d=g instanceof Map?g.get(h):g[h]}if(!d)return}else if(p==_-1)break;if(h=f[_],a&&d[a]&&(d=d[a]),Array.isArray(d)&&!/^\d+$/.test(h))if(!y&&Array.isArray(r))!
/*!
 * Recursively set nested arrays
 */
function t(e,r,n,o,i,s){for(var a,u=0;u<e.length&&u<r.length;++u)a=e[u],Array.isArray(a)&&Array.isArray(r[u])?t(a,r[u],n,o,i,s):a&&(o?o(a,n,s(r[u])):(a[i]&&(a=a[i]),a[n]=s(r[u])))}(d,r,h,l,a,u);else for(v=0;v<d.length;++v){var b=d[v];b&&(l?l(b,h,u(r)):(b[a]&&(b=b[a]),b[h]=u(r)))}else l?l(d,h,u(r)):d instanceof Map?d.set(h,u(r)):d[h]=u(r)}}},function(t,e,r){"use strict";t.exports=function(t){for(var e=[],r="",n="DEFAULT",o=0;o<t.length;++o)"IN_SQUARE_BRACKETS"!==n||/\d/.test(t[o])||"]"===t[o]||(n="DEFAULT",r=e[e.length-1]+"["+r,e.splice(e.length-1,1)),"["===t[o]?("IMMEDIATELY_AFTER_SQUARE_BRACKETS"!==n&&(e.push(r),r=""),n="IN_SQUARE_BRACKETS"):"]"===t[o]?"IN_SQUARE_BRACKETS"===n?(n="IMMEDIATELY_AFTER_SQUARE_BRACKETS",e.push(r),r=""):(n="DEFAULT",r+=t[o]):"."===t[o]?("IMMEDIATELY_AFTER_SQUARE_BRACKETS"!==n&&(e.push(r),r=""),n="DEFAULT"):r+=t[o];return"IMMEDIATELY_AFTER_SQUARE_BRACKETS"!==n&&e.push(r),e}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(28);t.exports=function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._docs={},this._childDocs=[],null!=e&&(e=o(e),Object.assign(this,e),"object"===n(e.subPopulate)&&(this.populate=e.subPopulate),null!=e.perDocumentLimit&&null!=e.limit))throw new Error("Can not use `limit` and `perDocumentLimit` at the same time. Path: `"+e.path+"`.")}},function(t,e,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function s(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,a,u=s(t),c=1;c<arguments.length;c++){for(var l in r=Object(arguments[c]))o.call(r,l)&&(u[l]=r[l]);if(n){a=n(r);for(var f=0;f<a.length;f++)i.call(r,a[f])&&(u[a[f]]=r[a[f]])}}return u}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(62),i=r(22),s=r(4),a=r(68),u=r(119)("mquery");function c(t,e){if(!(this instanceof c))return new c(t,e);var r=this.constructor.prototype;this.op=r.op||void 0,this.options=Object.assign({},r.options),this._conditions=r._conditions?a.clone(r._conditions):{},this._fields=r._fields?a.clone(r._fields):void 0,this._update=r._update?a.clone(r._update):void 0,this._path=r._path||void 0,this._distinct=r._distinct||void 0,this._collection=r._collection||void 0,this._traceFunction=r._traceFunction||void 0,e&&this.setOptions(e),t&&(t.find&&t.remove&&t.update?this.collection(t):this.find(t))}var l="$geoWithin";Object.defineProperty(c,"use$geoWithin",{get:function(){return"$geoWithin"==l},set:function(t){l=!0===t?"$geoWithin":"$within"}}),c.prototype.toConstructor=function(){function t(e,r){if(!(this instanceof t))return new t(e,r);c.call(this,e,r)}a.inherits(t,c);var e=t.prototype;return e.options={},e.setOptions(this.options),e.op=this.op,e._conditions=a.clone(this._conditions),e._fields=a.clone(this._fields),e._update=a.clone(this._update),e._path=this._path,e._distinct=this._distinct,e._collection=this._collection,e._traceFunction=this._traceFunction,t},c.prototype.setOptions=function(t){if(!t||!a.isObject(t))return this;for(var e,r=a.keys(t),n=0;n<r.length;++n)if("function"==typeof this[e=r[n]]){var o=a.isArray(t[e])?t[e]:[t[e]];this[e].apply(this,o)}else this.options[e]=t[e];return this},c.prototype.collection=function(t){return this._collection=new c.Collection(t),this},c.prototype.collation=function(t){return this.options.collation=t,this},c.prototype.$where=function(t){return this._conditions.$where=t,this},c.prototype.where=function(){if(!arguments.length)return this;this.op||(this.op="find");var t=n(arguments[0]);if("string"==t)return this._path=arguments[0],2===arguments.length&&(this._conditions[this._path]=arguments[1]),this;if("object"==t&&!Array.isArray(arguments[0]))return this.merge(arguments[0]);throw new TypeError("path must be a string or object")},c.prototype.equals=function(t){this._ensurePath("equals");var e=this._path;return this._conditions[e]=t,this},c.prototype.eq=function(t){this._ensurePath("eq");var e=this._path;return this._conditions[e]=t,this},c.prototype.or=function(t){var e=this._conditions.$or||(this._conditions.$or=[]);return a.isArray(t)||(t=[t]),e.push.apply(e,t),this},c.prototype.nor=function(t){var e=this._conditions.$nor||(this._conditions.$nor=[]);return a.isArray(t)||(t=[t]),e.push.apply(e,t),this},c.prototype.and=function(t){var e=this._conditions.$and||(this._conditions.$and=[]);return Array.isArray(t)||(t=[t]),e.push.apply(e,t),this},
/*!
 * gt, gte, lt, lte, ne, in, nin, all, regex, size, maxDistance
 *
 *     Thing.where('type').nin(array)
 */
"gt gte lt lte ne in nin all regex size maxDistance minDistance".split(" ").forEach((function(t){c.prototype[t]=function(){var e,r;1===arguments.length?(this._ensurePath(t),r=arguments[0],e=this._path):(r=arguments[1],e=arguments[0]);var o=null===this._conditions[e]||"object"===n(this._conditions[e])?this._conditions[e]:this._conditions[e]={};return o["$"+t]=r,this}})),c.prototype.mod=function(){var t,e;1===arguments.length?(this._ensurePath("mod"),t=arguments[0],e=this._path):2!==arguments.length||a.isArray(arguments[1])?3===arguments.length?(t=o(arguments,1),e=arguments[0]):(t=arguments[1],e=arguments[0]):(this._ensurePath("mod"),t=o(arguments),e=this._path);var r=this._conditions[e]||(this._conditions[e]={});return r.$mod=t,this},c.prototype.exists=function(){var t,e;0===arguments.length?(this._ensurePath("exists"),t=this._path,e=!0):1===arguments.length?"boolean"==typeof arguments[0]?(this._ensurePath("exists"),t=this._path,e=arguments[0]):(t=arguments[0],e=!0):2===arguments.length&&(t=arguments[0],e=arguments[1]);var r=this._conditions[t]||(this._conditions[t]={});return r.$exists=e,this},c.prototype.elemMatch=function(){if(null==arguments[0])throw new TypeError("Invalid argument");var t,e,r;if("function"==typeof arguments[0])this._ensurePath("elemMatch"),e=this._path,t=arguments[0];else if(a.isObject(arguments[0]))this._ensurePath("elemMatch"),e=this._path,r=arguments[0];else if("function"==typeof arguments[1])e=arguments[0],t=arguments[1];else{if(!arguments[1]||!a.isObject(arguments[1]))throw new TypeError("Invalid argument");e=arguments[0],r=arguments[1]}t&&(t(r=new c),r=r._conditions);var n=this._conditions[e]||(this._conditions[e]={});return n.$elemMatch=r,this},c.prototype.within=function(){if(this._ensurePath("within"),this._geoComparison=l,0===arguments.length)return this;if(2===arguments.length)return this.box.apply(this,arguments);if(2<arguments.length)return this.polygon.apply(this,arguments);var t=arguments[0];if(!t)throw new TypeError("Invalid argument");if(t.center)return this.circle(t);if(t.box)return this.box.apply(this,t.box);if(t.polygon)return this.polygon.apply(this,t.polygon);if(t.type&&t.coordinates)return this.geometry(t);throw new TypeError("Invalid argument")},c.prototype.box=function(){var t,e;if(3===arguments.length)t=arguments[0],e=[arguments[1],arguments[2]];else{if(2!==arguments.length)throw new TypeError("Invalid argument");this._ensurePath("box"),t=this._path,e=[arguments[0],arguments[1]]}var r=this._conditions[t]||(this._conditions[t]={});return r[this._geoComparison||l]={$box:e},this},c.prototype.polygon=function(){var t,e;"string"==typeof arguments[0]?(e=arguments[0],t=o(arguments,1)):(this._ensurePath("polygon"),e=this._path,t=o(arguments));var r=this._conditions[e]||(this._conditions[e]={});return r[this._geoComparison||l]={$polygon:t},this},c.prototype.circle=function(){var t,e;if(1===arguments.length)this._ensurePath("circle"),t=this._path,e=arguments[0];else{if(2!==arguments.length)throw new TypeError("Invalid argument");t=arguments[0],e=arguments[1]}if(!("radius"in e)||!e.center)throw new Error("center and radius are required");var r=this._conditions[t]||(this._conditions[t]={}),n=e.spherical?"$centerSphere":"$center",o=this._geoComparison||l;return r[o]={},r[o][n]=[e.center,e.radius],"unique"in e&&(r[o].$uniqueDocs=!!e.unique),this},c.prototype.near=function(){var t,e;if(this._geoComparison="$near",0===arguments.length)return this;if(1===arguments.length)this._ensurePath("near"),t=this._path,e=arguments[0];else{if(2!==arguments.length)throw new TypeError("Invalid argument");t=arguments[0],e=arguments[1]}if(!e.center)throw new Error("center is required");var r=this._conditions[t]||(this._conditions[t]={}),n=e.spherical?"$nearSphere":"$near";if(Array.isArray(e.center)){r[n]=e.center;var o="maxDistance"in e?e.maxDistance:null;null!=o&&(r.$maxDistance=o),null!=e.minDistance&&(r.$minDistance=e.minDistance)}else{if("Point"!=e.center.type||!Array.isArray(e.center.coordinates))throw new Error(s.format("Invalid GeoJSON specified for %s",n));r[n]={$geometry:e.center},"maxDistance"in e&&(r[n].$maxDistance=e.maxDistance),"minDistance"in e&&(r[n].$minDistance=e.minDistance)}return this},c.prototype.intersects=function(){if(this._ensurePath("intersects"),this._geoComparison="$geoIntersects",0===arguments.length)return this;var t=arguments[0];if(null!=t&&t.type&&t.coordinates)return this.geometry(t);throw new TypeError("Invalid argument")},c.prototype.geometry=function(){if("$within"!=this._geoComparison&&"$geoWithin"!=this._geoComparison&&"$near"!=this._geoComparison&&"$geoIntersects"!=this._geoComparison)throw new Error("geometry() must come after `within()`, `intersects()`, or `near()");var t,e;if(1!==arguments.length)throw new TypeError("Invalid argument");if(this._ensurePath("geometry"),e=this._path,!(t=arguments[0]).type||!Array.isArray(t.coordinates))throw new TypeError("Invalid argument");var r=this._conditions[e]||(this._conditions[e]={});return r[this._geoComparison]={$geometry:t},this},c.prototype.select=function(){var t=arguments[0];if(!t)return this;if(1!==arguments.length)throw new Error("Invalid select: select only takes 1 argument");this._validate("select");var e,r,o=this._fields||(this._fields={}),i=n(t);if(("string"==i||a.isArgumentsObject(t))&&"number"==typeof t.length||Array.isArray(t)){for("string"==i&&(t=t.split(/\s+/)),e=0,r=t.length;e<r;++e){var s=t[e];if(s){var u="-"==s[0]?0:1;0===u&&(s=s.substring(1)),o[s]=u}}return this}if(a.isObject(t)){var c=a.keys(t);for(e=0;e<c.length;++e)o[c[e]]=t[c[e]];return this}throw new TypeError("Invalid select() argument. Must be string or object.")},c.prototype.slice=function(){if(0===arguments.length)return this;var t,e;if(this._validate("slice"),1===arguments.length){var r=arguments[0];if("object"===n(r)&&!Array.isArray(r)){for(var i=Object.keys(r),s=i.length,a=0;a<s;++a)this.slice(i[a],r[i[a]]);return this}this._ensurePath("slice"),t=this._path,e=arguments[0]}else 2===arguments.length?"number"==typeof arguments[0]?(this._ensurePath("slice"),t=this._path,e=o(arguments)):(t=arguments[0],e=arguments[1]):3===arguments.length&&(t=arguments[0],e=o(arguments,1));var u=this._fields||(this._fields={});return u[t]={$slice:e},this},c.prototype.sort=function(t){if(!t)return this;var e,r,o;this._validate("sort");var i=n(t);if(Array.isArray(t)){for(r=t.length,e=0;e<t.length;++e){if(!Array.isArray(t[e]))throw new Error("Invalid sort() argument, must be array of arrays");h(this.options,t[e][0],t[e][1])}return this}if(1===arguments.length&&"string"==i){for(r=(t=t.split(/\s+/)).length,e=0;e<r;++e)if(o=t[e]){var s="-"==o[0]?-1:1;-1===s&&(o=o.substring(1)),p(this.options,o,s)}return this}if(a.isObject(t)){var u=a.keys(t);for(e=0;e<u.length;++e)o=u[e],p(this.options,o,t[o]);return this}if("undefined"!=typeof Map&&t instanceof Map)return y(this.options,t),this;throw new TypeError("Invalid sort() argument. Must be a string, object, or array.")};
/*!
 * @ignore
 */
var f={1:1,"-1":-1,asc:1,ascending:1,desc:-1,descending:-1};function p(t,e,r){if(Array.isArray(t.sort))throw new TypeError("Can't mix sort syntaxes. Use either array or object:\n- `.sort([['field', 1], ['test', -1]])`\n- `.sort({ field: 1, test: -1 })`");var n;if(r&&r.$meta)(n=t.sort||(t.sort={}))[e]={$meta:r.$meta};else{n=t.sort||(t.sort={});var o=String(r||1).toLowerCase();if(!(o=f[o]))throw new TypeError("Invalid sort value: { "+e+": "+r+" }");n[e]=o}}function h(t,e,r){if(t.sort=t.sort||[],!Array.isArray(t.sort))throw new TypeError("Can't mix sort syntaxes. Use either array or object:\n- `.sort([['field', 1], ['test', -1]])`\n- `.sort({ field: 1, test: -1 })`");var n=String(r||1).toLowerCase();if(!(n=f[n]))throw new TypeError("Invalid sort value: [ "+e+", "+r+" ]");t.sort.push([e,n])}function y(t,e){if(t.sort=t.sort||new Map,!(t.sort instanceof Map))throw new TypeError("Can't mix sort syntaxes. Use either array or object or map consistently");e.forEach((function(e,r){var n=String(e||1).toLowerCase();if(!(n=f[n]))throw new TypeError("Invalid sort value: < "+r+": "+e+" >");t.sort.set(r,n)}))}
/*!
 * limit, skip, maxScan, batchSize, comment
 *
 * Sets these associated options.
 *
 *     query.comment('feed query');
 */
/*!
 * Internal helper for update, updateMany, updateOne
 */
function d(t,e,r,n,o,i,s){return t.op=e,c.canMerge(r)&&t.merge(r),n&&t._mergeUpdate(n),a.isObject(o)&&t.setOptions(o),i||s?!t._update||!t.options.overwrite&&0===a.keys(t._update).length?(s&&a.soon(s.bind(null,null,0)),t):(o=t._optionsForExec(),s||(o.safe=!1),r=t._conditions,n=t._updateForExec(),u("update",t._collection.collectionName,r,n,o),s=t._wrapCallback(e,s,{conditions:r,doc:n,options:o}),t._collection[e](r,n,o,a.tick(s)),t):t}["limit","skip","maxScan","batchSize","comment"].forEach((function(t){c.prototype[t]=function(e){return this._validate(t),this.options[t]=e,this}})),c.prototype.maxTime=c.prototype.maxTimeMS=function(t){return this._validate("maxTime"),this.options.maxTimeMS=t,this},c.prototype.snapshot=function(){return this._validate("snapshot"),this.options.snapshot=!arguments.length||!!arguments[0],this},c.prototype.hint=function(){if(0===arguments.length)return this;this._validate("hint");var t=arguments[0];if(a.isObject(t)){var e=this.options.hint||(this.options.hint={});for(var r in t)e[r]=t[r];return this}if("string"==typeof t)return this.options.hint=t,this;throw new TypeError("Invalid hint. "+t)},c.prototype.j=function(t){return this.options.j=t,this},c.prototype.slaveOk=function(t){return this.options.slaveOk=!arguments.length||!!t,this},c.prototype.read=c.prototype.setReadPreference=function(t){return arguments.length>1&&!c.prototype.read.deprecationWarningIssued&&(console.error("Deprecation warning: 'tags' argument is not supported anymore in Query.read() method. Please use mongodb.ReadPreference object instead."),c.prototype.read.deprecationWarningIssued=!0),this.options.readPreference=a.readPref(t),this},c.prototype.readConcern=c.prototype.r=function(t){return this.options.readConcern=a.readConcern(t),this},c.prototype.tailable=function(){return this._validate("tailable"),this.options.tailable=!arguments.length||!!arguments[0],this},c.prototype.writeConcern=c.prototype.w=function(t){return"object"===n(t)?(void 0!==t.j&&(this.options.j=t.j),void 0!==t.w&&(this.options.w=t.w),void 0!==t.wtimeout&&(this.options.wtimeout=t.wtimeout)):this.options.w="m"===t?"majority":t,this},c.prototype.wtimeout=c.prototype.wTimeout=function(t){return this.options.wtimeout=t,this},c.prototype.merge=function(t){if(!t)return this;if(!c.canMerge(t))throw new TypeError("Invalid argument. Expected instanceof mquery or plain object");return t instanceof c?(t._conditions&&a.merge(this._conditions,t._conditions),t._fields&&(this._fields||(this._fields={}),a.merge(this._fields,t._fields)),t.options&&(this.options||(this.options={}),a.merge(this.options,t.options)),t._update&&(this._update||(this._update={}),a.mergeClone(this._update,t._update)),t._distinct&&(this._distinct=t._distinct),this):(a.merge(this._conditions,t),this)},c.prototype.find=function(t,e){if(this.op="find","function"==typeof t?(e=t,t=void 0):c.canMerge(t)&&this.merge(t),!e)return this;var r=this._conditions,n=this._optionsForExec();return this.$useProjection?n.projection=this._fieldsForExec():n.fields=this._fieldsForExec(),u("find",this._collection.collectionName,r,n),e=this._wrapCallback("find",e,{conditions:r,options:n}),this._collection.find(r,n,a.tick(e)),this},c.prototype.cursor=function(t){if(this.op){if("find"!==this.op)throw new TypeError(".cursor only support .find method")}else this.find(t);var e=this._conditions,r=this._optionsForExec();return this.$useProjection?r.projection=this._fieldsForExec():r.fields=this._fieldsForExec(),u("findCursor",this._collection.collectionName,e,r),this._collection.findCursor(e,r)},c.prototype.findOne=function(t,e){if(this.op="findOne","function"==typeof t?(e=t,t=void 0):c.canMerge(t)&&this.merge(t),!e)return this;var r=this._conditions,n=this._optionsForExec();return this.$useProjection?n.projection=this._fieldsForExec():n.fields=this._fieldsForExec(),u("findOne",this._collection.collectionName,r,n),e=this._wrapCallback("findOne",e,{conditions:r,options:n}),this._collection.findOne(r,n,a.tick(e)),this},c.prototype.count=function(t,e){if(this.op="count",this._validate(),"function"==typeof t?(e=t,t=void 0):c.canMerge(t)&&this.merge(t),!e)return this;var r=this._conditions,n=this._optionsForExec();return u("count",this._collection.collectionName,r,n),e=this._wrapCallback("count",e,{conditions:r,options:n}),this._collection.count(r,n,a.tick(e)),this},c.prototype.distinct=function(t,e,r){if(this.op="distinct",this._validate(),!r){switch(n(e)){case"function":r=e,"string"==typeof t&&(e=t,t=void 0);break;case"undefined":case"string":break;default:throw new TypeError("Invalid `field` argument. Must be string or function")}switch(n(t)){case"function":r=t,t=e=void 0;break;case"string":e=t,t=void 0}}if("string"==typeof e&&(this._distinct=e),c.canMerge(t)&&this.merge(t),!r)return this;if(!this._distinct)throw new Error("No value for `distinct` has been declared");var o=this._conditions,i=this._optionsForExec();return u("distinct",this._collection.collectionName,o,i),r=this._wrapCallback("distinct",r,{conditions:o,options:i}),this._collection.distinct(this._distinct,o,i,a.tick(r)),this},c.prototype.update=function(t,e,r,o){var i;switch(arguments.length){case 3:"function"==typeof r&&(o=r,r=void 0);break;case 2:"function"==typeof e&&(o=e,e=t,t=void 0);break;case 1:switch(n(t)){case"function":o=t,t=r=e=void 0;break;case"boolean":i=t,t=void 0;break;default:e=t,t=r=void 0}}return d(this,"update",t,e,r,i,o)},c.prototype.updateMany=function(t,e,r,o){var i;switch(arguments.length){case 3:"function"==typeof r&&(o=r,r=void 0);break;case 2:"function"==typeof e&&(o=e,e=t,t=void 0);break;case 1:switch(n(t)){case"function":o=t,t=r=e=void 0;break;case"boolean":i=t,t=void 0;break;default:e=t,t=r=void 0}}return d(this,"updateMany",t,e,r,i,o)},c.prototype.updateOne=function(t,e,r,o){var i;switch(arguments.length){case 3:"function"==typeof r&&(o=r,r=void 0);break;case 2:"function"==typeof e&&(o=e,e=t,t=void 0);break;case 1:switch(n(t)){case"function":o=t,t=r=e=void 0;break;case"boolean":i=t,t=void 0;break;default:e=t,t=r=void 0}}return d(this,"updateOne",t,e,r,i,o)},c.prototype.replaceOne=function(t,e,r,o){var i;switch(arguments.length){case 3:"function"==typeof r&&(o=r,r=void 0);break;case 2:"function"==typeof e&&(o=e,e=t,t=void 0);break;case 1:switch(n(t)){case"function":o=t,t=r=e=void 0;break;case"boolean":i=t,t=void 0;break;default:e=t,t=r=void 0}}return this.setOptions({overwrite:!0}),d(this,"replaceOne",t,e,r,i,o)},c.prototype.remove=function(t,e){var r;if(this.op="remove","function"==typeof t?(e=t,t=void 0):c.canMerge(t)?this.merge(t):!0===t&&(r=t,t=void 0),!r&&!e)return this;var n=this._optionsForExec();e||(n.safe=!1);var o=this._conditions;return u("remove",this._collection.collectionName,o,n),e=this._wrapCallback("remove",e,{conditions:o,options:n}),this._collection.remove(o,n,a.tick(e)),this},c.prototype.deleteOne=function(t,e){var r;if(this.op="deleteOne","function"==typeof t?(e=t,t=void 0):c.canMerge(t)?this.merge(t):!0===t&&(r=t,t=void 0),!r&&!e)return this;var n=this._optionsForExec();e||(n.safe=!1),delete n.justOne;var o=this._conditions;return u("deleteOne",this._collection.collectionName,o,n),e=this._wrapCallback("deleteOne",e,{conditions:o,options:n}),this._collection.deleteOne(o,n,a.tick(e)),this},c.prototype.deleteMany=function(t,e){var r;if(this.op="deleteMany","function"==typeof t?(e=t,t=void 0):c.canMerge(t)?this.merge(t):!0===t&&(r=t,t=void 0),!r&&!e)return this;var n=this._optionsForExec();e||(n.safe=!1),delete n.justOne;var o=this._conditions;return u("deleteOne",this._collection.collectionName,o,n),e=this._wrapCallback("deleteOne",e,{conditions:o,options:n}),this._collection.deleteMany(o,n,a.tick(e)),this},c.prototype.findOneAndUpdate=function(t,e,r,n){switch(this.op="findOneAndUpdate",this._validate(),arguments.length){case 3:"function"==typeof r&&(n=r,r={});break;case 2:"function"==typeof e&&(n=e,e=t,t=void 0),r=void 0;break;case 1:"function"==typeof t?(n=t,t=r=e=void 0):(e=t,t=r=void 0)}return c.canMerge(t)&&this.merge(t),e&&this._mergeUpdate(e),r&&this.setOptions(r),n?this._findAndModify("update",n):this},c.prototype.findOneAndRemove=c.prototype.findOneAndDelete=function(t,e,r){return this.op="findOneAndRemove",this._validate(),"function"==typeof e?(r=e,e=void 0):"function"==typeof t&&(r=t,t=void 0),c.canMerge(t)&&this.merge(t),e&&this.setOptions(e),r?this._findAndModify("remove",r):this},c.prototype._findAndModify=function(t,e){i.equal("function",n(e));var r,o=this._optionsForExec();if("remove"==t)o.remove=!0;else if("new"in o||(o.new=!0),"upsert"in o||(o.upsert=!1),!(r=this._updateForExec())){if(!o.upsert)return this.findOne(e);r={$set:{}}}null!=this._fieldsForExec()&&(this.$useProjection?o.projection=this._fieldsForExec():o.fields=this._fieldsForExec());var s=this._conditions;return u("findAndModify",this._collection.collectionName,s,r,o),e=this._wrapCallback("findAndModify",e,{conditions:s,doc:r,options:o}),this._collection.findAndModify(s,r,o,a.tick(e)),this},c.prototype._wrapCallback=function(t,e,r){var n=this._traceFunction||c.traceFunction;if(n){r.collectionName=this._collection.collectionName;var o=n&&n.call(null,t,r,this),i=(new Date).getTime();return function(t,r){if(o){var n=(new Date).getTime()-i;o.call(null,t,r,n)}e&&e.apply(null,arguments)}}return e},c.prototype.setTraceFunction=function(t){return this._traceFunction=t,this},c.prototype.exec=function(t,e){switch(n(t)){case"function":e=t,t=null;break;case"string":this.op=t}i.ok(this.op,"Missing query type: (find, update, etc)"),"update"!=this.op&&"remove"!=this.op||e||(e=!0);var r=this;if("function"!=typeof e)return new c.Promise((function(t,e){r[r.op]((function(r,n){r?e(r):t(n),t=e=null}))}));this[this.op](e)},c.prototype.thunk=function(){var t=this;return function(e){t.exec(e)}},c.prototype.then=function(t,e){var r=this;return new c.Promise((function(t,e){r.exec((function(r,n){r?e(r):t(n),t=e=null}))})).then(t,e)},c.prototype.stream=function(t){if("find"!=this.op)throw new Error("stream() is only available for find");var e=this._conditions,r=this._optionsForExec();return this.$useProjection?r.projection=this._fieldsForExec():r.fields=this._fieldsForExec(),u("stream",this._collection.collectionName,e,r,t),this._collection.findStream(e,r,t)},c.prototype.selected=function(){return!!(this._fields&&Object.keys(this._fields).length>0)},c.prototype.selectedInclusively=function(){if(!this._fields)return!1;var t=Object.keys(this._fields);if(0===t.length)return!1;for(var e=0;e<t.length;++e){var r=t[e];if(0===this._fields[r])return!1;if(this._fields[r]&&"object"===n(this._fields[r])&&this._fields[r].$meta)return!1}return!0},c.prototype.selectedExclusively=function(){if(!this._fields)return!1;var t=Object.keys(this._fields);if(0===t.length)return!1;for(var e=0;e<t.length;++e){var r=t[e];if(0===this._fields[r])return!0}return!1},c.prototype._mergeUpdate=function(t){this._update||(this._update={}),t instanceof c?t._update&&a.mergeClone(this._update,t._update):a.mergeClone(this._update,t)},c.prototype._optionsForExec=function(){return a.clone(this.options)},c.prototype._fieldsForExec=function(){return a.clone(this._fields)},c.prototype._updateForExec=function(){for(var t=a.clone(this._update),e=a.keys(t),r=e.length,n={};r--;){var o=e[r];this.options.overwrite?n[o]=t[o]:"$"!==o[0]?(n.$set||(t.$set?n.$set=t.$set:n.$set={}),n.$set[o]=t[o],e.splice(r,1),~e.indexOf("$set")||e.push("$set")):"$set"===o&&n.$set||(n[o]=t[o])}return this._compiledUpdate=n,n},c.prototype._ensurePath=function(t){if(!this._path)throw new Error(t+"() must be used after where() when called with these arguments")},
/*!
 * Permissions
 */
c.permissions=r(122),c._isPermitted=function(t,e){var r=c.permissions[e];return!r||!0!==r[t]},c.prototype._validate=function(t){var e,r;if(void 0===t){if("function"!=typeof(r=c.permissions[this.op]))return!0;e=r(this)}else c._isPermitted(t,this.op)||(e=t);if(e)throw new Error(e+" cannot be used with "+this.op)},c.canMerge=function(t){return t instanceof c||a.isObject(t)},c.setGlobalTraceFunction=function(t){c.traceFunction=t},
/*!
 * Exports.
 */
c.utils=a,c.env=r(70),c.Collection=r(124),c.BaseCollection=r(30),c.Promise=r(126),t.exports=c},function(t,e,r){(function(t,e){!function(t,r){"use strict";if(!t.setImmediate){var n,o,i,s,a,u=1,c={},l=!1,f=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?n=function(t){e.nextTick((function(){y(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){y(t.data)},n=function(t){i.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,n=function(t){var e=f.createElement("script");e.onreadystatechange=function(){y(t),e.onreadystatechange=null,o.removeChild(e),e=null},o.appendChild(e)}):n=function(t){setTimeout(y,0,t)}:(s="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&y(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),n=function(e){t.postMessage(s+e,"*")}),p.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),r=0;r<e.length;r++)e[r]=arguments[r+1];var o={callback:t,args:e};return c[u]=o,n(u),u++},p.clearImmediate=h}function h(t){delete c[t]}function y(t){if(l)setTimeout(y,0,t);else{var e=c[t];if(e){l=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(void 0,r)}}(e)}finally{h(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,r(11),r(8))},function(t,e,r){var n=r(1),o=n.Buffer;function i(t,e){for(var r in t)e[r]=t[r]}function s(t,e,r){return o(t,e,r)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?t.exports=n:(i(n,e),e.Buffer=s),i(o,s),s.from=function(t,e,r){if("number"==typeof t)throw new TypeError("Argument must not be a number");return o(t,e,r)},s.alloc=function(t,e,r){if("number"!=typeof t)throw new TypeError("Argument must be a number");var n=o(t);return void 0!==e?"string"==typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},s.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return o(t)},s.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}},function(t,e,r){(function(n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){var t;try{t=e.storage.debug}catch(t){}return!t&&void 0!==n&&"env"in n&&(t=n.env.DEBUG),t}(e=t.exports=r(120)).log=function(){return"object"===("undefined"==typeof console?"undefined":o(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))})),t.splice(i,0,n)},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}},e.load=i,e.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(i())}).call(this,r(8))},function(t,e,r){function n(t){var r;function n(){if(n.enabled){var t=n,o=+new Date,i=o-(r||o);t.diff=i,t.prev=r,t.curr=o,r=o;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var u=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;u++;var o=e.formatters[n];if("function"==typeof o){var i=s[u];r=o.call(t,i),s.splice(u,1),u--}return r})),e.formatArgs.call(t,s);var c=n.log||e.log||console.log.bind(console);c.apply(t,s)}}return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=function(t){var r,n=0;for(r in t)n=(n<<5)-n+t.charCodeAt(r),n|=0;return e.colors[Math.abs(n)%e.colors.length]}(t),n.destroy=o,"function"==typeof e.init&&e.init(n),e.instances.push(n),n}function o(){var t=e.instances.indexOf(this);return-1!==t&&(e.instances.splice(t,1),!0)}(e=t.exports=n.debug=n.default=n).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){var r;e.save(t),e.names=[],e.skips=[];var n=("string"==typeof t?t:"").split(/[\s,]+/),o=n.length;for(r=0;r<o;r++)n[r]&&("-"===(t=n[r].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(r=0;r<e.instances.length;r++){var i=e.instances[r];i.enabled=e.enabled(i.namespace)}},e.enabled=function(t){if("*"===t[t.length-1])return!0;var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1},e.humanize=r(121),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=1e3,o=6e4,i=60*o,s=24*i;function a(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}t.exports=function(t,e){e=e||{};var u,c=r(t);if("string"===c&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!e)return;var r=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"days":case"day":case"d":return r*s;case"hours":case"hour":case"hrs":case"hr":case"h":return r*i;case"minutes":case"minute":case"mins":case"min":case"m":return r*o;case"seconds":case"second":case"secs":case"sec":case"s":return r*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}(t);if("number"===c&&!1===isNaN(t))return e.long?a(u=t,s,"day")||a(u,i,"hour")||a(u,o,"minute")||a(u,n,"second")||u+" ms":function(t){if(t>=s)return Math.round(t/s)+"d";if(t>=i)return Math.round(t/i)+"h";if(t>=o)return Math.round(t/o)+"m";if(t>=n)return Math.round(t/n)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,r){"use strict";var n=e;n.distinct=function(t){return t._fields&&Object.keys(t._fields).length>0?"field selection and slice":(Object.keys(n.distinct).every((function(r){return!t.options[r]||(e=r,!1)})),e);var e},n.distinct.select=n.distinct.slice=n.distinct.sort=n.distinct.limit=n.distinct.skip=n.distinct.batchSize=n.distinct.comment=n.distinct.maxScan=n.distinct.snapshot=n.distinct.hint=n.distinct.tailable=!0,n.findOneAndUpdate=n.findOneAndRemove=function(t){var e;return Object.keys(n.findOneAndUpdate).every((function(r){return!t.options[r]||(e=r,!1)})),e},n.findOneAndUpdate.limit=n.findOneAndUpdate.skip=n.findOneAndUpdate.batchSize=n.findOneAndUpdate.maxScan=n.findOneAndUpdate.snapshot=n.findOneAndUpdate.hint=n.findOneAndUpdate.tailable=n.findOneAndUpdate.comment=!0,n.count=function(t){return t._fields&&Object.keys(t._fields).length>0?"field selection and slice":(Object.keys(n.count).every((function(r){return!t.options[r]||(e=r,!1)})),e);var e},n.count.slice=n.count.batchSize=n.count.comment=n.count.maxScan=n.count.snapshot=n.count.tailable=!0},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){"use strict";var n=r(70);if("unknown"==n.type)throw new Error("Unknown environment");t.exports=n.isNode?r(125):(n.isMongo,r(30))},function(t,e,r){"use strict";var n=r(30);function o(t){this.collection=t,this.collectionName=t.collectionName}r(68).inherits(o,n),o.prototype.find=function(t,e,r){this.collection.find(t,e,(function(t,e){if(t)return r(t);try{e.toArray(r)}catch(t){r(t)}}))},o.prototype.findOne=function(t,e,r){this.collection.findOne(t,e,r)},o.prototype.count=function(t,e,r){this.collection.count(t,e,r)},o.prototype.distinct=function(t,e,r,n){this.collection.distinct(t,e,r,n)},o.prototype.update=function(t,e,r,n){this.collection.update(t,e,r,n)},o.prototype.updateMany=function(t,e,r,n){this.collection.updateMany(t,e,r,n)},o.prototype.updateOne=function(t,e,r,n){this.collection.updateOne(t,e,r,n)},o.prototype.replaceOne=function(t,e,r,n){this.collection.replaceOne(t,e,r,n)},o.prototype.deleteOne=function(t,e,r){this.collection.deleteOne(t,e,r)},o.prototype.deleteMany=function(t,e,r){this.collection.deleteMany(t,e,r)},o.prototype.remove=function(t,e,r){this.collection.remove(t,e,r)},o.prototype.findAndModify=function(t,e,r,n){var o=Array.isArray(r.sort)?r.sort:[];this.collection.findAndModify(t,o,e,r,n)},o.prototype.findStream=function(t,e,r){return this.collection.find(t,e).stream(r)},o.prototype.findCursor=function(t,e){return this.collection.find(t,e)},t.exports=o},function(t,e,r){(function(r,n,o){var i,s,a,u;function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2017 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */u=function(){var t,e,i;return function t(e,r,n){function o(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof _dereq_&&_dereq_;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[s]={exports:{}};e[s][0].call(l.exports,(function(t){var r=e[s][1][t];return o(r||t)}),l,l.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof _dereq_&&_dereq_,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,r){"use strict";e.exports=function(t){var e=t._SomePromiseArray;function r(t){var r=new e(t),n=r.promise();return r.setHowMany(1),r.setUnwrap(),r.init(),n}t.any=function(t){return r(t)},t.prototype.any=function(){return r(this)}}},{}],2:[function(t,e,n){"use strict";var o;try{throw new Error}catch(t){o=t}var i=t("./schedule"),s=t("./queue"),a=t("./util");function u(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new s(16),this._normalQueue=new s(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0;var t=this;this.drainQueues=function(){t._drainQueues()},this._schedule=i}function c(t,e,r){this._lateQueue.push(t,e,r),this._queueTick()}function l(t,e,r){this._normalQueue.push(t,e,r),this._queueTick()}function f(t){this._normalQueue._pushOne(t),this._queueTick()}u.prototype.setScheduler=function(t){var e=this._schedule;return this._schedule=t,this._customScheduler=!0,e},u.prototype.hasCustomScheduler=function(){return this._customScheduler},u.prototype.enableTrampoline=function(){this._trampolineEnabled=!0},u.prototype.disableTrampolineIfNecessary=function(){a.hasDevTools&&(this._trampolineEnabled=!1)},u.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues},u.prototype.fatalError=function(t,e){e?(r.stderr.write("Fatal "+(t instanceof Error?t.stack:t)+"\n"),r.exit(2)):this.throwLater(t)},u.prototype.throwLater=function(t,e){if(1===arguments.length&&(e=t,t=function(){throw e}),"undefined"!=typeof setTimeout)setTimeout((function(){t(e)}),0);else try{this._schedule((function(){t(e)}))}catch(t){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}},a.hasDevTools?(u.prototype.invokeLater=function(t,e,r){this._trampolineEnabled?c.call(this,t,e,r):this._schedule((function(){setTimeout((function(){t.call(e,r)}),100)}))},u.prototype.invoke=function(t,e,r){this._trampolineEnabled?l.call(this,t,e,r):this._schedule((function(){t.call(e,r)}))},u.prototype.settlePromises=function(t){this._trampolineEnabled?f.call(this,t):this._schedule((function(){t._settlePromises()}))}):(u.prototype.invokeLater=c,u.prototype.invoke=l,u.prototype.settlePromises=f),u.prototype._drainQueue=function(t){for(;t.length()>0;){var e=t.shift();if("function"==typeof e){var r=t.shift(),n=t.shift();e.call(r,n)}else e._settlePromises()}},u.prototype._drainQueues=function(){this._drainQueue(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,this._drainQueue(this._lateQueue)},u.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},u.prototype._reset=function(){this._isTickUsed=!1},e.exports=u,e.exports.firstLineError=o},{"./queue":26,"./schedule":29,"./util":36}],3:[function(t,e,r){"use strict";e.exports=function(t,e,r,n){var o=!1,i=function(t,e){this._reject(e)},s=function(t,e){e.promiseRejectionQueued=!0,e.bindingPromise._then(i,i,null,this,t)},a=function(t,e){0==(50397184&this._bitField)&&this._resolveCallback(e.target)},u=function(t,e){e.promiseRejectionQueued||this._reject(t)};t.prototype.bind=function(i){o||(o=!0,t.prototype._propagateFrom=n.propagateFromFunction(),t.prototype._boundValue=n.boundValueFunction());var c=r(i),l=new t(e);l._propagateFrom(this,1);var f=this._target();if(l._setBoundTo(c),c instanceof t){var p={promiseRejectionQueued:!1,promise:l,target:f,bindingPromise:c};f._then(e,s,void 0,l,p),c._then(a,u,void 0,l,p),l._setOnCancel(c)}else l._resolveCallback(f);return l},t.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=2097152|this._bitField,this._boundTo=t):this._bitField=-2097153&this._bitField},t.prototype._isBound=function(){return 2097152==(2097152&this._bitField)},t.bind=function(e,r){return t.resolve(r).bind(e)}}},{}],4:[function(t,e,r){"use strict";var n;"undefined"!=typeof Promise&&(n=Promise);var o=t("./promise")();o.noConflict=function(){try{Promise===o&&(Promise=n)}catch(t){}return o},e.exports=o},{"./promise":22}],5:[function(t,e,r){"use strict";var n=Object.create;if(n){var o=n(null),i=n(null);o[" size"]=i[" size"]=0}e.exports=function(e){var r=t("./util"),n=r.canEvaluate;function o(t){return function(t,n){var o;if(null!=t&&(o=t[n]),"function"!=typeof o){var i="Object "+r.classString(t)+" has no method '"+r.toString(n)+"'";throw new e.TypeError(i)}return o}(t,this.pop()).apply(t,this)}function i(t){return t[this]}function s(t){var e=+this;return e<0&&(e=Math.max(0,e+t.length)),t[e]}r.isIdentifier,e.prototype.call=function(t){var e=[].slice.call(arguments,1);return e.push(t),this._then(o,void 0,void 0,e,void 0)},e.prototype.get=function(t){var e;if("number"==typeof t)e=s;else if(n){var r=(void 0)(t);e=null!==r?r:i}else e=i;return this._then(e,void 0,void 0,t,void 0)}}},{"./util":36}],6:[function(t,e,r){"use strict";e.exports=function(e,r,n,o){var i=t("./util"),s=i.tryCatch,a=i.errorObj,u=e._async;e.prototype.break=e.prototype.cancel=function(){if(!o.cancellation())return this._warn("cancellation is disabled");for(var t=this,e=t;t._isCancellable();){if(!t._cancelBy(e)){e._isFollowing()?e._followee().cancel():e._cancelBranched();break}var r=t._cancellationParent;if(null==r||!r._isCancellable()){t._isFollowing()?t._followee().cancel():t._cancelBranched();break}t._isFollowing()&&t._followee().cancel(),t._setWillBeCancelled(),e=t,t=r}},e.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--},e.prototype._enoughBranchesHaveCancelled=function(){return void 0===this._branchesRemainingToCancel||this._branchesRemainingToCancel<=0},e.prototype._cancelBy=function(t){return t===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),!!this._enoughBranchesHaveCancelled()&&(this._invokeOnCancel(),!0))},e.prototype._cancelBranched=function(){this._enoughBranchesHaveCancelled()&&this._cancel()},e.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),u.invoke(this._cancelPromises,this,void 0))},e.prototype._cancelPromises=function(){this._length()>0&&this._settlePromises()},e.prototype._unsetOnCancel=function(){this._onCancelField=void 0},e.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled()},e.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled()},e.prototype._doInvokeOnCancel=function(t,e){if(i.isArray(t))for(var r=0;r<t.length;++r)this._doInvokeOnCancel(t[r],e);else if(void 0!==t)if("function"==typeof t){if(!e){var n=s(t).call(this._boundValue());n===a&&(this._attachExtraTrace(n.e),u.throwLater(n.e))}}else t._resultCancelled(this)},e.prototype._invokeOnCancel=function(){var t=this._onCancel();this._unsetOnCancel(),u.invoke(this._doInvokeOnCancel,this,t)},e.prototype._invokeInternalOnCancel=function(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel())},e.prototype._resultCancelled=function(){this.cancel()}}},{"./util":36}],7:[function(t,e,r){"use strict";e.exports=function(e){var r=t("./util"),n=t("./es5").keys,o=r.tryCatch,i=r.errorObj;return function(t,s,a){return function(u){var c=a._boundValue();t:for(var l=0;l<t.length;++l){var f=t[l];if(f===Error||null!=f&&f.prototype instanceof Error){if(u instanceof f)return o(s).call(c,u)}else if("function"==typeof f){var p=o(f).call(c,u);if(p===i)return p;if(p)return o(s).call(c,u)}else if(r.isObject(u)){for(var h=n(f),y=0;y<h.length;++y){var d=h[y];if(f[d]!=u[d])continue t}return o(s).call(c,u)}}return e}}}},{"./es5":13,"./util":36}],8:[function(t,e,r){"use strict";e.exports=function(t){var e=!1,r=[];function n(){this._trace=new n.CapturedTrace(o())}function o(){var t=r.length-1;if(t>=0)return r[t]}return t.prototype._promiseCreated=function(){},t.prototype._pushContext=function(){},t.prototype._popContext=function(){return null},t._peekContext=t.prototype._peekContext=function(){},n.prototype._pushContext=function(){void 0!==this._trace&&(this._trace._promiseCreated=null,r.push(this._trace))},n.prototype._popContext=function(){if(void 0!==this._trace){var t=r.pop(),e=t._promiseCreated;return t._promiseCreated=null,e}return null},n.CapturedTrace=null,n.create=function(){if(e)return new n},n.deactivateLongStackTraces=function(){},n.activateLongStackTraces=function(){var r=t.prototype._pushContext,i=t.prototype._popContext,s=t._peekContext,a=t.prototype._peekContext,u=t.prototype._promiseCreated;n.deactivateLongStackTraces=function(){t.prototype._pushContext=r,t.prototype._popContext=i,t._peekContext=s,t.prototype._peekContext=a,t.prototype._promiseCreated=u,e=!1},e=!0,t.prototype._pushContext=n.prototype._pushContext,t.prototype._popContext=n.prototype._popContext,t._peekContext=t.prototype._peekContext=o,t.prototype._promiseCreated=function(){var t=this._peekContext();t&&null==t._promiseCreated&&(t._promiseCreated=this)}},n}},{}],9:[function(t,e,n){"use strict";e.exports=function(e,n){var o,i,s,a=e._getDomain,u=e._async,l=t("./errors").Warning,f=t("./util"),p=f.canAttachTrace,h=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,y=/\((?:timers\.js):\d+:\d+\)/,d=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,_=null,m=null,v=!1,g=!(0==f.env("BLUEBIRD_DEBUG")),b=!(0==f.env("BLUEBIRD_WARNINGS")||!g&&!f.env("BLUEBIRD_WARNINGS")),w=!(0==f.env("BLUEBIRD_LONG_STACK_TRACES")||!g&&!f.env("BLUEBIRD_LONG_STACK_TRACES")),O=0!=f.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&(b||!!f.env("BLUEBIRD_W_FORGOTTEN_RETURN"));e.prototype.suppressUnhandledRejections=function(){var t=this._target();t._bitField=-1048577&t._bitField|524288},e.prototype._ensurePossibleRejectionHandled=function(){if(0==(524288&this._bitField)){this._setRejectionIsUnhandled();var t=this;setTimeout((function(){t._notifyUnhandledRejection()}),1)}},e.prototype._notifyUnhandledRejectionIsHandled=function(){W("rejectionHandled",o,void 0,this)},e.prototype._setReturnedNonUndefined=function(){this._bitField=268435456|this._bitField},e.prototype._returnedNonUndefined=function(){return 0!=(268435456&this._bitField)},e.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._settledValue();this._setUnhandledRejectionIsNotified(),W("unhandledRejection",i,t,this)}},e.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=262144|this._bitField},e.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-262145&this._bitField},e.prototype._isUnhandledRejectionNotified=function(){return(262144&this._bitField)>0},e.prototype._setRejectionIsUnhandled=function(){this._bitField=1048576|this._bitField},e.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-1048577&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},e.prototype._isRejectionUnhandled=function(){return(1048576&this._bitField)>0},e.prototype._warn=function(t,e,r){return L(t,e,r||this)},e.onPossiblyUnhandledRejection=function(t){var e=a();i="function"==typeof t?null===e?t:f.domainBind(e,t):void 0},e.onUnhandledRejectionHandled=function(t){var e=a();o="function"==typeof t?null===e?t:f.domainBind(e,t):void 0};var S=function(){};e.longStackTraces=function(){if(u.haveItemsQueued()&&!X.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if(!X.longStackTraces&&Y()){var t=e.prototype._captureStackTrace,r=e.prototype._attachExtraTrace;X.longStackTraces=!0,S=function(){if(u.haveItemsQueued()&&!X.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");e.prototype._captureStackTrace=t,e.prototype._attachExtraTrace=r,n.deactivateLongStackTraces(),u.enableTrampoline(),X.longStackTraces=!1},e.prototype._captureStackTrace=I,e.prototype._attachExtraTrace=F,n.activateLongStackTraces(),u.disableTrampolineIfNecessary()}},e.hasLongStackTraces=function(){return X.longStackTraces&&Y()};var A=function(){try{if("function"==typeof CustomEvent){var t=new CustomEvent("CustomEvent");return f.global.dispatchEvent(t),function(t,e){var r=new CustomEvent(t.toLowerCase(),{detail:e,cancelable:!0});return!f.global.dispatchEvent(r)}}return"function"==typeof Event?(t=new Event("CustomEvent"),f.global.dispatchEvent(t),function(t,e){var r=new Event(t.toLowerCase(),{cancelable:!0});return r.detail=e,!f.global.dispatchEvent(r)}):((t=document.createEvent("CustomEvent")).initCustomEvent("testingtheevent",!1,!0,{}),f.global.dispatchEvent(t),function(t,e){var r=document.createEvent("CustomEvent");return r.initCustomEvent(t.toLowerCase(),!1,!0,e),!f.global.dispatchEvent(r)})}catch(t){}return function(){return!1}}(),E=f.isNode?function(){return r.emit.apply(r,arguments)}:f.global?function(t){var e="on"+t.toLowerCase(),r=f.global[e];return!!r&&(r.apply(f.global,[].slice.call(arguments,1)),!0)}:function(){return!1};function j(t,e){return{promise:e}}var $={promiseCreated:j,promiseFulfilled:j,promiseRejected:j,promiseResolved:j,promiseCancelled:j,promiseChained:function(t,e,r){return{promise:e,child:r}},warning:function(t,e){return{warning:e}},unhandledRejection:function(t,e,r){return{reason:e,promise:r}},rejectionHandled:j},P=function(t){var e=!1;try{e=E.apply(null,arguments)}catch(t){u.throwLater(t),e=!0}var r=!1;try{r=A(t,$[t].apply(null,arguments))}catch(t){u.throwLater(t),r=!0}return r||e};function x(){return!1}function N(t,e,r){var n=this;try{t(e,r,(function(t){if("function"!=typeof t)throw new TypeError("onCancel must be a function, got: "+f.toString(t));n._attachCancellationCallback(t)}))}catch(t){return t}}function T(t){if(!this._isCancellable())return this;var e=this._onCancel();void 0!==e?f.isArray(e)?e.push(t):this._setOnCancel([e,t]):this._setOnCancel(t)}function k(){return this._onCancelField}function C(t){this._onCancelField=t}function R(){this._cancellationParent=void 0,this._onCancelField=void 0}function D(t,e){if(0!=(1&e)){this._cancellationParent=t;var r=t._branchesRemainingToCancel;void 0===r&&(r=0),t._branchesRemainingToCancel=r+1}0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)}e.config=function(t){if("longStackTraces"in(t=Object(t))&&(t.longStackTraces?e.longStackTraces():!t.longStackTraces&&e.hasLongStackTraces()&&S()),"warnings"in t){var r=t.warnings;X.warnings=!!r,O=X.warnings,f.isObject(r)&&"wForgottenReturn"in r&&(O=!!r.wForgottenReturn)}if("cancellation"in t&&t.cancellation&&!X.cancellation){if(u.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use");e.prototype._clearCancellationData=R,e.prototype._propagateFrom=D,e.prototype._onCancel=k,e.prototype._setOnCancel=C,e.prototype._attachCancellationCallback=T,e.prototype._execute=N,B=D,X.cancellation=!0}return"monitoring"in t&&(t.monitoring&&!X.monitoring?(X.monitoring=!0,e.prototype._fireEvent=P):!t.monitoring&&X.monitoring&&(X.monitoring=!1,e.prototype._fireEvent=x)),e},e.prototype._fireEvent=x,e.prototype._execute=function(t,e,r){try{t(e,r)}catch(t){return t}},e.prototype._onCancel=function(){},e.prototype._setOnCancel=function(t){},e.prototype._attachCancellationCallback=function(t){},e.prototype._captureStackTrace=function(){},e.prototype._attachExtraTrace=function(){},e.prototype._clearCancellationData=function(){},e.prototype._propagateFrom=function(t,e){};var B=function(t,e){0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)};function M(){var t=this._boundTo;return void 0!==t&&t instanceof e?t.isFulfilled()?t.value():void 0:t}function I(){this._trace=new J(this._peekContext())}function F(t,e){if(p(t)){var r=this._trace;if(void 0!==r&&e&&(r=r._parent),void 0!==r)r.attachExtraTrace(t);else if(!t.__stackCleaned__){var n=V(t);f.notEnumerableProp(t,"stack",n.message+"\n"+n.stack.join("\n")),f.notEnumerableProp(t,"__stackCleaned__",!0)}}}function L(t,r,n){if(X.warnings){var o,i=new l(t);if(r)n._attachExtraTrace(i);else if(X.longStackTraces&&(o=e._peekContext()))o.attachExtraTrace(i);else{var s=V(i);i.stack=s.message+"\n"+s.stack.join("\n")}P("warning",i)||q(i,"",!0)}}function U(t){for(var e=[],r=0;r<t.length;++r){var n=t[r],o="    (No stack trace)"===n||_.test(n),i=o&&K(n);o&&!i&&(v&&" "!==n.charAt(0)&&(n="    "+n),e.push(n))}return e}function V(t){var e=t.stack,r=t.toString();return e="string"==typeof e&&e.length>0?function(t){for(var e=t.stack.replace(/\s+$/g,"").split("\n"),r=0;r<e.length;++r){var n=e[r];if("    (No stack trace)"===n||_.test(n))break}return r>0&&"SyntaxError"!=t.name&&(e=e.slice(r)),e}(t):["    (No stack trace)"],{message:r,stack:"SyntaxError"==t.name?e:U(e)}}function q(t,e,r){if("undefined"!=typeof console){var n;if(f.isObject(t)){var o=t.stack;n=e+m(o,t)}else n=e+String(t);"function"==typeof s?s(n,r):"function"!=typeof console.log&&"object"!==c(console.log)||console.log(n)}}function W(t,e,r,n){var o=!1;try{"function"==typeof e&&(o=!0,"rejectionHandled"===t?e(n):e(r,n))}catch(t){u.throwLater(t)}"unhandledRejection"===t?P(t,r,n)||o||q(r,"Unhandled rejection "):P(t,n)}function H(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{if(e=t&&"function"==typeof t.toString?t.toString():f.toString(t),/\[object [a-zA-Z0-9$_]+\]/.test(e))try{e=JSON.stringify(t)}catch(t){}0===e.length&&(e="(empty array)")}return"(<"+function(t){return t.length<41?t:t.substr(0,38)+"..."}(e)+">, no stack trace)"}function Y(){return"function"==typeof G}var K=function(){return!1},z=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;function Q(t){var e=t.match(z);if(e)return{fileName:e[1],line:parseInt(e[2],10)}}function J(t){this._parent=t,this._promisesCreated=0;var e=this._length=1+(void 0===t?0:t._length);G(this,J),e>32&&this.uncycle()}f.inherits(J,Error),n.CapturedTrace=J,J.prototype.uncycle=function(){var t=this._length;if(!(t<2)){for(var e=[],r={},n=0,o=this;void 0!==o;++n)e.push(o),o=o._parent;for(n=(t=this._length=n)-1;n>=0;--n){var i=e[n].stack;void 0===r[i]&&(r[i]=n)}for(n=0;n<t;++n){var s=r[e[n].stack];if(void 0!==s&&s!==n){s>0&&(e[s-1]._parent=void 0,e[s-1]._length=1),e[n]._parent=void 0,e[n]._length=1;var a=n>0?e[n-1]:this;s<t-1?(a._parent=e[s+1],a._parent.uncycle(),a._length=a._parent._length+1):(a._parent=void 0,a._length=1);for(var u=a._length+1,c=n-2;c>=0;--c)e[c]._length=u,u++;return}}}},J.prototype.attachExtraTrace=function(t){if(!t.__stackCleaned__){this.uncycle();for(var e=V(t),r=e.message,n=[e.stack],o=this;void 0!==o;)n.push(U(o.stack.split("\n"))),o=o._parent;!function(t){for(var e=t[0],r=1;r<t.length;++r){for(var n=t[r],o=e.length-1,i=e[o],s=-1,a=n.length-1;a>=0;--a)if(n[a]===i){s=a;break}for(a=s;a>=0;--a){var u=n[a];if(e[o]!==u)break;e.pop(),o--}e=n}}(n),function(t){for(var e=0;e<t.length;++e)(0===t[e].length||e+1<t.length&&t[e][0]===t[e+1][0])&&(t.splice(e,1),e--)}(n),f.notEnumerableProp(t,"stack",function(t,e){for(var r=0;r<e.length-1;++r)e[r].push("From previous event:"),e[r]=e[r].join("\n");return r<e.length&&(e[r]=e[r].join("\n")),t+"\n"+e.join("\n")}(r,n)),f.notEnumerableProp(t,"__stackCleaned__",!0)}};var G=function(){var t=/^\s*at\s*/,e=function(t,e){return"string"==typeof t?t:void 0!==e.name&&void 0!==e.message?e.toString():H(e)};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,_=t,m=e;var r=Error.captureStackTrace;return K=function(t){return h.test(t)},function(t,e){Error.stackTraceLimit+=6,r(t,e),Error.stackTraceLimit-=6}}var n,o=new Error;if("string"==typeof o.stack&&o.stack.split("\n")[0].indexOf("stackDetection@")>=0)return _=/@/,m=e,v=!0,function(t){t.stack=(new Error).stack};try{throw new Error}catch(t){n="stack"in t}return!("stack"in o)&&n&&"number"==typeof Error.stackTraceLimit?(_=t,m=e,function(t){Error.stackTraceLimit+=6;try{throw new Error}catch(e){t.stack=e.stack}Error.stackTraceLimit-=6}):(m=function(t,e){return"string"==typeof t?t:"object"!==c(e)&&"function"!=typeof e||void 0===e.name||void 0===e.message?H(e):e.toString()},null)}();"undefined"!=typeof console&&void 0!==console.warn&&(s=function(t){console.warn(t)},f.isNode&&r.stderr.isTTY?s=function(t,e){var r=e?"[33m":"[31m";console.warn(r+t+"[0m\n")}:f.isNode||"string"!=typeof(new Error).stack||(s=function(t,e){console.warn("%c"+t,e?"color: darkorange":"color: red")}));var X={warnings:b,longStackTraces:!1,cancellation:!1,monitoring:!1};return w&&e.longStackTraces(),{longStackTraces:function(){return X.longStackTraces},warnings:function(){return X.warnings},cancellation:function(){return X.cancellation},monitoring:function(){return X.monitoring},propagateFromFunction:function(){return B},boundValueFunction:function(){return M},checkForgottenReturns:function(t,e,r,n,o){if(void 0===t&&null!==e&&O){if(void 0!==o&&o._returnedNonUndefined())return;if(0==(65535&n._bitField))return;r&&(r+=" ");var i="",s="";if(e._trace){for(var a=e._trace.stack.split("\n"),u=U(a),c=u.length-1;c>=0;--c){var l=u[c];if(!y.test(l)){var f=l.match(d);f&&(i="at "+f[1]+":"+f[2]+":"+f[3]+" ");break}}if(u.length>0){var p=u[0];for(c=0;c<a.length;++c)if(a[c]===p){c>0&&(s="\n"+a[c-1]);break}}}var h="a promise was created in a "+r+"handler "+i+"but was not returned from it, see http://goo.gl/rRqMUw"+s;n._warn(h,!0,e)}},setBounds:function(t,e){if(Y()){for(var r,n,o=t.stack.split("\n"),i=e.stack.split("\n"),s=-1,a=-1,u=0;u<o.length;++u)if(c=Q(o[u])){r=c.fileName,s=c.line;break}for(u=0;u<i.length;++u){var c;if(c=Q(i[u])){n=c.fileName,a=c.line;break}}s<0||a<0||!r||!n||r!==n||s>=a||(K=function(t){if(h.test(t))return!0;var e=Q(t);return!!(e&&e.fileName===r&&s<=e.line&&e.line<=a)})}},warn:L,deprecated:function(t,e){var r=t+" is deprecated and will be removed in a future version.";return e&&(r+=" Use "+e+" instead."),L(r)},CapturedTrace:J,fireDomEvent:A,fireGlobalEvent:E}}},{"./errors":12,"./util":36}],10:[function(t,e,r){"use strict";e.exports=function(t){function e(){return this.value}function r(){throw this.reason}t.prototype.return=t.prototype.thenReturn=function(r){return r instanceof t&&r.suppressUnhandledRejections(),this._then(e,void 0,void 0,{value:r},void 0)},t.prototype.throw=t.prototype.thenThrow=function(t){return this._then(r,void 0,void 0,{reason:t},void 0)},t.prototype.catchThrow=function(t){if(arguments.length<=1)return this._then(void 0,r,void 0,{reason:t},void 0);var e=arguments[1],n=function(){throw e};return this.caught(t,n)},t.prototype.catchReturn=function(r){if(arguments.length<=1)return r instanceof t&&r.suppressUnhandledRejections(),this._then(void 0,e,void 0,{value:r},void 0);var n=arguments[1];n instanceof t&&n.suppressUnhandledRejections();var o=function(){return n};return this.caught(r,o)}}},{}],11:[function(t,e,r){"use strict";e.exports=function(t,e){var r=t.reduce,n=t.all;function o(){return n(this)}t.prototype.each=function(t){return r(this,t,e,0)._then(o,void 0,void 0,this,void 0)},t.prototype.mapSeries=function(t){return r(this,t,e,e)},t.each=function(t,n){return r(t,n,e,0)._then(o,void 0,void 0,t,void 0)},t.mapSeries=function(t,n){return r(t,n,e,e)}}},{}],12:[function(t,e,r){"use strict";var n,o,i=t("./es5"),s=i.freeze,a=t("./util"),u=a.inherits,c=a.notEnumerableProp;function l(t,e){function r(n){if(!(this instanceof r))return new r(n);c(this,"message","string"==typeof n?n:e),c(this,"name",t),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this)}return u(r,Error),r}var f=l("Warning","warning"),p=l("CancellationError","cancellation error"),h=l("TimeoutError","timeout error"),y=l("AggregateError","aggregate error");try{n=TypeError,o=RangeError}catch(t){n=l("TypeError","type error"),o=l("RangeError","range error")}for(var d="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),_=0;_<d.length;++_)"function"==typeof Array.prototype[d[_]]&&(y.prototype[d[_]]=Array.prototype[d[_]]);i.defineProperty(y.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),y.prototype.isOperational=!0;var m=0;function v(t){if(!(this instanceof v))return new v(t);c(this,"name","OperationalError"),c(this,"message",t),this.cause=t,this.isOperational=!0,t instanceof Error?(c(this,"message",t.message),c(this,"stack",t.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}y.prototype.toString=function(){var t=Array(4*m+1).join(" "),e="\n"+t+"AggregateError of:\n";m++,t=Array(4*m+1).join(" ");for(var r=0;r<this.length;++r){for(var n=this[r]===this?"[Circular AggregateError]":this[r]+"",o=n.split("\n"),i=0;i<o.length;++i)o[i]=t+o[i];e+=(n=o.join("\n"))+"\n"}return m--,e},u(v,Error);var g=Error.__BluebirdErrorTypes__;g||(g=s({CancellationError:p,TimeoutError:h,OperationalError:v,RejectionError:v,AggregateError:y}),i.defineProperty(Error,"__BluebirdErrorTypes__",{value:g,writable:!1,enumerable:!1,configurable:!1})),e.exports={Error:Error,TypeError:n,RangeError:o,CancellationError:g.CancellationError,OperationalError:g.OperationalError,TimeoutError:g.TimeoutError,AggregateError:g.AggregateError,Warning:f}},{"./es5":13,"./util":36}],13:[function(t,e,r){var n=function(){"use strict";return void 0===this}();if(n)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:n,propertyIsWritable:function(t,e){var r=Object.getOwnPropertyDescriptor(t,e);return!(r&&!r.writable&&!r.set)}};else{var o={}.hasOwnProperty,i={}.toString,s={}.constructor.prototype,a=function(t){var e=[];for(var r in t)o.call(t,r)&&e.push(r);return e};e.exports={isArray:function(t){try{return"[object Array]"===i.call(t)}catch(t){return!1}},keys:a,names:a,defineProperty:function(t,e,r){return t[e]=r.value,t},getDescriptor:function(t,e){return{value:t[e]}},freeze:function(t){return t},getPrototypeOf:function(t){try{return Object(t).constructor.prototype}catch(t){return s}},isES5:n,propertyIsWritable:function(){return!0}}}},{}],14:[function(t,e,r){"use strict";e.exports=function(t,e){var r=t.map;t.prototype.filter=function(t,n){return r(this,t,n,e)},t.filter=function(t,n,o){return r(t,n,o,e)}}},{}],15:[function(t,e,r){"use strict";e.exports=function(e,r,n){var o=t("./util"),i=e.CancellationError,s=o.errorObj,a=t("./catch_filter")(n);function u(t,e,r){this.promise=t,this.type=e,this.handler=r,this.called=!1,this.cancelPromise=null}function c(t){this.finallyHandler=t}function l(t,e){return null!=t.cancelPromise&&(arguments.length>1?t.cancelPromise._reject(e):t.cancelPromise._cancel(),t.cancelPromise=null,!0)}function f(){return h.call(this,this.promise._target()._settledValue())}function p(t){if(!l(this,t))return s.e=t,s}function h(t){var o=this.promise,a=this.handler;if(!this.called){this.called=!0;var u=this.isFinallyHandler()?a.call(o._boundValue()):a.call(o._boundValue(),t);if(u===n)return u;if(void 0!==u){o._setReturnedNonUndefined();var h=r(u,o);if(h instanceof e){if(null!=this.cancelPromise){if(h._isCancelled()){var y=new i("late cancellation observer");return o._attachExtraTrace(y),s.e=y,s}h.isPending()&&h._attachCancellationCallback(new c(this))}return h._then(f,p,void 0,this,void 0)}}}return o.isRejected()?(l(this),s.e=t,s):(l(this),t)}return u.prototype.isFinallyHandler=function(){return 0===this.type},c.prototype._resultCancelled=function(){l(this.finallyHandler)},e.prototype._passThrough=function(t,e,r,n){return"function"!=typeof t?this.then():this._then(r,n,void 0,new u(this,e,t),void 0)},e.prototype.lastly=e.prototype.finally=function(t){return this._passThrough(t,0,h,h)},e.prototype.tap=function(t){return this._passThrough(t,1,h)},e.prototype.tapCatch=function(t){var r=arguments.length;if(1===r)return this._passThrough(t,1,void 0,h);var n,i=new Array(r-1),s=0;for(n=0;n<r-1;++n){var u=arguments[n];if(!o.isObject(u))return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got "+o.classString(u)));i[s++]=u}i.length=s;var c=arguments[n];return this._passThrough(a(i,c,this),1,void 0,h)},u}},{"./catch_filter":7,"./util":36}],16:[function(t,e,r){"use strict";e.exports=function(e,r,n,o,i,s){var a=t("./errors").TypeError,u=t("./util"),c=u.errorObj,l=u.tryCatch,f=[];function p(t,r,o,i){if(s.cancellation()){var a=new e(n),u=this._finallyPromise=new e(n);this._promise=a.lastly((function(){return u})),a._captureStackTrace(),a._setOnCancel(this)}else(this._promise=new e(n))._captureStackTrace();this._stack=i,this._generatorFunction=t,this._receiver=r,this._generator=void 0,this._yieldHandlers="function"==typeof o?[o].concat(f):f,this._yieldedPromise=null,this._cancellationPhase=!1}u.inherits(p,i),p.prototype._isResolved=function(){return null===this._promise},p.prototype._cleanup=function(){this._promise=this._generator=null,s.cancellation()&&null!==this._finallyPromise&&(this._finallyPromise._fulfill(),this._finallyPromise=null)},p.prototype._promiseCancelled=function(){if(!this._isResolved()){var t;if(void 0!==this._generator.return)this._promise._pushContext(),t=l(this._generator.return).call(this._generator,void 0),this._promise._popContext();else{var r=new e.CancellationError("generator .return() sentinel");e.coroutine.returnSentinel=r,this._promise._attachExtraTrace(r),this._promise._pushContext(),t=l(this._generator.throw).call(this._generator,r),this._promise._popContext()}this._cancellationPhase=!0,this._yieldedPromise=null,this._continue(t)}},p.prototype._promiseFulfilled=function(t){this._yieldedPromise=null,this._promise._pushContext();var e=l(this._generator.next).call(this._generator,t);this._promise._popContext(),this._continue(e)},p.prototype._promiseRejected=function(t){this._yieldedPromise=null,this._promise._attachExtraTrace(t),this._promise._pushContext();var e=l(this._generator.throw).call(this._generator,t);this._promise._popContext(),this._continue(e)},p.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof e){var t=this._yieldedPromise;this._yieldedPromise=null,t.cancel()}},p.prototype.promise=function(){return this._promise},p.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._promiseFulfilled(void 0)},p.prototype._continue=function(t){var r=this._promise;if(t===c)return this._cleanup(),this._cancellationPhase?r.cancel():r._rejectCallback(t.e,!1);var n=t.value;if(!0===t.done)return this._cleanup(),this._cancellationPhase?r.cancel():r._resolveCallback(n);var i=o(n,this._promise);if(i instanceof e||null!==(i=function(t,r,n){for(var i=0;i<r.length;++i){n._pushContext();var s=l(r[i])(t);if(n._popContext(),s===c){n._pushContext();var a=e.reject(c.e);return n._popContext(),a}var u=o(s,n);if(u instanceof e)return u}return null}(i,this._yieldHandlers,this._promise))){var s=(i=i._target())._bitField;0==(50397184&s)?(this._yieldedPromise=i,i._proxy(this,null)):0!=(33554432&s)?e._async.invoke(this._promiseFulfilled,this,i._value()):0!=(16777216&s)?e._async.invoke(this._promiseRejected,this,i._reason()):this._promiseCancelled()}else this._promiseRejected(new a("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s",String(n))+"From coroutine:\n"+this._stack.split("\n").slice(1,-7).join("\n")))},e.coroutine=function(t,e){if("function"!=typeof t)throw new a("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var r=Object(e).yieldHandler,n=p,o=(new Error).stack;return function(){var e=t.apply(this,arguments),i=new n(void 0,void 0,r,o),s=i.promise();return i._generator=e,i._promiseFulfilled(void 0),s}},e.coroutine.addYieldHandler=function(t){if("function"!=typeof t)throw new a("expecting a function but got "+u.classString(t));f.push(t)},e.spawn=function(t){if(s.deprecated("Promise.spawn()","Promise.coroutine()"),"function"!=typeof t)return r("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var n=new p(t,this),o=n.promise();return n._run(e.spawn),o}}},{"./errors":12,"./util":36}],17:[function(t,e,r){"use strict";e.exports=function(e,r,n,o,i,s){var a=t("./util");a.canEvaluate,a.tryCatch,a.errorObj,e.join=function(){var t,e=arguments.length-1;e>0&&"function"==typeof arguments[e]&&(t=arguments[e]);var n=[].slice.call(arguments);t&&n.pop();var o=new r(n).promise();return void 0!==t?o.spread(t):o}}},{"./util":36}],18:[function(t,e,r){"use strict";e.exports=function(e,r,n,o,i,s){var a=e._getDomain,u=t("./util"),l=u.tryCatch,f=u.errorObj,p=e._async;function h(t,e,r,n){this.constructor$(t),this._promise._captureStackTrace();var o=a();this._callback=null===o?e:u.domainBind(o,e),this._preservedValues=n===i?new Array(this.length()):null,this._limit=r,this._inFlight=0,this._queue=[],p.invoke(this._asyncInit,this,void 0)}function y(t,r,o,i){if("function"!=typeof r)return n("expecting a function but got "+u.classString(r));var s=0;if(void 0!==o){if("object"!==c(o)||null===o)return e.reject(new TypeError("options argument must be an object but it is "+u.classString(o)));if("number"!=typeof o.concurrency)return e.reject(new TypeError("'concurrency' must be a number but it is "+u.classString(o.concurrency)));s=o.concurrency}return new h(t,r,s="number"==typeof s&&isFinite(s)&&s>=1?s:0,i).promise()}u.inherits(h,r),h.prototype._asyncInit=function(){this._init$(void 0,-2)},h.prototype._init=function(){},h.prototype._promiseFulfilled=function(t,r){var n=this._values,i=this.length(),a=this._preservedValues,u=this._limit;if(r<0){if(n[r=-1*r-1]=t,u>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return!0}else{if(u>=1&&this._inFlight>=u)return n[r]=t,this._queue.push(r),!1;null!==a&&(a[r]=t);var c=this._promise,p=this._callback,h=c._boundValue();c._pushContext();var y=l(p).call(h,t,r,i),d=c._popContext();if(s.checkForgottenReturns(y,d,null!==a?"Promise.filter":"Promise.map",c),y===f)return this._reject(y.e),!0;var _=o(y,this._promise);if(_ instanceof e){var m=(_=_._target())._bitField;if(0==(50397184&m))return u>=1&&this._inFlight++,n[r]=_,_._proxy(this,-1*(r+1)),!1;if(0==(33554432&m))return 0!=(16777216&m)?(this._reject(_._reason()),!0):(this._cancel(),!0);y=_._value()}n[r]=y}return++this._totalResolved>=i&&(null!==a?this._filter(n,a):this._resolve(n),!0)},h.prototype._drainQueue=function(){for(var t=this._queue,e=this._limit,r=this._values;t.length>0&&this._inFlight<e;){if(this._isResolved())return;var n=t.pop();this._promiseFulfilled(r[n],n)}},h.prototype._filter=function(t,e){for(var r=e.length,n=new Array(r),o=0,i=0;i<r;++i)t[i]&&(n[o++]=e[i]);n.length=o,this._resolve(n)},h.prototype.preservedValues=function(){return this._preservedValues},e.prototype.map=function(t,e){return y(this,t,e,null)},e.map=function(t,e,r,n){return y(t,e,r,n)}}},{"./util":36}],19:[function(t,e,r){"use strict";e.exports=function(e,r,n,o,i){var s=t("./util"),a=s.tryCatch;e.method=function(t){if("function"!=typeof t)throw new e.TypeError("expecting a function but got "+s.classString(t));return function(){var n=new e(r);n._captureStackTrace(),n._pushContext();var o=a(t).apply(this,arguments),s=n._popContext();return i.checkForgottenReturns(o,s,"Promise.method",n),n._resolveFromSyncValue(o),n}},e.attempt=e.try=function(t){if("function"!=typeof t)return o("expecting a function but got "+s.classString(t));var n,u=new e(r);if(u._captureStackTrace(),u._pushContext(),arguments.length>1){i.deprecated("calling Promise.try with more than 1 argument");var c=arguments[1],l=arguments[2];n=s.isArray(c)?a(t).apply(l,c):a(t).call(l,c)}else n=a(t)();var f=u._popContext();return i.checkForgottenReturns(n,f,"Promise.try",u),u._resolveFromSyncValue(n),u},e.prototype._resolveFromSyncValue=function(t){t===s.errorObj?this._rejectCallback(t.e,!1):this._resolveCallback(t,!0)}}},{"./util":36}],20:[function(t,e,r){"use strict";var n=t("./util"),o=n.maybeWrapAsError,i=t("./errors").OperationalError,s=t("./es5"),a=/^(?:name|message|stack|cause)$/;function u(t){var e;if(function(t){return t instanceof Error&&s.getPrototypeOf(t)===Error.prototype}(t)){(e=new i(t)).name=t.name,e.message=t.message,e.stack=t.stack;for(var r=s.keys(t),o=0;o<r.length;++o){var u=r[o];a.test(u)||(e[u]=t[u])}return e}return n.markAsOriginatingFromRejection(t),t}e.exports=function(t,e){return function(r,n){if(null!==t){if(r){var i=u(o(r));t._attachExtraTrace(i),t._reject(i)}else if(e){var s=[].slice.call(arguments,1);t._fulfill(s)}else t._fulfill(n);t=null}}}},{"./errors":12,"./es5":13,"./util":36}],21:[function(t,e,r){"use strict";e.exports=function(e){var r=t("./util"),n=e._async,o=r.tryCatch,i=r.errorObj;function s(t,e){if(!r.isArray(t))return a.call(this,t,e);var s=o(e).apply(this._boundValue(),[null].concat(t));s===i&&n.throwLater(s.e)}function a(t,e){var r=this._boundValue(),s=void 0===t?o(e).call(r,null):o(e).call(r,null,t);s===i&&n.throwLater(s.e)}function u(t,e){if(!t){var r=new Error(t+"");r.cause=t,t=r}var s=o(e).call(this._boundValue(),t);s===i&&n.throwLater(s.e)}e.prototype.asCallback=e.prototype.nodeify=function(t,e){if("function"==typeof t){var r=a;void 0!==e&&Object(e).spread&&(r=s),this._then(r,u,void 0,this,t)}return this}}},{"./util":36}],22:[function(t,e,n){"use strict";e.exports=function(){var n=function(){return new y("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},o=function(){return new x.PromiseInspection(this._target())},i=function(t){return x.reject(new y(t))};function s(){}var a,u={},c=t("./util");a=c.isNode?function(){var t=r.domain;return void 0===t&&(t=null),t}:function(){return null},c.notEnumerableProp(x,"_getDomain",a);var l=t("./es5"),f=t("./async"),p=new f;l.defineProperty(x,"_async",{value:p});var h=t("./errors"),y=x.TypeError=h.TypeError;x.RangeError=h.RangeError;var d=x.CancellationError=h.CancellationError;x.TimeoutError=h.TimeoutError,x.OperationalError=h.OperationalError,x.RejectionError=h.OperationalError,x.AggregateError=h.AggregateError;var _=function(){},m={},v={},g=t("./thenables")(x,_),b=t("./promise_array")(x,_,g,i,s),w=t("./context")(x),O=w.create,S=t("./debuggability")(x,w),A=(S.CapturedTrace,t("./finally")(x,g,v)),E=t("./catch_filter")(v),j=t("./nodeback"),$=c.errorObj,P=c.tryCatch;function x(t){t!==_&&function(t,e){if(null==t||t.constructor!==x)throw new y("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");if("function"!=typeof e)throw new y("expecting a function but got "+c.classString(e))}(this,t),this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._resolveFromExecutor(t),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function N(t){this.promise._resolveCallback(t)}function T(t){this.promise._rejectCallback(t,!1)}function k(t){var e=new x(_);e._fulfillmentHandler0=t,e._rejectionHandler0=t,e._promise0=t,e._receiver0=t}return x.prototype.toString=function(){return"[object Promise]"},x.prototype.caught=x.prototype.catch=function(t){var e=arguments.length;if(e>1){var r,n=new Array(e-1),o=0;for(r=0;r<e-1;++r){var s=arguments[r];if(!c.isObject(s))return i("Catch statement predicate: expecting an object but got "+c.classString(s));n[o++]=s}return n.length=o,t=arguments[r],this.then(void 0,E(n,t,this))}return this.then(void 0,t)},x.prototype.reflect=function(){return this._then(o,o,void 0,this,void 0)},x.prototype.then=function(t,e){if(S.warnings()&&arguments.length>0&&"function"!=typeof t&&"function"!=typeof e){var r=".then() only accepts functions but was passed: "+c.classString(t);arguments.length>1&&(r+=", "+c.classString(e)),this._warn(r)}return this._then(t,e,void 0,void 0,void 0)},x.prototype.done=function(t,e){this._then(t,e,void 0,void 0,void 0)._setIsFinal()},x.prototype.spread=function(t){return"function"!=typeof t?i("expecting a function but got "+c.classString(t)):this.all()._then(t,void 0,void 0,m,void 0)},x.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this.value(),t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this.reason(),t.isRejected=!0),t},x.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new b(this).promise()},x.prototype.error=function(t){return this.caught(c.originatesFromRejection,t)},x.getNewLibraryCopy=e.exports,x.is=function(t){return t instanceof x},x.fromNode=x.fromCallback=function(t){var e=new x(_);e._captureStackTrace();var r=arguments.length>1&&!!Object(arguments[1]).multiArgs,n=P(t)(j(e,r));return n===$&&e._rejectCallback(n.e,!0),e._isFateSealed()||e._setAsyncGuaranteed(),e},x.all=function(t){return new b(t).promise()},x.cast=function(t){var e=g(t);return e instanceof x||((e=new x(_))._captureStackTrace(),e._setFulfilled(),e._rejectionHandler0=t),e},x.resolve=x.fulfilled=x.cast,x.reject=x.rejected=function(t){var e=new x(_);return e._captureStackTrace(),e._rejectCallback(t,!0),e},x.setScheduler=function(t){if("function"!=typeof t)throw new y("expecting a function but got "+c.classString(t));return p.setScheduler(t)},x.prototype._then=function(t,e,r,n,o){var i=void 0!==o,s=i?o:new x(_),u=this._target(),l=u._bitField;i||(s._propagateFrom(this,3),s._captureStackTrace(),void 0===n&&0!=(2097152&this._bitField)&&(n=0!=(50397184&l)?this._boundValue():u===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,s));var f=a();if(0!=(50397184&l)){var h,y,m=u._settlePromiseCtx;0!=(33554432&l)?(y=u._rejectionHandler0,h=t):0!=(16777216&l)?(y=u._fulfillmentHandler0,h=e,u._unsetRejectionIsUnhandled()):(m=u._settlePromiseLateCancellationObserver,y=new d("late cancellation observer"),u._attachExtraTrace(y),h=e),p.invoke(m,u,{handler:null===f?h:"function"==typeof h&&c.domainBind(f,h),promise:s,receiver:n,value:y})}else u._addCallbacks(t,e,s,n,f);return s},x.prototype._length=function(){return 65535&this._bitField},x.prototype._isFateSealed=function(){return 0!=(117506048&this._bitField)},x.prototype._isFollowing=function(){return 67108864==(67108864&this._bitField)},x.prototype._setLength=function(t){this._bitField=-65536&this._bitField|65535&t},x.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)},x.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)},x.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)},x.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField},x.prototype._isFinal=function(){return(4194304&this._bitField)>0},x.prototype._unsetCancelled=function(){this._bitField=-65537&this._bitField},x.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)},x.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField},x.prototype._setAsyncGuaranteed=function(){p.hasCustomScheduler()||(this._bitField=134217728|this._bitField)},x.prototype._receiverAt=function(t){var e=0===t?this._receiver0:this[4*t-4+3];if(e!==u)return void 0===e&&this._isBound()?this._boundValue():e},x.prototype._promiseAt=function(t){return this[4*t-4+2]},x.prototype._fulfillmentHandlerAt=function(t){return this[4*t-4+0]},x.prototype._rejectionHandlerAt=function(t){return this[4*t-4+1]},x.prototype._boundValue=function(){},x.prototype._migrateCallback0=function(t){t._bitField;var e=t._fulfillmentHandler0,r=t._rejectionHandler0,n=t._promise0,o=t._receiverAt(0);void 0===o&&(o=u),this._addCallbacks(e,r,n,o,null)},x.prototype._migrateCallbackAt=function(t,e){var r=t._fulfillmentHandlerAt(e),n=t._rejectionHandlerAt(e),o=t._promiseAt(e),i=t._receiverAt(e);void 0===i&&(i=u),this._addCallbacks(r,n,o,i,null)},x.prototype._addCallbacks=function(t,e,r,n,o){var i=this._length();if(i>=65531&&(i=0,this._setLength(0)),0===i)this._promise0=r,this._receiver0=n,"function"==typeof t&&(this._fulfillmentHandler0=null===o?t:c.domainBind(o,t)),"function"==typeof e&&(this._rejectionHandler0=null===o?e:c.domainBind(o,e));else{var s=4*i-4;this[s+2]=r,this[s+3]=n,"function"==typeof t&&(this[s+0]=null===o?t:c.domainBind(o,t)),"function"==typeof e&&(this[s+1]=null===o?e:c.domainBind(o,e))}return this._setLength(i+1),i},x.prototype._proxy=function(t,e){this._addCallbacks(void 0,void 0,e,t,null)},x.prototype._resolveCallback=function(t,e){if(0==(117506048&this._bitField)){if(t===this)return this._rejectCallback(n(),!1);var r=g(t,this);if(!(r instanceof x))return this._fulfill(t);e&&this._propagateFrom(r,2);var o=r._target();if(o!==this){var i=o._bitField;if(0==(50397184&i)){var s=this._length();s>0&&o._migrateCallback0(this);for(var a=1;a<s;++a)o._migrateCallbackAt(this,a);this._setFollowing(),this._setLength(0),this._setFollowee(o)}else if(0!=(33554432&i))this._fulfill(o._value());else if(0!=(16777216&i))this._reject(o._reason());else{var u=new d("late cancellation observer");o._attachExtraTrace(u),this._reject(u)}}else this._reject(n())}},x.prototype._rejectCallback=function(t,e,r){var n=c.ensureErrorObject(t),o=n===t;if(!o&&!r&&S.warnings()){var i="a promise was rejected with a non-error: "+c.classString(t);this._warn(i,!0)}this._attachExtraTrace(n,!!e&&o),this._reject(t)},x.prototype._resolveFromExecutor=function(t){if(t!==_){var e=this;this._captureStackTrace(),this._pushContext();var r=!0,n=this._execute(t,(function(t){e._resolveCallback(t)}),(function(t){e._rejectCallback(t,r)}));r=!1,this._popContext(),void 0!==n&&e._rejectCallback(n,!0)}},x.prototype._settlePromiseFromHandler=function(t,e,r,n){var o=n._bitField;if(0==(65536&o)){var i;n._pushContext(),e===m?r&&"number"==typeof r.length?i=P(t).apply(this._boundValue(),r):(i=$).e=new y("cannot .spread() a non-array: "+c.classString(r)):i=P(t).call(e,r);var s=n._popContext();0==(65536&(o=n._bitField))&&(i===v?n._reject(r):i===$?n._rejectCallback(i.e,!1):(S.checkForgottenReturns(i,s,"",n,this),n._resolveCallback(i)))}},x.prototype._target=function(){for(var t=this;t._isFollowing();)t=t._followee();return t},x.prototype._followee=function(){return this._rejectionHandler0},x.prototype._setFollowee=function(t){this._rejectionHandler0=t},x.prototype._settlePromise=function(t,e,r,n){var i=t instanceof x,a=this._bitField,u=0!=(134217728&a);0!=(65536&a)?(i&&t._invokeInternalOnCancel(),r instanceof A&&r.isFinallyHandler()?(r.cancelPromise=t,P(e).call(r,n)===$&&t._reject($.e)):e===o?t._fulfill(o.call(r)):r instanceof s?r._promiseCancelled(t):i||t instanceof b?t._cancel():r.cancel()):"function"==typeof e?i?(u&&t._setAsyncGuaranteed(),this._settlePromiseFromHandler(e,r,n,t)):e.call(r,n,t):r instanceof s?r._isResolved()||(0!=(33554432&a)?r._promiseFulfilled(n,t):r._promiseRejected(n,t)):i&&(u&&t._setAsyncGuaranteed(),0!=(33554432&a)?t._fulfill(n):t._reject(n))},x.prototype._settlePromiseLateCancellationObserver=function(t){var e=t.handler,r=t.promise,n=t.receiver,o=t.value;"function"==typeof e?r instanceof x?this._settlePromiseFromHandler(e,n,o,r):e.call(n,o,r):r instanceof x&&r._reject(o)},x.prototype._settlePromiseCtx=function(t){this._settlePromise(t.promise,t.handler,t.receiver,t.value)},x.prototype._settlePromise0=function(t,e,r){var n=this._promise0,o=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(n,t,o,e)},x.prototype._clearCallbackDataAtIndex=function(t){var e=4*t-4;this[e+2]=this[e+3]=this[e+0]=this[e+1]=void 0},x.prototype._fulfill=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(t===this){var r=n();return this._attachExtraTrace(r),this._reject(r)}this._setFulfilled(),this._rejectionHandler0=t,(65535&e)>0&&(0!=(134217728&e)?this._settlePromises():p.settlePromises(this))}},x.prototype._reject=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(this._setRejected(),this._fulfillmentHandler0=t,this._isFinal())return p.fatalError(t,c.isNode);(65535&e)>0?p.settlePromises(this):this._ensurePossibleRejectionHandled()}},x.prototype._fulfillPromises=function(t,e){for(var r=1;r<t;r++){var n=this._fulfillmentHandlerAt(r),o=this._promiseAt(r),i=this._receiverAt(r);this._clearCallbackDataAtIndex(r),this._settlePromise(o,n,i,e)}},x.prototype._rejectPromises=function(t,e){for(var r=1;r<t;r++){var n=this._rejectionHandlerAt(r),o=this._promiseAt(r),i=this._receiverAt(r);this._clearCallbackDataAtIndex(r),this._settlePromise(o,n,i,e)}},x.prototype._settlePromises=function(){var t=this._bitField,e=65535&t;if(e>0){if(0!=(16842752&t)){var r=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,r,t),this._rejectPromises(e,r)}else{var n=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,n,t),this._fulfillPromises(e,n)}this._setLength(0)}this._clearCancellationData()},x.prototype._settledValue=function(){var t=this._bitField;return 0!=(33554432&t)?this._rejectionHandler0:0!=(16777216&t)?this._fulfillmentHandler0:void 0},x.defer=x.pending=function(){return S.deprecated("Promise.defer","new Promise"),{promise:new x(_),resolve:N,reject:T}},c.notEnumerableProp(x,"_makeSelfResolutionError",n),t("./method")(x,_,g,i,S),t("./bind")(x,_,g,S),t("./cancel")(x,b,i,S),t("./direct_resolve")(x),t("./synchronous_inspection")(x),t("./join")(x,b,g,_,p,a),x.Promise=x,x.version="3.5.1",t("./map.js")(x,b,i,g,_,S),t("./call_get.js")(x),t("./using.js")(x,i,g,O,_,S),t("./timers.js")(x,_,S),t("./generators.js")(x,i,_,g,s,S),t("./nodeify.js")(x),t("./promisify.js")(x,_),t("./props.js")(x,b,g,i),t("./race.js")(x,_,g,i),t("./reduce.js")(x,b,i,g,_,S),t("./settle.js")(x,b,S),t("./some.js")(x,b,i),t("./filter.js")(x,_),t("./each.js")(x,_),t("./any.js")(x),c.toFastProperties(x),c.toFastProperties(x.prototype),k({a:1}),k({b:2}),k({c:3}),k(1),k((function(){})),k(void 0),k(!1),k(new x(_)),S.setBounds(f.firstLineError,c.lastLineError),x}},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(t,e,r){"use strict";e.exports=function(e,r,n,o,i){var s=t("./util");function a(t){var n=this._promise=new e(r);t instanceof e&&n._propagateFrom(t,3),n._setOnCancel(this),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}return s.isArray,s.inherits(a,i),a.prototype.length=function(){return this._length},a.prototype.promise=function(){return this._promise},a.prototype._init=function t(r,i){var a=n(this._values,this._promise);if(a instanceof e){var u=(a=a._target())._bitField;if(this._values=a,0==(50397184&u))return this._promise._setAsyncGuaranteed(),a._then(t,this._reject,void 0,this,i);if(0==(33554432&u))return 0!=(16777216&u)?this._reject(a._reason()):this._cancel();a=a._value()}if(null!==(a=s.asArray(a)))0!==a.length?this._iterate(a):-5===i?this._resolveEmptyArray():this._resolve(function(t){switch(t){case-2:return[];case-3:return{};case-6:return new Map}}(i));else{var c=o("expecting an array or an iterable object but got "+s.classString(a)).reason();this._promise._rejectCallback(c,!1)}},a.prototype._iterate=function(t){var r=this.getActualLength(t.length);this._length=r,this._values=this.shouldCopyValues()?new Array(r):this._values;for(var o=this._promise,i=!1,s=null,a=0;a<r;++a){var u=n(t[a],o);s=u instanceof e?(u=u._target())._bitField:null,i?null!==s&&u.suppressUnhandledRejections():null!==s?0==(50397184&s)?(u._proxy(this,a),this._values[a]=u):i=0!=(33554432&s)?this._promiseFulfilled(u._value(),a):0!=(16777216&s)?this._promiseRejected(u._reason(),a):this._promiseCancelled(a):i=this._promiseFulfilled(u,a)}i||o._setAsyncGuaranteed()},a.prototype._isResolved=function(){return null===this._values},a.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t)},a.prototype._cancel=function(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel())},a.prototype._reject=function(t){this._values=null,this._promise._rejectCallback(t,!1)},a.prototype._promiseFulfilled=function(t,e){return this._values[e]=t,++this._totalResolved>=this._length&&(this._resolve(this._values),!0)},a.prototype._promiseCancelled=function(){return this._cancel(),!0},a.prototype._promiseRejected=function(t){return this._totalResolved++,this._reject(t),!0},a.prototype._resultCancelled=function(){if(!this._isResolved()){var t=this._values;if(this._cancel(),t instanceof e)t.cancel();else for(var r=0;r<t.length;++r)t[r]instanceof e&&t[r].cancel()}},a.prototype.shouldCopyValues=function(){return!0},a.prototype.getActualLength=function(t){return t},a}},{"./util":36}],24:[function(t,e,r){"use strict";e.exports=function(e,r){var n={},o=t("./util"),i=t("./nodeback"),s=o.withAppended,a=o.maybeWrapAsError,u=o.canEvaluate,l=t("./errors").TypeError,f={__isPromisified__:!0},p=new RegExp("^(?:"+["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"].join("|")+")$"),h=function(t){return o.isIdentifier(t)&&"_"!==t.charAt(0)&&"constructor"!==t};function y(t){return!p.test(t)}function d(t){try{return!0===t.__isPromisified__}catch(t){return!1}}function _(t,e,r){var n=o.getDataPropertyOrDefault(t,e+r,f);return!!n&&d(n)}function m(t,e,r,n){for(var i=o.inheritedDataKeys(t),s=[],a=0;a<i.length;++a){var u=i[a],c=t[u],f=n===h||h(u);"function"!=typeof c||d(c)||_(t,u,e)||!n(u,c,t,f)||s.push(u,c)}return function(t,e,r){for(var n=0;n<t.length;n+=2){var o=t[n];if(r.test(o))for(var i=o.replace(r,""),s=0;s<t.length;s+=2)if(t[s]===i)throw new l("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s",e))}}(s,e,r),s}var v=u?void 0:function(t,u,c,l,f,p){var h=function(){return this}(),y=t;function d(){var o=u;u===n&&(o=this);var c=new e(r);c._captureStackTrace();var l="string"==typeof y&&this!==h?this[y]:t,f=i(c,p);try{l.apply(o,s(arguments,f))}catch(t){c._rejectCallback(a(t),!0,!0)}return c._isFateSealed()||c._setAsyncGuaranteed(),c}return"string"==typeof y&&(t=l),o.notEnumerableProp(d,"__isPromisified__",!0),d};function g(t,e,r,i,s){for(var a=new RegExp(e.replace(/([$])/,"\\$")+"$"),u=m(t,e,a,r),c=0,l=u.length;c<l;c+=2){var f=u[c],p=u[c+1],h=f+e;if(i===v)t[h]=v(f,n,f,p,e,s);else{var y=i(p,(function(){return v(f,n,f,p,e,s)}));o.notEnumerableProp(y,"__isPromisified__",!0),t[h]=y}}return o.toFastProperties(t),t}e.promisify=function(t,e){if("function"!=typeof t)throw new l("expecting a function but got "+o.classString(t));if(d(t))return t;var r=function(t,e,r){return v(t,e,void 0,t,null,r)}(t,void 0===(e=Object(e)).context?n:e.context,!!e.multiArgs);return o.copyDescriptors(t,r,y),r},e.promisifyAll=function(t,e){if("function"!=typeof t&&"object"!==c(t))throw new l("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");var r=!!(e=Object(e)).multiArgs,n=e.suffix;"string"!=typeof n&&(n="Async");var i=e.filter;"function"!=typeof i&&(i=h);var s=e.promisifier;if("function"!=typeof s&&(s=v),!o.isIdentifier(n))throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");for(var a=o.inheritedDataKeys(t),u=0;u<a.length;++u){var f=t[a[u]];"constructor"!==a[u]&&o.isClass(f)&&(g(f.prototype,n,i,s,r),g(f,n,i,s,r))}return g(t,n,i,s,r)}}},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(t,e,r){"use strict";e.exports=function(e,r,n,o){var i,s=t("./util"),a=s.isObject,u=t("./es5");"function"==typeof Map&&(i=Map);var c=function(){var t=0,e=0;function r(r,n){this[t]=r,this[t+e]=n,t++}return function(n){e=n.size,t=0;var o=new Array(2*n.size);return n.forEach(r,o),o}}();function l(t){var e,r=!1;if(void 0!==i&&t instanceof i)e=c(t),r=!0;else{var n=u.keys(t),o=n.length;e=new Array(2*o);for(var s=0;s<o;++s){var a=n[s];e[s]=t[a],e[s+o]=a}}this.constructor$(e),this._isMap=r,this._init$(void 0,r?-6:-3)}function f(t){var r,i=n(t);return a(i)?(r=i instanceof e?i._then(e.props,void 0,void 0,void 0,void 0):new l(i).promise(),i instanceof e&&r._propagateFrom(i,2),r):o("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")}s.inherits(l,r),l.prototype._init=function(){},l.prototype._promiseFulfilled=function(t,e){if(this._values[e]=t,++this._totalResolved>=this._length){var r;if(this._isMap)r=function(t){for(var e=new i,r=t.length/2|0,n=0;n<r;++n){var o=t[r+n],s=t[n];e.set(o,s)}return e}(this._values);else{r={};for(var n=this.length(),o=0,s=this.length();o<s;++o)r[this._values[o+n]]=this._values[o]}return this._resolve(r),!0}return!1},l.prototype.shouldCopyValues=function(){return!1},l.prototype.getActualLength=function(t){return t>>1},e.prototype.props=function(){return f(this)},e.props=function(t){return f(t)}}},{"./es5":13,"./util":36}],26:[function(t,e,r){"use strict";function n(t){this._capacity=t,this._length=0,this._front=0}n.prototype._willBeOverCapacity=function(t){return this._capacity<t},n.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1),this[this._front+e&this._capacity-1]=t,this._length=e+1},n.prototype.push=function(t,e,r){var n=this.length()+3;if(this._willBeOverCapacity(n))return this._pushOne(t),this._pushOne(e),void this._pushOne(r);var o=this._front+n-3;this._checkCapacity(n);var i=this._capacity-1;this[o+0&i]=t,this[o+1&i]=e,this[o+2&i]=r,this._length=n},n.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e},n.prototype.length=function(){return this._length},n.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<1)},n.prototype._resizeTo=function(t){var e=this._capacity;this._capacity=t,function(t,e,r,n,o){for(var i=0;i<o;++i)r[i+n]=t[i+e],t[i+e]=void 0}(this,0,this,e,this._front+this._length&e-1)},e.exports=n},{}],27:[function(t,e,r){"use strict";e.exports=function(e,r,n,o){var i=t("./util");function s(t,a){var u,c=n(t);if(c instanceof e)return(u=c).then((function(t){return s(t,u)}));if(null===(t=i.asArray(t)))return o("expecting an array or an iterable object but got "+i.classString(t));var l=new e(r);void 0!==a&&l._propagateFrom(a,3);for(var f=l._fulfill,p=l._reject,h=0,y=t.length;h<y;++h){var d=t[h];(void 0!==d||h in t)&&e.cast(d)._then(f,p,void 0,l,null)}return l}e.race=function(t){return s(t,void 0)},e.prototype.race=function(){return s(this,void 0)}}},{"./util":36}],28:[function(t,e,r){"use strict";e.exports=function(e,r,n,o,i,s){var a=e._getDomain,u=t("./util"),c=u.tryCatch;function l(t,r,n,o){this.constructor$(t);var s=a();this._fn=null===s?r:u.domainBind(s,r),void 0!==n&&(n=e.resolve(n))._attachCancellationCallback(this),this._initialValue=n,this._currentCancellable=null,this._eachValues=o===i?Array(this._length):0===o?null:void 0,this._promise._captureStackTrace(),this._init$(void 0,-5)}function f(t,e){this.isFulfilled()?e._resolve(t):e._reject(t)}function p(t,e,r,o){return"function"!=typeof e?n("expecting a function but got "+u.classString(e)):new l(t,e,r,o).promise()}function h(t){this.accum=t,this.array._gotAccum(t);var r=o(this.value,this.array._promise);return r instanceof e?(this.array._currentCancellable=r,r._then(y,void 0,void 0,this,void 0)):y.call(this,r)}function y(t){var r,n=this.array,o=n._promise,i=c(n._fn);o._pushContext(),(r=void 0!==n._eachValues?i.call(o._boundValue(),t,this.index,this.length):i.call(o._boundValue(),this.accum,t,this.index,this.length))instanceof e&&(n._currentCancellable=r);var a=o._popContext();return s.checkForgottenReturns(r,a,void 0!==n._eachValues?"Promise.each":"Promise.reduce",o),r}u.inherits(l,r),l.prototype._gotAccum=function(t){void 0!==this._eachValues&&null!==this._eachValues&&t!==i&&this._eachValues.push(t)},l.prototype._eachComplete=function(t){return null!==this._eachValues&&this._eachValues.push(t),this._eachValues},l.prototype._init=function(){},l.prototype._resolveEmptyArray=function(){this._resolve(void 0!==this._eachValues?this._eachValues:this._initialValue)},l.prototype.shouldCopyValues=function(){return!1},l.prototype._resolve=function(t){this._promise._resolveCallback(t),this._values=null},l.prototype._resultCancelled=function(t){if(t===this._initialValue)return this._cancel();this._isResolved()||(this._resultCancelled$(),this._currentCancellable instanceof e&&this._currentCancellable.cancel(),this._initialValue instanceof e&&this._initialValue.cancel())},l.prototype._iterate=function(t){var r,n;this._values=t;var o=t.length;if(void 0!==this._initialValue?(r=this._initialValue,n=0):(r=e.resolve(t[0]),n=1),this._currentCancellable=r,!r.isRejected())for(;n<o;++n){var i={accum:null,value:t[n],index:n,length:o,array:this};r=r._then(h,void 0,void 0,i,void 0)}void 0!==this._eachValues&&(r=r._then(this._eachComplete,void 0,void 0,this,void 0)),r._then(f,f,void 0,r,this)},e.prototype.reduce=function(t,e){return p(this,t,e,null)},e.reduce=function(t,e,r,n){return p(t,e,r,n)}}},{"./util":36}],29:[function(t,e,i){"use strict";var s,a,u,c,l,f=t("./util"),p=f.getNativePromise();if(f.isNode&&"undefined"==typeof MutationObserver){var h=n.setImmediate,y=r.nextTick;s=f.isRecentNode?function(t){h.call(n,t)}:function(t){y.call(r,t)}}else if("function"==typeof p&&"function"==typeof p.resolve){var d=p.resolve();s=function(t){d.then(t)}}else s="undefined"==typeof MutationObserver||"undefined"!=typeof window&&window.navigator&&(window.navigator.standalone||window.cordova)?void 0!==o?function(t){o(t)}:"undefined"!=typeof setTimeout?function(t){setTimeout(t,0)}:function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}:(a=document.createElement("div"),u={attributes:!0},c=!1,l=document.createElement("div"),new MutationObserver((function(){a.classList.toggle("foo"),c=!1})).observe(l,u),function(t){var e=new MutationObserver((function(){e.disconnect(),t()}));e.observe(a,u),c||(c=!0,l.classList.toggle("foo"))});e.exports=s},{"./util":36}],30:[function(t,e,r){"use strict";e.exports=function(e,r,n){var o=e.PromiseInspection;function i(t){this.constructor$(t)}t("./util").inherits(i,r),i.prototype._promiseResolved=function(t,e){return this._values[t]=e,++this._totalResolved>=this._length&&(this._resolve(this._values),!0)},i.prototype._promiseFulfilled=function(t,e){var r=new o;return r._bitField=33554432,r._settledValueField=t,this._promiseResolved(e,r)},i.prototype._promiseRejected=function(t,e){var r=new o;return r._bitField=16777216,r._settledValueField=t,this._promiseResolved(e,r)},e.settle=function(t){return n.deprecated(".settle()",".reflect()"),new i(t).promise()},e.prototype.settle=function(){return e.settle(this)}}},{"./util":36}],31:[function(t,e,r){"use strict";e.exports=function(e,r,n){var o=t("./util"),i=t("./errors").RangeError,s=t("./errors").AggregateError,a=o.isArray,u={};function c(t){this.constructor$(t),this._howMany=0,this._unwrap=!1,this._initialized=!1}function l(t,e){if((0|e)!==e||e<0)return n("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");var r=new c(t),o=r.promise();return r.setHowMany(e),r.init(),o}o.inherits(c,r),c.prototype._init=function(){if(this._initialized)if(0!==this._howMany){this._init$(void 0,-5);var t=a(this._values);!this._isResolved()&&t&&this._howMany>this._canPossiblyFulfill()&&this._reject(this._getRangeError(this.length()))}else this._resolve([])},c.prototype.init=function(){this._initialized=!0,this._init()},c.prototype.setUnwrap=function(){this._unwrap=!0},c.prototype.howMany=function(){return this._howMany},c.prototype.setHowMany=function(t){this._howMany=t},c.prototype._promiseFulfilled=function(t){return this._addFulfilled(t),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),1===this.howMany()&&this._unwrap?this._resolve(this._values[0]):this._resolve(this._values),!0)},c.prototype._promiseRejected=function(t){return this._addRejected(t),this._checkOutcome()},c.prototype._promiseCancelled=function(){return this._values instanceof e||null==this._values?this._cancel():(this._addRejected(u),this._checkOutcome())},c.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){for(var t=new s,e=this.length();e<this._values.length;++e)this._values[e]!==u&&t.push(this._values[e]);return t.length>0?this._reject(t):this._cancel(),!0}return!1},c.prototype._fulfilled=function(){return this._totalResolved},c.prototype._rejected=function(){return this._values.length-this.length()},c.prototype._addRejected=function(t){this._values.push(t)},c.prototype._addFulfilled=function(t){this._values[this._totalResolved++]=t},c.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},c.prototype._getRangeError=function(t){var e="Input array must contain at least "+this._howMany+" items but contains only "+t+" items";return new i(e)},c.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0))},e.some=function(t,e){return l(t,e)},e.prototype.some=function(t){return l(this,t)},e._SomePromiseArray=c}},{"./errors":12,"./util":36}],32:[function(t,e,r){"use strict";e.exports=function(t){function e(t){void 0!==t?(t=t._target(),this._bitField=t._bitField,this._settledValueField=t._isFateSealed()?t._settledValue():void 0):(this._bitField=0,this._settledValueField=void 0)}e.prototype._settledValue=function(){return this._settledValueField};var r=e.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},n=e.prototype.error=e.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},o=e.prototype.isFulfilled=function(){return 0!=(33554432&this._bitField)},i=e.prototype.isRejected=function(){return 0!=(16777216&this._bitField)},s=e.prototype.isPending=function(){return 0==(50397184&this._bitField)},a=e.prototype.isResolved=function(){return 0!=(50331648&this._bitField)};e.prototype.isCancelled=function(){return 0!=(8454144&this._bitField)},t.prototype.__isCancelled=function(){return 65536==(65536&this._bitField)},t.prototype._isCancelled=function(){return this._target().__isCancelled()},t.prototype.isCancelled=function(){return 0!=(8454144&this._target()._bitField)},t.prototype.isPending=function(){return s.call(this._target())},t.prototype.isRejected=function(){return i.call(this._target())},t.prototype.isFulfilled=function(){return o.call(this._target())},t.prototype.isResolved=function(){return a.call(this._target())},t.prototype.value=function(){return r.call(this._target())},t.prototype.reason=function(){var t=this._target();return t._unsetRejectionIsUnhandled(),n.call(t)},t.prototype._value=function(){return this._settledValue()},t.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue()},t.PromiseInspection=e}},{}],33:[function(t,e,r){"use strict";e.exports=function(e,r){var n=t("./util"),o=n.errorObj,i=n.isObject,s={}.hasOwnProperty;return function(t,a){if(i(t)){if(t instanceof e)return t;var u=function(t){try{return function(t){return t.then}(t)}catch(t){return o.e=t,o}}(t);if(u===o){a&&a._pushContext();var c=e.reject(u.e);return a&&a._popContext(),c}if("function"==typeof u)return function(t){try{return s.call(t,"_promise0")}catch(t){return!1}}(t)?(c=new e(r),t._then(c._fulfill,c._reject,void 0,c,null),c):function(t,i,s){var a=new e(r),u=a;s&&s._pushContext(),a._captureStackTrace(),s&&s._popContext();var c=n.tryCatch(i).call(t,(function(t){a&&(a._resolveCallback(t),a=null)}),(function(t){a&&(a._rejectCallback(t,!1,!0),a=null)}));return a&&c===o&&(a._rejectCallback(c.e,!0,!0),a=null),u}(t,u,a)}return t}}},{"./util":36}],34:[function(t,e,r){"use strict";e.exports=function(e,r,n){var o=t("./util"),i=e.TimeoutError;function s(t){this.handle=t}s.prototype._resultCancelled=function(){clearTimeout(this.handle)};var a=function(t){return u(+this).thenReturn(t)},u=e.delay=function(t,o){var i,u;return void 0!==o?(i=e.resolve(o)._then(a,null,null,t,void 0),n.cancellation()&&o instanceof e&&i._setOnCancel(o)):(i=new e(r),u=setTimeout((function(){i._fulfill()}),+t),n.cancellation()&&i._setOnCancel(new s(u)),i._captureStackTrace()),i._setAsyncGuaranteed(),i};function c(t){return clearTimeout(this.handle),t}function l(t){throw clearTimeout(this.handle),t}e.prototype.delay=function(t){return u(t,this)},e.prototype.timeout=function(t,e){var r,a;t=+t;var u=new s(setTimeout((function(){r.isPending()&&function(t,e,r){var n;n="string"!=typeof e?e instanceof Error?e:new i("operation timed out"):new i(e),o.markAsOriginatingFromRejection(n),t._attachExtraTrace(n),t._reject(n),null!=r&&r.cancel()}(r,e,a)}),t));return n.cancellation()?(a=this.then(),(r=a._then(c,l,void 0,u,void 0))._setOnCancel(u)):r=this._then(c,l,void 0,u,void 0),r}}},{"./util":36}],35:[function(t,e,r){"use strict";e.exports=function(e,r,n,o,i,s){var a=t("./util"),u=t("./errors").TypeError,c=t("./util").inherits,l=a.errorObj,f=a.tryCatch,p={};function h(t){setTimeout((function(){throw t}),0)}function y(t,r){var o=0,s=t.length,a=new e(i);return function i(){if(o>=s)return a._fulfill();var u=function(t){var e=n(t);return e!==t&&"function"==typeof t._isDisposable&&"function"==typeof t._getDisposer&&t._isDisposable()&&e._setDisposable(t._getDisposer()),e}(t[o++]);if(u instanceof e&&u._isDisposable()){try{u=n(u._getDisposer().tryDispose(r),t.promise)}catch(t){return h(t)}if(u instanceof e)return u._then(i,h,null,null,null)}i()}(),a}function d(t,e,r){this._data=t,this._promise=e,this._context=r}function _(t,e,r){this.constructor$(t,e,r)}function m(t){return d.isDisposer(t)?(this.resources[this.index]._setDisposable(t),t.promise()):t}function v(t){this.length=t,this.promise=null,this[t-1]=null}d.prototype.data=function(){return this._data},d.prototype.promise=function(){return this._promise},d.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():p},d.prototype.tryDispose=function(t){var e=this.resource(),r=this._context;void 0!==r&&r._pushContext();var n=e!==p?this.doDispose(e,t):null;return void 0!==r&&r._popContext(),this._promise._unsetDisposable(),this._data=null,n},d.isDisposer=function(t){return null!=t&&"function"==typeof t.resource&&"function"==typeof t.tryDispose},c(_,d),_.prototype.doDispose=function(t,e){return this.data().call(t,t,e)},v.prototype._resultCancelled=function(){for(var t=this.length,r=0;r<t;++r){var n=this[r];n instanceof e&&n.cancel()}},e.using=function(){var t=arguments.length;if(t<2)return r("you must pass at least 2 arguments to Promise.using");var o,i=arguments[t-1];if("function"!=typeof i)return r("expecting a function but got "+a.classString(i));var u=!0;2===t&&Array.isArray(arguments[0])?(t=(o=arguments[0]).length,u=!1):(o=arguments,t--);for(var c=new v(t),p=0;p<t;++p){var h=o[p];if(d.isDisposer(h)){var _=h;(h=h.promise())._setDisposable(_)}else{var g=n(h);g instanceof e&&(h=g._then(m,null,null,{resources:c,index:p},void 0))}c[p]=h}var b=new Array(c.length);for(p=0;p<b.length;++p)b[p]=e.resolve(c[p]).reflect();var w=e.all(b).then((function(t){for(var e=0;e<t.length;++e){var r=t[e];if(r.isRejected())return l.e=r.error(),l;if(!r.isFulfilled())return void w.cancel();t[e]=r.value()}O._pushContext(),i=f(i);var n=u?i.apply(void 0,t):i(t),o=O._popContext();return s.checkForgottenReturns(n,o,"Promise.using",O),n})),O=w.lastly((function(){var t=new e.PromiseInspection(w);return y(c,t)}));return c.promise=O,O._setOnCancel(c),O},e.prototype._setDisposable=function(t){this._bitField=131072|this._bitField,this._disposer=t},e.prototype._isDisposable=function(){return(131072&this._bitField)>0},e.prototype._getDisposer=function(){return this._disposer},e.prototype._unsetDisposable=function(){this._bitField=-131073&this._bitField,this._disposer=void 0},e.prototype.disposer=function(t){if("function"==typeof t)return new _(t,this,o());throw new u}}},{"./errors":12,"./util":36}],36:[function(t,e,o){"use strict";var i=t("./es5"),s="undefined"==typeof navigator,a={e:{}},u,l="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:void 0!==this?this:null;function f(){try{var t=u;return u=null,t.apply(this,arguments)}catch(t){return a.e=t,a}}function p(t){return u=t,f}var h=function(t,e){var r={}.hasOwnProperty;function n(){for(var n in this.constructor=t,this.constructor$=e,e.prototype)r.call(e.prototype,n)&&"$"!==n.charAt(n.length-1)&&(this[n+"$"]=e.prototype[n])}return n.prototype=e.prototype,t.prototype=new n,t.prototype};function y(t){return null==t||!0===t||!1===t||"string"==typeof t||"number"==typeof t}function d(t){return"function"==typeof t||"object"===c(t)&&null!==t}function _(t){return y(t)?new Error(P(t)):t}function m(t,e){var r,n=t.length,o=new Array(n+1);for(r=0;r<n;++r)o[r]=t[r];return o[r]=e,o}function v(t,e,r){if(!i.isES5)return{}.hasOwnProperty.call(t,e)?t[e]:void 0;var n=Object.getOwnPropertyDescriptor(t,e);return null!=n?null==n.get&&null==n.set?n.value:r:void 0}function g(t,e,r){if(y(t))return t;var n={value:r,configurable:!0,enumerable:!1,writable:!0};return i.defineProperty(t,e,n),t}function b(t){throw t}var w=function(){var t=[Array.prototype,Object.prototype,Function.prototype],e=function(e){for(var r=0;r<t.length;++r)if(t[r]===e)return!0;return!1};if(i.isES5){var r=Object.getOwnPropertyNames;return function(t){for(var n=[],o=Object.create(null);null!=t&&!e(t);){var s;try{s=r(t)}catch(t){return n}for(var a=0;a<s.length;++a){var u=s[a];if(!o[u]){o[u]=!0;var c=Object.getOwnPropertyDescriptor(t,u);null!=c&&null==c.get&&null==c.set&&n.push(u)}}t=i.getPrototypeOf(t)}return n}}var n={}.hasOwnProperty;return function(r){if(e(r))return[];var o=[];t:for(var i in r)if(n.call(r,i))o.push(i);else{for(var s=0;s<t.length;++s)if(n.call(t[s],i))continue t;o.push(i)}return o}}(),O=/this\s*\.\s*\S+\s*=/;function S(t){try{if("function"==typeof t){var e=i.names(t.prototype),r=i.isES5&&e.length>1,n=e.length>0&&!(1===e.length&&"constructor"===e[0]),o=O.test(t+"")&&i.names(t).length>0;if(r||n||o)return!0}return!1}catch(t){return!1}}function A(t){function e(){}e.prototype=t;for(var r=8;r--;)new e;return t}var E=/^[a-z$_][a-z$_0-9]*$/i;function j(t){return E.test(t)}function $(t,e,r){for(var n=new Array(t),o=0;o<t;++o)n[o]=e+o+r;return n}function P(t){try{return t+""}catch(t){return"[no string representation]"}}function x(t){return t instanceof Error||null!==t&&"object"===c(t)&&"string"==typeof t.message&&"string"==typeof t.name}function N(t){try{g(t,"isOperational",!0)}catch(t){}}function T(t){return null!=t&&(t instanceof Error.__BluebirdErrorTypes__.OperationalError||!0===t.isOperational)}function k(t){return x(t)&&i.propertyIsWritable(t,"stack")}var C="stack"in new Error?function(t){return k(t)?t:new Error(P(t))}:function(t){if(k(t))return t;try{throw new Error(P(t))}catch(t){return t}};function R(t){return{}.toString.call(t)}function D(t,e,r){for(var n=i.names(t),o=0;o<n.length;++o){var s=n[o];if(r(s))try{i.defineProperty(e,s,i.getDescriptor(t,s))}catch(t){}}}var B=function(t){return i.isArray(t)?t:null};if("undefined"!=typeof Symbol&&Symbol.iterator){var M="function"==typeof Array.from?function(t){return Array.from(t)}:function(t){for(var e,r=[],n=t[Symbol.iterator]();!(e=n.next()).done;)r.push(e.value);return r};B=function(t){return i.isArray(t)?t:null!=t&&"function"==typeof t[Symbol.iterator]?M(t):null}}var I=void 0!==r&&"[object process]"===R(r).toLowerCase(),F=void 0!==r&&void 0!==r.env;function L(t){return F?r.env[t]:void 0}function U(){if("function"==typeof Promise)try{var t=new Promise((function(){}));if("[object Promise]"==={}.toString.call(t))return Promise}catch(t){}}function V(t,e){return t.bind(e)}var q={isClass:S,isIdentifier:j,inheritedDataKeys:w,getDataPropertyOrDefault:v,thrower:b,isArray:i.isArray,asArray:B,notEnumerableProp:g,isPrimitive:y,isObject:d,isError:x,canEvaluate:s,errorObj:a,tryCatch:p,inherits:h,withAppended:m,maybeWrapAsError:_,toFastProperties:A,filledRange:$,toString:P,canAttachTrace:k,ensureErrorObject:C,originatesFromRejection:T,markAsOriginatingFromRejection:N,classString:R,copyDescriptors:D,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:I,hasEnvVariables:F,env:L,global:l,getNativePromise:U,domainBind:V},W;q.isRecentNode=q.isNode&&(W=r.versions.node.split(".").map(Number),0===W[0]&&W[1]>10||W[0]>0),q.isNode&&q.toFastProperties(r);try{throw new Error}catch(t){q.lastLineError=t}e.exports=q},{"./es5":13}]},{},[4])(4)},"object"==c(e)&&void 0!==t?t.exports=u():(s=[],void 0===(a="function"==typeof(i=u)?i.apply(e,s):i)||(t.exports=a)),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise)}).call(this,r(8),r(11),r(69).setImmediate)},function(t,e,r){"use strict";var n=t.exports={};n.DocumentNotFoundError=null,n.general={},n.general.default="Validator failed for path `{PATH}` with value `{VALUE}`",n.general.required="Path `{PATH}` is required.",n.Number={},n.Number.min="Path `{PATH}` ({VALUE}) is less than minimum allowed value ({MIN}).",n.Number.max="Path `{PATH}` ({VALUE}) is more than maximum allowed value ({MAX}).",n.Number.enum="`{VALUE}` is not a valid enum value for path `{PATH}`.",n.Date={},n.Date.min="Path `{PATH}` ({VALUE}) is before minimum allowed value ({MIN}).",n.Date.max="Path `{PATH}` ({VALUE}) is after maximum allowed value ({MAX}).",n.String={},n.String.enum="`{VALUE}` is not a valid enum value for path `{PATH}`.",n.String.match="Path `{PATH}` is invalid ({VALUE}).",n.String.minlength="Path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).",n.String.maxlength="Path `{PATH}` (`{VALUE}`) is longer than the maximum allowed length ({MAXLENGTH})."},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=r(5),c=r(4),l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=i(r);
/*!
   * OverwriteModel Error constructor.
   */function r(t,n,o,i){var s,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var l=u.messages;return a=null!=l.DocumentNotFoundError?"function"==typeof l.DocumentNotFoundError?l.DocumentNotFoundError(t,n):l.DocumentNotFoundError:'No document found for query "'+c.inspect(t)+'" on model "'+n+'"',(s=e.call(this,a)).result=i,s.numAffected=o,s.filter=t,s.query=t,s}return r}(u);Object.defineProperty(l.prototype,"name",{value:"DocumentNotFoundError"}),
/*!
 * exports
 */
t.exports=l},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=i(r);function r(t,n,o){var i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var s=o.join(", ");return(i=e.call(this,'No matching document found for id "'+t._id+'" version '+n+' modifiedPaths "'+s+'"')).version=n,i.modifiedPaths=o,i}return r}(r(5));Object.defineProperty(u.prototype,"name",{value:"VersionError"}),
/*!
 * exports
 */
t.exports=u},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=i(r);function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);return e.call(this,"Can't save() the same doc multiple times in parallel. Document: "+t._id)}return r}(r(5));Object.defineProperty(u.prototype,"name",{value:"ParallelSaveError"}),
/*!
 * exports
 */
t.exports=u},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=i(r);
/*!
   * OverwriteModel Error constructor.
   * @param {String} name
   */function r(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),e.call(this,"Cannot overwrite `"+t+"` model once compiled.")}return r}(r(5));Object.defineProperty(u.prototype,"name",{value:"OverwriteModelError"}),
/*!
 * exports
 */
t.exports=u},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=i(r);
/*!
   * MissingSchema Error constructor.
   * @param {String} name
   */function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var n="Schema hasn't been registered for model \""+t+'".\nUse mongoose.model(name, schema)';return e.call(this,n)}return r}(r(5));Object.defineProperty(u.prototype,"name",{value:"MissingSchemaError"}),
/*!
 * exports
 */
t.exports=u},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=i(r);
/*!
   * DivergentArrayError constructor.
   * @param {Array<String>} paths
   */function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var n="For your own good, using `document.save()` to update an array which was selected using an $elemMatch projection OR populated using skip, limit, query conditions, or exclusion of the _id field when the operation results in a $pop or $set of the entire array is not supported. The following path(s) would have been modified unsafely:\n  "+t.join("\n  ")+"\nUse Model.update() to update these arrays instead.";return e.call(this,n)}return r}(r(5));Object.defineProperty(u.prototype,"name",{value:"DivergentArrayError"}),
/*!
 * exports
 */
t.exports=u},function(t,e,r){"use strict";var n=r(32);
/*!
 * ignore
 */t.exports=function(t){var e,r;t.$immutable?(t.$immutableSetter=(e=t.path,r=t.options.immutable,function(t){if(null==this||null==this.$__)return t;if(this.isNew)return t;if(!("function"==typeof r?r.call(this,this):r))return t;var o=this.$__getValue(e);if("throw"===this.$__.strictMode&&t!==o)throw new n(e,"Path `"+e+"` is immutable and strict mode is set to throw.",!0);return o}),t.set(t.$immutableSetter)):t.$immutableSetter&&(t.setters=t.setters.filter((function(e){return e!==t.$immutableSetter})),delete t.$immutableSetter)}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=i(r);function r(t,n,o){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),e.call(this,'Parameter "'+n+'" to '+o+"() must be an object, got "+t.toString())}return r}(r(5));Object.defineProperty(u.prototype,"name",{value:"ObjectParameterError"}),t.exports=u},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=i(r);function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);return e.call(this,"Can't validate() the same doc multiple times in parallel. Document: "+t._id)}return r}(r(14));Object.defineProperty(u.prototype,"name",{value:"ParallelValidateError"}),
/*!
 * exports
 */
t.exports=u},function(t,e,r){"use strict";(function(e){function r(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){this._pres=new Map,this._posts=new Map}function s(t,e,r,n,o,i,s){if(i.useErrorHandlers){var a={error:e};return t.execPost(r,n,o,a,(function(t){return"function"==typeof s&&s(t)}))}return"function"==typeof s?s(e):void 0}function a(t,e,r){return t.has(e)?t.get(e):r}function u(t,e,r,n){var o;try{o=t.apply(e,r)}catch(t){return n(t)}c(o)&&o.then((function(){return n()}),(function(t){return n(t)}))}function c(t){return null!=t&&"function"==typeof t.then}function l(t){var r=!1,n=this;return function(){var o=arguments;if(!r)return r=!0,e.nextTick((function(){return t.apply(n,o)}))}}i.prototype.execPre=function(t,r,n,o){3===arguments.length&&(o=n,n=[]);var i=a(this._pres,t,[]),s=i.length,f=i.numAsync||0,p=0,h=f,y=!1,d=n;if(!s)return e.nextTick((function(){o(null)}));var _=function t(){if(!(p>=s)){var n=i[p];if(n.isAsync){var a=[l(m),l((function(t){if(t){if(y)return;return y=!0,o(t)}if(0==--h&&p>=s)return o(null)}))];u(n.fn,r,a,a[0])}else if(n.fn.length>0){a=[l(m)];for(var f=arguments.length>=2?arguments:[null].concat(d),_=1;_<f.length;++_)a.push(f[_]);u(n.fn,r,a,a[0])}else{var v=null;try{v=n.fn.call(r)}catch(t){if(null!=t)return o(t)}if(c(v))v.then((function(){return m()}),(function(t){return m(t)}));else{if(++p>=s)return h>0?void 0:e.nextTick((function(){o(null)}));t()}}}};function m(t){if(t){if(y)return;return y=!0,o(t)}if(++p>=s)return h>0?void 0:o(null);_.apply(r,arguments)}_.apply(null,[null].concat(n))},i.prototype.execPreSync=function(t,e,r){for(var n=a(this._pres,t,[]),o=n.length,i=0;i<o;++i)n[i].fn.apply(e,r||[])},i.prototype.execPost=function(t,r,n,o,i){arguments.length<5&&(i=o,o=null);var s=a(this._posts,t,[]),f=s.length,p=0,h=null;if(o&&o.error&&(h=o.error),!f)return e.nextTick((function(){i.apply(null,[h].concat(n))}));var y=function t(){for(var e=s[p].fn,o=0,a=n.length,y=[],d=0;d<a;++d)o+=n[d]&&n[d]._kareemIgnore?0:1,n[d]&&n[d]._kareemIgnore||y.push(n[d]);if(h)if(e.length===o+2){var _=l((function(e){if(e&&(h=e),++p>=f)return i.call(null,h);t()}));u(e,r,[h].concat(y).concat([_]),_)}else{if(++p>=f)return i.call(null,h);t()}else{var m=l((function(e){return e?(h=e,t()):++p>=f?i.apply(null,[null].concat(n)):void t()}));if(e.length===o+2)return++p>=f?i.apply(null,[null].concat(n)):t();if(e.length===o+1)u(e,r,y.concat([m]),m);else{var v,g;try{g=e.apply(r,y)}catch(t){v=t,h=t}if(c(g))return g.then((function(){return m()}),(function(t){return m(t)}));if(++p>=f)return i.apply(null,[v].concat(n));t()}}};y()},i.prototype.execPostSync=function(t,e,r){for(var n=a(this._posts,t,[]),o=n.length,i=0;i<o;++i)n[i].fn.apply(e,r||[])},i.prototype.createWrapperSync=function(t,e){var r=this;return function(){r.execPreSync(t,this,arguments);var n=e.apply(this,arguments);return r.execPostSync(t,this,[n]),n}},i.prototype.wrap=function(t,e,r,n,o){var i=n.length>0?n[n.length-1]:null,a=("function"==typeof i&&n.slice(0,n.length-1),this),u=(o=o||{}).checkForPromise;this.execPre(t,r,n,(function(c){if(c){for(var l=o.numCallbackParams||0,f=o.contextParameter?[r]:[],p=f.length;p<l;++p)f.push(null);return s(a,c,t,r,f,o,i)}var h="function"==typeof i?n.length-1:n.length,y=e.length,d=e.apply(r,n.slice(0,h).concat(_));if(u){if(null!=d&&"function"==typeof d.then)return d.then((function(t){return _(null,t)}),(function(t){return _(t)}));if(y<h+1)return _(null,d)}function _(){var e=Array.prototype.slice.call(arguments,1);if(o.nullResultByDefault&&0===e.length&&e.push(null),arguments[0])return s(a,arguments[0],t,r,e,o,i);a.execPost(t,r,e,(function(){return arguments[0]?"function"==typeof i?i(arguments[0]):void 0:"function"==typeof i?i.apply(r,arguments):void 0}))}}))},i.prototype.filter=function(t){for(var e=this,r=this.clone(),n=Array.from(r._pres.keys()),o=function(){var n=s[i],o=e._pres.get(n).map((function(t){return Object.assign({},t,{name:n})})).filter(t);if(0===o.length)return r._pres.delete(n),"continue";o.numAsync=o.filter((function(t){return t.isAsync})).length,r._pres.set(n,o)},i=0,s=n;i<s.length;i++)o();for(var a=Array.from(r._posts.keys()),u=function(){var n=l[c],o=e._posts.get(n).map((function(t){return Object.assign({},t,{name:n})})).filter(t);if(0===o.length)return r._posts.delete(n),"continue";r._posts.set(n,o)},c=0,l=a;c<l.length;c++)u();return r},i.prototype.hasHooks=function(t){return this._pres.has(t)||this._posts.has(t)},i.prototype.createWrapper=function(t,r,n,o){var i=this;return this.hasHooks(t)?function(){var e=n||this,s=Array.prototype.slice.call(arguments);i.wrap(t,r,e,s,o)}:function(){var t=arguments,n=this;e.nextTick((function(){return r.apply(n,t)}))}},i.prototype.pre=function(t,e,r,n,i){var s={};"object"===o(e)&&null!=e?e=(s=e).isAsync:"boolean"!=typeof arguments[1]&&(n=r,r=e,e=!1);var u=a(this._pres,t,[]);if(this._pres.set(t,u),e&&(u.numAsync=u.numAsync||0,++u.numAsync),"function"!=typeof r)throw new Error('pre() requires a function, got "'+o(r)+'"');return i?u.unshift(Object.assign({},s,{fn:r,isAsync:e})):u.push(Object.assign({},s,{fn:r,isAsync:e})),this},i.prototype.post=function(t,e,r,n){var i=a(this._posts,t,[]);if("function"==typeof e&&(n=!!r,r=e,e={}),"function"!=typeof r)throw new Error('post() requires a function, got "'+o(r)+'"');return n?i.unshift(Object.assign({},e,{fn:r})):i.push(Object.assign({},e,{fn:r})),this._posts.set(t,i),this},i.prototype.clone=function(){var t,e=new i,n=r(this._pres.keys());try{for(n.s();!(t=n.n()).done;){var o=t.value,s=this._pres.get(o).slice();s.numAsync=this._pres.get(o).numAsync,e._pres.set(o,s)}}catch(t){n.e(t)}finally{n.f()}var a,u=r(this._posts.keys());try{for(u.s();!(a=u.n()).done;){var c=a.value;e._posts.set(c,this._posts.get(c).slice())}}catch(t){u.e(t)}finally{u.f()}return e},i.prototype.merge=function(t,e){var n,o=(e=1===arguments.length||e)?this.clone():this,i=r(t._pres.keys());try{var s=function(){var e=n.value,r=a(o._pres,e,[]),i=t._pres.get(e).filter((function(t){return-1===r.map((function(t){return t.fn})).indexOf(t.fn)})),s=r.concat(i);s.numAsync=r.numAsync||0,s.numAsync+=i.filter((function(t){return t.isAsync})).length,o._pres.set(e,s)};for(i.s();!(n=i.n()).done;)s()}catch(t){i.e(t)}finally{i.f()}var u,c=r(t._posts.keys());try{var l=function(){var e=u.value,r=a(o._posts,e,[]),n=t._posts.get(e).filter((function(t){return-1===r.indexOf(t)}));o._posts.set(e,r.concat(n))};for(c.s();!(u=c.n()).done;)l()}catch(t){c.e(t)}finally{c.f()}return o},t.exports=i}).call(this,r(8))},function(t,e,r){"use strict";var n=r(10),o=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.assign(this,e),null!=e&&null!=e.options&&(this.options=Object.assign({},e.options))};Object.defineProperty(o.prototype,"ref",n),Object.defineProperty(o.prototype,"refPath",n),Object.defineProperty(o.prototype,"localField",n),Object.defineProperty(o.prototype,"foreignField",n),Object.defineProperty(o.prototype,"justOne",n),Object.defineProperty(o.prototype,"count",n),Object.defineProperty(o.prototype,"match",n),Object.defineProperty(o.prototype,"options",n),Object.defineProperty(o.prototype,"skip",n),Object.defineProperty(o.prototype,"limit",n),Object.defineProperty(o.prototype,"perDocumentLimit",n),t.exports=o},function(t,e,r){"use strict";var n=r(3),o=r(21);
/*!
 * Gather all indexes defined in the schema, including single nested,
 * document arrays, and embedded discriminators.
 */
t.exports=function(t){var e=[],r=new WeakMap,i=t.constructor.indexTypes,s=new Map;return function t(a,u,c){if(r.has(a))return;r.set(a,!0),u=u||"";for(var l=Object.keys(a.paths),f=0,p=l;f<p.length;f++){var h=p[f],y=a.paths[h];if(null==c||!c.paths[h]){if(y.$isMongooseDocumentArray||y.$isSingleNested){if(!0!==n(y,"options.excludeIndexes")&&!0!==n(y,"schemaOptions.excludeIndexes")&&!0!==n(y,"schema.options.excludeIndexes")&&t(y.schema,u+h+"."),null!=y.schema.discriminators)for(var d=y.schema.discriminators,_=Object.keys(d),m=0,v=_;m<v.length;m++){var g=v[m];t(d[g],u+h+".",y.schema)}if(y.$isMongooseDocumentArray)continue}var b=y._index||y.caster&&y.caster._index;if(!1!==b&&null!=b){var w={},O=o(b),S=O?b:{},A="string"==typeof b?b:!!O&&b.type;if(A&&-1!==i.indexOf(A))w[u+h]=A;else if(S.text)w[u+h]="text",delete S.text;else{var E=-1===Number(b);w[u+h]=E?-1:1}delete S.type,"background"in S||(S.background=!0),null!=a.options.autoIndex&&(S._autoIndex=a.options.autoIndex);var j=S&&S.name;"string"==typeof j&&s.has(j)?Object.assign(s.get(j),w):(e.push([w,S]),s.set(j,w))}}}r.delete(a),u?
/*!
   * Checks for indexes added to subdocs using Schema.index().
   * These indexes need their paths prefixed properly.
   *
   * schema._indexes = [ [indexObj, options], [indexObj, options] ..]
   */
function(t,r){for(var n=t._indexes,o=n.length,i=0;i<o;++i){for(var s=n[i][0],a=n[i][1],u=Object.keys(s),c=u.length,l={},f=0;f<c;++f){var p=u[f];l[r+p]=s[p]}var h=Object.assign({},a);if(null!=a&&null!=a.partialFilterExpression){h.partialFilterExpression={};for(var y=a.partialFilterExpression,d=0,_=Object.keys(y);d<_.length;d++){var m=_[d];h.partialFilterExpression[r+m]=y[m]}}e.push([l,h])}}(a,u):(a._indexes.forEach((function(t){"background"in t[1]||(t[1].background=!0)})),e=e.concat(a._indexes))}(t),e}},function(t,e,r){"use strict";t.exports=function(t,e){for(var r in t.add(e.tree||{}),t.callQueue=t.callQueue.concat(e.callQueue),t.method(e.methods),t.static(e.statics),e.query)t.query[r]=e.query[r];for(var n in e.virtuals)t.virtuals[n]=e.virtuals[n].clone();t.s.hooks.merge(e.s.hooks,!1)}},function(t,e,r){"use strict";var n=r(142),o=r(144),i=r(3),s=r(75),a=r(51);t.exports=function(t,e){var r=t.childSchemas.find((function(t){return!!t.schema.options.timestamps}));if(e||r){var u=s(e,"createdAt"),c=s(e,"updatedAt"),l=null!=e&&e.hasOwnProperty("currentTime")?e.currentTime:null,f={};t.$timestamps={createdAt:u,updatedAt:c},c&&!t.paths[c]&&(f[c]=Date),u&&!t.paths[u]&&(f[u]=Date),t.add(f),t.pre("save",(function(t){var e=i(this,"$__.saveOptions.timestamps");if(!1===e)return t();var r=null!=e&&!1===e.updatedAt,n=null!=e&&!1===e.createdAt,o=null!=l?l():(this.ownerDocument?this.ownerDocument():this).constructor.base.now(),s=this._id&&this._id.auto;if(!n&&u&&!this.get(u)&&this.$__isSelected(u)&&this.$set(u,s?this._id.getTimestamp():o),!r&&c&&(this.isNew||this.isModified())){var a=o;this.isNew&&(null!=u?a=this.$__getValue(u):s&&(a=this._id.getTimestamp())),this.$set(c,a)}t()})),t.methods.initializeTimestamps=function(){var t=null!=l?l():this.constructor.base.now();return u&&!this.get(u)&&this.$set(u,t),c&&!this.get(c)&&this.$set(c,t),this},h[a.builtInMiddleware]=!0;var p={query:!0,model:!1};t.pre("findOneAndUpdate",p,h),t.pre("replaceOne",p,h),t.pre("update",p,h),t.pre("updateOne",p,h),t.pre("updateMany",p,h)}function h(t){var e=null!=l?l():this.model.base.now();o(e,u,c,this.getUpdate(),this.options,this.schema),n(e,this.getUpdate(),this.model.schema),t()}}},function(t,e,r){"use strict";function n(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=r(143),s=r(75);
/*!
 * ignore
 */
function a(t,e,r){if(null!=e){if(Object.keys(e).some((function(t){return t.startsWith("$")}))){if(e.$push)for(var o=0,i=Object.keys(e.$push);o<i.length;o++){var a=i[o],c=r.path(a);e.$push[a]&&c&&c.$isMongooseDocumentArray&&c.schema.options.timestamps&&function(){var r=c.schema.options.timestamps,n=s(r,"createdAt"),o=s(r,"updatedAt");e.$push[a].$each?e.$push[a].$each.forEach((function(e){null!=o&&(e[o]=t),null!=n&&(e[n]=t)})):(null!=o&&(e.$push[a][o]=t),null!=n&&(e.$push[a][n]=t))}()}if(null!=e.$set)for(var l=0,f=Object.keys(e.$set);l<f.length;l++){u(r,f[l],e.$set,t)}}var p,h=n(Object.keys(e).filter((function(t){return!t.startsWith("$")})));try{for(h.s();!(p=h.n()).done;){u(r,p.value,e,t)}}catch(t){h.e(t)}finally{h.f()}}}function u(t,e,r,o){var u=i(e),c=t.path(u);if(c){for(var l=[],f=u.split("."),p=f.length-1;p>0;--p){var h=t.path(f.slice(0,p).join("."));null!=h&&(h.$isMongooseDocumentArray||h.$isSingleNested)&&l.push({parentPath:e.split(".").slice(0,p).join("."),parentSchemaType:h})}if(Array.isArray(r[e])&&c.$isMongooseDocumentArray)!function(t,e,r){var n=e.schema.options.timestamps;if(n)for(var o=t.length,i=s(n,"createdAt"),u=s(n,"updatedAt"),c=0;c<o;++c)null!=u&&(t[c][u]=r),null!=i&&(t[c][i]=r),a(r,t[c],e.schema)}(r[e],c,o);else if(r[e]&&c.$isSingleNested)!function(t,e,r){var n=e.schema.options.timestamps;if(n){var o=s(n,"createdAt"),i=s(n,"updatedAt");null!=i&&(t[i]=r),null!=o&&(t[o]=r),a(r,t,e.schema)}}(r[e],c,o);else if(l.length>0){var y,d=n(l);try{for(d.s();!(y=d.n()).done;){var _=y.value,m=_.parentPath,v=_.parentSchemaType,g=v.schema.options.timestamps,b=s(g,"updatedAt");if(g&&null!=b)if(v.$isSingleNested)r[m+"."+b]=o;else if(v.$isMongooseDocumentArray){var w=e.substr(m.length+1);if(/^\d+$/.test(w)){r[m+"."+w][b]=o;continue}var O=w.indexOf(".");r[m+"."+(w=-1!==O?w.substr(0,O):w)+"."+b]=o}}}catch(t){d.e(t)}finally{d.f()}}else if(null!=c.schema&&c.schema!=t&&r[e]){var S=c.schema.options.timestamps,A=s(S,"createdAt"),E=s(S,"updatedAt");if(!S)return;null!=E&&(r[e][E]=o),null!=A&&(r[e][A]=o)}}}t.exports=a},function(t,e,r){"use strict";t.exports=function(t){return t.replace(/\.\$(\[[^\]]*\])?\./g,".0.").replace(/\.(\[[^\]]*\])?\$$/g,".0")}},function(t,e,r){"use strict";
/*!
 * ignore
 */var n=r(3);t.exports=
/*!
 * ignore
 */
function(t,e,r,o,i){var s=o,a=s,u=n(i,"overwrite",!1),c=n(i,"timestamps",!0);if(!c||null==s)return o;var l=null!=c&&!1===c.createdAt,f=null!=c&&!1===c.updatedAt;if(u)return o&&o.$set&&(o=o.$set,s.$set={},a=s.$set),f||!r||o[r]||(a[r]=t),l||!e||o[e]||(a[e]=t),s;if(o=o||{},Array.isArray(s))return s.push({$set:{updatedAt:t}}),s;if(s.$set=s.$set||{},!f&&r&&(!o.$currentDate||!o.$currentDate[r])){var p=!1;if(-1!==r.indexOf("."))for(var h=r.split("."),y=1;y<h.length;++y){var d=h.slice(-y).join("."),_=h.slice(0,-y).join(".");if(null!=o[_]){o[_][d]=t,p=!0;break}if(o.$set&&o.$set[_]){o.$set[_][d]=t,p=!0;break}}p||(s.$set[r]=t),s.hasOwnProperty(r)&&delete s[r]}if(!l&&e){o[e]&&delete o[e],o.$set&&o.$set[e]&&delete o.$set[e];var m=!1;if(-1!==e.indexOf("."))for(var v=e.split("."),g=1;g<v.length;++g){var b=v.slice(-g).join("."),w=v.slice(0,-g).join(".");if(null!=o[w]){o[w][b]=t,m=!0;break}if(o.$set&&o.$set[w]){o.$set[w][b]=t,m=!0;break}}m||(s.$setOnInsert=s.$setOnInsert||{},s.$setOnInsert[e]=t)}0===Object.keys(s.$set).length&&delete s.$set;return s}},function(t,e,r){"use strict";var n=r(14),o=r(4);t.exports=function(t,e){if("string"==typeof t)return;if("function"==typeof t)return;throw new n('Invalid ref at path "'+e+'". Got '+o.inspect(t,{depth:0}))}},function(t,e,r){"use strict";
/*!
 * ignore
 */
/*!
 * Apply query middleware
 *
 * @param {Query} query constructor
 * @param {Model} model
 */
function n(t,e){var r={useErrorHandlers:!0,numCallbackParams:1,nullResultByDefault:!0},o=e.hooks.filter((function(t){var e=function(t){var e={};t.hasOwnProperty("query")&&(e.query=t.query);t.hasOwnProperty("document")&&(e.document=t.document);return e}(t);return"updateOne"===t.name?null==e.query||!!e.query:"deleteOne"===t.name?!!e.query||0===Object.keys(e).length:"validate"===t.name||"remove"===t.name?!!e.query:null==t.query&&null==t.document||!!t.query}));t.prototype._execUpdate=o.createWrapper("update",t.prototype._execUpdate,null,r),t.prototype.__distinct=o.createWrapper("distinct",t.prototype.__distinct,null,r),t.prototype.validate=o.createWrapper("validate",t.prototype.validate,null,r),n.middlewareFunctions.filter((function(t){return"update"!==t&&"distinct"!==t&&"validate"!==t})).forEach((function(e){t.prototype["_".concat(e)]=o.createWrapper(e,t.prototype["_".concat(e)],null,r)}))}t.exports=n,
/*!
 * ignore
 */
n.middlewareFunctions=["count","countDocuments","deleteMany","deleteOne","distinct","estimatedDocumentCount","find","findOne","findOneAndDelete","findOneAndRemove","findOneAndReplace","findOneAndUpdate","remove","replaceOne","update","updateMany","updateOne","validate"]},function(t,e,r){"use strict";(function(e){
/*!
 * Module dependencies.
 */
function n(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i,s=r(7),a=r(5),u=r(148),c=r(77),l=r(2),f=r(0).populateModelSymbol,p=s.CastError;function h(t,e){this.enumValues=[],this.regExp=null,s.call(this,t,e,"String")}
/*!
 * ignore
 */
function y(t){return this.castForQuery(t)}h.schemaName="String",h.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
h.prototype=Object.create(s.prototype),h.prototype.constructor=h,Object.defineProperty(h.prototype,"OptionsConstructor",{configurable:!1,enumerable:!1,writable:!1,value:u}),
/*!
 * ignore
 */
h._cast=c,h.cast=function(t){return 0===arguments.length||(!1===t&&(t=this._defaultCaster),this._cast=t),this._cast},
/*!
 * ignore
 */
h._defaultCaster=function(t){if(null!=t&&"string"!=typeof t)throw new Error;return t},h.get=s.get,h.set=s.set,
/*!
 * ignore
 */
h._checkRequired=function(t){return(t instanceof String||"string"==typeof t)&&t.length},h.checkRequired=s.checkRequired,h.prototype.enum=function(){if(this.enumValidator&&(this.validators=this.validators.filter((function(t){return t.validator!==this.enumValidator}),this),this.enumValidator=!1),void 0===arguments[0]||!1===arguments[0])return this;var t,e;l.isObject(arguments[0])?Array.isArray(arguments[0].values)?(t=arguments[0].values,e=arguments[0].message):(t=l.object.vals(arguments[0]),e=a.messages.String.enum):(t=arguments,e=a.messages.String.enum);var r,o=n(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;void 0!==i&&this.enumValues.push(this.cast(i))}}catch(t){o.e(t)}finally{o.f()}var s=this.enumValues;return this.enumValidator=function(t){return void 0===t||~s.indexOf(t)},this.validators.push({validator:this.enumValidator,message:e,type:"enum",enumValues:s}),this},h.prototype.lowercase=function(t){return arguments.length>0&&!t?this:this.set((function(t,e){return"string"!=typeof t&&(t=e.cast(t)),t?t.toLowerCase():t}))},h.prototype.uppercase=function(t){return arguments.length>0&&!t?this:this.set((function(t,e){return"string"!=typeof t&&(t=e.cast(t)),t?t.toUpperCase():t}))},h.prototype.trim=function(t){return arguments.length>0&&!t?this:this.set((function(t,e){return"string"!=typeof t&&(t=e.cast(t)),t?t.trim():t}))},h.prototype.minlength=function(t,e){if(this.minlengthValidator&&(this.validators=this.validators.filter((function(t){return t.validator!==this.minlengthValidator}),this)),null!=t){var r=e||a.messages.String.minlength;r=r.replace(/{MINLENGTH}/,t),this.validators.push({validator:this.minlengthValidator=function(e){return null===e||e.length>=t},message:r,type:"minlength",minlength:t})}return this},h.prototype.minLength=h.prototype.minlength,h.prototype.maxlength=function(t,e){if(this.maxlengthValidator&&(this.validators=this.validators.filter((function(t){return t.validator!==this.maxlengthValidator}),this)),null!=t){var r=e||a.messages.String.maxlength;r=r.replace(/{MAXLENGTH}/,t),this.validators.push({validator:this.maxlengthValidator=function(e){return null===e||e.length<=t},message:r,type:"maxlength",maxlength:t})}return this},h.prototype.maxLength=h.prototype.maxlength,h.prototype.match=function(t,e){var r=e||a.messages.String.match;return this.validators.push({validator:function(e){return!!t&&(t.lastIndex=0,null==e||""===e||t.test(e))},message:r,type:"regexp",regexp:t}),this},h.prototype.checkRequired=function(t,e){return s._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():h.checkRequired())(t)},h.prototype.cast=function(t,n,o){if(s._isRef(this,t,n,o)){if(null==t)return t;if(i||(i=r(6)),t instanceof i)return t.$__.wasPopulated=!0,t;if("string"==typeof t)return t;if(e.isBuffer(t)||!l.isObject(t))throw new p("string",t,this.path,null,this);var a=n.$__fullPath(this.path),u=new((n.ownerDocument?n.ownerDocument():n).populated(a,!0).options[f])(t);return u.$__.wasPopulated=!0,u}var c;c="function"==typeof this._castFunction?this._castFunction:"function"==typeof this.constructor.cast?this.constructor.cast():h.cast();try{return c(t)}catch(e){throw new p("string",t,this.path,null,this)}};var d=l.options(s.prototype.$conditionalHandlers,{$all:function(t){var e=this;return Array.isArray(t)?t.map((function(t){return e.castForQuery(t)})):[this.castForQuery(t)]},$gt:y,$gte:y,$lt:y,$lte:y,$options:String,$regex:y,$not:y});Object.defineProperty(h.prototype,"$conditionalHandlers",{configurable:!1,enumerable:!1,writable:!1,value:Object.freeze(d)}),h.prototype.castForQuery=function(t,e){var r;if(2===arguments.length){if(!(r=this.$conditionalHandlers[t]))throw new Error("Can't use "+t+" with String.");return r.call(this,e)}return e=t,"[object RegExp]"===Object.prototype.toString.call(e)?e:this._castForQuery(e)},
/*!
 * Module exports.
 */
t.exports=h}).call(this,r(1).Buffer)},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=s(r);function r(){return o(this,r),e.apply(this,arguments)}return r}(r(9)),l=r(10);Object.defineProperty(c.prototype,"enum",l),Object.defineProperty(c.prototype,"match",l),Object.defineProperty(c.prototype,"lowercase",l),Object.defineProperty(c.prototype,"trim",l),Object.defineProperty(c.prototype,"uppercase",l),Object.defineProperty(c.prototype,"minLength",l),Object.defineProperty(c.prototype,"minlength",l),Object.defineProperty(c.prototype,"maxLength",l),Object.defineProperty(c.prototype,"maxlength",l),Object.defineProperty(c.prototype,"populate",l),
/*!
 * ignore
 */
t.exports=c},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=s(r);function r(){return o(this,r),e.apply(this,arguments)}return r}(r(9)),l=r(10);Object.defineProperty(c.prototype,"min",l),Object.defineProperty(c.prototype,"max",l),Object.defineProperty(c.prototype,"enum",l),Object.defineProperty(c.prototype,"populate",l),
/*!
 * ignore
 */
t.exports=c},function(t,e,r){"use strict";var n=r(22);
/*!
 * Given a value, cast it to a number, or throw a `CastError` if the value
 * cannot be casted. `null` and `undefined` are considered valid.
 *
 * @param {Any} value
 * @param {String} [path] optional the path to set on the CastError
 * @return {Boolean|null|undefined}
 * @throws {Error} if `value` is not one of the allowed values
 * @api private
 */t.exports=function(t){return null==t?t:""===t?null:("string"!=typeof t&&"boolean"!=typeof t||(t=Number(t)),n.ok(!isNaN(t)),t instanceof Number?t.valueOf():"number"==typeof t?t:Array.isArray(t)||"function"!=typeof t.valueOf?t.toString&&!Array.isArray(t)&&t.toString()==Number(t)?Number(t):void n.ok(!1):Number(t.valueOf()))}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(12),o=r(7),i=r(49),s=r(2);function a(t,e){o.call(this,t,e,"Boolean")}a.schemaName="Boolean",a.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
a.prototype=Object.create(o.prototype),a.prototype.constructor=a,
/*!
 * ignore
 */
a._cast=i,a.set=o.set,a.cast=function(t){return 0===arguments.length||(!1===t&&(t=this._defaultCaster),this._cast=t),this._cast},
/*!
 * ignore
 */
a._defaultCaster=function(t){if(null!=t&&"boolean"!=typeof t)throw new Error;return t},
/*!
 * ignore
 */
a._checkRequired=function(t){return!0===t||!1===t},a.checkRequired=o.checkRequired,a.prototype.checkRequired=function(t){return this.constructor._checkRequired(t)},Object.defineProperty(a,"convertToTrue",{get:function(){return i.convertToTrue},set:function(t){i.convertToTrue=t}}),Object.defineProperty(a,"convertToFalse",{get:function(){return i.convertToFalse},set:function(t){i.convertToFalse=t}}),a.prototype.cast=function(t){var e;e="function"==typeof this._castFunction?this._castFunction:"function"==typeof this.constructor.cast?this.constructor.cast():a.cast();try{return e(t)}catch(e){throw new n("Boolean",t,this.path,e,this)}},a.$conditionalHandlers=s.options(o.prototype.$conditionalHandlers,{}),a.prototype.castForQuery=function(t,e){var r;return 2===arguments.length?(r=a.$conditionalHandlers[t])?r.call(this,e):this._castForQuery(e):this._castForQuery(t)},a.prototype._castNullish=function(t){if(void 0===t&&null!=this.$$context&&null!=this.$$context._mongooseOptions&&this.$$context._mongooseOptions.omitUndefined)return t;var e="function"==typeof this.constructor.cast?this.constructor.cast():a.cast();return null==e?t:!(e.convertToFalse instanceof Set&&e.convertToFalse.has(t))&&(!!(e.convertToTrue instanceof Set&&e.convertToTrue.has(t))||t)},
/*!
 * Module exports.
 */
t.exports=a},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n,o,i=r(55),s=r(12),a=r(19).EventEmitter,u=r(158),c=r(7),l=r(31),f=r(90),p=r(3),h=r(91),y=r(4),d=r(2),_=r(92),m=r(0).arrayPathSymbol,v=r(0).documentArrayParent;function g(t,e,r,n){null!=n&&null!=n._id?e=h(e,n):null!=r&&null!=r._id&&(e=h(e,r));var o=b(e,r);o.prototype.$basePath=t,i.call(this,t,o,r),this.schema=e,this.schemaOptions=n||{},this.$isMongooseDocumentArray=!0,this.Constructor=o,o.base=e.base;var s=this.defaultValue;"defaultValue"in this&&void 0===s||this.default((function(){var t=s.call(this);return Array.isArray(t)||(t=[t]),t}));var a=this;this.$embeddedSchemaType=new c(t+".$",{required:p(this,"schemaOptions.required",!1)}),this.$embeddedSchemaType.cast=function(t,e,r){return a.cast(t,e,r)[0]},this.$embeddedSchemaType.$isMongooseDocumentArrayElement=!0,this.$embeddedSchemaType.caster=this.Constructor,this.$embeddedSchemaType.schema=this.schema}
/*!
 * Ignore
 */
function b(t,e,n){function i(){o.apply(this,arguments),this.$session(this.ownerDocument().$session())}o||(o=r(26));var s=null!=n?n.prototype:o.prototype;for(var u in i.prototype=Object.create(s),i.prototype.$__setSchema(t),i.schema=t,i.prototype.constructor=i,i.$isArraySubdocument=!0,i.events=new a,t.methods)i.prototype[u]=t.methods[u];for(var c in t.statics)i[c]=t.statics[c];for(var l in a.prototype)i[l]=a.prototype[l];return i.options=e,i}
/*!
 * Scopes paths selected in a query to this array.
 * Necessary for proper default application of subdocument values.
 *
 * @param {DocumentArrayPath} array - the array to scope `fields` paths
 * @param {Object|undefined} fields - the root fields selected in the query
 * @param {Boolean|undefined} init - if we are being created part of a query result
 */
function w(t,e,r){if(r&&e){for(var n,o,i,s=t.path+".",a=Object.keys(e),u=a.length,c={};u--;)if((o=a[u]).startsWith(s)){if("$"===(i=o.substring(s.length)))continue;i.startsWith("$.")&&(i=i.substr(2)),n||(n=!0),c[i]=e[o]}return n&&c||void 0}}g.schemaName="DocumentArray",g.options={castNonArrays:!0},
/*!
 * Inherits from ArrayType.
 */
g.prototype=Object.create(i.prototype),g.prototype.constructor=g,g.prototype.OptionsConstructor=u,g.prototype.discriminator=function(t,e,r){"function"==typeof t&&(t=d.getFunctionName(t));var n=b(e=f(this.casterConstructor,t,e,r),null,this.casterConstructor);n.baseCasterConstructor=this.casterConstructor;try{Object.defineProperty(n,"name",{value:t})}catch(t){}return this.casterConstructor.discriminators[t]=n,this.casterConstructor.discriminators[t]},g.prototype.doValidate=function(t,e,i,s){n||(n=r(18));var a=this;try{c.prototype.doValidate.call(this,t,(function(r){if(r)return r.$isArrayValidatorError=!0,e(r);var u,c=t&&t.length;if(!c)return e();if(s&&s.updateValidator)return e();t.isMongooseDocumentArray||(t=new n(t,a.path,i));function f(t){null!=t&&((u=t)instanceof l||(u.$isArrayValidatorError=!0)),--c||e(u)}for(var p=0,h=c;p<h;++p){var y=t[p];if(null!=y){if(!(y instanceof o)){var d=_(a.casterConstructor,t[p]);y=t[p]=new d(y,t,void 0,void 0,p)}y.$__validate(f)}else--c||e(u)}}),i)}catch(t){return t.$isArrayValidatorError=!0,e(t)}},g.prototype.doValidateSync=function(t,e){var r=c.prototype.doValidateSync.call(this,t,e);if(null!=r)return r.$isArrayValidatorError=!0,r;var n=t&&t.length,i=null;if(n){for(var s=0,a=n;s<a;++s){var u=t[s];if(u){if(!(u instanceof o)){var l=_(this.casterConstructor,t[s]);u=t[s]=new l(u,t,void 0,void 0,s)}var f=u.validateSync();f&&null==i&&(i=f)}}return i}},
/*!
 * ignore
 */
g.prototype.getDefault=function(t){var e="function"==typeof this.defaultValue?this.defaultValue.call(t):this.defaultValue;if(null==e)return e;n||(n=r(18)),Array.isArray(e)||(e=[e]),e=new n(e,this.path,t);for(var o=0;o<e.length;++o){var i=new(_(this.casterConstructor,e[o]))({},e,void 0,void 0,o);i.init(e[o]),i.isNew=!0,Object.assign(i.$__.activePaths.default,i.$__.activePaths.init),i.$__.activePaths.init={},e[o]=i}return e},g.prototype.cast=function(t,e,i,a,u){if(n||(n=r(18)),null!=t&&null!=t[m]&&t===a)return t;var c,l,f={transform:!1,virtuals:!1};if(u=u||{},!Array.isArray(t)){if(!i&&!g.options.castNonArrays)throw new s("DocumentArray",y.inspect(t),this.path,null,this);return e&&i&&e.markModified(this.path),this.cast([t],e,i,a,u)}t&&t.isMongooseDocumentArray||u.skipDocumentArrayCast?t&&t.isMongooseDocumentArray&&(t=new n(t,this.path,e)):t=new n(t,this.path,e),null!=u.arrayPath&&(t[m]=u.arrayPath);for(var p=t.length,h={skipId:!0,willInit:!0},b=0;b<p;++b)if(t[b]){var O=_(this.casterConstructor,t[b]);if(!t[b].$__||t[b]instanceof O&&t[b][v]===e||(t[b]=t[b].toObject({transform:!1,virtuals:t[b].schema===O.schema})),t[b]instanceof o)null==t[b].__index&&t[b].$setIndex(b);else if(null!=t[b])if(i)e?c||(c=w(this,e.$__.selected,i)):c=!0,l=new O(null,t,h,c,b),t[b]=l.init(t[b]);else if(a&&"function"==typeof a.id&&(l=a.id(t[b]._id)),a&&l&&d.deepEqual(l.toObject(f),t[b]))l.set(t[b]),t[b]=l;else try{l=new O(t[b],t,void 0,void 0,b),t[b]=l}catch(e){var S=y.inspect(t[b]);throw new s("embedded",S,t[m],e,this)}}return t},
/*!
 * ignore
 */
g.prototype.clone=function(){var t=Object.assign({},this.options),e=new this.constructor(this.path,this.schema,t,this.schemaOptions);return e.validators=this.validators.slice(),void 0!==this.requiredValidator&&(e.requiredValidator=this.requiredValidator),e.Constructor.discriminators=Object.assign({},this.Constructor.discriminators),e},
/*!
 * ignore
 */
g.prototype.applyGetters=function(t,e){return c.prototype.applyGetters.call(this,t,e)},g.defaultOptions={},g.set=c.set,
/*!
 * Module exports.
 */
t.exports=g},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=s(r);function r(){return o(this,r),e.apply(this,arguments)}return r}(r(9)),l=r(10);Object.defineProperty(c.prototype,"enum",l),Object.defineProperty(c.prototype,"enum",l),
/*!
 * ignore
 */
t.exports=c},function(t,e,r){"use strict";t.exports=function t(e){if(!Array.isArray(e))return{min:0,max:0,containsNonArrayItem:!0};if(0===e.length)return{min:1,max:1,containsNonArrayItem:!1};for(var r=t(e[0]),n=1;n<e.length;++n){var o=t(e[n]);o.min<r.min&&(r.min=o.min),o.max>r.max&&(r.max=o.max),r.containsNonArrayItem=r.containsNonArrayItem||o.containsNonArrayItem}return r.min=r.min+1,r.max=r.max+1,r}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=r(12),a=r(32),u=r(54),c=r(156),l=r(3),f=r(157),p=r(80),h=r(4),y=r(21),d=r(29),_=["Polygon","MultiPolygon"];function m(t,e,r){if(Array.isArray(t))t.forEach((function(n,o){if(Array.isArray(n)||y(n))return m(n,e,r);t[o]=e.castForQueryWrapper({val:n,context:r})}));else for(var n=Object.keys(t),o=n.length;o--;){var i=n[o],s=t[i];Array.isArray(s)||y(s)?(m(s,e,r),t[i]=s):t[i]=e.castForQuery({val:s,context:r})}}t.exports=function t(e,r,o,v){if(Array.isArray(r))throw new Error("Query filter must be an object, got an array ",h.inspect(r));if(null==r)return r;r.hasOwnProperty("_bsontype")&&"ObjectID"!==r._bsontype&&delete r._bsontype,null!=e&&null!=e.discriminators&&null!=r[e.options.discriminatorKey]&&(e=f(e,r[e.options.discriminatorKey])||e);var g,b,w,O,S,A,E=Object.keys(r),j=E.length;for(o=o||{};j--;)if(A=r[O=E[j]],"$or"===O||"$nor"===O||"$and"===O){if(!Array.isArray(A))throw new s("Array",A,O);for(var $=0;$<A.length;++$){if(null==A[$]||"object"!==i(A[$]))throw new s("Object",A[$],O+"."+$);A[$]=t(e,A[$],o,v)}}else{if("$where"===O){if("string"!==(S=i(A))&&"function"!==S)throw new Error("Must have a string or function for $where");"function"===S&&(r[O]=A.toString());continue}if("$elemMatch"===O)A=t(e,A,o,v);else if("$text"===O)A=c(A,O);else{if(!e)continue;if(!(b=e.path(O)))for(var P=O.split("."),x=P.length;x--;){var N=P.slice(0,x).join("."),T=P.slice(x).join("."),k=e.path(N),C=l(k,"schema.options.discriminatorKey");if(null!=k&&null!=l(k,"schema.discriminators")&&null!=C&&T!==C){var R=l(r,N+"."+C);null!=R&&(b=k.schema.discriminators[R].path(T))}}if(b){if(null==A)continue;if("Object"===A.constructor.name)if(Object.keys(A).some(p))for(var D=Object.keys(A),B=void 0,M=D.length;M--;)if(w=A[B=D[M]],"$not"===B){if(w&&b&&!b.caster){if((g=Object.keys(w)).length&&p(g[0]))for(var I in w)w[I]=b.castForQueryWrapper({$conditional:I,val:w[I],context:v});else A[B]=b.castForQueryWrapper({$conditional:B,val:w,context:v});continue}t(b.caster?b.caster.schema:e,w,o,v)}else A[B]=b.castForQueryWrapper({$conditional:B,val:w,context:v});else r[O]=b.castForQueryWrapper({val:A,context:v});else if(Array.isArray(A)&&-1===["Buffer","Array"].indexOf(b.instance)){var F,L=[],U=n(A);try{for(U.s();!(F=U.n()).done;){var V=F.value;L.push(b.castForQueryWrapper({val:V,context:v}))}}catch(t){U.e(t)}finally{U.f()}r[O]={$in:L}}else r[O]=b.castForQueryWrapper({val:A,context:v})}else{for(var q=O.split("."),W=q.length,H=void 0,Y=void 0,K=void 0;W--&&(H=q.slice(0,W).join("."),!(b=e.path(H))););if(b){b.caster&&b.caster.schema?((K={})[Y=q.slice(W).join(".")]=A,r[O]=t(b.caster.schema,K,o,v)[Y]):r[O]=A;continue}if(y(A)){var z="";if(A.$near?z="$near":A.$nearSphere?z="$nearSphere":A.$within?z="$within":A.$geoIntersects?z="$geoIntersects":A.$geoWithin&&(z="$geoWithin"),z){var Q=new u.Number("__QueryCasting__"),J=A[z];if(null!=A.$maxDistance&&(A.$maxDistance=Q.castForQueryWrapper({val:A.$maxDistance,context:v})),null!=A.$minDistance&&(A.$minDistance=Q.castForQueryWrapper({val:A.$minDistance,context:v})),"$within"===z){var G=J.$center||J.$centerSphere||J.$box||J.$polygon;if(!G)throw new Error("Bad $within parameter: "+JSON.stringify(A));J=G}else if("$near"===z&&"string"==typeof J.type&&Array.isArray(J.coordinates))J=J.coordinates;else if(("$near"===z||"$nearSphere"===z||"$geoIntersects"===z)&&J.$geometry&&"string"==typeof J.$geometry.type&&Array.isArray(J.$geometry.coordinates))null!=J.$maxDistance&&(J.$maxDistance=Q.castForQueryWrapper({val:J.$maxDistance,context:v})),null!=J.$minDistance&&(J.$minDistance=Q.castForQueryWrapper({val:J.$minDistance,context:v})),d(J.$geometry)&&(J.$geometry=J.$geometry.toObject({transform:!1,virtuals:!1})),J=J.$geometry.coordinates;else if("$geoWithin"===z)if(J.$geometry){d(J.$geometry)&&(J.$geometry=J.$geometry.toObject({virtuals:!1}));var X=J.$geometry.type;if(-1===_.indexOf(X))throw new Error('Invalid geoJSON type for $geoWithin "'+X+'", must be "Polygon" or "MultiPolygon"');J=J.$geometry.coordinates}else J=J.$box||J.$polygon||J.$center||J.$centerSphere,d(J)&&(J=J.toObject({virtuals:!1}));m(J,Q,v);continue}}if(e.nested[O])continue;if(o.upsert&&o.strict){if("throw"===o.strict)throw new a(O);throw new a(O,'Path "'+O+'" is not in schema, strict mode is `true`, and upsert is `true`.')}if("throw"===o.strictQuery)throw new a(O,'Path "'+O+"\" is not in schema and strictQuery is 'throw'.");o.strictQuery&&delete r[O]}}}return r}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(12),i=r(49),s=r(77);
/*!
 * Casts val to an object suitable for `$text`. Throws an error if the object
 * can't be casted.
 *
 * @param {Any} val value to cast
 * @param {String} [path] path to associate with any errors that occured
 * @return {Object} casted object
 * @see https://docs.mongodb.com/manual/reference/operator/query/text/
 * @api private
 */
t.exports=function(t,e){if(null==t||"object"!==n(t))throw new o("$text",t,e);return null!=t.$search&&(t.$search=s(t.$search,e+".$search")),null!=t.$language&&(t.$language=s(t.$language,e+".$language")),null!=t.$caseSensitive&&(t.$caseSensitive=i(t.$caseSensitive,e+".$castSensitive")),null!=t.$diacriticSensitive&&(t.$diacriticSensitive=i(t.$diacriticSensitive,e+".$diacriticSensitive")),t}},function(t,e,r){"use strict";
/*!
* returns discriminator by discriminatorMapping.value
*
* @param {Schema} schema
* @param {string} value
*/t.exports=function(t,e){if(null==t||null==t.discriminators)return null;for(var r=0,n=Object.keys(t.discriminators);r<n.length;r++){var o=n[r],i=t.discriminators[o];if(null!=i.discriminatorMapping&&i.discriminatorMapping.value===e)return i}return null}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=s(r);function r(){return o(this,r),e.apply(this,arguments)}return r}(r(9)),l=r(10);Object.defineProperty(c.prototype,"excludeIndexes",l),Object.defineProperty(c.prototype,"_id",l),
/*!
 * ignore
 */
t.exports=c},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o,i=r(12),s=r(19).EventEmitter,a=r(73),u=r(160),c=r(7),l=r(48),f=r(33).castToNumber,p=r(90),h=r(81),y=r(3),d=r(92),_=r(91),m=r(17).internalToObjectOptions;function v(t,e,r){t=_(t,r),this.caster=g(t),this.caster.path=e,this.caster.prototype.$basePath=e,this.schema=t,this.$isSingleNested=!0,c.call(this,e,r,"Embedded")}
/*!
 * ignore
 */
/*!
 * ignore
 */
function g(t,e){o||(o=r(89));var n=function(t,e,r){var n=this;this.$__parent=r,o.apply(this,arguments),this.$session(this.ownerDocument().$session()),r&&(r.on("save",(function(){n.emit("save",n),n.constructor.emit("save",n)})),r.on("isNew",(function(t){n.isNew=t,n.emit("isNew",t),n.constructor.emit("isNew",t)})))},i=null!=e?e.prototype:o.prototype;for(var a in(n.prototype=Object.create(i)).$__setSchema(t),n.prototype.constructor=n,n.schema=t,n.$isSingleNested=!0,n.events=new s,n.prototype.toBSON=function(){return this.toObject(m)},t.methods)n.prototype[a]=t.methods[a];for(var u in t.statics)n[u]=t.statics[u];for(var c in s.prototype)n[c]=s.prototype[c];return n}
/*!
 * Special case for when users use a common location schema to represent
 * locations for use with $geoWithin.
 * https://docs.mongodb.org/manual/reference/operator/query/geoWithin/
 *
 * @param {Object} val
 * @api private
 */t.exports=v,v.prototype=Object.create(c.prototype),v.prototype.constructor=v,v.prototype.OptionsConstructor=u,v.prototype.$conditionalHandlers.$geoWithin=function(t){return{$geometry:this.castForQuery(t.$geometry)}},
/*!
 * ignore
 */
v.prototype.$conditionalHandlers.$near=v.prototype.$conditionalHandlers.$nearSphere=h.cast$near,v.prototype.$conditionalHandlers.$within=v.prototype.$conditionalHandlers.$geoWithin=h.cast$within,v.prototype.$conditionalHandlers.$geoIntersects=h.cast$geoIntersects,v.prototype.$conditionalHandlers.$minDistance=f,v.prototype.$conditionalHandlers.$maxDistance=f,v.prototype.$conditionalHandlers.$exists=l,v.prototype.cast=function(t,e,r,o,i){if(t&&t.$isSingleNested&&t.parent===e)return t;if(null!=t&&("object"!==n(t)||Array.isArray(t)))throw new a(this.path,t);var s,u=d(this.caster,t),c=y(e,"$__.selected",{}),l=this.path,f=Object.keys(c).reduce((function(t,e){return e.startsWith(l+".")&&(t[e.substr(l.length+1)]=c[e]),t}),{});return i=Object.assign({},i,{priorDoc:o}),r?((s=new u(void 0,f,e)).init(t),s):0===Object.keys(t).length?new u({},f,e,void 0,i):new u(t,f,e,void 0,i)},v.prototype.castForQuery=function(t,e,r){var n;if(2===arguments.length){if(!(n=this.$conditionalHandlers[t]))throw new Error("Can't use "+t);return n.call(this,e)}if(null==(e=t))return e;this.options.runSetters&&(e=this._applySetters(e));var o=d(this.caster,e),s=null!=r&&null!=r.strict?r.strict:void 0;try{e=new o(e,s)}catch(t){if(!(t instanceof i))throw new i("Embedded",e,this.path,t,this);throw t}return e},v.prototype.doValidate=function(t,e,r,n){var o=d(this.caster,t);if(n&&n.skipSchemaValidators)return t instanceof o||(t=new o(t,null,r)),t.validate(e);c.prototype.doValidate.call(this,t,(function(r){return r?e(r):t?void t.validate(e):e(null)}),r,n)},v.prototype.doValidateSync=function(t,e,r){if(!r||!r.skipSchemaValidators){var n=c.prototype.doValidateSync.call(this,t,e);if(n)return n}if(t)return t.validateSync()},v.prototype.discriminator=function(t,e,r){return e=p(this.caster,t,e,r),this.caster.discriminators[t]=g(e,this.caster),this.caster.discriminators[t]},v.defaultOptions={},v.set=c.set,
/*!
 * ignore
 */
v.prototype.clone=function(){var t=Object.assign({},this.options),e=new this.constructor(this.schema,this.path,t);return e.validators=this.validators.slice(),void 0!==this.requiredValidator&&(e.requiredValidator=this.requiredValidator),e.caster.discriminators=Object.assign({},this.caster.discriminators),e}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=s(r);function r(){return o(this,r),e.apply(this,arguments)}return r}(r(9)),l=r(10);Object.defineProperty(c.prototype,"_id",l),t.exports=c},function(t,e,r){"use strict";(function(e){
/*!
 * Module dependencies.
 */
function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o,i=r(85),s=r(162),a=r(7),u=r(79),c=r(2),l=r(0).populateModelSymbol,f=i.Binary,p=a.CastError;function h(t,e){a.call(this,t,e,"Buffer")}
/*!
 * ignore
 */
function y(t){return this.castForQuery(t)}h.schemaName="Buffer",h.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
h.prototype=Object.create(a.prototype),h.prototype.constructor=h,h.prototype.OptionsConstructor=s,
/*!
 * ignore
 */
h._checkRequired=function(t){return!(!t||!t.length)},h.set=a.set,h.checkRequired=a.checkRequired,h.prototype.checkRequired=function(t,e){return a._isRef(this,t,e,!0)?!!t:this.constructor._checkRequired(t)},h.prototype.cast=function(t,s,u){var h;if(a._isRef(this,t,s,u)){if(null==t)return t;if(o||(o=r(6)),t instanceof o)return t.$__.wasPopulated=!0,t;if(e.isBuffer(t))return t;if(!c.isObject(t))throw new p("Buffer",t,this.path,null,this);var y=s.$__fullPath(this.path);return(h=new((s.ownerDocument?s.ownerDocument():s).populated(y,!0).options[l])(t)).$__.wasPopulated=!0,h}if(t&&t._id&&(t=t._id),t&&t.isMongooseBuffer)return t;if(e.isBuffer(t))return t&&t.isMongooseBuffer||(t=new i(t,[this.path,s]),null!=this.options.subtype&&(t._subtype=this.options.subtype)),t;if(t instanceof f){if(h=new i(t.value(!0),[this.path,s]),"number"!=typeof t.sub_type)throw new p("Buffer",t,this.path,null,this);return h._subtype=t.sub_type,h}if(null===t)return t;var d=n(t);if("string"===d||"number"===d||Array.isArray(t)||"object"===d&&"Buffer"===t.type&&Array.isArray(t.data))return"number"===d&&(t=[t]),h=new i(t,[this.path,s]),null!=this.options.subtype&&(h._subtype=this.options.subtype),h;throw new p("Buffer",t,this.path,null,this)},h.prototype.subtype=function(t){return this.options.subtype=t,this},h.prototype.$conditionalHandlers=c.options(a.prototype.$conditionalHandlers,{$bitsAllClear:u,$bitsAnyClear:u,$bitsAllSet:u,$bitsAnySet:u,$gt:y,$gte:y,$lt:y,$lte:y}),h.prototype.castForQuery=function(t,e){var r;if(2===arguments.length){if(!(r=this.$conditionalHandlers[t]))throw new Error("Can't use "+t+" with Buffer.");return r.call(this,e)}e=t;var n=this._castForQuery(e);return n?n.toObject({transform:!1,virtuals:!1}):n},
/*!
 * Module exports.
 */
t.exports=h}).call(this,r(1).Buffer)},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=s(r);function r(){return o(this,r),e.apply(this,arguments)}return r}(r(9)),l=r(10);Object.defineProperty(c.prototype,"subtype",l),
/*!
 * ignore
 */
t.exports=c},function(t,e,r){"use strict";
/*!
 * Module requirements.
 */var n=r(5),o=r(164),i=r(7),s=r(165),a=r(2),u=i.CastError;function c(t,e){i.call(this,t,e,"Date")}
/*!
 * Date Query casting.
 *
 * @api private
 */
function l(t){return this.cast(t)}c.schemaName="Date",c.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
c.prototype=Object.create(i.prototype),c.prototype.constructor=c,c.prototype.OptionsConstructor=o,
/*!
 * ignore
 */
c._cast=s,c.set=i.set,c.cast=function(t){return 0===arguments.length||(!1===t&&(t=this._defaultCaster),this._cast=t),this._cast},
/*!
 * ignore
 */
c._defaultCaster=function(t){if(null!=t&&!(t instanceof Date))throw new Error;return t},c.prototype.expires=function(t){return this._index&&"Object"===this._index.constructor.name||(this._index={}),this._index.expires=t,a.expires(this._index),this},
/*!
 * ignore
 */
c._checkRequired=function(t){return t instanceof Date},c.checkRequired=i.checkRequired,c.prototype.checkRequired=function(t,e){return i._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():c.checkRequired())(t)},c.prototype.min=function(t,e){if(this.minValidator&&(this.validators=this.validators.filter((function(t){return t.validator!==this.minValidator}),this)),t){var r=e||n.messages.Date.min;"string"==typeof r&&(r=r.replace(/{MIN}/,t===Date.now?"Date.now()":t.toString()));var o=this;this.validators.push({validator:this.minValidator=function(e){var r=t;"function"==typeof t&&t!==Date.now&&(r=r.call(this));var n=r===Date.now?r():o.cast(r);return null===e||e.valueOf()>=n.valueOf()},message:r,type:"min",min:t})}return this},c.prototype.max=function(t,e){if(this.maxValidator&&(this.validators=this.validators.filter((function(t){return t.validator!==this.maxValidator}),this)),t){var r=e||n.messages.Date.max;"string"==typeof r&&(r=r.replace(/{MAX}/,t===Date.now?"Date.now()":t.toString()));var o=this;this.validators.push({validator:this.maxValidator=function(e){var r=t;"function"==typeof r&&r!==Date.now&&(r=r.call(this));var n=r===Date.now?r():o.cast(r);return null===e||e.valueOf()<=n.valueOf()},message:r,type:"max",max:t})}return this},c.prototype.cast=function(t){var e;e="function"==typeof this._castFunction?this._castFunction:"function"==typeof this.constructor.cast?this.constructor.cast():c.cast();try{return e(t)}catch(e){throw new u("date",t,this.path,e,this)}},c.prototype.$conditionalHandlers=a.options(i.prototype.$conditionalHandlers,{$gt:l,$gte:l,$lt:l,$lte:l}),c.prototype.castForQuery=function(t,e){if(2!==arguments.length)return this._castForQuery(t);var r=this.$conditionalHandlers[t];if(!r)throw new Error("Can't use "+t+" with Date.");return r.call(this,e)},
/*!
 * Module exports.
 */
t.exports=c},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=s(r);function r(){return o(this,r),e.apply(this,arguments)}return r}(r(9)),l=r(10);Object.defineProperty(c.prototype,"min",l),Object.defineProperty(c.prototype,"max",l),Object.defineProperty(c.prototype,"expires",l),
/*!
 * ignore
 */
t.exports=c},function(t,e,r){"use strict";var n=r(22);t.exports=function(t){return null==t||""===t?null:t instanceof Date?(n.ok(!isNaN(t.valueOf())),t):(n.ok("boolean"!=typeof t),e=t instanceof Number||"number"==typeof t?new Date(t):"string"==typeof t&&!isNaN(Number(t))&&(Number(t)>=275761||Number(t)<-271820)?new Date(Number(t)):"function"==typeof t.valueOf?new Date(t.valueOf()):new Date(t),isNaN(e.valueOf())?void n.ok(!1):e);var e}},function(t,e,r){"use strict";(function(e){
/*!
 * Module dependencies.
 */
var n,o=r(167),i=r(7),s=r(86),a=r(13),u=r(2),c=r(0).populateModelSymbol,l=i.CastError;function f(t,e){var r="string"==typeof t&&24===t.length&&/^[a-f0-9]+$/i.test(t),n=e&&e.suppressWarning;!r&&void 0!==t||n||(console.warn("mongoose: To create a new ObjectId please try `Mongoose.Types.ObjectId` instead of using `Mongoose.Schema.ObjectId`. Set the `suppressWarning` option if you're trying to create a hex char path in your schema."),console.trace()),i.call(this,t,e,"ObjectID")}
/*!
 * ignore
 */
function p(t){return this.cast(t)}
/*!
 * ignore
 */
function h(){return new a}function y(t){if(n||(n=r(6)),this instanceof n){if(void 0===t){var e=new a;return this.$__._id=e,e}this.$__._id=t}return t}
/*!
 * Module exports.
 */f.schemaName="ObjectId",f.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
f.prototype=Object.create(i.prototype),f.prototype.constructor=f,f.prototype.OptionsConstructor=o,f.get=i.get,f.set=i.set,f.prototype.auto=function(t){return t&&(this.default(h),this.set(y)),this},
/*!
 * ignore
 */
f._checkRequired=function(t){return t instanceof a},
/*!
 * ignore
 */
f._cast=s,f.cast=function(t){return 0===arguments.length||(!1===t&&(t=this._defaultCaster),this._cast=t),this._cast},
/*!
 * ignore
 */
f._defaultCaster=function(t){if(!(t instanceof a))throw new Error(t+" is not an instance of ObjectId");return t},f.checkRequired=i.checkRequired,f.prototype.checkRequired=function(t,e){return i._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():f.checkRequired())(t)},f.prototype.cast=function(t,o,s){if(i._isRef(this,t,o,s)){if(null==t)return t;if(n||(n=r(6)),t instanceof n)return t.$__.wasPopulated=!0,t;if(t instanceof a)return t;if("objectid"===(t.constructor.name||"").toLowerCase())return new a(t.toHexString());if(e.isBuffer(t)||!u.isObject(t))throw new l("ObjectId",t,this.path,null,this);var p=o.$__fullPath(this.path),h=(o.ownerDocument?o.ownerDocument():o).populated(p,!0),y=t;return o.$__.populated&&o.$__.populated[p]&&o.$__.populated[p].options&&o.$__.populated[p].options.options&&o.$__.populated[p].options.options.lean||((y=new h.options[c](t)).$__.wasPopulated=!0),y}var d;d="function"==typeof this._castFunction?this._castFunction:"function"==typeof this.constructor.cast?this.constructor.cast():f.cast();try{return d(t)}catch(e){throw new l("ObjectId",t,this.path,e,this)}},f.prototype.$conditionalHandlers=u.options(i.prototype.$conditionalHandlers,{$gt:p,$gte:p,$lt:p,$lte:p}),h.$runBeforeSetters=!0,t.exports=f}).call(this,r(1).Buffer)},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=s(r);function r(){return o(this,r),e.apply(this,arguments)}return r}(r(9)),l=r(10);Object.defineProperty(c.prototype,"auto",l),Object.defineProperty(c.prototype,"populate",l),
/*!
 * ignore
 */
t.exports=c},function(t,e,r){"use strict";(function(e){
/*!
 * Module dependencies.
 */
var n,o=r(7),i=o.CastError,s=r(20),a=r(169),u=r(2),c=r(0).populateModelSymbol;function l(t,e){o.call(this,t,e,"Decimal128")}
/*!
 * ignore
 */
function f(t){return this.cast(t)}l.schemaName="Decimal128",l.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
l.prototype=Object.create(o.prototype),l.prototype.constructor=l,
/*!
 * ignore
 */
l._cast=a,l.set=o.set,l.cast=function(t){return 0===arguments.length||(!1===t&&(t=this._defaultCaster),this._cast=t),this._cast},
/*!
 * ignore
 */
l._defaultCaster=function(t){if(null!=t&&!(t instanceof s))throw new Error;return t},
/*!
 * ignore
 */
l._checkRequired=function(t){return t instanceof s},l.checkRequired=o.checkRequired,l.prototype.checkRequired=function(t,e){return o._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():l.checkRequired())(t)},l.prototype.cast=function(t,a,f){if(o._isRef(this,t,a,f)){if(null==t)return t;if(n||(n=r(6)),t instanceof n)return t.$__.wasPopulated=!0,t;if(t instanceof s)return t;if(e.isBuffer(t)||!u.isObject(t))throw new i("Decimal128",t,this.path,null,this);var p=a.$__fullPath(this.path),h=(a.ownerDocument?a.ownerDocument():a).populated(p,!0),y=t;return a.$__.populated&&a.$__.populated[p]&&a.$__.populated[p].options&&a.$__.populated[p].options.options&&a.$__.populated[p].options.options.lean||((y=new h.options[c](t)).$__.wasPopulated=!0),y}var d;d="function"==typeof this._castFunction?this._castFunction:"function"==typeof this.constructor.cast?this.constructor.cast():l.cast();try{return d(t)}catch(e){throw new i("Decimal128",t,this.path,e,this)}},l.prototype.$conditionalHandlers=u.options(o.prototype.$conditionalHandlers,{$gt:f,$gte:f,$lt:f,$lte:f}),
/*!
 * Module exports.
 */
t.exports=l}).call(this,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(20),i=r(22);t.exports=function(t){return null==t?t:"object"===n(t)&&"string"==typeof t.$numberDecimal?o.fromString(t.$numberDecimal):t instanceof o?t:"string"==typeof t?o.fromString(t):e.isBuffer(t)?new o(t):"number"==typeof t?o.fromString(String(t)):"function"==typeof t.valueOf&&"string"==typeof t.valueOf()?o.fromString(t.valueOf()):void i.ok(!1)}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";(function(e){
/*!
 * ignore
 */
function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=r(87),h=r(171),y=r(7),d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(h,t);var r,n,i,l=c(h);function h(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),(r=l.call(this,t,e,"Map")).$isSchemaMap=!0,r}return r=h,(n=[{key:"set",value:function(t,e){return y.set(t,e)}},{key:"cast",value:function(t,r,n){if(t instanceof p)return t;var i=this.path;if(n){var s=new p({},i,r,this.$__schemaType);if(t instanceof e.Map){var a,u=o(t.keys());try{for(u.s();!(a=u.n()).done;){var c=a.value,l=t.get(c);l=null==l?s.$__schemaType._castNullish(l):s.$__schemaType.cast(l,r,!0,null,{path:i+"."+c}),s.$init(c,l)}}catch(t){u.e(t)}finally{u.f()}}else for(var f=0,h=Object.keys(t);f<h.length;f++){var y=h[f],d=t[y];d=null==d?s.$__schemaType._castNullish(d):s.$__schemaType.cast(d,r,!0,null,{path:i+"."+y}),s.$init(y,d)}return s}return new p(t,i,r,this.$__schemaType)}},{key:"clone",value:function(){var t=a(f(h.prototype),"clone",this).call(this);return null!=this.$__schemaType&&(t.$__schemaType=this.$__schemaType.clone()),t}}])&&s(r.prototype,n),i&&s(r,i),h}(y);d.prototype.OptionsConstructor=h,d.defaultOptions={},t.exports=d}).call(this,r(11))},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=s(r);function r(){return o(this,r),e.apply(this,arguments)}return r}(r(9)),l=r(10);Object.defineProperty(c.prototype,"of",l),t.exports=c},function(t,e,r){"use strict";(function(t){
/*!
 * Module dependencies.
 */
function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(15).get().Binary,i=r(20),s=r(13),a=r(29);
/*!
 * ignore
 */
function u(e){return e&&"object"===n(e)&&!(e instanceof Date)&&!(e instanceof s)&&(!Array.isArray(e)||e.length>0)&&!(e instanceof t)&&!(e instanceof i)&&!(e instanceof o)}e.flatten=
/*!
 * ignore
 */
function e(r,n,o,i){var s;s=r&&a(r)&&!t.isBuffer(r)?Object.keys(r.toObject({transform:!1,virtuals:!1})):Object.keys(r||{});var c=s.length,l={};n=n?n+".":"";for(var f=0;f<c;++f){var p=s[f],h=r[p];l[n+p]=h;var y=i&&i.path&&i.path(n+p),d=i&&i.nested&&i.nested[n+p];if(!y||"Mixed"!==y.instance){if(u(h)){if(o&&o.skipArrays&&Array.isArray(h))continue;var _=e(h,n+p,o,i);for(var m in _)l[m]=_[m];Array.isArray(h)&&(l[n+p]=h)}if(d)for(var v=Object.keys(i.paths),g=0,b=v;g<b.length;g++){var w=b[g];w.startsWith(n+p+".")&&!l.hasOwnProperty(w)&&(l[w]=void 0)}}}return l}
/*!
 * ignore
 */,e.modifiedPaths=function e(r,n,o){var i=Object.keys(r||{}),s=i.length;o=o||{},n=n?n+".":"";for(var c=0;c<s;++c){var l=i[c],f=r[l];o[n+l]=!0,a(f)&&!t.isBuffer(f)&&(f=f.toObject({transform:!1,virtuals:!1})),u(f)&&e(f,n+l,o)}return o}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n=r(3);
/*!
 * Like `schema.path()`, except with a document, because impossible to
 * determine path type without knowing the embedded discriminator key.
 */t.exports=function t(e,r,o){for(var i=(o=o||{}).typeOnly,s=r.split("."),a=null,u="adhocOrUndefined",c=0;c<s.length;++c){var l=s.slice(0,c+1).join(".");if(null!=(a=e.schema.path(l))){if("Mixed"===a.instance)return i?"real":a;if(u=e.schema.pathType(l),(a.$isSingleNested||a.$isMongooseDocumentArrayElement)&&null!=a.schema.discriminators){var f=a.schema.discriminators,p=e.get(l+"."+n(a,"schema.options.discriminatorKey"));if(null==p||null==f[p])continue;var h=s.slice(c+1).join(".");return t(e.get(l),h,o)}}else u="adhocOrUndefined"}return i?u:a}},function(t,e,r){"use strict";
/*!
 * ignore
 */
/*!
 * Returns this documents _id cast to a string.
 */
function n(){return null!=this._id?String(this._id):null}t.exports=function(t){!t.paths.id&&!t.options.noVirtualId&&t.options.id&&t.virtual("id").get(n)}},function(t,e,r){"use strict";var n=r(58);
/*!
 * ignore
 */t.exports=function(t){var e=Object.keys(t),r=e.length,o=null;if(1===r&&"_id"===e[0])o=!!t[e[r]];else for(;r--;)if("_id"!==e[r]&&n(t[e[r]])){o=!t[e[r]];break}return o}},function(t,e,r){"use strict";
/*!
 * Module dependencies
 */function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=r(177),a=r(3),u=r(34),c=r(58),l=r(28);
/*!
 * Set each path query option to lean
 *
 * @param {Object} option
 */
function f(t){return function(e){e.options||(e.options={}),null!=t&&Array.isArray(t.virtuals)&&((t=Object.assign({},t)).virtuals=t.virtuals.filter((function(t){return"string"==typeof t&&t.startsWith(e.path+".")})).map((function(t){return t.slice(e.path.length+1)}))),e.options.lean=t}}
/*!
 * Handle the `WriteOpResult` from the server
 */
/*!
 * Prepare a set of path options for query population.
 *
 * @param {Query} query
 * @param {Object} options
 * @return {Array}
 */
e.preparePopulationOptions=function(t,e){var r=t.options.populate,n=Object.keys(r).reduce((function(t,e){return t.concat([r[e]])}),[]);return null!=e.lean&&n.filter((function(t){return null==a(t,"options.lean")})).forEach(f(e.lean)),n},
/*!
 * Prepare a set of path options for query population. This is the MongooseQuery
 * version
 *
 * @param {Query} query
 * @param {Object} options
 * @return {Array}
 */
e.preparePopulationOptionsMQ=function(t,e){var r=t._mongooseOptions.populate,n=Object.keys(r).reduce((function(t,e){return t.concat([r[e]])}),[]);null!=e.lean&&n.filter((function(t){return null==a(t,"options.lean")})).forEach(f(e.lean));var o=a(t,"options.session",null);null!=o&&n.forEach((function(t){null!=t.options?"session"in t.options||(t.options.session=o):t.options={session:o}}));var i=t._fieldsForExec();return n.forEach((function(t){t._queryProjection=i})),n},
/*!
 * If the document is a mapped discriminator type, it returns a model instance for that type, otherwise,
 * it returns an instance of the given model.
 *
 * @param {Model}  model
 * @param {Object} doc
 * @param {Object} fields
 *
 * @return {Document}
 */
e.createModel=function(t,r,n,o){t.hooks.execPreSync("createModel",r);var i=t.schema?t.schema.discriminatorMapping:null,s=i&&i.isRoot?i.key:null,a=r[s];if(s&&a&&t.discriminators){var c=t.discriminators[a]||u(t,a);if(c){var f=l(o);return e.applyPaths(f,c.schema),new c(void 0,f,!0)}}return new t(void 0,n,{skipId:!0,isNew:!1,willInit:!0})},
/*!
 * ignore
 */
e.applyPaths=function(t,e){var r,i,u;if(t)for(u=(i=Object.keys(t)).length;u--;)if("+"!==i[u][0]){var l=t[i[u]];if(c(l)){r=!l;break}}var f=[],p=[],h=[];switch(function e(o,u){if(u||(u=""),-1!==h.indexOf(o))return[];h.push(o);var c=[];return o.eachPath((function(o,l){u&&(o=u+"."+o);var h=function(e,o){var s="+"+e,u=t&&s in t;u&&delete t[s];if("boolean"!=typeof o.selected)return;if(u)return delete t[s],void(!1===r&&i.length>1&&!~i.indexOf(e)&&(t[e]=1));for(var c=e.split("."),l="",h=0;h<c.length;++h)if(l+=l.length?"."+c[h]:c[h],-1!==p.indexOf(l))return;if(!r&&a(o,"options.$skipDiscriminatorCheck",!1))for(var y="",d=0;d<c.length;++d){y+=(0===y.length?"":".")+c[d];var _=a(t,y,!1)||a(t,y+".$",!1);if(_&&"object"!==n(_))return}return(o.selected?f:p).push(e),e}(o,l);if(null!=h&&c.push(h),l.schema){var y=e(l.schema,o);!1===r&&s(t,o,l.schema,f,y)}})),h.pop(),c}(e),r){case!0:var y,d=o(p);try{for(d.s();!(y=d.n()).done;){var _=y.value;t[_]=0}}catch(t){d.e(t)}finally{d.f()}break;case!1:e&&e.paths._id&&e.paths._id.options&&!1===e.paths._id.options.select&&(t._id=0);var m,v=o(f);try{for(v.s();!(m=v.n()).done;){var g=m.value;t[g]=t[g]||1}}catch(t){v.e(t)}finally{v.f()}break;case void 0:if(null==t)break;for(var b=0,w=Object.keys(t||{});b<w.length;b++){var O=w[b];O.startsWith("+")&&delete t[O]}var S,A=o(p);try{for(A.s();!(S=A.n()).done;){var E=S.value;t[E]=0}}catch(t){A.e(t)}finally{A.f()}}},e.handleDeleteWriteOpResult=function(t){return function(e,r){if(e)return t(e);var n=Object.assign({},r.result);return null!=a(r,"result.n",null)&&(n.deletedCount=r.result.n),null!=r.deletedCount&&(n.deletedCount=r.deletedCount),t(null,n)}}},function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){var i=Object.keys(t).reduce((function(t,r){return t||r.startsWith(e+".")}),!1),s=e+"."+r.options.discriminatorKey;i||1!==o.length||o[0]!==s||n.splice(n.indexOf(s),1)}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return!!t&&("object"===n(t)||"function"==typeof t)&&"function"==typeof t.then}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(6),o=r(19).EventEmitter,i=r(5),s=r(52),a=r(13),u=i.ValidationError,c=r(76),l=r(21);function f(t,e,r,o,u){if(!(this instanceof f))return new f(t,e,r,o,u);if(l(e)&&!e.instanceOfSchema&&(e=new s(e)),e=this.schema||e,!this.schema&&e.options._id&&void 0===(t=t||{})._id&&(t._id=new a),!e)throw new i.MissingSchemaError;for(var p in this.$__setSchema(e),n.call(this,t,r,o,u),c(this,e,{decorateDoc:!0}),e.methods)this[p]=e.methods[p];for(var h in e.statics)this[h]=e.statics[h]}
/*!
 * Inherit from the NodeJS document
 */f.prototype=Object.create(n.prototype),f.prototype.constructor=f,
/*!
 * ignore
 */
f.events=new o,
/*!
 * Browser doc exposes the event emitter API
 */
f.$emitter=new o,["on","once","emit","listeners","removeListener","setMaxListeners","removeAllListeners","addListener"].forEach((function(t){f[t]=function(){return f.$emitter[t].apply(f.$emitter,arguments)}})),
/*!
 * Module exports.
 */
f.ValidationError=u,t.exports=f}])}));

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/only/index.js":
/*!************************************!*\
  !*** ./node_modules/only/index.js ***!
  \************************************/
/***/ ((module) => {


module.exports = function(obj, keys){
  obj = obj || {};
  if ('string' == typeof keys) keys = keys.split(/ +/);
  return keys.reduce(function(ret, key){
    if (null == obj[key]) return ret;
    ret[key] = obj[key];
    return ret;
  }, {});
};


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/VooduXWebWorker.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=VooduXWebWorker.js.map