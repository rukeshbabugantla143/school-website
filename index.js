var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}
// Show button when scrolling down
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scroll-up-btn").classList.add("show");
  } else {
    document.querySelector(".scroll-up-btn").classList.remove("show");
  }
}

// Scroll to top when button is clicked
document.querySelector(".scroll-up-btn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


