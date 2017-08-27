define(function(require, exports, module){
	//exports是对外的模块接口，
	//require是依赖接口
	// require('js/test2.js'); //参数为依赖模块的路径，这里所依赖的不是模块，直接这样写
	// function tab(){
	// 	console.log(a);
	// }
	// exports.name = tab;	//注意这里对外调用的函数名

	

	function tab(){
		console.log(require('js/test2.js').a);//如果依赖的是一个模块
	}

	exports.name = tab;
});

