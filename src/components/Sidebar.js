async function fetchInventory() {
  const response = await fetch("../../inventorySample.json");

  let data = await response.json();

  let sidebarTemplate = `<div class="menu__toggle-btn">open/close</div><div class="menu">`;

  sidebarTemplate += data.map(item => {
    return `
    <div class="menu__item">
      <button>
            ${item.season}
      </button>

      <ul>
      ${item.lessons.map(lesson => (`<li><a href=""  data-link="${lesson.id}">${lesson.title}</a></li>`)).join('')}
      </ul>
    </div>
    `
  }).join('')

  sidebarTemplate += `</div>`;
  
  return sidebarTemplate;
}

export default fetchInventory;
