function CityController($scope, $http){
    $http.get("http://localhost:8888/citys/").then(function (response) {
        $scope.citys = response.data;
    });
}
