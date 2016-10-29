angular
  .module('ComicWallApp')
  .controller('authorCtrl', authorCtrl);

  authorCtrl.$inject = ['$routeParams', 'authorData'];
  function authorCtrl($routeParams, authorData) {
    var vm = this;

    vm.authorId = $routeParams.authorId;

    vm.getData = function($routeParams) {
      authorData.getAuthorInfo(vm.authorId)
        .success(function(data){
          vm.authorInfo = data;
        })
        .error(function(e){
          console.log(e);
        });
    }

    function getImgName(fullName) {
      if(!fullName) {
        return "0";
      }

      var index = fullName.indexOf('.jpg');
      if( index <= 0 ) {
        return "0";
      }

      return fullName.substr(0,index);
   };

   vm.getImgUrl = function(img) {
     if(!img) {
       return "";
     }

     if(!img.name) {
       return "";
     }

     return '#/imgs/' + getImgName(img.name);
   }

    vm.getData($routeParams);
  }
