* offsetParent：最近的有定位的祖先节点，如果父元素都没有定位，那么offsetParent就是body；
		
		odiv2 = document.getElementById("div2");
		console.log(odiv2.offsetParent);
	**注意：**
	offsetLeft, offsetTop分别是**外边框**到距离最近的有定位祖先节点__内边框__的左和上的距离。如果一个元素自身有定位，那么offsetLeft, offsetTop就是自己的left和top值；不管自身有没有定位，如果自身有margin,margin的值都会算入offsetLeft中；

	这两个属性不能用来赋值，要赋值就要使用style.left, style.top。
	* offsetLeft与style.left的区别：
	
		① offsetLeft没有单位；

		② 如果Left值设为百分比，style.left返回百分比，offsetLeft返回计算后的固定像素值；

		③ 如果是非行内样式，用style.left无法获取，需通过`getComputedStyle(obj).left`获取:

			console.log(getComputedStyle(odiv2).left);

* `obj.getBoundingClientRect()`: 返回obj的绝对位置信息，包括上下左右，obj的宽高。很强大！！！
		
		console.log(odiv3.getBoundingClientRect().left);


	

