$(document).ready(function(){
  /* 모바일버튼 부분 */
  $('.m_btn').on('click', function(){
    $('.m_btn').toggleClass('on');
    $('.m_menu_box').fadeToggle(300)
  })

  // Contact Tab Menu
  var _tabAnchor = $('.tab_btn li'),
      _contactBox = $('.contact_box');

      _tabAnchor.click(function(e){
        e.preventDefault();

        $(this).find('a').addClass('active');
        $(this).siblings().find('a').removeClass('active');

        _contactBox.hide();

        var _targetIdx = $(this).index();
        _contactBox.eq(_targetIdx).show();
      });
      _tabAnchor.eq(0).trigger('click');
















});