<?php

$_openid = $_GET["openid"]; 
$_numId = $_GET["numId"];//传递英雄人物收集先后的id编号， 1 2 3 4 5 6 分别对应六个要收集的内容
  $arr = array(
      'gather' => '1'
  );
//gather 1 表示收集成功  -1 表示收集失败（访问数据库写入数据失败）  测试的时候可以直接修改数值，测试效果
//点击收集按钮后，根据返回值进行页面跳转，如果返回1，正常页面跳转，如果返回-1则不进行页面跳转，提示网络有问题，重试点击收集按钮之类的

  $json_string = json_encode($arr);

    echo $json_string;

?>