export default function Search() {
    // search component
    const myNode = document.createElement('div');
    myNode.className = 'search'
    myNode.innerHTML = `
        <button class="search__toggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
        </button>

        <div class="search__content">
            <div class="search__items">
                <h3>جستجو</h3>

                <input type="text" />
            </div>
        </div>
`

    console.log(myNode)

    document.querySelector('.container').appendChild(myNode);




    myNode.querySelector('.search__toggle').addEventListener('click', (e) => {
        console.log('sdfsdfsdfsdf')
        const searchContent = document.querySelector('.search__content');

        if (searchContent.classList.contains('search__content--active')) {
            searchContent.classList.remove('search__content--active');
        } else {
            searchContent.classList.add('search__content--active');
        }
    });

}