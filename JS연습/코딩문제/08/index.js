a = [10, 11, 12, 13, 14, 15]

a.forEach(function(v, i){
  console.log(v, i, this)
}, [1, 2])


// map -> 모든 배열을 전부 꺼내고 조건이 만족하지 않을 때에는 undefined로 출력된다.
let answer = a.map(function(v, i){
  return v*i
}, [1, 2])
console.log(answer)


// filter 딱 원하는 값만 뽑아내서 새로운 배열을 만든다.
let answer2 = a.filter(function(v, i){
  return v%2 == 1;
}, [1, 2])
console.log(answer2)


// reduce는 배열을 출력하는 것이 아니라 값을 출력한다.
let answer3 = a.reduce(function(acc, v){
  return acc + v;
}, 0)
console.log(answer3)



