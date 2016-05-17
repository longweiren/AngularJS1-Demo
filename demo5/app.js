// create 'myApp' module
var app = angular.module("myApp", []);
// create a new Controller with name `CityCtrl`
app.controller('CityCtrl', CityController);
app.controller('CalcCtrl', CalcController);

app.service('_calcService', function() {
    this.sum = function () {
        var t = 0;
        for (var i = 0, len = arguments.length; i < len; i++) {
            t += arguments[i] ? +arguments[i] : 0;
        }
        return t;
    };
});
