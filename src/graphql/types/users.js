import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql'

export const UserType = new GraphQLObjectType({
  name: "usuarios",
  description:"usuarios de la base de datos",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
        },
    password:{
      type: GraphQLString
    },
    correo:{
      type: GraphQLString
    },
    telefono:{
      type: GraphQLString
    }
  })
})
