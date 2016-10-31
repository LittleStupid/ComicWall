angular
  .module('ComicWallApp')
  .controller('userCtrl', userCtrl);

  userCtrl.$inject = ['$routeParams', 'userData'];
  function userCtrl($routeParams, userData) {
    var vm = this;

    vm.userId = $routeParams.userId;

    vm.getData = function($routeParams) {
      userData.getuserInfo(vm.userId)
        .success(function(data){
          vm.userInfo = data;
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

     return '#/imgs/' + img._id;
   }

    vm.getData($routeParams);
  }
