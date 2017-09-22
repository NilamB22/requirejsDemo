// var app = angular.module('awsApp', ['ui.router','ngFileUpload','ngMaterial']);

// app.config(function ($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {

//     $urlRouterProvider.otherwise('/view');

//     $stateProvider

//         .state('view', {
//             url: '/view',
//             templateUrl: 'modules/view/view.html',
//             controller: 'ViewCtrl'
//         })
//         .state('upload', {
//             url: '/upload',
//             templateUrl: 'modules/upload/upload.html',
//             controller: 'UploadCtrl'
//         })
//         .state('delete', {
//             url: '/delete',
//             templateUrl: 'modules/delete/delete.html',
//             controller: 'DeleteCtrl'
//         })

// });

// app.run(function ($rootScope,$timeout) {
//         $rootScope.$on('$viewContentLoaded', ()=> {
//             $timeout(() => {
//             componentHandler.upgradeAllRegistered();
//         })
//     })
// });



define(['angular',
        'angularRoute',
         'angularMaterial',
         //'ngFileUpload',
        // 'ngFileUploadShim',
        'app',
        'modules/view/viewController',
        'modules/upload/uploadController',
        'modules/delete/deleteController'
   ],
    function(angular, angularRoute,angularMaterial,awsApp,viewController,uploadController,deleteController) {
    'use strict';
   
    awsApp.config(function ($stateProvider, $urlRouterProvider)  {

            $urlRouterProvider.otherwise('/view');

            $stateProvider

                .state('view', {
                    url: '/view',
                    templateUrl: 'modules/view/view.html',
                    controller: 'viewCtrl'
                })
                .state('upload', {
                    url: '/upload',
                    templateUrl: 'modules/upload/upload.html',
                    controller: 'UploadCtrl'
                })
                .state('delete', {
                    url: '/delete',
                    templateUrl: 'modules/delete/delete.html',
                    controller: 'DeleteCtrl'
                });
    return awsApp; 
    });

        awsApp.run(function ($rootScope,$timeout) {
        $rootScope.$on('$viewContentLoaded', ()=> {
        $timeout(() => {
        componentHandler.upgradeAllRegistered();
        })
        })
     return awsApp; 
        });
  
});