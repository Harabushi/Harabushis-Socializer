const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

router
  .route('/thoughts')
  .get(getAllThoughts)
  .post(addThought);

router
  .route('/thoughts/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router
  .route('/thoughts/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;