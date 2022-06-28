const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav__links");

menu.addEventListener("click", function(){
     nav.style.display = "block"
})
close.addEventListener("click", function(){
     nav.style.display = "none"
})
