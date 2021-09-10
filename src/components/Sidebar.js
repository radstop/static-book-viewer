async function fetchInventory() {
  const response = await fetch("../../inventorySample.json");

  let data = await response.json();

  let sidebarTemplate = `

  <div class="menu">
  <span class="menu__toggle-btn">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
    style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
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
            `<li><a href=""  data-link="${lesson.id}">${lesson.title}</a></li>`
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

export default fetchInventory;
