
const _get = (target) => {
  return document.querySelector(target)
}

sessionStorage.newUser = {
  id: '',
  password: ''
}


const _getNewUser = () => {

}

const compareUser = () => {
  const pwInput = _get('.make_pw');
  const pwInputValue = pwInput.value;
  const comparePw = _get('.make_pw2');
  const comparePwValue = comparePw.value;

  if(pwInputValue !== comparePwValue){
    alert('비밀번호가 다릅니다.')
  }

}

const _setNewUser = () => {
  const idInput = _get('.make_id');
  const pwInput = _get('.make_pw');
  const idInputValue = idInput.value;
  const pwInputValue = pwInput.value;
  const storageId = sessionStorage.setItem('user', JSON.stringify(saveUser.id));
  const storagePw = sessionStorage.setItem('user', JSON.stringify(saveUser.password));
  
  console.log(idInputValue);
  console.log(pwInputValue);

}

const _submit = (e) => {
  e.preventDefault();
  
  sessionStorage.setItem('user', JSON.stringify(saveUser))

}

const submitBtn = () => {
  const formBox = _get('.form_box')

  formBox.addEventListener('submit', _submit)

}

const bindSubmitBtn = () => {
  const _bindBtn = _get('.sub_btn')

  _bindBtn.addEventListener('click', submitBtn)

}

const main = () => {
  bindSubmitBtn();
  _setNewUser();
}

const init = () => {
  window.addEventListener('DOMContentLoaded', main);
  compareUser();
}
init();




















































































