$(function() {
   $(window).scroll(function() {
       if ($(this).scrollTop() > 300) {
           $('.header').css("background",'rgba(0,0,0,0.5)');
           $('.header ul li a').css("color",'#fff');
           
       } else {
        $('.header').css("background",'#fff');
        $('.header ul li a').css("color",'#333');
       }
   });
   

});