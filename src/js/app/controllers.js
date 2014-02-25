app.controller('gridController', function ($scope, apiService) {
    $scope.totalPages = 0;
    $scope.customersCount = 0;
    $scope.headers = [
        {
            title: 'Id',
            value: 'id'
        },
        {
            title: 'Name',
            value: 'name'
        }
    ];

    $scope.filterCriteria = {
        pageNumber: 1,
        sortDir: 'asc',
        sortedBy: 'id'
    };

    //The function responsible for fetching the results from the server and setting
    $scope.fetchResult = function () {
        return apiService.search($scope.filterCriteria).then(function (data) {
            console.log('data:' + angular.toJson(data));
            $scope.customers = data.data.items;
            $scope.totalPages = data.data.totalPages;
            $scope.customersCount = data.data.totalItems;
        }, function () {
            $scope.customers = [];
            $scope.totalPages = 0;
            $scope.customersCount = 0;
        });
    };

    //Called when we navigate to another page
    $scope.selectPage = function (page) {
        $scope.filterCriteria.pageNumber = page;
        $scope.fetchResult();
    }

    //Will be called when change filterCriteria
    $scope.filterResult = function () {
        $scope.filterCriteria.pageNumber = 1; //reset page index to 1
        $scope.fetchResult().then(function () {
            //The request firest correctly but sometimes the ui doesn't update, this is a fix.
            $scope.filterCriteria.pageNumber = 1; //TODO Look into this.
        });
    };

    //Callback function that we passed to our custom directive sortBy, will be called when sorting change
    $scope.onSort = function (sortedBy, sortDir) {
        $scope.filterCriteria.sortDir = sortDir;
        $scope.filterCriteria.sortedBy = sortedBy;
        $scope.filterCriteria.pageNumber = 1;
        $scope.fetchResult().then(function () {
            $scope.filterCriteria.pageNumber = 1;
        });
    };

    //manually select a page to trigger an ajax request to populate the grid on page load.
    $scope.selectPage(1); //TODO I don't like this.  Let's create an Init() function
});