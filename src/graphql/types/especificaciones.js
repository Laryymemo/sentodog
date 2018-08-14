import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql'

import {PetType} from './pets'
import Pet from '../../models/pets'

export const EspecificacionType = new GraphQLObjectType({
  name:"especificacion",
  description:"especificacion de perros",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
        },
    description:{
      type: GraphQLString
    },
    date:{
      type: GraphQLString
    },
    pet:{
      type:PetType,
      resolve(especificacion){
          const {pet} = especificacion
          return Pet.findById(pet).exec()
      }
    },
    importancia:{
      type:GraphQLString
    }
 })
})
