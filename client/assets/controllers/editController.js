var app = angular.module('app');

app.controller('editController', function($scope, StyleTagFactory, ArtistFactory, $location, $routeParams, User) {
    console.log("editController");

    $scope.errors = {};

    StyleTagFactory.index(function(data) {
      $scope.styles = data;
    })

    ArtistFactory.show($routeParams.id, function(data) {
      console.log($routeParams.id,"**********");
      $scope.artist = data;
  })

    $scope.cancel = function() {
        $location.url('/');
    }

    // $scope.updateArtist = function($scope.artist) {
    //     angular.forEach($scope.styles, function(style) {
    //         if (style.selected) {
    //             $scope.stylesToAdd.push(style._id);
    //         }
    //     })
    // }







})
