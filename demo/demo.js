
angular.module('app', ['cgNotify']);

angular.module('app').controller('DemoCtrl',function($scope,notify){

	$scope.text = "Sample Message";

	$scope.test = function(){
		notify($scope.text);
	};

});