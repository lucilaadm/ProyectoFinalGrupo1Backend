import Joi from 'joi';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

export const post_put_userValidationSchema = Joi.object({
  firstname: Joi.string().trim().min(3).max(30).required().messages({
    'string.min': "El campo 'firstname' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'firstname' debe tener como maximo 30 caracteres",
    'any.required': "El campo 'firstname' es requerido",
    '*': "El campo 'firstname' tiene algún error",
  }),
  lastname: Joi.string().trim().min(3).max(30).required().messages({
    'string.min': "El campo 'lastname' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'lastname' debe tener como maximo 30 caracteres",
    'any.required': "El campo 'lastname' es requerido",
    '*': "El campo 'lastname' tiene algún error",
  }),
  username: Joi.string().trim().min(3).max(20).required().messages({
    'string.min': "El campo 'username' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'username' debe tener como maximo 20 caracteres",
    'any.required': "El campo 'username' es requerido",
    '*': "El campo 'username' tiene algún error",
  }),
  // Es lo mismo usar .pattern()
  password: Joi.string().trim().regex(passwordRegex).required().messages({
    'string.pattern.base':
      "El campo 'password' debe cumplir estas condiciones: minimo una minúscula, una mayúscula, un dígito, y un caracter especial. Y debe tener entre 8 y 15 caracteres",
    'any.required': "El campo 'password' es requerido",
    '*': "El campo 'password' tiene algún error",
  }),
});
