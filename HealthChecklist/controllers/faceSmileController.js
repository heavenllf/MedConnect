(function() {
      'use strict';

      angular
            .module('app')
            .controller('FaceSmileController', FaceSmileController);

      FaceSmileController.$inject = ['OrderCreateService', '$location', '$scope'];

      function FaceSmileController(OrderCreateService, $location, $scope) {
            if (OrderCreateService.dataCache.faceSmile != undefined) {
                  var faceSmile = OrderCreateService.dataCache.faceSmile;
                  $scope.order_faceSmile_fsztlc = faceSmile.order_faceSmile_fsztlc;
                  $scope.order_faceSmile_wxztlc = faceSmile.order_faceSmile_wxztlc;
                  $scope.order_faceSmile_wxztlyy = faceSmile.order_faceSmile_wxztlyy;
                  $scope.order_faceSmile_scydfda = faceSmile.order_faceSmile_scydfda;
                  $scope.order_faceSmile_scydfdb = faceSmile.order_faceSmile_scydfdb;
                  $scope.order_faceSmile_scydfdc = faceSmile.order_faceSmile_scydfdc;
                  $scope.order_faceSmile_sepmpxa = faceSmile.order_faceSmile_sepmpxa;
                  $scope.order_faceSmile_sepmpxb = faceSmile.order_faceSmile_sepmpxb;
                  $scope.order_faceSmile_sepmpxc = faceSmile.order_faceSmile_sepmpxc;
                  $scope.order_faceSmile_wxqxa = faceSmile.order_faceSmile_wxqxa;
                  $scope.order_faceSmile_wxqxb = faceSmile.order_faceSmile_wxqxb;
                  $scope.order_faceSmile_egza = faceSmile.order_faceSmile_egza;
                  $scope.order_faceSmile_egzb = faceSmile.order_faceSmile_egzb;
                  $scope.order_faceSmile_egzc = faceSmile.order_faceSmile_egzc;
                  $scope.order_faceSmile_egya = faceSmile.order_faceSmile_egya;
                  $scope.order_faceSmile_egyb = faceSmile.order_faceSmile_egyb;
                  $scope.order_faceSmile_egyc = faceSmile.order_faceSmile_egyc;
                  $scope.order_faceSmile_mxba = faceSmile.order_faceSmile_mxba;
                  $scope.order_faceSmile_mxbb = faceSmile.order_faceSmile_mxbb;
                  $scope.order_faceSmile_mxbc = faceSmile.order_faceSmile_mxbc;
                  $scope.order_faceSmile_chh = faceSmile.order_faceSmile_chh;
                  $scope.order_faceSmile_chqd = faceSmile.order_faceSmile_chqd;
                  $scope.order_faceSmile_chb = faceSmile.order_faceSmile_chb;
                  $scope.order_faceSmile_xrqxa = faceSmile.order_faceSmile_xrqxa;
                  $scope.order_faceSmile_xrqxb = faceSmile.order_faceSmile_xrqxb;
                  $scope.order_faceSmile_czbls = faceSmile.order_faceSmile_czbls;
                  $scope.order_faceSmile_czblz = faceSmile.order_faceSmile_czblz;
                  $scope.order_faceSmile_czblx = faceSmile.order_faceSmile_czblx;
                  $scope.order_faceSmile_mxa = faceSmile.order_faceSmile_mxa;
                  $scope.order_faceSmile_mxb = faceSmile.order_faceSmile_mxb;
                  $scope.order_faceSmile_mxc = faceSmile.order_faceSmile_mxc;
                  $scope.order_faceSmile_shfybz = faceSmile.order_faceSmile_shfybz;
                  $scope.order_faceSmile_shqd = faceSmile.order_faceSmile_shqd;
                  $scope.order_faceSmile_shgd = faceSmile.order_faceSmile_shgd;
                  $scope.order_faceSmile_xhfybz = faceSmile.order_faceSmile_xhfybz;
                  $scope.order_faceSmile_xhqd = faceSmile.order_faceSmile_xhqd;
                  $scope.order_faceSmile_xhfygd = faceSmile.order_faceSmile_xhfygd;
                  $scope.order_faceSmile_kxrzzxdyqwza = faceSmile.order_faceSmile_kxrzzxdyqwza;
                  $scope.order_faceSmile_kxrzzxdyqwzb = faceSmile.order_faceSmile_kxrzzxdyqwzb;
                  $scope.order_faceSmile_kxrzzxdyqwzc = faceSmile.order_faceSmile_kxrzzxdyqwzc;
                  $scope.order_faceSmile_bcg = faceSmile.order_faceSmile_bcg;
                  $scope.order_faceSmile_hcgs = faceSmile.order_faceSmile_hcgs;
                  $scope.order_faceSmile_hcgq = faceSmile.order_faceSmile_hcgq;
                  $scope.order_faceSmile_hcgzc = faceSmile.order_faceSmile_hcgzc;
                  $scope.order_faceSmile_hbtda = faceSmile.order_faceSmile_hbtda;
                  $scope.order_faceSmile_hbtdb = faceSmile.order_faceSmile_hbtdb;
                  $scope.order_faceSmile_hbtdc = faceSmile.order_faceSmile_hbtdc;
                  $scope.order_faceSmile_xcebrdjda = faceSmile.order_faceSmile_xcebrdjda;
                  $scope.order_faceSmile_xcebrdjdb = faceSmile.order_faceSmile_xcebrdjdb;
                  $scope.order_faceSmile_ejcd = faceSmile.order_faceSmile_ejcd;
                  $scope.order_faceSmile_ejj = faceSmile.order_faceSmile_ejj;


            }

            $scope.storeModelsToService = function() {
                  if (OrderCreateService.dataCache.faceSmile == undefined) {
                        OrderCreateService.dataCache.faceSmile = {};
                  }
                  var faceSmile = OrderCreateService.dataCache.faceSmile;
                  faceSmile.order_faceSmile_fsztlc = $scope.order_faceSmile_fsztlc;
                  faceSmile.order_faceSmile_wxztlc = $scope.order_faceSmile_wxztlc;
                  faceSmile.order_faceSmile_wxztlyy = $scope.order_faceSmile_wxztlyy;
                  faceSmile.order_faceSmile_scydfda = $scope.order_faceSmile_scydfda;
                  faceSmile.order_faceSmile_scydfdb = $scope.order_faceSmile_scydfdb;
                  faceSmile.order_faceSmile_scydfdc = $scope.order_faceSmile_scydfdc;
                  faceSmile.order_faceSmile_sepmpxa = $scope.order_faceSmile_sepmpxa;
                  faceSmile.order_faceSmile_sepmpxb = $scope.order_faceSmile_sepmpxb;
                  faceSmile.order_faceSmile_sepmpxc = $scope.order_faceSmile_sepmpxc;
                  faceSmile.order_faceSmile_wxqxa = $scope.order_faceSmile_wxqxa;
                  faceSmile.order_faceSmile_wxqxb = $scope.order_faceSmile_wxqxb;
                  faceSmile.order_faceSmile_egza = $scope.order_faceSmile_egza;
                  faceSmile.order_faceSmile_egzb = $scope.order_faceSmile_egzb;
                  faceSmile.order_faceSmile_egzc = $scope.order_faceSmile_egzc;
                  faceSmile.order_faceSmile_egya = $scope.order_faceSmile_egya;
                  faceSmile.order_faceSmile_egyb = $scope.order_faceSmile_egyb;
                  faceSmile.order_faceSmile_egyc = $scope.order_faceSmile_egyc;
                  faceSmile.order_faceSmile_mxba = $scope.order_faceSmile_mxba;
                  faceSmile.order_faceSmile_mxbb = $scope.order_faceSmile_mxbb;
                  faceSmile.order_faceSmile_mxbc = $scope.order_faceSmile_mxbc;
                  faceSmile.order_faceSmile_chh = $scope.order_faceSmile_chh;
                  faceSmile.order_faceSmile_chqd = $scope.order_faceSmile_chqd;
                  faceSmile.order_faceSmile_chb = $scope.order_faceSmile_chb;
                  faceSmile.order_faceSmile_xrqxa = $scope.order_faceSmile_xrqxa;
                  faceSmile.order_faceSmile_xrqxb = $scope.order_faceSmile_xrqxb;
                  faceSmile.order_faceSmile_czbls = $scope.order_faceSmile_czbls;
                  faceSmile.order_faceSmile_czblz = $scope.order_faceSmile_czblz;
                  faceSmile.order_faceSmile_czblx = $scope.order_faceSmile_czblx;
                  faceSmile.order_faceSmile_mxa = $scope.order_faceSmile_mxa;
                  faceSmile.order_faceSmile_mxb = $scope.order_faceSmile_mxb;
                  faceSmile.order_faceSmile_mxc = $scope.order_faceSmile_mxc;
                  faceSmile.order_faceSmile_shfybz = $scope.order_faceSmile_shfybz;
                  faceSmile.order_faceSmile_shqd = $scope.order_faceSmile_shqd;
                  faceSmile.order_faceSmile_shgd = $scope.order_faceSmile_shgd;
                  faceSmile.order_faceSmile_xhfybz = $scope.order_faceSmile_xhfybz;
                  faceSmile.order_faceSmile_xhqd = $scope.order_faceSmile_xhqd;
                  faceSmile.order_faceSmile_xhfygd = $scope.order_faceSmile_xhfygd;
                  faceSmile.order_faceSmile_kxrzzxdyqwza = $scope.order_faceSmile_kxrzzxdyqwza;
                  faceSmile.order_faceSmile_kxrzzxdyqwzb = $scope.order_faceSmile_kxrzzxdyqwzb;
                  faceSmile.order_faceSmile_kxrzzxdyqwzc = $scope.order_faceSmile_kxrzzxdyqwzc;
                  faceSmile.order_faceSmile_bcg = $scope.order_faceSmile_bcg;
                  faceSmile.order_faceSmile_hcgs = $scope.order_faceSmile_hcgs;
                  faceSmile.order_faceSmile_hcgq = $scope.order_faceSmile_hcgq;
                  faceSmile.order_faceSmile_hcgzc = $scope.order_faceSmile_hcgzc;
                  faceSmile.order_faceSmile_hbtda = $scope.order_faceSmile_hbtda;
                  faceSmile.order_faceSmile_hbtdb = $scope.order_faceSmile_hbtdb;
                  faceSmile.order_faceSmile_hbtdc = $scope.order_faceSmile_hbtdc;
                  faceSmile.order_faceSmile_xcebrdjda = $scope.order_faceSmile_xcebrdjda;
                  faceSmile.order_faceSmile_xcebrdjdb = $scope.order_faceSmile_xcebrdjdb;
                  faceSmile.order_faceSmile_ejcd = $scope.order_faceSmile_ejcd;
                  faceSmile.order_faceSmile_ejj = $scope.order_faceSmile_ejj;
            };

      }
})();