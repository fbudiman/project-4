angular.module('Petsy', ['ui.router'])
 .config(MainRouter)

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
      templateUrl: 'login.html'
    })
    .state('6', {
      url: '/6',
      templateUrl: '6.html'
    })


    $urlRouterProvider.otherwise('/')
}
