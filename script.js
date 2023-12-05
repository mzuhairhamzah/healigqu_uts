let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");

  const nav = document.querySelector(".header");
  let lastScrollY = window.scrollY;
  if (window.scrollY <= 0) {
    nav.classList.remove("header-hidden");
  }

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("header--hidden");
    } else {
      nav.classList.remove("header--hidden");
    }

    lastScrollY = window.scrollY;
  });
};
