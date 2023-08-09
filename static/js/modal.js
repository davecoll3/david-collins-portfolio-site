// Get the modal
const modal = document.querySelector("#myModal"); 
const body = document.querySelector("body"); 

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg");
img.onclick = function(){
  modal.style.display = "block";
  modal.classList.toggle("hidden"); 
  
            if (!modal.classList.contains("hidden")) { 
                // Disable scroll 
                body.style.overflow = "hidden"; 
            } else { 
                // Enable scroll 
                body.style.overflow = "auto"; 
            } 
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
