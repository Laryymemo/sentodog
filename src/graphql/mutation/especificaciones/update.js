import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Especificacion from '../../../models/especificaciones'
import {EspecificacionType,EspecificacionInputType} from '../../types/especificaciones'

export default {
    type: EspecificacionType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(EspecificacionInputType)
        }
    },
    resolve(root,params){
        return Especificacion.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
            .then(especificacion => especificacion)
            .catch(erre =>  Error('Error al hacer el update'))
    }
}
