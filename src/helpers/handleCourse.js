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

    document.querySelector(".container .navigation").innerHTML = Navigation(lessonID);
    if (clickedPageTitle !== "404") {
        // set active to selected lesson
        document.querySelectorAll(".submenu--active").forEach((item) => {
            item.classList.remove("submenu--active");
        });
        const selectedItem = document.querySelector(`[data-link='${lessonID}']`);
        selectedItem.parentNode.className = "submenu--active";

        // open submenu after page load
        if (!document.querySelector(".menu__item--open")) {
            document.querySelector(".submenu--active").parentNode.parentNode.classList.add("menu__item--open");
        }
    }

    // load main content after 1500ms to show effect of placeholder
    setTimeout(() => {
        document.querySelector(".container .loading").innerHTML = "";
        document.querySelector(".container .post").innerHTML = mainContent;
        window.Prism.highlightAll();
    }, 1500);
}
