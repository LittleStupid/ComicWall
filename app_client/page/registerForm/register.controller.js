angular
  .module('ComicWallApp')
  .controller('registerCtrl', registerCtrl);

  registerCtrl.$inject = ['$location', '$uibModalInstance', 'authentication'];
  function registerCtrl($location, $uibModalInstance, authentication) {
    var vm = this;

    vm.credentials = {
      name: "",
      email: "",
      password: ""
    };

    vm.onSubmit = function() {
      if (!vm.credentials.name || !vm.credentials.email || !vm.credentials.password) {
        console.log("Need all fields");
      } else {
        vm.doRegister();
      }
    };

    vm.doRegister = function() {
      authentication
        .register(vm.credentials)
        .error(function(err){
          console.log(err);
        })
        .then(function(data){
          console.log('SUCCESS');
          console.log(data);
          $location.path('/');
          $uibModalInstance.close();
        });
    };

  }
