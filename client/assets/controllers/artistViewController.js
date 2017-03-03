var app = angular.module('app');

app.controller('artistViewController', function($scope, StyleTagFactory, ArtistFactory, $location, $routeParams, User, StudioFactory) {
    console.log("artistViewController");

    $scope.errors = {};

    $scope.searchRedirect = function() {
        $location.url('/search');
    }

    ArtistFactory.show($routeParams.id, function(data) {
      console.log($routeParams.id,"**********");
      $scope.artist = data;
      console.log($scope.artist);
  })


})
