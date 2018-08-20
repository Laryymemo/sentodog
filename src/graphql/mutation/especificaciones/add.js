import {
    GraphQLNonNull
} from 'graphql'

import Especificacion from '../../../models/especificaciones'
import {EspecificacionType,EspecificacionInputType} from '../../types/especificaciones'

export default {
    type:EspecificacionType,
    args:{
        data:{
            type: new GraphQLNonNull(EspecificacionInputType)
        }
    },
    resolve(root,params){
        const especificacion = new Especificacion(params.data);
        const newEspecificacion = especificacion.save();
        if (!newEspecificacion) throw Error("Error al crear la caracteristica");
        return newEspecificacion
    }
}
