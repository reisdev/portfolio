function load() {
  console.log("Called Setup");
  window.addEventListener("scroll", function(event) {
    this.console.log("Called scroll");
    const offset = this.scrollY;
    if (offset < 50) {
      $(".menu").removeClass("big");
    } else {
      $(".menu").addClass("big");
    }
  });
}

function menu() {
  document.getElem;
}
