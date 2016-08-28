(function() {
	'use strict';
	angular
		.module('app')
		.controller('TeethCheckController', TeethCheckController);
	TeethCheckController.$inject = ['OrderCreateService', '$location', '$rootScope', '$scope'];

	function TeethCheckController(OrderCreateService, $location, $rootScope, $scope) {
		if (OrderCreateService.dataCache.teethCheck != undefined) {
			var teethCheck = OrderCreateService.dataCache.teethCheck;
			$scope.order_teethcheck_ygxtsh = teethCheck.order_teethcheck_ygxtsh;
			$scope.order_teethcheck_ygxtxh = teethCheck.order_teethcheck_ygxtxh;
			$scope.order_teethcheck_ygkd = teethCheck.order_teethcheck_ygkd;
			$scope.order_teethcheck_wilsonqx = teethCheck.order_teethcheck_wilsonqx;
			$scope.order_teethcheck_zcmy = teethCheck.order_teethcheck_zcmy;
			$scope.order_teethcheck_ycmy = teethCheck.order_teethcheck_ycmy;
			$scope.order_teethcheck_zcjy = teethCheck.order_teethcheck_zcjy;
			$scope.order_teethcheck_ycjy = teethCheck.order_teethcheck_ycjy;
			$scope.order_teethcheck_speeqx = teethCheck.order_teethcheck_speeqx;
			$scope.order_teethcheck_sfh = teethCheck.order_teethcheck_sfh;
			$scope.order_teethcheck_sfg = teethCheck.order_teethcheck_sfg;
			$scope.order_teethcheck_qykh = teethCheck.order_teethcheck_qykh;
			$scope.order_teethcheck_qyfh = teethCheck.order_teethcheck_qyfh;
			$scope.order_teethcheck_sqyzj = teethCheck.order_teethcheck_sqyzj;
			$scope.order_teethcheck_qyyw = teethCheck.order_teethcheck_qyyw;
			$scope.order_teethcheck_dsmy = teethCheck.order_teethcheck_dsmy;
			$scope.order_teethcheck_hdxyzb = teethCheck.order_teethcheck_hdxyzb;
			$scope.order_teethcheck_fzy = teethCheck.order_teethcheck_fzy;
			$scope.order_teethcheck_nmbb = teethCheck.order_teethcheck_nmbb;
			$scope.order_teethcheck_qtkqwt = teethCheck.order_teethcheck_qtkqwt;

			$scope.patientinfo = $rootScope.patientinfo;
		}

		$scope.storeModelsToService = function() {
			if (OrderCreateService.dataCache.teethCheck == undefined) {
				OrderCreateService.dataCache.teethCheck = {};
			}
			var teethCheck = OrderCreateService.dataCache.teethCheck;
			teethCheck.order_teethcheck_ygxtsh = $scope.order_teethcheck_ygxtsh;
			teethCheck.order_teethcheck_ygxtxh = $scope.order_teethcheck_ygxtxh;
			teethCheck.order_teethcheck_ygkd = $scope.order_teethcheck_ygkd;
			teethCheck.order_teethcheck_wilsonqx = $scope.order_teethcheck_wilsonqx;
			teethCheck.order_teethcheck_zcmy = $scope.order_teethcheck_zcmy;
			teethCheck.order_teethcheck_ycmy = $scope.order_teethcheck_ycmy;
			teethCheck.order_teethcheck_zcjy = $scope.order_teethcheck_zcjy;
			teethCheck.order_teethcheck_ycjy = $scope.order_teethcheck_ycjy;
			teethCheck.order_teethcheck_speeqx = $scope.order_teethcheck_speeqx;
			teethCheck.order_teethcheck_sfh = $scope.order_teethcheck_sfh;
			teethCheck.order_teethcheck_sfg = $scope.order_teethcheck_sfg;
			teethCheck.order_teethcheck_qykh = $scope.order_teethcheck_qykh;
			teethCheck.order_teethcheck_qyfh = $scope.order_teethcheck_qyfh;
			teethCheck.order_teethcheck_sqyzj = $scope.order_teethcheck_sqyzj;
			teethCheck.order_teethcheck_qyyw = $scope.order_teethcheck_qyyw;
			teethCheck.order_teethcheck_dsmy = $scope.order_teethcheck_dsmy;
			teethCheck.order_teethcheck_hdxyzb = $scope.order_teethcheck_hdxyzb;
			teethCheck.order_teethcheck_fzy = $scope.order_teethcheck_fzy;
			teethCheck.order_teethcheck_nmbb = $scope.order_teethcheck_nmbb;
			teethCheck.order_teethcheck_qtkqwt = $scope.order_teethcheck_qtkqwt;
		};
	}

})();