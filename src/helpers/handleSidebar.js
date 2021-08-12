// control hide/show of sidebar items
document.querySelectorAll(".menu__item button").forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    button.parentNode.classList.toggle("menu__item--open");
  });
});
