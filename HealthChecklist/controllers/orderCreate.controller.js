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
        .controller('OrderCreateController', OrderCreateController);

    OrderCreateController.$inject = ['OrderCreateService', '$location', '$rootScope','$scope'];
    function OrderCreateController(OrderCreateService, $location, $rootScope,$scope) {
        var vm = this;
        $scope.username="testt";
        $scope.sex=2;
        vm.OrderCreateService = OrderCreateService;

        function OrderCreateService() {

        }
    }

})();
