
require.config({
	paths: {
		angular: '../../bower_components/angular/angular.min',
		angularRoute: '../../bower_components/angular-ui-router/release/angular-ui-router.min',
		angularMaterial:'../../bower_components/angular-material/angular-material.min',
		angularAnimate:'../../bower_components/angular-animate/angular-animate.min',
		angularAria:'../../bower_components/angular-aria/angular-aria.min',
		ngFileUpload:'../../bower_components/ng-file-upload/ng-file-upload.min',
		ngFileUploadShim:'../../bower_components/ng-file-upload/ng-file-upload-shim.min',
		materialJS:'js/material.min'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': {
            deps: ['angular'],
            exports: 'angularRouter'
		},
		'angularMaterial': {
            deps: ['angular']
		},
		'angularAnimate': {
            deps: ['angular','angularMaterial']
		},
		'angularAria': {
            deps: ['angular','angularMaterial','angularAnimate']
		},
		'ngFileUpload': {
			deps: ['angular']
		},
		'ngFileUploadShim': {
            deps: ['angular','ngFileUpload']
       	}
		
	},
	waitSeconds: 200,
	deps: ['bootstrap']
});
