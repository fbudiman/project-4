var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')
var Schema = mongoose.Schema;


var usersSchema = new Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: {type: String, require: true, index: {unique: true}},
  password: {type: String, require: true, select: false},
  profilePicture: String
})

usersSchema.pre('save', function(next) {
  var user = this;

  // hash the password only if the password has been changed or user is new
  if (!user.isModified('password')) return next();
   // generate the hash
   bcrypt.hash(user.password, null, null, function(err, hash) {
   if (err) return next(err);

   // change the password to the hashed version
   user.password = hash;
   next();
  });
});


usersSchema.methods.comparePassword = function(password) {
  var user = this;

  return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', usersSchema)
