'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _pets = require('../../../models/pets');

var _pets2 = _interopRequireDefault(_pets);

var _pets3 = require('../../types/pets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllPets = {
    type: new _graphql.GraphQLList(_pets3.PetType),
    resolve: function resolve() {
        var pets = _pets2.default.find().exec();
        if (!pets) throw new Error('Error al traer las mascotas de la base de datos');
        return pets;
    }
};

exports.default = queryAllPets;