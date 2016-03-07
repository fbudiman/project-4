var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken');
var superSecret = 'ilovescotchscotchyscotchscotch';


var usersController = require('../controllers/usersController');
var postsController = require('../controllers/postsController');

//UNAUTHENTICATED ROUTES
router.route('/api/user/create').post(usersController.createUser);
router.route('/authenticate').post(usersController.authenticateUser);

router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, superSecret, function(err, decoded) {
        if (err) {
          return res.status(403).send({
            success: false,
            message: 'Failed to authenticate token.'
          });
        } else {
        // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          console.log(req.decoded)
          next();

        }
      });

    } else {

      // if there is no token
      // return an HTTP response of 403 (access forbidden) and an error message
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      })

    }
});


//ALL ROUTES BELOW ARE AUTHENTICATED

router.get('/me', function(req, res) {
  res.send(req.decoded);
});

//USERS ROUTES
router.route('/api/users').get(usersController.showUsers);
router.route('/user/:id/delete').delete(usersController.deleteUser);
router.route('/user/:id/edit').put(usersController.editUser);
router.route('/users/profile/edit/').put(usersController.editUser);


//POSTS ROUTES
router.route('/api/post/create').post(postsController.createPost);
router.route('/post/:id/delete').delete(postsController.deletePost);
router.route('/api/posts').get(postsController.showPosts);
router.route('/post/:id/edit').put(postsController.editPost);
router.route('/posts/profile/edit/').put(postsController.editPost);


//EXPORT ROUTES
module.exports = router;
