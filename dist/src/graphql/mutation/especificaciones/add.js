'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _especificaciones = require('../../../models/especificaciones');

var _especificaciones2 = _interopRequireDefault(_especificaciones);

var _especificaciones3 = require('../../types/especificaciones');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _especificaciones3.EspecificacionType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_especificaciones3.EspecificacionInputType)
        }
    },
    resolve: function resolve(root, params) {
        var especificacion = new _especificaciones2.default(params.data);
        var newEspecificacion = especificacion.save();
        if (!newEspecificacion) throw Error("Error al crear la caracteristica");
        return newEspecificacion;
    }
};