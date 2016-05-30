app.controller("writeController", ["$scope", "$http", "$location",  function ($scope, $http, $location) {
     // alert("writeController");  
      $scope.writeTodo = function(title) { 
          alert(title);
          var todo = {"title":title, "end":false}; 
          var promise = $http({
              url: "https://api.mlab.com/api/1/databases/angular/collections/todos",
              method: "POST",
              params: {
                  "apiKey": "0m3TAU3qpXHvc9LRN5JgYSCuZbvKS5N6"
              },
              data : todo //서버로 넘길 데이터
          });

          promise.error(function (data, status, header, config) {
              alert("error : " + status);
               $scope.loader = false;
          });
          promise.success(function (data, status, header, config) {
//              alert(data);  
              $location.path("/todo");
          }); 
      }
       $scope.title = ""; 
}]);