
var currentNum = 0;
var tabList;
var tabPanelList;

function init(){
  tabList = document.getElementById('tabList').getElementsByTagName('li');
  tabPanelList = document.getElementById('moduleBox').getElementsByTagName('div')
  for(var i = 0; i<tabList.length; i++){
    tabList[i].num=i;
    tabList[i].onmouseover = function () {
      selectMenu(this.name)
    }
  }
}

function selectMenu(num){
  if(currentNum != num) {
    tabList[currentNum].className = '';
    // tabPanelList[currentNum].className = 'tabPanel'
    tabList[currentNum].className = 'selected';
    // tabPanelList[currentNum].className = 'tabPanel active'
    var x = document.getElementById('moduleBox').getElementsByTagName('div')[0];
    x = x.getElementsByTagName('img')[0]
    // console.log(x)
    x.setAttribute('src', '../img/item'+(num+1)+'.png')
    currentNum = num;
  }
}

window.onload = init;


















































































