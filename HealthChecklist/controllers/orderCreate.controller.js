/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-7
 * Time: 下午8:56
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';

    angular
        .module('mainapp')
        .controller('OrderCreateController', OrderCreateController);

    OrderCreateController.$inject = ['OrderCreateService', '$location', '$rootScope', '$scope'];

    function OrderCreateController(OrderCreateService, $location, $rootScope, $scope) {
        if (OrderCreateService.dataCache.applyInfo != undefined) {
            var applyInfo = OrderCreateService.dataCache.applyInfo;
            $scope.order_servicename = applyInfo.order_servicename;
            $scope.order_username = applyInfo.order_username;
            $scope.male = applyInfo.male;
            $scope.female = applyInfo.female;
            $scope.order_phone = applyInfo.order_phone
            $scope.order_birthday = applyInfo.order_birthday
        }

        $scope.storeModelsToService = function() {
            if (OrderCreateService.dataCache.applyInfo == undefined) {
                OrderCreateService.dataCache.applyInfo = {};
            }
            var applyInfo = OrderCreateService.dataCache.applyInfo;
            applyInfo.order_servicename = $scope.order_servicename;
            applyInfo.order_username = $scope.order_username;
            applyInfo.male = $scope.male;
            applyInfo.female = $scope.female;
            applyInfo.order_phone = $scope.order_phone;
            applyInfo.order_birthday = $scope.order_birthday;
        };

    }

})();