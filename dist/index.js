"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _lib = require("./lib");
var _sampleData = _interopRequireDefault(require("./data/sample-data.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var root = _client.default.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_lib.Table, {
  data: _sampleData.default
}))));