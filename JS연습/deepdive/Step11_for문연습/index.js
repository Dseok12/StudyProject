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
      for(let k = 1; k < i*2-1; k++){
        star += '*'
      }
      console.log(star)
    }
    // 아래 삼각형
    for(let i = a/2; i < a-1; i++){
      let star = '';
      for(let j = 1; j <= i; j++){
        star += '1'
      }
      for(let k = 1; k < (a-i); k++){
        star += '*'
      }
      console.log(star)
    }
  } else {
    console.log(`입력하신 값이 짝수 ${a}`)

    // 위에 정삼각형
    for(let i = a/2; i < a; i++){
      let star = '';
      for(let j = 1; j < a - i; j++){
        star += ' '
      }
      for(let k = 0; k < i*2; k++){
        star += '*'
      }
      console.log(star)
    }
    // 아래 역정삼각형
    for(let i = a/2; i < a; i++){
      let star = '';
      for(let j = 2; j < i-1; j++){
        star += ' '
      }
      for(let k = 2; k < (a-i)*2+a; k++){
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
// 마름모(6)
// 마름모(8)
// 마름모(10)
// 마름모(12)
*/


/*
const 마름모2 = (a) => {
  if(a === 1){
    return console.log(`입력하신 값이 ${a}이므로 마름모를 만들수가 없습니다.`)
  }else if(a === 2){
    return console.log(`입력하신 값이 ${a}이므로 마름모를 만들수가 없습니다.`)
  } else if(a % 2 === 0) {
    // 짝수
    console.log(`입력하신 값이 짝수 ${a}입니다.`)
    // 상단 삼각형
    for(let i = 2; i < a; i++){
      let star = ''
      for(let k = 1; k < a-i; k++){
        star += ' '
      }
      for(let j = 1; j < i * 2 - 1; j++){
        star += '*'
      }
      console.log(star)
    }
    // 하단 역삼각형
    for(let i = 2; i < a; i++){
      let star = ''
      for(let k = 2; k < i; k++){
        star += ' '
      }
      for(let j = 0; j < a-i; j++){
        star += '*'
      }
      for(let j = 0; j < a-i; j++){
        star += '*'
      }
      console.log(star)
    }
  } else {
    // 홀수
    console.log(`입력하신 홀수 값이 ${a}입니다.`)
    // 상단 삼각형
    for(let i = 1; i < a; i++){
      let star = ''
      for(let k = 0; k < a-i; k++){
        star += ' '
      }
      for(let j = 0; j < i * 2 -1; j++){
        star += '*'
      }
      console.log(star)
    }
    // 하단 삼각형
    for(let i = 2; i < a; i++){
      let star = ''
      for(let k = 0; k < i; k++){
        star += ' '
      }
      for(let j = 0; j < a-i; j++){
        star += '*'
      }
      for(let j = 1; j < a-i; j++){
        star += '*'
      }
      console.log(star)
    }
  }
}


// 마름모2(1)
// 마름모2(2)
// 마름모2(3)
마름모2(5)
// 마름모2(7)
// 마름모2(4)
마름모2(6)
// 마름모2(8)
// 마름모2(10)
*/



/*
*/
const 마름모3 = (a) =>{

}


// 마름모3(3)
// 마름모3(4)
// 마름모3(5)
// 마름모3(6)
// 마름모3(7)
// 마름모3(8)


/*
// 세진님이 짠거
const _repeat = (target, count) => {
  let str = "";
  for (let i = 0; i < count; i++) {
    str += target;
  }
  return str;
};

const createTopRowShape = (rhombus, starCount, columnCount, type) => {
  const blankCount = columnCount - starCount;
  if (type === "odd") {
    rhombus = `${rhombus + _repeat(" ", blankCount + 1) + _repeat("*", starCount) + _repeat("*", starCount - 1) + _repeat(" ", blankCount + 1)
      }\n`;

    return rhombus;
  }
  rhombus = `${rhombus + _repeat(" ", blankCount + 1) + _repeat("*", starCount) + _repeat("*", starCount) + _repeat(" ", blankCount)}\n`;

  return rhombus;
};

const createBottomRowShape = (rhombus, blankCount, columnCount, type) => {
  const starCount = columnCount - blankCount;
  if (type === "odd") {
    rhombus =
      rhombus +
      _repeat(" ", blankCount) +
      _repeat("*", starCount + 1) +
      _repeat("*", starCount) +
      _repeat(" ", blankCount);
    blankCount !== columnCount && (rhombus += "\n");

    return rhombus;
  }
  rhombus =
    rhombus +
    _repeat(" ", blankCount) +
    _repeat("*", starCount + 1) +
    _repeat("*", starCount + 1) +
    _repeat(" ", blankCount);
  blankCount !== columnCount && (rhombus += "\n");

  return rhombus;
};

const topShape = (topColumnCount, type) => {
  let rhombus = "";

  for (let i = 1; i <= topColumnCount; i++) {
    const row = "";
    rhombus += createTopRowShape(row, i, topColumnCount, type);
  }

  return rhombus;
};

const middleShape = (col, type) => {
  let rhombus = "";
  return type === "odd"
    ? rhombus += `${_repeat("*", col)}\n` // 홀
    : _repeat(`${_repeat("*", col)}\n`, 2); // 짝
};

const bottomShape = (bottomColumnCount, type) => {
  // 홀수 식일 때
  let rhombus = "";
  for (let i = 1; i <= bottomColumnCount; i++) {
    const row = "";
    rhombus += createBottomRowShape(row, i, bottomColumnCount, type);
  }

  return rhombus;
};

const solution = (col) => {
  let rhombus = "";
  // 5나누기 2는 2
  // 4나누기 2는 2
  // 홀수 짝수 구분
  const type = col % 2 === 0 ? "even" : "odd";
  const dividedCol = col % 2 === 0 ? Math.floor(col / 2) - 1 : Math.floor(col / 2);
  // 줄수가 하나 짧다. (첫번째를 생략)
  rhombus = topShape(dividedCol, type) + middleShape(col, type) + bottomShape(dividedCol, type);

  return rhombus;
};

log(solution(6));
*/

/*
// 파라미터 값은 세로 줄이다.
// 


const 빈사각형 = (a) => {
  let star = '';
  for(let i = 1; i <= a; i++){
    star = '*';
    for(let j = 2; j <= a; j++){
      // star += '*'
      if( i === 1 ){
        star += '*'
      } else if( i === a ) {
        star += '*'
      } else if( i === j ) {
        star += '1'
      } else {
        star += '2'
      }
    }
    console.log(star)
  }
}
// 빈사각형(2)
// 빈사각형(3)
// 빈사각형(4)
빈사각형(5)
*/



/*
// 파라미터 값은 세로 줄이다.
// 첫번째 세로 그리고 첫번째 가로 그리고 a번째 가로 그리고 a번째 세로에는 *을 찍어라
// 나머지는 짝수일 때 공백처리하고 홀수 일때는 a/2번째 가로는 *을 찍어라


const 빈사각형2 = (a) => {
  let star = ''
  if( a % 2 === 0 ){
    console.log(`입력하신 값은 짝수 ${a}입니다.`)

    for( let i = 1; i <= a+1; i++ ) {
      star = '*'
  
      // 2차원
      for( let j = 2; j <= a; j++){
        if( i === 1 || j === a ){
          star += '*'
        } else if( i === a+1) {
          star += '*'
        } else if ( i === Math.ceil(a/2)+1 ){
          star += '*'
        } else {
          star += ' '
        }
      }
  
      console.log(star)
    }
  } else {
    console.log(`입력하신 값은 홀수 ${a}입니다.`)
    for( let i = 1; i <= a; i++ ) {
      star = '*'
  
      // 2차원
      for( let j = 2; j <= a; j++){
        if( i === 1 || j === a ){
          star += '*'
        } else if( i === a) {
          star += '*'
        } else if ( i === Math.ceil(a/2) ){
          star += '*'
        } else {
          star += ' '
        }
      }
  
      console.log(star)
    }
  }
}

// 빈사각형2(3)
// 빈사각형2(4)
빈사각형2(5)
// 빈사각형2(7)
// 빈사각형2(6)
빈사각형2(8)
*/





/*
// 화살표 긋기
// 왼쪽 직사각형과 왼쪽 역직사각형을 합쳐서 뾰족한 부분을 만든다.
// 그 뒤에 직사각형을 만든다.
const 화살표 = (a) => {
  let star = ''
  // 사각형
  for( let i = 1; i <= a; i++){
    star = '*'
    for( let j = 2; j <= a; j++ ){
      star += '*'
    }
    console.log(star)
  }

  // 삼각형
  let star1 = ''
  for(let k = 1; k <= a; k++){
    star1 += '*'
    for(let z = 1; z <= a-k; z++){
      star1 += '1'
    }
    console.log(star1)
  }
}

화살표(3)
// 화살표(4)
// 화살표(5)
// 화살표(6)
// 화살표(7)
// 화살표(8)
*/



/*
화살표만들기

* 추상화하기
-> 사각형과 직각삼각형, 역직각삼각형 이어 붙힌걸로 만들기

* 구체화하기
-> 사각형 부분 따로 삼각형 부분 따로 for문을 돌린다.
-> 예를 들어 매개변수가 4이면 가로 4개 세로 3개짜리 사각형을 만들고,
-> 삼각형은 상단 직각삼각형은 2짜리, 하단은 역직각삼각형 2개짜리를 합친다.

* 일반화하기
-> 매개변수는 a
-> 사각형: 가로(내부f or문)은 4개씩, 세로(외부 for문)은 a-1
-> 삼각형: ??? 

const 화살표2 = (a) => {
  // 화살표를 만들 수 없는 경고 메시지
  if( a <= 2 ) {
    return console.log(`입력하신 값은 ${a}이므로 화살표를 만들 수 없습니다.`)
  }

  // 화살표는 3 이상부터 만들 수 있음
  let star = ''
  for(let i = 0; i <= a; i++){
    // 사각형 세로를 나눔
    if( i === 0 || i === a){
      star = ''
      for(let j = 1; j <= a; j++){
        star += ' '
      }
    } else {
      // 사각형 가로를 찍음
      star = ''
      for(let j = 1; j <= a; j++){
        star += '*'
      }
    }
    
    for(let j = 0; j <= i; j++){
      for(let k = 0; k <= a-i; k++){
        star += '*'
      }
    }
    console.log(star)
  }
}

// 화살표2(-1)
// 화살표2(1)
// 화살표2(2)
// 화살표2(3)
// 화살표2(4)
화살표2(5)
// 화살표2(6)
// 화살표2(7)
*/



/*
소수찾기

추상화하기
-> 자기 자신으로 나누었을 때 몫은 1, 나머지는 0
-> 1로 나누었을 때 몫은 자기자신, 나머지는 0
-> 그 외는 소수로 간주

구체화
-> n/a=1 나머지는 0
-> a/1=a 나머지는 0

const 소수가될수없어 = (_input) => {
  if(_input <= 1) {return console.log(`입력하신 값은 ${_input}이므로 소수가 될 수 없습니다.`)}
};

const 소수찾기 = (_input) => {
  // console.log(`입력하신 값은 ${_input}`)
  for (let i = 2; i < _input; i++) {
    if (_input % i === 0) {
      return console.log(`${_input}은 소수가 아님`);
    }
  }

  return console.log(`${_input}은 소수`);
}

// 소수가될수없어(0)
// 소수가될수없어(1)

// 소수찾기(2)
소수찾기(3)
소수찾기(4)
소수찾기(5)
소수찾기(6)
소수찾기(9)
소수찾기(11)
소수찾기(17)
소수찾기(18)
소수찾기(100)
*/

/*
소수갯수찾기

목표
-> 1부터 n개까지의 소수를 찾아라

추상화
-> 소수가 아닌 애들은 카운트 안하고, 소수인 애들만 카운터
-> 소수인 애들을 배열(count)에 담아서 count.push(소수인 애) count.length+1로 갯수 확인

구체화
-> 

*/
const 소수갯수찾기 = (n) => {
  /*
  let 나눠질놈 = []
  let 소수그릇 = []
  let 소수가아닌그릇 = []
  for(let i = 1; i <= n; i++){
    let 인수를넣음 = 나눠질놈.push(i)

    for(let j = 1; j <= i; j++){
      if( 인수를넣음 / 1 === n || 인수를넣음 / j === 1 ) {
        // 여기는 소수인게 들어옴
        // 나눠질놈[i] / 1 === n || 나눠질놈[i] / j === 1 이 되면 소수
        // 소수그릇.push(나눠질놈[i])
        // console.log(소수그릇)
        // console.log(인수를넣음)
      } else {
        // 여기는 소수가 아닌 것이 들어옴
        소수가아닌그릇.push(소수가아닌그릇)
        // console.log(소수가아닌그릇)
      }
    }

    // if( n % i === 0 ) {
    //   나눠질놈.push(i)
    // }
  
    
  }

  if( 나눠질놈.length === 2 ) {
    console.log(`${n}는(은) 소수입니다.`)
  }

  console.log(나눠질놈)
  console.log(소수그릇)
  */

  let 나눠질놈 = []
  let 소수그릇 = []
  let 소수가아닌그릇 = []

  for(let i = 1; i <= n; i++){
    let 나눠질놈그릇 = 나눠질놈.push(i)
    for(let j = 1; j <= n; j++){
      if( i % 1 === 0 || i % n === 0 ){
        // 여기는 소수
        소수그릇.push(i)
      } else {
        // 여기는 소수가 아니야
        소수가아닌그릇.push(i)
      }
    }
  }
  console.log(소수그릇)
  console.log(나눠질놈)
  console.log(소수가아닌그릇)

}

// 소수갯수찾기(2)
소수갯수찾기(3)
// 소수갯수찾기(4)
// 소수갯수찾기(5)
// 소수갯수찾기(6)
// 소수갯수찾기(7)
// 소수갯수찾기(8)
// 소수갯수찾기(9)
// 소수갯수찾기(11)





