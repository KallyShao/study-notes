	function getStyle(obj){
		if(obj.currentStyle){
			return obj.currentStyle
		}else{
			return getComputedStyle(obj);
		}
	}

	function move(obj, json, fn){
		var speed = 0;
		var alpha = 0;
		var flag = true;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
				var bStop = true;	//刚一开始的时候就假设所有值都到了目标点
				for(var attr in json){

					var cur = 0;
					if(attr == 'opacity'){
						cur = (getStyle(obj)[attr])*100;
					}else{
						cur = parseInt(getStyle(obj)[attr]);
					}
					var speed = (json[attr] - cur) / 6;
					speed = cur > json[attr] ? Math.floor(speed) : Math.ceil(speed); 

					if(attr == 'opacity'){
						alpha += speed;
						obj.style.opacity = alpha/100;
						obj.style.filter = 'alpha(opacity:' + alpha + ')';
					}else{
						obj.style[attr] = cur + speed + 'px';
					}

					if(cur != json[attr]){
						bStop = false;	//在循环过程中，只要有一个值没有到达目标点，就把bStop设为false
					}

				}
				if(bStop){	//当循环执行完之后，如果没有出现bStop为false的情况，就清除定时器
					clearInterval(obj.timer);
					if(fn){
						fn();
					}
				}
			
		}, 30)
	}
	