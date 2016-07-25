(function() {
    'use strict';
    angular
        .module('mainapp')
        .controller('QueryPatientController', QueryPatientController);

    QueryPatientController.$inject = ['$scope', '$http', '$state','NgTableParams'];

    function QueryPatientController($scope, $http, $state, NgTableParams) { //ngTableParams => NgTableParams
        var tableData = []

        $scope.selectedRow = null;
        $scope.setClickedRow = function(index) {
            $scope.selectedRow = index;
        }

        $scope.editOneCheck = function() {
            $state.go('orderCreate');
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
                var isNameQuery = $scope.nameQuery;

                $http({
                    url: 'QueryPatientsActor',
                    method: 'GET',
                    params: {
                        'Age': age,
                        'StartTime': startTime,
                        'EndTime': endTime,
                        'PatientName': patientName,
                        'IsNameQuery': isNameQuery
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