"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

exports.__esModule = true;

var Immutable = _interopRequire(require("immutable"));

var value = _interopRequire(require("object-path"));

var purender = function (_ref2) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var raw = _ref2.raw;
  return (function () {
    var _ref = {};
    _ref[Symbol.toStringTag] = "purender";

    _ref.shouldComponentUpdate = function shouldComponentUpdate() {
      var _this = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var watchlist = String.raw.apply(String, [{ raw: raw }].concat(values)).split(/\s+/);

      return watchlist.reduce(function (m, n) {
        var props = args[0];
        var state = args[1];
        var next = { props: props, state: state };
        var _n$split = n.split(".");

        var _n$split2 = _toArray(_n$split);

        var type = _n$split2[0];

        var path = _n$split2.slice(1);

        return m || !Immutable.is(value.get(_this[type], path), value.get(next[type], path));
      }, false);
    };

    return _ref;
  })();
};
exports.purender = purender;