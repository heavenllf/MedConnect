createOrder.controller("OrderCreateController", ['$rootScope', '$scope', '$state', '$location', 'OrderCreateService',
    function ($rootScope, $scope, $state, $location, OrderCreateService) {
        if (OrderCreateService.dataCache.applyInfo != undefined) {
            var applyInfo = OrderCreateService.dataCache.applyInfo;
            $scope.order_servicename = applyInfo.order_servicename;
            $scope.order_username = applyInfo.order_username;
            $scope.sex = applyInfo.sex;
            // $scope.female = applyInfo.female;
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
            applyInfo.sex = $scope.sex;
            // applyInfo.female = $scope.female;
            applyInfo.order_phone = $scope.order_phone;
            applyInfo.order_birthday = $scope.order_birthday;

            $rootScope.patientinfo = $scope.order_username;
        };
    }]);
