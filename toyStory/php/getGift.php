<?php

$_openid = $_GET["openid"]; 

  $arr = array(
      'giftID' => '10'
  );
//giftID -1 表示未中奖  1 表示1号礼品   2表示2号礼品    3表示3号礼品    测试的时候可以直接修改数值，测试效果


  $json_string = json_encode($arr);

    echo $json_string;

?>