$('.nav ul li').hover(
    function() {
        $('.nav > ul > li > .submenu').stop().slideDown();
    },
    function() {
        $('.nav > ul > li > .submenu').stop().slideUp();
    }
)




// $('.slideList').children('div:gt(0)').hide();
// var current = 0;

// setInterval(function() {
//     var next = (current + 1) % 3;
//     $('.slideList').find('div').eq(current).fadeOut();
//     $('.slideList').find('div').eq(next).fadeIn();
//     current = next;
// }, 2000);



// $('.slideList').children('div:gt(0)').hide();

// var current = 0;
// setInterval(function(){
//     var next = (current + 1) % 3;
//     $('.slideList').find('div').eq(current).fadeOut();
//     $('.slideList').find('div').eq(next).fadeIn();
//     current = next;
// },2000)



$('.slideList').chlidren('div:gt(0)').hide();

var currnet = 0;
setInterval(function() {
    var next = (current + 1) % 3
    $('.slideList').find('div').eq(current).fadeOut();
    $('.slideList').find('div').eq(next).fadeOut();
    current = next;
}, 2000)



var tabBtn = $('.tabMenu ul li');
var tabCont = $('.tabCont > div');

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




































































































































