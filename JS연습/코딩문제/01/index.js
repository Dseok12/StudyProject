// 평균 점수 문제
// 입력: 20 30 40
// 출력: 30


const score = '20 30 40'
// const score = [20, 30, 40]
// let sum = 0;

/*
const 문자열 = score.split(' ');
console.log(문자열);
//  문자열[0] + 문자열[1] + 문자열[2]
for()

// let sum = score[0] + score[1] + score[2];
// console.log(sum)
const average = sum / score.length;
console.log(Math.ceil(average))
*/
// const arr = ['10', '20']
// console.log(parseInt(arr))
/* 
*/
let num = 0;
let sum = 0;
const 문자열 = score.split(' ');
const 문자열배열 = 문자열.map(num => sum += Number(num));
console.log(문자열배열)
for (let i = 0; i < 문자열.length; i++){
  // sum += 문자열배열[i]
  // console.log(sum)
}
// const average = sum / 문자열.length;
// console.log(Math.ceil(sum / 문자열.length))





