const mongoose = require('mongoose');
const config = require('../src/config/config');

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    mongoose.connect(config.mongoose.url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },
  disconnect: (done) => {
    mongoose.disconnect(done);
  },
};
