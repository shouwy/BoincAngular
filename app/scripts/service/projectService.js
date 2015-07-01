/**
 * Created by Inspiron on 01/07/2015.
 */
'use strict';
angular.module('boincApp')
  .service('projectService', function($http, $filter, APP) {
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

    var service = {
      cachedData : [],
      getData : function($defer, params, filter) {
        if (service.cachedData.length > 0){
          var filteredData = filterData(service.cachedData, filter);
          var transformedData = sliceData(orderData(filteredData, params), params);
          params.total(filteredData.length);
          $defer.resolve(transformedData);
        } else {
          $http.get(APP.baseUrl + 'project/list/').success(
            function (resp) {
              angular.copy(resp, service.cachedData);
              params.total(resp.length);
              var filteredData = $filter('filter')(resp, filter);
              var transformedData = transformData(resp, filter, params);

              $defer.resolve(transformedData);
            }
          );
        }
      }
    };
    return service;
  });