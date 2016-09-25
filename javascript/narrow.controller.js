(function () {
  'use strict'
  angular.module('NarrowItDownApp')
  .controller('NarrowItDownController', NarrowItDownController);
  
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;
    narrowCtrl.found = [];
    narrowCtrl.searchTerm = '';

    var isBlank = function(){return narrowCtrl.searchTerm.trim() == ''};

    narrowCtrl.narrowIt = function(){
      if (isBlank()) {
        narrowCtrl.notFound = true;
        narrowCtrl.found = [];
        return
      }

      MenuSearchService
      .getMatchedMenuItems(narrowCtrl.searchTerm)
      .then(function(result){
        narrowCtrl.found = result;
        narrowCtrl.notFound = narrowCtrl.found.length < 1
      });
    }

    narrowCtrl.removeItem = function(itemIndex){
      narrowCtrl.found.splice(itemIndex, 1);
    }; 
  }

})();