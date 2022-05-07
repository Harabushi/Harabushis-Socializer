const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'You can\'t post an empty thought!',
      trim: true,
      minlength: 1,
      maxlength:280
    },
    createdBy: {
      type: String,
      required: 'You need to provide the creator\'s username!',
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    reactions: [ReactionSchema]
  }
);

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    username: {
      type: String,
      required: true
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength:280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;