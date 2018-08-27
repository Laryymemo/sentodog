'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _especificaciones = require('./especificaciones');

var _especificaciones2 = _interopRequireDefault(_especificaciones);

var _pets = require('./pets');

var _pets2 = _interopRequireDefault(_pets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _especificaciones2.default, _pets2.default);