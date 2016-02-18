angular.module('Petsy', ['ui.router', 'authService', 'postService', 'userService'])
 .config(MainRouter)
 .config(function($httpProvider) {

 // attach our auth interceptor to the http requests
 $httpProvider.interceptors.push('AuthInterceptor');

 });

//SET UP FOR ANGULAR UI VIEWS
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('newsfeed', {
      url: '/',
      templateUrl: 'newsfeed.html'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'search.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about.html'
    })
    .state('user', {
      url: '/user',
      templateUrl: 'user.html'
    })
    .state('login', {
      url: '/login',
      controller : 'MainController',
      controllerAs: 'login',
      templateUrl: 'login.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'register.html'
    })
    .state('all', {
      url: '/all',
      templateUrl: 'all.html'
    })
    .state('adoptions', {
      url: '/adoptions',
      templateUrl: 'adoptions.html'
    })
    .state('lost', {
      url: '/lost',
      templateUrl: 'lost.html'
    })
    .state('misc', {
      url: '/misc',
      templateUrl: 'misc.html'
    })

    $urlRouterProvider.otherwise('/')
}
