

function hor () {

}


function hover () {
  const subMenu = document.querySelector('.submenu')
  if(addEventListener('mouseover') == true){
    subMenu.className += 'block'
  }else{
    subMenu.className -= 'block'
  }
}

function hoverBind () {
  const mainMeun = document.querySelector('.menu li');
  mainMeun.addEventListener('mouseover', hover)
}



// 팝업 닫기
function close () {
  const popUp = document.querySelector('.pop');
  popUp.style.transition = 'all 0.3s'
  popUp.style.display = 'none';
}


function bind () {
  const closeBtn = document.querySelector('#close_btn');
  closeBtn.addEventListener('click', close);
}


// 함수 실행기
function init () {
  document.addEventListener('DOMContentLoaded',() => {});
  bind();
  hoverBind();
}
init();






















































































