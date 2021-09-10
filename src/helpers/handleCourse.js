/**
 * This function put lesson content and title of lesson in html document
 * @param {number} lessonID
 * @param {Function} callbackFunc
 */
export default async function getLessonContent(lessonID, callbackFunc) {
  const [clickedPageTitle, mainContent] = await callbackFunc(lessonID);
  document.title = clickedPageTitle;

  document.querySelector(".container").innerHTML = mainContent;

  window.Prism.highlightAll();

  document.querySelectorAll(".submenu--active").forEach((item) => {
    item.classList.remove("submenu--active");
  });
  const selectedItem = document.querySelector(`[data-link='${lessonID}']`);
  selectedItem.parentNode.className = "submenu--active";
}
