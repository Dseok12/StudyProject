
function close () {
  const popUp = document.querySelector('.pop');
  popUp.style.transition = 'all 0.3s'
  popUp.style.display = 'none';
}


function bind () {
  const closeBtn = document.querySelector('#close_btn');
  closeBtn.addEventListener('click', close);
}


function init () {
  bind();
}

document.addEventListener('DOMContentLoaded', init);




















































































