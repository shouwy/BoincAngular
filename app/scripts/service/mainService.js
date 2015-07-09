/**
 * Created by Inspiron on 08/07/2015.
 */
'use strict';
angular.module('boincApp')
  .service('mainService', function($resource, APP) {
    return $resource(APP.baseUrl + 'stat',{id : '@id'},
      {
        allStat : {
          url : APP.baseUrl + 'stat/all',
          method : 'POST',
          isArray : true
        }
      });
  });
