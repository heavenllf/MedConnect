/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-14
 * Time: 下午8:51
 * To change this template use File | Settings | File Templates.
 */
(function(){
    'use strict';

    angular
        .module('mainapp')
        .controller('FaceSmileController', FaceSmileController);

    FaceSmileController.$inject = [ 'OrderCreateService','$location', '$scope'];
    function FaceSmileController(OrderCreateService, $location, $scope) {
            function FaceStaticController( OrderCreateService,$location, $scope) {
        if (OrderCreateService.dataCache.faceSmile != undefined) {
            var faceSmile = OrderCreateService.dataCache.faceSmile;
            $scope.order_faceSmile_fsztlc = faceStatic.order_faceSmile_fsztlc;
            $scope.order_faceSmile_wxztlc = faceStatic.order_faceSmile_wxztlc;
            $scope.order_faceSmile_wxztlyy = faceStatic.order_faceStatic_ztmxl;
            $scope.order_faceSmile_wxztlyy = faceStatic.order_faceSmile_wxztlyy;
            $scope.order_faceSmile_scydfda = faceStatic.order_faceSmile_scydfda;
            $scope.order_faceSmile_scydfdb = faceStatic.order_faceSmile_scydfdb;
            $scope.order_faceSmile_scydfdc = faceStatic.order_faceSmile_scydfdc;
            $scope.order_faceSmile_sepmpxa = faceStatic.order_faceSmile_sepmpxa;
            $scope.order_faceSmile_sepmpxb = faceStatic.order_faceSmile_sepmpxb;
            $scope.order_faceSmile_sepmpxc = faceStatic.order_faceSmile_sepmpxc;
            $scope.order_faceSmile_wxqxa = faceStatic.order_faceSmile_wxqxa;
            $scope.order_faceSmile_wxqxb = faceStatic.order_faceSmile_wxqxb;
            $scope.order_faceSmile_egza = faceStatic.order_faceSmile_egza;
            $scope.order_faceSmile_egzb = faceStatic.order_faceSmile_egzb;
            $scope.order_faceSmile_egzc = faceStatic.order_faceSmile_egzc;
            $scope.order_faceSmile_egya = faceStatic.order_faceSmile_egya;
            $scope.order_faceSmile_egyb = faceStatic.order_faceSmile_egyb;
            $scope.order_faceSmile_egyc = faceStatic.order_faceSmile_egyc;
            $scope.order_faceSmile_mxba = faceStatic.order_faceSmile_mxba;
            $scope.order_faceSmile_mxbb = faceStatic.order_faceSmile_mxbb;
            $scope.order_faceSmile_mxbc = faceStatic.order_faceSmile_mxbc;
            $scope.order_faceSmile_chh = faceStatic.order_faceSmile_chh;
            $scope.order_faceSmile_chqd = faceStatic.order_faceSmile_chqd;
            $scope.order_faceSmile_chb = faceStatic.order_faceSmile_chb;
            $scope.order_faceSmile_xrqxa = faceStatic.order_faceSmile_xrqxa;
            $scope.order_faceSmile_xrqxb = faceStatic.order_faceSmile_xrqxb;
            $scope.order_faceSmile_czbls = faceStatic.order_faceSmile_czbls;
			$scope.order_faceSmile_czblz = faceStatic.order_faceSmile_czblz;
            $scope.order_faceSmile_czblx = faceStatic.order_faceSmile_czblx;
            $scope.order_faceSmile_mxa = faceStatic.order_faceSmile_mxa;
            $scope.order_faceSmile_mxb = faceStatic.order_faceSmile_mxb;
            $scope.order_faceSmile_mxc = faceStatic.order_faceSmile_mxc;
            $scope.order_faceSmile_shfybz = faceStatic.order_faceSmile_shfybz;
            $scope.order_faceSmile_shqd = faceStatic.order_faceSmile_shqd;
            $scope.order_faceSmile_shgd = faceStatic.order_faceSmile_shgd;
            $scope.order_faceSmile_xhfybz = faceStatic.order_faceSmile_xhfybz;
            $scope.order_faceSmile_xhqd = faceStatic.order_faceSmile_xhqd;
            $scope.order_faceSmile_xhfygd = faceStatic.order_faceSmile_xhfygd;
            $scope.order_faceSmile_kxrzzxdyqwza = faceStatic.order_faceSmile_kxrzzxdyqwza;
            $scope.order_faceSmile_kxrzzxdyqwzb = faceStatic.order_faceSmile_kxrzzxdyqwzb;
            $scope.order_faceSmile_kxrzzxdyqwzc = faceStatic.order_faceSmile_kxrzzxdyqwzc;
            $scope.order_faceSmile_bcg = faceStatic.order_faceSmile_bcg;
            $scope.order_faceSmile_hcgs = faceStatic.order_faceSmile_hcgs;
            $scope.order_faceSmile_hcgq = faceStatic.order_faceSmile_hcgq;
            $scope.order_faceSmile_hcgzc = faceStatic.order_faceSmile_hcgzc;
            $scope.order_faceSmile_hbtda = faceStatic.order_faceSmile_hbtda;
            $scope.order_faceSmile_hbtdb = faceStatic.order_faceSmile_hbtdb;
            $scope.order_faceSmile_hbtdc = faceStatic.order_faceSmile_hbtdc;
            $scope.order_faceSmile_xcebrdjda = faceStatic.order_faceSmile_xcebrdjda;
            $scope.order_faceSmile_xcebrdjdb = faceStatic.order_faceSmile_xcebrdjdb;
            $scope.order_faceSmile_ejcd = faceStatic.order_faceSmile_ejcd;
            $scope.order_faceSmile_ejj = faceStatic.order_faceSmile_ejj;


        }

        $scope.storeModelsToService = function() {
            if (OrderCreateService.dataCache.faceSmile == undefined) {
                OrderCreateService.dataCache.faceSmile = {};
            }
            var faceSmile = OrderCreateService.dataCache.faceSmile;
            faceStatic.order_faceSmile_fsztlc = $scope.order_faceSmile_fsztlc;
            faceStatic.order_faceSmile_wxztlc = $scope.order_faceSmile_wxztlc;
            faceStatic.order_faceStatic_ztmxl = $scope.order_faceStatic_ztmxl;
            faceStatic.order_faceSmile_wxztlyy = $scope.order_faceSmile_wxztlyy;
            faceStatic.order_faceSmile_scydfda = $scope.order_faceSmile_scydfda;
            faceStatic.order_faceSmile_scydfdb = $scope.order_faceSmile_scydfdb;
            faceStatic.order_faceSmile_scydfdc = $scope.order_faceSmile_scydfdc;
            faceStatic.order_faceSmile_sepmpxa = $scope.order_faceSmile_sepmpxa;
            faceStatic.order_faceSmile_sepmpxb = $scope.order_faceSmile_sepmpxb;
            faceStatic.order_faceSmile_sepmpxc = $scope.order_faceSmile_sepmpxc;
            faceStatic.order_faceSmile_wxqxa = $scope.order_faceSmile_wxqxa;
            faceStatic.order_faceSmile_wxqxb = $scope.order_faceSmile_wxqxb;
            faceStatic.order_faceSmile_egza = $scope.order_faceSmile_egza;
            faceStatic.order_faceSmile_egzb = $scope.order_faceSmile_egzb;
            faceStatic.order_faceSmile_egzc = $scope.order_faceSmile_egzc;
            faceStatic.order_faceSmile_egya = $scope.order_faceSmile_egya;
            faceStatic.order_faceSmile_egyb = $scope.order_faceSmile_egyb;
            faceStatic.order_faceSmile_egyc = $scope.order_faceSmile_egyc;
            faceStatic.order_faceSmile_mxba = $scope.order_faceSmile_mxba;
            faceStatic.order_faceSmile_mxbb = $scope.order_faceSmile_mxbb;
            faceStatic.order_faceSmile_mxbc = $scope.order_faceSmile_mxbc;
            faceStatic.order_faceSmile_chh = $scope.order_faceSmile_chh;
            faceStatic.order_faceSmile_chqd = $scope.order_faceSmile_chqd;
            faceStatic.order_faceSmile_chb = $scope.order_faceSmile_chb;
            faceStatic.order_faceSmile_xrqxa = $scope.order_faceSmile_xrqxa;
            faceStatic.order_faceSmile_xrqxb = $scope.order_faceSmile_xrqxb;
            faceStatic.order_faceSmile_czbls = $scope.order_faceSmile_czbls;
            faceStatic.order_faceSmile_czblz = $scope.order_faceSmile_czblz;
            faceStatic.order_faceSmile_czblx = $scope.order_faceSmile_czblx;
            faceStatic.order_faceSmile_mxa = $scope.order_faceSmile_mxa;
            faceStatic.order_faceSmile_mxb = $scope.order_faceSmile_mxb;
            faceStatic.order_faceSmile_mxc = $scope.order_faceSmile_mxc;
            faceStatic.order_faceSmile_shfybz = $scope.order_faceSmile_shfybz;
            faceStatic.order_faceSmile_shqd = $scope.order_faceSmile_shqd;
            faceStatic.order_faceSmile_shgd = $scope.order_faceSmile_shgd;
            faceStatic.order_faceSmile_xhfybz = $scope.order_faceSmile_xhfybz;	
            faceStatic.order_faceSmile_xhqd = $scope.order_faceSmile_xhqd;
            faceStatic.order_faceSmile_xhfygd = $scope.order_faceSmile_xhfygd;
            faceStatic.order_faceSmile_kxrzzxdyqwza = $scope.order_faceSmile_kxrzzxdyqwza;
            faceStatic.order_faceSmile_kxrzzxdyqwzb = $scope.order_faceSmile_kxrzzxdyqwzb;
            faceStatic.order_faceSmile_kxrzzxdyqwzc = $scope.order_faceSmile_kxrzzxdyqwzc;
            faceStatic.order_faceSmile_bcg = $scope.order_faceSmile_bcg;
            faceStatic.order_faceSmile_hcgs = $scope.order_faceSmile_hcgs;
            faceStatic.order_faceSmile_hcgq = $scope.order_faceSmile_hcgq;
            faceStatic.order_faceSmile_hcgzc = $scope.order_faceSmile_hcgzc;
            faceStatic.order_faceSmile_hbtda = $scope.order_faceSmile_hbtda;
            faceStatic.order_faceSmile_hbtdb = $scope.order_faceSmile_hbtdb;
            faceStatic.order_faceSmile_hbtdc = $scope.order_faceSmile_hbtdc;
            faceStatic.order_faceSmile_xcebrdjda = $scope.order_faceSmile_xcebrdjda;
            faceStatic.order_faceSmile_xcebrdjdb = $scope.order_faceSmile_xcebrdjdb;
            faceStatic.order_faceSmile_ejcd = $scope.order_faceSmile_ejcd;
            faceStatic.order_faceSmile_ejj = $scope.order_faceSmile_ejj;
        }


    }
}) ();
