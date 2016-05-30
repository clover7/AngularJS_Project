 
app.controller("movieDetailController",["$scope","movieList", "$routeParams", function($scope, movieList, $routeParams){ 
//    alert("영화상세목록"); 
    var index = $routeParams.pageNo; 
    $scope.movie = movieList[index]; 
}]);

