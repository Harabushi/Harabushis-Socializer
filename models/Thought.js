const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  
});

const Pizza = model('Pizza', ThoughtSchema);

module.exports = Thought;