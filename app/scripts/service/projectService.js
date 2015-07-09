/**
 * Created by Inspiron on 01/07/2015.
 */
'use strict';
angular.module('boincApp')
  .service('projectService', function($resource, APP) {
    return $resource(APP.baseUrl + 'view/:id',{id : '@id'},
      {
        updateProject : {
          url : APP.baseUrl + 'update',
          method : 'POST'
        },
        createProject : {
          url : APP.baseUrl + 'create',
          method : 'POST'
        },
        deleteProject : {
          url : APP.baseUrl + 'delete',
          method : 'POST'
        },
        listUser : {
          url : APP.baseUrl + ':id/list/user',
          method : 'GET',
          isArray : true
        },
        listComputer : {
          url : APP.baseUrl + ':id/list/computer',
          method : 'GET',
          isArray : true
        },
        list : {
          url : APP.baseUrl + 'project/list',
          method : 'POST',
          isArray : true
        },
        stat : {
          url : APP.baseUrl + 'stat/project/:id',
          method : 'POST',
          isArray : true
        }
      });
  });
