'use strict';

angular
  .module('groceryList')
  .directive('editGroceryItem', addGroceryItem);
function addGroceryItem() {

  var directive = {
    restrict: 'E',
    templateUrl: 'components/edit-grocery-item/edit-grocery-item.html',
    link: linkFunc,
    controller: 'EditGroceryItemCtrl',
    controllerAs: 'editGroceryItemVm',
    bindToController: true,
    scope: {
      groceryItem: '='
    }
  };

  return directive;

  function linkFunc(scope, el, attr, vm) {
    console.log('in edit grocery item directive link');
  }

}
