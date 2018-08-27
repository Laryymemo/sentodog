'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _deleted = require('./deleted');

var _deleted2 = _interopRequireDefault(_deleted);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  addEspecificacion: _add2.default,
  updateEspecificacion: _update2.default,
  deleteEspecificacion: _deleted2.default
};