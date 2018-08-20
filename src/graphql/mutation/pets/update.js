import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Pet from '../../../models/pets'
import {PetType,PetInputType} from '../../types/pets'

export default {
    type: PetType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(PetInputType)
        }
    },
    resolve(root,params){
        return Pet.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
            .then(pet => pet)
            .catch(erre =>  Error('Error al hacer el update'))
    }
}
