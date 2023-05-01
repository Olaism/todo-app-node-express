const Joi = require('joi');

const todoSchema = Joi.object({
  title: Joi.string().min(5).max(200).required(),
  description: Joi.string().allow(''),
  startDate: Joi.date().less(Joi.ref(to='dueDate')),
  dueDate: Joi.date().iso().greater('now').allow(null).required(),
  completed: Joi.boolean()
});


module.exports = todoSchema;