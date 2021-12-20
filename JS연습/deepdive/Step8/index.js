/*
3 6 9 게임

const game = (n) => {
  if(n % 3 === 0){
    console.log("짝")
  } else {
    console.log(`${n}`)
  }
}

game(3)
*/


/*
안녕하세요. 저는 김다정입니다. 1

const info = (name) => {
  console.log(`안녕하세요. 저는 ${name}입니다.`)
}

info('김다정')
*/

/*
안녕하세요. 저는 김다정입니다. 2

class Person {
  constructor (name) {
    this.name = name;
  }
  hello (name) {
    console.log(`안녕하세요. 저는 ${name}입니다`)
  }
}

const name = new Person('김다정')
name.hello('김다정')
*/


/*
// 16번.거꾸로 문제

function _reverse(n) {
  const _text = n;
  const _reverse = _text.split('').reverse().join('');
  console.log(_reverse)
}
_reverse('거꾸로')
*/





/*
// 17번. 놀이기구 문제

const play = (n) => {
  if (typeof n === 'number') {
    if(n>=150){
      return "YES!!";
    } else {
      return "NO!!";
    }
  } else {
    return 'error';
  }
}
console.log(play(180))
*/


// 수퍼클래스
class Base {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }
}

// 서브클래스
class Derived extends Base {
  constructor (a, b, c) {
    super(a, b, c);
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3);
console.log(derived)


