function createMenu() {
  const heroText = document.querySelector(".hero-text");
  const menuGrid = document.createElement("div");
  heroText.classList.remove("content-overlay");

  heroText.appendChild(menuGrid);
  menuGrid.classList.add("menu-grid");

  function addCard() {
    const menuItems = document.createElement("div");
    menuGrid.appendChild(menuItems);
    menuItems.classList.add("menu-items");
    menuItems.textContent = "Menu Item";
  }

  addCard();  addCard();  addCard();
  addCard();  addCard();  addCard();

  return;
}

export function setMenu() {
  const heroText = document.querySelector(".hero-text");
  heroText.textContent = "";
  heroText.appendChild(createMenu());
}
