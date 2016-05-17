###AngularJS 1 DEMO###

**简介**
> 使用AngularJS开发包含`指令`(以ng-开头)和`表达式`(与 JavaScript 表达式类似)两部分。使用`指令`可以引入业务逻辑，扩展原生HTML的功能；使用`表达式`把MODEL展现到页面。

**第一个AngularJS程序**

``` demo1
<div ng-app=''>
    <label>用户名:</label>
    <input type="text" ng-model="username" />
    Welcome, {{ username }} !
</div>
```

**表达式与过滤器**
> AngularJS 表达式与 JavaScript 类似，差别在于：
> AngularJS 不支持条件判断、循环以及异常等
> AngularJS 表达式支持过滤器
> AngularJS 表达式写在 HTML 代码中

``` demo2(filter)
<div ng-app=''>
    <label>用户名:</label>
    <input type="text" ng-model="username" />

    <label>余额:</label>
    <input type="text" ng-model="balance" />

    Welcome, {{ username }} , you have {{ balance | currency:'RMB '}}!
</div>
```


**控制器**
*引入JavaScript*
>通过controller连接视图和业务逻辑。

```demo3(controller)
<div ng-app='myApp' ng-controller="UserCtrl">
    <label>用户名:</label>
    <input type="text" ng-model="username" />
    Welcome, {{ username }} !
</div>

<script type="text/javascript">
    // create 'myApp' module
    var app = angular.module("myApp", []);
    // create a new Controller with name `UserCtrl`
    app.controller('UserCtrl', function($scope){
        $scope.username = "David";
    });

    // 使用自定义过滤器(过滤器中也可以使用Service) 
    app.filter("appendYuan", ['$http', function($http){
        return function(item) {
            return item + "元";
        };
    }]);
</script>
```

**模块与作用域**
> angular.module() 函数创建了一个模块，在 AngularJS 应用中作为容器，通常包含控制器等程序块。$scope作用域对象作为视图和控制器之间的沟通纽带。

*分离 HTML，模块和控制器等 JS*
```demo4
<body ng-app='myApp' ng-init="name='AngularDemo'">
    <div>app name: {{ name }}</div>

    <div ng-controller="CityCtrl">

        <label>城市列表 {{ name }}:</label>
        <ul>
            <li ng-repeat="name in citys"> {{ name }} </li>
        </ul>
    </div>
</body>

--controller.js
function CityController($scope){
    $scope.name = 'cityModel';
    $scope.citys = [{
        name : '上海'
    } , {
        name : '北京'
    } , {
        name : '广州'
    }];
}
--app.js
// create 'myApp' module
var app = angular.module("myApp", []);
// create a new Controller with name `CityCtrl`
app.controller('CityCtrl', CityController);
</script>
```

这里的三个 `name` 分布在三个不同的作用域(分别是ng-app`根作用域`, ng-controller 和 ng-repeat)

**Service**
> Service封装了通用操作和业务逻辑。

``` demo5 remote-city-controller.js
function CityController($scope, $http){
    $http.get("/citys").then(function (response) {
        $scope.citys = response.data;
    });
}
```

``` 创建自定义 Service 并连接到应用
app.service('_calcService', function() {
    this.sum = function () {
        var t = 0;
        var (var i = 1, len = arguments.length - 1; i < len; i++) {
            t += arguments[i] ? arguments[i] : 0;
        }
        return t;
    };
});

calc.js
function CalcController($scope, _calcService) {
    $scope.total = 0;

    $scope.calc = function() {
        $scope.total = _calcService.sum($scope.num1, $scope.num2, $scope.num3);
    }
}

calc.html
<div ng-controller='CalcCtrl'>
    <input type="text" ng-model="num1" ng-change="calc()" /> +
    <input type="text" ng-model="num1" ng-change="calc()" /> +
    <input type="text" ng-model="num2" ng-change="calc()" /> =
    {{ total }}
</div>
```

**表单、组件、事件、验证*

```demo6
<div ng-app="myApp" ng-controller="UserFormCtrl">
    <form action="#" method="POST" class="form-horizontal" name="userForm" novalidate>
        <div class="form-group">
            <label>用户名</label>
            <input type="text" ng-model="username" required />
            <span class="aler-warning" ng-show="userForm.username.$dirty && userForm.username.$invalid">
                <span ng-show="userForm.username.$error.required">用户名必填</span>
            </span>
        </div>
        <div class="form-group">
            <label>手机号</label>
            <input type="text" ng-model="mobile" ng-required="true" 
                pattern="1[0-9]{10}"
                ng-pattern="/^1[0-9]{10}$/" />
            <span class="aler-warning" ng-show="userForm.mobile.$dirty && userForm.mobile.$invalid">
                <span ng-show="userForm.mobile.$error.required">手机号必填</span>
                <span ng-show="userForm.mobile.$error.pattern">非法手机号</span>
            </span>
        </div>
        <input type="button" ng-click="show()" />
    </form>
</div>
```

**路由**

> 管理 URL 与视图的映射关系。

```
// 假设我们有两个页面：产品列表页和产品详情页；点击产品列表页的产品名称可以跳转到产品详情页

// http://localhost:8080/#/product_list
// product_list.html
<div ng-controller="ProductListController">
    <caption>产品列表</caption>
    <table>
        <thead>
            <tr>
                <td>编号</td>
                <td>名称</td>
                <td>价格</td>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="product in list_datas">
                <td>{{ $index + 1 }}</td>
                <td><a href="#/product/{{ product.id}}">{{ product.name }}</td>
                <td>{{ product.price | currency | appendYuan }}</td>
            </tr>
        </tbody>
    </table>
</div>

// product_list.js
function ProductListController($scope){
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
}

// http://localhost:8080/#/product/:id
// product.html
<div ng-controller="ProductController">
    <div>
        <label>产品名称</label>
        <div>{{ product.name }}</div>
    </div>
    <div>
        <label>产品价格</label>
        <div>{{ product.price | currency }}</div>
    </div>
</div>

// product.js
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


// app.js
angular.module("myApp", ['ngRoute'])
    .controller("ProductListController", ProductListController)
    .controller("ProductController", ProductController)

    .filter("appendYuan", [function(){
        return function(item) {
            return item + "元";
        }
    }]);

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when("/products", {templateUrl: "product_list.html", controller : 'ProductListController'})
        .when("/product/:id", {templateUrl: "product.html", controller : 'ProductController'})
        .otherwise({redirectTo: '/products'});
    }]);

// index.html(route管理的视图都会展示到ng-view里)
<div ng-view>
</div>
```

**ui-router**



