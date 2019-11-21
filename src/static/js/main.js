function load() {
  document.addEventListener("scroll", e => {
    if (window.scrollY >= 363) $(".menu")[0].classList.add("colored");
    else $(".menu")[0].classList.remove("colored");
  });
}

function copyToClipboard(id) {
  var textArea = document.createElement("textarea");
  textArea.value = `${window.location.host}#${id}`;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}

function toggleMenu() {
  const menu = $(".menu > section:not(.content) > .topics")[0];
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    if (window.scrollY < 363) $(".menu")[0].classList.remove("colored");
  } else {
    menu.classList.add("active");
    if (window.scrollY < 363) $(".menu")[0].classList.add("colored");
  }
}
