$('.slideList').children('div:gt(0)').hide(0);
var currentIndex = 0;

setInterval(function(){
    var next = (currentIndex + 1) % 3;
    $('.slideList').find('div').eq(currentIndex).fadeOut();
    $('.slideList').find('div').eq(next).fadeIn();
    currentIndex = next;
}, 3000);


/*
$('.slideList').children('div:gt(0)').hide(0);
var currentIndex = 0;

setInterval(function(){
    var next = currentIndex + 1 % 3;
    $('.slideList')find('div').eq(currentIndex).fadeOut();
    $('.slideList')find('div').eq(next).fadeIn();
    currentIndex = next;
}, 3000)










*/









































































































































