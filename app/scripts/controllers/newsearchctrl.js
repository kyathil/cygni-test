'use strict';

/**
 * @ngdoc function
 * @name recipepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipepageApp
 */
angular.module('cygniTestApp')
  .controller('NewSearchCtrl', [ '$scope', '$uibModal', function ($scope, $uibModal) {

	$scope.open = function () {
		var modalInstance = $uibModal.open({
			templateUrl: '../views/newSearchModal.html',
			controller: 'ModalInstanceCtrl'
		});
	}
  }]);