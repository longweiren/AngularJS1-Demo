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
        /*
        $urlRouterProvider.when("/product_list", "/list")
            .when("/product/:id", "/product/:id")
            .otherwise("/");
        */

        $stateProvider.state('products', {
            url : '/list',
            views : {
                'user' : {
                    templateUrl : "user.html",
                    controller  : "UserController"
                },
                'products' : {
                    templateUrl : "product_list.html",
                    controller  : "ProductListController"
                }
            }
        })
        .state('products.detail', {
            url : '/product/:id',
            templateUrl : "product.html",
            controller  : "ProductController"
        })
        .state('products.p', {
            url : '/p/:id',
            template : "<p>product info</p>"
        });
    }]);
