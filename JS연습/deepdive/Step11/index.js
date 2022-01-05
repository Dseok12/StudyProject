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


/*
네모찍기
const 네모찍기 = (a) => {
  let star1 = ''
  for(let j = 1; j < a ; j++){
    star1 += '*'
  }
  console.log(star1)
  for(let i = 1; i <= a-1; i++){
    star1 += ' '
    console.log(star1)
  }
}
네모찍기(6)
*/


/*
const 좌측직각삼각형 = (a) => {
  let star1 = ''
  for(let i = 1; i <= a; i++){
    star1 += '*'
    console.log(star1)
  }
}
좌측직각삼각형(5)
*/

/*
const 좌측직각삼각형 = (a) => {
  let star1 = ''
  for(let i = 1; i <= a; i++){
    star1 += '*'
    console.log(star1)
  }
}
좌측직각삼각형(5)
*/



/*
const 좌측역삼각형 = (a) => {
  for(let i = 0; i < a; i++){
    let star1 = ''
    for(let j = 1; j <= a-i; j++ ){
      star1 += '*'
    }
    console.log(star1)
  }
}

좌측역삼각형(5)
*/




// let a = 5
/*
const 우측직각삼각형 = (a) => {
  
  for(let i = 1; i < a; i++){
    let star1 = ''
    for(let k = 1; k < a-i; k++){
      star1 += ' '
    }
    for(let j = 0; j <= i-1; j++){
      star1 += '*'
    }
    console.log(star1)
  }

}
우측직각삼각형(5)
*/


/*
const 우측삼각형2 = (a) => {
  for(let i =1; i < a; i++){
    let star2 = '';
    for(let j = 1; j < a - i; j++){
      star2 += ' '
    }
    for(let k = 0; k <= i -1; k++){
      star2 += '*'
    }
    console.log(star2)
  }
}
우측삼각형2(5)
*/



/*
const 정삼각형 = (a) => {
  for(let i =1; i <= a; i++){
    let star2 = '';
    for(let j = 1; j <= a - i; j++){
      star2 += ' '
    }
    for(let k = 1; k <= i * 2 -1; k++){
      star2 += '*'
    }
    console.log(star2)
  }
}
정삼각형(10)
*/




/*
const 역정삼각형 = (a) => {
  for(let i = 0; i < a; i++){
    let star1 = ''
    for(let j = a; j < a+i; j++ ){
      star1 += ' '
    }
    for(let j = 1; j < a-i; j++ ){
      star1 += '1'
    }
    for(let j = 1; j <= a-i; j++ ){
      star1 += '*'
    }
    console.log(star1)
  }
}

역정삼각형(5)
*/


/*
const 마름모 = (a) => {
  for(let i = 0; i <= a; i++){
    let star2 = '';
    for(let j = 1; j <= a - i; j++){
      star2 += ' '
    }
    for(let k = 1; k <= i * 2 -1; k++){
      star2 += '*'
    }
    console.log(star2)
  }
  for(let i = 1; i < a; i++){
    let star1 = ''
    for(let j = a; j < a+i; j++ ){
      star1 += ' '
    }
    for(let j = 1; j < a-i; j++ ){
      star1 += '*'
    }
    for(let j = 1; j <= a-i; j++ ){
      star1 += '*'
    }
    console.log(star1)
  }
}

마름모(8)
*/



/*
*/
const 마름모 = (a) => {
  if( a === 1 ){
    console.log(`입력하신 값이 ${a}으로 마름모를 만들 수 없습니다.`)
  } else if( a === 2 ){
    console.log(`입력하신 값이 ${a}으로 마름모를 만들 수 없습니다.`)
  } else if ( a % 2 === 1) {
    console.log(`입력하신 값이 홀수 ${a}`)
    // 위에 삼각형
    for(let i = a/2; i < a; i++){
      let star = '';
      for(let j = 1; j <= a -i; j++){
        star += ' '
      }
      for(let k = 0; k < i*2-1; k++){
        star += '*'
      }
      console.log(star)
    }
    // 아래 삼각형
    for(let i = a/2; i < a; i++){
      let star = '';
      for(let j = 1; j <= a -i; j++){
        star += ' '
      }
      for(let k = 0; k < i*2-1; k++){
        star += '*'
      }
      console.log(star)
    }
  } else {
    console.log(`입력하신 값이 짝수 ${a}`)

    // 위에 정삼각형
    for(let i = a/2; i < a; i++){
      let star = '';
      for(let j = 1; j < a -i; j++){
        star += ' '
      }
      for(let k = 2; k < i*2; k++){
        star += '*'
      }
      console.log(star)
    }
    // 아래 역정삼각형
    for(let i = a/2; i < a; i++){
      let star = '';
      for(let j = 1; j < a - i; j++){
        star += ' '
      }
      for(let k = 2; k < i*2; k++){
        star += '*'
      }
      console.log(star)
    }
  }
}

// 마름모(1)
// 마름모(2)
마름모(3)
// 마름모(5)
마름모(6)
// 마름모(6)
// 마름모(8)














