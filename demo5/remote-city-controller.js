function CityController($scope, $http){
    $http.get("/citys").then(function (response) {
        $scope.citys = response.data;
    });
}
