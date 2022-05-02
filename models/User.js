const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  
});

const Pizza = model('Pizza', UserSchema);

module.exports = User;