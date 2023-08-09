// Get the modal
const modal = document.getElementById("myModal");

// Open modal when image is clicked and disable scrolling
const img = document.getElementById("myImg");
img.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}