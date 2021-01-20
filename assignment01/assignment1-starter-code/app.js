(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.checkItems = function(){
    var amount = countItems($scope.items);
    $scope.message = generateMsg(amount);
  };

  function countItems(items) {
    var count = 0;
    if (items) {
      var array = items.split(',');
      for (var i in array) {
        if(array[i].trim().length != 0) {
          count++;
        }
      }
    }
    return count;
  }

  function generateMsg(amount) {
    if (amount === 0) {
      return 'Please enter data first';
    }
    else if (amount <= 3) {
      return 'Enjoy!';
    } else {
      return 'Too much!';
    }
  }
}
})();
