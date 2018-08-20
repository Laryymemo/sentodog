import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInputObjectType
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

export const EspecificacionInputType = new GraphQLInputObjectType({
  name:"addEspecificaciones",
  description:"agrega especificaciones a la base de datos",
  fields: () => ({
    description:{
      type:GraphQLString
    },
    date:{
      type: GraphQLString
    },
    pet:{
      type: GraphQLNonNull(GraphQLID)
    },
    importancia:{
      type:GraphQLString
    }
  })
})
