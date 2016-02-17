angular.module('Petsy')
  .controller('PostController', PostController)

PostController.$inject = ['$http'];

function PostController($http) {
  var vm = this

  vm.allPosts = [];

  vm.userId = ""
  vm.title = ""
  vm.category = ""
  vm.body = ""
  vm.imageUrl = []
  vm.time = Date.now
  vm.comments = []

  //GRABS ALL POSTS
  vm.getPosts = function() {
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/posts'
    }).then(function(response) {
      vm.allPosts = response.data;
    })
  }
  vm.getPosts();

  //POST NEW POST
  vm.newPost = function(userId, title, category, body, imageUrl, time) {

    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/post/create',
      data: {
        userId: vm.userId,
        title: vm.title,
        category: vm.category,
        body: vm.body,
        imageUrl: vm.imageUrl,
        time: vm.time
      }
    }).then(function(response) {
        vm.getPosts();
    })
  }

}
