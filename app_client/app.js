angular.module('ComicWallApp',['ngRoute']);

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
    .when('/authors/:authorId', {
      templateUrl: 'page/author/author.html',
      controller: 'authorCtrl',
      controllerAs: 'vm'
    })
    .otherwise({
      templateUrl: 'other.html'
    });
}

angular
  .module('ComicWallApp')
  .config(['$routeProvider', config]);
