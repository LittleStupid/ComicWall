angular
  .module('ComicWallApp')
  .directive('sketchWall', sketchWall);

  function sketchWall() {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/sketchWall/sketchWall.template.html',
      controller: 'sketchWallCtrl as wallvm'
    };
  }
