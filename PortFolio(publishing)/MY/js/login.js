/*
// 개선 하기 전
// 로그인 로직 

function _login (e) {
  e.preventDefault();

  var _loginId = document.querySelector('.id_input');
  var _loginPw = document.querySelector('.pw_input');
  var _loginIdValue = document.querySelector('.id_input').value;
  var _loginPwValue = document.querySelector('.pw_input').value;

  if(_loginIdValue === sessionStorage.getItem('userId') && _loginPwValue === sessionStorage.getItem('userPw')){
    console.log('로그인을 환영합니다.')
    alert('로그인을 환영합니다.')
    location.assign('/index.html')
  } else {
    console.log('아이디 혹은 비밀번호를 확인해주세요')
    alert('아이디 혹은 비밀번호를 확인해주세요')
    _loginId.value = ''
    _loginPw.value = ''
    _loginId.focus()
  }
}

function _submitLogin () {
  var _loginForm = document.querySelector('.login_form')
  _loginForm.addEventListener('submit', _login)
}

function _bindLoginBtn () {
  var _loginBtn = document.querySelector('.login_btn')
  _loginBtn.addEventListener('click', _submitLogin)
}
// //로그인 로직 

// 로그인 로직 실행
function loginMain () {
  _bindLoginBtn()
}

window.addEventListener('DOMContentLoaded', loginMain)
// //로그인 로직 실행
*/


