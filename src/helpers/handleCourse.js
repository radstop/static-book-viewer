/**
 * This function put lesson content and title of lesson in html document
 * @param {number} lessonID
 * @param {Function} callbackFunc
 */

import Navigation from "../components/Navigation.js";
import getCourse from "../components/Course.js";

export default async function getLessonContent(lessonID) {
  const [clickedPageTitle, mainContent] = await getCourse(lessonID);
  document.title = clickedPageTitle;

  console.log('yes')

  document.querySelector(".container .navigation").innerHTML =
    Navigation(lessonID);

  document.querySelector(".container .loading").innerHTML = "";
  document.querySelector(".container .post").innerHTML = mainContent;
  window.Prism.highlightAll();
}
