
var idInput = document.querySelector('.id_input');
var pwInput = document.querySelector('.pw_input');

var _id = idInput.value;
var _pw = pwInput.value;


function submit (e) {
  e.preventDefault();
  var formBox = document.querySelector('#form_box')
  // console.log('hi form')
  formBox.addEventListener('submit', inputInfo)
}

function bindSubmitBtn () {
  var _submitBtn = document.querySelector('.submitBtn')
  _submitBtn.addEventListener('click', submit)
}

function main () {
  bindSubmitBtn()
}

window.addEventListener('DOMContentLoaded', main)





















































































