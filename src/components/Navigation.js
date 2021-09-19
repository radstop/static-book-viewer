export default function Navigation(id) {
  return `
    ${
      id > 0
        ? `<a href="${document.location.origin}/#${
            id - 1
          }" class="navigation__prev">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
    قبلی 
  </a>`
        : ""
    }
    
    ${
      id < 95
        ? `<a href="${document.location.origin}/#${
            id + 1
          }" class="navigation__next">
    بعدی
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
  </a>`
        : ""
    }`;
}
