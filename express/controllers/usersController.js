var User = require('../models/user');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var superSecret = 'ilovescotchscotchyscotchscotch';



module.exports = {

  createUser: function (req, res, next){
    var newUser = new User();
    var keys = Object.keys(req.body);
    keys.forEach (function (key){
      newUser[key] = req.body[key];
    });
    newUser.save(function (err){
      if(err) {
        if(err.code == 11000)
          return res.json({success: false, message: 'User already exists.'})
        else
          return res.send(err)
      }
      else {
        res.send('Successfully created user.')
      }
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
  },

  authenticateUser: function(req, res) {
    User.findOne({email: req.body.email}).select('_id firstName email password').exec(function(err, user) {
      if (err) throw err;
      // no user with that username was found
      if (!user) {
        res.json({
          success: false,
          message: 'Authentication failed. User not found.'
        });
      } else if (user) {
        var validPassword = user.comparePassword(req.body.password);

        if (!validPassword) {
          res.json({
            success: false,
            message: 'Authentication failed. Wrong password.'
          });
        } else {

      // if user is found and password is right
      // create a token
          var token = jwt.sign({
            id: user._id,
            firstName: user.firstName,
            email: user.email
          }, superSecret, {
            expiresInMinutes: 1440 // expires in 24 hours
          });

      // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }
      }
    });
  }
}
