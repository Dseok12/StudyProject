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

$sql = "delete from board where id=".$id;
$result = $db->query($sql);
$db->close();

if ($result) {
    $msg = '{"result":"Y"}';
} else {
    $msg = '{"result":"N"}';
}
echo json_encode(json_decode($msg));
?>