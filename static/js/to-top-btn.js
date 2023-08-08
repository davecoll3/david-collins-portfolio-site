const toTopButton = document.getElementById("to-top-btn");

// on scroll event to hide/show back to top button
window.onscroll = function() {
    scrollFunction()
;};

// define the scrollFunction() 
function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

// event listener for back to top button
toTopButton.addEventListener("click", function() {
    topFunction();
});

// define the topFunction() 
function topFunction() {
document.body.scrollTop = 0; // for Safari
document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}