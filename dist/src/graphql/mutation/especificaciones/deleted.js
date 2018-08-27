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
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteEspecificacion = _especificaciones2.default.findByIdAndRemove(params.id).exec();
        if (!deleteEspecificacion) throw Error('Error al borrar la especificacion');
        return deleteEspecificacion;
    }
};