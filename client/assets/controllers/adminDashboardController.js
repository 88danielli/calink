var app = angular.module('app');

app.controller('adminDashboardController', function($scope, StyleTagFactory, ArtistFactory, $location, $routeParams, User, StudioFactory) {
    console.log("adminDashboardController loaded");



  //   User.get(function(data) {
  //   console.log(data,"&&&&&&&");
  //     if (data == null) {
  //         $location.url('/');
  //     } else {
  //         $scope.user = data;
  //         console.log($scope.user,"is logged in");
  //     }
  // })

    $scope.errors = {};

    // $scope.logout = function() {
    //     User.delete(function(data) {
    //         $scope.user = data;
    //         $location.url('/');
    //     })
    // }

    StyleTagFactory.index(function(data) {
      $scope.styles = data;

    })

    ArtistFactory.index(function(data) {
        $scope.artists = data;
        console.log(data,"11111");
    })

    StudioFactory.index(function(data) {
        $scope.studios = data;
    })

    $scope.delete = function(artist) {
    ArtistFactory.delete(artist, function(data) {
      ArtistFactory.index(function(data) {
        $scope.artists = data;
      });
    });
    }




})
