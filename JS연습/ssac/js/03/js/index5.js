
function selectMenu(num) {
  if(currentNum != num) {
    liList[currentNum].className = '';
    liList[num].className = 'on';
    currentNum=num;
  }
}

var currentNum = 0;
var liList;

function init() {
  liList = document.getElementById('serviceList').getElementsByTagName('li')
  for(var i = 0; i < liList.length; i++){
    liList[i].num = i;
    liList[i].onmouseover = function() {
      selectMenu(this.num)
    }
  }
}

window.onload = init;


















