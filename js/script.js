const arrowBtn = document.querySelector(".btn-arrow-control");
const control = document.querySelector(".control");
const content = document.querySelector(".content");

arrowBtn.addEventListener("click", () => {
  arrowBtn.classList.toggle("active");
  control.classList.toggle("active");
  content.classList.toggle("menu-close"); 
});

//
