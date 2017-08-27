// define(function(){  
// 	function aFn(){
// 		console.log('this is module A!')
// 	};
// 	return {
// 		y: aFn  //这里的y就是对外提供的接口
// 	};
// })

define(['b'], function(){  //在定义模块时依赖其他模块,
	// 此时a依赖b，所以b模块一定会在a模块之前执行
	console.log('a');
	function aFn(){
		console.log('this is module A!')
	};
	return {
		y: aFn  //这里的y就是对外提供的接口
	};
})

//在requirejs中可以采用cmd的写法，但是在加载大模块的时候速度较慢。
//amd是在requirejs推广过程中产生的一种规范，cmd是在seajs推广过程
//中产生的一种规范.requirejs是前置加载，而seajs是后置加载