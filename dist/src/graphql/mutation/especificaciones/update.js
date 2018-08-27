'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_especificaciones3.EspecificacionInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _especificaciones2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (especificacion) {
            return especificacion;
        }).catch(function (erre) {
            return Error('Error al hacer el update');
        });
    }
};