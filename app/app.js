  define(['angular',
  'angularRoute',
  'angularMaterial',
  'ngFileUpload',
  'ngFileUploadShim'
  ],
  function(angular) {
  'use strict';

  var awsApp = angular.module('awsApp', ['ui.router','ngMaterial','ngFileUpload']);
  console.log("invoke by main.js",awsApp)
  return awsApp; 
  });
