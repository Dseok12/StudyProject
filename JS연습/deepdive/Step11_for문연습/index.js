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

// 2차원
/*
if( i === 1 ){
  for(let j = 2; j <= a; j++) {
    star += '*'
  }
} else if ( i === a ){
  for(let j = 2; j <= a; j++) {
    star += '*'
  }
} else {
  for(let j = 1; j <= a-2; j++) {
    star += '1'
  }
}
*/

const 빈사각형2 = (a) => {
  let star = ''
  for( let i = 1; i <= a; i++ ) {
    star = '*'

    // 2차원
    for(let j = 1; j <= a; j++){
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

// 빈사각형2(3)
// 빈사각형2(4)
// 빈사각형2(5)
빈사각형2(6)
// 빈사각형2(8)




























