const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".navigation__mobile");
const nav = document.querySelector("#navigation");
const navList = document.querySelector("#navigation__list");
const navLinks = document.querySelectorAll(".navigation__mobile__link");

Array.from(navLinks).map(link => {
  link.addEventListener("click", () => {
    navMobile.style.display = "none";
  });
});

hamburger.addEventListener("click", () => {
  if (navMobile.style.display === "block") {
    navMobile.style.display = "none";
  } else {
    navMobile.style.display = "block";
  }
});
