angular.module('Petsy')
  .controller('UserController', UserController)

function UserController($http, User) {

  var vm = this
  User.all().success(function (data){
    vm.allUsers = data;
  })

  // function to create a user
  vm.newUser = function() {
    vm.processing = true;

    // use the create function in the userService
    User.create(vm.userData)
    .success(function(data) {
    vm.processing = false;

    // clear the form
    vm.userData = {};
    //post to the page as soon as created
    User.all().success(function (data){
      vm.allUsers = data;
    })
    });

  };


  // var vm = this

  // vm.allUsers = [];

  // vm.firstName = ""
  // vm.lastName = ""
  // vm.address = ""
  // vm.email = ""
  // vm.password = ""
  // vm.profilePicture = ""

  // //GRABS ALL USERS
  // vm.getUsers = function() {

  //   $http({
  //     method: 'GET',
  //     url: 'http://localhost:3000/api/users'
  //   }).then(function(response) {
  //     vm.allUsers = response.data;
  //   })
  // }
  // vm.getUsers();


  // //POST NEW USER
  // vm.newUser = function (firstName, lastName, address, email, password, profilePicture) {

  //   $http({
  //     method: 'POST',
  //     url: 'http://localhost:3000/api/user/create',
  //     data: {
  //       firstName: vm.firstName,
  //       lastName: vm.lastName,
  //       address: vm.address,
  //       email: vm.email,
  //       password: vm.password,
  //       profilePicture: vm.profilePicture
  //     }
  //   }).then(function(response) {
  //       vm.getUsers();
  //   })
  // }

}
