'use strict';
/**
 * Created by Inspiron on 01/07/2015.
 */
angular.module('boincApp')
  .controller('mainCtrl', function ($scope, DTOptionsBuilder, mainService) {
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
    $scope.statistics = mainService.allStat();

    $scope.transformDate = function(date){
      var res = new Date();
      res.setTime(date);
      return res.toLocaleDateString();
    };
  });

