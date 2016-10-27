angular.module('ComicWallApp',['ngRoute']);

function config($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'test.html'
    })
    .otherwise({
      templateUrl: 'OtherTest.html'
    });
}

angular
  .module('ComicWallApp')
  .config(['$routeProvider', config]);
