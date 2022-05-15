const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    reactionText: {
      type: String,
      required: true,
      maxlength:280
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

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
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;