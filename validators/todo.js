const Joi = require('joi');

const todoSchema = Joi.object({
  title: Joi.string().min(5).max(200).required(),
  description: Joi.string().allow(''),
  startDate: Joi.date().min('now'),
  dueDate: Joi.date().greater(Joi.ref('startDate')).required(),
  completed: Joi.boolean()
});

module.exports = todoSchema;