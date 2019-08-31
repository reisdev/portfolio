function toggleMenu(event){
    const offset = this.scrollY;
    if (offset < 100) {
      $(".menu").addClass("big");
      $(".scroll-to-top").removeClass("visible")
    } else {
      $(".menu").removeClass("big");
      $(".scroll-to-top").addClass("visible")
    }
}

function load() {
  window.addEventListener("scroll",toggleMenu);
  toggleMenu();
}

function menu() {
  document.getElem;
}
