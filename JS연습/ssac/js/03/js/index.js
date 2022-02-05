

var interpark1 = document.getElementById('sel1')
var interpark2 = document.getElementById('sel2')

function interparkradiobtn1() {
  if(interpark1.clasName == 'off'){
    interpark1.clasName = 'on'
    document.getElementById('interparradio_1').checked=false;
  }
  interpark2.clasName = 'off'
  document.getElementById('interparradio_2').checked=false;
}
function interparkradiobtn2() {
  if(interpark2.clasName == 'off'){
    interpark2.clasName = 'on'
    document.getElementById('interparradio_2').checked=false;
  }
  interpark1.clasName = 'off'
  document.getElementById('interparradio_1').checked=false;
}

/*
window.onload = function () {
  var interpark1 = document.getElementById('sel1')
  var interpark2 = document.getElementById('sel2')
  var btn1 = document.getElementById('interparradio_1')
  var btn2 = document.getElementById('interparradio_2')

  btn1.onclick = function () {
    if(interpark1.clasName == 'off'){
      interpark1.clasName = 'on'
      document.getElementById('interparradio_1').checked=true;
    }
    interpark2.clasName = 'off'
    document.getElementById('interparradio_2').checked=false;
  }
  btn2.onclick = function () {
    if(interpark2.clasName == 'off'){
      interpark2.clasName = 'on'
      document.getElementById('interparradio_2').checked=true;
    }
    interpark1.clasName = 'off'
    document.getElementById('interparradio_1').checked=false;
  }
}
*/















































































