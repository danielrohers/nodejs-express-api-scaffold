'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FooSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Foo', FooSchema);