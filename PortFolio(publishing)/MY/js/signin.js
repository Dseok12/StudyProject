/*
// 개선하기 전

// 회원가입 로직

// 비밀번호 비교
function _comparePw () {

  var _idInput = document.querySelector('.id_input')
  var _pwInput = document.querySelector('.pw_input')
  var _pwInput2 = document.querySelector('.pw_input2')
  var _pwInputValue2 = document.querySelector('.pw_input2').value
  var _setSession = sessionStorage.getItem('userPw')
  var _loginBox = document.querySelector('.login_box')
  var _userBox = document.querySelector('.user_box')
  var _userName = document.querySelector('.user_name')

  if(_pwInputValue2 === _setSession){
    alert('회원가입에 성공하였습니다.')
    console.log('회원가입에 성공하였습니다.')
    location.assign('/index.html')
    _loginBox.style.display = 'none'
    _userBox.style.display = 'block'
    _userName.innerText = sessionStorage.getItem('userId')
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
function _signInMain() {
  _bindSignUpBtn()
}

function init() {
  window.addEventListener('DOMContentLoaded', _signInMain)
}
init()
*/


// 개선한 후
// 회원가입 로직

// 전체 필드 값 체크
function _comparePw () {

  var _idInput = document.querySelector('.id_input')
  var _pwInput = document.querySelector('.pw_input')
  var _pwInput2 = document.querySelector('.pw_input2')
  var _idInputValue = _idInput.value
  var _pwInputValue = _pwInput.value
  var _pwInput2Value = _pwInput2.value
  var _result = true
  if(_idInputValue === ''){
    alert('아이디를 입력해주세요.')
    console.log('아이디를 입력해주세요.')
    _idInput.focus()
    _idInput.value = ''
    _result = false
  }else if(_pwInputValue === ''){
    alert('비밀번호를 입력해주세요.')
    console.log('비밀번호를 입력해주세요.')
    _pwInput.focus()
    _pwInput.value = ''
    _result = false
  }else if(_pwInput2Value === ''){
    alert('비밀번호 확인을 입력해주세요.')
    console.log('비밀번호 확인을 입력해주세요.')
    _pwInput2.focus()
    _pwInput2.value = ''
    _result = false
  }else if(_pwInputValue !== _pwInput2Value){
    alert('비밀번호가 일치 하지 않습니다.')
    console.log('비밀번호가 일치 하지 않습니다.')
    _pwInput2.focus()
    _result = false
  }
  return _result
}

// 세션스토리지에 저장
function _saveSignUp () {
  var _idInputValue = document.querySelector('.id_input').value
  var _pwInputValue = document.querySelector('.pw_input').value

  sessionStorage.setItem('userId', _idInputValue)
  sessionStorage.setItem('userPw', _pwInputValue)

  alert('회원가입에 성공하였습니다.')
  console.log('회원가입에 성공하였습니다.')
  location.assign('../index.html')
}

// Form 데이터 전송
function _submitSignUp (e) {
  e.preventDefault()
  if(_comparePw()){
    _saveSignUp()
  }
}

// 회원가입 버튼 바인딩
function _bindSignUpBtn () {
  var _bindSignBtn = document.querySelector('.sign_up_btn')
  _bindSignBtn.addEventListener('click', _submitSignUp)
}



//  //회원가입 로직
function _signInMain() {
  _bindSignUpBtn()
}

function init() {
  window.addEventListener('DOMContentLoaded', _signInMain)
}
init()