(function() {
	'use strict';
	angular
		.module('mainapp')
		.controller('OrderTemporomandibularJointController', OrderTemporomandibularJointController);
	OrderTemporomandibularJointController.$inject = ['OrderCreateService', '$location', '$rootScope', '$scope'];

	function OrderTemporomandibularJointController(OrderCreateService, $location, $rootScope, $scope) {
		if (OrderCreateService.dataCache.temporo != undefined) {
			var temporo = OrderCreateService.dataCache.temporo;
			$scope.temporomandibularJoint_zza = temporo.temporomandibularJoint_zza;
			$scope.temporomandibularJoint_zzb = temporo.temporomandibularJoint_zzb;
			$scope.order_temporomandibularJoint_eqyta = temporo.order_temporomandibularJoint_eqyta;
			$scope.order_temporomandibularJoint_eqytb = temporo.order_temporomandibularJoint_eqytb;
			$scope.order_temporomandibularJoint_eqytc = temporo.order_temporomandibularJoint_eqytc;
			$scope.order_temporomandibularJoint_jsyta = temporo.order_temporomandibularJoint_jsyta;
			$scope.order_temporomandibularJoint_jsytb = temporo.order_temporomandibularJoint_jsytb;
			$scope.order_temporomandibularJoint_jsytc = temporo.order_temporomandibularJoint_jsytc;
			$scope.order_temporomandibularJoint_txa = temporo.order_temporomandibularJoint_txa;
			$scope.order_temporomandibularJoint_txb = temporo.order_temporomandibularJoint_txb;
			$scope.order_temporomandibularJoint_kkyc = temporo.order_temporomandibularJoint_kkyc;
			$scope.order_temporomandibularJoint_kkzc = temporo.order_temporomandibularJoint_kkzc;
			$scope.order_temporomandibularJoint_bkyc = temporo.order_temporomandibularJoint_bkyc;
			$scope.order_temporomandibularJoint_bkzc = temporo.order_temporomandibularJoint_bkzc;
			$scope.order_temporomandibularJoint_zdzdkkd = temporo.order_temporomandibularJoint_zdzdkkd;
			$scope.order_temporomandibularJoint_bdzdkkd = temporo.order_temporomandibularJoint_bdzdkkd;
			$scope.order_temporomandibularJoint_cxydyc = temporo.order_temporomandibularJoint_cxydyc;
			$scope.order_temporomandibularJoint_cxydzc = temporo.order_temporomandibularJoint_cxydzc;
			$scope.order_temporomandibularJoint_qsyd = temporo.order_temporomandibularJoint_qsyd;
			$scope.order_temporomandibularJoint_kkpxa = temporo.order_temporomandibularJoint_kkpxa;
			$scope.order_temporomandibularJoint_kkpxb = temporo.order_temporomandibularJoint_kkpxb;
			$scope.order_temporomandibularJoint_kkpxc = temporo.order_temporomandibularJoint_kkpxc;
			$scope.order_teethcheck_speeqxc = temporo.order_teethcheck_speeqxc;
			$scope.order_teethcheck_sfh = temporo.order_teethcheck_sfh;
			$scope.order_teethcheck_sfg = temporo.order_teethcheck_sfg;
			$scope.order_teethcheck_qykh = temporo.order_teethcheck_qykh;
			$scope.order_teethcheck_qyfha = temporo.order_teethcheck_qyfha;
			$scope.order_teethcheck_qyfhb = temporo.order_teethcheck_qyfhb;
			$scope.order_teethcheck_sqyzja = temporo.order_teethcheck_sqyzja;
			$scope.order_teethcheck_sqyzjb = temporo.order_teethcheck_sqyzjb;
			$scope.order_teethcheck_sqyzjc = temporo.order_teethcheck_sqyzjc;
			$scope.order_teethcheck_qyyw = temporo.order_teethcheck_qyyw;
			$scope.order_teethcheck_dsmy = temporo.order_teethcheck_dsmy;
			$scope.order_teethcheck_hdxyzba = temporo.order_teethcheck_hdxyzba;
			$scope.order_teethcheck_hdxyzbb = temporo.order_teethcheck_hdxyzbb;
			$scope.order_teethcheck_fzya = temporo.order_teethcheck_fzya;
			$scope.order_teethcheck_fzyb = temporo.order_teethcheck_fzyb;
			$scope.order_teethcheck_nmbb = temporo.order_teethcheck_nmbb;
			$scope.order_teethcheck_qtkqwt = temporo.order_teethcheck_qtkqwt;
		}

		$scope.storeModelsToService = function() {
			if (OrderCreateService.dataCache.temporo == undefined) {
				OrderCreateService.dataCache.temporo = {};
			}
			var temporo = OrderCreateService.dataCache.temporo;
			temporo.temporomandibularJoint_zza = $scope.temporomandibularJoint_zza;
			temporo.temporomandibularJoint_zzb = $scope.temporomandibularJoint_zzb;
			temporo.order_temporomandibularJoint_eqyta = $scope.order_temporomandibularJoint_eqyta;
			temporo.order_temporomandibularJoint_eqytb = $scope.order_temporomandibularJoint_eqytb;
			temporo.order_temporomandibularJoint_eqytc = $scope.order_temporomandibularJoint_eqytc;
			temporo.order_temporomandibularJoint_jsyta = $scope.order_temporomandibularJoint_jsyta;
			temporo.order_temporomandibularJoint_jsytb = $scope.order_temporomandibularJoint_jsytb;
			temporo.order_temporomandibularJoint_jsytc = $scope.order_temporomandibularJoint_jsytc;
			temporo.order_temporomandibularJoint_txa = $scope.order_temporomandibularJoint_txa;
			temporo.order_temporomandibularJoint_txb = $scope.order_temporomandibularJoint_txb;
			temporo.order_temporomandibularJoint_kkyc = $scope.order_temporomandibularJoint_kkyc;
			temporo.order_temporomandibularJoint_kkzc = $scope.order_temporomandibularJoint_kkzc;
			temporo.order_temporomandibularJoint_bkyc = $scope.order_temporomandibularJoint_bkyc;
			temporo.order_temporomandibularJoint_bkzc = $scope.order_temporomandibularJoint_bkzc;
			temporo.order_temporomandibularJoint_zdzdkkd = $scope.order_temporomandibularJoint_zdzdkkd;
			temporo.order_temporomandibularJoint_bdzdkkd = $scope.order_temporomandibularJoint_bdzdkkd;
			temporo.order_temporomandibularJoint_cxydyc = $scope.order_temporomandibularJoint_cxydyc;
			temporo.order_temporomandibularJoint_cxydzc = $scope.order_temporomandibularJoint_cxydzc;
			temporo.order_temporomandibularJoint_qsyd = $scope.order_temporomandibularJoint_qsyd;
			temporo.order_temporomandibularJoint_kkpxa = $scope.order_temporomandibularJoint_kkpxa;
			temporo.order_temporomandibularJoint_kkpxb = $scope.order_temporomandibularJoint_kkpxb;
			temporo.order_temporomandibularJoint_kkpxc = $scope.order_temporomandibularJoint_kkpxc;
		};
	}

})();