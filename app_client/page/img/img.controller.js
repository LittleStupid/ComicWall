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
          vm.header = data.author.header;
          vm.name = data.author.name;
          vm.sketchNum = data.author.sketches.length;
          vm.imgObjId = data._id;
          vm.authorId = data.author._id;
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
