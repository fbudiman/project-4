angular.module('Petsy')
  .controller('MainController', MainController);

  function MainController($rootScope, $location, Auth) {
    var vm = this;

    //GET INFO IF A PERSON IS LOGGED IN
    vm.loggedIn = Auth.isLoggedIn();

    if (vm.loggedIn) {
      Auth.getUser()
        .success(function(data) {
          vm.user = data;
          vm.post.postData.userId = vm.user.id
        })
    }

    //CHECK TO SEE IF A USER IS LOGGED IN ON EVERY REQUEST
    //ROOTSCOPE - checking to see if a user is still logged in/login status after going to a different page
    $rootScope.$on('$routeChangeStart', function() {
      vm.loggedIn = Auth.isLoggedIn();

    //GET USER INFO ON ROUTE CHANGE
      Auth.getUser()
        .success(function(data) {
          vm.user = data;
        })
    })

    //LOGIN FORM FUNCTION
    vm.doLogin = function() {
      //CALL THE AUTH.LOGIN FUNCTION
      Auth.login(vm.loginData.email, vm.loginData.password)
        .success(function(data) {

          //IF USER SUCCESSFULLY LOGS IN, REDIRECT TO USERS PAGE
          $location.path('/api/users')
        })
    }

    vm.doLogout = function() {
      Auth.logout();
      //RESET ALL USER INFO
      vm.user = {};
      $location.path('/login')
    }

  }
