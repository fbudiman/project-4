var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var postsSchema = new Schema({
  userId: String,
  title: String,
  category: String,
  body: String,
  imageUrl: String,
  location: String,
  createdAt: { type: Date, default: Date.now },
  comments: [{ body: String, date: Date }]
})

module.exports = mongoose.model('Post', postsSchema)
