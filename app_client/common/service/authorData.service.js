angular
  .module('ComicWallApp')
  .service('authorData', authorData);

  authorData.$inject = ['$http'];
  function authorData($http) {
    var getAuthorInfo = function(authorId) {
      return $http.get('/api/authors/' + authorId);
    }

    return {
      getAuthorInfo: getAuthorInfo
    }
  }
