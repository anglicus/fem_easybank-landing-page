// index.js

const hamburgerMenuBtn = document.querySelector(".hamburger-button");
const linkMenu = document.querySelector(".header__links");
const menuScreen = document.querySelector(".menu-screen");

hamburgerMenuBtn.addEventListener('click', function() {
  if (hamburgerMenuBtn.classList.contains("open")) {
    hamburgerMenuBtn.classList.remove("open");
    linkMenu.classList.remove("open");
    menuScreen.classList.remove("open");
    linkMenu.classList.add("closed");
    menuScreen.classList.add("closed");
    document.body.style.overflow = "auto";
  } else {
    hamburgerMenuBtn.classList.add("open");
    linkMenu.classList.remove("closed");
    menuScreen.classList.remove("closed");
    linkMenu.classList.add("open");
    menuScreen.classList.add("open");
    document.body.style.overflow = "hidden";
  }
});

// in the rare case that someone might have the mobile
// menu open and then resizes the window, close the menu
// to prevent it getting stuck open on desktop size
window.onresize = function() {
  hamburgerMenuBtn.classList.remove("open");
  linkMenu.classList.remove("open");
  menuScreen.classList.remove("open");
  document.body.style.overflow = "auto";
};