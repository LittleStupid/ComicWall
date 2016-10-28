angular
  .module('ComicWallApp')
  .controller('imgCtrl', imgCtrl);

  imgCtrl.$inject = ['$routeParams'];
  function imgCtrl($routeParams) {
    var vm = this;

    vm.imgid = $routeParams.img;
  }
