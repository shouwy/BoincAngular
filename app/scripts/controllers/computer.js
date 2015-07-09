/**
 * Created by Inspiron on 02/07/2015.
 */
'use strict';

angular.module('boincApp')
  .controller('computerCtrl', function($scope, DTOptionsBuilder, computerService){
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
  });
