// 회원가입 로직

function _saveSignUp (e) {
  e.preventDefault();
  var _idInputValue = document.querySelector('.id_input').value
  var _pwInputValue = document.querySelector('.pw_input').value
  var _pwInputValue2 = document.querySelector('.pw_input2').value

  sessionStorage.setItem('userId', _idInputValue)
  sessionStorage.setItem('userPw', _pwInputValue)

  if(_pwInputValue2 !== sessionStorage.getItem(JSON.stringify(_pwInputValue))){
    alert('비밀번호를 확인해주세요')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('userPw')
  }

}

function _submitSignUp () {
  var _signUpForm = document.querySelector('.sign_up_form')
  _signUpForm.addEventListener('submit', _saveSignUp)
}

function _bindSignUpBtn () {
  var _bindSignBtn = document.querySelector('.sign_up_btn')
  _bindSignBtn.addEventListener('click', _submitSignUp)
}

function signUpMain() {
  _bindSignUpBtn()
}

window.addEventListener('DOMContentLoaded', signUpMain)





















































































