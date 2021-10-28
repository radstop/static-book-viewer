import Course from "./components/Course.js";
import Sidebar from "./components/Sidebar.js";
import Setting, { settingActions } from "./components/Setting.js";
import Search, { searchActions } from "./components/Search.js";
import "./components/GoTop.js";
import "./vendor/all.js";

const currentHash = Number(window.location.hash.replace("#", ""));

(async () => {
  document.querySelector("body").innerHTML +=
    await Sidebar() + await Setting() + await Search();

  settingActions()
  searchActions()

  Course(currentHash);
})();