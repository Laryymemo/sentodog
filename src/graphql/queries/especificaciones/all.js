import {
    GraphQLList
} from 'graphql'

import Especificacion from '../../../models/especificaciones'
import {EspecificacionType} from '../../types/especificaciones'

const queryAllEspecificaciones = {
    type: new GraphQLList(EspecificacionType),
    resolve(){
        const especificaciones = Especificacion.find().exec()
        if (!especificaciones) throw new Error('No se pudo traer las especificaciones de las mascotas')
        return especificaciones
    }
}

export default queryAllEspecificaciones;
