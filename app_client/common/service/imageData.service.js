angular
  .module('ComicWallApp')
  .service('imageData', imageData);

imageData.$inject = ['$http'];

function imageData($http) {
  var getAllImages = function() {
    return $http.get('api/sketches');
  };

  var getImageObj = function(img) {
    return $http.get('api/sketches/name/' + img)
  }

  return {
    getAllImages: getAllImages,
    getImageObj: getImageObj
  };
};
