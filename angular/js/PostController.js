angular.module('Petsy')
  .controller('PostController', PostController)

function PostController($http, Post) {

  var vm = this

  //show all posts
  Post.all().success(function (data){
    vm.allPosts = data;
  })

  // function to create a post
  vm.newPost = function() {
    vm.processing = true;

    // use the create function in the userService
    Post.create(vm.postData)
      .success(function(data) {
        vm.processing = false;

        // clear the form
        vm.postData = {};

        //message
        vm.message = "Post successfully created."
        //post to the page as soon as created
        Post.all().success(function (data){
          vm.allPosts = data;
      })
    });

  };
}
