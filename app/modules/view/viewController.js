// app.controller('ViewCtrl', function ($scope, httpService, IP) {
//     $scope.isLoading = true;
//     $scope.url = IP + 'filemanagement/all';
//     httpService.fetchHttp('GET', $scope.url, '', '').then(
//         function (response) {
//             console.log(response);
//             $scope.isLoading = false;
//             if (response.status == 200) {
//                 $scope.list = response.data;
//                 $scope.showtable = true;
//             }
//             else {
//                 $scope.showtable = false;
//             }

//         },
//         function (error) {
//             console.log("OOps some error occured");
//             $scope.isLoading = false;
//         }
//     );
// });

'use strict';
define([
	'angular',
	'../../app','../../services/service','../../services/constants'],
 function(angular,app) {
    'use strict';
	app.controller('viewCtrl', ['$scope','httpService','configConst', function($scope,httpService,configConst) {
			console.log(configConst.IP);
			$scope.isLoading = true;
			$scope.url = configConst.IP + 'filemanagement/all';
			httpService.fetchHttp('GET', $scope.url, '', '').then(
			function (response) {
				console.log(response);
				$scope.isLoading = false;
				if (response.status == 200) {
				$scope.list = response.data;
				$scope.showtable = true;
				}
				else {
				$scope.showtable = false;
				}

			},
			function (error) {
			console.log("OOps some error occured");
			$scope.isLoading = false;
			}
			);
            return app;

	}]);
});

//,'../../services/service','../../services/constants'
//, httpService, IPs