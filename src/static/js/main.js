function load() {
  $("section .header").click(el => {
    copyToClipboard($(el.target).data("target"));
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
  } else {
    menu.classList.add("active");
  }
}
