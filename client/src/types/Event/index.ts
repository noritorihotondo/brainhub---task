import Joi from 'joi';

const nameValidation = Joi.string().alphanum().min(3).max(30).required();
const dateValidation = Joi.date().required().min('now');

export const CreateEventSchema = Joi.object({
  name: nameValidation,
  date: dateValidation,
});
