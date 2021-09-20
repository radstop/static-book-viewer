import fetchInventory from "./components/Sidebar.js";
import "./components/GoTop.js";

import Setting from "./helpers/setting.js";
import getLessonContent from "./helpers/handleCourse.js";
import "./helpers/handleSidebar.js";
import "./helpers/hashChange.js";

import "./vendor/all.js";

(async () => {
  // put inventory content in sidebar
  const res = await fetchInventory();
  document.querySelector(".inventory").innerHTML = res;

  const currentHash = Number(window.location.hash.replace("#", ""));

  if (currentHash) {
    getLessonContent(currentHash);
  } else {
    // get first lesson content
    getLessonContent(0);
    window.location.hash = 0;
  }

  // get clicked lesson content
  document.querySelectorAll(".menu__item a").forEach((lessonLink) => {
    lessonLink.addEventListener("click", async function (e) {
      e.preventDefault();
      getLessonContent(lessonLink.dataset.link);
      window.location.hash = lessonLink.dataset.link;
    });
  });

  const config = await Setting();
  document.body.style.fontFamily = config.fontFamily; // load and set font
})();
