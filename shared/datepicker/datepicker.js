app.directive("datepickerComponent", ($rootScope, dateService, parseService) => {
  return {
    templateUrl: "/shared/datepicker/datepicker.html",
    scope: true,
    link: function(scope, element, attrs) {

      console.log(2);

      // The selector in the DOM
      scope.selector = parseService.parse(attrs.selector);

      // Auto close datepicker on select
      scope.autoclose = true;
      if (attrs.autoclose)
        scope.autoclose = parseService.parse(attrs.autoclose);

      // Placeholder
      scope.placeholder = "Choose date";
      if (attrs.placeholder)
        scope.placeholder = parseService.parse(attrs.placeholder);

      // Orientation - where to place the datepicker
      scope.orientation = "right";
      if (attrs.orientation)
        scope.orientation = parseService.parse(attrs.orientation);

      $(function() {
        setTimeout(function () {

          $("." + scope.selector).datepicker({
            format: 'yyyy-mm-dd',
            autoclose: scope.autoclose,
            orientation: scope.orientation,
            templates: {
                leftArrow: '<i class="fa fa-angle-left"></i>',
                rightArrow: '<i class="fa fa-angle-right"></i>'
            }
          }).on("change", function() {
            let value = $("." + scope.selector + " input").val();
            $("." + scope.selector + " input").val(value);
            scope.order[scope.selector] = value;
            delete scope.errors[scope.selector];
            scope.changed();
            scope.$apply();
          });

        }, 200);

        // setTimeout closure
      });

    }
  }
});
