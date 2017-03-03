var app = angular.module('app');

app.controller('newController', function($scope, StyleTagFactory, ArtistFactory, $location, $routeParams, User, StudioFactory) {

    console.log("newController loaded");

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
    $scope.styleToAdd = "";
    $scope.stylesToAdd = [];
    // $scope.languagesToAdd = [];
    // $scope.languages = ["Spanish", "Chinese (Mandarin)", "Chinese (Cantonese)", "Japanese", "Italian", "French", "German", "Other"];


    StyleTagFactory.index(function(data) {
      $scope.styles = data;
    })

    StudioFactory.index(function(data) {
        $scope.studios = data;
    })

    $scope.cancel = function() {
        $location.url('/');
    }

    $scope.createNewStyleTag = function() {
        StyleTagFactory.create($scope.newStyleTag, function(data) {
            if (data.errors) {
              console.log(data.errors);
              $scope.errors = data.errors;
            } else {
              $scope.newStyleTag = {};
              $location.url('/');
            }

        })
    }

    $scope.createNewStudio = function() {
        StudioFactory.create($scope.newStudio, function(data) {
            if (data.errors) {
              console.log(data.errors);
              $scope.errors = data.errors;
            } else {
              $scope.newStudio = {};
              $location.url('/');
            }

        })
    }

    // $scope.addToStyles = function() {
    //     $scope.stylesToAdd.push($scope.styleToAdd)
    //     console.log($scope.stylesToAdd,"****these will be added to array");
    // }

    $scope.createNewArtist = function() {

        angular.forEach($scope.styles, function(style) {
            if (style.selected) {
                $scope.stylesToAdd.push(style._id);
            }
        })
        // angular.forEach($scope.languages, function(language) {
        //     if (language.selected) {
        //         $scope.languagesToAdd.push(language);
        //     }
        // })
        $scope.newArtist.styles = $scope.stylesToAdd;
        // $scope.newArtist.languages = $scope.languagesToAdd;
        $scope.newArtist.studio = $scope.studio.selected._id;
        console.log($scope.studio.selected,"******");
        console.log($scope.newArtist,"here is what will be added !!!!!!!!");
        ArtistFactory.create($scope.newArtist, function(data) {
            if (data.errors) {
              console.log(data.errors);
              $scope.errors = data.errors;
            } else {
              $scope.newArtist = {};
              $location.url('/');
            }
        })
    }


})
