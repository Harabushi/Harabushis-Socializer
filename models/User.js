const { Schema, model } = require('mongoose');

// did not end up needing
// const FriendSchema = new Schema(
//   {
//     friendId: {
//       type: Schema.Types.ObjectId,
//       default: () => new Types.ObjectId()
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now
//     }
//   }
// );

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

// arrow function does not seem to work for these
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

const User = model('User', UserSchema);

module.exports = User;