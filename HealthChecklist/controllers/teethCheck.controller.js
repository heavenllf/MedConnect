(function() {
	'use strict';
	angular
		.module('mainapp')
		.controller('TeethCheckController', TeethCheckController);
	TeethCheckController.$inject = ['OrderCreateService', '$location', '$rootScope', '$scope'];

	function TeethCheckController(OrderCreateService, $location, $rootScope, $scope) {
		if (OrderCreateService.dataCache.teethCheck != undefined) {
			var teethCheck = OrderCreateService.dataCache.teethCheck;
			$scope.order_teethcheck_ygxtsha = faceStatic.order_teethcheck_ygxtsha;
			$scope.order_teethcheck_ygxtshb = faceStatic.order_teethcheck_ygxtshb;
			$scope.order_teethcheck_ygxtxha = faceStatic.order_teethcheck_ygxtxha;
			$scope.order_teethcheck_ygxtxhb = faceStatic.order_teethcheck_ygxtxhb;
			$scope.order_teethcheck_ygkda = faceStatic.order_teethcheck_ygkda;
			$scope.order_teethcheck_ygkdb = faceStatic.order_teethcheck_ygkdb;
			$scope.order_teethcheck_wilsonqxa = faceStatic.order_teethcheck_wilsonqxa;
			$scope.order_teethcheck_wilsonqxb = faceStatic.order_teethcheck_wilsonqxb;
			$scope.order_teethcheck_zcmya = faceStatic.order_teethcheck_zcmya;
			$scope.order_teethcheck_zcmyb = faceStatic.order_teethcheck_zcmyb;
			$scope.order_teethcheck_zcmyc = faceStatic.order_teethcheck_zcmyc;
			$scope.order_teethcheck_ycmya = faceStatic.order_teethcheck_ycmya;
			$scope.order_teethcheck_ycmyb = faceStatic.order_teethcheck_ycmyb;
			$scope.order_teethcheck_ycmyc = faceStatic.order_teethcheck_ycmyc;
			$scope.order_teethcheck_zcjya = faceStatic.order_teethcheck_zcjya;
			$scope.order_teethcheck_zcjyb = faceStatic.order_teethcheck_zcjyb;
			$scope.order_teethcheck_zcjyc = faceStatic.order_teethcheck_zcjyc;
			$scope.order_teethcheck_ycjya = faceStatic.order_teethcheck_ycjya;
			$scope.order_teethcheck_ycjyb = faceStatic.order_teethcheck_ycjyb;
			$scope.order_teethcheck_ycjyc = faceStatic.order_teethcheck_ycjyc;
			$scope.order_teethcheck_speeqxa = faceStatic.order_teethcheck_speeqxa;
			$scope.order_teethcheck_speeqxb = faceStatic.order_teethcheck_speeqxb;
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
			if (OrderCreateService.dataCache.teethCheck == undefined) {
				OrderCreateService.dataCache.teethCheck = {};
			}
			var teethCheck = OrderCreateService.dataCache.teethCheck;
			faceStatic.order_teethcheck_ygxtsha = $scope.order_teethcheck_ygxtsha;
			faceStatic.order_teethcheck_ygxtshb = $scope.order_teethcheck_ygxtshb;
			faceStatic.order_teethcheck_ygxtxha = $scope.order_teethcheck_ygxtxha;
			faceStatic.order_teethcheck_ygxtxhb = $scope.order_teethcheck_ygxtxhb;
			faceStatic.order_teethcheck_ygkda = $scope.order_teethcheck_ygkda;
			faceStatic.order_teethcheck_ygkdb = $scope.order_teethcheck_ygkdb;
			faceStatic.order_teethcheck_wilsonqxa = $scope.order_teethcheck_wilsonqxa;
			faceStatic.order_teethcheck_wilsonqxb = $scope.order_teethcheck_wilsonqxb;
			faceStatic.order_teethcheck_zcmya = $scope.order_teethcheck_zcmya;
			faceStatic.order_teethcheck_zcmyb = $scope.order_teethcheck_zcmyb;
			faceStatic.order_teethcheck_zcmyc = $scope.order_teethcheck_zcmyc;
			faceStatic.order_teethcheck_ycmya = $scope.order_teethcheck_ycmya;
			faceStatic.order_teethcheck_ycmyb = $scope.order_teethcheck_ycmyb;
			faceStatic.order_teethcheck_ycmyc = $scope.order_teethcheck_ycmyc;
			faceStatic.order_teethcheck_zcjya = $scope.order_teethcheck_zcjya;
			faceStatic.order_teethcheck_zcjyb = $scope.order_teethcheck_zcjyb;
			faceStatic.order_teethcheck_zcjyc = $scope.order_teethcheck_zcjyc;
			faceStatic.order_teethcheck_ycjya = $scope.order_teethcheck_ycjya;
			faceStatic.order_teethcheck_ycjyb = $scope.order_teethcheck_ycjyb;
			faceStatic.order_teethcheck_ycjyc = $scope.order_teethcheck_ycjyc;
			faceStatic.order_teethcheck_speeqxa = $scope.order_teethcheck_speeqxa;
			faceStatic.order_teethcheck_speeqxb = $scope.order_teethcheck_speeqxb;
			faceStatic.order_teethcheck_speeqxc = $scope.order_teethcheck_speeqxc;
			faceStatic.order_teethcheck_sfh = $scope.order_teethcheck_sfh;
			faceStatic.order_teethcheck_sfg = $scope.order_teethcheck_sfg;
			faceStatic.order_teethcheck_qykh = $scope.order_teethcheck_qykh;
			faceStatic.order_teethcheck_qyfha = $scope.order_teethcheck_qyfha;
			faceStatic.order_teethcheck_qyfhb = $scope.order_teethcheck_qyfhb;
			faceStatic.order_teethcheck_sqyzja = $scope.order_teethcheck_sqyzja;
			faceStatic.order_teethcheck_sqyzjb = $scope.order_teethcheck_sqyzjb;
			faceStatic.order_teethcheck_sqyzjc = $scope.order_teethcheck_sqyzjc;
			faceStatic.order_teethcheck_qyyw = $scope.order_teethcheck_qyyw;
			faceStatic.order_teethcheck_dsmy = $scope.order_teethcheck_dsmy;
			faceStatic.order_teethcheck_hdxyzba = $scope.order_teethcheck_hdxyzba;
			faceStatic.order_teethcheck_hdxyzbb = $scope.order_teethcheck_hdxyzbb;
			faceStatic.order_teethcheck_fzya = $scope.order_teethcheck_fzya;
			faceStatic.order_teethcheck_fzyb = $scope.order_teethcheck_fzyb;
			faceStatic.order_teethcheck_nmbb = $scope.order_teethcheck_nmbb;
			faceStatic.order_teethcheck_qtkqwt = $scope.order_teethcheck_qtkqwt;
		};

	}

})();