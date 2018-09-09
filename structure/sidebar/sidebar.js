app.directive("sidebarComponent", () => {
  return {
    templateUrl: "/structure/sidebar/sidebar.html",
    scope: true,
    link: function($scope, element, attrs) {

      $scope.menu = [
        {
          name: "Dashboard",
          path: "/",
          icon: "ti-home",
          active: true
        }
      ];

      $(function() {
        // initializing accordion jQuery plugin
        $('#nav-accordion').dcAccordion({
            eventType: 'click',
            autoClose: true,
            saveState: true,
            disableLink: true,
            speed: 'fast',
            showCount: false,
            autoExpand: true,
            classExpand: 'dcjq-current-parent'
        });
      });

    }
  }
});
