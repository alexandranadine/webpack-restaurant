function createAbout() {
  const heroText = document.querySelector(".hero-text");
  const about = document.createElement("div");
  const para = document.createElement("p");
  about.classList.add("about-text");
  heroText.classList.add("hero-text", "content-overlay");
  about.innerHTML = "<h1>About Us</h1>" + "<h2>est. 2012</h2>" + "<hr>";
  about.appendChild(para);
  para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis nulla, tempore nisi adipisci voluptatibus libero at officia placeat enim, saepe sed quae doloremque. Consequuntur sed rerum facilis recusandae magnam. Nemo quas veniam aspernatur numquam distinctio. Reiciendis, vitae commodi sunt libero voluptates facere aliquid incidunt rerum optio, exercitationem nesciunt voluptatibus?";

  return about;
}

export function setAbout() {
  const heroText = document.querySelector(".hero-text");
  heroText.textContent = "";
  heroText.appendChild(createAbout());
}
