/**
 * Created by Inspiron on 01/07/2015.
 */
'use strict';
angular.module('boincApp')
  .service('projectService', function($resource, $filter, APP) {
    return $resource(APP.BaseUrl + 'view/:id',{id : '@id'},
      {
        updateProject : {
          url : APP.BaseUrl + 'update',
          method : 'POST'
        },
        createProject : {
          url : APP.BaseUrl + 'create',
          method : 'POST'
        },
        deleteProject : {
          url : APP.BaseUrl + 'delete',
          method : 'POST'
        },
        listUser : {
          url : APP.BaseUrl + ':id/list/user',
          method : 'GET',
          isArray : true
        },
        listComputer : {
          url : APP.BaseUrl + ':id/list/computer',
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
