/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-14
 * Time: 下午9:37
 * To change this template use File | Settings | File Templates.
 */
(function() {
	'use strict';
	angular
		.module('mainapp')
		.controller('OtherController', OtherController);
	OtherController.$inject = ['OrderCreateService', '$location', '$scope'];

	function OtherController(OrderCreateService, $location, $scope) {
		if (OrderCreateService.dataCache.temporo != undefined) {
			var temporo = OrderCreateService.dataCache.temporo;
			$scope.order_other_qddca = faceStatic.order_other_qddca;
			$scope.order_other_qddcb = faceStatic.order_other_qddcb;
			$scope.order_other_dtqa = faceStatic.order_other_dtqa;
			$scope.order_other_dtqb = faceStatic.order_other_dtqb;
			$scope.order_other_fybqa = faceStatic.order_other_fybqa;
			$scope.order_other_fybqb = faceStatic.order_other_fybqb;
			$scope.order_other_yj = faceStatic.order_other_yj;
			$scope.order_other_qtwt = faceStatic.order_other_qtwt;
		}

		$scope.storeModelsToService = function() {
			if (OrderCreateService.dataCache.temporo == undefined) {
				OrderCreateService.dataCache.temporo = {};
			}
			var temporo = OrderCreateService.dataCache.temporo;
			faceStatic.order_other_qddca = $scope.order_other_qddca;
			faceStatic.order_other_qddcb = $scope.order_other_qddcb;
			faceStatic.order_other_dtqa = $scope.order_other_dtqa;
			faceStatic.order_other_dtqb = $scope.order_other_dtqb;
			faceStatic.order_other_fybqa = $scope.order_other_fybqa;
			faceStatic.order_other_fybqb = $scope.order_other_fybqb;
			faceStatic.order_other_yj = $scope.order_other_yj;
			faceStatic.order_other_qtwt = $scope.order_other_qtwt;
		};


	}

})();