
var currentNum = 0;
var tabList;
var tabPanelList;

function init(){
  tabList = document.getElementById('tabList').getElementsByTagName('li')
  tabPanelList = document.getElementById('menuList').getElementsByTagName('a')
  for(var i = 0; i< tabList.length; i++){
    tabList[i].num = i
    tabPanelList[i].onmouseover = function(){
      selectMenu()
    }
  }
}

function selectMenu(num){
  if(currentNum != num){
    tabList[currentNum].className=''
    tabList[currentNum].getElementsByTagName('span')[0].className = ''
    tabPanelList[currentNum].className=''

    tabList[num].className='on'
    tabList[num].getElementsByTagName('span')[0].className = 'on'
    tabPanelList[num].className='on'
    currentNum = num
  }
}

window.onload = init;
