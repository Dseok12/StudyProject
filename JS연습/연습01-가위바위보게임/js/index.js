const me = document.querySelector('#me');
const other = document.querySelector('#other');
const result = document.querySelector('#result');
const 내가낼거 = ["가위", "바위", "보"];
const 컴퓨터가낼거 = ["가위", "바위", "보"];
const 결과 = ["이김", "비김", "졌음"];

// me.innerHTML=prompt("");
// other.innerHTML=컴퓨터가낼거[Math.floor(Math.random()*3)];
// result.innerHTML=결과[0];
// const 입력 = 내가낼거[0];
function 게임(){
  if(내가낼거[Math.floor(Math.random()*3)] == 컴퓨터가낼거[Math.floor(Math.random()*3)]){
    console.log(내가낼거[Math.floor(Math.random()*3)]);
    console.log(컴퓨터가낼거[Math.floor(Math.random()*3)]);
    result.innerHTML = 결과[1];
  }else if(내가낼거[Math.floor(Math.random()*3)] !== 컴퓨터가낼거[Math.floor(Math.random()*3)]){
    console.log(내가낼거[Math.floor(Math.random()*3)]);
    console.log(컴퓨터가낼거[Math.floor(Math.random()*3)]);
    result.innerHTML = '과연 결과는?';
  }
  return;
}
게임();
















