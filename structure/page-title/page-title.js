app.directive("pageTitleComponent", () => {
  return {
    templateUrl: "/structure/page-title/page-title.html",
    scope: true,
    link: function(scope, element, attrs) {

      scope.title = attrs.title;
      scope.caption = attrs.caption;

    }
  }
});
