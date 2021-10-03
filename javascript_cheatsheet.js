// JavaScript cheat sheet


// add class - classlist
element.classList.add("my-class");


// add html - innerhtml - DOMString

result = '<ul><li>Hello</li></ul>';
document.getElementById("result").innerHTML = result;





// redirecting
let url_redirect = response['url_redirect'];
          if (url_redirect) {
              window.location.href = url_redirect;

// opne new tab - navigate - href
window.open(
  'https://support.wwf.org.uk/earth_hour/index.php?type=individual',
  '_blank' // <- This is what makes it open in a new window.
);


// reloading
location.reload();



// on change input - onchange
firstNameField.addEventListener("input", function(){});



// on scroll - onscroll event - scroll to element
window.onscroll = function(){
    let windowTop =  window.pageYOffset || document.documentElement.scrollTop; 
    
    let panel = document.querySelector(".feedback-panel");
    let panelTopPosition = panel.getBoundingClientRect().top;

    // document.querySelector(".feedback-panel").style.top = $0.getBoundingClientRect().top + 'px';
        
    if (windowTop >= panelTopPosition + 15) {
      console.log(`Scrolled to element! any Event should fire now!!! `);
            
    }
};



// change css - change style
document.elm.style.border = "3px solid #FF0000"



// Window resize event
window.addEventListener('resize', function(event) {});
// windo media queries - window width 
window.innerWidth >= 320 && window.innerWidth < 400;