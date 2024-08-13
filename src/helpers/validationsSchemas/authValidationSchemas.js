import Joi from 'joi';

export const post_loginValidationSchema = Joi.object({
  username: Joi.string().trim().min(3).max(20).required().messages({
    'string.min': "El campo 'username' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'username' debe tener como maximo 20 caracteres",
    'any.required': "El campo 'username' es requerido",
    '*': "El campo 'username' tiene algún error",
  }),
  password: Joi.string().trim().min(3).required().messages({
    'string.min': "El campo 'password' debe tener como mínimo 3 caracteres",
    'any.required': "El campo 'password' es requerido",
    '*': "El campo 'password' tiene algún error",
  }),
});
