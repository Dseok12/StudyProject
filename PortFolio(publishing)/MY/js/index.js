// 개선한 후

// 로그인 체크
function _loginCheck() {
  var _userId = sessionStorage.getItem('userId')
  var _loginBox = document.querySelector('.login_box')
  var _userBox = document.querySelector('.user_box')
  var _userName = document.querySelector('.user_name')
  if(_userId){
    _loginBox.style.display = 'none'
    _userBox.style.display = 'block'
    _userName.innerText = `${sessionStorage.getItem('userId')}님 환영합니다.`
  } else {
    _loginBox.style.display = 'block'
    _userBox.style.display = 'none'
    _userName.innerText = `${sessionStorage.getItem('userId')}님 환영합니다.`
  }
}

// 로그인 체크
function _logout() {
  sessionStorage.removeItem('userId')
  sessionStorage.removeItem('userPw')
  alert('로그아웃 되었습니다.')
  console.log('로그아웃 되었습니다.')
  _loginCheck()
}

// 회원가입 버튼 바인딩
function _bindLogoutBtn () {
  var _bindLogoutBtn = document.querySelector('.logout')
  _bindLogoutBtn.addEventListener('click', _logout)
}

function _aboutMain() {
  _loginCheck()
  _bindLogoutBtn()
}

function init() {
  window.addEventListener('DOMContentLoaded', _aboutMain)
}
init()














































































