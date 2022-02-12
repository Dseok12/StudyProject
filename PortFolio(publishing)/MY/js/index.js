// 회원가입 로직

// 비밀번호 비교
function _comparePw () {

  var _idInput = document.querySelector('.id_input')
  var _pwInput = document.querySelector('.pw_input')
  var _pwInput2 = document.querySelector('.pw_input2')
  var _pwInputValue2 = document.querySelector('.pw_input2').value
  var _setSession = sessionStorage.getItem('userPw')

  if(_pwInputValue2 === _setSession){
    alert('회원가입에 성공하였습니다.')
    console.log('회원가입에 성공하였습니다.')
    location.assign('/index.html')
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

function signUpMain() {
  _bindSignUpBtn()
}

window.addEventListener('DOMContentLoaded', signUpMain)

//  //회원가입 로직



















































































