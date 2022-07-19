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
            .state('main', {
                //url: '',
                template: '<h1>Welcome to my portfolio website!</h1><p>In this website you will find information about me and my projects</p>'
            })
            .state('portfolio', {
                //url: '/portfolio',
                templateUrl: 'app/views/portfolio.html'
            })
            .state('contact', {
                //url: '/contact',
                templateUrl: 'app/views/contact.html'
            })
            .state('about', {
                //url: '/about',
                template: "<h1>About Me</h1><p>I'm a web developer and entrepreneur with 3+ years of experience</p>"
            });

        //$locationProvider.html5Mode(true);
        //$urlRouterProvider.otherwise('');

    });