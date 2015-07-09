/**
 * Created by Inspiron on 08/07/2015.
 */
'use strict';
angular.module('boincApp')
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
