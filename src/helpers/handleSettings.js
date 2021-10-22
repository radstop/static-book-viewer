export function setTheme(themeName) {
  if (themeName !== "default") {
    document.body.classList.add("dark");
    document.querySelector(".card").classList.add("card--" + themeName);
  }
}

export default function Setting() {
  const defaults = {
    theme: "default",
    fontFamily: "Sahel",
    fontSize: 16,
  }

  return JSON.parse(localStorage.getItem("settings")) || defaults
}
