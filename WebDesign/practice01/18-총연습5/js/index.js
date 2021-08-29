


$('.menu li').hover(
    function() {
        $(this).find('.submenu').stop().slideDown();
    },
    function() {
        $(this).find('.submenu').stop().slideUp();
    }
)






var tabBtn = $('.tabMenu ul li');
var tabCont = $('.tabCont div');

tabCont.hide().eq(0).show();
tabBtn.click(function(e) {
    e.preventDefault();

    var target = $(this);
    var index = target.index();

    tabBtn.removeClass('active');
    target.addClass('active');

    tabCont.css('display', 'none');
    tabCont.eq(index).css('display', 'block');
});







var currentIndex = 0;
var slideCount = $('.slideImg').length;

setInterval(function() {
    var a = currentIndex * (-1000) + 'px';
    if(currentIndex < slideCount - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    $('.slideImg').animate({left: a}, 400);
}, 2000)






































































































































