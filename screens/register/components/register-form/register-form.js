app.directive("registerFormComponent", () => {
  return {
    templateUrl: "/screens/register/components/register-form/register-form.html",
    scope: true,
    link: function(scope, element, attrs) {
      registerFormComponent(scope, element, attrs)
    }
  }
});

function registerFormComponent(scope, element, attrs) {

  // registerFormComponent controller closure
}
