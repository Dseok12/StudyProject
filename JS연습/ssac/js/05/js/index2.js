
var iconlist;
var booklist;
var currentNum = 0;
var menuNum = 0;



function init(){
  // ul에 있는 모든 리스트들 불러오는거
  iconlist = document.getElementById('iconList').getElementsByTagName('li')
  // console.log(iconlist)
  booklist = document.getElementById('bookList').getElementsByTagName('span')
  // console.log(booklist)
  for(var i = 0; i < iconlist.length; i++ ) {
    iconlist[i].getElementsByTagName('a')[0].num = i;
    iconlist[i].getElementsByTagName('a')[0].onmouseover = function(){
      menuNum = this.num;
      selectMenu(menuNum);
    };
  }

  document.getElementById('btn_left').onmouseover = function () {
    this.className = 'on'
  }
  document.getElementById('btn_left').onmouseout= function () {
    this.className = ''
  }
  document.getElementById('btn_right').onmouseover = function () {
    this.className = 'on'
  }
  document.getElementById('btn_right').onmouseout = function () {
    this.className = ''
  }
}

// dot버튼 변경 함수
function selectMenu(num) {
  // console.log(num)
  if(currentNum != num){
    var btn1 = iconlist[currentNum].getElementsByTagName('img')[0]
    btn1.src = btn1.src.replace('_on.gif', '_off.gif')
    booklist[currentNum].className = 'displayNone'

    var btn1 = iconlist[num].getElementsByTagName('img')[0]
    btn1.src = btn1.src.replace('_off.gif', '_on.gif')
    booklist[num].className = ''

    currentNum = num
  }
}

// 이전 버튼
function prevBtn(){
  menuNum--;
  if(menuNum < 0){
    menuNum = iconlist.length - 1;
  }
  selectMenu(menuNum)
}

// 다음 버튼
function nextBtn(){
  menuNum++;
  if(menuNum > iconlist.length - 1){
    menuNum = 0;
  }
  selectMenu(menuNum)
}

window.onload = init;
