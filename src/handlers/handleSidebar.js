const handleSidebarOnWidth = () => {
  if (window.innerWidth > 768) {
    document.querySelector(".container").classList.add("container--with-sb");
  } else {
    document.querySelector(".container").classList.remove("container--with-sb");
  }
};

handleSidebarOnWidth();

window.addEventListener(
  "load",
  function () {
    // default collapse sidebar on mobile size
    if (window.innerWidth < 768) {
      document.querySelector(".menu").classList.add("menu__collapse");
    }
    // control hide/show of sidebar items
    document.querySelectorAll(".menu__item button").forEach(function (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        button.parentNode.classList.toggle("menu__item--open");

        document.querySelectorAll(".menu__item--open").forEach(function (item) {
          if (item != button.parentNode) {
            item.classList.remove("menu__item--open");
          }
        });
      });
    });

    // control collapse-in and collapse-out sidebar menu
    document
      .querySelector(".menu__toggle-btn")
      .addEventListener("click", function (e) {
        e.preventDefault();

        const menu = document.querySelector(".menu");

        if (menu.classList.contains("menu__collapse")) {
          menu.classList.remove("menu__collapse");
          document
            .querySelector(".container")
            .classList.add("container--with-sb");
        } else {
          menu.classList.add("menu__collapse");
          document
            .querySelector(".container")
            .classList.remove("container--with-sb");
        }
      });
  },
  false
);
