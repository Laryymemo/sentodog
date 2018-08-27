'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _especificaciones = require('../../../models/especificaciones');

var _especificaciones2 = _interopRequireDefault(_especificaciones);

var _especificaciones3 = require('../../types/especificaciones');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllEspecificaciones = {
    type: new _graphql.GraphQLList(_especificaciones3.EspecificacionType),
    resolve: function resolve() {
        var especificaciones = _especificaciones2.default.find().exec();
        if (!especificaciones) throw new Error('No se pudo traer las especificaciones de las mascotas');
        return especificaciones;
    }
};

exports.default = queryAllEspecificaciones;