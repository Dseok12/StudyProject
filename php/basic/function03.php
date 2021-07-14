<?php
/*
    💥💥💥 Define function
*/
function 푸(){
    echo 'Hello, World';
}
푸(); // -> Hello, World 출력


/*
    for ( $i = 0; $i < 10; $i++ ){
        echo $i;
    }
*/




/*
    💥💥💥 Variables function 가변함수 -> 남용이나 오용을 하면 안된다.
*/
$fn = '푸';
$fn();


/*
    💥💥💥 Define function with Parameters.
    function <name>([[datatype] <param_name> [= defualt value], ...])
*/
function foo(String $arg){
    echo $arg;
}

foo('<br>Hello, World');


/*
    💥💥💥 Default Parameter
*/
function foo2($arg = 'Hello, World'){
    echo $arg;
}
foo2('<br>Who are you?');



/*
    💥💥💥 Define function with Rest paramerters.
*/

function foo3(...$args){
    var_dump($args);
}

foo3('Hello, world', 'Who are you?', 'Bye');


/*
    💥💥💥 Call function with Spreed.
*/
function foo4($arg1, $arg2, $arg3){
    var_dump($arg1, $arg2, $arg3);
}
$args = ['Hello, world', 'Who are you?', 'Bye'];

foo4(...$args);


/*
    💥💥💥 return value.
    function <name> ( ... )[: <return_type>]
*/

echo '<br><br>retun 설명: ';
function foo5(){
    return '<br>Hello, world';
}

echo foo5();



/*
    💥💥💥 return with context.
*/
function foo6($is){
    if($is){
        return '<br>Hello, world!!';
    }
    return '<br>Bye';
}
echo foo6(true);
echo foo6(false);


/*
    return variables
*/

function foo7($arg){
    return $arg;
}
echo foo7('<br>안녕, 세상아');















































































?>