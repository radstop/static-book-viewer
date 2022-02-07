import "../handlers/handleSidebar.js";

export default async function Sidebar() {
  const response = await fetch("../src/resources/inventory.json");

  let data = await response.json();

  let sidebarTemplate = `
  <div class="menu">
  <span class="menu__toggle-btn">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
  viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);
  transform: ;msFilter:;"><path d="M10 15h10v2H10zm-6 4h16v2H4zm6-8h10v2H10zm0-4h10v2H10zM4 3h16v2H4zm0 5v8l4-4z"></path>
  </svg>
  </span>
  `;

  sidebarTemplate += data
    .map((item) => {
      return `
    <div class="menu__item">
      <button>
            ${item.season}
      </button>

      <ul>
      ${item.lessons
          .map(
            (lesson) =>
              `<li><a href="" data-link="${lesson.id}">${lesson.title}</a></li>`
          )
          .join("")}
      </ul>
    </div>
    `;
    })
    .join("");

  sidebarTemplate += `</div>`;

  return sidebarTemplate;
}

export async function sidebarActions() {
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



}