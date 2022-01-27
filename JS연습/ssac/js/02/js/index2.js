function valueText(){
  let frm = document.searchform;
  // console.log(frm)
  if(frm.keyword.value == '검색어를 입력하세요') {
    frm.keyword.value = ''
  }
}

function searchSend () {
  let frm = document.searchform;
  if(frm.keyword.value === '' || frm.keyword.value == '검색어를 입력하세요') {
    alert('검색어를 입력하세요')
    frm.keyword.value = ''
    frm.keyword.focus()
    return
  } 
}