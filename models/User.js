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

UserSchema.virtual('friendCount').get(()=>{
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;