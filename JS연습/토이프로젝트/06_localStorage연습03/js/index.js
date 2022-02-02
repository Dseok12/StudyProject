var user = {
  id: 'come',
  pw: 123
}

var _setLocal = localStorage.setItem('user', JSON.stringify(user))
var _getLocal = JSON.parse(localStorage.getItem('user'))











const main = () => {

} 

const init = () => {
  window.addEventListener('DOMContentLoaded', main)
}
init();




