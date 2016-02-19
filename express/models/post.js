var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var postsSchema = new Schema({
  userId: String,
  title: String,
  category: String,
  body: String,
  imageUrl: String,
  time: Date,
  comments: [{ body: String, date: Date }]
})

module.exports = mongoose.model('Post', postsSchema)
