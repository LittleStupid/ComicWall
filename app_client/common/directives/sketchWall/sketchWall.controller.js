angular
  .module('ComicWallApp')
  .controller('sketchWallCtrl', sketchWallCtrl);

  function sketchWallCtrl() {
    var vm = this;

    vm.imgs = [
                {
                  author: '1.jpg',
                  name: '20003.jpg'
                },
                {
                  author: '2.jpg',
                  name: '20007.jpg'
                },
                {
                  author: '3.jpg',
                  name: '20023.jpg'
                },
                {
                  author: '4.jpg',
                  name: '20025.jpg'
                },
                {
                  author: '5.jpg',
                  name: '20041.jpg'
                },
                {
                  author: '6.jpg',
                  name: '20043.jpg'
                },
                {
                  author: '7.jpg',
                  name: '20045.jpg'
                },
                {
                  author: '8.jpg',
                  name: '20047.jpg'
                },
                {
                  author: '9.jpg',
                  name: '20170.jpg'
                }
              ];

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
  }
