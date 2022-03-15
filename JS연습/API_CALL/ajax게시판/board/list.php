<?php
require_once("dbconfig.php");

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$sql = 'select * from board order by id desc';
$result = $db->query($sql);
$db->close();
$db_data = array();
while ($row = $result->fetch_assoc()) { 
	$db_data[]=$row; 
}
echo json_encode(array("result"=>$db_data));
?>