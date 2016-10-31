angular.module('ComicWallApp',['ngRoute', 'ui.bootstrap']);

function config($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'page/wall/wall.html'
    })
    .when('/about',{
      templateUrl: 'about.html'
    })
    .when('/imgs/:img', {
      templateUrl: 'page/img/img.html',
      controller: 'imgCtrl',
      controllerAs: 'vm'
    })
    .when('/users/:userId', {
      templateUrl: 'page/user/user.html',
      controller: 'userCtrl',
      controllerAs: 'vm'
    })
    .otherwise({
      templateUrl: 'other.html'
    });
}

angular
  .module('ComicWallApp')
  .config(['$routeProvider', config]);
