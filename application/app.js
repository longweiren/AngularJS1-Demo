angular.module("myApp", ['ui.router'])
    .controller("ProductListController", ProductListController)
    .controller("ProductController", ProductController)
    .controller("UserController", UserController)

    .filter("dictTrans", [function(){
        return function(item, dict) {
            var dictTransfer = {
                'gender' : function(value) {
                    return (value=="male") ? "男" : "女";
                }
            };
            return dictTransfer[dict](item);
        }
    }])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $stateProvider.state('products', {
            url : "/products",
            templateUrl : "product/product_list.html",
            controller  : "ProductListController"
        })
        .state('products.detail', {
            url : '/:id',
            templateUrl : "product/product.html",
            controller  : "ProductController"
        })
        .state('users', {
            url : '/users',
            templateUrl : "user/user.html",
            controller  : "UserController"
        });
    }]);
