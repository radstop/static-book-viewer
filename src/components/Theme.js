export default function setTheme(themeName) {
    if(themeName !== "default") {
        document.querySelector(".card").classList.add("card--" + themeName);
        document.body.classList.add("dark");
    }
}