'use strict';

angular.module('groceryList')
  .controller('HomeCtrl', ['GroceryListService', '$rootScope', function (GroceryListService, $rootScope) {

    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl',
      all: all,
      toggleStatus: toggleStatus,
      editGroceryItem: edit,
      isGroceryItemToEdit: isGroceryItemToEdit,
      groceryItemToEdit: null
    });

    ////////////////////////////////////

    function all() {
      GroceryListService.all()
        .then(function (groceryList) {
          var groceryItems = [];
          _.forEach(groceryList, function (item) {
            groceryItems.push(item);
          });
          vm.groceryList = groceryItems;
        }, function (err) {
          console.log(err);
        });
    }

    function toggleStatus(groceryItem) {
      if (groceryItem.status === 'NEW') {
        groceryItem.status = 'COMPLETED';
      } else {
        groceryItem.status = 'NEW';
      }
      GroceryListService.edit(groceryItem)
        .then(function (res) {
          console.log(res);
        }, function (err) {
          console.log(err);
        });
    }

    function edit(groceryItem) {
      console.log('EDIT');
      vm.groceryItemToEdit = angular.copy(groceryItem);
    }

    function isGroceryItemToEdit(groceryItem) {
      return _.get(vm, 'groceryItemToEdit.id', null) === groceryItem.id;
    }

    $rootScope.$on('rootScope:newItemAdded', function (event, data) {
      vm.all();
    });
    $rootScope.$on('rootScope:itemDeleted', function (event, data) {
      vm.all();
    });

    init();

    ////////////////////////////////////

    function init() {
      vm.all();
    }

  }]);
