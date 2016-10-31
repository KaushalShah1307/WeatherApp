// Module declaration
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Routes declaration
weatherApp.config(function($routeProvider){
    
   $routeProvider
   
        .when ('/', {
       
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
   })
   
        .when ('/forecast', {
       
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
   })
    
});

// Service declaration
weatherApp.service('cityService', function(){
    
    this.city = 'New York, NY';
    
});


// Controllers declaration
weatherApp.controller ('homeController', ['$scope', 'cityService' , function($scope, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
    
}]);

weatherApp.controller ('forecastController', ['$scope', 'cityService' , function($scope, cityService){
    
    $scope.city = cityService.city;
    
}]);