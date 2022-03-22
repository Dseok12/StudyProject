// function myFunction(event) {
//   var x = event.deltaX;
//   document.getElementById("demo").innerHTML = x;
//   // console.log(x)
// }

const scrollContainer = document.querySelector('.box');

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});
