(function () {
'use strict'; // strict mode can't use undeclared variables important for cleaner code
// create two list and pre-populate toBuyList with 5 items use array of obj literals
var toBuyList = [
  {
   name: "bag of spinach",
   quantity: 5
  },
  {
   name: "box of ginger tea",
   quantity: 1
  },
  {
   name: "cookies",
   quantity: 10
  },
  {
   name: "cookies",
   quantity: 10
  },
  {
   name: "cookies",
   quantity: 10
  }
];

angular.module('ShoppingListApp', [])
.controller('ToBuyListController', ToBuyListController) // register controllers
.controller('AlreadyBoughtListController', AlreadyBoughtListController)
.factory('ShoppingListFactory', ShoppingListFactory);

// ToBuyListController
ToBuyListController.$inject = ['ShoppingListFacntory']; // purpose of scope is, "'glue together' the presentation and the business logic of your app."
function ToBuyListController(ShoppingListFactory) {
  var list1 = this; // create list to add to

  // use factory to create a new shopping list service
  var toBuyList = ShoppingListFactory();

  list1.items = toBuyList.getItems();
  list1.itemName = "";
  list1.itemQuantity = "";
  // function to add new item to list
  list1.addItem = function () {
    toBuyList.addItem(list1.itemName, list2.itemQuantity);
  }
  // function to remove item from list
  list1.removeItem = function(itemIndex) {
    toBuyList.removeItem(itemIndex);
  }; // end of removeItemFromList
}

function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
