var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/landingPage.html',
    controller: 'landingPageController',
  })
  .when('/search', {
      templateUrl: 'partials/search.html',
      controller: 'searchController'
  })
  .when('/admin', {
    templateUrl: 'partials/adminDashboard.html',
    controller: 'adminDashboardController'
  })
  .when('/new', {
    templateUrl: 'partials/new.html',
    controller: 'newController'
  })
  .when('/artists/:id', {
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
  .when('/artist/:id', {
      templateUrl: 'partials/artistView.html',
      controller: 'artistViewController'
  })
  .when('/studio/:id', {
      templateUrl: 'partials/studioView.html',
      controller: 'studioViewController',
  })
  .otherwise('/')
})
