'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queries = require('./queries');

var _queries2 = _interopRequireDefault(_queries);

var _mutation = require('./mutation');

var _mutation2 = _interopRequireDefault(_mutation);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
        name: 'Query',
        fields: _queries2.default
    }),
    mutation: new _graphql.GraphQLObjectType({
        name: 'Mutations',
        fields: _mutation2.default
    })
});