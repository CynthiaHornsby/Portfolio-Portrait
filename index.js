ScrollReveal().reveal('.designer', { delay: 150 });
ScrollReveal().reveal('.developer', { delay: 400 });
ScrollReveal().reveal('.artist', { delay: 900 });
ScrollReveal().reveal('.titles');
ScrollReveal().reveal('.portfoliotitle', { delay: 300 });


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(".card").hover(function(){
  $("img", this).css("opacity", 0.3);
}, function(){
  $("img", this).css("opacity", 1);
});


$(".card").hover(function(){
    $(".imageinfo", this).removeClass("hide");
    }, function(){
    $(".imageinfo", this).addClass("hide");
});

$(".hoverstarimage").hover(function(){
    $(".imageinfotwo").removeClass("hide");
    }, function(){
    $(".imageinfotwo").addClass("hide");
});
