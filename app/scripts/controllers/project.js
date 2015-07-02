/**
 * Created by Inspiron on 01/07/2015.
 */
'use strict';

angular.module('boincApp')
  .controller('projectCtrl', function($scope, ngTableParams, projectService){
   // var projects = projectService.data;

    $scope.projectTable = new ngTableParams({
        page : 1,
        count : 10
      }, {
        total : 0,
        getData : function($defer, params) {
          projectService.getData($defer, params, $scope.filter, 'project/list');
        }
      }
    );
    $scope.$watch("filter.$", function () {
      $scope.projectTable.reload();
    });

    $scope.getProject = function (proj) {
      console.log(proj);
    }
  });
