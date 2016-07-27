(function() {
	'use strict';
	angular
		.module('mainapp')
		.controller('OrderTemporomandibularJointController', OrderTemporomandibularJointController);
	OrderTemporomandibularJointController.$inject = ['OrderCreateService', '$location', '$rootScope', '$scope'];

	function OrderTemporomandibularJointController(OrderCreateService, $location, $rootScope, $scope) {
		if (OrderCreateService.dataCache.temporo != undefined) {
			var temporo = OrderCreateService.dataCache.temporo;
			$scope.temporomandibularJoint_zza = faceStatic.temporomandibularJoint_zza;
			$scope.temporomandibularJoint_zzb = faceStatic.temporomandibularJoint_zzb;
			$scope.order_temporomandibularJoint_eqyta = faceStatic.order_temporomandibularJoint_eqyta;
			$scope.order_temporomandibularJoint_eqytb = faceStatic.order_temporomandibularJoint_eqytb;
			$scope.order_temporomandibularJoint_eqytc = faceStatic.order_temporomandibularJoint_eqytc;
			$scope.order_temporomandibularJoint_jsyta = faceStatic.order_temporomandibularJoint_jsyta;
			$scope.order_temporomandibularJoint_jsytb = faceStatic.order_temporomandibularJoint_jsytb;
			$scope.order_temporomandibularJoint_jsytc = faceStatic.order_temporomandibularJoint_jsytc;
			$scope.order_temporomandibularJoint_txa = faceStatic.order_temporomandibularJoint_txa;
			$scope.order_temporomandibularJoint_txb = faceStatic.order_temporomandibularJoint_txb;
			$scope.order_temporomandibularJoint_kkyc = faceStatic.order_temporomandibularJoint_kkyc;
			$scope.order_temporomandibularJoint_kkzc = faceStatic.order_temporomandibularJoint_kkzc;
			$scope.order_temporomandibularJoint_bkyc = faceStatic.order_temporomandibularJoint_bkyc;
			$scope.order_temporomandibularJoint_bkzc = faceStatic.order_temporomandibularJoint_bkzc;
			$scope.order_temporomandibularJoint_zdzdkkd = faceStatic.order_temporomandibularJoint_zdzdkkd;
			$scope.order_temporomandibularJoint_bdzdkkd = faceStatic.order_temporomandibularJoint_bdzdkkd;
			$scope.order_temporomandibularJoint_cxydyc = faceStatic.order_temporomandibularJoint_cxydyc;
			$scope.order_temporomandibularJoint_cxydzc = faceStatic.order_temporomandibularJoint_cxydzc;
			$scope.order_temporomandibularJoint_qsyd = faceStatic.order_temporomandibularJoint_qsyd;
			$scope.order_temporomandibularJoint_kkpxa = faceStatic.order_temporomandibularJoint_kkpxa;
			$scope.order_temporomandibularJoint_kkpxb = faceStatic.order_temporomandibularJoint_kkpxb;
			$scope.order_temporomandibularJoint_kkpxc = faceStatic.order_temporomandibularJoint_kkpxc;
			$scope.order_teethcheck_speeqxc = faceStatic.order_teethcheck_speeqxc;
			$scope.order_teethcheck_sfh = faceStatic.order_teethcheck_sfh;
			$scope.order_teethcheck_sfg = faceStatic.order_teethcheck_sfg;
			$scope.order_teethcheck_qykh = faceStatic.order_teethcheck_qykh;
			$scope.order_teethcheck_qyfha = faceStatic.order_teethcheck_qyfha;
			$scope.order_teethcheck_qyfhb = faceStatic.order_teethcheck_qyfhb;
			$scope.order_teethcheck_sqyzja = faceStatic.order_teethcheck_sqyzja;
			$scope.order_teethcheck_sqyzjb = faceStatic.order_teethcheck_sqyzjb;
			$scope.order_teethcheck_sqyzjc = faceStatic.order_teethcheck_sqyzjc;
			$scope.order_teethcheck_qyyw = faceStatic.order_teethcheck_qyyw;
			$scope.order_teethcheck_dsmy = faceStatic.order_teethcheck_dsmy;
			$scope.order_teethcheck_hdxyzba = faceStatic.order_teethcheck_hdxyzba;
			$scope.order_teethcheck_hdxyzbb = faceStatic.order_teethcheck_hdxyzbb;
			$scope.order_teethcheck_fzya = faceStatic.order_teethcheck_fzya;
			$scope.order_teethcheck_fzyb = faceStatic.order_teethcheck_fzyb;
			$scope.order_teethcheck_nmbb = faceStatic.order_teethcheck_nmbb;
			$scope.order_teethcheck_qtkqwt = faceStatic.order_teethcheck_qtkqwt;
		}

		$scope.storeModelsToService = function() {
			if (OrderCreateService.dataCache.temporo == undefined) {
				OrderCreateService.dataCache.temporo = {};
			}
			var temporo = OrderCreateService.dataCache.temporo;
			faceStatic.temporomandibularJoint_zza = $scope.temporomandibularJoint_zza;
			faceStatic.temporomandibularJoint_zzb = $scope.temporomandibularJoint_zzb;
			faceStatic.order_temporomandibularJoint_eqyta = $scope.order_temporomandibularJoint_eqyta;
			faceStatic.order_temporomandibularJoint_eqytb = $scope.order_temporomandibularJoint_eqytb;
			faceStatic.order_temporomandibularJoint_eqytc = $scope.order_temporomandibularJoint_eqytc;
			faceStatic.order_temporomandibularJoint_jsyta = $scope.order_temporomandibularJoint_jsyta;
			faceStatic.order_temporomandibularJoint_jsytb = $scope.order_temporomandibularJoint_jsytb;
			faceStatic.order_temporomandibularJoint_jsytc = $scope.order_temporomandibularJoint_jsytc;
			faceStatic.order_temporomandibularJoint_txa = $scope.order_temporomandibularJoint_txa;
			faceStatic.order_temporomandibularJoint_txb = $scope.order_temporomandibularJoint_txb;
			faceStatic.order_temporomandibularJoint_kkyc = $scope.order_temporomandibularJoint_kkyc;
			faceStatic.order_temporomandibularJoint_kkzc = $scope.order_temporomandibularJoint_kkzc;
			faceStatic.order_temporomandibularJoint_bkyc = $scope.order_temporomandibularJoint_bkyc;
			faceStatic.order_temporomandibularJoint_bkzc = $scope.order_temporomandibularJoint_bkzc;
			faceStatic.order_temporomandibularJoint_zdzdkkd = $scope.order_temporomandibularJoint_zdzdkkd;
			faceStatic.order_temporomandibularJoint_bdzdkkd = $scope.order_temporomandibularJoint_bdzdkkd;
			faceStatic.order_temporomandibularJoint_cxydyc = $scope.order_temporomandibularJoint_cxydyc;
			faceStatic.order_temporomandibularJoint_cxydzc = $scope.order_temporomandibularJoint_cxydzc;
			faceStatic.order_temporomandibularJoint_qsyd = $scope.order_temporomandibularJoint_qsyd;
			faceStatic.order_temporomandibularJoint_kkpxa = $scope.order_temporomandibularJoint_kkpxa;
			faceStatic.order_temporomandibularJoint_kkpxb = $scope.order_temporomandibularJoint_kkpxb;
			faceStatic.order_temporomandibularJoint_kkpxc = $scope.order_temporomandibularJoint_kkpxc;
		};
	}

})();