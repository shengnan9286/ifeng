angular.module("homeApp")
.controller("reserveCtrl",function($scope,$http,baseUrl,cart){
	//获取新鲜预定页面数据
	$http.get(baseUrl+"/reserve").then(function(data){
//		console.log(data);
		$scope.reserve=data.data.product;
	},function(error){
		console.log(error);
	})
	//添加商品到购物车
	$scope.addpro=function(pro){
		cart.addproduct(pro['img'],pro['name'],pro['price'],pro['id'])
	}
	$scope.removepro=function(pro){
		cart.removeproduct(pro['name'])
	}

})

