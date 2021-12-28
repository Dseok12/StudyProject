/*
26번 행성문제2.
수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성
Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune

행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만드시오.
*/

// const kor = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
// const eng = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

/*
각 배열이 각 index와 서로 일치
수성을 입력하면 Mercury가 나옴
ex) kor[1] = eng[1]
    kor[2] = eng[2]
    kor[3] = eng[3]


    const 행성 = {
      수성: 'Mercury',
      금성: 'Venus',
      지구: 'Earth',
      화성: 'Mars',
      목성: 'Jupiter',
      토성: 'Saturn',
      천왕성: 'Uranus',
      해왕성: 'Neptune'
    }
    console.log(행성.지구)
*/




/*
27번. 객체만들기
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 고백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력하시오.

입력 : Yujin Hyewon
      70 100

출력 : {'Yujin': 70, 'Hyewon': 100}


class 학생 {
  constructor (name, math) {
    this.name = name;
    this.math = math;
  }
}

const 유진 = new 학생('Yujin', 70)
console.log(유진)
const 혜원 = new 학생('Hyewon', 100)
console.log(혜원)


const 학생2 = {
  'Yujin' : 70,
  'Hyewon' : 100
}
console.log(학생2)
*/




/*
28번 2-gram문제
2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
예를 들어 'Jacascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

입력: Javascript
출력
J a
a v
v s
s c
c r
r i
i p
p t

입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성하시오.


function 쪼개기 (c) {
  const 문자열대입 = c;
  for(let i = 0; i < 문자열대입.length-1; i++){
    const 문자열쪼개기 = 문자열대입.substring(i,i+2);
    console.log(문자열쪼개기);
  }
}
쪼개기('Javasctipt');
*/



/*
  29번.
  진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데
  오늘은 대문자 쓰기 시험을 봤습니다.
  
  알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만드세요.
  
  
  function 대소문자구별 (c) {
    if(c === c.toUpperCase()){
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
  
  대소문자구별('A')
 */


























/*
  30번 문자열 속 문자 찾기
  
  문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
  첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
  그 문자가 시작하는 index를 반환하는 프로그램을 만드시오.
  
  입력: pineapple is yummy / apple
  출력: 4
 */

















