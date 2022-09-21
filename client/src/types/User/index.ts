import Joi from 'joi';

const firstAndLastnameValidation = Joi.string().alphanum().min(3).max(30).required();
const emailBaseSchema = Joi.string().email({ tlds: { allow: false } });

export const CreateUserSchema = Joi.object({
  firstname: firstAndLastnameValidation,
  lastname: firstAndLastnameValidation,
  email: emailBaseSchema.required(),
  event: Joi.string().required(),
});
