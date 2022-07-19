angular.module('playApp', ['ui.router'])
    // .controller("myCtrl", function ($scope, $http) {
    //     //$scope.records =[{'name':'Tharma'},{'name':'Ganesh'}];
    //     $http.get("update_db.php")
    //         .then(function (response) {
    //             $scope.records = response.data;
    //         });
    // })
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('home', {
                //url: '/portfolio',
                templateUrl: 'app/view/home.html'
            })
            .state('page1', {
                //url: '/portfolio',
                templateUrl: 'app/view/page1.html'
            })
            .state('page2', {
                //url: '/portfolio',
                templateUrl: 'app/view/page2.html'
            });

        //$locationProvider.html5Mode(true);
        //$urlRouterProvider.otherwise('');

    });