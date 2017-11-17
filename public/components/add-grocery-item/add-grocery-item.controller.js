'use strict';

angular.module('groceryList')
  .controller('AddGroceryItemCtrl', ['GroceryListService', '$scope', '$rootScope', function (GroceryListService, $scope, $rootScope) {

    var vm = this;
    var defaultItem = {
      "id": "",
      "title": "",
      "notes": "",
      "status": "NEW"
    };

    angular.extend(vm, {
      name: 'AddGroceryItemCtrl',
      addItem: add,
      maxLength: 150
    });

    $scope.groceryItem = angular.copy(defaultItem);

    ////////////////////////////////////

    function add() {
      GroceryListService.add($scope.groceryItem)
        .then(function (newItem) {
          console.log(newItem);
          $rootScope.$broadcast('rootScope:newItemAdded', newItem);
          resetForm();
        }, function (err) {
          console.log(err);
        });
    }

    function resetForm() {
      $scope.groceryItem = angular.copy(defaultItem);
      $scope.addGroceryItemForm.$setPristine();
      $scope.addGroceryItemForm.$setUntouched();
    }

    init();

    ////////////////////////////////////

    function init() {
    }

  }]);
