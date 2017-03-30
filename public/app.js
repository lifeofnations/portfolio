angular.module("myApp", ["ngRoute"])

.config(["$rouetProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "./components/home.html",
            controller: "homeController"
        })

}])