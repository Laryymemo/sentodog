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
        data: {
            type: new _graphql.GraphQLNonNull(_pets3.PetInputType)
        }
    },
    resolve: function resolve(root, params) {
        var pet = new _pets2.default(params.data);
        var newPet = pet.save();
        if (!newPet) throw Error("Error al crear la mascota");
        return newPet;
    }
};