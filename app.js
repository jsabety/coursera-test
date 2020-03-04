(function () {
'use strict';

 var x="hello";

 var MyFirstApp = angular.module('myFirstApp', [])

 MyFirstApp.controller('MyFirstController', function ($scope) {
    $scope.name = "Jerome";
    $scope.sayHello = function () {
        return "Hello Coursera";
    };
});

MyFirstApp.controller('NameCalculatorController', function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displaynumeric = function () {
        var totalNameValue = calculateNumericForString($scope.name); //get total value of characters
        $scope.totalValue = totalNameValue;
    }



    function calculateNumericForString(string) {
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
            totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;

    }

});


})();

