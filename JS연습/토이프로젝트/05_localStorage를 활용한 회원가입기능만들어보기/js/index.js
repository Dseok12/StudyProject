// 헬퍼 함수
const _get = (target) => {
  return document.querySelector(target)
}

function removeLocal() {
  localStorage.removeItem('ID')
  localStorage.removeItem('password')
  localStorage.removeItem('nickname')
}

function removeBtn() {
  var _removeBtn = _get('.removeBtn')

  _removeBtn.addEventListener('click', removeLocal)
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
  var _makePw = _get('.pw01');
  var _makePwValue = _makePw.value;

  try{
    if(_comparePwValue !== _makePwValue){
      alert('비밀번호가 다릅니다!!!!')
      return
    } else {
      alert('회원가입을 축하드립니다!!!')
      location.assign('https://www.naver.com/')
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
  removeBtn()
}

window.addEventListener('DOMContentLoaded', main)



























































