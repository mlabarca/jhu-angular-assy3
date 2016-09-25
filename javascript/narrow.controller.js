(function () {
  'use strict'
  angular.module('NarrowItDownApp')
  .controller('NarrowItDownController', NarrowItDownController);
  
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;
    narrowCtrl.found = [];

    narrowCtrl.narrowIt = function(){
      MenuSearchService
      .getMatchedMenuItems(narrowCtrl.searchTerm)
      .then(function(result){
        narrowCtrl.found = result;
        console.log(narrowCtrl.found);
      });

    }
  }

})();