angular.module('postService', [])
  .factory('Post', function($http) {
    // create the object
    var postFactory = {};

    // get a single user - NEED TO SET UP SINGLE VIEW ROUTE
    // postFactory.get = function(id) {
    //   return $http.get('http://localhost:3000/api/' + id + );
    // };
    // get all users
    postFactory.all = function() {
      return $http.get('http://localhost:3000/api/posts/');
    };
    // create a user
    postFactory.create = function(postData) {
      return $http.post('http://localhost:3000/api/post/create', postData);
    };
    // update a user
    postFactory.update = function(id, postData) {
      return $http.put('http://localhost:3000/post/' + id + '/edit', postData);
    };
    // delete a user
    postFactory.delete = function(id) {
      return $http.delete('http://localhost:3000/post' + id + '/delete');
    };
    // return our entire postFactory object
    return postFactory;
  })
