function product_btn(){
  document.getElementsByClassName('select')[0].setAttribute('class','select off');
  /*class는 여러개가능해서 반드시 순서 지정/기존에 있는 select를 지우면 절대 안됨*/
  document.getElementById('product').removeAttribute('class')
  /*removeAttribute('class')하면 class 전체가 날아가버림 */
}
/*주의점
className호출시에는 여러개 선택가능하므로 몇번째 클래스인지 꼭 지정해줘야 함. 
필요한 곳에는 off를 넣고, 필요없는 곳에서는 off를 빼면서 작업함.*/

function purchase_btn() {
  document.getElementsByTagName('button')[0].setAttribute('class', 'product_btn select_btn')
  var newNode = document.createElement('div');
  // console.log(newNode)
  var newText = "<span>[1+1] 아르간 대용량 클렌징오일을 선택하셨습니다.<br/>구매시 <strong>환불 또는 교환</strong>이 어려우니 다시 한번 더 확인 부탁드립니다.</span>"
  // console.log(newText)
  newNode.innerHTML = newText;
  // console.log(newNode)

  // createElement에서 만든 div에 class="insertText" 를 만들어주는 것
  var newAtt = document.createAttribute('class');
  newAtt.value = "insertText";

  // setAttributeNode는 속성장착
  newNode.setAttributeNode(newAtt)
  // console.log(newNode)

  // 자식 노드를 찾는거를 childNode
  var newTag = document.getElementsByClassName('product_text')[0];
  // console.log(newTag.children)
  // console.log(newTag.childNodes)
  newTag.insertBefore(newNode, newTag.childNodes[8])
  // console.log(newTag.childNodes)

  // 계속 추가하는거 막기

  var removeText = document.getElementsByClassName('product_text')[0];
  removeText.removeChild(removeText.lastChild)
}

function cancel_btn() {
  // removeAttribute('class')를 하면 class 자체를 없애버림
  document.getElementsByTagName('button')[0].setAttribute('class', 'product_btn')

  // 환불 안되는 안내창 지우기
  var removeText = document.getElementsByClassName('product_text')[0];
  removeText.removeChild(removeText.lastChild)

  var cancelNewNode = document.createElement('div')
  var cancelNewText = document.createTextNode('감사합니다. 좀 더 좋은 제품으로 보답하겠습니다.')

  // appendChild 자식요소로 붙힌다.
  cancelNewNode.appendChild(cancelNewText)

  var cancelNewTag = document.getElementsByClassName('product_text')[0]
  // console.log(cancelNewTag.childNodes)
  cancelNewTag.insertBefore(cancelNewNode,cancelNewTag.childNodes[8])

  // 취소버튼에 class 넣어주기
  var cancelNewAtt = document.createAttribute('class');
  cancelNewAtt.value = "cancelText";
  cancelNewNode.setAttributeNode(cancelNewAtt)

}

















































































