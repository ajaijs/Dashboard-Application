/**
 * Created by Ajai1 on 9/17/2016.
 */
app.controller('AdminController', function($rootScope, $scope, $location, $http, $timeout,  LoginFactory){
    
    $rootScope.isLogged = false;
    $rootScope.loggedUserName = null;
    $rootScope.loading = false;
    $rootScope.isAdmin = false;
    $scope.showTable= false;
    $scope.searchBox = false;

    function init(){
        if (sessionStorage["username"] == null || sessionStorage["username"] == undefined) {
            $rootScope.isLogged = false;
            $rootScope.loggedUserName = null;
        } else {
            $rootScope.isLogged = true;
            $rootScope.loggedUserName = sessionStorage["username"];
        }
    };

    $scope.loginAsAdminInit = function(){
        if ($scope.login == undefined|| $scope.login.username == undefined || $scope.login.username == "null" || $scope.login.password == undefined || $scope.login.password == "null" ){
            $rootScope.isError = true;
            $rootScope.loading = false;
            $scope.login.username="";
            $scope.login.password="";
            return;
        }
        $rootScope.loading = true;
        $timeout(loginAsAdmin, 2000);
    };

      function loginAsAdmin() {
        var isValid = false;
        isValid = LoginFactory.isAdmin($scope.login.username, $scope.login.password);
            if (isValid){
                $rootScope.isLogged = true;
                sessionStorage["username"] = $scope.login.username;
                $rootScope.loggedUserName = sessionStorage["username"];

                    $location.path('/adminHome');


            }
            else {
                $rootScope.isError = true;
                $rootScope.loading = false;
                $scope.login.username="";
                $scope.login.password="";
            }
    };

    $scope.getEmployeeData = function () {

        $http.get("http://jsonplaceholder.typicode.com/users/")
            .success(function (response) {
                $scope.searchBox = true;
                $scope.showTable = true;
                $scope.datas = (response)
            })
            .error(function (response) {
                console.info("Something Went Wrong.." + response)
            })
    };
    init();
});
