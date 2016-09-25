(function () {
  'use strict'
  angular.module('NarrowItDownApp')
  .directive('foundItems', FoundItems);
  
  function FoundItems(){
    var ddo = {
      templateUrl: 'item.html',
      scope: {
        items: '<items',
      },
      controller: FoundItemsController,
      controllerAs: 'foundItems',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsController(){
    var foundItems = this;
    foundItems.items = [];
  }



})();