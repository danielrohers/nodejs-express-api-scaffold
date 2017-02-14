const FooService = require('../services/foo');
const ErrorHelper = require('../helpers/error');

module.exports = {

  list: (req, res) => {
    FooService
      .list(req.query)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(err => ErrorHelper.response(res, err));
  },

  create: (req, res) => {
    FooService
      .create(req.body)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(err => ErrorHelper.response(res, err));
  },

  findById: (req, res) => {
    FooService
      .findById(req.params.id)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(err => ErrorHelper.response(res, err));
  },

  update: (req, res) => {
    FooService
      .update(req.params.id, req.body)
      .then(() => res.status(200).json({ success: true }))
      .catch(err => ErrorHelper.response(res, err));
  },

  delete: (req, res) => {
    FooService
      .delete(req.params.id)
      .then(() => res.status(200).json({ success: true }))
      .catch(err => ErrorHelper.response(res, err));
  },
};
