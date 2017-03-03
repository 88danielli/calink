var app = angular.module('app');

app.controller('landingPageController', function($scope, StyleTagFactory, ArtistFactory, $location, $routeParams, User) {

    $scope.redirect = function() {
        $location.url('/search');
    }



})
