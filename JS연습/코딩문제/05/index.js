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
*/
















































































