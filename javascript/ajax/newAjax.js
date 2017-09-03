function newAjax(url, fnSucc, fnFaild) {
	if(window.XMLHttpRequest){	//第一步：创建ajax对象
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");	//兼容ie6
	}
	oAjax.open("GET", url, true);
	oAjax.send();
	oAjax.onreadystatechange = function(){
		if(oAjax.readyState == 4){	//请求完成
			if(oAjax.status == 200){	//请求成功
				// console.log(oAjax.responseText);
				fnSucc(oAjax.responseText);	//调用的时候直接使用匿名函数，并传入参数。这个函数已经将所需的参数带上了
			}else{
				// console.log(oAjax.status);
				fnFaild(oAjax.status);
			}
		}
	}
}