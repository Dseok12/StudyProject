/* While문 */

// let count = 1;

// // 무한루프
// while (true) {
//   console.log(count);
//   count++;

//   // count가 3이면(2까지) 멈춤
//   if(count === 3) break;
// }

/*
var num = '안녕';
console.log(typeof(parseInt(num)))
*/


/*
  1. swich문을 이용하여 홀수, 짝수를 출력하는 프로그램을 만드세요.
*/

/*
call by referecne

const a = {
  greeting : `Hello ${this.name}`,
  name : 'raven'
}
let b;
b = a;

console.log(b);
b.name = 'parrot'
console.log(a);
console.log(a === b);
*/

function changVal (primitive, obj){
  primitive += 100;
  obj.name = 'Kim';
}

var num = 300;
var person = {name: 'Lee'};

console.log(num);
console.log(person);

changVal(num, person);
console.log(num);
console.log(person);



