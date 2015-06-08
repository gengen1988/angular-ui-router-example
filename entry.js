var angular = require('angular');
var uiRouter = require('angular-ui-router');

angular.element(document).ready(ready);
angular.module('app', ['ui.router']).config(config);

function ready() {
  angular.bootstrap(document, ['app']);
}

function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home.html'
  });

  $stateProvider.state('user', {
    url: '/user',
    templateUrl: 'user.html'
  });

  $stateProvider.state('user.login', {
    url: '/login',
    templateUrl: 'login.html'
  });

}
