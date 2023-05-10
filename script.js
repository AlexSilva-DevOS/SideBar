// Sets the text from customProperties
const htmlgraphicsText = htmlNode.getElementById('htmlgraphics-text');

if (htmlgraphicsText) {
  htmlgraphicsText.textContent = customProperties.text;

  // Change the text color based on the theme
  if (theme.isDark) {
    htmlgraphicsText.style.color = 'green';
  } else {
    htmlgraphicsText.style.color = 'red';
  }
}

const sidebar = htmlGraphics.htmlNode.querySelector(".sidebar");
const menu = htmlGraphics.htmlNode.querySelector(".menu-content");
const menuItems = htmlGraphics.htmlNode.querySelectorAll(".submenu-item");
const subMenuTitles = htmlGraphics.htmlNode.querySelectorAll(".submenu .menu-title");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

