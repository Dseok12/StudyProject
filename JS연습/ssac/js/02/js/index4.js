var bannerWith = 697;
var isnum = 0;

function leftBtn () {
  isnum--
  if(isnum < 0){
    isnum = 4;
  }
  animate(isnum)
}

function rightBtn () {
  // console.log(isnum++)
  isnum++
  if(isnum >= 4){
    isnum = 0;
  }
  animate(isnum)
}

function animate (isnum) {
  document.getElementsByClassName('bannerList')[0].style.left = -(bannerWith*isnum) + 'px';
}