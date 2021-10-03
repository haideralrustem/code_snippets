// Js/ JQuery cheat sheet


// Window resize event
window.addEventListener('resize', function(event) {});

// adding event listenr to multiple 
document.querySelectorAll('.some-class').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
});


// media query, check window width
if(($(window).width() + 17 < 768))


// window height
$('.selector').height("0px");
$('.selector').height();	



// Push footer down 		
document.querySelector('.footer').style.top = (window.screen.height - footer.offsetHeight) + "px";


// add class ,  remove class
 $('.selector').addClass('flash-color');
 $('.axis-choice-box').removeClass('flash-color');


 // has class
$('.selector').hasClass('shown-axis-choice');
document.querySelector().classList.contains('axis-choice-element');


// input value, forms
$('input').val('something');
$('input').val();



// after json_recieved_data = json.dumps(data) in python do:
parsed_data = JSON.parse('{{json_recieved_data|safe}}')



// each iterate iteration
$( ".class" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});


// append add jquery 
$( ".inner" ).append( "<p>Test</p>" );


//set attr attribute 
 $('#input1').attr('name', 'other_amount');


// disabled - enable button - disable button - enable disable
 $('#Button').attr('disabled','disabled');
  $('#Button').removeAttr('disabled');



// get attr attribute
$('#input1').attr('id');











// __________________________ SCROLL ______________________




 // scroll to element
 $(document).ready(function (){
            $('html, body').animate({
                scrollTop: $(".help-text-title").offset().top
            }, 1000); // <-- this number here is duration
    });


// appear on scroll
$(window).scroll( function(){
  var top_of_window = $(window).scrollTop();
  let top_of_object = $('.class').offset().top;

  if(top_of_window >= top_of_object) {

  } else {
    
  }

});
// detailed implementation appear on scroll
$(window).scroll( function(){
    $( ".scroll-in-show" ).each(function( index ) {   
      let top_of_window = $(window).scrollTop();   
      let top_of_object = $(this).offset().top;
      if(top_of_window >= top_of_object*0.8) {
        $(this).css({"opacity": "1"});
      } else {
        $(this).css({"opacity": "0"});
      }
    });


//or
window.addEventListener('scroll', ()=>{});


// scroll element - individual element
$("#txa_textarea").scrollTop(0);



// scroll event - scroll one element based on another - match scrolling
let target = $(".highlight-overlay")[0];
    $("#txa_textarea").scroll(function() {
    target.scrollTop = this.scrollTop;
    });






// ____________________ CSS ___________________




// edit css
$("p").css({"background-color": "yellow", "font-size": "200%"});

// get css/ retrieve css
$("p").css("font-size");

//window width - media query media queries
var mediaQuery320_400 = window.innerWidth >= 320 && window.innerWidth < 400;


// window resize
window.addEventListener('resize', function(event) {
  $('#data-preview-table-onpage').width($('.dtype-change-row').width());
  window.innerWidth;
  if(($(window).width() + window_media_query_offset < 768)) {
            setTimeout(()=>{
              $('.selector-associated-panel').height("0px");
            }, 0);
       }
  else {
    $('.selector-associated-panel').height("auto");
  }
}, true);




// re-route reroute re-direct redirect href
window.location.href = url_redirect;

//or
let a= document.createElement('a');
a.target= '_blank';
a.href= 'https://support.wwf.org.uk/';
a.click();


// or
$(function(){
    $('#info').click(function(){
        window.location = $('#SHOW_HELP').attr('href');
    });
});




