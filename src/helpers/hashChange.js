import getLessonContent from "../helpers/handleCourse.js";

window.addEventListener("hashchange", () => {
  const lessonID = Number(window.location.hash.replace("#", ""));

  getLessonContent(lessonID);

  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  const selectedItem = document.querySelector(`[data-link='${lessonID}']`);

  if (selectedItem) {
    // set active to selected lesson
    document.querySelectorAll(".submenu--active").forEach((item) => {
      item.classList.remove("submenu--active");
    });
    document.querySelectorAll(".menu__item--open").forEach((item) => {
      item.classList.remove("menu__item--open");
    });

    selectedItem.parentNode.className = "submenu--active";

    // open submenu after page load
    if (!document.querySelector(".menu__item--open")) {
      document
        .querySelector(".submenu--active")
        .parentNode.parentNode.classList.add("menu__item--open");
    }
  }
});
