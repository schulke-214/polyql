"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTTPBodyTransporter = exports.HTTPQueryStringTransporter = void 0;

require("regenerator-runtime/runtime");

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HTTPQueryStringTransporter =
/*#__PURE__*/
function () {
  function HTTPQueryStringTransporter(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, HTTPQueryStringTransporter);

    this.url = url;
    this.options = options;
  }

  _createClass(HTTPQueryStringTransporter, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request) {
        var params, url, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(request);
                params = _qs.default.stringify(request);
                url = "".concat(this.url, "?operationName=Project&").concat(params);
                _context.next = 5;
                return fetch(url, _objectSpread({
                  method: 'GET'
                }, this.options));

              case 5:
                response = _context.sent;
                console.log(_qs.default.parse(params));
                _context.prev = 7;
                _context.next = 10;
                return response.json();

              case 10:
                return _context.abrupt("return", _context.sent);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](7);
                throw _context.t0;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 13]]);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }())
  }]);

  return HTTPQueryStringTransporter;
}();

exports.HTTPQueryStringTransporter = HTTPQueryStringTransporter;

var HTTPBodyTransporter =
/*#__PURE__*/
function () {
  function HTTPBodyTransporter(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, HTTPBodyTransporter);

    this.url = url;

    var headers = options.headers,
        others = _objectWithoutProperties(options, ["headers"]);

    this.options = _objectSpread({
      headers: _objectSpread({
        'Content-Type': 'application/json'
      }, headers)
    }, others);
  }

  _createClass(HTTPBodyTransporter, [{
    key: "fetch",
    value: function (_fetch2) {
      function fetch(_x3) {
        return _fetch2.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch2.toString();
      };

      return fetch;
    }(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(request) {
        var body, response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                body = JSON.stringify(request);
                _context2.next = 3;
                return fetch(this.url, _objectSpread({
                  method: 'POST',
                  body: body
                }, this.options));

              case 3:
                response = _context2.sent;
                _context2.prev = 4;
                _context2.next = 7;
                return response.json();

              case 7:
                return _context2.abrupt("return", _context2.sent);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](4);
                throw _context2.t0;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 10]]);
      }));

      return function (_x4) {
        return _ref2.apply(this, arguments);
      };
    }())
  }]);

  return HTTPBodyTransporter;
}();

exports.HTTPBodyTransporter = HTTPBodyTransporter;