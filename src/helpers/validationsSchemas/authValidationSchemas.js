import Joi from 'joi';

export const post_loginValidationSchema = Joi.object({
  email: Joi.string().trim().min(7).max(40).required().messages({
    'string.min': 'El campo Email debe tener mínimo 7 caracteres',
    'string.max': 'El campo Email debe tener maximo 40 caracteres',
    'any.required': 'El campo Email es requerido',
    '*': 'El campo Email tiene algún error',
  }),
  password: Joi.string().trim().min(6).max(15).required().messages({
    'any.required': "El campo 'password' es requerido",
    '*': "El campo 'password' tiene algún error",
  }),
});
