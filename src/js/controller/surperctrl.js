angular.module("homeApp")
.controller("surperCtrl",function($scope,$http,baseUrl,cart){
	//获取闪送超市页面数据
	$http.get(baseUrl+"/sale").then(function(data){
		$scope.sales=data.data.data;
	},function(error){
		console.log(error);
	})
	$scope.changeData=function(url){
		$http.get(baseUrl+"/"+url).then(function(data){
			$scope.sales=data.data.data;
		},function(error){
			console.log(error);
		})
	}
	
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
	
	
	//设置列表菜单的点击按钮加边框效果
	var listbtns=document.querySelectorAll(".leftmenu li");
	var list=document.querySelector(".leftmenu>ul").children;
	
	for(var i=0;i<listbtns.length;i++){			
		listbtns[i].onclick=function(){	
			for (var j=0;j<listbtns.length;j++) {
				listbtns[j].style.borderLeft ='none';
			}
			this.style.borderLeft ='2px solid #ffd600';			
		}	
	}
})

