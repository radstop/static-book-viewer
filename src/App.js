import Course from "./components/Course.js";
import Sidebar from "./components/Sidebar.js";
import Setting, { settingActions } from "./components/Setting.js";
import Search, { searchActions } from "./components/Search.js";
import "./components/GoTop.js";
import "./vendor/all.js";

(async () => {
  // put inventory content in sidebar

  document.querySelector("body").innerHTML +=
    await Sidebar() + await Setting() + await Search();

  settingActions()
  searchActions()

  const currentHash = Number(window.location.hash.replace("#", ""));
  Course(currentHash);






})();

// Search()


