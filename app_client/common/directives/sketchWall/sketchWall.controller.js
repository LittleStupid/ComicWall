angular
  .module('ComicWallApp')
  .controller('sketchWallCtrl', sketchWallCtrl);

  function sketchWallCtrl() {
    var vm = this;

    vm.imgs = ['20003.jpg', '20007.jpg', '20023.jpg', '20025.jpg',
               '20041.jpg', '20043.jpg', '20045.jpg', '20047.jpg'];

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

   vm.getImgUrl = function(fullName) {
    //  return 4;
    //  return '#/imgs/3';
    return '#/imgs/' + getImgName(fullName);
   }
  }
