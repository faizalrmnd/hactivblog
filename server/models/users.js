const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  username: String,
  name: String,
  password: String
},{
  timestamps: true
})

let user = mongoose.model('user', userSchema)

module.exports = user;
