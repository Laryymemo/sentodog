import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
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
