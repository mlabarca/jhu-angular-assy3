(function () {
  'use strict'
  angular.module('NarrowItDownApp')
  .controller('NarrowItDownController', NarrowItDownController);
  
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;
    narrowCtrl.found = [];
    narrowCtrl.searchTerm = '';
    narrowCtrl.loading = false;

    var isBlank = function(){return narrowCtrl.searchTerm.trim() == ''};

    narrowCtrl.narrowIt = function(){
      narrowCtrl.loading = true;
      if (isBlank()) {
        narrowCtrl.notFound = true;
        narrowCtrl.found = [];
        narrowCtrl.loading = false;
        return
      }

      MenuSearchService
      .getMatchedMenuItems(narrowCtrl.searchTerm)
      .then(function(result){
        narrowCtrl.found = result;
        narrowCtrl.loading = false;
        narrowCtrl.notFound = narrowCtrl.found.length < 1
      });
    }

    narrowCtrl.removeItem = function(itemIndex){
      narrowCtrl.found.splice(itemIndex, 1);
    }; 
  }

})();