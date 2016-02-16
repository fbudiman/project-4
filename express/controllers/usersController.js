var User = require('../models/user');
var mongoose = require('mongoose');

module.exports = {

  createUser: function (req, res, next){
    var newUser = new User();
    var keys = Object.keys(req.body);
    keys.forEach (function (key){
      newUser[key] = req.body[key];
    });
    newUser.save(function (err){
      if(err) console.log(err);
      else res.send('Successfully created user.')
    });
  },

  showUsers: function (req, res, next){
    User.find({}, function (err, users){
      res.json(users);
    })
  },

  editUser: function (req, res, next){
    User.findById({_id: req.params.id}, function (err, user){
      var keys = Object.keys(req.body);
      keys.forEach(function(key){
        user[key] = req.body[key];
      });
      user.save();
    });
    res.send('Successfully updated user.')
  },

  deleteUser: function (req, res, next){
    User.findOneAndRemove({_id: req.params.id}, function (err, data){
      if (err) res.json('User not deleted.');
      else res.json('User successfully deleted.')
    })
  }
}
