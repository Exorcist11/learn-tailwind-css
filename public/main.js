const topMenu = document.getElementById("dmc-top-menu");
const toggleTopMenuIcon = document.getElementById("dmc-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle("dmc-top-menu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    if (topMenu.classList.contains("dmc-top-menu-expanded")) {
      topMenu.classList.remove("dmc-top-menu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
