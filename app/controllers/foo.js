const Model = require('../models/foo');
const ErrorHelper = require('../helpers/error');

const findById = id => new Promise((resolve, reject) => {
  Model
    .findOne({ _id: id })
    .then((data) => {
      if (!data) return reject({ success: false, message: 'Not found' });
      resolve(data);
    })
    .catch(reject);
});

module.exports = {

  list: (req, res) => {
    const { limit, skip, sort } = req.query;
    Model
      .find({})
      .limit(limit)
      .skip(skip)
      .sort(sort)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(err => ErrorHelper.response(res, err));
  },

  create: (req, res) => {
    Model
      .create(req.body)
      .then(() => res.status(200).json({ success: true }))
      .catch(err => ErrorHelper.response(res, err));
  },

  findById: (req, res) => {
    findById(req.params.id)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(err => ErrorHelper.response(res, err));
  },

  update: (req, res) => {
    findById(req.params.id)
      .then(() => {
        Model
          .update({ _id: req.params.id }, { $set: req.body })
          .then(() => res.status(200).json({ success: true }))
          .catch(err => ErrorHelper.response(res, err));
      })
      .catch(err => ErrorHelper.response(res, err));
  },

  delete: (req, res) => {
    findById(req.params.id)
      .then(() => {
        Model
          .remove({ _id: req.params.id })
          .then(() => res.status(200).json({ success: true }))
          .catch(err => ErrorHelper.response(res, err));
      })
      .catch(err => ErrorHelper.response(res, err));
  },
};
