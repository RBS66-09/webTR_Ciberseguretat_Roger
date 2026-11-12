const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("activo"));
    panels.forEach((p) => p.classList.remove("activo"));
    tab.classList.add("activo");
    document.getElementById(tab.dataset.tab).classList.add("activo");
  });
});
const logo = document.getElementById(".logo-inici");

logo.addEventListener("click", (e) => {
  e.preventDefault();

  tabs.forEach((t) => t.classList.remove("activo"));
  panels.forEach((p) => p.classList.remove("activo"));

  document.getElementById("inici").classList.add("activo");

  document.querySelector('[data-tab="inici"]').classList.add("activo");
});
