const joi = require('joi');
const id = joi.string();
const descripcion = joi.string().min(3);
const minutos = joi.number().integer();
const createtareaSchema = joi.object({
  descripcion: descripcion.required(),
  minutos: minutos.required()
});

const gettareaSchema = joi.object({
  tareaId: id.required(),
});

module.exports = {
  createtareaSchema,
  gettareaSchema
  };
