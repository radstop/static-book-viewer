export default function handleActiveCourse(lessonID) {
    document.querySelector(`[data-link="${lessonID}"]`).parentNode.parentNode.parentNode.classList.add("menu__item--open");
    document.querySelector(`[data-link="${lessonID}"]`).parentNode.classList.add("submenu--active");
}