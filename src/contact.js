function createContact() {
  const heroText = document.querySelector(".hero-text");
  const contact = document.createElement("div");
  const para = document.createElement("p");
  contact.classList.add("about-text");
  heroText.classList.add("hero-text", "content-overlay");
  contact.innerHTML = "<h1>Contact</h1>" + "<h2>get in touch</h2>" + "<hr>";
  contact.appendChild(para);
  para.textContent = "Located at blahjksdjfhsdjf";

  return contact;
}

export function setContact() {
  const heroText = document.querySelector(".hero-text");
  heroText.textContent = "";
  heroText.appendChild(createContact());
}
