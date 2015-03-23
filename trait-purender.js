"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

exports.__esModule = true;

var objectPath = _interopRequire(require("object-path"));

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

      for (var _len2 = arguments.length, next = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        next[_key2] = arguments[_key2];
      }

      var watchlist = String.raw.apply(String, [{ raw: raw }].concat(values)).split(" ");

      return watchlist.reduce(function (m, n) {
        var _next = _slicedToArray(next, 2);

        var props = _next[0];
        var state = _next[1];
        var next = { props: props, state: state };
        var _n$split = n.split(".");

        var _n$split2 = _toArray(_n$split);

        var type = _n$split2[0];

        var path = _n$split2.slice(1);

        return m || objectPath.get(_this[type], path) !== objectPath.get(next[type], path);
      }, false);
    };

    return _ref;
  })();
};
exports.purender = purender;