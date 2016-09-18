/**
 * Created by Ajai1 on 9/17/2016.
 */
app.controller('HomeController', function($scope, $rootScope, $location){
    $rootScope.isError = false;
    $scope.details = function(){
        if(sessionStorage["username"] === "admin") {
            $location.path('/adminHome');
        } else {
            $location.path('/employeeHome');
        }

    };
    $rootScope.logoutUser = function() {
        $rootScope.isLogged = false;
        $rootScope.loggedUserName = null;
        $rootScope.employeeData = null;
        sessionStorage.clear();
        $location.path('/');
    };
    $rootScope.cancel = function() {
        $rootScope.isError = false;
        $location.path('/');
    };
    function init() {
        var date = new Date();
        $rootScope.yearData = date.getFullYear();
        $rootScope.monthData = date.getMonth() + 1;
        $rootScope.dateData = date.getDate();
    }
    init();
});
