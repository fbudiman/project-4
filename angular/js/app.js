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
      templateUrl: 'views/newsfeed.html'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'views/search.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })
    .state('user', {
      url: '/user',
      templateUrl: 'views/user.html'
    })
    .state('login', {
      url: '/login',
      controller : 'MainController',
      controllerAs: 'login',
      templateUrl: 'views/login.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html'
    })
    .state('all', {
      url: '/all',
      templateUrl: 'views/all.html'
    })
    .state('adoptions', {
      url: '/adoptions',
      templateUrl: 'views/adoptions.html'
    })
    .state('lost', {
      url: '/lost',
      templateUrl: 'views/lost.html'
    })
    .state('misc', {
      url: '/misc',
      templateUrl: 'views/misc.html'
    })

    $urlRouterProvider.otherwise('/')
}
