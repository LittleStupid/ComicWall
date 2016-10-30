angular
  .module('ComicWallApp')
  .controller('navigationCtrl', navigationCtrl);

  navigationCtrl.$inject = ['$location', '$uibModal', 'authentication'];
  function navigationCtrl($location, $uibModal, authentication) {
    var vm = this;

    vm.isLoggedIn = authentication.isLoggedIn();
    vm.user = authentication.currentUser();

    vm.logout = function() {
      console.log('logout...');
      authentication.logout();
      // vm.isLoggedIn = authentication.isLoggedIn();
      $location.path('#/');
    };

    vm.popupRegisterForm = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '../../../page/registerForm/register.html',
        controller: 'registerCtrl as vm'
      });
    }

    vm.popupLoginForm = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '../../../page/loginForm/login.html',
        controller: 'loginCtrl as vm'
      });
    }
  }
