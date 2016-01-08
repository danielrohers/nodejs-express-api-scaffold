'use strict';

const Model = require('../models/foo');
const Crud = require('web-crud');

Crud.model(Model); // set model mongoose

module.exports = class Foo extends Crud {
};