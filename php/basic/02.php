<?php
/*
    ✨✨✨ if, if~elseif, else문
*/

/* 
    false가 되는 것을 외우면 true가 되는거는 쉽게 알 수 있다.
    [], '', false, 0, null -> false값으로 나온다.
*/

/*
    ✨ if
*/
if (true) {
    echo 'Hello, World!<br>';
}


/*
    ✨ if~else
*/
if (false) {
    echo 'Hello, World!<br>';
} else {
    echo 'Bye<br>';
}


/*
    ✨ if~elseif~else
*/
if (false) {
    echo 'Hello, World<br>';
} elseif (true) {
    echo 'Who are you?<br>';
} else {
    echo 'Bye<br>';
}


/*
    Define Variables in If Context.
*/
if ($message = 'Hello, World!<br>'){
    echo $message;
}

if (true):
    echo 'Hello, endif!<br>';
endif;

if (false):
    echo 'Hello, endif!<br>';
elseif(true):
    echo 'Hello, endifElseif<br>';
else:
    echo 'Bye';
endif;


/*
    ✨ Switch ~ case.
*/
$context = 1;
switch ($context){
    case 1:
        echo 'Hello, world<br>';
        break;
    case 2:
        echo 'Hello, world<br>';
        break;
    default:
        echo 'Bye<br>';
}
switch($context):
    case 1:
        echo 'Hello, world123<br>';
        break;
    case 2:
        echo 'Hello, world<br>';
        break;
    default:
        echo 'Bye<br>';
endswitch;



/*
    ✨ Swich ~ case -> if
*/
if ($context == 1){
    echo 'Hello, world<br>';
} elseif ($context == 2){
    echo 'Woh are you?<br>';
} else {
    echo 'Bye<br>';
}



/*
    ✨✨✨ 삼항연산자
*/
echo true ? 'asdfasdf<br>' : 'mnbmnb<br>';
echo false ? 'asdfasdf<br>' : 'mnbmnb<br>';

// 앞에 것이 참인지 물어보고 앞에 것이 참이면 앞에 것을 출력
echo 'asdfasdf<br>' ?: 'mnbmnb<br>';
echo false ?: 'mnbmnb<br>';


/*
    ✨✨✨ for.
*/
for ( $i = 1; $i <= 10; $i++ ){
    echo ($i.'<br>');
}
$message =[
    '<br>Hello, world<br>',
    'Who are you?<br>',
    'Bye<br><br>'
];
for ( $i = 0; $i < count($message); $i++ ){
    echo $message[$i] . PHP_EOL;
}






/*
    ✨ foreach (as [$key => ] $value).
*/
$reponse = [
    // 'name' => 'PHP',
    // 'categoryId' => 0,
    'messages' => [
        'Hello, world<br>',
        'Who are you?<br>',
        'Bye<br>',
    ]
];

foreach ($reponse as $key => $value){
    // echo $value . PHP_EOL;
    foreach ($value as $msg){
        echo $msg . PHP_EOL;
    }
}

/*
    ✨ for with array.
*/




/*
    ✨ while문
*/
// for ($i = 0; $i <= 10; $i++){
//     echo $i;
// }



$i = 0;
while ($i < 10){
    echo $i++;
}



/*
    ✨ do ~ while문
*/
$i = 0;

do {
    echo ('<br>'.$i++);
} while ($i < 10);


/*
    ✨ break[Level]
*/
for ($i = 0; $i < 10; $i++){
    for($j = 0; $j < 10; $j++){
        break 2;
    }
    echo $i;
}


/*
    ✨ continue[Level]
*/

$sum = 0;
for ($i = 0; $i < 10; $i++){
    for ($j =0; $j < 10; $j++){
        continue 2;
    }
    $sum +=$i;
}
echo ('<br><br>'.$sum);























































































?>