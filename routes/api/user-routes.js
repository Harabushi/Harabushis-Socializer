const router = require('express').Router();
const {} = require('../../controllers/user-controller');

// BONUS remove a user's associated thoughts when deleted
router
  .route('/users')
  .get()
  .post();

router
  .route('/users/:id')
  .get()
  .put()
  .post()

router
  .route('/users/:id/friends/:friendId')
  .post()
  .delete();

module.exports = router;