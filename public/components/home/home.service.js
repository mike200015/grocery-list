'use strict';

angular.module('groceryList')
    .service('GroceryListService', ['$resource', function ($resource) {

        /* Variable Declaration */

        var baseUrl = '/groceryitems';
        var groceryListAllResource = $resource(baseUrl + '/');
        var groceryListAddResource = $resource(baseUrl + '/add', {}, { post: { method: 'POST' } });
        var groceryListEditResource = $resource(baseUrl + '/edit', {}, { put: { method: 'PUT' } });
        var groceryListDeleteResource = $resource(baseUrl + '/delete/:id');

        /* Service Declaration */

        var service = {
            all: all,
            add: add,
            edit: edit,
            deleteItem: deleteItem
        };

        return service;

        //////////////////////////////////////////////////////

        /* Service Methods */

        function all() {
            return groceryListAllResource.query({}).$promise;
        }

        function add(groceryItem) {
            console.log(groceryItem);
            return groceryListAddResource.post({}, groceryItem).$promise;
        }
        //
        function edit(groceryItem) {
            return groceryListEditResource.put(groceryItem).$promise;
        }
        //
        function deleteItem(id) {
            return groceryListDeleteResource.delete({
                id: id
            }).$promise;
        }

    }]);
