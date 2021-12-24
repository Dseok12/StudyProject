// 배열 고차함수 reduce로 평균값, 최대값, 요소의 중복 횟수 구하기


// 평균구하기
const val1 = [1,2,3,4,5,6];

const average = val1.reduce((acc, cur, i, { length }) => {
  // 마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환한다.
  return i === length - 1 ? (acc + cur) / length : acc + cur;
})
console.log(average)


// 최대값 구하기
const val2 = [1,2,3,4,5];
const max = val2.reduce((acc, cur) => (acc > cur ? acc : cur), 0)
console.log(max)


// 요소의 중복 횟수 구하기
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple']
const count = fruits.reduce((acc, cur) => {
  // 첫 번째 순회 시 acc는 초기값 {}이고 cur은 첫 번째 요소인 'banana'다.
  // 초기값으로 전달받은 빈 객체에 요소값인 cur을 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당한다.
  // 만약 프로퍼티 값이 undefined(처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화한다.
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {})
console.log(count)


/*
let arr = [200, 100, 300];

const solution = (a, i) => {
  let a = new Array;
  let i = 0;
  
}
console.log(solution(1))
*/











