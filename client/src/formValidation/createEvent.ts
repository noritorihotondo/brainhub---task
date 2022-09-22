import Joi from 'joi';

const nameValidation = Joi.string().alphanum().min(3).max(30).required().messages({
  'string.min': 'String should be at least 3 characters long',
  'string.max': 'String should not be longer than 30 characters',
  'any.required': 'This field is required required',
});
const dateValidation = Joi.date().required().messages({
  'date.base': 'This field suppose to be date type',
  'date.min': 'Date should be at least from today',
  'any.required': 'This field is required',
});

export const createEventSchema = Joi.object({
  name: nameValidation,
  date: dateValidation,
});
