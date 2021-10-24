const defaults = {
  theme: "default",
  fontFamily: "sahel",
  fontSize: 16,
  latinFont: "domine",
}

function setTheme(themeName) {
  if (themeName !== "default") {
    document.body.classList.add("dark");
    document.querySelector(".card").classList.add("card--" + themeName);
  }
}

function saveData(data) {
  localStorage.setItem("settings", JSON.stringify(data))
}

function setToDefaults() {
  localStorage.removeItem("settings")
}

export default function Setting() {
  return JSON.parse(localStorage.getItem("settings")) || defaults
}

export { setTheme, saveData, setToDefaults }