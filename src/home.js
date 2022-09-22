function createHome() {
  const heroText = document.querySelector(".hero-text");
  heroText.classList.remove('content-overlay')
  heroText.innerHTML = "<h1>Valhalla</h1>" + "<h2>pub & eatery</h2>";
  return;
}

export function setHome() {
  const heroText = document.querySelector(".hero-text");
  heroText.textContent = "";
  heroText.appendChild(createHome());
}
