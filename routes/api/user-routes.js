const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

// BONUS remove a user's associated thoughts when deleted
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)
  .post(addFriend);

router
  .route('/:id/:friendId') 
  .delete(removeFriend);

module.exports = router;