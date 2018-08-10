import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

import Pet from '../../../models/pets'
import {PetType} from '../../types/pets'

const querySinglePets = {
  type: PetType,
  args:{
    id:{
      name:'ID',
      type:GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root,params){
    const pet = Pet.findById(params.id).exec()
    return pet
  }
}

export default querySinglePets;
