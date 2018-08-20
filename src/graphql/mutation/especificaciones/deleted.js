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
        }
    },
    resolve(root,params){
        const deleteEspecificacion =  Especificacion.findByIdAndRemove(params.id).exec()
        if (!deleteEspecificacion) throw Error('Error al borrar la especificacion')
        return deleteEspecificacion
    }
}
