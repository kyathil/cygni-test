'use strict';

/**
 * @ngdoc function
 * @name recipepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipepageApp
 */
 
angular.module('cygniTestApp')
  .controller('ModalInstanceCtrl', [ '$scope', '$uibModalInstance', '$http', function ($scope, $uibModalInstance,$http) {

  $scope.close = function () {
    $uibModalInstance.close();
  };

  $scope.isSearching=false;

  //Gets pictures from Flickr using flickrapi's rest services
  $scope.search = function() {
    $http({
    	method: 'GET',
    	url: 'https://api.flickr.com/services/rest',
   		params: {
   		method: 'flickr.photos.search',
   		api_key: "6debe8c5df70fddd924785fae8adcd00",
     	text: $scope.searchTerm,
     	format: 'json',
     	nojsoncallback: 1
    	}
    }).then(function successCallback(data){
    	$scope.results = data;
        console.log($scope);

    }), function errorCallback(error){
    	console.log("Failed search " + error);
    }
    }

  }]);