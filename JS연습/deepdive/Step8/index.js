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

function _reverse(n) {
  const _text = n;
  const _reverse = _text.split('').reverse().join('');
  console.log(_reverse)
}
_reverse('거꾸로')
