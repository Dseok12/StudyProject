<?php
require_once("dbconfig.php");

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

if (!isset($_POST["id"])||!isset($_POST["title"])||!isset($_POST["content"])){
    $msg = '{"result":"D"}';
    echo json_encode(json_decode($msg));
    exit;
}

$id = $_POST["id"];
$id = htmlspecialchars($id);
$title = $_POST["title"];
$title = htmlspecialchars($title);
$content = $_POST["content"];
$content = htmlspecialchars($content);

$sql = "update board set title='$title', content='$content' where id=$id";
$result = $db->query($sql);
$db->close();

if ($result) {
    $msg = '{"result":"Y"}';
} else {
    $msg = '{"result":"N"}';
}
echo json_encode(json_decode($msg));
?>