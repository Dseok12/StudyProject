// 헬퍼 함수
const _get = (target) => {
  return document.querySelector(target)
}


function makeId() {
  var _id = _get('.id');
  var idValue = _id.value;

  localStorage.setItem('ID', idValue)
}

function makeNick() {
  var _nick = _get('.nickname');
  var nickValue = _nick.value;

  localStorage.setItem('nickname', nickValue);
}

function makePw() {
  var _makePw = _get('.pw01');
  var _makePwValue = _makePw.value;

  localStorage.setItem('password', _makePwValue);
}

function comparePw() {
  var _comparePw = _get('.pw02')
  var _comparePwValue = _comparePw.value
  var compare01 = localStorage.getItem('password')

  if(_comparePwValue !== compare01){
    alert('비밀번호가 다릅니다!!!!')
  }
}

function submitForm() {
  makeId();
  makeNick();
  makePw();
  comparePw();
}

function submitBtn(e) {
  e.preventDefault();
  e.stopPropagation();
  var _submit = _get('.submitBtn')
  
  _submit.addEventListener('click', submitForm)
}

function main() {
  submitBtn()
}

window.addEventListener('DOMContentLoaded', main)



























































