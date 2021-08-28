$('.menu > li').hover(
    function() {
        $(this).find('.submenu').stop().slideDown();
    },
    function() {
        $(this).find('.submenu').stop().slideUp();
    }
)


var slideCount = $('.slideImg').length;
var currentIndex = 0;
setInterval(function() {
    var a = currentIndex * (-260) + 'px';
    if(currentIndex < slideCount - 1){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    $('.slideImg').animate({top: a}, 400);
}, 2000);




var tabBtn = $('.tabMenu ul li');
var tabCont = $('.tabCont div');

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
    e.preventDefault();

    var target = $(this);
    var index = target.index();

    tabBtn.removeClass('active');
    target.addClass('active');

    tabCont.css('display', 'none');
    tabCont.eq(index).css('display', 'block');
})







































































































































