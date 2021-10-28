/**
 * This function put lesson content and title of lesson in html document
 * @param {number} lessonID
 * @param {Function} callbackFunc
 */

import Navigation from "../components/Navigation.js";
import handleGetCourse from "../handlers/handleGetCourse.js";

export default async function Course(lessonID) {
  const [clickedPageTitle, mainContent] = await handleGetCourse(lessonID);
  document.title = clickedPageTitle;

  document.querySelector(".container .navigation").innerHTML =
    Navigation(lessonID);

  document.querySelector(".container .loading").innerHTML = "";
  document.querySelector(".container .post").innerHTML = mainContent;
  window.Prism.highlightAll();
}
