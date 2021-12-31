/*
31번
3
*/


/*
32번 문자열 만들기
취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다.
열심히 자기소개서를 작성하던 도중 혜림이는 자기가 단어를 얼마나 적었는지 궁금하게 됩니다.

혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해주세요.

입력: 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
출력: 5


풀이시작)

const 자소서단어검색기 = (x) => {
  const 입력받은문자열 = `${x}`;
  const 구분하기 = 입력받은문자열.split(' ');
  console.log(구분하기.length)
}
자소서단어검색기('안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.')
*/




/*
  33번
  한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
  
  입력: 1 2 3 4 5
  출력: 5 4 3 2 1

  입력: 2 4 6 7 8
  출력: 8 7 6 4 2


  풀이시작)

  const 거꾸로출력기 = (x) => {
    const 입력받은배열 = x;
    const 거꾸로출력 = 입력받은배열.split(' ').reverse().join(' ');
    console.log(거꾸로출력)
  }
  const arr1 = '1 2 3 4 5';
  거꾸로출력기(arr1);
  
  const arr2 = '2 3 6 7 8';
  거꾸로출력기(arr2);
  
  const arr3 = '12 15 16 18';
  거꾸로출력기(arr3);
*/




/*
  34번
  sort구현하기
  민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자
  작은순서대로 나열되있으면, YES
  반대면, NO
  
  입력: 176 156 155 165 166 169
  출력: NO

  입력: 155 156 165 166 169 176
  출력: YES


  풀이시작)

  const 작은놈앞으로 = (x) => {
    const 입력받은순서 = x.split(' ');
    for(let i = 0; i < 입력받은순서.length; i++){
  
      for(let j = 0; j < 입력받은순서.length; j++) {
        if(입력받은순서[j] < 입력받은순서[j+1]){
  
        }
      }
  
      if(입력받은순서[i] > 입력받은순서[i+1]){
        console.log('NO')
      } else {
        console.log('YES')
      }
  
      return
    }
  
  };
  
  const arr1 = '176 156 155 165 166 168';
  작은놈앞으로(arr1);
  
  const arr2 = '155 156 165 166 169 176';
  작은놈앞으로(arr2);
  
  const arr3 = '2 5 3 4 7 6';
  작은놈앞으로(arr3);
  
  const arr4 = '0 3 4 5 6 7';
  작은놈앞으로(arr4);



  // 태원이가 짠거
  const solution = (personheight) => {
    let boll= 0;
    personheight = personheight.split(" ");
    for(let i=0; i<personheight.length; i++){
        for(let j=i; j<personheight.length; j++){
            if(personheight[i] > personheight[j]){
                console.log("NO");
                return;
            }
        }
    }
    console.log("YES");
}

solution("1 2 3 4 5");
solution("5 1 2 3 4");
solution("4 5 1 2 3");
solution("3 4 5 1 2");
solution("2 3 4 5 1");
*/


/*
  35번
  2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.
  <pass>에 코드를 작성하여 two함수를 완성하시오.

  풀이)
  // 반칙씀

  function one (n) {
    function two (m) {
      return m**n
    }
    return two;
  };
  
  const a = one(2);
  const b = one(3);
  const c = one(4);
  
  console.log(a(10));
  console.log(b(10));
  console.log(c(10));
*/



/*
  36번 구구단 출력하기
  1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 만드시오.

  입력: 2
  출력: 2 4 6 8 10 12 14 16 18

  
  풀이)

  const 구구단 = (n) => {
    const 배열초기화 = [];
    for(let i = 1; i <= 9; i++){
      배열초기화[i] = n * i;
    }
    console.log(배열초기화.join(' '))
  }
  구구단(2)
*/

/*
  37번 반장 선거
  새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다. 그런데 표를 하나씩 개표하는 과정이
  너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력 받으면 뽑힌 학생의 이름과 받은 표 수를
  출력하는 프로그램을 작성하기로 하였습니다.

  입력: 원범 원범 혜원 혜원 혜원 유진 유진
  출력: 혜원(이)가 총 4표로 반장이 되었습니다.

  일단, 모양과 자료형이 같은거 세고,
  가장 많은 것만 걸러서,
  가장 많은 것만 출력해주면됨.


  */
const 대장뽑기 = (n) => {
  const 투표받음 = n;
  const 배열로받음 = 투표받음.split(' ');
  배열로받음.sort((a, b) => { return ( a < b ) ? -1 : ( a==b ) ? 0 : 1 });
  // console.log(배열로받음);
  
  for( let i = 0; i < 배열로받음.length; i++ ) {
    if ( 배열로받음[i] === 배열로받음[i+1] ){
      console.log(배열로받음[i]);
    };
    return;
  };
};

대장뽑기('원범 원범 혜원 혜원 혜원 혜원 유진 유진');










/*
  38번 호준이의 아르바이트
  1위~3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
  학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

  입력: 97 86 75 66 55 97 85 97 97 95
  출력: 6
*/
















/*
  39번 오타 수정하기
  문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

  입력: qurety / hqllo my namq is hyqwon
  출력: euerty / hello my name id hyewon
*/

/*
// 확장성 고려

const 단어바꿔주는기계 = (x, y, z) => {
  const 입력된단어 = x;
  const 바꿔줄단어 = 입력된단어.replace(y, z);
  console.log(바꿔줄단어);
};

단어바꿔주는기계('qurety', 'q', 'e');
단어바꿔주는기계('hqllo my namq is hyqwon', 'q', 'e');
*/


/*
// 문제에서 원하는 답

const 단어바꿔주는기계2 = (x) => {
  const 입력된단어2 = x;
  const 바꿔줄단어2 = 입력된단어2.replace('q', 'e');
  console.log(바꿔줄단어2);
};

단어바꿔주는기계2('qurety');
단어바꿔주는기계2('hqllo my namq is hyqwon');
*/






/*
  40번 놀이동산에 가자
  모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.
  원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

  첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
  그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

  입력: 50 5 20 20 20 20 20
  출력: 2
*/











































