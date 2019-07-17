var loginapp=angular.module('loginapp',['ngRoute']);
loginapp.config(function($routeProvider){
	
	$routeProvider
	.when('/',{
	
	templateUrl:'pages/home.html',
	controller:'mainController'
	})
.when('/login',{
	
	templateUrl:'pages/login.html',
	controller:'loginController'
})
.when('/register',{
	
	templateUrl:'pages/register.html',
	controller:'registerController'
})
});

loginapp.controller('mainController',function($scope){
	
});


loginapp.controller("loginController", ['$scope', '$http', function($scope, $http) {
        $scope.url = 'http://localhost:4300/';
		$scope.check = function() {  
			$http.post('http://localhost:4300/check',{"name":$scope.name,"pass":$scope.pass}).
			then(function(res, status) {
				//alert(res.data[0].username);
                $scope.name = res.data[0].username;
				$scope.pass = res.data[0].password;
				$scope.add = res.data[0].address;
				$scope.mn = res.data[0].mobileno;
			});
		}
}]);

loginapp.controller("registerController", ['$scope', '$http', function($scope, $http) {
        $scope.url = 'http://localhost:4300/';
		$scope.new1 = function() {  
			$http.post('http://localhost:4300/new',{"name":$scope.name,"pass":$scope.pass,"add":$scope.add,"mn":$scope.mn}).
			then(function(res, status) {
                $scope.msg="Successfully Registered!";
			});
		}
}]);
