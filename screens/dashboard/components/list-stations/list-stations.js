app.directive("listStationsComponent", ($rootScope) => {
  return {
    templateUrl: "/screens/dashboard/components/list-stations/list-stations.html",
    scope: true,
    link: function(scope, element, attrs) {

      scope.stations = [];

      scope.loadStations = function(filter) {
        filter = "some filter";
        $.ajax({
          type: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": $rootScope.main.locale,
            "Authorization": $rootScope.main.userInfo.auth_token
          },
          url: API_PATH + "v1/stations?filter=" + filter,
          success: function(response) {
            console.log("Response from the server");
            console.log(response);
          },
          error: function(error) {
            console.log("Error from the server");
            console.log(error);
          }
        });
      };

      let filter = {
        page: 0,
        limit: 10,
        sort: {
          date: 1
        }
      };
      scope.loadStations(filter);

    }
  }
});
