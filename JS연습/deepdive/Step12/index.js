
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
  }
}
커피머신('바닐라라떼', 2000);
// 커피머신('에스프레소', 2000);
// 커피머신('아메리카노', 2000);
// 커피머신('바닐라라떼', 4000);
// 커피머신('연유라떼', 5000);
// 커피머신('나때', 5000);
*/


const res1 = 1 + '입니다.'
console.log(typeof res1, res1)


const res2 = '11' + 11
console.log(typeof res2, res2)


const res3 = '2' * '2'
console.log(typeof res3, res3)


const res3_1 = '2' * 3
console.log(typeof res3_1, res3_1)


const res4 = ['111'] + '111'
console.log(typeof res4, res4)


// const res5 = {t = '111'} + '111'
// console.log(typeof res5, res5)

















































