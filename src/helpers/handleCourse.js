/**
 * This function put lesson content and title of lesson in html document
 * @param {number} lessonID
 * @param {Function} callbackFunc
 */
export default async function getLessonContent(lessonID, callbackFunc) {
  const [clickedPageTitle, mainContent] = await callbackFunc(lessonID);
  document.title = clickedPageTitle;
  document.querySelector(".container").innerHTML = mainContent;
}
