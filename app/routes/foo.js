const express = require('express');
const controller = require('../controllers/foo');

const router = express.Router();

router
  .route('/')

  /**
  * @api {get} /foo List
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo[]} data
  */
  .get(controller.list)

  /**
  * @api {post} /foo Create
  * @apiGroup Foo
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  .post(controller.create);

router
  .route('/:id')

  /**
  * @api {get} /foo/:id Find
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  .get(controller.findById)

  /**
  * @api {put} /foo/:id Update
  * @apiGroup Foo
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  */
  .put(controller.update)

  /**
  * @api {delete} /foo/:id Delete
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  */
  .delete(controller.delete);

module.exports = router;
