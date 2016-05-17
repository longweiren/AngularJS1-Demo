function CalcController($scope, _calcService) {
    $scope.total = 0;

    $scope.calc = function() {
        $scope.total = _calcService.sum($scope.num1, $scope.num2, $scope.num3);
    }
}
