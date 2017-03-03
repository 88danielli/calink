var app = angular.module('app');

app.controller('studioViewController', function($scope, StyleTagFactory, ArtistFactory, $location, $routeParams, User, StudioFactory) {
    console.log("studioViewController");
    console.log($scope.studio);

    $scope.errors = {};

    $scope.searchRedirect = function() {
        $location.url('/search');
    }

    StudioFactory.show($routeParams.id, function(data) {
      console.log($routeParams.id,"**********");
      $scope.studio = data;
  })


})
