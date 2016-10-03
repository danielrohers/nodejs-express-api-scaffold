const serveStatic = require('serve-static');
const path = require('path');

const getRoute = module => require(`../app/routes/${module}`);

module.exports = (app) => {
  // PUBLIC FILES

  app.use(serveStatic(path.join(__dirname, '../public')));

  // ROUTES

  app.use('/api/foo', getRoute('foo'));


  // ERROR HANDLERS

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use((err, req, res) => {
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err,
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: {},
    });
  });
};
