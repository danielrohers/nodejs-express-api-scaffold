// modules
const log = require('winston');
const _ = require('lodash');

// public methods

module.exports = {

  response: (res, err) => {
    if (err.status) return res.status(err.status).json({ success: false, message: err.message });

    if (err.name === 'ValidationError') {
      const errors = _.map(err.errors, 'message');
      log.error('Internal error (400): ', errors);
      return res.status(400).json({ success: false, message: errors });
    }

    const message = err.message;
    log.error('Internal error (500): ', message);
    res.status(500).json({ success: false, message });
  },

};
