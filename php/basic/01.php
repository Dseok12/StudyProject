<?php



// echo 'Hellow World!';

//🙌 상수 선언할 때
const CONSTANT = 10;
var_dump(CONSTANT);

define('CONSTANT02', 'Hellow World');
echo ('<br>');
var_dump(CONSTANT02);

//🙌 boolean형
echo ('<br>');
const CONSTANT01 = true;
echo ('<br>');
var_dump(CONSTANT01);
echo ('<br>');
echo 'Hellow, ' . 'World! <br>';



// 밑에거는 변수 message가 null이면은 Hellow World를 출력해준다.
// 변수 message가 null이 아니면 대입한 값을 출력해준다. 
// ?? <- null인가를 물어보는 연산자
$message = null;
// $message = 1;
echo ('<br>');
echo $message ?? 'Hellow World <br>';

//🙌 논리 연산자
// and 연산자 = &&
// 둘 다 같은 값이 나와야 true가 나온다.
echo ('<br>');
var_dump(true && true);

// or 연산자 = ||
// 둘 중 하나라도 true면 true가 나온다.
echo ('<br>');
var_dump(true || false);

// xor 연산자는 기호가 없다.
// 두개가 달라야 true가 나온다.
var_dump(true xor false);
echo ('<br>');
var_dump(true xor true);

//🙌  not 연산자 = !
// 결과값의 반대, 예를 들면 결과값이 true면 결과값은 false가 나온다.
var_dump(!true);

//🙌 비교연산자
echo ('<br>');
echo ('<br>비교연산자');
echo ('<br>');
var_dump (10 == 10);
echo ('<br>');
var_dump (10 === 10);
echo ('<br>');
var_dump (10 != 10);
echo ('<br>');




//🙌 부등호
echo ('<br>');
echo ('부등호 <br>');
var_dump(10 <=> 20);
echo ('<br>');
var_dump(20 <=> 20);
echo ('<br>');
var_dump(30 <=> 20);
echo ('<br>');
var_dump('ab'>'ac');
echo ('<br>');
var_dump(10<>20); // '10과 20이 같지 않다.'라는 것을 물어보는 것
echo ('<br>');


//🙌 비트연산자
echo ('<br>');
echo ('비트연산자<br>');
$bin = 0b0101; // -> 5
echo ('<br>');
$bin | 0b0100; // -> 0b0101 ->5
echo ('<br>');
$bin & 0b0100; // -> 0b0100
echo ('<br>');
$bin ^ 0b0100; // -> 0b0001
echo ('<br>');
$bin << 1; // -> 0b1010
echo ('<br>');
$bin >> 1; // -> 0b0010 -> 2
echo ('<br>');
~$bin; // -> 0b1010 -> -6
echo ('코드에 관련 내용있음. <br><br>');


//🙌 산술관련 연산자
echo ('산술관련 연산자<br>');
2 + 2;
17 - 3.5;
10 / 3;
6 * 9;
4 % 3; // 나머지 연산자 -> 1이 나옴.
echo ("나누기 후 나머지 연산자 -> 4 나누기 3의 나머지 : " . 4%3 . '<br>'); // -> 1
echo ("거듭제곱 연산자 -> 2^4 : " . 2**4);


//🙌 Incrementing 증감식
echo ('<br>');
echo ('<br>');
echo ('<br>');
echo('Incrementing <br>');
echo ('<br>');
$count = 0;
echo ($count++);

// 단독으로 쓰였을때
$count01 = 0;
echo ('<br>단독으로 쓰였을 때: ' . $count01 = $count01 + 1);
echo('<br>');
echo($count01++);
echo('<br>');
echo(++$count01);
$count01 = $count01 + 1; // -> 1
$count01++;
++$count01;



//🙌 할당 연산자
// =, +=, -=, /=, *=, %=, **=, &=, |=, ^=, <<=, >>=, .=
echo('<br>');
echo('<br>');
echo('<br>');
echo('할당 연산자');
echo('<br>');
$count02 = 0;
echo ('$count02 = $count02 + 1: '.$count02 = $count02 + 1 .'<br>');
// echo ('$count02 += 1: ' . $count02 += 1 . '<br>');
echo('<br>');
$message = 'Hello, ';
$message .= 'World!';
echo ($message);



/* 🙌 Operator Precedence.
    Comparison > Logical
    🤳 우선순위: 산술연산자 -> 비교연산자 -> 논리연산자 순서
*/
echo('<br>');
echo('<br>');
echo('<br>');
true && 10 < 20 == true && 10 > 20;
true && (10 < 20) == true && (10 > 20);
true && true == true && false;
true && true && false;
true && false;




























































