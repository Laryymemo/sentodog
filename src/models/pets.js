import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PetSchema = new Schema({
  "nombre":{
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
  },
  "foto":{
    type:String,
    default:"https://api.netnoticias.mx/im/2017/06/03/770x490-V67XCIIWqoBqY.jpg"
  }
},{collection:"Pets",timestamps:true})

export default mongoose.model('Pets', PetSchema)
