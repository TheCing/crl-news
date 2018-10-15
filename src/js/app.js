// JS Goes here - ES6 supported
import $ from 'jquery';
import Color from 'jquery-color';
window.jQuery = $;
window.$ = $;

$(function(){
  console.log("jquery is ready!");
  $(".standings-link").click(function(){
    $(".sub-menu").fadeToggle();
  });
});

$("body").on('click', '#bars', function() {
  if($("#sidenav").css("width")!= "250px") {
    openNav();
  }
  else {
    closeNav();
  }
});

function openNav() {
    $("#sidenav").animate({
      width: '250px'
    }, { duration: 200, queue: false });
    $("html").animate({
      marginLeft: '250px'
    }, { duration: 200, queue: false });
    $(".main").animate({
      backgroundColor: 'rgba(0,0,0,0.6)'
    }, { duration: 200, queue: false });
    window.addEventListener('scroll', noscroll);
    $("#sidenav").fadeIn(1000);
}

function closeNav() {
  $("#sidenav").animate({
    width: '0px'
  }, { duration: 0.5, queue: false });
  $("html").animate({
    marginLeft: '0px'
  }, { duration: 350, queue: false });
  $(".main").animate({
    backgroundColor: 'rgba(0,0,0,0)'
  }, { duration: 400, queue: false });
  window.removeEventListener('scroll', noscroll);
  $("#sidenav").fadeOut(1000);
}

function noscroll() {
  window.scrollTo( 0, 0 );
}
