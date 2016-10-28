angular
  .module('ComicWallApp')
  .controller('imgCtrl', imgCtrl);

  imgCtrl.$inject = ['$routeParams', 'imageData'];
  function imgCtrl($routeParams, imageData) {
    var vm = this;

    vm.imgid = $routeParams.img;
    vm.getData = function($routeParams) {
      imageData.getImageObj(vm.imgid)
        .success(function(data){
          vm.header = data.author;
        })
        .error(function(e){
          console.log(e);
        });
    }

    vm.getData();
  }
