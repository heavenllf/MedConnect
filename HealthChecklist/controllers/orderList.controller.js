(function () {
    'use strict';

    angular
        .module('app')
        .controller('OrderListController', OrderListController);

    OrderListController.$inject = ['OrderListService', '$location', '$rootScope'];
    function OrderListController(OrderListService, $location, $rootScope) {
        var vm = this;

        vm.OrderListService = OrderListService;

        function OrderListService() {

        }
    }

})();
