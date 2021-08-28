
$(".menu > ul > li").hover(
    function() {
        $(this).find(".submenu").stop().slideDown();
    },

    function() {
        $(this).find(".submenu").stop().slideUp();
    }
)



var tabBtn = $(".tab-menu > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display", "none");
    tabCont.eq(index).css("display", "block");
});











































































































































