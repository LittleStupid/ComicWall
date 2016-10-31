angular
  .module('ComicWallApp')
  .service('userData', userData);

  userData.$inject = ['$http'];
  function userData($http) {
    var getuserInfo = function(userId) {
      return $http.get('/api/users/' + userId);
    }

    return {
      getuserInfo: getuserInfo
    }
  }
