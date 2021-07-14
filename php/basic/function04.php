<?php
/*
    First class function. 일급함수
*/
$foo = function (){
    return '1. Hello, World!';
};

echo $foo();




function foo ($callback){
    echo $callback();
};

foo (
    function () {
        return '<br>2. callback함수';
    }
);



/*
    Higher-drder function 고차함수
*/
function foo2(){
    return function(){
        return '<br>3. 고차함수';
    };
}

$func = foo2();
echo $func();// 3. 고차함수


?>