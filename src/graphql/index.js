import queries from './queries'
import mutations from './mutation'

import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'

export default new GraphQLSchema({
    query:new GraphQLObjectType({
        name:'Query',
        fields:queries
    }),
    mutation:new GraphQLObjectType({
      name:'Mutations',
      fields:mutations
    })
})
