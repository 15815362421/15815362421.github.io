$(document).ready(function(){
    $(".acordeon__head").toggle(function(){
      $(".acordeon__body").css("height",0);},
      function(){
      $("acordeon__body").css("height",'336px');},
    );
  });