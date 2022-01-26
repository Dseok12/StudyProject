function btn1 () {
  var x = document.getElementsByTagName('h3')[0];
  // console.log(x)
  x.style.backgroundColor = '#07c';
  x.style.color = '#fff';
  x.style.padding = '10px';
  x.style.fontSize = '18px';
  x.style.fontWeight = 'bold';
}

function dtBtn () {
  for(var i = 0; i<3; i++){
    var x = document.getElementsByTagName('dt');
    x[i].style.color = '#08d1c7';
    x[i].style.marginTop = '15px';
    x[i].style.marginBottom = '8px';
    x[i].style.fontSize = '15px';
    // document.getElementsByTagName('dt')[i].style.color = '#f00';
    // document.getElementsByTagName('dt')[i].style.marginTop = '15px';
    // document.getElementsByTagName('dt')[i].style.marginBottom = '8px';
    // document.getElementsByTagName('dt')[i].style.fontSize = '15px';
  }
}

function spanStrongBtn () {
  var _span = document.getElementsByTagName('span')[0];
  var _strong = document.getElementsByTagName('strong')[0];

  _span.style.color = 'red'
  _strong.style.color = 'blue'
}

function ddBtn () {
  var _dd = document.getElementsByTagName('dd');
  _dd[0].style.marginTop = '15px'
  _dd[0].style.marginBottom = '5px'
  _dd[2].style.marginTop = '15px'
  _dd[2].style.marginBottom = '5px'
  _dd[4].style.marginTop = '15px'
  _dd[4].style.marginBottom = '5px'
}