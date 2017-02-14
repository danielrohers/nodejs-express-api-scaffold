module.exports = (req, res, next) => {
  req.query.limit = Number(req.query.limit) || 0;
  req.query.skip = Number(req.query.skip) || 0;
  req.query.sort = req.query.sort || '';
  next();
};
