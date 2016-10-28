angular
  .module('ComicWallApp')
  .controller('sketchWallCtrl', sketchWallCtrl);

  sketchWallCtrl.$inject = ['imageData'];
  function sketchWallCtrl(imageData) {
    var vm = this;

    vm.getData = function() {
      imageData.getAllImages()
        .success(function(data) {
          vm.imgs = data;
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

   vm.getData();
  }
