angular
  .module('ComicWallApp')
  .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$uibModalInstance', '$location', 'authentication'];
  function loginCtrl($uibModalInstance, $location, authentication) {
    var vm = this;

    vm.credentials = {
      email : "",
      password : ""
    };

    vm.onSubmit = function() {
      vm.formError = "";
      if(!vm.credentials.email || !vm.credentials.password) {
        vm.formError = "All fields required";
        console.log(vm.formError);
        return false;
      } else {
        vm.doLogin();
      }
    };

    vm.doLogin = function() {
      authentication
        .login(vm.credentials)
        .error(function(e){
          console.log(e);
        })
        .then(function(data){
          console.log('SUCCESS');
          console.log(data);
          $location.path('/');
          $uibModalInstance.close();
        })
    };
  }
