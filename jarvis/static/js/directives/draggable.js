app.directive("draggable", function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var options = scope.$eval(attrs.draggable);
      console.log(element);
      element.draggable(options);
    }
  }
})
