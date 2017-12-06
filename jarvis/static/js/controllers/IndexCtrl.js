console.log("here")
app.controller("IndexCtrl",
  ["$scope", function($scope) {
    $scope.pageTitle = "User Board";

    $('.task-tile').draggable()
}])
