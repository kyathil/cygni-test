'use strict';

/**
 * @ngdoc function
 * @name cygniTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cygniTestApp
 */

angular.module('cygniTestApp')
  .controller('MainCtrl', [ '$scope', '$http', '$location', '$window', function ($scope, $http, $location, $window) {
    $scope.results=[];

     $scope.isSearching=false;

    //If you want more kitties (or if something else was requested)
    $scope.refreshPage = function(){
        //console.log("Refreshed!");
        $window.location.reload();
    }


    //Gets pictures from Flickr using flickrapi's rest services
    $scope.search = function(searchTerm) {
        if(searchTerm === '' || searchTerm === undefined){
            $scope.searchTerm = 'kitten';
        }

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

    	}), function errorCallback(error){
    		console.log("Failed search " + error);
    	}
    }

}]);

    

