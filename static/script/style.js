function toggleMenu(event) {
  const offset = this.scrollY;
  if (offset < 150) {
    $(".menu")
      .removeClass("floating")
      .addClass("big");
    $(".scroll-to-top").removeClass("visible");
  } else {
    $(".menu")
      .addClass("floating")
      .removeClass("big");
    $(".scroll-to-top").addClass("visible");
  }
}

function load() {
  window.addEventListener("scroll", toggleMenu);
  toggleMenu();
}

function menu() {
  document.getElem;
}
