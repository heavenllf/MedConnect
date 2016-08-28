(function() {
    'use strict';
    angular.module('app')
        .controller('FaceStaticController', FaceStaticController);
    FaceStaticController.$inject = ['OrderCreateService', '$location', '$scope', '$rootScope'];

    function FaceStaticController(OrderCreateService, $location, $scope, $rootScope) {
        if (OrderCreateService.dataCache.faceStatic != undefined) {
            var faceStatic = OrderCreateService.dataCache.faceStatic;
            $scope.order_faceStatic_ztmx = faceStatic.order_faceStatic_ztmx;
            $scope.order_faceStatic_xmbgd = faceStatic.order_faceStatic_xmbgd;
            $scope.order_faceStatic_rzgd = faceStatic.order_faceStatic_rzgd;
            $scope.order_faceStatic_kjgdz = faceStatic.order_faceStatic_kjgdz;
            $scope.order_faceStatic_kjgdy = faceStatic.order_faceStatic_kjgdy;
            $scope.order_faceStatic_mxczbls = faceStatic.order_faceStatic_mxczbls;
            $scope.order_faceStatic_mxczblx = faceStatic.order_faceStatic_mxczblx;
            $scope.order_faceStatic_cwfbh = faceStatic.order_faceStatic_cwfbh;
            $scope.order_faceStatic_ncjj = faceStatic.order_faceStatic_ncjj;
            $scope.order_faceStatic_ykd = faceStatic.order_faceStatic_ykd;
            $scope.order_faceStatic_byjd = faceStatic.order_faceStatic_byjd;
            $scope.order_faceStatic_wczewcy = faceStatic.order_faceStatic_wczewcy;
            $scope.order_faceStatic_wckd = faceStatic.order_faceStatic_wckd;
            $scope.order_faceStatic_xejkd = faceStatic.order_faceStatic_xejkd;
            $scope.order_faceStatic_tkjj = faceStatic.order_faceStatic_tkjj;
            $scope.order_faceStatic_kjkd = faceStatic.order_faceStatic_kjkd;
            $scope.order_faceStatic_dcxpj = faceStatic.order_faceStatic_dcxpj;
            $scope.order_faceStatic_shdcx = faceStatic.order_faceStatic_shdcx;
            $scope.order_faceStatic_seyghzx = faceStatic.order_faceStatic_seyghzx;
            $scope.order_faceStatic_xhdcx = faceStatic.order_faceStatic_xhdcx;
            $scope.order_faceStatic_xeyghzzlh = faceStatic.order_faceStatic_xeyghzzlh;
            $scope.order_faceStatic_xedcx = faceStatic.order_faceStatic_xedcx;
            $scope.order_faceStatic_hdcx = faceStatic.order_faceStatic_hdcx;
            $scope.order_faceStatic_zzlhhszmcy = faceStatic.order_faceStatic_zzlhhszmcy;
            $scope.order_faceStatic_zchpgd = faceStatic.order_faceStatic_zchpgd;
            $scope.order_faceStatic_ychpgd = faceStatic.order_faceStatic_ychpgd;
            $scope.order_faceStatic_sepm = faceStatic.order_faceStatic_sepm;
            $scope.order_faceStatic_bkdcx = faceStatic.order_faceStatic_bkdcx;
            $scope.order_faceStatic_bzgpq = faceStatic.order_faceStatic_bzgpq;
            $scope.order_faceStatic_xbjfdb = faceStatic.order_faceStatic_xbjfdb;

            $scope.patientinfo = $rootScope.patientinfo;
        }

        $scope.storeModelsToService = function() {
            if (OrderCreateService.dataCache.faceStatic == undefined) {
                OrderCreateService.dataCache.faceStatic = {};
            }
            var faceStatic = OrderCreateService.dataCache.faceStatic;
            faceStatic.order_faceStatic_ztmx = $scope.order_faceStatic_ztmx;
            faceStatic.order_faceStatic_xmbgd = $scope.order_faceStatic_xmbgd;
            faceStatic.order_faceStatic_rzgd = $scope.order_faceStatic_rzgd;
            faceStatic.order_faceStatic_kjgdz = $scope.order_faceStatic_kjgdz;
            faceStatic.order_faceStatic_kjgdy = $scope.order_faceStatic_kjgdy;
            faceStatic.order_faceStatic_mxczbls = $scope.order_faceStatic_mxczbls;
            faceStatic.order_faceStatic_mxczblx = $scope.order_faceStatic_mxczblx;
            faceStatic.order_faceStatic_cwfbh = $scope.order_faceStatic_cwfbh;
            faceStatic.order_faceStatic_ncjj = $scope.order_faceStatic_ncjj;
            faceStatic.order_faceStatic_ykd = $scope.order_faceStatic_ykd;
            faceStatic.order_faceStatic_byjd = $scope.order_faceStatic_byjd;
            faceStatic.order_faceStatic_wczewcy = $scope.order_faceStatic_wczewcy;
            faceStatic.order_faceStatic_wckd = $scope.order_faceStatic_wckd;
            faceStatic.order_faceStatic_xejkd = $scope.order_faceStatic_xejkd;
            faceStatic.order_faceStatic_tkjj = $scope.order_faceStatic_tkjj;
            faceStatic.order_faceStatic_kjkd = $scope.order_faceStatic_kjkd;
            faceStatic.order_faceStatic_dcxpj = $scope.order_faceStatic_dcxpj;
            faceStatic.order_faceStatic_shdcx = $scope.order_faceStatic_shdcx;
            faceStatic.order_faceStatic_seyghzx = $scope.order_faceStatic_seyghzx;
            faceStatic.order_faceStatic_xhdcx = $scope.order_faceStatic_xhdcx;
            faceStatic.order_faceStatic_xeyghzzlh = $scope.order_faceStatic_xeyghzzlh;
            faceStatic.order_faceStatic_xedcx = $scope.order_faceStatic_xedcx;
            faceStatic.order_faceStatic_hdcx = $scope.order_faceStatic_hdcx;
            faceStatic.order_faceStatic_zzlhhszmcy = $scope.order_faceStatic_zzlhhszmcy;
            faceStatic.order_faceStatic_zchpgd = $scope.order_faceStatic_zchpgd;
            faceStatic.order_faceStatic_ychpgd = $scope.order_faceStatic_ychpgd;
            faceStatic.order_faceStatic_sepm = $scope.order_faceStatic_sepm;
            faceStatic.order_faceStatic_bkdcx = $scope.order_faceStatic_bkdcx;
            faceStatic.order_faceStatic_bzgpq = $scope.order_faceStatic_bzgpq;
            faceStatic.order_faceStatic_xbjfdb = $scope.order_faceStatic_xbjfdb;

        };

    }
})();