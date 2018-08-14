import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

import Especificacion from '../../../models/especificaciones'
import {EspecificacionType} from '../../types/especificaciones'

const querySingleEspecificaciones = {
  type: EspecificacionType,
  args:{
    id:{
      name:'ID',
      type:GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root,params){
    const especificacion = Especificacion.findById(params.id).exec()
    return especificacion
  }
}

export default querySingleEspecificaciones;
