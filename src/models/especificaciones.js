import mongoose from 'mongoose'

const Schema = mongoose.Schema

const EspecificacionSchema = new Schema({
  "description":{
    type: String,
    require: true
  },
  "date":{
   type: Date,
   require: true
 },
 "pet":{
   type: Schema.Types.ObjectId,
   ref: "Pet",
   require: true
 },
 "importancia":{
   type: String,
   default: "Baja"
 }
},{collection:"Especificaciones", timestamps: true})

export default mongoose.model("Especificaciones", EspecificacionSchema)
