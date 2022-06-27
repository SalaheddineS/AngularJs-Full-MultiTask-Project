var app = angular.module('app', ['ngRoute', 'ngAnimate']);




app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/Home', {
            templateUrl: '../Views/Home.html',
            controller: 'Controller'
        })
        .when('/Directory', {
            templateUrl: '../Views/Directory.html',
            controller: 'Controller'
        })
        .when('/form', {
            templateUrl: '../Views/form.html',
            controller: 'Controller'
        })
        .when('/success', {
            templateUrl: '../Views/success.html',
            controller: 'Controller'
        })
        .otherwise({
            redirectTo: '/Directory'
        })

}]);



app.directive('random', [function() {

    return {
        restrict: 'E',
        scope: {
            liste: '=',
            title: '='
        },
        templateUrl: '../Views/generated.html',
        controller: function($scope) {
            $scope.ale = Math.floor(Math.random() * 4);
        }
    };
}]);


app.controller('Controller', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.Remove = function(par) {
        $scope.tmp.splice($scope.tmp.indexOf(par), 1);
    }

    $scope.orderM = function() { $scope.order = "money"; }

    $scope.orderN = function() { $scope.order = "nom"; }



    $scope.Inserer = function(d1, d2) {
        $scope.tmp.push({
            "nom": d1,
            "money": d2,
            "etat": true,
            "thumbnail": ''
        })
        $scope.data1.nom = "",
            $scope.data1.money = ""
    };

    $http.get('../data/don.json').then(function(x) {
        $scope.tmp = x.data;
    });

    $scope.tmp2 = [];

    $scope.contacters = function(a, b, c, d) {
        $scope.tmp2.push({
            "nom": a,
            "prenom": b,
            "age": c,
            "mail": d
        });
        $location.path('success')
    };
}])