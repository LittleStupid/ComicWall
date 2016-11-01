angular
  .module('ComicWallApp')
  .controller('uploadCtrl', uploadCtrl);

  loginCtrl.$inject = ['$scope'];
  function uploadCtrl($scope) {
    // var vm = this;
    $scope.file = {};
    $scope.file.src = "";

    $scope.uploadPicture = function(){
      // console.log($scope);
    };

    $scope.fileChange = function(ele){
      console.log("Changed");
      console.log(ele);
    };
  }
