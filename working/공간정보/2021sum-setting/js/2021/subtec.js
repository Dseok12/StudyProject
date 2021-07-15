$(function() {

    var UI = {
      init: function() {
        this.quickMenuFn();
        this.topBtn();
      },
  
      initialize: function() {
        this.id = {
          target: {
            quick: '#quick',
            stickyTop: '#footer'
          },
          topBtnClass: 'btn_top'
        };
        this.init();
      },
  
      quickMenuFn: function() {
        var quick = $(this.id.target.quick);
        var qTop = parseInt(quick.css('top'));
  
        $(window).scroll(function() {
          var winTop = $(window).scrollTop();
  
          quick.stop().animate({
            top: winTop + qTop
          }, 400);
  
        })
      },
  
      topBtn: function() {
        var btnLocation = $('.' + this.id.topBtnClass);
        var timerId = 0;
  
        $(window).on('scroll', function() {
          var winTop = $(window).scrollTop();
          if (winTop > 200) {
            btnLocation.fadeIn();
            clearInterval(timerId);
            //timerId = setInterval(btnEffet, 2000); <- 버튼 깜빡이는 문장
          } else {
            btnLocation.fadeOut();
            clearInterval(timerId);
          }
  
        });
  
        function btnEffet() {
          btnLocation.fadeTo('300', 0.3).fadeTo('300', 1);
        }
  
        this.scrollTop(btnLocation);
      },
  
      scrollTop: function(eTarget, speed) {
        var speed = speed || null;
        eTarget.on('click', function() {
          $('html, body').animate({
            scrollTop: $("body").offset().top
          }, speed)
        })
      }
  
    };
  
    $(function() {
      UI.initialize();
    })
    // 스크롤 탑 커스터마이징 끝*************************************
  });

//메인 비쥬얼 슬라이드 제이쿼리
$('.visual').slick({
  autoplay: true,
  // vertical:true
  fade:true,
  autoplaySpeed: 3000,//속도 지정
  arrows: false,//좌우버튼 없애기
  pauseOnHover: false,//호버시 일시정지 금지
  swipe: true,//마우스 드래그 금지
  dots: false//페이지버튼
});



// 아코디언메뉴
$(document).ready(function(){
  $(".sub").hide();
  $(".acco > li").click(function(){
      $(".sub").slideUp(400);
      $(this).children(".sub").stop().slideToggle(400);
  });
  $('.ham_menu').click(function(){
    $('.acco').slideToggle();
  });
});