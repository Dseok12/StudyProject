// 회원가입 로직

// 비밀번호 비교
function _comparePw () {

  var _idInput = document.querySelector('.id_input')
  var _pwInput = document.querySelector('.pw_input')
  var _pwInput2 = document.querySelector('.pw_input2')
  var _pwInputValue2 = document.querySelector('.pw_input2').value
  var _setSession = sessionStorage.getItem('userPw')
  // var _loginBox = document.querySelector('.login_box')
  // var _userBox = document.querySelector('.user_box')
  // var _userName = document.querySelector('.user_name')

  if(_pwInputValue2 === _setSession){
    alert('회원가입에 성공하였습니다.')
    console.log('회원가입에 성공하였습니다.')
    location.assign('/index.html')
    // _loginBox.style.display = 'none'
    // _userBox.style.display = 'block'
    // _userName.innerText = sessionStorage.getItem('userId')
  } else {
    alert('비밀번호를 확인해주세요.')
    console.log('비밀번호를 확인해주세요.')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('userPw')
    _idInput.focus()
    _idInput.value = ''
    _pwInput.value = ''
    _pwInput2.value = ''
  }
}

// 세션스토리지에 저장
function _saveSignUp (e) {
  e.preventDefault();
  var _idInputValue = document.querySelector('.id_input').value
  var _pwInputValue = document.querySelector('.pw_input').value

  sessionStorage.setItem('userId', _idInputValue)
  sessionStorage.setItem('userPw', _pwInputValue)

  _comparePw()

}

// Form 데이터 전송
function _submitSignUp () {
  var _signUpForm = document.querySelector('.sign_up_form')
  _signUpForm.addEventListener('submit', _saveSignUp)
}

// 회원가입 버튼 바인딩
function _bindSignUpBtn () {
  var _bindSignBtn = document.querySelector('.sign_up_btn')
  _bindSignBtn.addEventListener('click', _submitSignUp)
}



//  //회원가입 로직


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


function _signInMain() {
  _bindSignUpBtn()
}

function init() {
  window.addEventListener('DOMContentLoaded', _signInMain)
}














































































