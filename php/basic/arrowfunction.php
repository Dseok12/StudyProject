<?php
/*
    Arrow function
    PHP 7.4
    한 줄로만 작성이 가능하다.
*/

$message = 'Hello, world1';

function foo ($callback) {
    echo $callback();
}

// foo( function() use ($message) {
//     return $message;
// } );

// foo(fn()=>$message);

$fn = function ($var) {
    return 'Hello, world';
};

$fn = fn($var) => 'Hello, world';


















































































?>