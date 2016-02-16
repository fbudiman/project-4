var mongoose = require('mongoose')

var usersSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  password: String,
  profilePicture: String
})

module.exports = mongoose.model('User', usersSchema)
