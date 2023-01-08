/* hamburger-menu */
hamburger = document.querySelector(".hamburger-menu");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

/* Color Paleta */
const btn = document.querySelector("#color-paleta");

function random(numero) {
  return Math.floor(Math.random() * (numero + 1));
}

btn.addEventListener("click", () => {
  const rgbCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rgbCol;
});


