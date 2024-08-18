import Joi from 'joi';

export const post_loginValidationSchema = Joi.object({
  email: Joi.string().trim().min(3).max(20).required().messages({
    'string.min': "El campo 'email' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'email' debe tener como maximo 20 caracteres",
    'any.required': "El campo 'email' es requerido",
    '*': "El campo 'email' tiene algún error",
  }),
  password: Joi.string().trim().min(3).required().messages({
    'string.min': "El campo 'password' debe tener como mínimo 3 caracteres",
    'any.required': "El campo 'password' es requerido",
    '*': "El campo 'password' tiene algún error",
  }),
});
