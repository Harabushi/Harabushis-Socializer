const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/user-controller');

// BONUS remove a user's associated thoughts when deleted
router
  .route('/users')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/users/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// router
//   .route('/users/:id/friends/:friendId')
//   .post()
//   .delete();

module.exports = router;