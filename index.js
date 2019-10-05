const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".navigation__mobile");
const nav = document.querySelector("#navigation");
const navList = document.querySelector("#navigation__list");

hamburger.addEventListener("click", () => {
  if (navMobile.style.display === "none") {
    navMobile.style.display = "block";
  } else {
    navMobile.style.display = "none";
  }
});
