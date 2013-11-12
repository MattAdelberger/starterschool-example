$(document).ready(function(){
   
    function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', -(scrolled * 0.4) + 'px');
    };
    
    $(window).scroll(function(e){
    parallax();
    });    
});
