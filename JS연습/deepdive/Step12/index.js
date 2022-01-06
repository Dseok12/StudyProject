
/*
let x = 1
if( x+1 ){
  console.log('조건식이 불리언값이 아닙니다')
}else{
  console.log('왜 출력이 되는거냐?')
}

const 테스트1 = (a) => {
  let num1 = a;
  let kind1 = num1 ? (num1 > 0 ? '양수' : '음수') :'영'
  console.log(kind1)
}
테스트1(1)
테스트1(0)
테스트1(-2)
*/



/*
const 커피머신 = (커피, 가격) => {
  // switch 들어오는 input값이 정해져있을 때 -> 들어오는 값이 확실히 있을 때 가독성이 높아짐
  switch(커피) {
    // case 가격 < 0:
    //   return console.log(`돈이 모자랍니다.`);
    // break;
    case '에스프레소':
      return console.log(`시키신 음료는 ${커피}이고, 거스름돈은 ${가격-1500}원입니다.`);
      break;
    case '아메리카노':
      return console.log(`시키신 음료는 ${커피}이고, 거스름돈은 ${가격-2000}원입니다.`);
    break;
    case '바닐라라떼':
      return console.log(`시키신 음료는 ${커피}이고, 거스름돈은 ${가격-3000}원입니다.`);
    break;
    case '연유라떼':
      return console.log(`시키신 음료는 ${커피}이고, 거스름돈은 ${가격-3500}원입니다.`);
    break;
    default:
      return console.log(`죄송하지만, ${커피}는(은) 없는 커피입니다.`);
      break;
  }
}
// 커피머신('바닐라라떼', 2000);
커피머신('에스프레소', 2000);
// 커피머신('아메리카노', 2000);
커피머신('바닐라라떼', 4000);
// 커피머신('연유라떼', 5000);
// 커피머신('나때', 5000);
*/

// const res1 = 1 + '입니다.'
// console.log(typeof res1, res1)


// const res2 = '11' + 11
// console.log(typeof res2, res2)


// const res3 = '2' * '2'
// console.log(typeof res3, res3)

// 더하기 연산자를 제외하고, 숫자 문자열(일때만)끼리 연산하면 암묵적으로 Number로 바뀐다..


// const res3_1 = '2' * 3
// console.log(typeof res3_1, res3_1)


// const res4 = ['2'] * '3'
// console.log(typeof res4, res4)


// const res5 = {t = '111'} + '111'
// console.log(typeof res5, res5)

/*
*/

/*
const isTruthy = (v) => {
  // !!가 2개가 붙으면 반대의 반대
  // 근데..뭐.. 이렇게까지 쓸까싶다..;; <- 의문해결
  return console.log(!!v)
}

isTruthy(true)
*/

/*
// return, break차이와 함수 매개변수에 기본값을 설정할 때
const getString = (str = '') => {
  return console.log(str.length)
}
getString()
getString('hi')


// const getString2 = (str = '') => {
//   break; 
//   console.log(str.length)
// }
// getString2()
// getString2('hi')
*/

/*
const getString3 = (a) => {
  for(let i = 0; i < a; i++){
    console.log(a-i)
  }
  return a;
}

getString3(5)



const getString4 = (a) => {
  for(let i = 0; i < a; i++){
    console.log(100)
    break;
  }
}

getString4(5)
*/

/*
// 옵셔널 체이닝 연산자
// -> 객체값을 확인할때 
// -> JSON 다룰때 주로 씀
let elem = null;

let value = elem ?. value;
console.log(value)



let elem2 = null;

let value2 = elem2 && elem2.value;
console.log(value2)



let elem3 = '';

let length = elem3 && elem3.length;
console.log(length)



let elem4 = '123';

let length2 = elem4?.length;
console.log(length2)



let elem5 = {
  a: '1',
  b: '3'
}
let length3 = elem5?.length;
console.log(length3)
*/
