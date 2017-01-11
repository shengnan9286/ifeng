angular.module("homeApp")
.controller("getDataCtrl",function($scope,$http,baseUrl,cart){
	//获取home页面数据
	$http.get(baseUrl+"/hot").then(function(data){
		$scope.hot=data.data.data;
//		console.log($scope.hot)	
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
	//获取商品数量
	$scope.counts=function(name){
		var list=cart.getproduct();
		for (var i=0;i<list.length;i++) {
			if(list[i].name==name){
				return list[i].count;
			}
		}
	}
	
	
	
	//设置轮播图
	var swiper = new Swiper('.swiper1', {
			    pagination: '.swiper-pagination',
			    paginationClickable: true,//实现控制点击小点控制图片切换
			    autoplay : 1000,//可选选项  自动轮播auto 
			    speed:1000,//平滑速度
			    autoplayDisableOnInteraction: false,//实现点击切换后还会自动轮播(重启autoplay属性)
			    loop:true  
			});
	//设置头条滚动：
	var swp2=document.querySelector(".headline>.swiper-container")
	var swiper2 = new Swiper(swp2, {
	//      pagination: '.swiper-pagination',
	        autoplay : 1000,
	        speed:1000,
	        direction: 'vertical',
	        loop:true  
	    });
})

