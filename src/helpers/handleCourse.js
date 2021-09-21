/**
 * This function put lesson content and title of lesson in html document
 * @param {number} lessonID
 * @param {Function} callbackFunc
 */

import Navigation from "../components/Navigation.js";
import getCourse from "../components/Course.js";
import setPlaceholder from "../components/Placeholder.js";

export default async function getLessonContent(lessonID) {
  const [clickedPageTitle, mainContent] = await getCourse(lessonID);
  document.title = clickedPageTitle;
  // show placeholder
  setPlaceholder();

  document.querySelector(".container .navigation").innerHTML =
    Navigation(lessonID);

  // load main content after 1500ms to show effect of placeholder
  setTimeout(() => {
    document.querySelector(".container .loading").innerHTML = "";
    document.querySelector(".container .post").innerHTML = mainContent;
    window.Prism.highlightAll();
  }, 0);
}
