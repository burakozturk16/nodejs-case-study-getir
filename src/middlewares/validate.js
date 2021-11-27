const Joi = require('joi');
const pick = require('../utils/pick');
const { response, responseType } = require('../utils/response');

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['body']);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorDetail = error.details.map((details) => details.message).join(', ');
    return response(res, responseType.BAD_REQUEST, errorDetail);
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
