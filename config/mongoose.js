const log = require('winston');
const mongoose = require('mongoose');
const env = require('./env');

const CONN_STR = env.mongodb;

mongoose.Promise = global.Promise;

mongoose.set('debug', env.node_env === 'development');

mongoose.connect(CONN_STR);

mongoose.connection.on('connected', () => {
  log.info(`Mongoose default connection open to ${CONN_STR}`);
});

mongoose.connection.on('error', (err) => {
  log.error(`Mongoose default connection error: ${err}`);
  process.exit(1);
});

mongoose.connection.on('disconnected', () => {
  log.info('Mongoose default connection disconnected');
});

mongoose.connection.once('open', () => {
  log.info('Mongoose default connection is open');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    log.info('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
