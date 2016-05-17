angular.module("myApp", ['ngRoute'])
    .controller("ProductListController", ProductListController)
    .controller("ProductController", ProductController)

    .filter("appendYuan", [function(){
        return function(item) {
            return item + "元";
        }
    }])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when("/products", {templateUrl: "product_list.html", controller : 'ProductListController'})
        .when("/product/:id", {templateUrl: "product.html", controller : 'ProductController'})
        .otherwise({redirectTo: '/products'});
    }]);
