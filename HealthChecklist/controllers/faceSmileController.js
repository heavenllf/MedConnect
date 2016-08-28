(function() {
      'use strict';

      angular
            .module('app')
            .controller('FaceSmileController', FaceSmileController);

      FaceSmileController.$inject = ['OrderCreateService', '$location', '$scope', '$rootScope'];

      function FaceSmileController(OrderCreateService, $location, $scope, $rootScope) {
            if (OrderCreateService.dataCache.faceSmile != undefined) {
                  var faceSmile = OrderCreateService.dataCache.faceSmile;
                  $scope.order_faceSmile_fsztlc = faceSmile.order_faceSmile_fsztlc;
                  $scope.order_faceSmile_wxztlc = faceSmile.order_faceSmile_wxztlc;
                  $scope.order_faceSmile_wxztlyy = faceSmile.order_faceSmile_wxztlyy;
                  $scope.order_faceSmile_scydfd = faceSmile.order_faceSmile_scydfd;
                  $scope.order_faceSmile_sepmpx = faceSmile.order_faceSmile_sepmpx;
                  $scope.order_faceSmile_wxqx = faceSmile.order_faceSmile_wxqx;
                  $scope.order_faceSmile_wxqb = faceSmile.order_faceSmile_wxqxb;
                  $scope.order_faceSmile_egz = faceSmile.order_faceSmile_egz;
                  $scope.order_faceSmile_egy = faceSmile.order_faceSmile_egy;
                  $scope.order_faceSmile_mxb = faceSmile.order_faceSmile_mxb;
                  $scope.order_faceSmile_chh = faceSmile.order_faceSmile_chh;
                  $scope.order_faceSmile_xrqx = faceSmile.order_faceSmile_xrqx;
                  $scope.order_faceSmile_czbls = faceSmile.order_faceSmile_czbls;
                  $scope.order_faceSmile_czblz = faceSmile.order_faceSmile_czblz;
                  $scope.order_faceSmile_czblx = faceSmile.order_faceSmile_czblx;
                  $scope.order_faceSmile_mx = faceSmile.order_faceSmile_mx;
                  $scope.order_faceSmile_shfybz = faceSmile.order_faceSmile_shfybz;
                  $scope.order_faceSmile_xhfybz = faceSmile.order_faceSmile_xhfybz;
                  $scope.order_faceSmile_kxrzzxdyqwz = faceSmile.order_faceSmile_kxrzzxdyqwz;
                  $scope.order_faceSmile_bcg = faceSmile.order_faceSmile_bcg;
                  $scope.order_faceSmile_hcgs = faceSmile.order_faceSmile_hcgs;
                  $scope.order_faceSmile_hbtd = faceSmile.order_faceSmile_hbtd;
                  $scope.order_faceSmile_xcebrdjd = faceSmile.order_faceSmile_xcebrdjd;
                  $scope.order_faceSmile_ejcd = faceSmile.order_faceSmile_ejcd;
                  $scope.order_faceSmile_ejj = faceSmile.order_faceSmile_ejj;

                  $scope.patientinfo = $rootScope.patientinfo;
            }

            $scope.storeModelsToService = function() {
                  if (OrderCreateService.dataCache.faceSmile == undefined) {
                        OrderCreateService.dataCache.faceSmile = {};
                  }
                  var faceSmile = OrderCreateService.dataCache.faceSmile;
                  faceSmile.order_faceSmile_fsztlc = $scope.order_faceSmile_fsztlc;
                  faceSmile.order_faceSmile_wxztlc = $scope.order_faceSmile_wxztlc;
                  faceSmile.order_faceSmile_wxztlyy = $scope.order_faceSmile_wxztlyy;
                  faceSmile.order_faceSmile_scydfd = $scope.order_faceSmile_scydfd;
                  faceSmile.order_faceSmile_sepmpx = $scope.order_faceSmile_sepmpx;
                  faceSmile.order_faceSmile_wxqx = $scope.order_faceSmile_wxqx;
                  faceSmile.order_faceSmile_egz = $scope.order_faceSmile_egz;
                  faceSmile.order_faceSmile_egy = $scope.order_faceSmile_egy;
                  faceSmile.order_faceSmile_mxb = $scope.order_faceSmile_mxb;
                  faceSmile.order_faceSmile_chh = $scope.order_faceSmile_chh;
                  faceSmile.order_faceSmile_xrqx = $scope.order_faceSmile_xrqx;
                  faceSmile.order_faceSmile_czbls = $scope.order_faceSmile_czbls;
                  faceSmile.order_faceSmile_czblz = $scope.order_faceSmile_czblz;
                  faceSmile.order_faceSmile_czblx = $scope.order_faceSmile_czblx;
                  faceSmile.order_faceSmile_mx = $scope.order_faceSmile_mx;
                  faceSmile.order_faceSmile_shfybz = $scope.order_faceSmile_shfybz;
                  faceSmile.order_faceSmile_xhfybz = $scope.order_faceSmile_xhfybz;
                  faceSmile.order_faceSmile_kxrzzxdyqwz = $scope.order_faceSmile_kxrzzxdyqwz;
                  faceSmile.order_faceSmile_bcg = $scope.order_faceSmile_bcg;
                  faceSmile.order_faceSmile_hcgs = $scope.order_faceSmile_hcgs;
                  faceSmile.order_faceSmile_hbtd = $scope.order_faceSmile_hbtd;
                  faceSmile.order_faceSmile_xcebrdjd = $scope.order_faceSmile_xcebrdjd;
                  faceSmile.order_faceSmile_ejcd = $scope.order_faceSmile_ejcd;
                  faceSmile.order_faceSmile_ejj = $scope.order_faceSmile_ejj;
            };

      }
})();