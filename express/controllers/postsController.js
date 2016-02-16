var Post = require('../models/post');
var mongoose = require('mongoose');

module.exports = {

  createPost: function (req, res, next){
    var newPost = new Post();
    var keys = Object.keys(req.body);
    keys.forEach (function (key){
      newPost[key] = req.body[key];
    });
    newPost.save(function (err){
      if(err) console.log(err);
      else res.send('Successfully created post.')
    });
  },

  showPosts: function (req, res, next){
    Post.find({}, function (err, posts){
      res.json(posts);
    })
  },

  editPost: function (req, res, next){
    Post.findById({_id: req.params.id}, function (err, post){
      var keys = Object.keys(req.body);
      keys.forEach(function(key){
        post[key] = req.body[key];
      });
      post.save();
    });
    res.send('Successfully updated post.')
  },

  deletePost: function (req, res, next){
    Post.findOneAndRemove({_id: req.params.id}, function (err, data){
      if (err) res.json('Post not deleted.');
      else res.json('Post successfully deleted.')
    })
  }
}
