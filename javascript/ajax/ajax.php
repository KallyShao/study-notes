<?php 
header("Content-Type:text/html;charset=utf-8");
// get方式接收数据
// $username = $_GET['username'];
// $age = $_GET['age'];
// echo "用户名：{$username}";
// echo "年龄：{$age}";


//post方式接收数据
$username = $_POST['username'];
$pass = $_POST['password'];
echo "用户名：{$username}";
echo "密码：{$pass}";

 ?>