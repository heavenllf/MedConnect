
(function() {
    'use strict';

    angular
        .module('app')
        .factory('OrderCreateService', OrderCreateService);

    OrderCreateService.$inject = ['$http', '$rootScope', '$state'];

    function OrderCreateService($http, $rootScope, $state) {
        var service = {
            dataCache: {
                checkUID: null
            },
            sendCheckDataToServer: function() {
                var me = this,
                    action;
                if (me.dataCache.checkUID) {
                    action = 'UpdateOneCheckActor';
                } else {
                    action = 'CreateOneCheckActor';
                }
                me.dataCache.doctorUID = $rootScope.userInfo.doctorUID;
                $http({
                    url: action,
                    method: 'POST',
                    data: me.dataCache,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                })
                    .then(function(response) {
                            if (action === 'CreateOneCheckActor') {
                                alert('检查结果保存完毕！');
                                // success
                            } else if (action === 'UpdateOneCheckActor') {
                                alert('检查结果已更新！');
                            }
                        },
                        function(response) { // optional
                            // failed
                        }
                );

            },
            getCheckDataFromServer: function(uid) {
                var me = this;
                $http({
                    url: 'GetOneCheckActor',
                    method: 'GET',
                    params: {
                        checkUID: uid
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                })
                    .then(function(response) {
                            me.dataCache = JSON.parse(response.data.checkContent);
                            $state.go('app.createOrder');
                        },
                        function(response) { // optional
                            // failed
                        }
                );
                me.dataCache.checkUID = uid;
            },
            clearDataCache: function() {
                var me = this;
                me.dataCache = {};
            }
        };

        return service;

    }

})();