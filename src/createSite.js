import { setHome } from "./home";
import { setAbout } from "./about";
import { setMenu } from "./menu";
import { setContact } from "./contact";

const contentContainer = document.querySelector("#content");
const overlay = document.createElement("div");
const header = document.createElement("header");
const navigation = document.createElement("nav");
const heroText = document.createElement("div");
const footer = document.createElement("footer");

// -------- OVERYLAY CREATION -------- //
function createOverlay() {
  overlay.classList.add("overlay");
  return overlay;
}

// -------- HEADER CREATION -------- //
function createHeader() {
  header.classList.add("header");
  return header;
}

// -------- NAV CREATION -------- //
function createNav() {
  navigation.classList.add("nav");

  const homeButton = document.createElement("button")
  homeButton.innerHTML = "<span>home</span>";
  homeButton.classList.add("nav-buttons");
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active-button")) return;
    setActive(homeButton);
    setHome();
  });

  const aboutButton = document.createElement("button");
  aboutButton.innerHTML = "<span>about</span>";
  aboutButton.classList.add("nav-buttons");
  aboutButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active-button")) return;
    setActive(aboutButton);
    setAbout();

  });

  const menuButton = document.createElement("button");
  menuButton.innerHTML = "<span>menu</span>";
  menuButton.classList.add("nav-buttons");
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active-button")) return;
    setActive(menuButton);
    setMenu();
  });

  const contactButton = document.createElement("button");
  contactButton.innerHTML = "<span>contact</span>";
  contactButton.classList.add("nav-buttons");
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active-button")) return;
    setActive(contactButton);
    setContact();
  });

  navigation.appendChild(homeButton);
  navigation.appendChild(aboutButton);
  navigation.appendChild(menuButton);
  navigation.appendChild(contactButton);

  return navigation;
}

function setActive(button) {
  const buttons = document.querySelectorAll("nav-buttons");
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active-button");
    } button.classList.add("active-button");
  });

  
}

// -------- HERO CREATION -------- //
function createHero() {
  heroText.classList.add("hero-text");
  return heroText;
}

// -------- FOOTER CREATION -------- //
function createFooter() {
  footer.classList.add("footer");
  footer.textContent = "Made with ♥ by Alexandra L.";
  return footer;
}

export function buildSite() {
  contentContainer.appendChild(createOverlay());
  overlay.appendChild(createHeader());
  header.appendChild(createNav());
  overlay.appendChild(createHero());
  overlay.appendChild(createFooter());

  setActive(document.querySelector(".nav-buttons"));
  setHome();
}
