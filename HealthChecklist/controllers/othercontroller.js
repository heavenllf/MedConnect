(function() {
	'use strict';
	angular
		.module('app')
		.controller('OtherController', OtherController);
	OtherController.$inject = ['OrderCreateService', '$location', '$scope', '$rootScope'];

	function OtherController(OrderCreateService, $location, $scope, $rootScope) {
		if (OrderCreateService.dataCache.other != undefined) {
			var other = OrderCreateService.dataCache.other;
			$scope.order_other_qddc = other.order_other_qddc;
			$scope.order_other_dtq = other.order_other_dtq;
			$scope.order_other_fybq = other.order_other_fybq;
			$scope.order_other_yj = other.order_other_yj;
			$scope.order_other_qtwt = other.order_other_qtwt;

			$scope.patientinfo = $rootScope.patientinfo;
		}

		$scope.storeModelsToService = function() {
			if (OrderCreateService.dataCache.other == undefined) {
				OrderCreateService.dataCache.other = {};
			}
			var other = OrderCreateService.dataCache.other;
			other.order_other_qddc = $scope.order_other_qddc;
			other.order_other_dtq = $scope.order_other_dtq;
			other.order_other_fybq = $scope.order_other_fybq;
			other.order_other_yj = $scope.order_other_yj;
			other.order_other_qtwt = $scope.order_other_qtwt;
		};

		$scope.sendCheckDataToServer = function() {
			$scope.storeModelsToService();
			OrderCreateService.sendCheckDataToServer();
		};

	}

})();