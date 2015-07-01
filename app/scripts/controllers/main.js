'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('boincApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('headerCtrl', function() {

  })
  .controller('contentCtrl', function() {

  })
  .controller('sideCtrl', function($scope) {
    $scope.hideMenu = function(){
      angular.element('.navbar-ex1-collapse').removeClass('in');
    };
  })
  .controller('footerCtrl', function() {

  });
