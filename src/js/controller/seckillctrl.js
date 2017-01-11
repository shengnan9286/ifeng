angular.module("homeApp")
.controller("killCtrl",function($scope,$http,baseUrl){
	//获取秒杀页面数据
	$http.get(baseUrl+"/seckill").then(function(data){
		$scope.seckill=data.data.product;
	},function(error){
		console.log(error);
	})
	//设置秒杀按钮颜色
	$scope.addcolor=function(a){
		if(a=="即将开抢"||a=="已抢光"){
			return "endcolor"
		}
	}

})

