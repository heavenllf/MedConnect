(function() {
	'use strict';
	angular
		.module('mainapp')
		.controller('TeethCheckController', TeethCheckController);
	TeethCheckController.$inject = ['OrderCreateService', '$location', '$rootScope', '$scope'];

	function TeethCheckController(OrderCreateService, $location, $rootScope, $scope) {
		if (OrderCreateService.dataCache.teethCheck != undefined) {
			var teethCheck = OrderCreateService.dataCache.teethCheck;
			$scope.order_teethcheck_ygxtsha = teethCheck.order_teethcheck_ygxtsha;
			$scope.order_teethcheck_ygxtshb = teethCheck.order_teethcheck_ygxtshb;
			$scope.order_teethcheck_ygxtxha = teethCheck.order_teethcheck_ygxtxha;
			$scope.order_teethcheck_ygxtxhb = teethCheck.order_teethcheck_ygxtxhb;
			$scope.order_teethcheck_ygkda = teethCheck.order_teethcheck_ygkda;
			$scope.order_teethcheck_ygkdb = teethCheck.order_teethcheck_ygkdb;
			$scope.order_teethcheck_wilsonqxa = teethCheck.order_teethcheck_wilsonqxa;
			$scope.order_teethcheck_wilsonqxb = teethCheck.order_teethcheck_wilsonqxb;
			$scope.order_teethcheck_zcmya = teethCheck.order_teethcheck_zcmya;
			$scope.order_teethcheck_zcmyb = teethCheck.order_teethcheck_zcmyb;
			$scope.order_teethcheck_zcmyc = teethCheck.order_teethcheck_zcmyc;
			$scope.order_teethcheck_ycmya = teethCheck.order_teethcheck_ycmya;
			$scope.order_teethcheck_ycmyb = teethCheck.order_teethcheck_ycmyb;
			$scope.order_teethcheck_ycmyc = teethCheck.order_teethcheck_ycmyc;
			$scope.order_teethcheck_zcjya = teethCheck.order_teethcheck_zcjya;
			$scope.order_teethcheck_zcjyb = teethCheck.order_teethcheck_zcjyb;
			$scope.order_teethcheck_zcjyc = teethCheck.order_teethcheck_zcjyc;
			$scope.order_teethcheck_ycjya = teethCheck.order_teethcheck_ycjya;
			$scope.order_teethcheck_ycjyb = teethCheck.order_teethcheck_ycjyb;
			$scope.order_teethcheck_ycjyc = teethCheck.order_teethcheck_ycjyc;
			$scope.order_teethcheck_speeqxa = teethCheck.order_teethcheck_speeqxa;
			$scope.order_teethcheck_speeqxb = teethCheck.order_teethcheck_speeqxb;
			$scope.order_teethcheck_speeqxc = teethCheck.order_teethcheck_speeqxc;
			$scope.order_teethcheck_sfh = teethCheck.order_teethcheck_sfh;
			$scope.order_teethcheck_sfg = teethCheck.order_teethcheck_sfg;
			$scope.order_teethcheck_qykh = teethCheck.order_teethcheck_qykh;
			$scope.order_teethcheck_qyfha = teethCheck.order_teethcheck_qyfha;
			$scope.order_teethcheck_qyfhb = teethCheck.order_teethcheck_qyfhb;
			$scope.order_teethcheck_sqyzja = teethCheck.order_teethcheck_sqyzja;
			$scope.order_teethcheck_sqyzjb = teethCheck.order_teethcheck_sqyzjb;
			$scope.order_teethcheck_sqyzjc = teethCheck.order_teethcheck_sqyzjc;
			$scope.order_teethcheck_qyyw = teethCheck.order_teethcheck_qyyw;
			$scope.order_teethcheck_dsmy = teethCheck.order_teethcheck_dsmy;
			$scope.order_teethcheck_hdxyzba = teethCheck.order_teethcheck_hdxyzba;
			$scope.order_teethcheck_hdxyzbb = teethCheck.order_teethcheck_hdxyzbb;
			$scope.order_teethcheck_fzya = teethCheck.order_teethcheck_fzya;
			$scope.order_teethcheck_fzyb = teethCheck.order_teethcheck_fzyb;
			$scope.order_teethcheck_nmbb = teethCheck.order_teethcheck_nmbb;
			$scope.order_teethcheck_qtkqwt = teethCheck.order_teethcheck_qtkqwt;
		}

		$scope.storeModelsToService = function() {
			if (OrderCreateService.dataCache.teethCheck == undefined) {
				OrderCreateService.dataCache.teethCheck = {};
			}
			var teethCheck = OrderCreateService.dataCache.teethCheck;
			teethCheck.order_teethcheck_ygxtsha = $scope.order_teethcheck_ygxtsha;
			teethCheck.order_teethcheck_ygxtshb = $scope.order_teethcheck_ygxtshb;
			teethCheck.order_teethcheck_ygxtxha = $scope.order_teethcheck_ygxtxha;
			teethCheck.order_teethcheck_ygxtxhb = $scope.order_teethcheck_ygxtxhb;
			teethCheck.order_teethcheck_ygkda = $scope.order_teethcheck_ygkda;
			teethCheck.order_teethcheck_ygkdb = $scope.order_teethcheck_ygkdb;
			teethCheck.order_teethcheck_wilsonqxa = $scope.order_teethcheck_wilsonqxa;
			teethCheck.order_teethcheck_wilsonqxb = $scope.order_teethcheck_wilsonqxb;
			teethCheck.order_teethcheck_zcmya = $scope.order_teethcheck_zcmya;
			teethCheck.order_teethcheck_zcmyb = $scope.order_teethcheck_zcmyb;
			teethCheck.order_teethcheck_zcmyc = $scope.order_teethcheck_zcmyc;
			teethCheck.order_teethcheck_ycmya = $scope.order_teethcheck_ycmya;
			teethCheck.order_teethcheck_ycmyb = $scope.order_teethcheck_ycmyb;
			teethCheck.order_teethcheck_ycmyc = $scope.order_teethcheck_ycmyc;
			teethCheck.order_teethcheck_zcjya = $scope.order_teethcheck_zcjya;
			teethCheck.order_teethcheck_zcjyb = $scope.order_teethcheck_zcjyb;
			teethCheck.order_teethcheck_zcjyc = $scope.order_teethcheck_zcjyc;
			teethCheck.order_teethcheck_ycjya = $scope.order_teethcheck_ycjya;
			teethCheck.order_teethcheck_ycjyb = $scope.order_teethcheck_ycjyb;
			teethCheck.order_teethcheck_ycjyc = $scope.order_teethcheck_ycjyc;
			teethCheck.order_teethcheck_speeqxa = $scope.order_teethcheck_speeqxa;
			teethCheck.order_teethcheck_speeqxb = $scope.order_teethcheck_speeqxb;
			teethCheck.order_teethcheck_speeqxc = $scope.order_teethcheck_speeqxc;
			teethCheck.order_teethcheck_sfh = $scope.order_teethcheck_sfh;
			teethCheck.order_teethcheck_sfg = $scope.order_teethcheck_sfg;
			teethCheck.order_teethcheck_qykh = $scope.order_teethcheck_qykh;
			teethCheck.order_teethcheck_qyfha = $scope.order_teethcheck_qyfha;
			teethCheck.order_teethcheck_qyfhb = $scope.order_teethcheck_qyfhb;
			teethCheck.order_teethcheck_sqyzja = $scope.order_teethcheck_sqyzja;
			teethCheck.order_teethcheck_sqyzjb = $scope.order_teethcheck_sqyzjb;
			teethCheck.order_teethcheck_sqyzjc = $scope.order_teethcheck_sqyzjc;
			teethCheck.order_teethcheck_qyyw = $scope.order_teethcheck_qyyw;
			teethCheck.order_teethcheck_dsmy = $scope.order_teethcheck_dsmy;
			teethCheck.order_teethcheck_hdxyzba = $scope.order_teethcheck_hdxyzba;
			teethCheck.order_teethcheck_hdxyzbb = $scope.order_teethcheck_hdxyzbb;
			teethCheck.order_teethcheck_fzya = $scope.order_teethcheck_fzya;
			teethCheck.order_teethcheck_fzyb = $scope.order_teethcheck_fzyb;
			teethCheck.order_teethcheck_nmbb = $scope.order_teethcheck_nmbb;
			teethCheck.order_teethcheck_qtkqwt = $scope.order_teethcheck_qtkqwt;
		};
	}

})();