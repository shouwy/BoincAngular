/**
 * Created by Inspiron on 02/07/2015.
 */
'use strict';

angular.module('boincApp')
  .service('tableService', function($http, $filter, APP) {
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
    cachedProject : [],
    getData : function($defer, params, filter, apiUrl) {
      if (service.cachedProject.length > 0){
        console.log('Using Cached Data');
        var filteredData = filterData(service.cachedProject, filter);
        var transformedData = sliceData(orderData(filteredData, params), params);
        params.total(filteredData.length);
        $defer.resolve(transformedData);
      } else {
        $http.get(APP.baseUrl + apiUrl).success(
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
  return service;
});
