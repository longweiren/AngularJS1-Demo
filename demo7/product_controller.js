function ProductController($scope, $routeParams){
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

    $scope.product = $scope.list_datas.filter(function(item) {
        return item.id == $routeParams.id;
    })[0];
}
