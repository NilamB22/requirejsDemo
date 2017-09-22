define([
	'angular',
    '../../app',
    '../../directives/dir',
    '../../services/service',
    '../../services/constants'],
 function(angular,app) {
    'use strict';

app.controller('UploadCtrl',['$scope','Upload','httpService','showPopup','configConst',function ($scope, Upload,httpService,showPopup,configConst) {

    $scope.uploadFile = function (ev) {
console.log($scope.myFile);
        if(angular.isUndefined($scope.myFile))
        {
            showPopup.showAlert(ev, "Please Select File To be Upload");
            return false;
        }

        $scope.loader = true;
        $scope.url = configConst.IP+"filemanagement/upload/"+configConst.Bucket;

        Upload.upload({
            url: $scope.url,
            headers: {'Accept': 'application/text'},//webAPI exposed to upload the file
            data: {file: $scope.myFile} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if (resp.status == 200) {
                showPopup.showAlert(ev, "File Uploaded Successfully");
            }
            $scope.loader = false;

        }, function (resp) { //catch error
            showPopup.showAlert(ev, "error occurred while uploading");
            $scope.loader = false;

        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);

        });


    };
}]);

});