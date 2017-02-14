const serveStatic = require('serve-static');
const path = require('path');
const query = require('../app/middlewares/query');

const getRoute = module => require(`../app/routes/${module}`);

module.exports = (app) => {
  // PUBLIC FILES

  app.use('/', serveStatic(path.join(__dirname, '../apidoc')));

  // MIDDLEWARES

  app.use(query);

  // ROUTES

  app.use('/api/foo', getRoute('foo'));


  // ERROR HANDLERS

  // catch 404 and forward to error handler
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  // error handler
  app.use((err, req, res) => {
    const message = err.message;
    const error = app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json({ message, error });
  });
};
