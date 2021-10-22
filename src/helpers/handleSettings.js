const defaults = {
  theme: "dark",
  fontFamily: "sahel",
  fontSize: 16,
}

export function setTheme(themeName) {
  if (themeName !== "default") {
    document.body.classList.add("dark");
    document.querySelector(".card").classList.add("card--" + themeName);
  }
}

export function saveData(data) {
  localStorage.setItem("settings", JSON.stringify(data))
}

export default function Setting() {
  return JSON.parse(localStorage.getItem("settings")) || defaults
}
