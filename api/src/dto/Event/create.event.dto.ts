import Joi from 'joi';

const nameValidation = Joi.string().alphanum().min(3).max(30).required();
const dateValidation = Joi.string().min(3).max(100).required();

export const CreateEventSchema = Joi.object({
  name: nameValidation,
  date: dateValidation,
});
