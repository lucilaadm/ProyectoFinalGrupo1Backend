import Joi from 'joi';

const passwordRegex =
  /^(?=(?:.*\d.*\d))(?=(?:.*[a-zA-Z].*[a-zA-Z]))[a-zA-Z\d]{6,15}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const post_put_userValidationSchema = Joi.object({
  firstname: Joi.string().trim().min(3).max(30).required().messages({
    'string.min': 'El campo Nombre debe tener mínimo 3 caracteres',
    'string.max': 'El campo Nombre debe tener maximo 30 caracteres',
    'any.required': 'El campo Nombre es requerido',
    '*': 'El campo Nombre tiene algún error',
  }),
  lastname: Joi.string().trim().min(3).max(30).required().messages({
    'string.min': 'El campo Apellido debe tener mínimo 3 caracteres',
    'string.max': 'El campo Apellido debe tener maximo 30 caracteres',
    'any.required': 'El campo Apellido es requerido',
    '*': 'El campo Apellido tiene algún error',
  }),
  email: Joi.string()
    .trim()
    .min(7)
    .max(40)
    .regex(emailRegex)
    .required()
    .messages({
      'string.min': 'El campo Email debe tener mínimo 7 caracteres',
      'string.max': 'El campo Email debe tener maximo 40 caracteres',
      'string.pattern.base': 'El correo debe contener @ y un dominio',
      'any.required': 'El campo Email es requerido',
      '*': 'El campo Email tiene algún error',
    }),
  // Es lo mismo usar .pattern()
  password: Joi.string().trim().regex(passwordRegex).required().messages({
    'string.pattern.base':
      'La contraseña debe un mínimo de 2 numeros y 2 letras, y entre 6 y 15 caracteres.',
    'any.required': 'El campo Contraseña es requerido',
    '*': 'El campo Contraseña tiene algún error',
  }),
});
