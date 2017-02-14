const Model = require('../models/foo');

const _findOne = (criteria = {}) => new Promise((resolve, reject) => {
  Model
    .findOne(criteria)
    .then((data) => {
      if (!data) return reject({ success: false, message: 'Not found', status: 404 });
      resolve(data);
    })
    .catch(reject);
});

const _findById = _id => _findOne({ _id });

const _update = (criteria = {}, body) => Model.update(criteria, { $set: body });

const _delete = (criteria = {}) => Model.remove(criteria);

module.exports = {

  list: (query = {}) => {
    const { limit, skip, sort } = query;
    return Model
      .find({})
      .limit(limit)
      .skip(skip)
      .sort(sort);
  },

  create: (body = {}) => {
    const model = new Model(body);
    model.name = body.name;
    return model.save();
  },

  findById: _findById,

  update: (_id, body) => new Promise((resolve, reject) => {
    _findById(_id)
      .then(() => _update({ _id }, body).then(resolve).catch(reject))
      .catch(reject);
  }),

  delete: _id => new Promise((resolve, reject) => {
    _findById(_id)
      .then(() => _delete({ _id }).then(resolve).catch(reject))
      .catch(reject);
  }),

};
