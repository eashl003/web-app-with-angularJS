(function() {
'use strict';

angular.module('msgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope) {
  $scope.items = '';
  $scope.msgToUser = '';
  $scope.checked = false;

  $scope.checkIfTooMuch = function() {
    if ($scope.items.trim().length == 0) {
      $scope.empty = true;

    } else {
      $scope.checked = true;
      $scope.empty = false;
      var listItems = $scope.items.split(',');
      var itemsTrimed = listItems.filter(function(i){
        return i.trim() !== '';
      });

      if (itemsTrimed.length <= 3){
        $scope.msgToUser = 'Enjoy!';
      } else {
        $scope.msgToUser = 'Too much!';
      }
    }
  }
}


})();
