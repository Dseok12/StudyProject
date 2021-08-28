// 메뉴 1번
$('.menu > li').hover(
    function() {
        $(this).find('.submenu').stop().slideDown(200);
    },
    function() {
        $(this).find('.submenu').stop().slideUp(200);
});




// 세로슬라이드
var currentIndex = 0;
setInterval(function() {
    var a = currentIndex * (-313) + 'px';
    if(currentIndex < 2){
        currentIndex++;
    }else{
        currentIndex = 0;
    }
    $('.slide-img').animate({top: a}, 400);
}, 3000);




// Tab 메뉴
var tabBtn = $('.tab-btn > ul > li');
var tabCont = $('.tab-cont > div');
tabCont.hide().eq(0).show();


tabBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass('active');
    target.addClass('active');
    tabCont.css("display", "none");
    tabCont.eq(index).css("display", "block");
});


// 팝업
$('.close').click(function() {
    $('.popup').hide();
});
$('.open').click(function() {
    $('.popup').show();
})










































































































































