import Course from "../components/Course.js";

const handleSidebarOnWidth = () => {
  if (window.innerWidth > 768) {
    document.querySelector(".container").classList.add("container--with-sb");
  } else {
    document.querySelector(".container").classList.remove("container--with-sb");
  }
};

handleSidebarOnWidth();

// get clicked lesson content
document.querySelectorAll(".menu__item a").forEach((lessonLink) => {
  lessonLink.addEventListener("click", async function (e) {
    // default collapse sidebar on mobile size
    if (window.innerWidth < 768) {
      document.querySelector(".menu").classList.add("menu__collapse");
    }
    e.preventDefault();

    Course(lessonLink.dataset.link);
    window.location.hash = lessonLink.dataset.link;
  });
});