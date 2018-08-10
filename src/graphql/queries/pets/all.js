import {
    GraphQLList
} from 'graphql'

import Pet from '../../../models/pets'
import {PetType} from '../../types/pets'

const queryAllPets = {
    type: new GraphQLList(PetType),
    resolve(){
        const Pets = Pets.find().exec()
        if (!pets) throw new Error('Error al traer las mascotas de la base de datos')
        return pets
    }
}

export default queryAllPets;
