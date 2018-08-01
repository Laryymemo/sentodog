const mongoose = require('mongoose');
mongoose.connect("mongodb://larrymemo:Calle13num1@ds263571.mlab.com:63571/sento-dog");

const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

      const registroSchema = new Schema({
            id:ObjectId,
            concesion:String,
            placa:String,
            taximetro:String,
            status:String
      });
var registro = mongoose.model('registro',registroSchema);
module.exports = registro
