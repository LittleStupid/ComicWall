angular
  .module('ComicWallApp')
  .directive('navigation', navigation);

  function navigation() {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/navigation/navigation.template.html',
      controller: 'navigationCtrl as vm'
    };
  }
