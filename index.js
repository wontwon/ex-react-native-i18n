'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18n = require('./vendor/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _expo = require('expo');

var _expo2 = _interopRequireDefault(_expo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_i18n2.default.initAsync = async function () {
  var locale = await _expo2.default.Util.getCurrentLocaleAsync();
  _i18n2.default.locale = locale ? locale.replace(/_/, '-') : '';
};

exports.default = _i18n2.default;
