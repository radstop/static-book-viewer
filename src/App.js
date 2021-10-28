import Sidebar from "./components/Sidebar.js";
import "./components/GoTop.js";
import getLessonContent from "./handlers/handleCourse.js";
import "./vendor/all.js";
import Setting, { settingActions } from "./components/Setting.js";
import Search, { searchActions } from "./components/Search.js";

(async () => {
  // put inventory content in sidebar

  document.querySelector("body").innerHTML +=
    await Sidebar() + await Setting() + await Search();

  settingActions()
  searchActions()

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
      // default collapse sidebar on mobile size
      if (window.innerWidth < 768) {
        document.querySelector(".menu").classList.add("menu__collapse");
      }
      e.preventDefault();

      getLessonContent(lessonLink.dataset.link);
      window.location.hash = lessonLink.dataset.link;
    });
  });
})();

// Search()


