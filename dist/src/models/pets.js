"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var PetSchema = new Schema({
  "nombre": {
    type: String,
    require: true
  },
  "id_dispositivo": {
    type: String,
    require: true
  },
  "user": {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  "genero": {
    type: String,
    require: true
  },
  "foto": {
    type: String,
    default: "https://api.netnoticias.mx/im/2017/06/03/770x490-V67XCIIWqoBqY.jpg"
  }
}, { collection: "Pets", timestamps: true });

exports.default = _mongoose2.default.model('Pets', PetSchema);