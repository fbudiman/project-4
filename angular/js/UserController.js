angular.module('Petsy')
  .controller('UserController', UserController)

UserController.$inject = ['$http'];

function UserController($http) {
  var vm = this
  var userUrl = "http://localhost:3000/api/user/create"

  this.firstName = ""
  this.lastName = ""
  this.address = ""
  this.email = ""
  this.password = ""
  this.profilePicture = ""

  this.newUser = function (firstName, lastName, address, email, password, profilePicture) {

    $http({
      method: 'POST',
      url: userUrl,
      data: {
        firstName: vm.firstName,
        lastName: vm.lastName,
        address: vm.address,
        email: vm.email,
        password: vm.password,
        profilePicture: vm.profilePicture
      }
    }).success(function() {
        alert('Success!')
    })
  }
}
