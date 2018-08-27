'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EspecificacionInputType = exports.EspecificacionType = undefined;

var _graphql = require('graphql');

var _pets = require('./pets');

var _pets2 = require('../../models/pets');

var _pets3 = _interopRequireDefault(_pets2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EspecificacionType = exports.EspecificacionType = new _graphql.GraphQLObjectType({
  name: "especificacion",
  description: "especificacion de perros",
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      description: {
        type: _graphql.GraphQLString
      },
      date: {
        type: _graphql.GraphQLString
      },
      pet: {
        type: _pets.PetType,
        resolve: function resolve(especificacion) {
          var pet = especificacion.pet;

          return _pets3.default.findById(pet).exec();
        }
      },
      importancia: {
        type: _graphql.GraphQLString
      }
    };
  }
});

var EspecificacionInputType = exports.EspecificacionInputType = new _graphql.GraphQLInputObjectType({
  name: "addEspecificaciones",
  description: "agrega especificaciones a la base de datos",
  fields: function fields() {
    return {
      description: {
        type: _graphql.GraphQLString
      },
      date: {
        type: _graphql.GraphQLString
      },
      pet: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      importancia: {
        type: _graphql.GraphQLString
      }
    };
  }
});