'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _especificaciones = require('../../../models/especificaciones');

var _especificaciones2 = _interopRequireDefault(_especificaciones);

var _especificaciones3 = require('../../types/especificaciones');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleEspecificaciones = {
  type: _especificaciones3.EspecificacionType,
  args: {
    id: {
      name: 'ID',
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params) {
    var especificacion = _especificaciones2.default.findById(params.id).exec();
    return especificacion;
  }
};

exports.default = querySingleEspecificaciones;