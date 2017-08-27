define(function(){
	console.log('b');
	function bFn(){
		console.log('this is module b!')
	};
	return{
		bFn: bFn
	};
})