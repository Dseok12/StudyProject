// 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// a^5 = a * a * a * a * a

/*
// 내장함수를 사용한 방식

const squared = (a, b) => {
  console.log(Math.pow(a,b))
}
squared(2,8);
*/



/*
// 거듭제곱 연산자를 활용한 방식

const squared = (a, b) => {
  console.log(a**b)
}
squared(2,8)
*/

/*
// a를 b번만큼 반복해서 곱해라

const squared = (a, b) => {
  for(let i = 0; i <= b; i++){
    console.log(a*(b*i))
  }
}
squared(2,5)
*/


// -----------------------------------------------------------------
/*
몫과 나머지
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번쨰 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

입력 : 10 2
출력 : 5 0
*/

const num = ['7', '2']

let a = Math.floor(parseInt(num[0], 10)/parseInt(num[1], 10));
let b = parseInt(num[0], 10)%parseInt(num[1], 10);

console.log(a, b);







