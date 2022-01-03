/*

파싱
파싱은 프로그래밍 언어의 문법에 맞게 작성된 텍스트 문서를 읽어 들여 실행하기 위해 텍스트 문서의
문자열을 토큰으로 분해하고 , 토큰에 문법적 의미와 구조를 반영하여 트리 구조의 자료구조인 파스 트리를
생성하는 일련의 과정을 말한다. 일반적으로 파싱이 완료된 이후에는 파스 트리를 기반으로 중간 언어인
바이트코드를 생성하고 실행한다.

const 구구단전부 = (a) => {
  for(let i = 1; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
      console.log(a*j) // return을 쓰면 특정 x단 뽑기
      // console.log((2*a)*j) // 짝수 찍기
      // console.log(((2*a)-1)*j) // 홀수 찍기
      // console.log(((2*a)-1)*(2*j-1)) // 홀수 찍기
    }
    return
  }
}

구구단전부(2)


const 홀수에서홀수 = (a) => {
  for( let i = 2; i <= 5; i++ ){
    for( let j = 1; j <= 5; j++ ){
      console.log(((2*i)-1)*((2*j)-1))
    }
  }
}

홀수에서홀수();


for(let i=3; i<10; i+=2){
  for(let j=1; j<10; j+=2){
      console.log(i*j);
  }
}

*/


/*



const 구구단한단씩 = (b) => {
  for (let i = 1; i <= 9; i++){
    console.log(b*i)
  }
}

구구단한단씩(23)

*/

/*
  별찍기
*/


// 네모찍기
let star = '*';
const 네모찍기 = (a, b) => {
  for( let i = 1; i <= a; i++ ){
    console.log(star);
    for( let j = 1; j <= b; j++ ){
      console.log(j);
    };
  };
};

네모찍기(5,5);








