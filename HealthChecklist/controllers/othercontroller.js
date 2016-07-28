(function() {
	'use strict';
	angular
		.module('mainapp')
		.controller('OtherController', OtherController);
	OtherController.$inject = ['OrderCreateService', '$location', '$scope'];

	function OtherController(OrderCreateService, $location, $scope) {
		if (OrderCreateService.dataCache.other != undefined) {
			var other = OrderCreateService.dataCache.other;
			$scope.order_other_qddca = other.order_other_qddca;
			$scope.order_other_qddcb = other.order_other_qddcb;
			$scope.order_other_dtqa = other.order_other_dtqa;
			$scope.order_other_dtqb = other.order_other_dtqb;
			$scope.order_other_fybqa = other.order_other_fybqa;
			$scope.order_other_fybqb = other.order_other_fybqb;
			$scope.order_other_yj = other.order_other_yj;
			$scope.order_other_qtwt = other.order_other_qtwt;
		}

		$scope.storeModelsToService = function() {
			if (OrderCreateService.dataCache.other == undefined) {
				OrderCreateService.dataCache.other = {};
			}
			var other = OrderCreateService.dataCache.other;
			other.order_other_qddca = $scope.order_other_qddca;
			other.order_other_qddcb = $scope.order_other_qddcb;
			other.order_other_dtqa = $scope.order_other_dtqa;
			other.order_other_dtqb = $scope.order_other_dtqb;
			other.order_other_fybqa = $scope.order_other_fybqa;
			other.order_other_fybqb = $scope.order_other_fybqb;
			other.order_other_yj = $scope.order_other_yj;
			other.order_other_qtwt = $scope.order_other_qtwt;
		};

		$scope.sendCheckDataToServer = function() {
			OrderCreateService.sendCheckDataToServer();
		};

	}

})();