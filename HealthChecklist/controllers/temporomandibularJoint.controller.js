(function() {
	'use strict';
	angular
		.module('app')
		.controller('OrderTemporomandibularJointController', OrderTemporomandibularJointController);
	OrderTemporomandibularJointController.$inject = ['OrderCreateService', '$location', '$rootScope', '$scope'];

	function OrderTemporomandibularJointController(OrderCreateService, $location, $rootScope, $scope) {
		if (OrderCreateService.dataCache.temporo != undefined) {
			var temporo = OrderCreateService.dataCache.temporo;
			$scope.temporomandibularJoint_zz = temporo.temporomandibularJoint_zz;
			$scope.order_temporomandibularJoint_eqyt = temporo.order_temporomandibularJoint_eqyt;
			$scope.order_temporomandibularJoint_jsyt = temporo.order_temporomandibularJoint_jsyt;
			$scope.order_temporomandibularJoint_tx = temporo.order_temporomandibularJoint_tx;
			$scope.order_temporomandibularJoint_kkyc = temporo.order_temporomandibularJoint_kkyc;
			$scope.order_temporomandibularJoint_kkzc = temporo.order_temporomandibularJoint_kkzc;
			$scope.order_temporomandibularJoint_bkyc = temporo.order_temporomandibularJoint_bkyc;
			$scope.order_temporomandibularJoint_bkzc = temporo.order_temporomandibularJoint_bkzc;
			$scope.order_temporomandibularJoint_zdzdkkd = temporo.order_temporomandibularJoint_zdzdkkd;
			$scope.order_temporomandibularJoint_bdzdkkd = temporo.order_temporomandibularJoint_bdzdkkd;
			$scope.order_temporomandibularJoint_cxydyc = temporo.order_temporomandibularJoint_cxydyc;
			$scope.order_temporomandibularJoint_cxydzc = temporo.order_temporomandibularJoint_cxydzc;
			$scope.order_temporomandibularJoint_qsyd = temporo.order_temporomandibularJoint_qsyd;
			$scope.order_temporomandibularJoint_kkpx = temporo.order_temporomandibularJoint_kkpx;
			$scope.order_teethcheck_speeqxc = temporo.order_teethcheck_speeqxc;
			$scope.order_teethcheck_sfh = temporo.order_teethcheck_sfh;
			$scope.order_teethcheck_sfg = temporo.order_teethcheck_sfg;
			$scope.order_teethcheck_qykh = temporo.order_teethcheck_qykh;
			$scope.order_teethcheck_qyfh = temporo.order_teethcheck_qyfh;
			$scope.order_teethcheck_sqyzj = temporo.order_teethcheck_sqyzj;
			$scope.order_teethcheck_qyyw = temporo.order_teethcheck_qyyw;
			$scope.order_teethcheck_dsmy = temporo.order_teethcheck_dsmy;
			$scope.order_teethcheck_hdxyzb = temporo.order_teethcheck_hdxyzb;
			$scope.order_teethcheck_fzy = temporo.order_teethcheck_fzy;
			$scope.order_teethcheck_nmbb = temporo.order_teethcheck_nmbb;
			$scope.order_teethcheck_qtkqwt = temporo.order_teethcheck_qtkqwt;

			$scope.patientinfo = $rootScope.patientinfo;
		}

		$scope.storeModelsToService = function() {
			if (OrderCreateService.dataCache.temporo == undefined) {
				OrderCreateService.dataCache.temporo = {};
			}
			var temporo = OrderCreateService.dataCache.temporo;
			temporo.temporomandibularJoint_zz = $scope.temporomandibularJoint_zz;
			temporo.order_temporomandibularJoint_eqyt = $scope.order_temporomandibularJoint_eqyt;
			temporo.order_temporomandibularJoint_jsyt = $scope.order_temporomandibularJoint_jsyt;
			temporo.order_temporomandibularJoint_tx = $scope.order_temporomandibularJoint_tx;
			temporo.order_temporomandibularJoint_kkyc = $scope.order_temporomandibularJoint_kkyc;
			temporo.order_temporomandibularJoint_kkzc = $scope.order_temporomandibularJoint_kkzc;
			temporo.order_temporomandibularJoint_bkyc = $scope.order_temporomandibularJoint_bkyc;
			temporo.order_temporomandibularJoint_bkzc = $scope.order_temporomandibularJoint_bkzc;
			temporo.order_temporomandibularJoint_zdzdkkd = $scope.order_temporomandibularJoint_zdzdkkd;
			temporo.order_temporomandibularJoint_bdzdkkd = $scope.order_temporomandibularJoint_bdzdkkd;
			temporo.order_temporomandibularJoint_cxydyc = $scope.order_temporomandibularJoint_cxydyc;
			temporo.order_temporomandibularJoint_cxydzc = $scope.order_temporomandibularJoint_cxydzc;
			temporo.order_temporomandibularJoint_qsyd = $scope.order_temporomandibularJoint_qsyd;
			temporo.order_temporomandibularJoint_kkpx = $scope.order_temporomandibularJoint_kkpx;
			temporo.order_teethcheck_speeqxc = $scope.order_teethcheck_speeqxc;
			temporo.order_teethcheck_sfh = $scope.order_teethcheck_sfh;
			temporo.order_teethcheck_sfg = $scope.order_teethcheck_sfg;
			temporo.order_teethcheck_qykh = $scope.order_teethcheck_qykh;
			temporo.order_teethcheck_qyfh = $scope.order_teethcheck_qyfh;
			temporo.order_teethcheck_sqyzj = $scope.order_teethcheck_sqyzj;
			temporo.order_teethcheck_qyyw = $scope.order_teethcheck_qyyw;
			temporo.order_teethcheck_dsmy = $scope.order_teethcheck_dsmy;
			temporo.order_teethcheck_hdxyzb = $scope.order_teethcheck_hdxyzb;
			temporo.order_teethcheck_fzy = $scope.order_teethcheck_fzy;
			temporo.order_teethcheck_nmbb = $scope.order_teethcheck_nmbb;
			temporo.order_teethcheck_qtkqwt = $scope.order_teethcheck_qtkqwt;
		};
	}

})();