import Joi from 'joi';

export const post_loginValidationSchema = Joi.object({
  email: Joi.string().trim().required().messages({
    'any.required': 'El campo Email es requerido',
    '*': 'El campo Email tiene algún error',
  }),
  password: Joi.string().trim().required().messages({
    'any.required': "El campo 'password' es requerido",
    '*': "El campo 'password' tiene algún error",
  }),
});
