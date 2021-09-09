import fetchInventory from "./components/Sidebar.js";
import getCourse from "./components/Course.js";
import Setting from "./helpers/setting.js";

import "./helpers/handleSidebar.js";
import getLessonContent from "./helpers/handleCourse.js";

(async () => {
  // put inventory content in sidebar
  const res = await fetchInventory();
  document.querySelector(".inventory").innerHTML = res;
  // get first lesson content
  getLessonContent(1, getCourse);
  // get clicked lesson content
  document.querySelectorAll(".menu__item a").forEach((lessonLink) => {
    lessonLink.addEventListener("click", async function (e) {
      e.preventDefault();
      getLessonContent(lessonLink.dataset.link, getCourse);
      window.scrollTo(0, 0);
    });
  });

  const config = await Setting();
  document.body.style.fontFamily = config.fontFamily; // load and set font
})();
