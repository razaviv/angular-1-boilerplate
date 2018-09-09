app.directive("footerComponent", () => {
  return {
    templateUrl: "/structure/footer/footer.html",
    scope: true,
    link: function(scope, element, attrs) {
      footerComponent(scope, element, attrs)
    }
  }
});

function footerComponent(scope, element, attrs) {

  $(function() {
    $(document).on('click', '.back-top', function () {
        $("html, body").animate({ scrollTop: 0 }, 200);
        return false;
    });
  });

  // footerComponent controller closure
}
