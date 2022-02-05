var isNum = 0;
var bannerHeight = 400;
var currentNum = 0;
var visual = document.getElementById('visual').getElementsByTagName('ul')[0].getElementsByTagName('li');

function rightbtn() {
  isNum++
  if(isNum > 2){
    isNum = 0;
  }
  banner(isNum)
}

function leftbtn() {
  isNum--
  if(isNum <= 0){
    isNum = 2;
  }
  banner(isNum)
}

function banner(isNum) {
  document.getElementById('visual_b').style.top = -(bannerHeight*isNum) + "px";
  visual[currentNum].className = 'visual_w';
  visual[isNum].className = 'visual_w on';
  currentNum=isNum;
}























