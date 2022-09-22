import Joi from 'joi';

const firstAndLastnameValidation = Joi.string().alphanum().min(3).max(30).required().messages({
  'string.min': 'Field should be at least 3 characters long',
  'string.max': 'Field should not be longer than 30 characters',
  'any.required': 'This field is required required',
});
const emailBaseSchema = Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    'string.email': 'This field must be email (user@example.com)',
    'any.required': 'This field is required required',
  });

const eventSchema = Joi.string().required().messages({
  'any.required': 'This field is required required',
});

export const createUserSchema = Joi.object({
  firstname: firstAndLastnameValidation,
  lastname: firstAndLastnameValidation,
  email: emailBaseSchema,
  event: eventSchema,
});
