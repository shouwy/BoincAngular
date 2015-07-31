/**
 * Created by Inspiron on 01/07/2015.
 */
'use strict';

angular.module('boincApp')
  .controller('projectCtrl', function($scope, DTOptionsBuilder, projectService, statisticService){
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('')
      .withBootstrap()
      .withBootstrapOptions({
        TableTools : {
          classes : {
            buttons : {
              normal : 'btn btn-info'
            }
          }
        }
      })
      .withTableTools('swf/copy_csv_xls_pdf.swf')
      .withTableToolsButtons([
        'pdf',
        'csv'
      ]);

    $scope.projects = projectService.list();

    $scope.getProject = function (proj, index) {
      $scope.selectedRowProject = index;
      $scope.rowDetail = proj;

      $scope.computers = projectService.listComputer({id : proj.idProject});
      $scope.chartDataComputer = statisticService.projectComputer({idProject : proj.idProject});

      $scope.users = projectService.listUser({id : proj.idProject});
      $scope.chartDataUser = statisticService.projectUser({idProject : proj.idProject});
    };
  });
