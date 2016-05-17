// create 'myApp' module
var app = angular.module("myApp", ['ngRoute']);
// create a new Controller with name `CityCtrl`
app.controller('UserFormCtrl', UserFormCtrl)
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when("/user", {templateUrl: "edit_user.html", controller : 'UserFormCtrl'})
        .when("/user/:id", {templateUrl: "edit_user.html", controller : 'UserFormCtrl'})
        .otherwise({redirectTo: '/user'});
    }]);
