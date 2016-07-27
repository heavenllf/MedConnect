(function() {
    'use strict';
    angular.module('mainapp')
        .controller('FaceStaticController', FaceStaticController);
    FaceStaticController.$inject = ['OrderCreateService', '$location', '$scope'];

    function FaceStaticController(OrderCreateService, $location, $scope) {
        if (OrderCreateService.dataCache.faceStatic != undefined) {
            var faceStatic = OrderCreateService.dataCache.faceStatic;
            $scope.order_faceStatic_ztmxs = faceStatic.order_faceStatic_ztmxs;
            $scope.order_faceStatic_ztmxm = faceStatic.order_faceStatic_ztmxm;
            $scope.order_faceStatic_ztmxl = faceStatic.order_faceStatic_ztmxl;
            $scope.order_faceStatic_xmbgd = faceStatic.order_faceStatic_xmbgd;
            $scope.order_faceStatic_rzgd = faceStatic.order_faceStatic_rzgd;
            $scope.order_faceStatic_kjgdz = faceStatic.order_faceStatic_kjgdz;
            $scope.order_faceStatic_kjgdy = faceStatic.order_faceStatic_kjgdy;
            $scope.order_faceStatic_mxczbls = faceStatic.order_faceStatic_mxczbls;
            $scope.order_faceStatic_mxczblx = faceStatic.order_faceStatic_mxczblx;
            $scope.order_faceStatic_cwfbha = faceStatic.order_faceStatic_cwfbha;
            $scope.order_faceStatic_cwfbhb = faceStatic.order_faceStatic_cwfbhb;
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
            $scope.order_faceStatic_xedcxa = faceStatic.order_faceStatic_xedcxa;
            $scope.order_faceStatic_xedcxb = faceStatic.order_faceStatic_xedcxb;
            $scope.order_faceStatic_hdcxa = faceStatic.order_faceStatic_hdcxa;
            $scope.order_faceStatic_hdcxb = faceStatic.order_faceStatic_hdcxb;
            $scope.order_faceStatic_zzlhhszmcy = faceStatic.order_faceStatic_zzlhhszmcy;
            $scope.order_faceStatic_zchpgd = faceStatic.order_faceStatic_zchpgd;
            $scope.order_faceStatic_ychpgd = faceStatic.order_faceStatic_ychpgd;
            $scope.order_faceStatic_sepma = faceStatic.order_faceStatic_sepma;
            $scope.order_faceStatic_sepmb = faceStatic.order_faceStatic_sepmb;
            $scope.order_faceStatic_bkdcxa = faceStatic.order_faceStatic_bkdcxa;
            $scope.order_faceStatic_bkdcxb = faceStatic.order_faceStatic_bkdcxb;
            $scope.order_faceStatic_bkdcxc = faceStatic.order_faceStatic_bkdcxc;
            $scope.order_faceStatic_bzgpqa = faceStatic.order_faceStatic_bzgpqa;
            $scope.order_faceStatic_bzgpqb = faceStatic.order_faceStatic_bzgpqb;
            $scope.order_faceStatic_bzgpqc = faceStatic.order_faceStatic_bzgpqc;
            $scope.order_faceStatic_xbjfda = faceStatic.order_faceStatic_xbjfda;
            $scope.order_faceStatic_xbjfdb = faceStatic.order_faceStatic_xbjfdb;

        }

        $scope.storeModelsToService = function() {
            if (OrderCreateService.dataCache.faceStatic == undefined) {
                OrderCreateService.dataCache.faceStatic = {};
            }
            var faceStatic = OrderCreateService.dataCache.faceStatic;
            faceStatic.order_faceStatic_ztmxs = $scope.order_faceStatic_ztmxs;
            faceStatic.order_faceStatic_ztmxm = $scope.order_faceStatic_ztmxm;
            faceStatic.order_faceStatic_ztmxl = $scope.order_faceStatic_ztmxl;
            faceStatic.order_faceStatic_xmbgd = $scope.order_faceStatic_xmbgd;
            faceStatic.order_faceStatic_rzgd = $scope.order_faceStatic_rzgd;
            faceStatic.order_faceStatic_kjgdz = $scope.order_faceStatic_kjgdz;
            faceStatic.order_faceStatic_kjgdy = $scope.order_faceStatic_kjgdy;
            faceStatic.order_faceStatic_mxczbls = $scope.order_faceStatic_mxczbls;
            faceStatic.order_faceStatic_mxczblx = $scope.order_faceStatic_mxczblx;
            faceStatic.order_faceStatic_cwfbha = $scope.order_faceStatic_cwfbha;
            faceStatic.order_faceStatic_cwfbhb = $scope.order_faceStatic_cwfbhb;
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
            faceStatic.order_faceStatic_xedcxa = $scope.order_faceStatic_xedcxa;
            faceStatic.order_faceStatic_xedcxb = $scope.order_faceStatic_xedcxb;
            faceStatic.order_faceStatic_hdcxa = $scope.order_faceStatic_hdcxa;
            faceStatic.order_faceStatic_hdcxb = $scope.order_faceStatic_hdcxb;
            faceStatic.order_faceStatic_zzlhhszmcy = $scope.order_faceStatic_zzlhhszmcy;
            faceStatic.order_faceStatic_zchpgd = $scope.order_faceStatic_zchpgd;
            faceStatic.order_faceStatic_ychpgd = $scope.order_faceStatic_ychpgd;
            faceStatic.order_faceStatic_sepma = $scope.order_faceStatic_sepma;
            faceStatic.order_faceStatic_sepmb = $scope.order_faceStatic_sepmb;
            faceStatic.order_faceStatic_bkdcxa = $scope.order_faceStatic_bkdcxa;
            faceStatic.order_faceStatic_bkdcxb = $scope.order_faceStatic_bkdcxb;
            faceStatic.order_faceStatic_bkdcxc = $scope.order_faceStatic_bkdcxc;
            faceStatic.order_faceStatic_bzgpqa = $scope.order_faceStatic_bzgpqa;
            faceStatic.order_faceStatic_bzgpqb = $scope.order_faceStatic_bzgpqb;
            faceStatic.order_faceStatic_bzgpqc = $scope.order_faceStatic_bzgpqc;
            faceStatic.order_faceStatic_xbjfda = $scope.order_faceStatic_xbjfda;
            faceStatic.order_faceStatic_xbjfdb = $scope.order_faceStatic_xbjfdb;

        };

    }
})();