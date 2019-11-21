function load() {
  document.addEventListener("scroll", e => {
    if (window.scrollY >= 363) $(".menu")[0].classList.add("colored");
    else $(".menu")[0].classList.remove("colored");
  });
}

document.body.onload = load;

function copyToClipboard(id) {
  var textArea = document.createElement("textarea");
  textArea.value = `${window.location.host}#${id}`;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}

function toggleMenu() {
  const topics = $(".menu > section:not(.content) > .topics")[0];
  const menu = $(".menu")[0];
  const scrollY = window.scrollY;
  if (topics.classList.contains("active")) {
    topics.classList.remove("active");
    if (scrollY < 363) {
      menu.classList.remove("colored");
    }
  } else {
    topics.classList.add("active");
    if (scrollY < 363) {
      menu.classList.add("colored");
    }
  }
}
