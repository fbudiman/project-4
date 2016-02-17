angular.module('Petsy')
  .controller('UserController', UserController)

UserController.$inject = ['$http'];

//GOTTA MAKE IT GO AROUND AUTHENTICATION???

function UserController($http) {
  var vm = this

  vm.allUsers = [];

  vm.firstName = ""
  vm.lastName = ""
  vm.address = ""
  vm.email = ""
  vm.password = ""
  vm.profilePicture = ""

  //GRABS ALL USERS
  vm.getUsers = function() {

    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/users'
    }).then(function(response) {
      vm.allUsers = response.data;
    })
  }
  vm.getUsers();


  //POST NEW USER
  vm.newUser = function (firstName, lastName, address, email, password, profilePicture) {

    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/user/create',
      data: {
        firstName: vm.firstName,
        lastName: vm.lastName,
        address: vm.address,
        email: vm.email,
        password: vm.password,
        profilePicture: vm.profilePicture
      }
    }).then(function(response) {
        vm.getUsers();
    })
  }

}
