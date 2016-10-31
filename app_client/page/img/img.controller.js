angular
  .module('ComicWallApp')
  .controller('imgCtrl', imgCtrl);

  imgCtrl.$inject = ['$routeParams', '$location', 'imageData'];
  function imgCtrl($routeParams, $location, imageData) {
    var vm = this;

    vm.imgid = $routeParams.imgId;
    vm.getData = function($routeParams) {
      console.log(vm);
      imageData.getImageObj(vm.imgid)
        .success(function(data){
          console.log(data);
          vm.header = data.user.header;
          vm.name = data.user.name;
          vm.sketchNum = data.user.sketches.length;
          vm.imgObjId = data._id;
          vm.imgName = data.name;
          vm.userId = data.user._id;
          vm.coverName = data.coverName;
          vm.rating = data.rating;
          // console.log(data);
        })
        .error(function(e){
          // console.log(e);
        });
    };

    vm.remove = function($routeParams) {
      imageData.deleteImageObj(vm.imgObjId)
        .success(function(data){
          $location.path('');
        })
        .error(function(e){
          // console.log(e);
        });
    };

    vm.update = function() {
      var updateData = {'rating': vm.rating + 1};

      imageData.updateImageObj(vm.imgObjId, updateData)
        .success(function(data){
          // console.log(data);
          vm.rating = data.rating;
        })
        .error(function(e){
          // console.log(e);
        });
    };

    vm.getData($routeParams);
  }
