"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLClient = void 0;

require("regenerator-runtime/runtime");

require("cross-fetch/polyfill");

var _transporter = require("./transporter");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GraphQLClient =
/*#__PURE__*/
function () {
  function GraphQLClient() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, GraphQLClient);

    if (options.transporter) {
      this.transporter = options.transporter;
      return;
    }

    if (!options.url) {
      throw new Error('GraphQLClient: options.url and options.transporter is null - provide one of them to remove this error!');
    }

    this.transporter = new _transporter.HTTPBodyTransporter(options.url, options.fetch);
  }

  _createClass(GraphQLClient, [{
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query) {
        var variables,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // this deletes all \n and recuring occurences of \t
                query = query.replace(/\r?\n|\r|/g, '').replace(/\t{2,}/g, ' ');
                _context.next = 4;
                return this.transporter.fetch({
                  query: query,
                  variables: variables
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
  }]);

  return GraphQLClient;
}();

exports.GraphQLClient = GraphQLClient;