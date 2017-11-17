'use strict';

angular
  .module('groceryList')
  .directive('addGroceryItem', addGroceryItem);
function addGroceryItem() {

  var directive = {
    restrict: 'E',
    templateUrl: 'components/add-grocery-item/add-grocery-item.html',
    link: linkFunc,
    controller: 'AddGroceryItemCtrl',
    controllerAs: 'addGroceryItemVm',
    bindToController: true
  };

  return directive;

  function linkFunc(scope, el, attr, vm) {
    console.log('in add grocery item directive link');
  }

}
