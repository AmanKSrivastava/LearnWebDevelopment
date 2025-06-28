let container = document.querySelector(".container");
let toggleButton = document.querySelector(".theme-toggle");
let dot = document.querySelector(".dot");

if (localStorage.getItem("theme") === "dark") {
  container.classList.add("dark-theme");
  dot.classList.remove("toggleDotLeft");
  dot.classList.add("toggleDotRight");
}

toggleButton.addEventListener("click", () => {
  const isDark = container.classList.toggle("dark-theme");
  dot.classList.toggle("toggleDotLeft");
  dot.classList.toggle("toggleDotRight");
  // container.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
