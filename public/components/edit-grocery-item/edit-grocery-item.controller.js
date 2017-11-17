'use strict';

angular.module('groceryList')
  .controller('EditGroceryItemCtrl', ['GroceryListService', '$scope', '$rootScope', '$mdDialog', function (GroceryListService, $scope, $rootScope, $mdDialog) {

    var vm = this;

    angular.extend(vm, {
      name: 'EditGroceryItemCtrl',
      editItem: edit,
      deleteItem: deleteItem,
      maxLength: 150
    });

    ////////////////////////////////////

    function edit(groceryItem) {
      console.log('EDIT');
      console.log(groceryItem);
      GroceryListService.edit(groceryItem)
        .then(function (newItem) {
          console.log(newItem);
          $rootScope.$broadcast('rootScope:newItemAdded', newItem);
        }, function (err) {
          console.log(err);
        });
    }

    function deleteItem(groceryItem, ev) {
      var confirm = $mdDialog.confirm()
        .title('Would you like to delete this item?')
        .ariaLabel('Delete Item')
        .targetEvent(ev)
        .ok('Yes, Delete')
        .cancel('No, do not delete');

      $mdDialog.show(confirm).then(function () {
        GroceryListService.deleteItem(groceryItem.id)
          .then(function (res) {
            console.log(res);
            $rootScope.$broadcast('rootScope:itemDeleted', groceryItem);
          }, function (err) {
            console.log(err);
          });
      }, function () {
        console.log('not deleting this item');
      });
    }

    init();

    ////////////////////////////////////

    function init() {
    }

  }]);
