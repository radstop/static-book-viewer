import Course from "../components/Course.js";

window.addEventListener("hashchange", () => {
  const lessonID = Number(window.location.hash.replace("#", ""));
  const selectedItem = document.querySelector(`[data-link='${lessonID}']`);

  Course(lessonID);

  console.log(lessonID);

  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  if (selectedItem) {
    console.log(selectedItem);
    // set active to selected lesson
    document.querySelectorAll(".submenu--active").forEach((item) => {
      item.classList.remove("submenu--active");
    });
    document.querySelectorAll(".menu__item--open").forEach((item) => {
      item.classList.remove("menu__item--open");
    });

    selectedItem.parentNode.className = "submenu--active";
  }
});
