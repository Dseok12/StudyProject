// 헬퍼 함수
const _get = (target) => {
  return document.querySelector(target)
}

// 유저 이름을 html에 뿌려준다.
function isUserName () {
  var idInput = _get('.id_input');
  var pwInput = _get('.pw_input');
  var submitBtn = _get('.submitBtn')

  var _userName = _get('.user_name')
  if(localStorage.getItem('id') === null) {
    _userName.innerHTML = '유저가 없습니다.'
  } else {
    _userName.innerHTML = '안녕하세요! ' + localStorage.getItem('id') + '님!'
    idInput.style.display = 'none'
    pwInput.style.display = 'none'
    submitBtn.style.display = 'none'
  }
}

// 로컬스토리지에 있는 모든 데이터 삭제
function _remove () {
  var _remove = _get('.removeBtn')
  _remove.addEventListener('click', () => {
    localStorage.removeItem('id')
    localStorage.removeItem('pw')
    location.reload()
  })
}

// 로컬스토리지로 데이터 보내기
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
    return
  } else if(_pw === '') {
    pwInput.focus()
    alert('비밀번호를 입력하세요.')
    return
  }

  try{
    localStorage.setItem('id', _id)
    localStorage.setItem('pw', _pw)
    location.reload()
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


window.addEventListener('DOMContentLoaded', main)

function main () {
  bindSubmitBtn()
  _remove()
  isUserName()
}




















































































