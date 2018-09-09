app.directive("headerComponent", () => {
  return {
    templateUrl: "/structure/header/header.html",
    scope: true,
    link: function(scope, element, attrs) {
      headerComponent(scope, element, attrs)
    }
  }
});

function headerComponent(scope, element, attrs) {

  $(function() {
    //  navbar toogler

    $(document).on('click', '.navbar-toggler', function() {

        if ($(this).hasClass('left-sidebar-toggler')) {
          $('body').toggleClass('left-sidebar-hidden');
          resizeWindow();
        }

        if ($(this).hasClass('right-sidebar-toggler')) {
          $('body').toggleClass('right-sidebar-hidden');
          resizeWindow();
        }

        if ($(this).hasClass('mobile-leftside-toggler')) {
          $('body').toggleClass('mobile-leftside-show');
          resizeWindow();
        }

        if ($(this).hasClass('mobile-rightside-toggler')) {
          $('body').toggleClass('mobile-rightside-show');
          resizeWindow();
        }

    });

    // search toggle
    $(document).on('click', '.search-toggle', function() {
      $('.search-container').toggleClass('open');
      $('.custom-search').focus();
    });
  });

  // headerComponent controller closure
}
