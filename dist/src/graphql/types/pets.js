'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PetInputType = exports.PetType = undefined;

var _graphql = require('graphql');

var _users = require('./users');

var _users2 = require('../../models/users');

var _users3 = _interopRequireDefault(_users2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PetType = exports.PetType = new _graphql.GraphQLObjectType({
  name: "mascotas",
  description: "mascotas con usuarios",
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      nombre: {
        type: _graphql.GraphQLString
      },
      id_dispositivo: {
        type: _graphql.GraphQLString
      },
      user: {
        type: _users.UserType,
        resolve: function resolve(pet) {
          var user = pet.user;

          return _users3.default.findById(user).exec();
        }
      },
      genero: {
        type: _graphql.GraphQLString
      },
      foto: {
        type: _graphql.GraphQLString
      }
    };
  }
});

var PetInputType = exports.PetInputType = new _graphql.GraphQLInputObjectType({
  name: "addPets",
  description: "agregar mascotas a la data base",
  fields: function fields() {
    return {
      nombre: {
        type: _graphql.GraphQLString
      },
      id_dispositivo: {
        type: _graphql.GraphQLString
      },
      user: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      genero: {
        type: _graphql.GraphQLString
      }
    };
  }
});