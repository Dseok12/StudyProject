// 헬퍼 함수
const _get = (target) => {
  return document.querySelector(target)
}


function makeId() {
  var _id = _get('.id');
  var idValue = _id.value;

  try{
    localStorage.setItem('ID', idValue)
  } catch {
    console.error(error)
  }
}

function makeNick() {
  var _nick = _get('.nickname');
  var nickValue = _nick.value;

  try{
    localStorage.setItem('nickname', nickValue);
  } catch {
    console.error(error)
  }
}

function makePw() {
  var _makePw = _get('.pw01');
  var _makePwValue = _makePw.value;

  try{
    localStorage.setItem('password', _makePwValue);
  } catch {
    console.error(error)
  }
}

// 2차 비밀번호 확인하기
function comparePw() {
  var _comparePw = _get('.pw02')
  var _comparePwValue = _comparePw.value
  var compare01 = localStorage.getItem('password')

  try{
    if(_comparePwValue !== compare01){
      alert('비밀번호가 다릅니다!!!!')
    } else {
      location.assign('http://www.ostone.co.kr/')
    }
  } catch {
    console.error(error)
  }
}
// //2차 비밀번호 확인하기

function submitForm() {
  comparePw();
  makeId();
  makeNick();
  makePw();
}

function bindBtn (e) {
  e.preventDefault();
  var _form = _get('#formBox')

  _form.addEventListener('submit', submitForm)
}

function submitBtn() {
  var _submit = _get('.submitBtn')
  
  _submit.addEventListener('click', submitForm)
}

function main() {
  submitBtn()
}

window.addEventListener('DOMContentLoaded', main)



























































