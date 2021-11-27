const { name, version, repository } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: name,
    version,
    license: {
      name: 'MIT',
      url: repository,
    },
  },
  servers: [
    {
      url: `http://ec2-18-219-34-197.us-east-2.compute.amazonaws.com:3000/:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
