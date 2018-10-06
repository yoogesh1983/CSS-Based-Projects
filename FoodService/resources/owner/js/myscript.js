$(document).ready(function() {



/* ------------------------------------------------------- */
/* HANDLE STICKY HEADER SCHENARIO USING WAYPOINT PLUGIN */
/* ------------------------------------------------------- */

$('.js--section-features').waypoint(function(direction) {
   if(direction == "down")
        $('nav').addClass('sticky');
   else
       $('nav').removeClass('sticky');
},{
   offset:'60px;'  // will occur 60px before the actual hit point
});   





/* ------------------------------------------------------- */
/* SCROLL WHILE CLICKING TO THE BUTTON */
/* ------------------------------------------------------- */
    
$('.js--scroll-to-plans').click(function(){
   $('html, body').animate({
       scrollTop: $('.js--section-plans').offset().top
   }, 1000);
});

$('.js--scroll-to-feature').click(function(){
   $('html, body').animate({
       scrollTop: $('.js--section-features').offset().top
   }, 1000);
});






/* ------------------------------------------------------- */
/* SMOOTH SCROLLING */
/* ------------------------------------------------------- */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });






/* ------------------------------------------------------- */
/* COOL FADING ANIMATIONS ON SCROLL */
/* ------------------------------------------------------- */

$('.js--waypoint1').waypoint(function(direction){
    $('.js--waypoint1').addClass('animated fadeIn')
}, {
    offset:'50%'
});


$('.js--waypoint2').waypoint(function(direction){
    $('.js--waypoint2').addClass('animated fadeInUp')
}, {
    offset:'50%'
});


$('.js--waypoint3').waypoint(function(direction){
    $('.js--waypoint3').addClass('animated fadeIn')
}, {
    offset:'50%'
});


$('.js--waypoint4').waypoint(function(direction){
    $('.js--waypoint4').addClass('animated pulse')
}, {
    offset:'50%'
});





/* ------------------------------------------------------- */
/* MOBILE NAVIGATION */
/* ------------------------------------------------------- */

$('.js--mobile-nav-icon').click(function(event){

    var clicked = event.target.className;
    console.log('Clicked class is' + clicked);


    //Open and closes the burger bar
    var nav = $('.js--main-nav');
     if ($(window).width() < 768){
        nav.slideToggle(200);          
    }     


    //show and hide the menus
    var icon = $('.js--mobile-nav-icon i');
    if(icon.hasClass('ion-md-menu')){
        icon.addClass('ion-md-close');
        icon.removeClass('ion-md-menu');
    }
     else {
         icon.addClass('ion-md-menu');
         icon.removeClass('ion-md-close');
     }
});



/* ------------------------------------------------------- */
/* SOLVING BUG WHEN ICON IS CLOSE AND GOES TO DESKTOP VIEW */
/* ------------------------------------------------------- */

$(window).resize(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--mobile-nav-icon i');

    if ($(window).width() > 767){
        nav.css("display", "block");
        icon.addClass('ion-md-menu');
        icon.removeClass('ion-md-close');
    } else {
        nav.css("display", "none");
    }
});






/* ------------------------------------------------------- */
/* GOOGLE MAP */
/* ------------------------------------------------------- */
new GMaps({
    div: '.map',
    lat: -12.043333,
    lng: -77.028333
  });






});

