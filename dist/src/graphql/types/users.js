"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserType = undefined;

var _graphql = require("graphql");

var UserType = exports.UserType = new _graphql.GraphQLObjectType({
  name: "usuarios",
  description: "usuarios de la base de datos",
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      name: {
        type: _graphql.GraphQLString
      },
      password: {
        type: _graphql.GraphQLString
      },
      correo: {
        type: _graphql.GraphQLString
      },
      telefono: {
        type: _graphql.GraphQLString
      },
      foto: {
        type: _graphql.GraphQLString
      }
    };
  }
});