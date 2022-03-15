<?php
require_once("dbconfig.php");

header('Content-Type: application/json');

$sql = "DROP TABLE IF EXISTS board";
$db->query($sql);

$sql = "CREATE TABLE board (
  id int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(100) NOT NULL,
  content text NOT NULL,
  date datetime NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8";

$result = $db->query($sql);

$db->close();

if ($result) {
    $msg = '{"result":"테이블 생성 완료!"}';
} else {
    $msg = '{"result":"테이블 생성 실패!"}';
}

echo json_encode(json_decode($msg));
?>