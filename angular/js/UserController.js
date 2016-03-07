angular.module('Petsy')
  .controller('UserController', UserController)

function UserController($http, User) {

  var vm = this
  // User.all().success(function (data){
  //   vm.allUsers = data;
  // })

  // function to create a user
  vm.newUser = function() {
    vm.processing = true;

    // use the create function in the userService
    User.create(vm.userData)
    .success(function(data) {
      vm.processing = false;

      // clear the form
      vm.userData = {};
      //message
      vm.message = "User successfully created. Pleage log in to continue."
    })
    .error(function(data) {
      vm.message = "Please fill out all required fields."
    })

  };

}
