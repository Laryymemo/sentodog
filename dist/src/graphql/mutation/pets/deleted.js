'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        }
    },
    resolve: function resolve(root, params) {
        var deletePet = _pets2.default.findByIdAndRemove(params.id).exec();
        if (!deletePet) throw Error('Error al borrar la especificacion');
        return deletePet;
    }
};