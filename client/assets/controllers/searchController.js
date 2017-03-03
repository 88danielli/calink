var app = angular.module('app');

app.controller('searchController', function($scope, StyleTagFactory, ArtistFactory, $location, $routeParams, User, StudioFactory) {

    console.log("searchController loaded");


    StyleTagFactory.index(function(data) {
      $scope.styles = data;

    })

    ArtistFactory.index(function(data) {
        $scope.artists = data;
        console.log(data,"11111");
    })

  //   ArtistFactory.show($routeParams.id, function(data) {
  //     console.log($routeParams.id,"**********");
  //     $scope.artist = data;
  // })

    $scope.searchStyleTags = function() {
        console.log($scope.styleTagSearchString,"click");
        if ($scope.styleTagSearchString == undefined || $scope.styleTagSearchString == null || !$scope.styleTagSearchString) {
            console.log("redirecting to search index");
            $location.url('/search')
        } else {
            StyleTagFactory.search($scope.styleTagSearchString, function(data) {
                if (data.errors) {
                    console.log($scope.styleTagSearchString,"123123123");
                  console.log(data.errors);
                  $scope.errors = data.errors;
                } else {
                    console.log(data,"this is the tag search data*******");
                  $scope.searchedTag = data;
                }
              })
        }
    }



})
