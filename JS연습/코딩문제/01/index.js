// 평균 점수 문제
// 입력: 20 30 40
// 출력: 30


const score = [20, 30, 40]
// let sum = 0;

/*
let sum = score[0] + score[1] + score[2];
console.log(sum)
const average = sum / score.length;
console.log(Math.ceil(average))
*/
let sum = 0;
for (let i = 0; i < score.length; i++){
  sum += score[i]
  // console.log(sum)
  const average = sum / score.length;
  console.log(Math.ceil(average))
}





