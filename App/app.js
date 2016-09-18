/**
 * Created by Ajai1 on 9/17/2016.
 */

var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {controller:'HomeController',templateUrl:'App/Partials/Home.html'})
        .when('/index',{templateUrl:'Index.html'})
        .when('/about', {controller:'HomeController',templateUrl:'App/Partials/About.html'})
        .when('/contact', {controller:'HomeController',templateUrl:'App/Partials/Contact.html'})
        .when('/adminLogin', {controller:'AdminController',templateUrl:'App/Partials/AdminLogin.html'})
        .when('/employeeLogin', {controller:'EmployeeController', templateUrl:'App/Partials/EmployeeLogin.html'})
        .when('/adminHome', {controller:'AdminController', templateUrl:'App/Partials/AdminHome.html'})
        .when('/employeeHome', {controller:'EmployeeController', templateUrl:'App/Partials/EmployeeHome.html'})
        .otherwise({redirectTo:'/'});
});
