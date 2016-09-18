/**
 * Created by Ajai1 on 9/17/2016.
 */
app.controller('EmployeeController', function($scope, $rootScope, $location, $http, $timeout, LoginFactory){

    $scope.employeeLoginInit = function(){
        if ($scope.login == undefined|| $scope.login.username == undefined || $scope.login.username == "null" || $scope.login.password == undefined || $scope.login.password == "null" ){
            $rootScope.isError = true;
            $rootScope.loading = false;
            $scope.login.username="";
            $scope.login.password="";
            return;
        }
        $rootScope.loading = true;
        $timeout(employeeLogin, 2000);
    }
    function employeeLogin(){
        $http.get("http://jsonplaceholder.typicode.com/users/")
            .success(function(response){
                validateEmployee(response, $scope.login.username, $scope.login.password);
            })
            .error(function(response){
                console.log("Something Went Wrong" + response);
            })
            .always(function(response){
                console.log(response);
            });
    };
    function validateEmployee(data, username, password){
        var isValidEmployee = false,
            employeeDetails = LoginFactory.isEmployee(data, username, password),
            employeeData = employeeDetails[1];
            isValidEmployee = employeeDetails[0];
        if (isValidEmployee){
            $rootScope.isLogged = true;
            sessionStorage["username"] = $scope.login.username;
            $rootScope.loggedUserName = sessionStorage["username"];
            $rootScope.loading = false;
            $location.path('/employeeHome');
            $rootScope.employeeData = employeeData;

        }
        else {
            $rootScope.isError = true;
            $rootScope.loading = false;
            $scope.login.username="";
            $scope.login.password="";
        }
    }
});