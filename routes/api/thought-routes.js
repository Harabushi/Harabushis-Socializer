const router = require('express').Router();
const {} = require('../../controllers/thought-controller');

router
  .route('/thoughts')
  .get()
  .post();

  router
  .route('/thoughts/:id')
  .get()
  .put()
  .post();

router
  .route('/thoughts/:id/reactions')
  .post()
  .delete();

module.exports = router;