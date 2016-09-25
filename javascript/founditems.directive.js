(function () {
  'use strict'
  angular.module('NarrowItDownApp')
  .directive('foundItems', FoundItems);
  
  function FoundItems(){
    var ddo = {
      templateUrl: 'item.html',
      scope: {
        items: '<items',
        onRemove: '&'
      },
      controller: FoundItemsController,
      controllerAs: 'foundItems',
      bindToController: true,
      transclude: true
    };

    return ddo;
  }

  function FoundItemsController(){
    var foundItems = this;
    foundItems.items = [];
  }



})();