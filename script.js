const hams = document.querySelector(".ham");
const nav = document.querySelector(".nav-ul");

hams.addEventListener("click", () => {
  nav.classList.toggle("active");
});
