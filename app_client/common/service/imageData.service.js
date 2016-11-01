angular
  .module('ComicWallApp')
  .service('imageData', imageData);

imageData.$inject = ['$http'];

function imageData($http) {
  var getAllImages = function() {
    return $http.get('api/sketches');
  };

  var getImageObj = function(img) {
    return $http.get('api/sketches/' + img);
  };

  var updateImageObj = function(img, data) {
    return  $http.put('api/sketches/' + img, data);
  };

  var addImageReview = function(img, data) {
    return $http.put('api/sketches/' + img + '/comments', data);
  };

  var deleteImageObj = function(img) {
    return $http.delete('api/sketches/' + img);
  };

  return {
    getAllImages: getAllImages,
    getImageObj: getImageObj,
    deleteImageObj: deleteImageObj,
    updateImageObj: updateImageObj,
    addImageReview: addImageReview
  };
};
