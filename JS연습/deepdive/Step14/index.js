// function add (num1) {
//   return function add2(num2){
//     return num1 + num2
//   }
// }

// const add3 = add(10)
// console.log(add3(5))
// console.log(add3(8))
// console.log(add3(20))

// const x=1;

// function foo() {
//     const y=2;

//     function bar() {
//       const z= 3;
//       console.log(x+y+z);
//     }

//     bar();
console.log(this)

function call () {return this }

const call2 = () => this

console.log(call())
console.log(call2())