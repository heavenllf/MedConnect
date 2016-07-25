/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-7
 * Time: 下午8:56
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';

    angular
        .module('mainapp')
        .controller('OrderListController', OrderListController);

    OrderListController.$inject = ['OrderListService', '$location', '$rootScope'];
    function OrderListController(OrderListService, $location, $rootScope) {
        var vm = this;

        vm.OrderListService = OrderListService;

        function OrderListService() {

        }
    }

})();
