var loginApp = angular.module('angular', []);
loginApp.controller('LoginCtrl', function($scope){
	 $scope.user = [
	    {'username': 'tcs',
	     'password': 'tcs'}
	  ];
	   $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

  };

})

