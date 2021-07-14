<?php


/*
    Access Global Variables.
*/
$message = 'Hello, World!';

function foo(){

    // global $message;
    $GLOBALS['message'] = 'Who are you?';

    // $message = 'Who are you?';

    // echo $message;
}
foo();








/*
    Static variables.
*/

function foo2(){
    static $count = 0;

    return ++$count;
}

echo foo2();
echo foo2();





/*
    Clousre.
*/
function foo3($arg) {
    // echo $arg;
    return function () use($arg) {
        return $arg;
    };
}

$func = foo3('<br>이것은 Clousre입니다.');
echo $func();


/*
    Constants Scope.
*/


// const MESSAGE = 'Hello, world'; const로는 정의 할 수 없다.

function foo4() {
    define('MESSAGE', '<br>Hello, world123');
}

foo4();

echo MESSAGE;





/*
    Callbacks (Don't need 'use).
*/







































?>