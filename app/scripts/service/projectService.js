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

    function filterData(data, filter){
      return $filter('filter')(data, filter);
    }

    function orderData(data, params){
      return params.sorting() ? $filter('orderBy')(data, params.orderBy()) : filteredData;
    }

    function sliceData(data, params){
      return data.slice((params.page() - 1) * params.count(), params.page() * params.count());
    }

    function transformData(data,filter,params){
      return sliceData( orderData( filterData(data,filter), params ), params);
    }

/*    var service = {
      cachedProject : [],
      getListProject : function($defer, params, filter) {
        if (service.cachedProject.length > 0){
          console.log('Using Cached Data');
          var filteredData = filterData(service.cachedProject, filter);
          var transformedData = sliceData(orderData(filteredData, params), params);
          params.total(filteredData.length);
          $defer.resolve(transformedData);
        } else {
          $http.get(APP.baseUrl + 'project/list').success(
            function (resp) {
              console.log('Fetching Data');
              angular.copy(resp, service.cachedProject);
              params.total(resp.length);
              var filteredData = $filter('filter')(resp, filter);
              var transformedData = transformData(resp, filter, params);

              $defer.resolve(transformedData);
            }
          );
        }
      }
    };
    return service;*/
  });
