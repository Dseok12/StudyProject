$(document).ready(function(){

  function getList () {
    $.ajax({
      type: 'GET',
      url: `https://newsapi.org/v2/top-headlines?country=kr&apiKey=fe3a727c3dd3403890cfad606e65b73d`,
      // data: ,
      dataType: JSON,
      success: function(){
        console.log(data)
      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log(textStatus+", "+errorThrown)
      }
    })
  }









});