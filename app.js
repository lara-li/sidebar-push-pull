const button = document.querySelector(".navbar__button-control");
const navbar = document.querySelector(".navbar__box-out");
button.addEventListener("click", () => {
  if (navbar.classList.contains("hide")) {
    navbar.classList.remove("hide");
  } else {
    navbar.classList.add("hide");
  }
});
