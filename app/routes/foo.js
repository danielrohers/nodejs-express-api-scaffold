'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/foo');

router
    .route('/')

    /**
    * @api {get} /api/foo List
    * @apiGroup Foo
    *
    * @apiSuccess {Boolean=true} success
    * @apiSuccess {Foo[]} data
    */
    .get(controller.list)

    /**
    * @api {post} /api/foo Create
    * @apiGroup Foo
    *
    * @apiParam {String} name
    * @apiParam {String} last_name
    *
    * @apiSuccess {Boolean=true} success
    * @apiSuccess {Foo} data
    */
    .post(controller.create)

router
    .route('/:id')

    /**
    * @api {get} /api/foo/:id Find
    * @apiGroup Foo
    *
    * @apiSuccess {Boolean=true} success
    * @apiSuccess {Foo} data
    */
    .get(controller.findById)

    /**
    * @api {put} /api/foo/:id Update
    * @apiGroup Foo
    *
    * @apiParam {String} name
    * @apiParam {String} last_name
    *
    * @apiSuccess {Boolean=true} success
    */
    .put(controller.update)

    /**
    * @api {put} /api/foo/:id Delete
    * @apiGroup Foo
    *
    * @apiSuccess {Boolean=true} success
    */
    .delete(controller.delete)

module.exports = router;