function UserController($scope){
    var cities = [{
      name : '北京',
      code : 'bj'
    } , {
      name : '上海',
      code : 'sh'
    } , {
      name : '广州',
      code : 'gz'
    } , {
      name : '深圳',
      code : 'sz'
    } , {
      name : '天津',
      code : 'tj'
    }];

    $scope.user = {
        name : 'David',
        gender : 'male',
        isLogin : 'N',
        city : cities[1]
    };
}
