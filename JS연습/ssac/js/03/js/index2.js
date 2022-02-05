var bannerHeight = 200;
var num = 0;

function topbtn() {
  var temp = num + 1;
  if(temp > 3){
    temp = 1;
  }
  banner(temp)
}
function bottombtn() {
  var temp = num - 1;
  if(temp < 1){
    temp = 3;
  }
  banner(temp)
}

function banner(number){
  document.getElementById('photo').style.top = -(bannerHeight*(number-1))+'px';
  num = number;
}




