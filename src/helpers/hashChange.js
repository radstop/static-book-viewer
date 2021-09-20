import getLessonContent from "../helpers/handleCourse.js";

window.addEventListener("hashchange", () => {
  getLessonContent(Number(window.location.hash.replace("#", "")));

  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
