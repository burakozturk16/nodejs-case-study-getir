const Joi = require('joi');

const forRecords = {
  body: Joi.object({
    startDate: Joi.date().required(),
    endDate: Joi.date().greater(Joi.ref('startDate')).required(),
    minCount: Joi.number().integer().required(),
    maxCount: Joi.number().greater(Joi.ref('minCount')).integer().required(),
  }),
};

module.exports = {
  forRecords,
};
