const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'Please choose a Username',
      trim: true
    },
    email: {
      type: String,
      required: 'Please provide an email',
      match: /.+\@.+\..+/,
      unique: true
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],    
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// arrow function does not seem to work for this
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

const User = model('User', UserSchema);

module.exports = User;