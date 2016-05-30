
app.controller("movieListController",["$scope","movieList", function($scope, movieList){ 
    $scope.name = "영화등록";    
    $scope.moiveList = movieList;
}]);