var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/PageTab");

     $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "tpls/PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "tpls/Page1.html",
            controller:'tit1Ctrl'
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "tpls/Page2.html",
            controller:'tit2Ctrl'
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "tpls/Page3.html",
            controller:'tit3Ctrl'
        })
        .state("PageTab.Page4", {
            url:"/Page4",
            templateUrl: "tpls/Page4.html",
            controller:'tit4Ctrl'
        })
        .state("PageTab.Page5", {
            url:"/Page5",
            templateUrl: "tpls/Page5.html",
            controller:'tit5Ctrl'
        })
        .state("PageTab.Page6", {
            url:"/Page6",
            templateUrl: "tpls/Page6.html",
            controller:'tit6Ctrl'
        })
        .state("PageTab.Page7", {
            url:"/Page7",
            templateUrl: "tpls/Page7.html",
            controller:'tit7Ctrl'
        })
        .state("PageTab.Page8", {
            url:"/Page8",
            templateUrl: "tpls/Page8.html",
            controller:'tit8Ctrl'
        });
});