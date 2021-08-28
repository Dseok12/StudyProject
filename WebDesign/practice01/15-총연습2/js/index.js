$('.nav > ul > li').hover(
    function() {
        $('.nav > ul > li > .submenu').stop().slideDown(200);
    },
    function() {
        $('.nav > ul > li > .submenu').stop().slideUp(200);
    }
)

var slideCount = $('.slideImg').length;
var currentIndex = 0;
var slidePosition;

setInterval(function(){

    if(currentIndex < slideCount - 1){
        currentIndex ++;
    } else {
        currentIndex = 0;
    }

    slidePosition = currentIndex * (-1200) + 'px';
    $('.slideList').animate({left: slidePosition}, 400)
}, 2000);


var tabBtn = $('.tabMenu ul li');
var tabCont = $('.tabCont > div');

tabCont.hide().eq(0).show();
tabBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var Index = target.index();
    tabBtn.removeClass('active');
    target.addClass('active');
    tabCont.css('display', 'none');
    tabCont.eq(Index).css('display', 'block');
});









































































































































