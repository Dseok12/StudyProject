// function showIpin () {
//   document.querySelector('#txtContainer span').innerText = "'아이핀인증받기'"
//   document.querySelector('#btnContainer img').src = "./img/ipinOkBtn.jpg"
// }

// function showCellPhone () {
//   document.querySelector('#txtContainer span').innerText = "'휴대폰인증하기'"
//   document.querySelector('#btnContainer img').src = "./img/celPhoneOkBtn.jpg"
// }
function showIpin () {
  var txt = "아이핀 인증으로 실명확인을 진행하려면 아래 <span>'아이핀인증받기'</span>를 클릭해 주세요.";
  document.getElementById('txtContainer').innerHTML = txt;
  var _btn = '<a href=""><img src="./img/ipinOkBtn.jpg" alt="아이핀인증받기"></a>'
  document.getElementById('btnContainer').innerHTML = _btn;
}

function showCellPhone () {
  var txt = '소지하고 계신 핸드폰 번호를 입력해서 인증받는 방법입니다.<br>';
  txt += '아래 <span>"휴대폰인증받기"</span>를 클릭해 주세요.';
  document.getElementById('txtContainer').innerHTML = txt;
  var _btn = '<a href=""><img src="./img/celPhoneOkBtn.jpg" alt="휴대폰인증받기"></a>'
  document.getElementById('btnContainer').innerHTML = _btn;
}