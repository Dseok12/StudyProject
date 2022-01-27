function selectBox() {
  var listDiv = document.getElementsByClassName('list')[0];
  // console.log(listDiv)

  if(listDiv.className == 'list off'){
    listDiv.className = 'list over'
  }


  var closeBtn = document.getElementsByClassName('on')[0];

  closeBtn.onclick = function(){
    listDiv.className = 'list off'
  }
}












