const mongoose = require('mongoose');
mongoose.connect("mongodb://larrymemo:Calle13num1@ds263571.mlab.com:63571/sento-dog");

const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

      const registermanSchema = new Schema({
            id:ObjectId,
            nameuser:String,
            password:String, 
            email:String
      });
      const petSchema = new Schema({
            id:ObjectId,
            namepet:String,
            iduser:String,
            idunic:String
      });

var registerman = mongoose.model('registerman',petSchema);
var regispet = mongoose.model('registerdog',petSchema);
module.exports = registerman;
module.exports = regispet;
