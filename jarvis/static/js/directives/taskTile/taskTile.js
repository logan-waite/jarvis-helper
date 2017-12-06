app.directive("taskTile", function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: "/static/js/directives/taskTile/taskTile.html"
  }
})
