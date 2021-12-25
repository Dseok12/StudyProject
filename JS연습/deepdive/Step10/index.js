// Set과 Map

// Set 생성자 함수는 이터러블을 인수로 전달받아 Set 🎇객체를 생성한다.🎇 이때 이터러블의 중복된 값은 Set 객체에 요소로 저장되지 않는다.

const set1 = new Set('hello')
console.log(set1)



// Set 함수는 중복 허용 안함.
// Set에 추가하는 메서드 add()
const set = new Set();
console.log(set);

set.add(1);
console.log(set);

set.add(1).add(2);
console.log(set);

set.add(1).add(2).add(2);
console.log(set);



// Set 존재여부확인 has()
const set2 = new Set([1,2,3]);
console.log(set2.has(2));
console.log(set2.has(4));



// Set 요소 삭제 delete()
const set3 = new Set([4,5,6])
set3.delete(4)
console.log(set3)


// Set 객체로 교집합, 합집합, 차집합들을 구현할 수 있다.
