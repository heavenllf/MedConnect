(function() {
    'use strict';
    angular
        .module('app')
        .controller('QueryPatientController', QueryPatientController);

    QueryPatientController.$inject = ['$rootScope', '$scope', '$http', '$state', 'NgTableParams', 'OrderCreateService'];

    function QueryPatientController($rootScope, $scope, $http, $state, NgTableParams,OrderCreateService) { //ngTableParams => NgTableParams
        var tableData = []

        $scope.selectedRow = null;
        $scope.setClickedRow = function(index) {
            $scope.selectedRow = index;
        };

        $scope.editOneCheck = function(index) {
            // $state.go('app.orderCreate');
            var checkUID = $scope.tableParams.data[index].checkuid;
            OrderCreateService.getCheckDataFromServer(checkUID);
        };       

        $scope.deleterow = function(index) {
            if (confirm("确认删除该记录吗？" + index)) {
                $http({
                    url: 'DeleteOneCheckActor',
                    method: 'POST',
                    data: {
                        checkUID: $scope.tableParams.data[index].checkuid
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                })
                    .then(function(response) {
                        if (response.success) {

                        } else {

                        }
                    });
            }
            $scope.tableParams.data.splice(index,1);

        }
        //Table configuration
        $scope.tableParams = new NgTableParams({
            page: 1,
            count: 10
        }, {
            total: tableData.length,
            //Returns the data for rendering
            getData: function(params) {
                var age = $scope.age;
                var startTime = $scope.startTime;
                var endTime = $scope.endTime;
                var patientName = $scope.patientName;
                var doctorUID = $rootScope.userInfo.doctorUID;

                $http({
                    url: 'QueryPatientsActor',
                    method: 'GET',
                    params: {
                        age: age,
                        startTime: startTime,
                        endTime: endTime,
                        patientName: patientName,
                        doctorUID: doctorUID,
                    }
                }).then(function(response) {
                    tableData = response.data.patients;
                    // $defer.resolve(tableData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    $scope.tableParams.data = tableData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    params.total(tableData.length);
                    // $scope.data = tableData;
                });
                // $http.get('data.json').then(function(response) {
                //     tableData = response.data.patient;
                //     // $defer.resolve(tableData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                //     $scope.tableParams.data = tableData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                //     params.total(tableData.length);
                //     // $scope.data = tableData;
                // });
            }
        });
    }

})();