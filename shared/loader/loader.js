app.directive("loaderComponent", () => {
  return {
    templateUrl: "/shared/loader/loader.html",
    scope: true,
    link: function(scope, element, attrs) {
      loaderController(scope, element, attrs)
    }
  }
});

function loaderComponent(scope, element, attrs) {

  // loaderComponent controller closure
}
