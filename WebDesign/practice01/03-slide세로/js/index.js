// var currentIndex = 0;

// setInterval(function(){
//     if(currentIndex < 2){
//         currentIndex++;
//     }else{
//         currentIndex = 0;
//     }
//     var slidePosition = currentIndex * (-312) + "px";
//     $('.slideList').animate({top: slidePosition}, 400);
// }, 3000);


var currentIndex = 0;
setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }else{
        currentIndex = 0;
    }
    var a = currentIndex * (-312) + 'px';
    $('.slideImg').animate({top: a}, 400);
}, 3000);











































































































































