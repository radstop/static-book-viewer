async function fetchInventory() {
  const response = await fetch("../../inventorySample.json");

  let data = await response.json();

  let sidebarTemplate = `<div class="menu__toggle-btn">open/close</div><div class="menu">`;
  data.forEach(chapter => {
    let lessons = chapter.lessons;
    sidebarTemplate += `<div class="menu__item">
      <button>
          ${chapter.season}
      </button>
      <ul>`;

    lessons.forEach(lesson => {
      sidebarTemplate += `<li>
            <a href="${lesson.id}">${lesson.title}</a>
        </li>`;
    });

    sidebarTemplate += `</ul>
      </div>`;
  });

  sidebarTemplate += `</div>`;
  
  return sidebarTemplate;
}

export default fetchInventory;
