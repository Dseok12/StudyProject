function showPic (whitePic) {
  // getAttribute 해당하는 속성을 가져오는 것
  var source = whitePic.getAttribute('href');
  var photo = document.getElementById('photo');
  // setAttribute -> 해당하는 속성을 바꾸는 것
  photo.setAttribute('src', source);
  /*
  appendChild, firstChild...
  */

  var title = whitePic.getAttribute('title');
  var text = document.getElementById('text');
  // text.innerHTML = title;
  text.firstChild.nodeValue = title;
}