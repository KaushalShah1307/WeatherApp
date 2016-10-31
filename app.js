// Module declaration
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Routes declaration
weatherApp.config (function($routeProvider){
    
   $routeProvider
   
        .when ('/', {
       
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
   })
   
        .when ('/forecast', {
       
            templateUrl: 'pages/forceast.htm',
            controller: 'forecastController'
   })
    
});


// Controllers declaration
weatherApp.controller ('homeController', ['$scope', function($scope){
    
    
}]);

weatherApp.controller ('forecastController', ['$scope', function($scope){
    
    
}]);