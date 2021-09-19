import fetchInventory from "./components/Sidebar.js";
import getCourse from "./components/Course.js";

import Setting from "./helpers/setting.js";
import getLessonContent from "./helpers/handleCourse.js";

import Navigation from "./components/Navigation.js";

import "./helpers/handleSidebar.js";
import "./components/GoTop.js";

import "./vendor/all.js";

(async () => {
  // put inventory content in sidebar
  const res = await fetchInventory();
  document.querySelector(".inventory").innerHTML = res;

  if (Number(window.location.hash.replace("#", ""))) {
    getLessonContent(Number(window.location.hash.replace("#", "")), getCourse);
  } else {
    // get first lesson content
    getLessonContent(0, getCourse);
    window.location.hash = 0;
  }

  window.addEventListener("hashchange", () => {
    getLessonContent(Number(window.location.hash.replace("#", "")), getCourse);
  });

  // get clicked lesson content
  document.querySelectorAll(".menu__item a").forEach((lessonLink) => {
    lessonLink.addEventListener("click", async function (e) {
      // default collapse sidebar on mobile size
      if (window.innerWidth < 768) {
          document.querySelector(".menu").classList.add("menu__collapse");
      }
      e.preventDefault();
      getLessonContent(lessonLink.dataset.link, getCourse);
      window.location.hash = lessonLink.dataset.link;
      window.scroll({
        top: 0,
        behavior: "smooth", // 👈
      });
    });
  });

  const config = await Setting();
  document.body.style.fontFamily = config.fontFamily; // load and set font
})();
