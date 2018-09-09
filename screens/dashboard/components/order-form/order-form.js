app.directive("orderFormComponent", ($rootScope) => {
  return {
    templateUrl: "/screens/dashboard/components/order-form/order-form.html",
    scope: true,
    link: function(scope, element, attrs) {

      scope.order = {};
      scope.errors = {};

      scope.send = function() {
        if (!scope.order.startDate)
          scope.errors.startDate = "Please fill start date";
        if (!scope.order.endDate)
          scope.errors.endDate = "Please fill end date";
        if (scope.order.startDate && scope.order.endDate)
          scope.successfullySent = true;
      };

    }
  }
});
