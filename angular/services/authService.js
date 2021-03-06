angular.module('authService', [])
  .factory('Auth', function($http, $q, AuthToken) {

    // create auth factory object
    var authFactory = {};

    // log a user in
    authFactory.login = function(email, password) {

      // return the promise object and its data
      return $http.post('http://localhost:3000/authenticate', {
        email: email,
        password: password
      })
      .success(function(data) {
        AuthToken.setToken(data.token);
        console.log(data)
        return data;
      });
    };

    // log a user out by clearing the token
    authFactory.logout = function() {
      // clear the token
      AuthToken.setToken();
    };


    // check if a user is logged in
    // checks if there is a local token
    authFactory.isLoggedIn = function() {
      if (AuthToken.getToken())
        return true;
      else
        return false;
    };

    // get the logged in user
    authFactory.getUser = function() {
      if (AuthToken.getToken())
        return $http.get('http://localhost:3000/me', { cache: true });
      else
        return $q.reject({ message: 'User has no token.' });
    };

    // return auth factory object
    return authFactory;

  })

  .factory('AuthToken', function($window) {

    var authTokenFactory = {};
    // get the token out of local storage
    authTokenFactory.getToken = function() {
      return $window.localStorage.getItem('token');
    };

  // function to set token or clear token
  // if a token is passed, set the token
  // if there is no token, clear it from local storage
    authTokenFactory.setToken = function(token) {
      if (token)
        $window.localStorage.setItem('token', token);
      else
        $window.localStorage.removeItem('token');
    };

    return authTokenFactory;

  })

  .factory('AuthInterceptor', function($q, AuthToken, $location) {

    var interceptorFactory = {};

    // this will happen on all HTTP requests
    interceptorFactory.request = function(config) {

      // grab the token
      var token = AuthToken.getToken();

      // if the token exists, add it to the header as x-access-token
      if (token)
        config.headers['x-access-token'] = token;

      return config;
    };

    // happens on response errors
    interceptorFactory.responseError = function(response) {

       // if our server returns a 403 forbidden response
      if (response.status == 403) {
        AuthToken.setToken();
        $location.path('/login');
      }

      return $q.reject(response);
    };

    return interceptorFactory;

  });

