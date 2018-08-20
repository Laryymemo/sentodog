import {
    GraphQLNonNull
} from 'graphql'

import Pet from '../../../models/pets'
import {PetType,PetInputType} from '../../types/pets'

export default {
    type:PetType,
    args:{
        data:{
            type: new GraphQLNonNull(PetInputType)
        }
    },
    resolve(root,params){
        const pet = new Pet(params.data);
        const newPet = pet.save();
        if (!newPet) throw Error("Error al crear la mascota");
        return newPet
    }
}
