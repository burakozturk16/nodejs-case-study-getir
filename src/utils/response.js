const config = require('../config/config');

const responseType = {
  SUCCESS: {
    statusCode: 200,
    code: 0,
    msg: 'Success',
  },
  NOT_FOUND: {
    statusCode: 404,
    code: 1,
    msg: 'The endpoint can not found.',
  },
  BAD_REQUEST: {
    statusCode: 400,
    code: 2,
    msg: 'Request body is invalid.',
  },
};

const response = (res, obj, customMessage = null, data = null) => {
  if (data) {
    res.status(obj.statusCode).json({
      code: obj.code,
      msg: customMessage || obj.msg,
      records: data,
    });
  } else {
    if (config.env === 'development') {
      res.status(obj.statusCode).json({
        code: obj.code,
        msg: customMessage || obj.msg,
      });
    }

    if (config.env === 'production') {
      res.status(500).json();
    }
  }
};

module.exports = {
  response,
  responseType,
};
