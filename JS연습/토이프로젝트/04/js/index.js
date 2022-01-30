// 헬퍼 함수
const _get = (target) => {
  return document.querySelector(target)
}

function _remove () {
  var _remove = _get('.removeBtn')
  _remove.addEventListener('click', () => {
    localStorage.removeItem('id')
    localStorage.removeItem('pw')
  })
}


function _submit (e) {
  e.preventDefault();
  e.stopPropagation();
  
  var idInput = _get('.id_input');
  var pwInput = _get('.pw_input');
  var _id = idInput.value;
  var _pw = pwInput.value;
  
  if(_id === ''){
    idInput.focus()
    alert('아이디를 입력하세요.')
  } else if(_pw === '') {
    pwInput.focus()
    alert('비밀번호를 입력하세요.')
    return
  }

  try{
    localStorage.setItem('id', _id)
    localStorage.setItem('pw', _pw)
    alert("로컬스토리지에 데이터 넣기 성공!!")
    console.log("로컬스토리지에 데이터 넣기 성공!!")
  } catch {
    alert("로컬스토리지에 데이터 넣기 실패")
    console.error(error)
  }


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
  _remove()
  
}

window.addEventListener('DOMContentLoaded', main)





















































































