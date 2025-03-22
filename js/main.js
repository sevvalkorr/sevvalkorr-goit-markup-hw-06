// main.js
document.addEventListener("DOMContentLoaded", function () {
  //mobil menü işlevselliği
  const burgerButton = document.getElementById("burgerButton");
  const closeMenuButton = document.getElementById("closeMenuButton");
  closeMenuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("is-open");
  });
  const mobileMenu = document.getElementById("mobileMenu");

  burgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("is-open");
  });
});
