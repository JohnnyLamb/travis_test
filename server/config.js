var config = {};

config.mongoURI = {
  development: 'mongodb://localhost/travis-node-development',
  test: 'mongodb://localhost/travis-test'
};

module.exports = config;
