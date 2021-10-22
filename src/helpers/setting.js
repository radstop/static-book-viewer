export default function Setting() {
  const defaults = {
    theme: "default",
    fontFamily: "Sahel",
    fontSize: "14px",
  }

  return JSON.parse(localStorage.getItem("settings")) || defaults
}
