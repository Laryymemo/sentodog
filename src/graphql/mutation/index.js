import Especificacion from './especificaciones'
import Pet from './pets'
import User from './users'

export default {
   ...Especificacion,
   ...Pet,
   ...User
}
