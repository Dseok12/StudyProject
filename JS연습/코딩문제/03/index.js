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
*/

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










/*
27번. 객체만들기
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 고백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력하시오.

입력 : Yujin Hyewon
      70 100

출력 : {'Yujin': 70, 'Hyewon': 100}
*/
