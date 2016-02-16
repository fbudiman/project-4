var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

var usersController = require('../controllers/usersController');
var postsController = require('../controllers/postsController');


//USERS ROUTES
router.route('/api/user/create').post(usersController.createUser);
router.route('/user/:id/delete').delete(usersController.deleteUser);
router.route('/api/users').get(usersController.showUsers);
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
