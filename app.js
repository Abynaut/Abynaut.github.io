// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyHeader()};

// Get the header
var header = document.getElementById("nav-box");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
        }
    });
    burger.classList.toggle("toggle");
});

}

navSlide();