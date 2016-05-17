##### 指令

`ng-app`
> 定义AnglarJS应用程序

`ng-bind`
> 绑定应用程序表达式数据、模型数据(text)到HTML元素。
> <div ng-init="name='David'">
>   <span ng-bind="name"></span>
> </div>

`ng-bind-html`
> 以安全方式绑定应用程序表达式数据、模型数据(html)到HTML元素。会去除危险代码，只留下标签以及标签里的值。使用ng-bind-html需要引入ngSanitize模块(angular-sanitize.js)
> var app = angular.module('myApp', ['ngSanitize']);
> app.controller('UserController', function($scope, $sce) {
>   // ng-bind-html节点 使用$sanitize服务自动编译如下内容
>   $scope.custHtml = '<div style="background-color: #2255aa">' +
>       '<button onclick="alert(123);" value="Show"></button>' +
>       '</div>';
>   
>   // $sce为内置服务，使用$sce服务的trustAsHtml编译原始内容
>   $scope.trustHtml = $sce.trustAsHtml($scope.custHtml);
> });
> 
> <div>
>   <!--使用$sanitize自动对custHtml进行净化（不会保留属性）-->
>   <span ng-bind-html="custHtml"></span>
>   
>   <!--字符串填充，原样输出-->
>   <span ng-bind="custHtml"></span>
>   
>   <!--使用内置$sce服务净化，不再经过$sanitize服务净化（会保留属性）-->
>   <span ng-bind-html="trustHtml"></span>
> </div>

`ng-bind-template`
> 用表达式的值填充HTML元素. 
> <div ng-bind-template="expression"></div>

`ng-checked`
> 设置checked属性。expression 返回 true 时，元素被选中。
> <input type="checkbox|radio" ng-focus="expression" />

`ng-class`
> 设置元素class属性。expression可以是字符串、对象、数组。对象的 key 是 boolean 值，当对象的 key 为 true，value会添加到 class 属性；数组元素可以是字符串或对象
> <input type="text" ng-class="expression" />

`ng-class-even`
> 设置偶数行元素class属性。

`ng-class-odd`
> 设置奇数行元素class属性。

`ng-cloak`
> 用于防止 AngularJS 代码未加载完而出现的问题。
> <div ng-cloak>{{ username }} </div>
> 当AngularJS 代码未加载完成时，加载上述代码时可能在页面显示 {{ username }} 表达式，等代码加载完成后，页面内容又更改为 username 实际内容，给客户造成页面闪烁效果。使用 ng-cloak 指令可以防止闪烁发生。

`ng-controller`
> 定义元素的控制器对象


`ng-csp`
> 修改 AngularJS 中关于 eval 的行为方式及内联样式

`ng-disabled`
> 元素是否禁用
> <input type="button" ng-disabled="expression"/>

`ng-form`


`ng-hide`
> 是否隐藏元素
> <input type="text" ng-hide="expression" />

`ng-href`
> 设定 a 标签链接

`ng-if`
> 如果条件为false，移除HTML元素
> <input type="text" ng-if="expression"/>

`ng-include`
> 包含 html  文件

`ng-init`
> 定义初始化值

`ng-jq`
> 定义应用中必须使用到的库， 如：jQuery

`ng-list`
> 文本和数组相互转换。separator 默认为逗号
> <input ng-model="arrays" ng-list="separator" />

`ng-model`
> 绑定 model 数据

`ng-model-options`
> 指定绑定数据到 model 的触发条件。
> <input type="text" ng-model="name" ng-model-options="{updateOn: 'blur'}" />
> {{ name }}
> 当input组件失去焦点时，{{ name }} 表达式的值才会更新为组件中的值

`ng-non-bindable`
> 元素或子元素不能绑定数据。原样显示表达式。
> <div ng-non-bindable> {{ name }} </div>

`ng-open`
> 设置 detail 标签的 open 属性。少数浏览器支持
> <input type="checkbox" ng-model="showDetails">
> <details ng-open="showDetails">
>    <summary>title or explanatory caption</summary>
>    <p>content</p>
> </details>>

`ng-options`
> 设置 select 组件的 options


`ng-pluralize`
> 根据本地化规则显示信息

`ng-readonly`
> 设置指定元素的 readonly 属性
> <input type="text" ng-readonly="expression" ng-model="name" />

`ng-repeat`
> 定义集合数据的模板

`ng-selected`
> 设置元素的 selected 属性.很少用，直接让 select 组件绑定 model

`ng-show`
> 是否显示原色

`ng-src`
> 指定 img 元素的 src属性。确保 AngularJS 代码执行前不显示图片，要不然如下代码可能会显示值为 `{{ expression }}` 的图片站位，而不是 expression 求值后的 url 地址。
> <img src="{{ expression }}" />

`ng-srcset`
> 指定 img 元素的 srcset 属性。确保 AngularJS代码执行前不显示图片。

`ng-style`
> 设置元素的 style 属性

`ng-switch`
> 规定显示或隐藏子元素的条件。注意和 ng-show ng-hide 的区别
> <select ng-model="site">
>   <option value="google">www.google.com</option>
>   <option value="facebook">www.facebook.com</option>
> </select>
> 
> <div ng-switch="site">
>   <div ng-switch-when="google">google site</div>
>   <div ng-switch-when="facebook">facebook site</div>
>   <div ng-switch-default>default site</div>
> </div>

`ng-transclude`
> 规定填充的目标位置

`ng-value`
> 设置 input 元素的值。不(双向)绑定到 model。
> 

`ng-blur`
> blur 事件。失去焦点时需要执行的表达式
> <input ng-blur="expression" />

`ng-focus`
> focus 事件。获得焦点时需要执行的表达式
> <input ng-focus="expression" />

`ng-change`
> 元素内容改变时需要执行的表达式
> <input ng-change="expression" />

`ng-click`
> 元素点击时需要执行的表达式

`ng-copy`
> copy元素内容时，需要执行的表达式
> <input ng-copy="expression" />

`ng-cut`
> 剪切事件

`ng-dblclick`

`ng-keydown`
`ng-keypress`
`ng-keyup`
`ng-mousedown`
`ng-mouseenter`
`ng-mouseleave`
`ng-mousemove`
`ng-mouseover`
`ng-mouseup`

`ng-paste`
> 粘贴事件

`ng-submit`

##### 过滤器
AngularJS 自带的过滤器包括：currency, filter:"expression", lowercase, uppercase orerBy:"expression"

##### 验证属性

AngularJs验证属性包括 $dirty, $invalid, $error.  
$dirty 表示输入数据已改变   
$invalid 表示输入数据不符合验证规则   
$error 包含具体的验证错误信息



