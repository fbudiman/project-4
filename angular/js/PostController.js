angular.module('Petsy')
  .controller('PostController', PostController)

// PostController.$inject = ['$http', 'Post'];

function PostController($http, Post) {

  var vm = this
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
    //post to the page as soon as created
    Post.all().success(function (data){
      vm.allPosts = data;
    })
    });

  };

  // vm.allPosts = [];

  // vm.userId = ""
  // vm.title = ""
  // vm.category = ""
  // vm.body = ""
  // vm.imageUrl = []
  // vm.time = Date.now
  // vm.comments = []

  // //GRABS ALL POSTS
  // vm.getPosts = function() {
  //   $http({
  //     method: 'GET',
  //     url: 'http://localhost:3000/api/posts'
  //   }).then(function(response) {
  //     vm.allPosts = response.data;
  //   })
  // }
  // vm.getPosts();

  // //POST NEW POST
  // vm.newPost = function(title, category, body, imageUrl) {

  //   $http({
  //     method: 'POST',
  //     url: 'http://localhost:3000/api/post/create',
  //     data: {
  //       userId: vm.userId,
  //       title: vm.title,
  //       category: vm.category,
  //       body: vm.body,
  //       imageUrl: vm.imageUrl,
  //       time: vm.time
  //     }
  //   }).then(function(response) {
  //       vm.getPosts();
  //   })
  // }

}
