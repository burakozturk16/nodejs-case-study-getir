/**
 * Create a function to return response
 * @param {Function} fn
 * @returns {Promise.resolve}
 */
const promiser = (fn) => (req, res, next) => {
  /* istanbul ignore next */
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

module.exports = promiser;
