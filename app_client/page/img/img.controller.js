angular
  .module('ComicWallApp')
  .controller('imgCtrl', imgCtrl);

  imgCtrl.$inject = ['$routeParams', '$location', 'imageData'];
  function imgCtrl($routeParams, $location, imageData) {
    var vm = this;

    vm.imgid = $routeParams.img;
    vm.getData = function($routeParams) {
      imageData.getImageObj(vm.imgid)
        .success(function(data){
          vm.header = data.user.header;
          vm.name = data.user.name;
          vm.sketchNum = data.user.sketches.length;
          vm.imgObjId = data._id;
          vm.userId = data.user._id;
          vm.coverName = data.coverName;
        })
        .error(function(e){
          console.log(e);
        });
    }

    vm.remove = function($routeParams) {
      imageData.deleteImageObj(vm.imgObjId)
        .success(function(data){
          $location.path('');
        })
        .error(function(e){
          console.log(e);
        });
    }

    vm.getData($routeParams);
  }
