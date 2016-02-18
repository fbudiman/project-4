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
      controller: 'MainController',
      controllerAs: 'main',
      templateUrl: 'views/newsfeed.html'
    })
    .state('search', {
      url: '/search',
      controller: 'MainController',
      controllerAs: 'main',
      templateUrl: 'views/search.html'
    })
    .state('about', {
      url: '/about',
      controller: 'MainController',
      controllerAs: 'main',
      templateUrl: 'views/about.html'
    })
    .state('user', {
      url: '/user',
      controller: 'MainController',
      controllerAs: 'main',
      templateUrl: 'views/user.html'
    })
    .state('login', {
      url: '/login',
      controller: 'MainController',
      controllerAs: 'main',
      templateUrl: 'views/login.html'
    })
    .state('register', {
      url: '/register',
      controller: 'MainController',
      controllerAs: 'main',
      templateUrl: 'views/register.html'
    })
    .state('all', {
      url: '/all',
      controller: 'MainController',
      controllerAs: 'main',
      templateUrl: 'views/all.html'
    })
    .state('adoptions', {
      url: '/adoptions',
      controller: 'MainController',
      controllerAs: 'main',
      templateUrl: 'views/adoptions.html'
    })
    .state('lost', {
      url: '/lost',
      controller: 'MainController',
      controllerAs: 'main',
      templateUrl: 'views/lost.html'
    })
    .state('misc', {
      url: '/misc',
      controller: 'MainController',
      controllerAs: 'main',
      templateUrl: 'views/misc.html'
    })

    $urlRouterProvider.otherwise('/')
}
