const _result = document.getElementById('result'),
      _num = document.querySelector('.number'),
      _oper = document.querySelector('.operator'),
      _ac = document.querySelector('.ac');




const _reset = () => {
  _ac.addEventListener('click', () => {
    _result.innerHTML = 0
  })
}

const _input = (a) => {
  _result.innerHTML += a;
}

const _eval = () => {
  
}


function init () {
  _reset();
  _input();
}
init();


















































































