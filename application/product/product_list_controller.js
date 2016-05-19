function ProductListController($scope, $http){
    /*
    $scope.list_datas= [{
        id : 1,
        name : '黄瓜',
        price : 3.9
    } , {
        id : 2,
        name : '香蕉',
        price : 9.9
    } , {
        id : 3,
        name : '西红柿',
        price : 2.9
    }];
    */
    $http.get("http://localhost:8888/products/").then(function (response) {
        $scope.list_datas = response.data;
    });
}
