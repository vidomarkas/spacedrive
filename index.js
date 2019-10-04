const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".navigation__mobile");
const nav = document.querySelector("#navigation");
const navList = document.querySelector("#navigation__list");

hamburger.addEventListener("click", () => {
  console.log("y");
  navList.classList.toggle("navigation__mobile");
  nav.classList.toggle("navigation");
});
