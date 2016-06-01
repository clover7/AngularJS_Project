  app.controller("todoController", ["$scope", "$http", function ($scope, $http) {
//      alert("todoController"); 
 
       $scope.deleteTodo = function(todo){
          //alert(todo._id.$oid);
           var promise = $http({
              url: "https://api.mlab.com/api/1/databases/angular/collections/todos/"+todo._id.$oid,
              method: "DELETE",
              params: {
                  "apiKey": "0m3TAU3qpXHvc9LRN5JgYSCuZbvKS5N6"
              } 
          });

          promise.error(function (data, status, header, config) {
              alert("error : " + status + " /" + data);
               $scope.loader = false;
          });
          promise.success(function (data, status, header, config) {
//              alert(data);
            $scope.todos = data;
            $scope.loader = true;
            getTodos();
              
          });
      }
      //ui상에서 호출할 필요 없으므로.

      $scope.updateTodo = function(todo){
          var promise = $http({
                  url: "https://api.mlab.com/api/1/databases/angular/collections/todos/"+todo._id.$oid,
              method: "PUT",
              params:{
                  "apiKey": "0m3TAU3qpXHvc9LRN5JgYSCuZbvKS5N6"
              },
              data:todo
          });

          promise.error(function(data, status, header, config){
              alert("error :" + status + " / "+ data);
          });
          promise.success(function(data, status, header, config){
              getTodos();
          });

      }
      function getTodos() {
          $scope.todos = [];
          $scope.loader = false;
          var promise = $http({
              url: "https://api.mlab.com/api/1/databases/angular/collections/todos",
              method: "GET",
              params: {
                  "apiKey": "0m3TAU3qpXHvc9LRN5JgYSCuZbvKS5N6"
              }
          });

          promise.error(function (data, status, header, config) {
              alert("error : " + status + " /" + data);
               $scope.loader = false;
          });
          promise.success(function (data, status, header, config) {
              $scope.loader = true;
              $scope.todos = data;
          }); 
      }

      getTodos();
     
}]); 
