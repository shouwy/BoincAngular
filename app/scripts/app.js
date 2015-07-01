'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular.module('boincApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTable',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('app', {
        url : '/',
        views : {
          'header' : {
            templateUrl : 'views/header.html',
            controller : 'headerCtrl'
          },
          'side' : {
            templateUrl : 'views/side-bar.html',
            controller : 'sideCtrl'
          },
          'content' : {
            templateUrl : 'views/content.html',
            controller : 'contentCtrl'
          },
          'footer' : {
            templateUrl : 'views/footer.html',
            controller : 'footerCtrl'
          }
        }
      })
      .state('app.home', {
        url : '/home',
        views : {
          'content@' : {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('app.project', {
        url : '/projects',
        views : {
          'content@' : {
            templateUrl: 'views/project.html',
            controller: 'projectCtrl'
          }
        }
      })
      .state('app.computer', {
        url : '/contact',
        views : {
          'content@' : {
            templateUrl : 'views/computer.html',
            controller : 'computerCtrl'
          }
        }
      })
      .state('app.user', {
        url : '/user',
        views : {
          'content@' : {
            templateUrl : 'views/user.html',
            controller : 'userCtrl'
          }
        }
      });
  }).constant('APP', {
    baseUrl : 'http://localhost:8080/'
  });
