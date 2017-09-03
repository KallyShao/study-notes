* AJAX: 无刷新读取数据
* 字符编码
	* 要求所有文件，包括html, js, 要读取的文件，都必须是统一的编码！ 
* 缓存、阻止缓存
	* 缓存是根据url进行缓存的，如果在读取的文件url后加一个时间戳，就会阻止缓存
	
			oBtn.onclick = function(){
				ajax('first-ajax.txt?t=' + new Date.getTime(), function(con){
					alert(con);	//加时间戳之后阻止缓存，?后面的是get数据，在这里加时间戳不会
								//对访问的页面产生影响，因为后台不会接收参数t,这个只是给浏览
								//器看的,为了让url每次都不一样
				}, function(){
					alert('读取失败!')
				})
			}
	* new Date().getTime()： 从1970年1月1日到现在的ms数
* 动态数据
	* 通过ajax读取的任何数据都是字符串格式，可通过eval()进行解析
	* eval(): 把一个语句里的内容解析成JS可以识别的内容
	* get请求:
	
		把数据放入url，跟随url一起传递，具体就是在域名后加?username=kally&age=18
	* post请求：

* eval(), JSON.stringify(), JSON.parse()的比较
	
	[详见Js中JSON.stringify()与JSON.parse()与eval()详解及使用案例](http://www.cnblogs.com/vanl/p/5466670.html)

	* eval():
		作用：eval()函数可计算某个字符串，并执行其中的javascript表达式或要执行的语句。

		语法：eval(string)

		参数： string  必须，需要计算的字符串，其中含有要计算的javascript表达式或要执行的语句。

		返回值：返回计算string的值，没有的话不做任何改变返回。

		example：

			var a = 9;
			var b = 10;
			console.log(eval(a+b)); //19
			eval(document.write(a+b)); //在页面中输出19

		使用eval()函数也可以将JSON字符串解析为对象，这个功能能完成JSON.parse()的功能，但是有不一样的地方，请看下面代码 ：

		example:

			 var json = '{"name": "kally", "age": 18}';
			 var info = JSON.parse(json);
			 console.log(info);  //object. {name: "kally", age: 18} 注意字符串中的json的k值
			必须用""包起来，不能使用''，否则会报错
			 var info1 = eval('(' + json + ')');
			 console.log(info1); //与info的结果一致，但是在使用eval()转换json字符串时需要
			用()将json字符串先包起来
		
	* JSON.parse():
		作用：将json字符串转换成json对象。

		语法：JSON. parse(text[,reviver]).

		参数：text  必须；一个有效的json字符串。reviver  可选。

		返回值：一个对象或数组。
	
		example:

			var json = '{"name": "kally", "age": 18}';
			var info = JSON.parse(json);
			console.log(info);  //object. {name: "kally", age: 18} 注意字符串中的json的k值
			必须用""包起来，不能使用''，否则会报错

	* JSON.stringify():
		作用：将json对象转换成json字符串。

		语法：JSON.stringify(value [, replacer] [, space]) 

		参数：
			
			value  必须；通常为对象或数组。

			replacer 可选，用于转换结果的函数或者数组。

			space 可选。向返回值 JSON 文本添加缩进、空格和换行符以使其更易于读取。 

		返回值：一个包含JSON文本的字符串。

		example:

			var json = {"name": "kally", "age": 18};
			var str = JSON.stringify(json);
			console.log(str); //{"name": "kally", "age": 18}
			console.log(typeof str); //string
