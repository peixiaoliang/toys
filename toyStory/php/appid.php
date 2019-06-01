<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wxe2560dfb00d60367", "21d5e5161829e4527fbc1b412fdc13bb");
$signPackage = $jssdk->GetSignPackage();
$array = array("appId" => $signPackage["appId"],"timestamp" => $signPackage["timestamp"],"nonceStr" => $signPackage["nonceStr"],"signature" => $signPackage["signature"]); 
echo json_encode($array);
?>