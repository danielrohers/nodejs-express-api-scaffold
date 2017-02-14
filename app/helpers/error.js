// modules
const log = require('winston');
const _ = require('lodash');

// public methods

module.exports = {

  response: (res, err) => {
    let { status } = err;

    if (err.name === 'ValidationError') {
      status = 400;
      const errors = _.map(err.errors, 'message');
      log.error(`Internal error (${status}): ${errors}`);
      return res.status(status).json({ success: false, message: errors, status });
    }

    if (status) return res.status(status).json({ success: false, message: err.message, status });

    status = 500;
    const message = err.message;
    log.error(`Internal error (${status}): ${message}`);
    res.status(status).json({ success: false, message, status });
  },

};
