// require(['a', 'b'], function(x, bM){
// 	x.y();
// 	bM.bFn();
// })


// require(['a', 'b'], function(aM, bM){
// 	aM.y();
// 	bM.bFn();
// })

require.config({
	// baseUrl: 'aaa'
	// paths: {
	// 	ng: 'libs/angular'  
	// }
	paths: {
		jquery: 'jquery-2.1.3.min'  
	}
})

require(['jquery'], function(){
	console.log($);
})