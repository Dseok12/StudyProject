function product_btn(){
  document.getElementsByClassName('select')[0].setAttribute('class','select off');
  /*class는 여러개가능해서 반드시 순서 지정/기존에 있는 select를 지우면 절대 안됨*/
  document.getElementById('product').removeAttribute('class')
  /*removeAttribute('class')하면 class 전체가 날아가버림 */
}
/*주의점
className호출시에는 여러개 선택가능하므로 몇번째 클래스인지 꼭 지정해줘야 함. 
필요한 곳에는 off를 넣고, 필요없는 곳에서는 off를 빼면서 작업함.*/





















































































