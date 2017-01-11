angular.module("homeApp")
.factory('cart',function(){//创建购物车服务
	var cartData=[];
	return {
		addproduct:function(img,name,price,id){
			var addexistItem=false;
			for (var i = 0; i < cartData.length; i++) {
				if (cartData[i]['name']==name) {
					cartData[i].count++;
					addexistItem=true;
					break;
				}
			}
			if (!addexistItem) {
				cartData.push({
					id:id,
					name:name,
					price:price,
					img:img,
					count:1
				})
			}
		},
		removeproduct:function(name){
			for (var i = 0; i < cartData.length; i++) {
				if (cartData[i]['name']==name) {
					cartData[i]['count']--;
					break;
				}
			}
		},
		getproduct:function(){
			return cartData;
		}
	}
})
