var user = {
  id: 'qwe',
  pw: 123
}

var _setLocal = localStorage.setItem('user', JSON.stringify(user))
var _getLocal = JSON.parse(localStorage.getItem('user'))
// var strGetLocal = JSON.stringify(_getLocal)
console.log(_getLocal)
const _get = (target) => {
  return document.querySelector(target)
}


// localStorage 삭제
function _removeLocal(e) {
  e.preventDefault();
  _get('.wellcome_user').style.display= 'none'
  _get('.login_btn').style.display = 'block'
  alert('로그아웃이 되었습니다.')
  localStorage.removeItem('user')
  location.reload();
}

function _bindRemoveLocal() {
  var _loginoutBtn = _get('.loginout_btn')
  
  _loginoutBtn.addEventListener('click', _removeLocal)
}
// //localStorage 삭제

function compare(e) {
  e.preventDefault();

  var _idInput = _get('.id_input');
  var _pwInput = _get('.pw_input');
  var _idValue = _idInput.value;
  var _pwValue = Number(_pwInput.value);

  if(_idValue == _getLocal.id && _pwValue == _getLocal.pw){
    alert(`환영합니다!! ${_getLocal.id}님!`)
    console.log('로그인에 성공하였습니다.')
    _get('.login_btn').style.display = 'none';
    _get('.wellcome_user').innerHTML = `환영합니다. ${_getLocal.id}님`;
  } else {
    alert('로그인에 실패하였습니다!!')
    console.error('로그인에 실패하였습니다.')
    _idInput.focus()
  }

}

function _bindSubmitBtn() {
  var _loginBtn = _get('.login_btn')

  _loginBtn.addEventListener('click', compare)
}



const main = () => {
  _bindSubmitBtn()
  _bindRemoveLocal()
} 

const init = () => {
  window.addEventListener('DOMContentLoaded', main)
}
init();




