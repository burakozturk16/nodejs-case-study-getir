const promiser = require('../utils/promiser');
const { Record } = require('../models');
const { response, responseType } = require('../utils/response');

const get = promiser(async (req, res) => {
  /* istanbul ignore next */
  const result = await Record.getBetween(req.body);
  /* istanbul ignore next */
  response(res, responseType.SUCCESS, null, result);
});

module.exports = {
  get,
};
