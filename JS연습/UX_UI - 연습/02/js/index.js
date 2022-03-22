const _get = (target) => {
  return document.querySelector(target)
}


const _openBtn = _get('.open')
const _closeBtn = _get('.close')
const _popup = _get('.popup')

function open() {
  _popup.style.display = "block"
}
function close() {
  _popup.style.display = "none"
}

_openBtn.addEventListener('click', open)
_closeBtn.addEventListener('click', close)


// 토글버튼 만들기
const _toggleBtn = _get('.toggleBtn')
const _toggleTarget = _get('.toggleTarget')


const toggleEvent = () => {
  if(_toggleTarget.className == 'toggleTarget'){
    // _toggleTarget.setAttribute('class', 'toggleTarget on')
    _toggleTarget.className = 'toggleTarget on'
  } else {
    // _toggleTarget.removeAttribute('class', 'toggleTarget')
    _toggleTarget.className = 'toggleTarget'
  }
}

_toggleBtn.addEventListener('click', toggleEvent)









































































