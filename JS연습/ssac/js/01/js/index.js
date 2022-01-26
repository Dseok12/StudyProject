/*
function moviPic1 () {
  // console.log(document.getElementById('pic').src)
  document.getElementById('pic').src="./img/movie1.jpg"
}

function moviPic2 () {
  document.getElementById('pic').src="./img/movie2.jpg"
}

function moviPic3 () {
  document.getElementById('pic').src="./img/movie3.jpg"
}


function commentAlign1 () {
  // console.log(document.querySelector('.text').style.textAlign = 'left')
  document.getElementById('comment').align = 'left'
  document.getElementById('comment').style.backgroundColor = 'red'
  document.getElementById('comment').style.color = '#fff'
  // document.querySelector('.text').align = 'left'
  // document.querySelector('.text').style.backgroundColor = 'red'
  // document.querySelector('.text').style.color = '#fff'
}
function commentAlign2 () {
  document.getElementById('comment').align = 'center'
  document.getElementById('comment').style.backgroundColor = 'blue'
  document.getElementById('comment').style.color = 'yellow'
  // document.querySelector('.text').align = 'center'
  // document.querySelector('.text').style.backgroundColor = 'blue'
  // document.querySelector('.text').style.color = '#fff'
}
function commentAlign3 () {
  document.getElementById('comment').align = 'right'
  document.getElementById('comment').style.backgroundColor = 'yellow'
  document.getElementById('comment').style.color = 'black'
  // document.querySelector('.text').align = 'right'
  // document.querySelector('.text').style.backgroundColor = 'yellow'
  // document.querySelector('.text').style.color = 'black'
}
*/


function moviPic (num) {
  // document.getElementById('pic').src=`./img/movie${num}.jpg`;
  document.getElementById('pic').src='./img/movie' + num + '.jpg';
}

function commentAlign (align, background, color) {
  document.getElementById("comment").align = align
  document.getElementById("comment").style.background = background
  document.getElementById('comment').style.color = color
}














































































