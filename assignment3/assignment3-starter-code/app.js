(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems); // 1st argument: normalized name that'll appear in HTML, 2nd is factory function which returns DDO

// NarrowItDownController is injected with MenuSearchService
NarrowItDownController.$inject['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var $ctrl = this;

  $ctrl.found = function () {
    return MenuSearchService.getMatchedMenuItems();
  } // end of NarrowItDownController()
}

// define factory function for custom directive
//FoundItems.$inject = []; // inject other services here such as a service
function FoundItems() {
  var ddo = {
    template: 'foundItems.html',
    Restrict: 'E',
  };
  return ddo;
}


MenuSearchService.$inject =['$http', 'ApiBasePath'];
// responsible for reaching out to server using $http service to retrieve list of menu items
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  // a REST service endpoint is an endpoint which services a set of REST resources
  // this will reach out to server using $http service and retrieve the menu item
  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result){
       var menuItems = result.data.menu_items;

       return menuItems.filter(function(item) {
         return item.name.toLowerCase().includes(searchTerm.toLowerCase());
       });
    })
  }
} // end of MenuSearchService()

})();
