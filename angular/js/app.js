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
    .state('register', {
      url: '/register',
      templateUrl: 'register.html'
    })
    .state('adoptions', {
      url: '/adoptions',
      templateUrl: 'adoptions.html'
    })
    .state('lost', {
      url: '/lost',
      templateUrl: 'lost.html'
    })
    .state('all', {
      url: '/all',
      templateUrl: 'all.html'
    })
    .state('misc', {
      url: '/misc',
      templateUrl: 'misc.html'
    })

    $urlRouterProvider.otherwise('/')
}
