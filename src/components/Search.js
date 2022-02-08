export default function Search() {
    // search component
    const searchNode = `
        <div class="search">

            <button class="search__toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
            </button>

            <div class="search__content">
                <div class="search__items">
                    <h3>جستجو</h3>

                    <div>
                        <input type="text" placeholder="Type keyword here" autocomplete="off"/>
                    </div>

                    <button class="search__submit">Search</button>
                </div>

                <div class="search__results">
                    <ul></ul>
                </div>
            </div>
        </div>`

    return searchNode
}

export async function searchActions() {
    const menuItems = await fetch("../src/resources/inventory.json").then(res => res.json());
    const searchContent = document.querySelector('.search__content');

    document.querySelector('.search__toggle').addEventListener('click', (e) => {
        if (searchContent.classList.contains('search__content--active')) {
            searchContent.classList.remove('search__content--active');
        } else {
            searchContent.classList.add('search__content--active');
        }

        if (document.querySelector('.setting__content--active')) {
            document.querySelector('.setting__content--active').classList.remove('setting__content--active');
        }
    });

    document.querySelector('.search__submit').addEventListener('click', (e) => {
        const searchInput = document.querySelector('.search__items input').value.toLowerCase()
        const renderSearchResults = document.querySelector('.search__results ul');

        if (searchInput) {
            if (searchInput.length > 2) {
                renderSearchResults.innerHTML = ''

                menuItems.map(item => {
                    item.lessons.map(lesson => {
                        if (lesson.title.includes(searchInput)) {
                            renderSearchResults.innerHTML += `
                            <li>
                                <a href="" data-link="${lesson.title}">${lesson.title}</a>
                            </li>
                            `
                        }
                    })
                })
            } else {
                alert('بیشتر از دو حرف وارد کنید')
            }
        } else {
            alert('لطفا عنوان درس را وارد کنید')
        }
    })
}