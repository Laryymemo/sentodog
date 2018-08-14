import user from './users'
import pet from './pets'
import especificacion from './especificaciones'

export default {
    ...user,
    ...pet,
    ...especificacion
  }
