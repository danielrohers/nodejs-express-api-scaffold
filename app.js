const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const log = require('winston');
const env = require('./config/env');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./config/routes')(app);
require('./config/mongoose');

app.set('port', env.port);
app.listen(app.get('port'), () => log.info(`Express server worker listening on port ${app.get('port')}`));

module.exports = app;
