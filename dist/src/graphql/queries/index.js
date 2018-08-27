'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _pets = require('./pets');

var _pets2 = _interopRequireDefault(_pets);

var _especificaciones = require('./especificaciones');

var _especificaciones2 = _interopRequireDefault(_especificaciones);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _users2.default, _pets2.default, _especificaciones2.default);