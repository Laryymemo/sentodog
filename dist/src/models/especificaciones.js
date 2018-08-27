"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var EspecificacionSchema = new Schema({
  "description": {
    type: String,
    require: true
  },
  "date": {
    type: Date,
    require: true
  },
  "pet": {
    type: Schema.Types.ObjectId,
    ref: "Pet",
    require: true
  },
  "importancia": {
    type: String,
    default: "Baja"
  }
}, { collection: "Especificaciones", timestamps: true });

exports.default = _mongoose2.default.model("Especificaciones", EspecificacionSchema);