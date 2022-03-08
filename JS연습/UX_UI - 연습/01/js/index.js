$(document).ready(function(){
  var threshold02 = $('.section02').offset().top-300;
  var threshold03 = $('.section03').offset().top-300;
  // var scrollPOS = $(window).scrollTop();

  $(window).scroll(function(){
    // console.log(threshold02)
    if($(window).scrollTop() >= threshold02){
      $('.section02 .text_box').removeClass('off')
      $('.section02 .text_box').addClass('on')
    }else{
      $('.section02 .text_box').addClass('off')
      $('.section02 .text_box').removeClass('on')
    }

    if($(window).scrollTop() >= threshold03){
      $('.section03 .text_box').removeClass('off')
      $('.section03 .text_box').addClass('on')
    }else{
      $('.section03 .text_box').addClass('off')
      $('.section03 .text_box').removeClass('on')
    }
  })
})





















































































