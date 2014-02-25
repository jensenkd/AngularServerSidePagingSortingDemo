app.factory('apiService', function ($rootScope, $http) {

    var apiService = {
        search: function (query) {
            //return list of customers.
            return $http.post("/api/contacts", query).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
               
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }
    }

    return apiService;
});