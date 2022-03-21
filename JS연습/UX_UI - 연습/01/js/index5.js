function myFunction(event) {
  var x = event.deltaX;
  document.getElementById("demo").innerHTML = x;
  console.log(x)
}