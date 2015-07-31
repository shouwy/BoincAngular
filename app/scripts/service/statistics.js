/**
 * Created by Inspiron on 31/07/2015.
 */
'use strict';

angular.module('boincApp')
  .service('statisticService', function($resource, APP) {
    return $resource(APP.baseUrl,
      {
        idProject : '@idProject',
        idUser : '@idUser',
        idComputer : '@idComputer'
      },
      {
        allStat : {
          url : APP.baseUrl + 'stat/all',
          method : 'POST',
          isArray : true
        },
        project : {
          url : APP.baseUrl + 'stat/project/:idProject',
          method : 'POST',
          isArray : true
        },
        projectComputer : {
          url : APP.baseUrl + 'stat/project/:idProject/computer',
          method : 'POST',
          isArray : true
        },
        projectUser : {
          url : APP.baseUrl + 'stat/project/:idProject/user',
          method : 'POST',
          isArray : true
        },
        user : {
          url : APP.baseUrl + 'stat/user/:idUser',
          method : 'POST',
          isArray : true
        },
        computer : {
          url : APP.baseUrl + 'stat/computer/:idComputer',
          method : 'POST',
          isArray : true
        }
      });
  });
