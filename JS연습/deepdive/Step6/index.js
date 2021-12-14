/*
const x = 1;

function outer () {
  const x = 10;
  const inner = function() {console.log(x);};
  return inner;
}

const innerFunc = outer();
innerFunc();
*/

var gn = '홍길동'
function makePrinter() {
  var on = '김철수'
  function printName(){
    var _in = '김영희'
    console.log(gn)
    console.log(on)
    console.log(_in)
  }
  return printName
}
var print = makePrinter()
print()

/*
  렉시컬 환경 -> 스코프와 식별자를 관리하는 곳.
  렉시컬 환경은 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로
  실행 컨텍스트를 구성하는 컴포넌트다. 실행 컨텍스트 스택이 코드의 실행 순서를 관리한다면
  렉시컬 환경은 스코프와 식별자를 관리한다.
*/
