
// 세로 아코디언 메뉴
$(".nav > ul > li").hover(
    function(){
        $(this).find(".submenu").stop().slideDown();
    },function(){
        $(this).find(".submenu").stop().slideUp();
});


//  팝업
$(".layerPopup").click(function(e){
    e.preventDefault();
    $(".layer").show();
}); 
$(".layer .close").click(function(e){
    e.preventDefault();
    $(".layer").hide();
});


// 텝메뉴
$(document).ready(function(){
    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");
    tabCont.hide().eq(0).show();
    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");
    });
});


// 위아래로 전환되는 슬라이드
var currentIndex = 0;
setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-350)+"px";
    $(".slideList").animate({ top: slidePosition},400);
},3000);

























































