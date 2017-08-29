1. arguments是函数实参的集合，是一个类数组，有length属性，typeof 返回object；

	<pre>
	(function (){
		return typeof arguments;
	})();
	</pre>

2. 有名函数表达式，不建议这样写，这里是error,错误的
	<pre>
	var f = function g(){return 23; };
	typeof g();
	</pre>

3. typeof 返回的都是字符串类型
4. 分组选择符( , )
	<pre>
	var a = (1, 2, 3);
	return a;	//结果返回最后一个数，即3
	</pre>
5. 函数声明不能写到运算中，如if语句的判断条件
	<pre>
	if(function fn(){}){
	....
	}
	</pre>
6. 自执行函数：实参通过后面的括号传进去
	<pre>
	(function(x){
			console.log(x);
	})(3)
	</pre>
7. 函数预解析
	<pre>
	(function f(){
		function f(){return 1;}
		return f();
		function f(){return 2;}
	})();		
//由于函数的预解析机制，最后一条f()会把前面的f()覆盖，这个函数执行完的结果是2。
	</pre>
8. 函数的长度即函数的形参
	<pre>
	function fn(num1, num2, num3){
	....
	}
	console.log(fn.length);	//3. length是形参长度，arguments.length是实参长度
	</pre>


  




