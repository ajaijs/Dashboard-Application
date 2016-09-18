/**
 * Created by Ajai1 on 9/17/2016.
 */
app.factory('LoginFactory', function(){
    var obj = {};// The Object which is being returned from the factory
    
    obj.isAdmin = function (username, password){
        var isAdmin = false; // Setting isAdmin variable as False by default
        if (username === "admin" && password === "admin") {
            isAdmin = true;
        }
        return isAdmin;
    };
    obj.isEmployee = function (data, username, password){
      var isEmployee = false,
          dataObj = {"data": data},
          employeeDetails = "";

        $.each(dataObj.data, function (index, value) {
            if($(this)[0].username === username && $(this)[0].email === password) {
                isEmployee = true;
                employeeDetails = $(this)[0];
                
            }
        });
        return [isEmployee, employeeDetails];
    };
    return obj;
});