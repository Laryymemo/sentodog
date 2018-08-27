'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _pets = require('../../../models/pets');

var _pets2 = _interopRequireDefault(_pets);

var _pets3 = require('../../types/pets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _pets3.PetType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_pets3.PetInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _pets2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (pet) {
            return pet;
        }).catch(function (erre) {
            return Error('Error al hacer el update');
        });
    }
};