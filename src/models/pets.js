import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PetSchema = new Schema({
  "nombre"{
    type: String,
    require: true
  },
  "id_dispositivo":{
    type: String,
    require: true
  },
  "user":{
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  "genero":{
    type: String,
    require: true
  }
},{collection:"Pets",timestamps:true})

export default mongoose.model('Pets', PetSchema)
