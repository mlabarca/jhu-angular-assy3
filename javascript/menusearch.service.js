(function () {
  'use strict'
  angular.module('NarrowItDownApp')
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .service('MenuSearchService', MenuSearchService);
  

  MenuSearchService.$inject = ['ApiBasePath', '$http']
  function MenuSearchService(ApiBasePath, $http){
    var service = this;
    service.getMatchedMenuItems = function (searchTerm){
      var httpParams = {
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      };

      return $http(httpParams).then(function (response) {
        var menuItems = response.data.menu_items;

        // process result and only keep items that match
        var foundItems = [];
        for(var index = 0; index < menuItems.length; index++){
          if(menuItems[index].description.indexOf(searchTerm) != -1){
            foundItems.push(menuItems[index]);
          }
        }

        // return processed items
        return foundItems;
      });
    };
  }

})();