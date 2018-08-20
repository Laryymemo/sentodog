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
        }
    },
    resolve(root,params){
        const deletePet =  Pet.findByIdAndRemove(params.id).exec()
        if (!deletePet) throw Error('Error al borrar la especificacion')
        return deletePet
    }
}
