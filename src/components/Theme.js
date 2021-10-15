export default function setTheme(themeName) {
    if(themeName !== "default") {
        document.body.classList.add("dark");
        document.querySelector(".card").classList.add("card--" + themeName);
    }
}