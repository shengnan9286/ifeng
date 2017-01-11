angular.module("homeApp")
.controller("cartCtrl",function($scope,cart){
	$scope.cartd=cart.getproduct();
	$scope.total=function(){
		var sum=0;
		for (var i = 0; i < $scope.cartd.length; i++) {
			sum += $scope.cartd[i]['price']*$scope.cartd[i]['count']
		}
		return sum;
	}
	$scope.addpro=function(pro){
		cart.addproduct(pro['img'],pro['name'],pro['price'],pro['id'])
	}
	$scope.removepro=function(pro){
		cart.removeproduct(pro['name'])
	}
})