angular
  .module('ComicWallApp')
  .controller('imgCtrl', imgCtrl);

  imgCtrl.$inject = ['$routeParams', '$location', 'imageData', 'authentication'];
  function imgCtrl($routeParams, $location, imageData, authentication) {
    var vm = this;

    vm.imgId = $routeParams.imgId;
    vm.getData = function($routeParams) {
      imageData.getImageObj(vm.imgId)
        .success(function(data){
          // console.log(data);
          vm.data = data;
        })
        .error(function(e){
        });
    };

    vm.submitReview = function() {
      var commentAuthor = "commenter";
      if(authentication.currentUser()) {
        commentAuthor = authentication.currentUser().name;
      }
      var reviewData = {"name": commentAuthor, "content": vm.review};
      imageData.addImageReview(vm.imgId, reviewData)
        .success(function(data){
          vm.data.comments = data.comments;
          vm.review = "";
          // console.log("success");
          // console.log(data);
        })
        .error(function(e){
          // console.log(e);
        });
    };

    vm.remove = function($routeParams) {
      imageData.deleteImageObj(vm.imgId)
        .success(function(data){
          $location.path('');
        })
        .error(function(e){
        });
    };

    vm.update = function() {
      var updateData = {'rating': vm.data.rating + 1};

      imageData.updateImageObj(vm.data._id, updateData)
        .success(function(data){
          vm.data.rating = data.rating;
        })
        .error(function(e){
        });
    };

    vm.getData($routeParams);
  }
