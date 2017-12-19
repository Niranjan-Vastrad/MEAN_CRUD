var app = angular.module('employeeApp',[]);
app.controller('manageEmployees',function($scope,$http){
    $scope.employee = {};
    $scope.edit = false;
    $scope.getEmployees = function(){
        $http.get('/api/employee').then(function(response){
        $scope.myapp = response.data.employees;
    });
    }
     $scope.getEmployees();
    $scope.editEmployee = function(emp){
      $scope.employee = angular.copy(emp);
      var date = new Date();
      $scope.employee.age = date.getFullYear() -  parseInt($scope.employee.dob.split('/')[2]);
       $scope.edit = true;
    }
    $scope.deleteEmployee = function(id){
        $http.get('/api/employee/'+id).then(function(response){
        $scope.getEmployees();
        
    });
    }
    $scope.updateEmployee = function(id){
        $http.post('/api/employee/'+id,$scope.employee).then(function(response){
            if(response.data.message=='Success'){
                $scope.employee = {};
                $scope.edit = false;
                $scope.getEmployees();
            }
        })

    }
    $scope.addEmployee = function(){
        $http.post('/api/employee',$scope.employee).then(function(response){
            if(response.data.message=='Success'){
                $scope.employee = {};
                $scope.getEmployees();
            }
        })
    }
    $("#dob").focusout(function(){
      var dob = $(this).val().split('/')[2];
      var date = new Date();
      if($scope.employee!=undefined){
        $scope.employee.dob = $(this).val();
          $scope.employee.age = date.getFullYear() - dob;
      } else {
        $scope.employee={};
        $scope.employee.dob = $(this).val();
        $scope.employee.age= date.getFullYear() - dob;
      }
      $scope.$apply();
    });
    $('.input-group.date').datepicker({
    });
    $("span.input-group-addon").on('click',function(){
        $("#dob").focus();
    })
});
