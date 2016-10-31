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

weatherApp.controller ('forecastController', ['$scope', '$resource' , 'cityService' , function($scope, $resource , cityService){
    
    $scope.city = cityService.city;
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    
    $scope.weatherResults = $scope.weatherAPI.get({q: $scope.city, appid: 'bec4568ec8271e015c30f35a4250b62d'});
    
    console.log($scope.weatherResults);
    
}]);