* 变量的作用域问题：外层的变量内层可以找到（全局）；内层的变量外层找不到（局部）
	* 情况一：
	
			var a = 10;
			function aa(){
				console.log(a);
			}
			function bb(){
				var a = 20;
				aa();	//这个函数在调用的时候并不是在bb()内部调用，而是回到前面找到函数aa(),
						在外面调用aa(),因此只能找到全局变量a=10
			}
			bb(); //10. 
	* 情况二：

			var a = 10;
			function bb(){
				var a = 20;
				function aa(){
					console.log(a);
				}
				aa();
			}
			bb(); //20. 如果函数是在bb()里面调用的，就返回20

* var的问题：当var不加的时候，会自动生成全局变量（不建议这样写！！！）

		function aa(){
			var a = b = 10;
		}
		aa();
		console.log(a);	//报错，a未定义
		console.log(b);	//10. 因为b前面没有声明var,相当于一个全局变量，所以在外面可以找到。

* 变量的查找：就近原则寻找var定义的变量，当就近没有找到时，会查找外层，一层层往外找
	* 情况一：

			var a = 10;
			function aa(){
				a = 20;
				console.log(a);	在执行这句时，会先找带有var定义的a，在函数内部没有找到满足条件
								的a，继续往外找，找到a之后再进入函数内部，但是a被a = 20覆盖，因此变成20
			}
			aa();	//20.

	* 情况二：
	
			var a = 10; 
			function aa()
			{
				var a = 20;
				console.log(a);	//这里直接在函数内部找到了带var的a,因此根本不会找到外面的var a = 10.
			}
			aa(); 	//20. 

	* 情况三：