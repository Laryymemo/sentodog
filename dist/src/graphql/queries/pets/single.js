'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _pets = require('../../../models/pets');

var _pets2 = _interopRequireDefault(_pets);

var _pets3 = require('../../types/pets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySinglePets = {
  type: _pets3.PetType,
  args: {
    id: {
      name: 'ID',
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params) {
    var pet = _pets2.default.findById(params.id).exec();
    return pet;
  }
};

exports.default = querySinglePets;