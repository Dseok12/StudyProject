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
