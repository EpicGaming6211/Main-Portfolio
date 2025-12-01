// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Theme toggle with localStorage
const body = document.body;
const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const label = document.getElementById("themeLabel");

function setTheme(mode) {
  if (mode === "light") {
    body.classList.add("light");
    if (icon) icon.textContent = "☀️";
    if (label) label.textContent = "Light";
  } else {
    body.classList.remove("light");
    if (icon) icon.textContent = "🌙";
    if (label) label.textContent = "Dark";
  }
  localStorage.setItem("vk-theme", mode);
}

const savedTheme = localStorage.getItem("vk-theme");
if (savedTheme === "light") {
  setTheme("light");
} else {
  setTheme("dark");
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const isLight = body.classList.contains("light");
    setTheme(isLight ? "dark" : "light");
  });
}
