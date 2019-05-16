const mongoose = require("mongoose");
const { Schema } = mongoose;

var TareaSchema = new Schema({
  // id: Number,
  // nombre: String,
  // creado: {
  //   type: Date,
  //   default: Date.new
  // }
  nombre: String,
  edad: Number,
  correo: String,
  password: String
});

module.exports = mongoose.model("Tarea", TareaSchema);
