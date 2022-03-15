<?php
require_once("dbconfig.php");

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

if (!isset($_GET["id"])){
    $msg = '{"result":"D"}';
    echo json_encode(json_decode($msg));
    exit;
}

$id = $_GET["id"];
$id = htmlspecialchars($id);

$sql = 'select * from board where id='.$id;
$result = $db->query($sql);
$db->close();
$db_data = array();
while ($row = $result->fetch_assoc()) { 
	$db_data[]=$row; 
}
echo json_encode(array("result"=>$db_data));
?>