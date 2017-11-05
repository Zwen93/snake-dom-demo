<?php
$a=array(
	array(
		"name"=>"abc123",
		"email"=>"abc123@qq.com"
	),
	array(
		"name"=>"abc456",
		"email"=>"abc456@qq.com"
	),
	array(
		"name"=>"abc789",
		"email"=>"abc789@qq.com"
	),
	array(
		"name"=>"def123",
		"email"=>"def123@qq.com"
	),
	array(
		"name"=>"def456",
		"email"=>"def456@qq.com"
	),
	array(
		"name"=>"def789",
		"email"=>"def789@qq.com"
	)
);
$response;
$alength=count($a);
if(!empty($_GET["name"])){
	for($i=0;$i<$alength;$i++){
	 	if($a[$i]["name"]==$_GET["name"]){
	 		$response = false;
	 		return;
	 	}
	 	else $response = true;
	 }
}
if(!empty($_GET["email"])){
	for($i=0;$i<$alength;$i++){
		if($a[$i]["email"]==$_GET["email"]){
			$response = false;
			return;
		}
		else $response = true;
	}
}
echo $response;
?>