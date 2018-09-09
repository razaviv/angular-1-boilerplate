app.directive("asideComponent", () => {
  return {
    templateUrl: "/structure/aside/aside.html",
    scope: true,
    link: function(scope, element, attrs) {
      asideComponent(scope, element, attrs)
    }
  }
});

function asideComponent(scope, element, attrs) {

  // asideComponent controller closure
}
