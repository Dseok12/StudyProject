// 헬퍼 함수
const _get = (target) => {
  return document.querySelector(target)
}

function _submit (e) {
  e.preventDefault();
  e.stopPropagation();
  
  var idInput = _get('.id_input');
  var pwInput = _get('.pw_input');
  var _id = idInput.value;
  var _pw = pwInput.value;
  
  if(_id === '' || _pw === ''){
    idInput.focus()
    alert('아이디 혹은 비밀번호를 입력하세요.')
    return
  }

  fetch('http://127.0.0.1:5500/04/index.html')
    .then(console.log('Hi'))
    .catch((err) => console.error(err))

}

function getToken () {
  return localStorage.getItem('token');
}

function inputInfo () {
  var formBox = document.querySelector('#form_box')
  formBox.addEventListener('submit', _submit)
}

function bindSubmitBtn () {
  var _submitBtn = document.querySelector('.submitBtn')
  _submitBtn.addEventListener('click', _submit)
}

function main () {
  bindSubmitBtn()

  var token = getToken();
}

window.addEventListener('DOMContentLoaded', main)





















































































