import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInputObjectType
} from 'graphql'

import {UserType} from './users'
import User from '../../models/users'

export const PetType = new GraphQLObjectType({
  name:"mascotas",
  description:"mascotas con usuarios",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
        },
    nombre:{
      type: GraphQLString
    },
    id_dispositivo:{
      type: GraphQLString
    },
    user:{
      type:UserType,
      resolve(pet){
          const {user} = pet
          return User.findById(user).exec()
      }
    },
    genero:{
      type:GraphQLString
    }
 })
})

export const PetInputType = new GraphQLInputObjectType({
  name: "addPets",
  description:"agregar mascotas a la data base",
  fields: () => ({
    nombre:{
      type:GraphQLString
    },
    id_dispositivo:{
      type:GraphQLString
    },
    user:{
      type: GraphQLNonNull(GraphQLID)
    },
    genero:{
      type: GraphQLString
    }
  })
})
